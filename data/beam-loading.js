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
 *   proof    step-by-step derivation, one string per step
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
      proof: [
        "Free body: pin at A (x = 0), roller at B (x = L), load P at x = L/2. Reactions R_A and R_B act upward.",
        "ΣF_y = 0:  R_A + R_B − P = 0.",
        "ΣM_A = 0:  R_B·L − P·(L/2) = 0  ⇒  R_B = P/2, and so R_A = P/2.",
        "Cut at 0 ≤ x < L/2 and keep the left piece:  M(x) = R_A·x = Px/2.",
        "Cut at L/2 < x ≤ L:  M(x) = R_A·x − P(x − L/2) = P(L − x)/2.",
        "M rises linearly to x = L/2 and falls linearly after, so the maximum is at the load:  M_max = (P/2)(L/2) = PL/4."
      ],
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
      proof: [
        "Wall at x = 0, free end at x = L. Statics at the wall: shear V = P, moment M_wall = PL.",
        "Cut at x and keep the free-end piece. The load P acts (L − x) away, hogging:  M(x) = −P(L − x).",
        "Euler–Bernoulli beam equation:  EI·v″ = M(x) = −P(L − x).",
        "Integrate once:  EI·v′ = −P(Lx − x²/2) + C₁. The wall cannot rotate, v′(0) = 0  ⇒  C₁ = 0.",
        "Integrate again:  EI·v = −P(Lx²/2 − x³/6) + C₂. The wall cannot move, v(0) = 0  ⇒  C₂ = 0.",
        "At x = L:  EI·v = −P(L³/2 − L³/6) = −PL³/3.",
        "So the tip deflects δ = PL³/3EI downward."
      ],
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "P" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a uniform load w (force per length) over its full span. What is the maximum bending moment?",
      options: ["wL²/2", "wL²/4", "wL²/8", "wL²/12"],
      answer: 2,
      why: "Reactions are wL/2 each. At midspan M = (wL/2)(L/2) − (wL/2)(L/4) = wL²/8. wL²/12 is the end moment of a fixed-fixed beam.",
      proof: [
        "Total load wL acts at midspan, so by symmetry R_A = R_B. Check with ΣM_A = 0:  R_B·L − wL·(L/2) = 0  ⇒  R_B = wL/2 = R_A.",
        "Cut at x. The load on the left piece is wx, acting at x/2 from the cut.",
        "M(x) = R_A·x − wx·(x/2) = (wL/2)x − wx²/2.",
        "Maximum where dM/dx = 0:  wL/2 − wx = 0  ⇒  x = L/2. (dM/dx is the shear, so this is where V = 0.)",
        "M(L/2) = (wL/2)(L/2) − w(L/2)²/2 = wL²/4 − wL²/8 = wL²/8."
      ],
      diagram: { support: "simple", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A cantilever of length L carries a uniform load w over its full length. What is the bending moment at the wall?",
      options: ["wL²/8", "wL²/2", "wL²", "wL²/3"],
      answer: 1,
      why: "The total load wL acts at the centroid of the distribution, L/2 from the wall: M = (wL)(L/2) = wL²/2.",
      proof: [
        "Replace the distributed load with its resultant: magnitude wL, acting at its centroid, L/2 from the wall.",
        "ΣF_y = 0:  wall shear V = wL.",
        "ΣM about the wall = 0:  M_wall − wL·(L/2) = 0  ⇒  M_wall = wL²/2.",
        "Check with a cut at x: the load beyond the cut is w(L − x) acting (L − x)/2 away, so |M(x)| = w(L − x)²/2.",
        "That is largest at x = 0, giving wL²/2 at the wall, and zero at the free end."
      ],
      diagram: { support: "cantilever", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a point load P at midspan. What is the maximum deflection?",
      options: ["PL³/3EI", "PL³/48EI", "PL³/192EI", "5PL³/384EI"],
      answer: 1,
      why: "δ = PL³/48EI at midspan. PL³/192EI is the same load on a fixed-fixed beam, and PL³/3EI is a tip-loaded cantilever.",
      proof: [
        "From question 1: R_A = R_B = P/2 and, for 0 ≤ x ≤ L/2, M(x) = Px/2. The beam is symmetric about midspan.",
        "EI·v″ = Px/2.",
        "EI·v′ = Px²/4 + C₁. By symmetry the slope is zero at midspan, v′(L/2) = 0  ⇒  PL²/16 + C₁ = 0  ⇒  C₁ = −PL²/16.",
        "EI·v = Px³/12 − PL²x/16 + C₂. Pin at A, v(0) = 0  ⇒  C₂ = 0.",
        "At x = L/2:  EI·v = P(L³/8)/12 − PL²(L/2)/16 = PL³/96 − PL³/32 = PL³/96 − 3PL³/96 = −PL³/48.",
        "So δ_max = PL³/48EI, at midspan."
      ],
      diagram: { support: "simple", loads: [{ kind: "point", x: 0.5, label: "P" }] }
    },
    {
      level: "Fundamental",
      q: "A simply supported beam of length L carries a uniform load w over its full span. What is the maximum deflection?",
      options: ["wL⁴/8EI", "wL⁴/384EI", "5wL⁴/384EI", "wL⁴/48EI"],
      answer: 2,
      why: "δ = 5wL⁴/384EI at midspan. wL⁴/384EI is the fixed-fixed case (5× stiffer) and wL⁴/8EI is the cantilever.",
      proof: [
        "From question 3:  M(x) = (wL/2)x − wx²/2.",
        "EI·v″ = wLx/2 − wx²/2.",
        "EI·v′ = wLx²/4 − wx³/6 + C₁.",
        "EI·v = wLx³/12 − wx⁴/24 + C₁x + C₂.",
        "v(0) = 0  ⇒  C₂ = 0.   v(L) = 0  ⇒  wL⁴/12 − wL⁴/24 + C₁L = 0  ⇒  C₁ = −wL³/24.",
        "At x = L/2, term by term:  wL(L³/8)/12 = wL⁴/96;  w(L⁴/16)/24 = wL⁴/384;  C₁(L/2) = −wL⁴/48.",
        "EI·v = wL⁴/96 − wL⁴/384 − wL⁴/48 = (4 − 1 − 8)wL⁴/384 = −5wL⁴/384.",
        "So δ_max = 5wL⁴/384EI, at midspan."
      ],
      diagram: { support: "simple", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Fundamental",
      q: "A cantilever of length L carries a uniform load w over its full length. What is the tip deflection?",
      options: ["wL⁴/8EI", "wL⁴/3EI", "5wL⁴/384EI", "wL⁴/30EI"],
      answer: 0,
      why: "δ = wL⁴/8EI. Note the L⁴ dependence for distributed loads versus L³ for point loads.",
      proof: [
        "Wall at x = 0. Cut at x and keep the free-end piece: load w(L − x) at (L − x)/2 away, hogging:  M(x) = −w(L − x)²/2.",
        "EI·v″ = −w(L − x)²/2.",
        "Integrate:  EI·v′ = w(L − x)³/6 + C₁. (Check: d/dx of w(L − x)³/6 is −w(L − x)²/2.)",
        "Wall slope zero, v′(0) = 0  ⇒  wL³/6 + C₁ = 0  ⇒  C₁ = −wL³/6.",
        "Integrate:  EI·v = −w(L − x)⁴/24 − wL³x/6 + C₂.",
        "Wall deflection zero, v(0) = 0  ⇒  −wL⁴/24 + C₂ = 0  ⇒  C₂ = wL⁴/24.",
        "At x = L:  EI·v = 0 − wL⁴/6 + wL⁴/24 = −4wL⁴/24 + wL⁴/24 = −3wL⁴/24 = −wL⁴/8.",
        "So δ_tip = wL⁴/8EI."
      ],
      diagram: { support: "cantilever", loads: [{ kind: "udl", from: 0, to: 1, label: "w" }] }
    },
    {
      level: "Applied",
      q: "A rectangular beam is bending about its horizontal axis. You double its height and keep the width, material, span and load the same. What happens to the deflection?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It drops to 1/16"],
      answer: 2,
      why: "I = bh³/12, so doubling h multiplies I by 8. Deflection is proportional to 1/EI, so it falls to 1/8.",
      proof: [
        "Every elastic beam deflection has the form δ = k·(load)·Lⁿ / (E·I), where k depends only on the supports and load type (for example 1/48, 1/3, 5/384).",
        "For a rectangle bending about its horizontal axis:  I = bh³/12.",
        "With height 2h:  I′ = b(2h)³/12 = 8·bh³/12 = 8I.",
        "k, load, L and E are unchanged, so δ′/δ = I/I′ = 1/8.",
        "The deflection drops to one eighth."
      ],
    },
    {
      level: "Applied",
      q: "Same change: the height of a rectangular section is doubled, with the same bending moment applied. What happens to the peak bending stress?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It is unchanged"],
      answer: 1,
      why: "σ = Mc/I = 6M/(bh²). The section modulus goes with h², so stress falls to 1/4. Stiffness scales with h³, strength with h².",
      proof: [
        "Flexure formula:  σ_max = M·c / I, with c = h/2 the distance to the outer fibre.",
        "For a rectangle:  σ_max = M(h/2) / (bh³/12) = 6M / (bh²). The term bh²/6 is the section modulus S.",
        "With height 2h:  σ′ = 6M / (b·(2h)²) = 6M / (4bh²) = σ/4.",
        "So the peak stress drops to one quarter.",
        "Compare with question 8: stiffness goes with I ∝ h³, but strength goes with S ∝ h²."
      ],
    },
    {
      level: "Applied",
      q: "A beam with a centre point load is changed from simply supported to fully fixed at both ends. How does the midspan deflection change?",
      options: ["It halves", "It drops to 1/4", "It drops to 1/8", "It is unchanged"],
      answer: 1,
      why: "Simply supported: PL³/48EI. Fixed-fixed: PL³/192EI. That is 4× stiffer. The peak moment also halves, from PL/4 to PL/8.",
      proof: [
        "Simply supported, from question 5:  δ_ss = PL³/48EI.",
        "Fixed–fixed is statically indeterminate. By symmetry each end carries a vertical reaction P/2 and the same hogging moment M₀ (unknown), and the slope is zero at midspan.",
        "For 0 ≤ x ≤ L/2:  M(x) = Px/2 − M₀, so EI·v″ = Px/2 − M₀.",
        "EI·v′ = Px²/4 − M₀x + C₁. Fixed end, v′(0) = 0  ⇒  C₁ = 0.",
        "Symmetry, v′(L/2) = 0:  PL²/16 − M₀L/2 = 0  ⇒  M₀ = PL/8.",
        "EI·v = Px³/12 − M₀x²/2 + C₂. Fixed end, v(0) = 0  ⇒  C₂ = 0.",
        "At x = L/2:  EI·v = PL³/96 − (PL/8)(L²/4)/2 = PL³/96 − PL³/64 = (2 − 3)PL³/192 = −PL³/192.",
        "Ratio:  δ_ff / δ_ss = (1/192) / (1/48) = 1/4.",
        "The midspan moment also halves: M(L/2) = PL/4 − PL/8 = PL/8, and the end moments are PL/8."
      ],
      diagram: { support: "fixed", loads: [{ kind: "point", x: 0.5, label: "P" }] }
    },
    {
      level: "Applied",
      q: "A cantilevered bracket is 200 mm long with a 20 mm wide × 10 mm tall rectangular section. A 500 N load acts at the tip. What is the peak bending stress at the root?",
      options: ["75 MPa", "150 MPa", "300 MPa", "600 MPa"],
      answer: 2,
      why: "M = 500 N × 200 mm = 100,000 N·mm. σ = 6M/(bh²) = 600,000 / (20 × 10²) = 300 MPa. That is above the roughly 275 MPa yield of 6061-T6, so an aluminium bracket would yield.",
      proof: [
        "Root bending moment:  M = F·L = 500 N × 200 mm = 100,000 N·mm.",
        "Second moment of area (bending about the axis parallel to the 20 mm width):  I = bh³/12 = 20 × 10³ / 12 = 1,666.7 mm⁴.",
        "Distance to the outer fibre:  c = h/2 = 5 mm.",
        "σ = M·c / I = 100,000 × 5 / 1,666.7 = 300 N/mm² = 300 MPa.",
        "Check with σ = 6M/(bh²) = 600,000 / (20 × 100) = 300 MPa.",
        "6061-T6 yields at about 275 MPa, so this bracket would yield in aluminium."
      ],
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "500 N" }] }
    },
    {
      level: "Applied",
      q: "A 20 mm diameter solid steel rod (E = 200 GPa) is cantilevered 500 mm with a 100 N load at the tip. Roughly what is the tip deflection?",
      options: ["0.27 mm", "2.7 mm", "8.0 mm", "27 mm"],
      answer: 1,
      why: "I = πd⁴/64 = π(20)⁴/64 ≈ 7,854 mm⁴. δ = PL³/3EI = (100 × 500³) / (3 × 200,000 × 7,854) ≈ 2.65 mm.",
      proof: [
        "Solid circle:  I = πd⁴/64 = π × 20⁴ / 64 = π × 160,000 / 64 ≈ 7,854 mm⁴.",
        "Keep units in N and mm:  E = 200 GPa = 200,000 N/mm²,  L = 500 mm,  P = 100 N.",
        "Tip-loaded cantilever (question 2):  δ = PL³ / (3EI).",
        "Numerator:  100 × 500³ = 100 × 1.25×10⁸ = 1.25×10¹⁰ N·mm³.",
        "Denominator:  3 × 200,000 × 7,854 ≈ 4.712×10⁹ N·mm².",
        "δ = 1.25×10¹⁰ / 4.712×10⁹ ≈ 2.65 mm."
      ],
      diagram: { support: "cantilever", loads: [{ kind: "point", x: 1, label: "100 N" }] }
    },
    {
      level: "Applied",
      q: "A simply supported beam of length L carries a point load P at L/4 from the left support. What is the maximum bending moment?",
      options: ["PL/4", "PL/8", "3PL/16", "3PL/4"],
      answer: 2,
      why: "For a load at distance a from one end and b from the other, M_max = Pab/L = P(L/4)(3L/4)/L = 3PL/16, under the load. The left reaction is 3P/4.",
      proof: [
        "Let a = L/4 (load to A) and b = 3L/4 (load to B).",
        "ΣM_A = 0:  R_B·L − P·a = 0  ⇒  R_B = Pa/L = P/4.",
        "ΣF_y = 0:  R_A = P − R_B = 3P/4  (= Pb/L).",
        "For x < a:  M(x) = R_A·x, rising linearly. For x > a:  M(x) = R_B(L − x), falling linearly.",
        "So M peaks under the load:  M_max = R_A·a = (3P/4)(L/4) = 3PL/16.",
        "In general:  M_max = Pab/L. With a = b = L/2 this gives PL/4, matching question 1."
      ],
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
      proof: [
        "From question 3:  R_A = R_B = wL/2.",
        "Cut at x and sum vertical forces on the left piece:  V(x) = R_A − wx = w(L/2 − x).",
        "V is linear in x:  V(0) = +wL/2,  V(L/2) = 0,  V(L) = −wL/2.",
        "So |V| is largest at the supports, equal to wL/2.",
        "wL is the total load, which is split between the two supports and never acts as shear at a single section."
      ],
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
      proof: [
        "Shear formula:  τ(y) = V·Q(y) / (I·b), where Q is the first moment about the neutral axis of the area beyond level y.",
        "For a b × h rectangle, the area beyond y is b(h/2 − y), with centroid at (h/2 + y)/2 from the neutral axis.",
        "Q(y) = b(h/2 − y)·(h/2 + y)/2 = (b/2)(h²/4 − y²).",
        "With I = bh³/12:  τ(y) = V(b/2)(h²/4 − y²) / ((bh³/12)·b) = 6V(h²/4 − y²) / (bh³).",
        "This is a parabola. At the outer fibres, y = ±h/2, τ = 0.",
        "At the neutral axis, y = 0:  τ_max = 6V(h²/4)/(bh³) = 1.5·V/(bh) = 1.5·V/A."
      ],
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
      proof: [
        "Stress:  σ = M·c / I. M comes from statics (loads and supports), c and I from geometry. E does not appear, so σ is unchanged.",
        "Deflection:  δ = k·(load)·Lⁿ / (E·I). Everything except E is the same, so δ ∝ 1/E.",
        "δ_Al / δ_steel = E_steel / E_Al ≈ 200 / 69 ≈ 2.9.",
        "So the stress is the same and the deflection is about 3× larger.",
        "Whether the part still passes depends on comparing that unchanged stress with aluminium's lower allowable stress."
      ],
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
      proof: [
        "Same material, so bending stiffness EI is decided by I alone.",
        "I = ∫ y² dA. Each bit of area counts in proportion to the square of its distance from the neutral axis.",
        "Same mass per length means the same area A. Writing I = A·r², where r is the radius of gyration, stiffness depends only on how far out the area sits.",
        "Flat plate laid horizontally: its depth is tiny, so all the area is close to the axis and r is very small.",
        "Round vs square of equal area (a² = πd²/4):  I_sq / I_round = (a⁴/12) / (πd⁴/64) = π/3 ≈ 1.05. They are nearly the same, because both keep a lot of material near the axis.",
        "I-beam: most of the area is in flanges near y = ±h/2, so I ≈ 2·A_flange·(h/2)². That is far larger than any solid section with the same A. The thin web carries the shear."
      ],
    },
    {
      level: "Design judgment",
      q: "A beam is fixed at one end and rests on a roller at the other, with a uniform load w over its length L. What is the roller reaction?",
      options: ["wL/2", "3wL/8", "5wL/8", "wL/4"],
      answer: 1,
      why: "The beam is statically indeterminate. Set the tip deflection to zero by superposition: wL⁴/8EI (down, from w) = RL³/3EI (up, from R), giving R = 3wL/8. The wall takes the other 5wL/8.",
      proof: [
        "Unknowns: wall shear V_A, wall moment M_A and roller reaction R_B. Statics gives only 2 equations (ΣF, ΣM), so the beam is indeterminate to degree 1.",
        "Release the roller. The cantilever under w alone has tip deflection wL⁴/8EI downward (question 7).",
        "Apply R_B alone as an upward tip load. Tip deflection is R_B·L³/3EI upward (question 2).",
        "Compatibility: the roller allows no deflection, so by superposition  wL⁴/8EI = R_B·L³/3EI.",
        "Solve:  R_B = 3wL/8.",
        "ΣF_y = 0:  V_A = wL − 3wL/8 = 5wL/8.",
        "ΣM about the wall:  M_A = wL·(L/2) − R_B·L = wL²/2 − 3wL²/8 = wL²/8."
      ],
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
      proof: [
        "Loads P at x = L/3 and x = 2L/3. By symmetry R_A = R_B. ΣF_y = 0:  2R = 2P  ⇒  R_A = R_B = P.",
        "Cut at L/3 < x < 2L/3, left piece:  V = R_A − P = 0.",
        "M(x) = R_A·x − P(x − L/3) = Px − Px + PL/3 = PL/3, which does not depend on x.",
        "Outside the loads (x < L/3):  V = P and M = Px, rising to PL/3 at x = L/3.",
        "Between the loads the shear is zero and the moment is constant, which is pure bending. That is why this setup is used to measure flexural properties."
      ],
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
      proof: [
        "Unbonded: the interface cannot carry shear, so each plate bends about its own neutral axis and their stiffnesses add:  I_u = 2·bh³/12.",
        "Bonded: no slip at the interface, so the pair acts as one section of depth 2h, with the neutral axis on the bond line.",
        "I_b = b(2h)³/12 = 8·bh³/12.",
        "Check with the parallel axis theorem, each plate centroid at h/2 from the axis:  I_b = 2[bh³/12 + bh·(h/2)²] = 2[bh³/12 + 3bh³/12] = 8bh³/12.",
        "Ratio:  I_b / I_u = 8/2 = 4, so the bonded stack is 4× stiffer.",
        "The extra stiffness comes from the parallel-axis term, which only exists if the bond carries the interface shear flow."
      ],
    }
  ]
});
