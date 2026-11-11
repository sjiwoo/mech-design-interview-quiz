/* Floating calculator. Draggable, collapsible, and remembers its state
 * (expression, history, angle mode, open/closed, position) in localStorage.
 * Expressions are parsed by a small recursive-descent parser, never eval(). */
(function () {
  "use strict";

  var KEY = "calc:state";
  var st = load();

  function load() {
    var d = { open: false, expr: "", ans: 0, hist: [], deg: true, x: null, y: null };
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === "object") Object.keys(d).forEach(function (k) { if (s[k] !== undefined) d[k] = s[k]; });
    } catch (e) { /* ignore */ }
    if (!Array.isArray(d.hist)) d.hist = [];
    return d;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* storage off */ } }

  /* ---------- parser ---------- */

  var FUNCS = {
    sin: function (x) { return Math.sin(toRad(x)); },
    cos: function (x) { return Math.cos(toRad(x)); },
    tan: function (x) { return Math.tan(toRad(x)); },
    asin: function (x) { return fromRad(Math.asin(x)); },
    acos: function (x) { return fromRad(Math.acos(x)); },
    atan: function (x) { return fromRad(Math.atan(x)); },
    sqrt: Math.sqrt, ln: Math.log, log: Math.log10, abs: Math.abs
  };
  function toRad(x) { return st.deg ? x * Math.PI / 180 : x; }
  function fromRad(x) { return st.deg ? x * 180 / Math.PI : x; }

  function tokenize(s) {
    var out = [], i = 0;
    s = s.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/√/g, "sqrt").replace(/π/g, "pi");
    while (i < s.length) {
      var c = s[i];
      if (c === " ") { i++; continue; }
      var num = /^(\d+\.?\d*|\.\d+)(E[+-]?\d+)?/.exec(s.slice(i));
      if (num) { out.push({ t: "n", v: parseFloat(num[0]) }); i += num[0].length; continue; }
      var word = /^[a-z]+/i.exec(s.slice(i));
      if (word) { out.push({ t: "w", v: word[0].toLowerCase() }); i += word[0].length; continue; }
      if (c === "²") { out.push({ t: "o", v: "^" }, { t: "n", v: 2 }); i++; continue; }
      if ("+-*/^()".indexOf(c) >= 0) { out.push({ t: "o", v: c }); i++; continue; }
      throw new Error("Unexpected “" + c + "”");
    }
    return out;
  }

  function evaluate(s) {
    var tk = tokenize(s), p = 0;
    if (!tk.length) throw new Error("empty");
    function peek() { return tk[p]; }
    function isOp(v) { var t = tk[p]; return t && t.t === "o" && t.v === v; }
    function startsPrimary() { var t = tk[p]; return t && (t.t === "n" || t.t === "w" || (t.t === "o" && t.v === "(")); }
    function expr() {
      var v = term();
      while (isOp("+") || isOp("-")) { var o = tk[p++].v, r = term(); v = o === "+" ? v + r : v - r; }
      return v;
    }
    function term() {
      var v = unary();
      for (;;) {
        if (isOp("*") || isOp("/")) { var o = tk[p++].v, r = unary(); v = o === "*" ? v * r : v / r; }
        else if (startsPrimary()) v = v * unary(); // implicit multiplication: 2π, 3(4), 2sin30
        else break;
      }
      return v;
    }
    function unary() {
      if (isOp("-")) { p++; return -unary(); }
      if (isOp("+")) { p++; return unary(); }
      return power();
    }
    function power() {
      var b = primary();
      if (isOp("^")) { p++; return Math.pow(b, unary()); } // right-associative, allows 2^-3
      return b;
    }
    function primary() {
      var t = peek();
      if (!t) throw new Error("incomplete");
      if (t.t === "n") { p++; return t.v; }
      if (t.t === "o" && t.v === "(") {
        p++; var v = expr();
        if (isOp(")")) p++; // a missing final ")" is forgiven
        return v;
      }
      if (t.t === "w") {
        p++;
        if (t.v === "pi") return Math.PI;
        if (t.v === "e") return Math.E;
        if (t.v === "ans") return st.ans;
        if (FUNCS[t.v]) return FUNCS[t.v](primary()); // sin(30)² squares the sine
        throw new Error("Unknown “" + t.v + "”");
      }
      throw new Error("Unexpected “" + t.v + "”");
    }
    var v = expr();
    if (p < tk.length) throw new Error("Unexpected “" + tk[p].v + "”");
    return v;
  }

  function fmt(v) {
    if (!isFinite(v)) return isNaN(v) ? "Not a number" : (v > 0 ? "∞" : "−∞");
    if (v === 0) return "0";
    var a = Math.abs(v);
    if (a >= 1e10 || a < 1e-6) return v.toExponential(6).replace(/\.?0+e/, "e").replace("e", " × 10^").replace("^+", "^");
    return String(parseFloat(v.toPrecision(10)));
  }

  /* ---------- UI ---------- */

  function h(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; }

  var bubble = h("button", "calc-bubble");
  bubble.type = "button";
  bubble.setAttribute("aria-label", "Open calculator");
  bubble.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="8" y="6" width="8" height="3.5" rx="1" fill="currentColor"/><circle cx="9" cy="13" r="1.1" fill="currentColor"/><circle cx="12" cy="13" r="1.1" fill="currentColor"/><circle cx="15" cy="13" r="1.1" fill="currentColor"/><circle cx="9" cy="17" r="1.1" fill="currentColor"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/><circle cx="15" cy="17" r="1.1" fill="currentColor"/></svg>';

  var panel = h("section", "calc");
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Calculator");
  panel.tabIndex = -1;

  var head = h("div", "calc-head");
  var title = h("span", "calc-title", "Calculator");
  var mode = h("button", "calc-mode");
  mode.type = "button";
  var hide = h("button", "calc-hide");
  hide.type = "button";
  hide.setAttribute("aria-label", "Collapse calculator");
  hide.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
  head.appendChild(title); head.appendChild(mode); head.appendChild(hide);

  var screen = h("div", "calc-screen");
  var exprEl = h("div", "calc-expr");
  exprEl.setAttribute("aria-label", "Expression");
  var resEl = h("div", "calc-res");
  resEl.setAttribute("aria-live", "polite");
  screen.appendChild(exprEl); screen.appendChild(resEl);

  var histEl = h("div", "calc-hist");

  // [label, text inserted (or action), class]
  var KEYS = [
    ["sin", "sin("], ["cos", "cos("], ["tan", "tan("], ["(", "("], [")", ")"],
    ["asin", "asin("], ["acos", "acos("], ["atan", "atan("], ["ln", "ln("], ["log", "log("],
    ["√", "√("], ["x²", "²"], ["xʸ", "^"], ["π", "π"], ["e", "e"],
    ["7", "7", "num"], ["8", "8", "num"], ["9", "9", "num"], ["÷", "÷", "op"], ["⌫", "#del", "fn"],
    ["4", "4", "num"], ["5", "5", "num"], ["6", "6", "num"], ["×", "×", "op"], ["AC", "#clear", "fn"],
    ["1", "1", "num"], ["2", "2", "num"], ["3", "3", "num"], ["−", "−", "op"], ["ans", "ans", "fn"],
    ["0", "0", "num"], [".", ".", "num"], ["×10ˣ", "E", "num"], ["+", "+", "op"], ["=", "#eq", "eq"]
  ];
  var pad = h("div", "calc-keys");
  KEYS.forEach(function (k) {
    var b = h("button", "calc-key" + (k[2] ? " calc-" + k[2] : ""), k[0]);
    b.type = "button";
    b.addEventListener("click", function () { press(k[1]); });
    pad.appendChild(b);
  });

  panel.appendChild(head); panel.appendChild(screen); panel.appendChild(histEl); panel.appendChild(pad);

  var justEvaluated = false;

  function press(k) {
    if (k === "#clear") { st.expr = ""; justEvaluated = false; }
    else if (k === "#del") { st.expr = st.expr.replace(/(asin\(|acos\(|atan\(|sin\(|cos\(|tan\(|log\(|ln\(|ans|.)$/, ""); justEvaluated = false; }
    else if (k === "#eq") { equals(); return; }
    else {
      // after "=", typing an operator continues from the answer; typing anything else starts fresh
      if (justEvaluated) st.expr = /^[+−×÷^²E]/.test(k) ? "ans" : "";
      st.expr += k;
      justEvaluated = false;
    }
    draw(); save();
  }

  function equals() {
    if (!st.expr.trim()) return;
    try {
      var v = evaluate(st.expr);
      if (isNaN(v)) throw new Error("Not a number");
      st.hist.unshift({ e: st.expr, r: fmt(v), v: v });
      st.hist = st.hist.slice(0, 6);
      st.ans = v;
      st.expr = fmt(v).indexOf(" ") >= 0 ? String(v) : fmt(v);
      justEvaluated = true;
      draw(); save();
    } catch (e) {
      resEl.textContent = e.message === "incomplete" ? "Finish the expression" : e.message;
      resEl.classList.add("calc-err");
    }
  }

  function draw() {
    exprEl.textContent = st.expr || "0";
    exprEl.classList.toggle("calc-empty", !st.expr);
    resEl.classList.remove("calc-err");
    var preview = "";
    if (st.expr && !justEvaluated) { try { var v = evaluate(st.expr); preview = "= " + fmt(v); } catch (e) { preview = ""; } }
    resEl.textContent = preview;
    mode.textContent = st.deg ? "Deg" : "Rad";
    mode.setAttribute("aria-label", "Angle mode: " + (st.deg ? "degrees" : "radians") + ". Tap to switch.");
    histEl.replaceChildren();
    st.hist.slice(0, 3).forEach(function (it) {
      var b = h("button", "calc-hrow");
      b.type = "button";
      b.appendChild(h("span", "calc-he", it.e));
      b.appendChild(h("span", "calc-hr", "= " + it.r));
      b.setAttribute("aria-label", "Reuse " + it.e + " equals " + it.r);
      b.addEventListener("click", function () { st.expr = it.e; justEvaluated = false; draw(); save(); });
      histEl.appendChild(b);
    });
    exprEl.scrollLeft = exprEl.scrollWidth;
  }

  function setOpen(o) {
    st.open = o;
    panel.hidden = !o;
    bubble.hidden = o;
    if (o) { place(); panel.focus({ preventScroll: true }); } else bubble.focus({ preventScroll: true });
    save();
  }

  // keep the panel on screen; default to the bottom-right corner
  function place() {
    var w = panel.offsetWidth || 300, hgt = panel.offsetHeight || 460, m = 8;
    var vw = window.innerWidth, vh = window.innerHeight;
    var x = st.x === null ? vw - w - 16 : st.x, y = st.y === null ? vh - hgt - 16 : st.y;
    x = Math.min(Math.max(m, x), Math.max(m, vw - w - m));
    y = Math.min(Math.max(m, y), Math.max(m, vh - hgt - m));
    panel.style.left = x + "px"; panel.style.top = y + "px";
    return { x: x, y: y };
  }

  // drag by the header
  var drag = null;
  head.addEventListener("pointerdown", function (ev) {
    if (ev.target.closest("button")) return;
    var r = panel.getBoundingClientRect();
    drag = { id: ev.pointerId, dx: ev.clientX - r.left, dy: ev.clientY - r.top };
    head.setPointerCapture(ev.pointerId);
    panel.classList.add("calc-dragging");
    ev.preventDefault();
  });
  head.addEventListener("pointermove", function (ev) {
    if (!drag || ev.pointerId !== drag.id) return;
    st.x = ev.clientX - drag.dx; st.y = ev.clientY - drag.dy;
    var p = place(); st.x = p.x; st.y = p.y;
  });
  function endDrag(ev) {
    if (!drag || ev.pointerId !== drag.id) return;
    drag = null; panel.classList.remove("calc-dragging"); save();
  }
  head.addEventListener("pointerup", endDrag);
  head.addEventListener("pointercancel", endDrag);

  // stop touches on the calculator from reaching the scratchpad or page underneath
  ["pointerdown", "touchstart", "touchmove", "wheel"].forEach(function (t) {
    panel.addEventListener(t, function (ev) { ev.stopPropagation(); }, { passive: true });
  });

  mode.addEventListener("click", function () { st.deg = !st.deg; draw(); save(); });
  hide.addEventListener("click", function () { setOpen(false); });
  bubble.addEventListener("click", function () { setOpen(true); });

  // typing works while the calculator has focus
  panel.addEventListener("keydown", function (ev) {
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    var k = ev.key, map = { "*": "×", "/": "÷", "-": "−", "Enter": "#eq", "=": "#eq", "Backspace": "#del", "Escape": "#esc", "Delete": "#clear" };
    var v = map[k] || (/^[0-9.+^()]$/.test(k) ? k : null) || (k === "e" || k === "E" ? "E" : null);
    if (v === "#esc") { setOpen(false); ev.preventDefault(); return; }
    if (v && !(ev.target.closest && ev.target.closest(".calc-head") && (k === "Enter" || k === " "))) {
      if (ev.target.tagName === "BUTTON" && k === "Enter") return; // let Enter press a focused key
      press(v); ev.preventDefault();
    }
  });

  window.addEventListener("resize", function () { if (st.open) { var p = place(); st.x = p.x; st.y = p.y; } });

  document.body.appendChild(panel);
  document.body.appendChild(bubble);
  draw();
  panel.hidden = !st.open;
  bubble.hidden = st.open;
  if (st.open) place();

  window.CALC_DEBUG = { evaluate: evaluate, fmt: fmt, state: function () { return st; } };
})();
