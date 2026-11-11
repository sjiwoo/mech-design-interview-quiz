# Neutral Axis

Multiple choice practice problems for mechanical design engineering interviews, in the style asked at Tesla.

Unofficial practice material. Not affiliated with or endorsed by Tesla, and not actual interview questions.

## Topics

- **Beam loading** (20 questions): reactions, shear, moment, stress, deflection, and scaling rules.
- **More beam problems** (21 questions): off-centre loads, overhangs, partial loads, superposition and sizing, each solvable in three minutes or less.
- **Shear and moment diagrams** (20 questions): pick the diagram that matches a loading, or read the loading and peak moment off a diagram. Answer options are drawn as small diagrams (`optionCurves`).
- **Moment of inertia** (20 questions): standard sections, parallel axis, centroids, hollow and built-up sections, orientation, buckling, composite beams.
- **Stress–strain and materials**, **GD&T**, **Tolerance stack-up**, **Bolted joints**, **Manufacturing and DFM**, **Statics and free-body diagrams**, **Fatigue and failure**, **Heat transfer**, **Vibrations and dynamics**, **Torsion, combined loading and buckling** (10 questions each).
- **Trick questions, part 2** (15 questions): rolling, free fall, friction, gears, bolt preload, critical insulation radius and displacement-controlled loads.
- **GD&T and tolerance trick questions** (14 questions): invalid or misread callouts, and stack-up assumptions that fail in practice.
- **Pressure vessels and hoop stress** (14 questions): deriving hoop and axial stress, thin against thick walls, sizing, end caps, hydrotesting, rotating rings and press fits.
- **GD&T, part 2** (14 questions) and **Tolerance analysis, part 2** (12 questions): the next layer of each topic.
- **Brain teasers** and **Trick questions** (10 each).
- **Mechatronics** (27 questions): circuits and RC timing, sensor readout (dividers, ADC resolution, sampling, filtering, charge amplifiers, shielding, drift), flex circuits in moving joints, small motors and gearing, control loops, and robot-arm statics and kinematics.
- **Materials science fundamentals**, **Polymer fundamentals** and **Tactile sensing** (10 each).

Each question is tagged with whether it was reported by a candidate as asked in a Tesla interview, with source links
(`reported` in the data, sources in `data/sources.js`). Most questions also carry a diagram: `diagram` for beams and
cross-sections, or `sketch` for the general drawing primitives documented in `js/app.js`. A question drawing must only show the setup:
put the labelled answer in `sketchAfter`, which appears with the explanation once the question is answered.

Pick a section from the menu at the top. Each section has its own link, e.g. `#moment-of-inertia`.

## Calculator

A floating calculator (`js/calc.js`) sits on every page. Drag it by its header, collapse it to the round button,
and it keeps its expression, last results, angle mode and position between visits. It supports trig in degrees or
radians, logs, roots, powers, π, e, `ans` and ×10ˣ entry, and evaluates with its own parser rather than `eval`.

## Brand

The name comes from the line through a bent beam that carries no stress. The logo is an I-beam section with a
centre line through it (`favicon.svg`, also inline in `index.html`). Colours are set as CSS variables at the top of
`css/style.css`. Type is Barlow and Barlow Semi Condensed, self-hosted in `fonts/` under the SIL Open Font License.

## Run it

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Add a topic

1. Copy `data/beam-loading.js` to a new file and change the `id`, `title`, `blurb`, and `questions`.
2. Add a `<script src="data/your-topic.js"></script>` line in `index.html` above `js/app.js`.

The home page lists every loaded topic automatically.

## Releasing

`index.html` loads the CSS and scripts with a `?v=` number so browsers pick up new versions straight away.
Change that number whenever you change those files.

## Check the question data

```
node tests/validate.js
```
