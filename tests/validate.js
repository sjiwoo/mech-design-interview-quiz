// Structural checks on every question set. Run: node tests/validate.js
const fs = require("fs");
const path = require("path");

global.window = {};
const dataDir = path.join(__dirname, "..", "data");
fs.readdirSync(dataDir).filter((f) => f.endsWith(".js")).sort((a) => (a === "sources.js" ? -1 : 0)).forEach((f) => require(path.join(dataDir, f)));

const errors = [];
const levels = ["Fundamental", "Applied", "Design judgment", "Brain teaser", "Trick question"];
const supports = ["simple", "cantilever", "fixed", "propped"];

(window.QUESTION_SETS || []).forEach((set) => {
  if (!set.id || !set.title || !set.blurb) errors.push(`${set.id}: missing id/title/blurb`);
  const seen = new Set();
  set.questions.forEach((q, i) => {
    const tag = `${set.id} #${i + 1}`;
    if (!q.q || !q.why) errors.push(`${tag}: missing question or explanation`);
    if (seen.has(q.q)) errors.push(`${tag}: duplicate question`);
    seen.add(q.q);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag}: needs 4 options`);
    else if (new Set(q.options).size !== 4) errors.push(`${tag}: duplicate options`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${tag}: bad answer index`);
    if (!Array.isArray(q.proof) || q.proof.length < 2 || q.proof.some((x) => typeof x !== "string" || !x.trim())) errors.push(`${tag}: needs a step-by-step proof`);
    if (q.methods !== undefined) {
      if (!Array.isArray(q.methods) || !q.methods.length) errors.push(`${tag}: methods must be a non-empty array`);
      else q.methods.forEach((m, j) => {
        if (!m.title || !Array.isArray(m.steps) || m.steps.length < 2) errors.push(`${tag}: method ${j + 2} needs a title and steps`);
      });
      if (!q.proofTitle) errors.push(`${tag}: proofTitle required when methods are given`);
    }
    if (q.reported) {
      if (!["question", "topic", "secondhand"].includes(q.reported.kind)) errors.push(`${tag}: bad reported.kind`);
      if (!q.reported.note) errors.push(`${tag}: reported needs a note`);
      (q.reported.sources || []).forEach((id) => { if (!(window.SOURCES || {})[id]) errors.push(`${tag}: unknown source ${id}`); });
      if (!(q.reported.sources || []).length) errors.push(`${tag}: reported needs a source`);
    }
    if (!levels.includes(q.level)) errors.push(`${tag}: bad level`);
    if (q.diagram && !q.diagram.section && !supports.includes(q.diagram.support)) errors.push(`${tag}: bad diagram support`);
  });
  console.log(`${set.title}: ${set.questions.length} questions`);
});

const ids = new Set((window.QUESTION_SETS || []).map((x) => x.id));
(window.FLASHCARDS || []).forEach((c, i) => {
  if (!Array.isArray(c) || c.length !== 4 || !ids.has(c[0]) || !["eq", "concept", "term"].includes(c[1]) || !c[2] || !c[3]) errors.push(`flashcard ${i + 1}: bad card`);
});
console.log(`Flashcards: ${(window.FLASHCARDS || []).length} cards`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("All question sets valid.");
