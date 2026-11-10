// Structural checks on every question set. Run: node tests/validate.js
const fs = require("fs");
const path = require("path");

global.window = {};
const dataDir = path.join(__dirname, "..", "data");
fs.readdirSync(dataDir).filter((f) => f.endsWith(".js")).forEach((f) => require(path.join(dataDir, f)));

const errors = [];
const levels = ["Fundamental", "Applied", "Design judgment"];
const supports = ["simple", "cantilever", "fixed", "propped"];

window.QUESTION_SETS.forEach((set) => {
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
    if (!levels.includes(q.level)) errors.push(`${tag}: bad level`);
    if (q.diagram && !q.diagram.section && !supports.includes(q.diagram.support)) errors.push(`${tag}: bad diagram support`);
  });
  console.log(`${set.title}: ${set.questions.length} questions`);
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("All question sets valid.");
