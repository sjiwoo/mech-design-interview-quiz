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

  /* ---------- views ---------- */

  function showHome() {
    state = null;
    var nodes = [
      el("h1", { text: "Mechanical design interview practice" }),
      el("p", { class: "muted", text: "Multiple choice problems on the fundamentals that come up in Tesla-style mechanical design interviews. Pick a topic to start." })
    ];

    sets.forEach(function (set) {
      var best = loadBest(set.id);
      nodes.push(el("section", { class: "card" }, [
        el("h2", { text: set.title }),
        el("p", { class: "muted", text: set.blurb }),
        el("div", { class: "topic-meta" }, [
          el("span", { text: set.questions.length + " questions" }),
          best ? el("span", { text: "Best: " + best.score + "/" + best.total }) : null
        ]),
        el("button", { class: "btn btn-primary", text: "Start", onclick: function () { startQuiz(set, set.questions); } })
      ]));
    });

    render(nodes);
  }

  function startQuiz(set, questions) {
    state = {
      set: set,
      items: questions.map(function (q) {
        var order = q.options.map(function (_, i) { return i; });
        return { q: q, order: order, picked: null };
      }),
      index: 0
    };
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
        el("p", { text: q.why })
      ]);
      var last = state.index === total - 1;
      next = el("div", { class: "btn-row" }, [
        el("button", {
          class: "btn btn-primary",
          text: last ? "See results" : "Next question",
          onclick: function () {
            if (last) showResults();
            else { state.index++; showQuestion(); }
          }
        })
      ]);
    }

    render([
      el("div", { class: "progress" }, [
        el("span", { text: state.set.title }),
        el("span", { text: "Question " + (state.index + 1) + " of " + total })
      ]),
      el("div", { class: "bar" }, [el("span", { style: "width:" + ((state.index + (answered ? 1 : 0)) / total) * 100 + "%" })]),
      el("section", { class: "card" }, [
        el("span", { class: "level", text: q.level }),
        el("p", { class: "question", text: q.q }),
        q.diagram ? drawDiagram(q.diagram) : null,
        options,
        feedback,
        next
      ])
    ]);

    if (answered) {
      var go = app.querySelector(".btn-primary");
      if (go) go.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function pick(optIndex) {
    var item = state.items[state.index];
    if (item.picked !== null) return;
    item.picked = optIndex;
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
      : "Worth another pass through the standard beam cases.";

    var buttons = [
      el("button", { class: "btn btn-primary", text: "Retake all", onclick: function () { startQuiz(set, set.questions); } })
    ];
    if (missed.length) {
      buttons.push(el("button", {
        class: "btn", text: "Retry missed (" + missed.length + ")",
        onclick: function () { startQuiz(set, missed.map(function (it) { return it.q; })); }
      }));
    }
    buttons.push(el("button", { class: "btn", text: "All topics", onclick: showHome }));

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

  showHome();
})();
