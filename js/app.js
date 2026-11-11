(function () {
  "use strict";

  var sets = window.QUESTION_SETS || [];
  var app = document.getElementById("app");
  var KEYS = ["A", "B", "C", "D", "E", "F"];
  var state = null;

  /* ---------- helpers ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else if (k.indexOf("on") === 0) node.addEventListener(k.slice(2), attrs[k]);
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function loadBest(id) {
    try { return JSON.parse(localStorage.getItem("best:" + id)); } catch (e) { return null; }
  }

  function saveBest(id, score, total) {
    try {
      var prev = loadBest(id);
      if (!prev || score > prev.score) {
        localStorage.setItem("best:" + id, JSON.stringify({ score: score, total: total }));
      }
    } catch (e) { /* storage unavailable: skip */ }
  }

  /* ---------- saved progress ----------
   * Stored in this browser only (localStorage), per topic:
   *   progress:<set>        { index, answers[] }   full runs only
   *   pad:<set>:<question>  { view, strokes[] }    every question
   */

  function readJSON(key) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch (e) { return null; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }
  function removeKey(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }
  function progressKey(set) { return "progress:" + set.id; }
  function padKey(set, qi) { return "pad:" + set.id + ":" + qi; }

  function loadProgress(set) {
    var p = readJSON(progressKey(set));
    if (!p || !Array.isArray(p.answers)) return null;
    // sections can gain questions later: keep old answers, pad the rest
    var answers = set.questions.map(function (_, i) { return Number.isInteger(p.answers[i]) ? p.answers[i] : null; });
    return { index: Math.min(Math.max(0, p.index | 0), set.questions.length - 1), answers: answers };
  }
  function saveProgress() {
    if (!state || !state.full) return;
    writeJSON(progressKey(state.set), {
      index: state.index,
      answers: state.items.map(function (it) { return it.picked; })
    });
  }
  function clearPads(set, indexes) {
    indexes.forEach(function (qi) { removeKey(padKey(set, qi)); });
  }
  function clearSet(set) {
    removeKey(progressKey(set));
    clearPads(set, set.questions.map(function (_, i) { return i; }));
  }

  function render(children) {
    app.replaceChildren.apply(app, children);
    window.scrollTo(0, 0);
  }

  /* ---------- beam diagram ---------- */

  var NS = "http://www.w3.org/2000/svg";

  function svg(tag, attrs) {
    var node = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  function drawDiagram(spec) {
    var W = 460, H = 170, x0 = 60, x1 = 400, y = 100;
    var root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "diagram", role: "img" });
    var title = svg("title", {});
    title.textContent = describe(spec);
    root.appendChild(title);

    var stroke = { stroke: "currentColor", "stroke-width": 2, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" };
    function add(tag, attrs) {
      var merged = {};
      Object.keys(stroke).forEach(function (k) { merged[k] = stroke[k]; });
      Object.keys(attrs).forEach(function (k) { merged[k] = attrs[k]; });
      var n = svg(tag, merged);
      root.appendChild(n);
      return n;
    }
    function label(x, yy, text, anchor) {
      var t = svg("text", {
        x: x, y: yy, fill: "currentColor", "font-size": 15, "font-weight": 600,
        "text-anchor": anchor || "middle", "font-family": "inherit"
      });
      t.textContent = text;
      root.appendChild(t);
    }
    function wall(x, side) {
      add("line", { x1: x, y1: y - 34, x2: x, y2: y + 34, "stroke-width": 3 });
      for (var i = -30; i <= 30; i += 12) {
        add("line", { x1: x, y1: y + i, x2: x + side * 10, y2: y + i + 8, "stroke-width": 1.5 });
      }
    }
    function pin(x) {
      add("path", { d: "M" + x + " " + (y + 5) + " l-11 18 h22 z" });
      add("line", { x1: x - 16, y1: y + 27, x2: x + 16, y2: y + 27 });
    }
    function roller(x) {
      add("path", { d: "M" + x + " " + (y + 5) + " l-11 16 h22 z" });
      add("circle", { cx: x - 6, cy: y + 25, r: 3.5 });
      add("circle", { cx: x + 6, cy: y + 25, r: 3.5 });
      add("line", { x1: x - 16, y1: y + 31, x2: x + 16, y2: y + 31 });
    }
    function arrow(x, top, bottom) {
      add("line", { x1: x, y1: top, x2: x, y2: bottom });
      add("path", { d: "M" + (x - 5) + " " + (bottom - 8) + " L" + x + " " + bottom + " L" + (x + 5) + " " + (bottom - 8) });
    }

    // beam
    add("rect", { x: x0, y: y - 5, width: x1 - x0, height: 10, rx: 1 });

    // supports
    if (spec.support === "simple") { pin(x0); roller(x1); }
    if (spec.support === "cantilever") { wall(x0, -1); }
    if (spec.support === "fixed") { wall(x0, -1); wall(x1, 1); }
    if (spec.support === "propped") { wall(x0, -1); roller(x1); }

    // loads
    (spec.loads || []).forEach(function (ld) {
      if (ld.kind === "point") {
        var px = x0 + ld.x * (x1 - x0);
        arrow(px, y - 60, y - 8);
        label(px, y - 68, ld.label);
      } else if (ld.kind === "udl") {
        var a = x0 + ld.from * (x1 - x0), b = x0 + ld.to * (x1 - x0);
        var n = Math.max(2, Math.round((b - a) / 34));
        add("line", { x1: a, y1: y - 42, x2: b, y2: y - 42 });
        for (var i = 0; i <= n; i++) arrow(a + (i * (b - a)) / n, y - 42, y - 8);
        label((a + b) / 2, y - 52, ld.label);
      }
    });

    // span dimension
    add("line", { x1: x0, y1: y + 52, x2: x1, y2: y + 52, "stroke-width": 1 });
    add("line", { x1: x0, y1: y + 46, x2: x0, y2: y + 58, "stroke-width": 1 });
    add("line", { x1: x1, y1: y + 46, x2: x1, y2: y + 58, "stroke-width": 1 });
    label((x0 + x1) / 2, y + 68, "L");

    return root;
  }


  /* ---------- shear and moment plots (simply supported beams) ---------- */

  function beamCurves(spec) {
    // Unit loads on a unit span: shape only. Labels come from the question data.
    var pts = [], udls = [];
    (spec.loads || []).forEach(function (ld) {
      if (ld.kind === "point") pts.push(ld.x); else udls.push(ld);
    });
    var R1 = 0;
    pts.forEach(function (a) { R1 += 1 - a; });
    udls.forEach(function (u) { var len = u.to - u.from; R1 += len * (1 - (u.from + u.to) / 2); });
    function at(x) {
      var V = R1, M = R1 * x;
      pts.forEach(function (a) { if (a < x) { V -= 1; M -= x - a; } });
      udls.forEach(function (u) {
        var c = Math.min(Math.max(x, u.from), u.to), len = c - u.from;
        if (len > 0) { V -= len; M -= len * (x - (u.from + c) / 2); }
      });
      return { V: V, M: M };
    }
    var xs = [];
    for (var i = 0; i <= 200; i++) xs.push(i / 200);
    pts.forEach(function (a) { xs.push(Math.max(0, a - 1e-6), Math.min(1, a + 1e-6)); });
    xs.sort(function (a, b) { return a - b; });
    return xs.map(function (x) { var r = at(x); return { x: x, V: r.V, M: r.M }; });
  }

  function drawPlots(spec, notes) {
    var W = 460, x0 = 60, x1 = 400, H = 370;
    var root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "diagram plots", role: "img" });
    var t = svg("title", {});
    t.textContent = "Shear force and bending moment diagrams for " + describe(spec).toLowerCase();
    root.appendChild(t);

    var data = beamCurves(spec);
    var maxV = 0, maxM = 0;
    data.forEach(function (d) { maxV = Math.max(maxV, Math.abs(d.V)); maxM = Math.max(maxM, Math.abs(d.M)); });
    function X(x) { return x0 + x * (x1 - x0); }

    function add(tag, attrs) {
      var base = { stroke: "currentColor", "stroke-width": 1.5, fill: "none", "stroke-linejoin": "round" };
      Object.keys(attrs).forEach(function (k) { base[k] = attrs[k]; });
      var n = svg(tag, base); root.appendChild(n); return n;
    }
    function text(x, y, str, opts) {
      var o = { x: x, y: y, fill: "currentColor", "font-size": 14, "font-family": "inherit", "text-anchor": "middle" };
      Object.keys(opts || {}).forEach(function (k) { o[k] = opts[k]; });
      var n = svg("text", o); n.textContent = str; root.appendChild(n);
    }

    function panel(title, top, key, max, notesList, flip) {
      var base = top + 88, amp = 42;
      text(x0 - 4, top + 12, title, { "text-anchor": "start", "font-weight": 700 });
      add("line", { x1: x0, y1: base, x2: x1, y2: base, "stroke-width": 1, opacity: 0.6 });
      var pathPts = data.map(function (d) { return X(d.x).toFixed(1) + "," + (base - (d[key] / max) * amp).toFixed(1); });
      var poly = pathPts.join(" ");
      add("polygon", {
        points: X(0) + "," + base + " " + poly + " " + X(1) + "," + base,
        fill: "currentColor", "fill-opacity": 0.12, stroke: "none"
      });
      add("polyline", { points: poly, style: "stroke: var(--accent, #c8102e)", "stroke-width": 2.5 });
      add("line", { x1: x0, y1: base - amp - 6, x2: x0, y2: base + amp + 6, "stroke-width": 1, opacity: 0.4 });
      add("line", { x1: x1, y1: base - amp - 6, x2: x1, y2: base + amp + 6, "stroke-width": 1, opacity: 0.4 });
      (notesList || []).forEach(function (n) {
        var v = 0, best = 1e9;
        data.forEach(function (d) { var dd = Math.abs(d.x - n.x); if (dd < best) { best = dd; v = d[key]; } });
        var y = base - (v / max) * amp;
        var up = v >= 0;
        text(X(n.x), up ? y - 8 : y + 18, n.text, { "font-weight": 600 });
      });
      text(x0, base + amp + 20, "0", { "font-size": 12, opacity: 0.7 });
      text(x1, base + amp + 20, "L", { "font-size": 12, opacity: 0.7 });
    }

    panel("Shear force V", 0, "V", maxV, notes.shear);
    panel("Bending moment M (sagging +)", 185, "M", maxM, notes.moment);
    return root;
  }


  /* ---------- cross-section diagram ---------- */

  function drawSection(sec) {
    var W = 460, H = 230, pad = 46;
    // model bounds (y up)
    var xs = [], ys = [];
    function addBox(x0, y0, x1, y1) { xs.push(x0, x1); ys.push(y0, y1); }
    (sec.parts || []).concat(sec.alt || []).forEach(function (r) { addBox(r[0], r[1], r[0] + r[2], r[1] + r[3]); });
    (sec.circles || []).forEach(function (c) { addBox(c[0] - c[2], c[1] - c[2], c[0] + c[2], c[1] + c[2]); });
    var mx0 = Math.min.apply(null, xs), mx1 = Math.max.apply(null, xs);
    var my0 = Math.min.apply(null, ys), my1 = Math.max.apply(null, ys);
    var k = Math.min((W - 2 * pad - 60) / (mx1 - mx0), (H - 2 * pad) / (my1 - my0));
    var ox = (W - 60 - (mx1 - mx0) * k) / 2 - mx0 * k;
    var oy = (H + (my1 - my0) * k) / 2 + my0 * k;
    function X(x) { return ox + x * k; }
    function Y(y) { return oy - y * k; }

    var root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "diagram", role: "img" });
    var t = svg("title", {}); t.textContent = "Cross-section"; root.appendChild(t);
    function add(tag, attrs) { var n = svg(tag, attrs); root.appendChild(n); return n; }
    var solid = { fill: "currentColor", "fill-opacity": 0.16, stroke: "currentColor", "stroke-width": 2 };
    function merge(a, b) { var o = {}; [a, b].forEach(function (m) { Object.keys(m).forEach(function (q) { o[q] = m[q]; }); }); return o; }

    (sec.parts || []).forEach(function (r) {
      add("rect", merge(solid, { x: X(r[0]), y: Y(r[1] + r[3]), width: r[2] * k, height: r[3] * k }));
    });
    (sec.alt || []).forEach(function (r) {
      add("rect", merge(solid, { x: X(r[0]), y: Y(r[1] + r[3]), width: r[2] * k, height: r[3] * k, "fill-opacity": 0.55 }));
    });
    (sec.circles || []).forEach(function (c) {
      add("circle", merge(solid, { cx: X(c[0]), cy: Y(c[1]), r: c[2] * k }));
    });
    var hole = { fill: "var(--surface)", stroke: "currentColor", "stroke-width": 2 };
    (sec.cuts || []).forEach(function (r) {
      add("rect", merge(hole, { x: X(r[0]), y: Y(r[1] + r[3]), width: r[2] * k, height: r[3] * k }));
    });
    (sec.holes || []).forEach(function (c) {
      add("circle", merge(hole, { cx: X(c[0]), cy: Y(c[1]), r: c[2] * k }));
    });
    if (sec.axis) {
      var ay = Y(sec.axis.y);
      add("line", { x1: X(mx0) - 22, y1: ay, x2: X(mx1) + 6, y2: ay, stroke: "var(--accent, #c8102e)", "stroke-width": 1.8, "stroke-dasharray": "7 5" });
      var at = add("text", { x: X(mx0) - 26, y: ay + 5, fill: "var(--accent, #c8102e)", "font-size": 14, "font-weight": 700, "text-anchor": "end", "font-family": "inherit" });
      at.textContent = sec.axis.label || "";
    }
    (sec.labels || []).forEach(function (l) {
      var ly = Y(l.y) + 5;
      if (sec.axis && l.anchor === "start" && Math.abs(Y(l.y) - Y(sec.axis.y)) < 12) ly = Y(sec.axis.y) - 10;
      var lx = X(l.x) + (l.anchor === "start" ? 4 : 0);
      var n = add("text", { x: lx, y: ly, fill: "currentColor", "font-size": 14, "font-weight": 600, "text-anchor": l.anchor || "middle", "font-family": "inherit" });
      n.textContent = l.text;
    });
    return root;
  }


  /* ---------- general sketch renderer ----------
   * q.sketch = { h: height, items: [...] } on a 460-wide canvas (y down).
   *   ["l",x1,y1,x2,y2,o]  line        ["a",x1,y1,x2,y2,o]  arrow, head at x2,y2
   *   ["r",x,y,w,h,o]      rect        ["c",cx,cy,r,o]      circle
   *   ["p",[[x,y],..],o]   polyline    ["t",x,y,text,o]     text
   *   ["h",x1,y1,x2,y2,side] hatched ground line   ["s",x1,y1,x2,y2,n] spring
   * o: d dashed, a accent, m muted, w width, f fill (1 light, 2 mid, "s" surface),
   *    n no stroke, close polygon, s font size, an anchor, b bold
   */
  function drawSketch(spec) {
    var W = 460, H = spec.h || 180;
    var root = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "diagram sketch", role: "img" });
    var t = svg("title", {}); t.textContent = spec.alt || "Diagram for this question"; root.appendChild(t);
    function col(o) { return o.a ? "var(--accent, #c8102e)" : "currentColor"; }
    function base(o) {
      var at = { stroke: col(o), "stroke-width": o.w || 2, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" };
      if (o.d) at["stroke-dasharray"] = "6 5";
      if (o.m) at.opacity = 0.5;
      if (o.f === "s") at.fill = "var(--surface)";
      else if (o.f) { at.fill = col(o); at["fill-opacity"] = o.f === 2 ? 0.4 : 0.14; }
      if (o.n) at.stroke = "none";
      return at;
    }
    function add(tag, at) { var n = svg(tag, at); root.appendChild(n); return n; }
    function ext(a, b) { Object.keys(b).forEach(function (k) { a[k] = b[k]; }); return a; }
    (spec.items || []).forEach(function (it) {
      var k = it[0], o;
      if (k === "l" || k === "a") {
        o = it[5] || {};
        add("line", ext(base(o), { x1: it[1], y1: it[2], x2: it[3], y2: it[4] }));
        if (k === "a") {
          var ang = Math.atan2(it[4] - it[2], it[3] - it[1]), hs = 8;
          var p1 = [it[3] - hs * Math.cos(ang - 0.45), it[4] - hs * Math.sin(ang - 0.45)];
          var p2 = [it[3] - hs * Math.cos(ang + 0.45), it[4] - hs * Math.sin(ang + 0.45)];
          var ho = ext(base(o), { points: p1.join(",") + " " + it[3] + "," + it[4] + " " + p2.join(",") });
          delete ho["stroke-dasharray"];
          add("polyline", ho);
        }
      } else if (k === "r") {
        o = it[5] || {};
        add("rect", ext(base(o), { x: it[1], y: it[2], width: it[3], height: it[4], rx: o.rx || 0 }));
      } else if (k === "c") {
        o = it[4] || {};
        add("circle", ext(base(o), { cx: it[1], cy: it[2], r: it[3] }));
      } else if (k === "p") {
        o = it[2] || {};
        add(o.close ? "polygon" : "polyline", ext(base(o), { points: it[1].map(function (q) { return q[0] + "," + q[1]; }).join(" ") }));
      } else if (k === "t") {
        o = it[4] || {};
        var n = add("text", { x: it[1], y: it[2], fill: col(o), "font-size": o.s || 14, "font-weight": o.b === 0 ? 400 : 600,
          "text-anchor": o.an || "middle", "font-family": "inherit", opacity: o.m ? 0.6 : 1 });
        n.textContent = it[3];
      } else if (k === "h") {
        var dx = it[3] - it[1], dy = it[4] - it[2], len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
        var side = it[5] || 1, nx = -uy * side, ny = ux * side;
        add("line", ext(base({ w: 2.5 }), { x1: it[1], y1: it[2], x2: it[3], y2: it[4] }));
        for (var d = 4; d < len; d += 10) {
          add("line", ext(base({ w: 1.2 }), { x1: it[1] + ux * d, y1: it[2] + uy * d, x2: it[1] + ux * (d - 6) + nx * 8, y2: it[2] + uy * (d - 6) + ny * 8 }));
        }
      } else if (k === "s") {
        var sx = it[3] - it[1], sy = it[4] - it[2], sl = Math.hypot(sx, sy), ax = sx / sl, ay = sy / sl, px = -ay, py = ax;
        var coils = it[5] || 6, lead = Math.min(12, sl * 0.15), amp = 8, pts = [[it[1], it[2]], [it[1] + ax * lead, it[2] + ay * lead]];
        for (var i = 0; i < coils * 2; i++) {
          var f = lead + ((sl - 2 * lead) * (i + 0.5)) / (coils * 2), sgn = i % 2 ? -1 : 1;
          pts.push([it[1] + ax * f + px * amp * sgn, it[2] + ay * f + py * amp * sgn]);
        }
        pts.push([it[3] - ax * lead, it[4] - ay * lead], [it[3], it[4]]);
        add("polyline", ext(base({}), { points: pts.map(function (q) { return q[0].toFixed(1) + "," + q[1].toFixed(1); }).join(" ") }));
      }
    });
    return root;
  }

  function describe(spec) {
    var names = {
      simple: "Simply supported beam",
      cantilever: "Cantilever beam fixed at the left",
      fixed: "Beam fixed at both ends",
      propped: "Beam fixed at the left with a roller at the right"
    };
    var loads = (spec.loads || []).map(function (ld) {
      return ld.kind === "udl" ? "uniform load " + ld.label : "point load " + ld.label;
    });
    return names[spec.support] + (loads.length ? " with " + loads.join(" and ") : "");
  }


  /* ---------- scratchpad (infinite canvas) ----------
   * One pointer draws. Two pointers pan and zoom (pinch). Mouse wheel pans,
   * ctrl+wheel (or trackpad pinch) zooms. Strokes are stored as vectors in
   * world coordinates, so the page is unbounded and stays sharp when zoomed.
   */

  function makePad(saved, onSave) {
    var canvas = el("canvas", { class: "pad-canvas", "aria-label": "Scratchpad: one finger draws, two fingers pan and zoom" });
    var layer = document.createElement("canvas");
    var ctx = null, lctx = null;
    try { ctx = canvas.getContext("2d"); lctx = layer.getContext("2d"); } catch (e) { ctx = lctx = null; }

    var strokes = [], current = null;
    var view = { x: 0, y: 0, s: 1 };
    var status = el("span", { class: "pad-status" });

    // restore a saved sketch
    if (saved && Array.isArray(saved.strokes)) {
      saved.strokes.forEach(function (r) {
        if (!r || !Array.isArray(r.p) || r.p.length < 2) return;
        var st = { tool: r.t === "e" ? "eraser" : "pen", w: r.w || 3, pts: [] };
        for (var i = 0; i + 1 < r.p.length; i += 2) { var pt = { x: r.p[i], y: r.p[i + 1] }; st.pts.push(pt); }
        st.pts.forEach(function (pt) { growBox(st, pt); });
        strokes.push(st);
      });
      if (saved.view && isFinite(saved.view.x) && isFinite(saved.view.y) && saved.view.s > 0) {
        view = { x: saved.view.x, y: saved.view.y, s: saved.view.s };
      }
    }
    function growBox(st, p) {
      if (!st.box) st.box = { x0: p.x, y0: p.y, x1: p.x, y1: p.y };
      else {
        if (p.x < st.box.x0) st.box.x0 = p.x; if (p.x > st.box.x1) st.box.x1 = p.x;
        if (p.y < st.box.y0) st.box.y0 = p.y; if (p.y > st.box.y1) st.box.y1 = p.y;
      }
    }

    var saveTimer = null;
    function num(v) { return parseFloat(v.toPrecision(12)); }
    function persist() {
      if (!onSave) return;
      var data = {
        view: { x: view.x, y: view.y, s: view.s },
        strokes: strokes.map(function (st) {
          var flat = [];
          st.pts.forEach(function (pt) { flat.push(num(pt.x), num(pt.y)); });
          return { t: st.tool === "eraser" ? "e" : "p", w: st.w, p: flat };
        })
      };
      var ok = onSave(strokes.length ? data : null);
      status.textContent = ok ? "Saved" : "Couldn't save (browser storage full or blocked)";
      status.className = "pad-status" + (ok ? "" : " pad-status-bad");
    }
    function saveSoon() {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(persist, 400);
    }
    var dpr = 1, cw = 0, ch = 0;
    var tool = "pen";
    var pointers = {}, pinch = null;
    // Zoom range: a billion times in either direction. Beyond about 10^10
    // 64-bit numbers can no longer place a stroke to sub-pixel accuracy.
    var MIN_S = 1e-9, MAX_S = 1e9;

    function clamp(v) { return isFinite(v) && v > 0 ? Math.min(MAX_S, Math.max(MIN_S, v)) : view.s; }
    function ink() { return getComputedStyle(canvas).color; }
    function dotColor() { return getComputedStyle(canvas).getPropertyValue("--muted").trim() || "#888"; }
    // World -> device pixels, done in 64-bit JS maths (the canvas itself is
    // only 32-bit), so strokes stay exact at any zoom depth.
    function SX(x) { return (x * view.s + view.x) * dpr; }
    function SY(y) { return (y * view.s + view.y) * dpr; }
    function useView(c) { c.setTransform(1, 0, 0, 1, 0, 0); }
    function grow(st, p) { growBox(st, p); }
    function visible(st) {
      var b = st.box, pad = st.w * dpr;
      var x0 = SX(b.x0) - pad, x1 = SX(b.x1) + pad, y0 = SY(b.y0) - pad, y1 = SY(b.y1) + pad;
      return x1 >= 0 && y1 >= 0 && x0 <= canvas.width && y0 <= canvas.height;
    }

    function styleStroke(c, st) {
      c.lineCap = "round"; c.lineJoin = "round"; c.lineWidth = st.w * dpr;
      if (st.tool === "eraser") { c.globalCompositeOperation = "destination-out"; c.strokeStyle = "#000"; }
      else { c.globalCompositeOperation = "source-over"; c.strokeStyle = ink(); }
    }

    function drawStroke(c, st) {
      styleStroke(c, st);
      c.beginPath();
      var x = SX(st.pts[0].x), y = SY(st.pts[0].y);
      c.moveTo(x, y);
      if (st.pts.length === 1) c.lineTo(x + 0.01, y);
      for (var i = 1; i < st.pts.length; i++) c.lineTo(SX(st.pts[i].x), SY(st.pts[i].y));
      c.stroke();
    }

    function present() {
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // dot grid in world space, thinned out when zoomed far out
      var k = Math.floor(Math.log2(32 * view.s / 16));
      var step = 32 * view.s / Math.pow(2, k);
      if (!isFinite(step) || step <= 0) step = 24;
      var ox = ((view.x % step) + step) % step, oy = ((view.y % step) + step) % step;
      if (!isFinite(ox)) ox = 0;
      if (!isFinite(oy)) oy = 0;
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = dotColor();
      var r = Math.max(1, dpr);
      for (var x = ox; x < cw; x += step) {
        for (var y = oy; y < ch; y += step) ctx.fillRect(Math.round(x * dpr), Math.round(y * dpr), r, r);
      }
      ctx.globalAlpha = 1;
      ctx.drawImage(layer, 0, 0);
    }

    function rebuild() {
      if (!lctx) return;
      lctx.setTransform(1, 0, 0, 1, 0, 0);
      lctx.clearRect(0, 0, layer.width, layer.height);
      useView(lctx);
      strokes.forEach(function (st) { if (visible(st)) drawStroke(lctx, st); });
      present();
    }

    function resize() {
      var r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      dpr = window.devicePixelRatio || 1;
      cw = r.width; ch = r.height;
      canvas.width = layer.width = Math.round(cw * dpr);
      canvas.height = layer.height = Math.round(ch * dpr);
      rebuild();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    window.addEventListener("resize", resize);

    function local(e) {
      var r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function toWorld(p) { return { x: (p.x - view.x) / view.s, y: (p.y - view.y) / view.s }; }
    function measure() {
      var ids = Object.keys(pointers), a = pointers[ids[0]], b = pointers[ids[1]];
      return { mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, d: Math.hypot(a.x - b.x, a.y - b.y) };
    }

    // Stop the browser from starting text selection, callouts or native
    // scroll/zoom from touches on the pad, even on fast strokes (iOS Safari
    // ignores preventDefault on pointer events for this).
    function block(e) { if (e.cancelable) e.preventDefault(); }
    ["touchstart", "touchmove", "touchend", "gesturestart", "gesturechange"].forEach(function (t) {
      canvas.addEventListener(t, block, { passive: false });
    });
    canvas.addEventListener("contextmenu", block);
    canvas.addEventListener("selectstart", block);
    canvas.addEventListener("dragstart", block);

    function lockPage(on) {
      document.body.classList.toggle("pad-active", on);
      if (on) {
        document.addEventListener("selectstart", block, true);
        try { var sel = window.getSelection(); if (sel) sel.removeAllRanges(); } catch (err) { /* ignore */ }
      } else {
        document.removeEventListener("selectstart", block, true);
      }
    }

    canvas.addEventListener("pointerdown", function (e) {
      if (!ctx) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      lockPage(true);
      var p = local(e);
      p.role = "none";
      pointers[e.pointerId] = p;
      var n = Object.keys(pointers).length;
      if (n === 1) {
        p.role = "draw";
        current = { tool: tool, w: tool === "eraser" ? 28 : 3, pts: [toWorld(p)] };
        grow(current, current.pts[0]);
        strokes.push(current);
        useView(lctx); drawStroke(lctx, current); present();
      } else if (n === 2) {
        // a second finger means pan/zoom: drop the stroke the first finger began
        if (current) {
          var i = strokes.indexOf(current);
          if (i >= 0) strokes.splice(i, 1);
          current = null;
          rebuild();
        }
        pinch = measure();
      }
    });

    canvas.addEventListener("pointermove", function (e) {
      var p = pointers[e.pointerId];
      if (!p || !ctx) return;
      e.preventDefault();
      var q = local(e);
      p.x = q.x; p.y = q.y;
      if (pinch && Object.keys(pointers).length === 2) {
        var m = measure();
        var wx = (pinch.mx - view.x) / view.s, wy = (pinch.my - view.y) / view.s;
        var ns = pinch.d > 1 ? clamp(view.s * (m.d / pinch.d)) : view.s;
        view.x = m.mx - wx * ns; view.y = m.my - wy * ns; view.s = ns;
        pinch = m;
        rebuild();
        saveSoon();
      } else if (p.role === "draw" && current) {
        var w = toWorld(p), prev = current.pts[current.pts.length - 1];
        current.pts.push(w); grow(current, w);
        useView(lctx); styleStroke(lctx, current);
        lctx.beginPath(); lctx.moveTo(SX(prev.x), SY(prev.y)); lctx.lineTo(SX(w.x), SY(w.y)); lctx.stroke();
        present();
      }
    });

    function release(e) {
      var p = pointers[e.pointerId];
      if (!p) return;
      if (p.role === "draw" && current) { current = null; persist(); }
      delete pointers[e.pointerId];
      if (Object.keys(pointers).length < 2) pinch = null;
      if (!Object.keys(pointers).length) lockPage(false);
    }
    canvas.addEventListener("pointerup", release);
    canvas.addEventListener("pointercancel", release);
    canvas.addEventListener("lostpointercapture", release);

    canvas.addEventListener("wheel", function (e) {
      if (!ctx) return;
      e.preventDefault();
      if (e.ctrlKey) {
        var c = local(e), w = toWorld(c);
        var ns = clamp(view.s * Math.exp(-e.deltaY * 0.01));
        view.x = c.x - w.x * ns; view.y = c.y - w.y * ns; view.s = ns;
      } else {
        view.x -= e.deltaX; view.y -= e.deltaY;
      }
      rebuild();
      saveSoon();
    }, { passive: false });

    var penBtn, eraserBtn;
    function setTool(t) {
      tool = t;
      penBtn.setAttribute("aria-pressed", String(t === "pen"));
      eraserBtn.setAttribute("aria-pressed", String(t === "eraser"));
    }
    penBtn = el("button", { class: "btn btn-small", type: "button", text: "Pen", onclick: function () { setTool("pen"); } });
    eraserBtn = el("button", { class: "btn btn-small", type: "button", text: "Eraser", onclick: function () { setTool("eraser"); } });
    var undoBtn = el("button", { class: "btn btn-small", type: "button", text: "Undo", onclick: function () { strokes.pop(); rebuild(); persist(); } });
    var clearBtn = el("button", { class: "btn btn-small", type: "button", text: "Clear", onclick: function () { strokes = []; current = null; rebuild(); persist(); } });
    var homeBtn = el("button", { class: "btn btn-small", type: "button", text: "Reset view", onclick: function () { view = { x: 0, y: 0, s: 1 }; rebuild(); persist(); } });
    setTool("pen");

    return el("section", { class: "card pad" }, [
      el("div", { class: "pad-head" }, [
        el("h2", { text: "Scratchpad" }),
        el("div", { class: "pad-tools" }, [penBtn, eraserBtn, undoBtn, clearBtn, homeBtn])
      ]),
      canvas,
      el("p", { class: "muted pad-hint" }, [
        el("span", { text: "One finger draws. Two fingers pan and zoom. Mouse: wheel pans, Ctrl + wheel zooms. " }),
        status
      ])
    ]);
  }

  /* ---------- reported-in-interview tags ---------- */

  var SOURCES = window.SOURCES || {};
  var REPORT_LABELS = {
    question: "Reported in a Tesla interview",
    topic: "Reported topic, practice question",
    secondhand: "Attributed to Tesla, not first-hand",
    none: "Practice question, not reported"
  };
  function reportKind(q) { return q.reported ? q.reported.kind : "none"; }
  function reportBadge(q) {
    var kind = reportKind(q);
    return el("span", { class: "report-badge report-" + kind, text: REPORT_LABELS[kind] });
  }
  function reportDetails(q) {
    if (!q.reported) return null;
    var links = (q.reported.sources || []).map(function (id) {
      var src = SOURCES[id];
      return src ? el("li", {}, [el("a", { href: src.url, target: "_blank", rel: "noopener noreferrer", text: src.title })]) : null;
    });
    return el("details", { class: "report-details" }, [
      el("summary", { text: "Where this was reported" }),
      el("p", { text: q.reported.note }),
      el("ul", {}, links)
    ]);
  }
  function reportCounts(set) {
    var c = { question: 0, topic: 0, secondhand: 0, none: 0 };
    set.questions.forEach(function (q) { c[reportKind(q)]++; });
    return c;
  }

  /* ---------- views ---------- */

  var selector = document.getElementById("section-select");
  sets.forEach(function (set) {
    selector.appendChild(el("option", { value: set.id, text: set.title }));
  });
  selector.addEventListener("change", function () {
    var id = selector.value;
    try { history.replaceState(null, "", id ? "#" + id : location.pathname + location.search); } catch (e) { location.hash = id; }
    showHome(id || null);
  });
  function syncSelector(id) { selector.value = id || ""; }

  function showHome(onlyId) {
    state = null;
    syncSelector(onlyId);
    var shown = onlyId ? sets.filter(function (x) { return x.id === onlyId; }) : sets;
    var nodes = onlyId ? [] : [
      el("h1", { text: "Mechanical design interview practice" }),
      el("p", { class: "muted", text: "Multiple choice problems on the fundamentals that come up in Tesla-style mechanical design interviews. Pick a section to start, or use the section menu at the top." })
    ];

    shown.forEach(function (set) {
      var best = loadBest(set.id);
      var prog = loadProgress(set);
      var done = prog ? prog.answers.filter(function (a) { return a !== null; }).length : 0;
      var buttons;
      if (prog && (done > 0 || prog.index > 0)) {
        var armed = false;
        var over = el("button", { class: "btn", type: "button", text: "Start over" });
        over.addEventListener("click", function () {
          if (!armed) { armed = true; over.textContent = "Tap again to erase answers and sketches"; return; }
          clearSet(set); startQuiz(set, set.questions);
        });
        buttons = el("div", { class: "btn-row" }, [
          el("button", {
            class: "btn btn-primary", type: "button", text: "Resume at question " + (prog.index + 1),
            onclick: function () { startQuiz(set, set.questions, prog); }
          }),
          over
        ]);
      } else {
        buttons = el("button", { class: "btn btn-primary", type: "button", text: "Start", onclick: function () { clearSet(set); startQuiz(set, set.questions); } });
      }
      var rc = reportCounts(set);
      var reportedQs = set.questions.filter(function (q) { return reportKind(q) === "question"; });
      if (reportedQs.length) {
        var row = buttons.classList && buttons.classList.contains("btn-row") ? buttons : el("div", { class: "btn-row" }, [buttons]);
        row.appendChild(el("button", {
          class: "btn", type: "button", text: "Reported only (" + reportedQs.length + ")",
          onclick: function () { startQuiz(set, reportedQs); }
        }));
        buttons = row;
      }
      nodes.push(el("section", { class: "card" }, [
        el("h2", { text: set.title }),
        el("p", { class: "muted", text: set.blurb }),
        (function () {
          var total = set.questions.length, right = 0, wrong = 0;
          if (prog) prog.answers.forEach(function (ans, i) {
            if (ans === null) return;
            if (ans === set.questions[i].answer) right++; else wrong++;
          });
          var answered = right + wrong;
          var label = answered === 0 ? "Not started"
            : answered === total ? "Complete: " + right + " of " + total + " correct"
            : answered + " of " + total + " answered, " + right + " correct";
          return el("div", { class: "sec-progress" }, [
            el("div", { class: "sec-bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(total), "aria-valuenow": String(answered), "aria-label": set.title + " progress" }, [
              el("span", { class: "sec-right", style: "width:" + (right / total) * 100 + "%" }),
              el("span", { class: "sec-wrong", style: "width:" + (wrong / total) * 100 + "%" })
            ]),
            el("div", { class: "sec-label" }, [
              el("span", { text: label }),
              el("span", { text: Math.round((answered / total) * 100) + "%" })
            ])
          ]);
        })(),
        el("div", { class: "topic-meta" }, [
          el("span", { text: set.questions.length + " questions" }),
          el("span", { class: rc.question ? "meta-reported" : "", text: rc.question + " reported in interviews" }),
          best ? el("span", { text: "Best: " + best.score + "/" + best.total }) : null
        ]),
        buttons
      ]));
    });

    render(nodes);
  }

  function startQuiz(set, questions, resume) {
    syncSelector(set.id);
    var full = questions.length === set.questions.length;
    state = {
      set: set,
      full: full,
      items: questions.map(function (q) {
        var qi = set.questions.indexOf(q);
        var order = q.options.map(function (_, i) { return i; });
        var picked = resume && Number.isInteger(resume.answers[qi]) ? resume.answers[qi] : null;
        return { q: q, qi: qi, order: order, picked: picked, pad: null };
      }),
      index: resume ? Math.min(Math.max(0, resume.index | 0), questions.length - 1) : 0
    };
    saveProgress();
    showQuestion();
  }

  function goTo(i) {
    state.index = i;
    saveProgress();
    showQuestion();
  }

  function showQuestion() {
    var item = state.items[state.index];
    var q = item.q;
    var total = state.items.length;
    var answered = item.picked !== null;

    var options = el("div", { class: "options" }, item.order.map(function (optIndex, pos) {
      var cls = "option";
      if (answered && optIndex === q.answer) cls += " correct";
      else if (answered && optIndex === item.picked) cls += " wrong";
      var btn = el("button", { class: cls, type: "button", onclick: function () { pick(optIndex); } }, [
        el("span", { class: "key", text: KEYS[pos] }),
        el("span", { text: q.options[optIndex] })
      ]);
      if (answered) btn.disabled = true;
      return btn;
    }));

    var feedback = null, next = null;
    if (answered) {
      var right = item.picked === q.answer;
      feedback = el("div", { class: "feedback" + (right ? "" : " miss") }, [
        el("strong", { text: right ? "Correct" : "Not quite. Answer: " + q.options[q.answer] }),
        el("p", { text: q.why }),
        q.plots ? drawPlots(q.diagram, q.plots) : null
      ]);
      if (q.proof && q.proof.length) {
        feedback = el("div", {}, [feedback, buildSolution(q, item)]);
      }
    }

    // Previous is always available after question 1. Next appears once the
    // current question is answered. Answers and sketches are kept per question.
    var last = state.index === total - 1;
    var nav = [];
    if (state.index > 0) {
      nav.push(el("button", {
        class: "btn", type: "button", text: "Previous",
        onclick: function () { goTo(state.index - 1); }
      }));
    }
    if (answered) {
      nav.push(el("button", {
        class: "btn btn-primary", type: "button",
        text: last ? "See results" : "Next question",
        onclick: function () {
          if (last) showResults();
          else goTo(state.index + 1);
        }
      }));
    }
    next = nav.length ? el("div", { class: "btn-row" }, nav) : null;

    render([
      el("div", { class: "progress" }, [
        el("span", { text: state.set.title }),
        el("span", { text: "Question " + (state.index + 1) + " of " + total })
      ]),
      el("div", { class: "bar" }, [el("span", { style: "width:" + ((state.index + (answered ? 1 : 0)) / total) * 100 + "%" })]),
      el("section", { class: "card" }, [
        el("div", { class: "tag-row" }, [el("span", { class: "level", text: q.level }), reportBadge(q)]),
        el("p", { class: "question", text: q.q }),
        reportDetails(q),
        q.diagram ? (q.diagram.section ? drawSection(q.diagram.section) : drawDiagram(q.diagram)) : null,
        q.sketch ? drawSketch(q.sketch) : null,
        options,
        feedback,
        next
      ]),
      (item.pad = item.pad || makePad(readJSON(padKey(state.set, item.qi)), function (data) {
        if (!data) { removeKey(padKey(state.set, item.qi)); return true; }
        return writeJSON(padKey(state.set, item.qi), data);
      }))
    ]);

    if (answered) {
      var go = app.querySelector(".btn-primary");
      if (go) go.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  // Full solution panel. Questions can carry alternative methods (for example the
  // same derivation from a different origin), shown as tabs.
  function buildSolution(q, item) {
    var methods = [{ title: q.proofTitle || "Solution", steps: q.proof }].concat(q.methods || []);
    var chosen = Math.min(item.method || 0, methods.length - 1);
    var list = el("ol", {});
    var tabs = [];
    function show(i) {
      chosen = i; item.method = i;
      list.replaceChildren.apply(list, methods[i].steps.map(function (st) { return el("li", { text: st }); }));
      tabs.forEach(function (t, j) { t.setAttribute("aria-selected", String(j === i)); t.tabIndex = j === i ? 0 : -1; });
    }
    var head = [el("h3", { text: methods.length > 1 ? "Full solution · " + methods.length + " methods" : "Full solution" })];
    if (methods.length > 1) {
      tabs = methods.map(function (m, i) {
        return el("button", {
          class: "method-tab", type: "button", role: "tab",
          text: (i + 1) + ". " + m.title,
          onclick: function () { show(i); }
        });
      });
      head.push(el("div", { class: "method-tabs", role: "tablist", "aria-label": "Solution methods" }, tabs));
    }
    show(chosen);
    return el("div", { class: "proof" }, head.concat([list]));
  }

  function pick(optIndex) {
    var item = state.items[state.index];
    if (item.picked !== null) return;
    item.picked = optIndex;
    saveProgress();
    showQuestion();
  }

  function showResults() {
    var items = state.items, set = state.set;
    var missed = items.filter(function (it) { return it.picked !== it.q.answer; });
    var score = items.length - missed.length;
    var fullRun = items.length === set.questions.length;
    if (fullRun) saveBest(set.id, score, items.length);

    var pct = Math.round((score / items.length) * 100);
    var verdict = pct === 100 ? "Clean sweep."
      : pct >= 80 ? "Solid. Tighten up the misses below."
      : pct >= 50 ? "Decent base. Review the misses and run it again."
      : "Worth another pass through this section.";

    var buttons = [
      el("button", { class: "btn btn-primary", text: "Retake all", onclick: function () { clearSet(set); startQuiz(set, set.questions); } })
    ];
    if (missed.length) {
      buttons.push(el("button", {
        class: "btn", text: "Retry missed (" + missed.length + ")",
        onclick: function () {
          clearPads(set, missed.map(function (it) { return it.qi; }));
          startQuiz(set, missed.map(function (it) { return it.q; }));
        }
      }));
    }
    buttons.push(el("button", { class: "btn", text: "All sections", onclick: function () { showHome(null); } }));

    var review = el("ul", { class: "review" }, items.map(function (it) {
      var right = it.picked === it.q.answer;
      return el("li", {}, [
        el("div", { class: "q", text: it.q.q }),
        right
          ? el("div", { class: "a" }, [el("span", { class: "tag-good", text: "Correct: " }), el("span", { text: it.q.options[it.q.answer] })])
          : el("div", { class: "a" }, [el("span", { class: "tag-bad", text: "You chose: " }), el("span", { text: it.q.options[it.picked] })]),
        right ? null : el("div", { class: "a" }, [el("span", { class: "tag-good", text: "Answer: " }), el("span", { text: it.q.options[it.q.answer] })]),
        el("div", { class: "a muted", text: it.q.why })
      ]);
    }));

    render([
      el("section", { class: "card" }, [
        el("span", { class: "level", text: set.title + " results" }),
        el("div", { class: "score", text: score + " / " + items.length }),
        el("p", { class: "muted", text: verdict }),
        el("div", { class: "btn-row" }, buttons)
      ]),
      el("section", { class: "card" }, [el("h2", { text: "Review" }), review])
    ]);
  }

  document.getElementById("home-link").addEventListener("click", function (e) {
    e.preventDefault();
    showHome();
  });

  window.addEventListener("hashchange", function () {
    var id = (location.hash || "").slice(1);
    showHome(sets.some(function (x) { return x.id === id; }) ? id : null);
  });

  window.QUIZ_DEBUG = { drawSketch: drawSketch };

  var startId = (location.hash || "").slice(1);
  showHome(sets.some(function (x) { return x.id === startId; }) ? startId : null);
})();
