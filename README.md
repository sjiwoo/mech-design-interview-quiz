# Mech Design Interview Quiz

Multiple choice practice problems for mechanical design engineering interviews, in the style asked at Tesla.

Unofficial practice material. Not affiliated with or endorsed by Tesla, and not actual interview questions.

## Topics

- **Beam loading** (20 questions): reactions, shear, moment, stress, deflection, and scaling rules.
- **Moment of inertia** (20 questions): standard sections, parallel axis, centroids, hollow and built-up sections, orientation, buckling, composite beams.

Pick a section from the menu at the top. Each section has its own link, e.g. `#moment-of-inertia`.

## Run it

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Add a topic

1. Copy `data/beam-loading.js` to a new file and change the `id`, `title`, `blurb`, and `questions`.
2. Add a `<script src="data/your-topic.js"></script>` line in `index.html` above `js/app.js`.

The home page lists every loaded topic automatically.

## Check the question data

```
node tests/validate.js
```
