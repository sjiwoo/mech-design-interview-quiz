/* Sync across devices through a private GitHub Gist.
 *
 * Progress lives in localStorage on each device. When a device is connected
 * (a GitHub token with Gist access, entered once per device), the synced keys
 * are mirrored to one file, neutral-axis-progress.json, in a secret gist on the
 * user's account. Each key carries a timestamp; on every sync the newer copy of
 * each key wins, so changes made on any device flow to the others.
 *
 * Synced: quiz progress and best scores, flashcard stars, known, hidden and
 * user-added cards. Not synced: scratchpads (large) and the calculator.
 * Loaded before app.js, which calls NA_SYNC.touch(key) after every write.
 */
(function () {
  "use strict";

  var API = "https://api.github.com";
  var FILE = "neutral-axis-progress.json";
  var K = { token: "sync:token", gist: "sync:gist", user: "sync:user", stamps: "sync:stamps", last: "sync:last" };
  var SYNCED = /^(progress:|best:|flashcards:(starred|known|removed|custom)$)/;
  var MERGE_SETS = /^flashcards:(starred|known|removed)$/; // object sets: union on first connect

  var status = { state: "off", msg: "", busy: false };
  var listeners = [];
  var pushTimer = null;

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function stamps() { try { return JSON.parse(get(K.stamps)) || {}; } catch (e) { return {}; } }
  function saveStamps(s) { set(K.stamps, JSON.stringify(s)); }
  function connected() { return !!(get(K.token) && get(K.gist)); }

  function setStatus(state, msg) {
    status.state = state; status.msg = msg || "";
    listeners.forEach(function (fn) { try { fn(status); } catch (e) { /* ignore */ } });
  }

  function syncedKeys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SYNCED.test(k)) out.push(k); } } catch (e) { /* ignore */ }
    return out;
  }

  // called by app.js after it writes or removes a key
  function touch(key) {
    if (!SYNCED.test(key)) return;
    var s = stamps(); s[key] = Date.now(); saveStamps(s);
    if (connected()) schedulePush();
  }

  function snapshot() {
    var s = stamps(), items = {};
    syncedKeys().forEach(function (k) { items[k] = { t: s[k] || 1, v: get(k) }; });
    Object.keys(s).forEach(function (k) { if (!(k in items) && SYNCED.test(k)) items[k] = { t: s[k], v: null }; }); // removals
    return { app: "neutral-axis", version: 1, updated: new Date().toISOString(), items: items };
  }

  // newer copy of each key wins; returns { changedLocal, needPush }
  function merge(remote, firstConnect) {
    var s = stamps(), changedLocal = false, needPush = false, ri = (remote && remote.items) || {};
    Object.keys(ri).forEach(function (k) {
      if (!SYNCED.test(k)) return;
      var r = ri[k], lt = s[k] || 0, lv = get(k);
      if (firstConnect && MERGE_SETS.test(k) && lv && r.v) {
        try { // union, so stars made on either device survive the first link-up
          var a = JSON.parse(lv) || {}, b = JSON.parse(r.v) || {};
          Object.keys(b).forEach(function (x) { a[x] = b[x]; });
          var u = JSON.stringify(a);
          if (u !== lv) { set(k, u); changedLocal = true; }
          if (u !== r.v) needPush = true;
          s[k] = Math.max(lt, r.t, Date.now());
          return;
        } catch (e) { /* fall through to newest wins */ }
      }
      if (r.t > lt) {
        if (r.v !== lv) { set(k, r.v); changedLocal = true; }
        s[k] = r.t;
      } else if (lt > r.t && lv !== r.v) needPush = true;
    });
    syncedKeys().forEach(function (k) { if (!(k in ri)) needPush = true; });
    Object.keys(s).forEach(function (k) { if (!(k in ri) && SYNCED.test(k) && get(k) === null) needPush = true; });
    saveStamps(s);
    return { changedLocal: changedLocal, needPush: needPush };
  }

  function gh(path, opts) {
    opts = opts || {};
    var headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    var token = opts.token || get(K.token);
    if (token) headers.Authorization = "Bearer " + token;
    if (opts.body) headers["Content-Type"] = "application/json";
    return fetch(API + path, { method: opts.method || "GET", headers: headers, body: opts.body ? JSON.stringify(opts.body) : undefined, keepalive: !!opts.keepalive, cache: "no-store" })
      .then(function (r) {
        if (r.status === 401) throw new Error("GitHub rejected the token. It may have expired or been revoked.");
        if (r.status === 403 || r.status === 404) {
          return r.json().catch(function () { return {}; }).then(function (j) {
            throw new Error(r.status === 404 ? "The sync file was not found, or the token cannot read gists." : "GitHub refused the request: " + (j.message || r.status) + ". Check the token has Gists read and write access.");
          });
        }
        if (!r.ok) throw new Error("GitHub error " + r.status + ".");
        return r.status === 204 ? null : r.json();
      }, function () { throw new Error("Could not reach GitHub. Check your connection."); });
  }

  function readGist(id) {
    return gh("/gists/" + id).then(function (g) {
      var f = g.files && g.files[FILE];
      if (!f) return null;
      if (f.truncated && f.raw_url) return fetch(f.raw_url, { cache: "no-store" }).then(function (r) { return r.json(); });
      try { return JSON.parse(f.content); } catch (e) { return null; }
    });
  }

  function writeGist(id, data, keepalive) {
    var files = {}; files[FILE] = { content: JSON.stringify(data, null, 1) };
    return gh("/gists/" + id, { method: "PATCH", body: { files: files }, keepalive: keepalive });
  }

  function emitApplied() { try { window.dispatchEvent(new CustomEvent("na-sync-applied")); } catch (e) { /* ignore */ } }

  var running = null;
  function syncNow(firstConnect) {
    if (!connected()) return Promise.resolve();
    if (running) return running;
    clearTimeout(pushTimer);
    setStatus("syncing");
    var id = get(K.gist);
    running = readGist(id).then(function (remote) {
      var m = merge(remote || { items: {} }, firstConnect);
      if (m.changedLocal) emitApplied();
      return (m.needPush || !remote) ? writeGist(id, snapshot()) : null;
    }).then(function () {
      set(K.last, String(Date.now()));
      setStatus("ok");
    }, function (err) {
      setStatus("error", err.message);
    }).then(function () { running = null; });
    return running;
  }

  function schedulePush() {
    clearTimeout(pushTimer);
    setStatus("pending");
    pushTimer = setTimeout(function () { syncNow(false); }, 4000);
  }

  function connect(token) {
    token = (token || "").trim();
    if (!token) return Promise.reject(new Error("Paste a token first."));
    setStatus("syncing");
    var login;
    return gh("/user", { token: token }).then(function (u) {
      login = u && u.login;
      return gh("/gists?per_page=100", { token: token });
    }).then(function (list) {
      var found = (list || []).filter(function (g) { return g.files && g.files[FILE]; })[0];
      if (found) return found.id;
      var s = stamps(); // stamp existing local data so it seeds the new file
      syncedKeys().forEach(function (k) { if (!s[k]) s[k] = Date.now(); });
      saveStamps(s);
      var files = {}; files[FILE] = { content: JSON.stringify(snapshot(), null, 1) };
      return gh("/gists", { method: "POST", token: token, body: { description: "Neutral Axis study progress (synced by the site)", public: false, files: files } })
        .then(function (g) { return g.id; });
    }).then(function (id) {
      set(K.token, token); set(K.gist, id); set(K.user, login || "");
      return syncNow(true);
    }).then(function () {
      if (status.state === "error") throw new Error(status.msg);
    }, function (err) { setStatus("error", err.message); throw err; });
  }

  function disconnect() {
    clearTimeout(pushTimer);
    [K.token, K.gist, K.user, K.last].forEach(function (k) { set(k, null); });
    setStatus("off");
  }

  // pull when the page opens or comes back to the foreground; push before it is hidden
  document.addEventListener("visibilitychange", function () {
    if (!connected()) return;
    if (document.visibilityState === "visible") {
      var last = +get(K.last) || 0;
      if (Date.now() - last > 15000) syncNow(false);
    } else if (pushTimer) {
      clearTimeout(pushTimer); pushTimer = null;
      writeGist(get(K.gist), snapshot(), true).then(function () { set(K.last, String(Date.now())); }, function () { /* retried next time */ });
    }
  });

  if (connected()) { setStatus("ok"); setTimeout(function () { syncNow(false); }, 0); }

  window.NA_SYNC = {
    touch: touch,
    connect: connect,
    disconnect: disconnect,
    syncNow: function () { return syncNow(false); },
    connected: connected,
    status: function () { return status; },
    user: function () { return get(K.user) || ""; },
    gistUrl: function () { var id = get(K.gist); return id ? "https://gist.github.com/" + (get(K.user) || "") + "/" + id : ""; },
    lastSync: function () { return +get(K.last) || 0; },
    onStatus: function (fn) { listeners.push(fn); }
  };
})();
