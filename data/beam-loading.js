/*
 * Topic: Beam loading
 * To add a new topic, copy this file, change the id/title, and add a
 * <script> tag for it in index.html. The app picks it up automatically.
 *
 * Each question:
 *   q        question text
 *   options  four choices
 *   answer   index of the correct choice (0-3)
 *   why      explanation shown after answering
 *   level    "Fundamental" | "Applied" | "Design judgment"
 *   diagram  optional { support, loads[] } drawn as an SVG
 *            support: "simple" | "cantilever" | "fixed" | "propped"
 *            loads:   { kind: "point", x: 0..1, label }
 *                     { kind: "udl", from: 0..1, to: 0..1, label }
 */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  id: "beam-loading",
  title: "Beam loading",
  blurb: "Reactions, shear, moment, stress and deflection for the standard beam cases, plus the scaling rules interviewers probe.",
  questions: [
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a point load P at midspan. What is the maximum bending moment?",
      options: ["PL/2", "PL/4", "PL/8", "PL"],
      answer: 1,
      why: "Each support reacts P/2. The moment peaks under the load: (P/2)(L/2) = PL/4. Shear is +P/2 until the load, then drops by P to −P/2, and the moment peaks where shear crosses zero.",
      diagram: { support: "simple", loads: [{ kind: "point", x: 0.5, label: "P" }] },
      plots: {
        shear: [{ x: 0.25, text: "+P/2" }, { x: 0.75, text: "−P/2" }],
        moment: [{ x: 0.5, text: "PL/4" }]
      }
    },
    {
      level: "Fundamental",
      q: "A cantilever of length L has a point load P at its free end. What is the tip deflection?",
      options: ["PL³/48EI", "PL³/8EI", "PL³/3EI", "PL³/2EI"],
      answer: 2,
      why: "The standard result is δ = PL³/3EI. PL³/48EI is the simply supported centre-load case, which is 16× stiffer for the same span.",
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "P" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a uniform load w (force per length) over its full span. What is the maximum bending moment?",
      options: ["wL²/2", "wL²/4", "wL²/8", "wL²/12"],
      answer: 2,
      why: "Reactions are wL/2 each. At midspan M = (wL/2)(L/2) − (wL/2)(L/4) = wL²/8. wL²/12 is the end moment of a fixed-fixed beam.",
      diagram: { support: "simple", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A cantilever of length L carries a uniform load w over its full length. What is the bending moment at the wall?",
      options: ["wL²/8", "wL²/2", "wL²", "wL²/3"],
      answer: 1,
      why: "The total load wL acts at the centroid of the distribution, L/2 from the wall: M = (wL)(L/2) = wL²/2.",
      diagram: { support: "cantilever", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a point load P at midspan. What is the maximum deflection?",
      options: ["PL³/3EI", "PL³/48EI", "PL³/192EI", "5PL³/384EI"],
      answer: 1,
      why: "δ = PL³/48EI at midspan. PL³/192EI is the same load on a fixed-fixed beam, and PL³/3EI is a tip-loaded cantilever.",
      diagram: { support: "simple", loads: [{ kind: "point", x: 0.5, label: "P" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a uniform load w over its full span. What is the maximum deflection?",
      options: ["wL⁴/8EI", "wL⁴/384EI", "5wL⁴/384EI", "wL⁴/48EI"],
      answer: 2,
      why: "δ = 5wL⁴/384EI at midspan. wL⁴/384EI is the fixed-fixed case (5× stiffer) and wL⁴/8EI is the cantilever.",
      diagram: { support: "simple", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A cantilever of length L carries a uniform load w over its full length. What is the tip deflection?",
      options: ["wL⁴/8EI", "wL⁴/3EI", "5wL⁴/384EI", "wL⁴/30EI"],
      answer: 0,
      why: "δ = wL⁴/8EI. Note the L⁴ dependence for distributed loads versus L³ for point loads.",
      diagram: { support: "cantilever", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Applied",
      q: "A rectangular beam is bending about its horizontal axis. You double its height and keep the width, material, span and load the same. What happens to the deflection?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It drops to 1/16"],
      answer: 2,
      why: "I = bh³/12, so doubling h multiplies I by 8. Deflection is proportional to 1/EI, so it falls to 1/8.",
    },
    {
      level: "Applied",
      q: "Same change: the height of a rectangular section is doubled, with the same bending moment applied. What happens to the peak bending stress?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It is unchanged"],
      answer: 1,
      why: "σ = Mc/I = 6M/(bh²). The section modulus goes with h², so stress falls to 1/4. Stiffness scales with h³, strength with h².",
    },
    {
      level: "Applied",
      q: "A beam with a centre point load is changed from simply supported to fully fixed at both ends. How does the midspan deflection change?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It is unchanged"],
      answer: 1,
      why: "Simply supported: PL³/48EI. Fixed-fixed: PL³/192EI. That is 4× stiffer. The peak moment also halves, from PL/4 to PL/8.",
      diagram: { support: "fixed", loads: [{ kind: "point", x: 0.5, label: "P" }] }
    },
    {
      level: "Applied",
      q: "A cantilevered bracket is 200 mm long with a 20 mm wide × 10 mm tall rectangular section. A 500 N load acts at the tip. What is the peak bending stress at the root?",
      options: ["75 MPa", "150 MPa", "300 MPa", "600 MPa"],
      answer: 2,
      why: "M = 500 N × 200 mm = 100,000 N·mm. σ = 6M/(bh²) = 600,000 / (20 × 10²) = 300 MPa. That is above the roughly 275 MPa yield of 6061-T6, so an aluminium bracket would yield.",
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "500 N" }] }
    },
    {
      level: "Applied",
      q: "A 20 mm diameter solid steel rod (E = 200 GPa) is cantilevered 500 mm with a 100 N load at the tip. Roughly what is the tip deflection?",
      options: ["0.27 mm", "2.7 mm", "8.0 mm", "27 mm"],
      answer: 1,
      why: "I = πd⁴/64 = π(20)⁴/64 ≈ 7,854 mm⁴. δ = PL³/3EI = (100 × 500³) / (3 × 200,000 × 7,854) ≈ 2.65 mm.",
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "100 N" }] }
    },
    {
      level: "Applied",
      q: "A simply supported beam of length L carries a point load P at L/4 from the left support. What is the maximum bending moment?",
      options: ["PL/4", "PL/8", "3PL/16", "3PL/4"],
      answer: 2,
      why: "For a load at distance a from one end and b from the other, M_max = Pab/L = P(L/4)(3L/4)/L = 3PL/16, under the load. The left reaction is 3P/4.",
      diagram: { support: "simple", loads: [{ kind: "point", x: 0.25, label: "P" }] }
    },
    {
      level: "Fundamental",
      q: "For a simply supported beam under a full-span uniform load w, where is the shear force largest and what is its value?",
      options: [
        "At midspan, wL/2",
        "At the supports, wL/2",
        "At the supports, wL",
        "At midspan, wL/4"
      ],
      answer: 1,
      why: "Shear equals the reaction wL/2 at each support and falls linearly to zero at midspan. Zero shear is where the moment peaks.",
      diagram: { support: "simple", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Applied",
      q: "A rectangular beam section carries a transverse shear force V over area A. What is the maximum shear stress and where does it occur?",
      options: [
        "V/A, uniform over the section",
        "1.5 V/A, at the neutral axis",
        "1.5 V/A, at the outer fibres",
        "2 V/A, at the neutral axis"
      ],
      answer: 1,
      why: "τ = VQ/It gives a parabolic distribution: 1.5 V/A at the neutral axis and zero at the top and bottom surfaces. Bending stress is the opposite: zero at the neutral axis, peak at the surfaces.",
    },
    {
      level: "Design judgment",
      q: "A steel beam is replaced with an aluminium one of identical geometry under the same load. What happens to bending stress and deflection?",
      options: [
        "Stress triples, deflection unchanged",
        "Both roughly triple",
        "Stress unchanged, deflection roughly triples",
        "Both unchanged"
      ],
      answer: 2,
      why: "Stress σ = Mc/I depends only on load and geometry. Deflection scales with 1/E, and E drops from about 200 GPa to about 69 GPa, so it grows about 2.9×. Whether the part still passes depends on aluminium's lower yield strength.",
    },
    {
      level: "Design judgment",
      q: "For the same mass per unit length and the same material, which cross-section gives the highest bending stiffness about the horizontal axis?",
      options: [
        "Solid round bar",
        "Solid square bar",
        "I-beam with the web vertical",
        "Flat plate laid horizontally"
      ],
      answer: 2,
      why: "Bending stiffness comes from I, which grows with the square of distance from the neutral axis. An I-beam puts most of its material in flanges far from that axis; the web mainly carries shear.",
    },
    {
      level: "Design judgment",
      q: "A beam is fixed at one end and rests on a roller at the other, with a uniform load w over its length L. What is the roller reaction?",
      options: ["wL/2", "3wL/8", "5wL/8", "wL/4"],
      answer: 1,
      why: "The beam is statically indeterminate. Set the tip deflection to zero by superposition: wL⁴/8EI (down, from w) = RL³/3EI (up, from R), giving R = 3wL/8. The wall takes the other 5wL/8.",
      diagram: { support: "propped", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Applied",
      q: "In four-point bending, a simply supported beam carries two equal loads P at L/3 from each support. What are the shear and moment between the two loads?",
      options: [
        "V = P, M varies linearly",
        "V = 0, M = PL/3 (constant)",
        "V = 0, M = PL/4 (constant)",
        "V = P/2, M = PL/6"
      ],
      answer: 1,
      why: "Each reaction is P. Between the loads the shear cancels to zero, so the moment is constant at P × L/3. That pure-bending region is why four-point tests are used for material flexural properties.",
      diagram: {
        support: "simple",
        loads: [
          { kind: "point", x: 0.3333, label: "P" },
          { kind: "point", x: 0.6667, label: "P" }
        ]
      }
    },
    {
      level: "Design judgment",
      q: "Two identical flat plates are stacked and loaded in bending. Compared with leaving them free to slide, how much stiffer is the stack if they are fully bonded together?",
      options: ["Same stiffness", "2× stiffer", "4× stiffer", "8× stiffer"],
      answer: 2,
      why: "Unbonded, each plate bends about its own neutral axis: I = 2 × bh³/12. Bonded, they act as one section of height 2h: I = b(2h)³/12 = 8bh³/12. The ratio is 4. The bond line has to carry the interface shear for this to hold.",
    }
  ]
});
