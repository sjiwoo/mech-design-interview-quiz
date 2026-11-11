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
  "id": "beam-loading",
  "title": "Beam loading",
  "blurb": "Reactions, shear, moment, stress and deflection for the standard beam cases, plus the scaling rules interviewers probe.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "A simply supported beam of length L carries a point load P at midspan. What is the maximum bending moment?",
      "options": [
        "PL/2",
        "PL/4",
        "PL/8",
        "PL"
      ],
      "answer": 1,
      "why": "Each support reacts P/2. The moment peaks under the load: (P/2)(L/2) = PL/4. Shear is +P/2 until the load, then drops by P to −P/2, and the moment peaks where shear crosses zero.",
      "proof": [
        "Free body: pin at A (x = 0), roller at B (x = L), load P at x = L/2. Reactions R_A and R_B act upward.",
        "ΣF_y = 0:  R_A + R_B − P = 0.",
        "ΣM_A = 0:  R_B·L − P·(L/2) = 0  ⇒  R_B = P/2, and so R_A = P/2.",
        "Cut at 0 ≤ x < L/2 and keep the left piece:  M(x) = R_A·x = Px/2.",
        "Cut at L/2 < x ≤ L:  M(x) = R_A·x − P(x − L/2) = P(L − x)/2.",
        "M rises linearly to x = L/2 and falls linearly after, so the maximum is at the load:  M_max = (P/2)(L/2) = PL/4."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at right support B",
          "steps": [
            "Measure ξ leftward from B, so ξ = L − x.",
            "ΣM_B = 0:  R_A·L − P·(L/2) = 0  ⇒  R_A = P/2, and so R_B = P/2.",
            "Cut at 0 ≤ ξ < L/2 and keep the right-hand piece. Only R_B acts on it:  M(ξ) = R_B·ξ = Pξ/2.",
            "M grows linearly from B to the load at ξ = L/2:  M = (P/2)(L/2) = PL/4.",
            "Past the load (ξ > L/2) the load's lever arm cancels the growth:  M = Pξ/2 − P(ξ − L/2) = P(L − ξ)/2, which falls back to 0 at A.",
            "Same PL/4. Working from the other end is a good independent check."
          ]
        },
        {
          "title": "Origin at midspan (under the load)",
          "steps": [
            "Put x = 0 at the load, so x runs from −L/2 to +L/2. Reactions are still P/2 each (by symmetry).",
            "Cut at x > 0 and keep the right piece. R_B = P/2 is at distance (L/2 − x) from the cut:  M(x) = (P/2)(L/2 − x).",
            "By symmetry, for x < 0:  M(x) = (P/2)(L/2 + x). Together:  M(x) = (P/2)(L/2 − |x|).",
            "This is a tent shape with its peak at x = 0:  M_max = (P/2)(L/2) = PL/4.",
            "Putting the origin at the symmetry point gives a single formula that is easy to read off."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "point",
            "x": 0.5,
            "label": "P"
          }
        ]
      },
      "plots": {
        "shear": [
          {
            "x": 0.25,
            "text": "+P/2"
          },
          {
            "x": 0.75,
            "text": "−P/2"
          }
        ],
        "moment": [
          {
            "x": 0.5,
            "text": "PL/4"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A cantilever of length L has a point load P at its free end. What is the tip deflection?",
      "options": [
        "PL³/48EI",
        "PL³/8EI",
        "PL³/3EI",
        "PL³/2EI"
      ],
      "answer": 2,
      "why": "The standard result is δ = PL³/3EI. PL³/48EI is the simply supported centre-load case, which is 16× stiffer for the same span.",
      "proof": [
        "Wall at x = 0, free end at x = L. Statics at the wall: shear V = P, moment M_wall = PL.",
        "Cut at x and keep the free-end piece. The load P acts (L − x) away, hogging:  M(x) = −P(L − x).",
        "Euler–Bernoulli beam equation:  EI·v″ = M(x) = −P(L − x).",
        "Integrate once:  EI·v′ = −P(Lx − x²/2) + C₁. The wall cannot rotate, v′(0) = 0  ⇒  C₁ = 0.",
        "Integrate again:  EI·v = −P(Lx²/2 − x³/6) + C₂. The wall cannot move, v(0) = 0  ⇒  C₂ = 0.",
        "At x = L:  EI·v = −P(L³/2 − L³/6) = −PL³/3.",
        "So the tip deflects δ = PL³/3EI downward."
      ],
      "proofTitle": "Origin at the wall",
      "methods": [
        {
          "title": "Origin at the free end",
          "steps": [
            "Measure ξ from the tip toward the wall (ξ = L − x). Keep the tip piece, so no wall reactions are needed.",
            "M(ξ) = −Pξ (hogging).",
            "Flipping the direction of the coordinate doesn't change the second derivative:  d²v/dξ² = d²v/dx².  So EI·v″ = −Pξ.",
            "EI·v′ = −Pξ²/2 + C₁. Wall slope zero at ξ = L:  −PL²/2 + C₁ = 0  ⇒  C₁ = PL²/2.",
            "EI·v = −Pξ³/6 + PL²ξ/2 + C₂. Wall deflection zero at ξ = L:  −PL³/6 + PL³/2 + C₂ = 0  ⇒  C₂ = −PL³/3.",
            "At the tip, ξ = 0:  EI·v = C₂ = −PL³/3  ⇒  δ = PL³/3EI.",
            "Here the moment expression is simpler (−Pξ), but both boundary conditions are at the far end."
          ]
        },
        {
          "title": "Moment-area about the free end",
          "steps": [
            "Moment-area theorem 2: the tip deflection relative to the wall tangent equals the first moment, about the tip, of the M/EI diagram between them.",
            "The wall tangent is horizontal (fixed end), so that relative deflection is the actual tip deflection.",
            "The M/EI diagram is a triangle: 0 at the tip, PL/EI at the wall. Area = ½·L·PL/EI = PL²/2EI.",
            "Its centroid is 2L/3 from the tip, toward the tall end.",
            "δ = (PL²/2EI)(2L/3) = PL³/3EI."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A simply supported beam of length L carries a uniform load w (force per length) over its full span. What is the maximum bending moment?",
      "options": [
        "wL²/2",
        "wL²/4",
        "wL²/8",
        "wL²/12"
      ],
      "answer": 2,
      "why": "Reactions are wL/2 each. At midspan M = (wL/2)(L/2) − (wL/2)(L/4) = wL²/8. wL²/12 is the end moment of a fixed-fixed beam.",
      "proof": [
        "Total load wL acts at midspan, so by symmetry R_A = R_B. Check with ΣM_A = 0:  R_B·L − wL·(L/2) = 0  ⇒  R_B = wL/2 = R_A.",
        "Cut at x. The load on the left piece is wx, acting at x/2 from the cut.",
        "M(x) = R_A·x − wx·(x/2) = (wL/2)x − wx²/2.",
        "Maximum where dM/dx = 0:  wL/2 − wx = 0  ⇒  x = L/2. (dM/dx is the shear, so this is where V = 0.)",
        "M(L/2) = (wL/2)(L/2) − w(L/2)²/2 = wL²/4 − wL²/8 = wL²/8."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 at midspan, x from −L/2 to L/2. R_B = wL/2.",
            "Cut at x and keep the right piece. Its length is u = L/2 − x, carrying load wu with centroid at u/2. R_B is at distance u.",
            "M = R_B·u − wu·(u/2) = (wL/2)u − wu²/2 = (w/2)·u(L − u).",
            "With u = L/2 − x:  u(L − u) = (L/2 − x)(L/2 + x) = L²/4 − x².  So M(x) = (w/2)(L²/4 − x²).",
            "This is an even parabola, with its maximum at x = 0:  M_max = (w/2)(L²/4) = wL²/8.",
            "No calculus is needed: the symmetric origin puts the vertex at x = 0."
          ]
        },
        {
          "title": "Origin at right support B",
          "steps": [
            "Measure ξ leftward from B. ΣM_B = 0:  R_A·L − wL·(L/2) = 0  ⇒  R_A = wL/2, and so R_B = wL/2.",
            "Keep the right piece:  M(ξ) = R_B·ξ − wξ·(ξ/2) = (wL/2)ξ − wξ²/2.",
            "dM/dξ = wL/2 − wξ = 0  ⇒  ξ = L/2.",
            "M(L/2) = wL²/4 − wL²/8 = wL²/8. This is the same expression as from A, as symmetry says it should be."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A cantilever of length L carries a uniform load w over its full length. What is the bending moment at the wall?",
      "options": [
        "wL²/8",
        "wL²/2",
        "wL²",
        "wL²/3"
      ],
      "answer": 1,
      "why": "The total load wL acts at the centroid of the distribution, L/2 from the wall: M = (wL)(L/2) = wL²/2.",
      "proof": [
        "Replace the distributed load with its resultant: magnitude wL, acting at its centroid, L/2 from the wall.",
        "ΣF_y = 0:  wall shear V = wL.",
        "ΣM about the wall = 0:  M_wall − wL·(L/2) = 0  ⇒  M_wall = wL²/2.",
        "Check with a cut at x: the load beyond the cut is w(L − x) acting (L − x)/2 away, so |M(x)| = w(L − x)²/2.",
        "That is largest at x = 0, giving wL²/2 at the wall, and zero at the free end."
      ],
      "proofTitle": "Origin at the wall (load resultant)",
      "methods": [
        {
          "title": "Origin at the free end",
          "steps": [
            "Measure ξ from the tip. Keep the tip piece, so no wall reactions are needed.",
            "The load on the tip piece is wξ, acting at ξ/2 from the cut:  M(ξ) = −wξ·(ξ/2) = −wξ²/2.",
            "|M| increases with ξ, so it is largest at the wall, ξ = L:  |M| = wL²/2.",
            "This is often the fastest route for any cantilever: start the cut from the free end."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A simply supported beam of length L carries a point load P at midspan. What is the maximum deflection?",
      "options": [
        "PL³/3EI",
        "PL³/48EI",
        "PL³/192EI",
        "5PL³/384EI"
      ],
      "answer": 1,
      "why": "δ = PL³/48EI at midspan. PL³/192EI is the same load on a fixed-fixed beam, and PL³/3EI is a tip-loaded cantilever.",
      "proof": [
        "From question 1: R_A = R_B = P/2 and, for 0 ≤ x ≤ L/2, M(x) = Px/2. The beam is symmetric about midspan.",
        "EI·v″ = Px/2.",
        "EI·v′ = Px²/4 + C₁. By symmetry the slope is zero at midspan, v′(L/2) = 0  ⇒  PL²/16 + C₁ = 0  ⇒  C₁ = −PL²/16.",
        "EI·v = Px³/12 − PL²x/16 + C₂. Pin at A, v(0) = 0  ⇒  C₂ = 0.",
        "At x = L/2:  EI·v = P(L³/8)/12 − PL²(L/2)/16 = PL³/96 − PL³/32 = PL³/96 − 3PL³/96 = −PL³/48.",
        "So δ_max = PL³/48EI, at midspan."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 under the load and work on the right half, 0 ≤ x ≤ L/2. Keep the right piece:  M(x) = (P/2)(L/2 − x) = PL/4 − Px/2.",
            "EI·v″ = PL/4 − Px/2.",
            "EI·v′ = PLx/4 − Px²/4 + C₁. Symmetry, v′(0) = 0  ⇒  C₁ = 0.",
            "EI·v = PLx²/8 − Px³/12 + C₂.",
            "Support at x = L/2, v = 0:  PL³/32 − PL³/96 + C₂ = 0  ⇒  C₂ = −(3 − 1)PL³/96 = −PL³/48.",
            "Midspan deflection is v(0) = C₂/EI, so δ = PL³/48EI. With the origin at the point you want, the answer is just the constant."
          ]
        },
        {
          "title": "Half beam as a cantilever from midspan",
          "steps": [
            "By symmetry the slope at midspan is zero, so each half acts like a cantilever built in at midspan.",
            "Each half has length L/2, and its free end (the support) carries the reaction P/2.",
            "Cantilever tip deflection (question 2):  (P/2)(L/2)³ / 3EI = (P/2)(L³/8)/3EI = PL³/48EI.",
            "That is how far the support sits above midspan, which is the midspan deflection:  δ = PL³/48EI."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "point",
            "x": 0.5,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A simply supported beam of length L carries a uniform load w over its full span. What is the maximum deflection?",
      "options": [
        "wL⁴/8EI",
        "wL⁴/384EI",
        "5wL⁴/384EI",
        "wL⁴/48EI"
      ],
      "answer": 2,
      "why": "δ = 5wL⁴/384EI at midspan. wL⁴/384EI is the fixed-fixed case (5× stiffer) and wL⁴/8EI is the cantilever.",
      "proof": [
        "From question 3:  M(x) = (wL/2)x − wx²/2.",
        "EI·v″ = wLx/2 − wx²/2.",
        "EI·v′ = wLx²/4 − wx³/6 + C₁.",
        "EI·v = wLx³/12 − wx⁴/24 + C₁x + C₂.",
        "v(0) = 0  ⇒  C₂ = 0.   v(L) = 0  ⇒  wL⁴/12 − wL⁴/24 + C₁L = 0  ⇒  C₁ = −wL³/24.",
        "At x = L/2, term by term:  wL(L³/8)/12 = wL⁴/96;  w(L⁴/16)/24 = wL⁴/384;  C₁(L/2) = −wL⁴/48.",
        "EI·v = wL⁴/96 − wL⁴/384 − wL⁴/48 = (4 − 1 − 8)wL⁴/384 = −5wL⁴/384.",
        "So δ_max = 5wL⁴/384EI, at midspan."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 at midspan. From question 3:  M(x) = (w/2)(L²/4 − x²) = wL²/8 − wx²/2.",
            "EI·v″ = wL²/8 − wx²/2.",
            "EI·v′ = wL²x/8 − wx³/6 + C₁. Symmetry, v′(0) = 0  ⇒  C₁ = 0.",
            "EI·v = wL²x²/16 − wx⁴/24 + C₂.",
            "Support at x = L/2, v = 0:  wL⁴/64 − wL⁴/384 + C₂ = 0  ⇒  C₂ = −(6 − 1)wL⁴/384 = −5wL⁴/384.",
            "Midspan:  v(0) = C₂/EI  ⇒  δ = 5wL⁴/384EI. That is one constant instead of two, because symmetry fixes C₁."
          ]
        },
        {
          "title": "Half beam as a cantilever from midspan",
          "steps": [
            "Midspan slope is zero, so each half is a cantilever of length a = L/2 built in at midspan.",
            "Load on that cantilever: the UDL w pushes down, and the reaction wL/2 pushes up at its tip (the support).",
            "Tip rise from the reaction (question 2):  (wL/2)a³/3EI = (wL/2)(L³/8)/3EI = wL⁴/48EI.",
            "Tip drop from the UDL (question 7):  w·a⁴/8EI = w(L⁴/16)/8EI = wL⁴/128EI.",
            "Net, support above midspan:  wL⁴/48EI − wL⁴/128EI = (8 − 3)wL⁴/384EI = 5wL⁴/384EI."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A cantilever of length L carries a uniform load w over its full length. What is the tip deflection?",
      "options": [
        "wL⁴/8EI",
        "wL⁴/3EI",
        "5wL⁴/384EI",
        "wL⁴/30EI"
      ],
      "answer": 0,
      "why": "δ = wL⁴/8EI. Note the L⁴ dependence for distributed loads versus L³ for point loads.",
      "proof": [
        "Wall at x = 0. Cut at x and keep the free-end piece: load w(L − x) at (L − x)/2 away, hogging:  M(x) = −w(L − x)²/2.",
        "EI·v″ = −w(L − x)²/2.",
        "Integrate:  EI·v′ = w(L − x)³/6 + C₁. (Check: d/dx of w(L − x)³/6 is −w(L − x)²/2.)",
        "Wall slope zero, v′(0) = 0  ⇒  wL³/6 + C₁ = 0  ⇒  C₁ = −wL³/6.",
        "Integrate:  EI·v = −w(L − x)⁴/24 − wL³x/6 + C₂.",
        "Wall deflection zero, v(0) = 0  ⇒  −wL⁴/24 + C₂ = 0  ⇒  C₂ = wL⁴/24.",
        "At x = L:  EI·v = 0 − wL⁴/6 + wL⁴/24 = −4wL⁴/24 + wL⁴/24 = −3wL⁴/24 = −wL⁴/8.",
        "So δ_tip = wL⁴/8EI."
      ],
      "proofTitle": "Origin at the wall",
      "methods": [
        {
          "title": "Origin at the free end",
          "steps": [
            "Measure ξ from the tip:  M(ξ) = −wξ²/2.",
            "EI·v″ = −wξ²/2.",
            "EI·v′ = −wξ³/6 + C₁. Wall slope zero at ξ = L  ⇒  C₁ = wL³/6.",
            "EI·v = −wξ⁴/24 + wL³ξ/6 + C₂. Wall deflection zero at ξ = L:  −wL⁴/24 + wL⁴/6 + C₂ = 0  ⇒  C₂ = −(4 − 1)wL⁴/24 = −wL⁴/8.",
            "Tip:  v(0) = C₂/EI  ⇒  δ = wL⁴/8EI."
          ]
        },
        {
          "title": "Moment-area about the free end",
          "steps": [
            "Tip deflection = first moment, about the tip, of the M/EI diagram from tip to wall (the wall tangent is horizontal).",
            "|M|/EI = wξ²/2EI, a parabolic spandrel. Area = ∫ from 0 to L of wξ²/2EI dξ = wL³/6EI.",
            "Its centroid from the tip:  ∫ξ·ξ² dξ / ∫ξ² dξ = (L⁴/4)/(L³/3) = 3L/4.",
            "δ = (wL³/6EI)(3L/4) = wL⁴/8EI."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A rectangular beam is bending about its horizontal axis. You double its height and keep the width, material, span and load the same. What happens to the deflection?",
      "options": [
        "It halves",
        "It drops to 1/4",
        "It drops to 1/8",
        "It drops to 1/16"
      ],
      "answer": 2,
      "why": "I = bh³/12, so doubling h multiplies I by 8. Deflection is proportional to 1/EI, so it falls to 1/8.",
      "proof": [
        "Every elastic beam deflection has the form δ = k·(load)·Lⁿ / (E·I), where k depends only on the supports and load type (for example 1/48, 1/3, 5/384).",
        "For a rectangle bending about its horizontal axis:  I = bh³/12.",
        "With height 2h:  I′ = b(2h)³/12 = 8·bh³/12 = 8I.",
        "k, load, L and E are unchanged, so δ′/δ = I/I′ = 1/8.",
        "The deflection drops to one eighth."
      ],
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            130,
            80,
            44,
            60,
            {
              "f": 1
            }
          ],
          [
            "r",
            280,
            20,
            44,
            120,
            {
              "f": 1
            }
          ],
          [
            "l",
            100,
            110,
            360,
            110,
            {
              "d": 1,
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "t",
            152,
            160,
            "b × h"
          ],
          [
            "t",
            302,
            160,
            "b × 2h"
          ],
          [
            "a",
            190,
            110,
            266,
            110
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Same change: the height of a rectangular section is doubled, with the same bending moment applied. What happens to the peak bending stress?",
      "options": [
        "It halves",
        "It drops to 1/4",
        "It drops to 1/8",
        "It is unchanged"
      ],
      "answer": 1,
      "why": "σ = Mc/I = 6M/(bh²). The section modulus goes with h², so stress falls to 1/4. Stiffness scales with h³, strength with h².",
      "proof": [
        "Flexure formula:  σ_max = M·c / I, with c = h/2 the distance to the outer fibre.",
        "For a rectangle:  σ_max = M(h/2) / (bh³/12) = 6M / (bh²). The term bh²/6 is the section modulus S.",
        "With height 2h:  σ′ = 6M / (b·(2h)²) = 6M / (4bh²) = σ/4.",
        "So the peak stress drops to one quarter.",
        "Compare with question 8: stiffness goes with I ∝ h³, but strength goes with S ∝ h²."
      ],
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            130,
            80,
            44,
            60,
            {
              "f": 1
            }
          ],
          [
            "r",
            280,
            20,
            44,
            120,
            {
              "f": 1
            }
          ],
          [
            "l",
            100,
            110,
            360,
            110,
            {
              "d": 1,
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "t",
            152,
            160,
            "b × h"
          ],
          [
            "t",
            302,
            160,
            "b × 2h"
          ],
          [
            "a",
            190,
            110,
            266,
            110
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A beam with a centre point load is changed from simply supported to fully fixed at both ends. How does the midspan deflection change?",
      "options": [
        "It halves",
        "It drops to 1/4",
        "It drops to 1/8",
        "It is unchanged"
      ],
      "answer": 1,
      "why": "Simply supported: PL³/48EI. Fixed-fixed: PL³/192EI. That is 4× stiffer. The peak moment also halves, from PL/4 to PL/8.",
      "proof": [
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
      "proofTitle": "Origin at the left fixed end",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 at the load and work on the right half, 0 ≤ x ≤ L/2. The end at x = L/2 has reaction P/2 and hogging moment M₀.",
            "Keep the right piece:  M(x) = (P/2)(L/2 − x) − M₀.",
            "EI·v′ = (P/2)(Lx/2 − x²/2) − M₀x + C₁. Symmetry, v′(0) = 0  ⇒  C₁ = 0.",
            "Fixed end, v′(L/2) = 0:  (P/2)(L²/4 − L²/8) − M₀L/2 = 0  ⇒  PL²/16 = M₀L/2  ⇒  M₀ = PL/8.",
            "EI·v = (P/2)(Lx²/4 − x³/6) − M₀x²/2 + C₂. Fixed end, v(L/2) = 0:  PL³/48 − PL³/64 + C₂ = 0  ⇒  C₂ = −PL³/192.",
            "Midspan:  v(0) = C₂/EI  ⇒  δ = PL³/192EI, which is 1/4 of PL³/48EI."
          ]
        },
        {
          "title": "Superposition on a simply supported beam",
          "steps": [
            "Treat it as a simply supported beam carrying P, plus equal end moments M₀ that restore zero end slope.",
            "End slope of a simply supported beam under centre load P:  PL²/16EI.",
            "End slope from equal and opposite end moments M₀ (uniform moment along the span):  M₀L/2EI, in the opposite sense.",
            "Fixed ends mean zero net slope:  PL²/16EI = M₀L/2EI  ⇒  M₀ = PL/8.",
            "Midspan deflection: PL³/48EI down from P, and M₀L²/8EI up from the uniform moment.",
            "δ = PL³/48EI − (PL/8)L²/8EI = PL³/48EI − PL³/64EI = PL³/192EI."
          ]
        }
      ],
      "diagram": {
        "support": "fixed",
        "loads": [
          {
            "kind": "point",
            "x": 0.5,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A cantilevered bracket is 200 mm long with a 20 mm wide × 10 mm tall rectangular section. A 500 N load acts at the tip. What is the peak bending stress at the root?",
      "options": [
        "75 MPa",
        "150 MPa",
        "300 MPa",
        "600 MPa"
      ],
      "answer": 2,
      "why": "M = 500 N × 200 mm = 100,000 N·mm. σ = 6M/(bh²) = 600,000 / (20 × 10²) = 300 MPa. That is above the roughly 275 MPa yield of 6061-T6, so an aluminium bracket would yield.",
      "proof": [
        "Root bending moment:  M = F·L = 500 N × 200 mm = 100,000 N·mm.",
        "Second moment of area (bending about the axis parallel to the 20 mm width):  I = bh³/12 = 20 × 10³ / 12 = 1,666.7 mm⁴.",
        "Distance to the outer fibre:  c = h/2 = 5 mm.",
        "σ = M·c / I = 100,000 × 5 / 1,666.7 = 300 N/mm² = 300 MPa.",
        "Check with σ = 6M/(bh²) = 600,000 / (20 × 100) = 300 MPa.",
        "6061-T6 yields at about 275 MPa, so this bracket would yield in aluminium."
      ],
      "proofTitle": "Origin at the wall",
      "methods": [
        {
          "title": "Origin at the load (free end)",
          "steps": [
            "Measure ξ from the tip. Keep the tip piece:  M(ξ) = −F·ξ = −500ξ N·mm.",
            "|M| grows linearly to the wall at ξ = 200 mm:  M = 500 × 200 = 100,000 N·mm. No wall reactions are needed.",
            "σ = 6M/(bh²) = 600,000 / (20 × 10²) = 300 MPa, as before.",
            "Stress at any section ξ:  σ(ξ) = 6·500ξ/(20 × 100) = 1.5ξ MPa. It is zero at the load and peaks at the root, which is why tapered brackets work."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "500 N"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A 20 mm diameter solid steel rod (E = 200 GPa) is cantilevered 500 mm with a 100 N load at the tip. Roughly what is the tip deflection?",
      "options": [
        "0.27 mm",
        "2.7 mm",
        "8.0 mm",
        "27 mm"
      ],
      "answer": 1,
      "why": "I = πd⁴/64 = π(20)⁴/64 ≈ 7,854 mm⁴. δ = PL³/3EI = (100 × 500³) / (3 × 200,000 × 7,854) ≈ 2.65 mm.",
      "proof": [
        "Solid circle:  I = πd⁴/64 = π × 20⁴ / 64 = π × 160,000 / 64 ≈ 7,854 mm⁴.",
        "Keep units in N and mm:  E = 200 GPa = 200,000 N/mm²,  L = 500 mm,  P = 100 N.",
        "Tip-loaded cantilever (question 2):  δ = PL³ / (3EI).",
        "Numerator:  100 × 500³ = 100 × 1.25×10⁸ = 1.25×10¹⁰ N·mm³.",
        "Denominator:  3 × 200,000 × 7,854 ≈ 4.712×10⁹ N·mm².",
        "δ = 1.25×10¹⁰ / 4.712×10⁹ ≈ 2.65 mm."
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "100 N"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A simply supported beam of length L carries a point load P at L/4 from the left support. What is the maximum bending moment?",
      "options": [
        "PL/4",
        "PL/8",
        "3PL/16",
        "3PL/4"
      ],
      "answer": 2,
      "why": "For a load at distance a from one end and b from the other, M_max = Pab/L = P(L/4)(3L/4)/L = 3PL/16, under the load. The left reaction is 3P/4.",
      "proof": [
        "Let a = L/4 (load to A) and b = 3L/4 (load to B).",
        "ΣM_A = 0:  R_B·L − P·a = 0  ⇒  R_B = Pa/L = P/4.",
        "ΣF_y = 0:  R_A = P − R_B = 3P/4  (= Pb/L).",
        "For x < a:  M(x) = R_A·x, rising linearly. For x > a:  M(x) = R_B(L − x), falling linearly.",
        "So M peaks under the load:  M_max = R_A·a = (3P/4)(L/4) = 3PL/16.",
        "In general:  M_max = Pab/L. With a = b = L/2 this gives PL/4, matching question 1."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at right support B",
          "steps": [
            "Measure ξ leftward from B. The load is at ξ = 3L/4.",
            "ΣM_B = 0:  R_A·L − P·(3L/4) = 0  ⇒  R_A = 3P/4, and so R_B = P/4.",
            "For ξ < 3L/4, keep the right piece:  M(ξ) = R_B·ξ = Pξ/4, rising toward the load.",
            "At the load:  M = (P/4)(3L/4) = 3PL/16. This matches the result from A, which is a good arithmetic check.",
            "In general, from either end:  M_max = R_near·(distance to load) = Pab/L."
          ]
        },
        {
          "title": "Origin at the load",
          "steps": [
            "Put s = 0 at the load. The left span is a = L/4 and the right span is b = 3L/4.",
            "Reactions:  R_A = Pb/L = 3P/4 and R_B = Pa/L = P/4.",
            "Left of the load (−a ≤ s ≤ 0):  M(s) = R_A(a + s), rising to R_A·a at s = 0.",
            "Right of the load (0 ≤ s ≤ b):  M(s) = R_B(b − s), falling from R_B·b at s = 0.",
            "Both sides agree at s = 0:  R_A·a = (3P/4)(L/4) = 3PL/16, and R_B·b = (P/4)(3L/4) = 3PL/16."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "point",
            "x": 0.25,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "For a simply supported beam under a full-span uniform load w, where is the shear force largest and what is its value?",
      "options": [
        "At midspan, wL/2",
        "At the supports, wL/2",
        "At the supports, wL",
        "At midspan, wL/4"
      ],
      "answer": 1,
      "why": "Shear equals the reaction wL/2 at each support and falls linearly to zero at midspan. Zero shear is where the moment peaks.",
      "proof": [
        "From question 3:  R_A = R_B = wL/2.",
        "Cut at x and sum vertical forces on the left piece:  V(x) = R_A − wx = w(L/2 − x).",
        "V is linear in x:  V(0) = +wL/2,  V(L/2) = 0,  V(L) = −wL/2.",
        "So |V| is largest at the supports, equal to wL/2.",
        "wL is the total load, which is split between the two supports and never acts as shear at a single section."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 at midspan, x from −L/2 to L/2. R_A = wL/2.",
            "Cut at x and keep the left piece, of length (L/2 + x):  V(x) = R_A − w(L/2 + x) = −wx.",
            "V is linear through zero at midspan and odd in x, as symmetry requires.",
            "The largest magnitude is at x = ±L/2 (the supports):  |V| = wL/2.",
            "Check with question 3's midspan origin:  M(x) = (w/2)(L²/4 − x²), so dM/dx = −wx = V."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A rectangular beam section carries a transverse shear force V over area A. What is the maximum shear stress and where does it occur?",
      "options": [
        "V/A, uniform over the section",
        "1.5 V/A, at the neutral axis",
        "1.5 V/A, at the outer fibres",
        "2 V/A, at the neutral axis"
      ],
      "answer": 1,
      "why": "τ = VQ/It gives a parabolic distribution: 1.5 V/A at the neutral axis and zero at the top and bottom surfaces. Bending stress is the opposite: zero at the neutral axis, peak at the surfaces.",
      "proof": [
        "Shear formula:  τ(y) = V·Q(y) / (I·b), where Q is the first moment about the neutral axis of the area beyond level y.",
        "For a b × h rectangle, the area beyond y is b(h/2 − y), with centroid at (h/2 + y)/2 from the neutral axis.",
        "Q(y) = b(h/2 − y)·(h/2 + y)/2 = (b/2)(h²/4 − y²).",
        "With I = bh³/12:  τ(y) = V(b/2)(h²/4 − y²) / ((bh³/12)·b) = 6V(h²/4 − y²) / (bh³).",
        "This is a parabola. At the outer fibres, y = ±h/2, τ = 0.",
        "At the neutral axis, y = 0:  τ_max = 6V(h²/4)/(bh³) = 1.5·V/(bh) = 1.5·V/A."
      ],
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel beam is replaced with an aluminium one of identical geometry under the same load. What happens to bending stress and deflection?",
      "options": [
        "Stress triples, deflection unchanged",
        "Both roughly triple",
        "Stress unchanged, deflection roughly triples",
        "Both unchanged"
      ],
      "answer": 2,
      "why": "Stress σ = Mc/I depends only on load and geometry. Deflection scales with 1/E, and E drops from about 200 GPa to about 69 GPa, so it grows about 2.9×. Whether the part still passes depends on aluminium's lower yield strength.",
      "proof": [
        "Stress:  σ = M·c / I. M comes from statics (loads and supports), c and I from geometry. E does not appear, so σ is unchanged.",
        "Deflection:  δ = k·(load)·Lⁿ / (E·I). Everything except E is the same, so δ ∝ 1/E.",
        "δ_Al / δ_steel = E_steel / E_Al ≈ 200 / 69 ≈ 2.9.",
        "So the stress is the same and the deflection is about 3× larger.",
        "Whether the part still passes depends on comparing that unchanged stress with aluminium's lower allowable stress."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported being asked about aluminium versus steel properties. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            110,
            48,
            240,
            10,
            {
              "f": 1
            }
          ],
          [
            "p",
            [
              [
                110,
                58
              ],
              [
                100,
                74
              ],
              [
                120,
                74
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "p",
            [
              [
                350,
                58
              ],
              [
                340,
                74
              ],
              [
                360,
                74
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "a",
            230,
            18,
            230,
            45
          ],
          [
            "t",
            366,
            58,
            "steel",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "r",
            110,
            122,
            240,
            10,
            {
              "f": 1
            }
          ],
          [
            "p",
            [
              [
                110,
                132
              ],
              [
                100,
                148
              ],
              [
                120,
                148
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "p",
            [
              [
                350,
                132
              ],
              [
                340,
                148
              ],
              [
                360,
                148
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "a",
            230,
            92,
            230,
            119
          ],
          [
            "t",
            366,
            132,
            "aluminium",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            238,
            24,
            "P",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            238,
            98,
            "P",
            {
              "an": "start",
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "For the same mass per unit length and the same material, which cross-section gives the highest bending stiffness about the horizontal axis?",
      "options": [
        "Solid round bar",
        "Solid square bar",
        "I-beam with the web vertical",
        "Flat plate laid horizontally"
      ],
      "answer": 2,
      "why": "Bending stiffness comes from I, which grows with the square of distance from the neutral axis. An I-beam puts most of its material in flanges far from that axis; the web mainly carries shear.",
      "proof": [
        "Same material, so bending stiffness EI is decided by I alone.",
        "I = ∫ y² dA. Each bit of area counts in proportion to the square of its distance from the neutral axis.",
        "Same mass per length means the same area A. Writing I = A·r², where r is the radius of gyration, stiffness depends only on how far out the area sits.",
        "Flat plate laid horizontally: its depth is tiny, so all the area is close to the axis and r is very small.",
        "Round vs square of equal area (a² = πd²/4):  I_sq / I_round = (a⁴/12) / (πd⁴/64) = π/3 ≈ 1.05. They are nearly the same, because both keep a lot of material near the axis.",
        "I-beam: most of the area is in flanges near y = ±h/2, so I ≈ 2·A_flange·(h/2)². That is far larger than any solid section with the same A. The thin web carries the shear."
      ],
      "reported": {
        "kind": "question",
        "note": "Several candidates reported being asked for the best or stiffest cross-section for a cantilever beam.",
        "sources": [
          "mdesearch",
          "xsec",
          "intern5",
          "me"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "c",
            80,
            75,
            30,
            {
              "f": 1
            }
          ],
          [
            "r",
            160,
            45,
            60,
            60,
            {
              "f": 1
            }
          ],
          [
            "r",
            270,
            40,
            56,
            10,
            {
              "f": 1
            }
          ],
          [
            "r",
            270,
            100,
            56,
            10,
            {
              "f": 1
            }
          ],
          [
            "r",
            293,
            50,
            10,
            50,
            {
              "f": 1
            }
          ],
          [
            "r",
            360,
            68,
            80,
            14,
            {
              "f": 1
            }
          ],
          [
            "t",
            80,
            140,
            "round",
            {
              "s": 12
            }
          ],
          [
            "t",
            190,
            140,
            "square",
            {
              "s": 12
            }
          ],
          [
            "t",
            298,
            140,
            "I-beam",
            {
              "s": 12
            }
          ],
          [
            "t",
            400,
            140,
            "flat plate",
            {
              "s": 12
            }
          ],
          [
            "t",
            230,
            20,
            "same mass per length",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A beam is fixed at one end and rests on a roller at the other, with a uniform load w over its length L. What is the roller reaction?",
      "options": [
        "wL/2",
        "3wL/8",
        "5wL/8",
        "wL/4"
      ],
      "answer": 1,
      "why": "The beam is statically indeterminate. Set the tip deflection to zero by superposition: wL⁴/8EI (down, from w) = RL³/3EI (up, from R), giving R = 3wL/8. The wall takes the other 5wL/8.",
      "proof": [
        "Unknowns: wall shear V_A, wall moment M_A and roller reaction R_B. Statics gives only 2 equations (ΣF, ΣM), so the beam is indeterminate to degree 1.",
        "Release the roller. The cantilever under w alone has tip deflection wL⁴/8EI downward (question 7).",
        "Apply R_B alone as an upward tip load. Tip deflection is R_B·L³/3EI upward (question 2).",
        "Compatibility: the roller allows no deflection, so by superposition  wL⁴/8EI = R_B·L³/3EI.",
        "Solve:  R_B = 3wL/8.",
        "ΣF_y = 0:  V_A = wL − 3wL/8 = 5wL/8.",
        "ΣM about the wall:  M_A = wL·(L/2) − R_B·L = wL²/2 − 3wL²/8 = wL²/8."
      ],
      "proofTitle": "Superposition at the roller",
      "methods": [
        {
          "title": "Integration with origin at the roller",
          "steps": [
            "Measure ξ from the roller (ξ = 0) to the wall (ξ = L). Keep the roller piece:  M(ξ) = Rξ − wξ²/2, with R unknown.",
            "EI·v″ = Rξ − wξ²/2.",
            "EI·v′ = Rξ²/2 − wξ³/6 + C₁.   EI·v = Rξ³/6 − wξ⁴/24 + C₁ξ + C₂.",
            "Roller, v(0) = 0  ⇒  C₂ = 0.",
            "Wall, v(L) = 0:  RL³/6 − wL⁴/24 + C₁L = 0  ⇒  C₁ = −RL²/6 + wL³/24.",
            "Wall, v′(L) = 0:  RL²/2 − wL³/6 + C₁ = 0. Substitute C₁:  RL²/2 − RL²/6 − wL³/6 + wL³/24 = 0.",
            "RL²/3 = wL³(4 − 1)/24 = wL³/8  ⇒  R = 3wL/8.",
            "Putting the origin at the unknown reaction means it appears in M directly, and three boundary conditions solve for three unknowns."
          ]
        },
        {
          "title": "Integration with origin at the wall",
          "steps": [
            "Measure x from the wall. Wall reactions V_A (up) and M_A (hogging) are unknown. Keep the left piece:  M(x) = −M_A + V_A·x − wx²/2.",
            "Fixed end:  v(0) = 0 and v′(0) = 0, so both integration constants are zero.",
            "EI·v = −M_A·x²/2 + V_A·x³/6 − wx⁴/24.",
            "Roller, v(L) = 0:  −M_A·L²/2 + V_A·L³/6 − wL⁴/24 = 0.",
            "Statics, ΣM about the roller:  M_A = V_A·L − wL²/2.",
            "Substitute:  −(V_A·L − wL²/2)L²/2 + V_A·L³/6 − wL⁴/24 = 0  ⇒  −V_A·L³/3 + wL⁴/4 − wL⁴/24 = 0  ⇒  V_A = 5wL/8.",
            "So R = wL − 5wL/8 = 3wL/8, and M_A = 5wL²/8 − wL²/2 = wL²/8."
          ]
        }
      ],
      "diagram": {
        "support": "propped",
        "loads": [
          {
            "kind": "udl",
            "from": 0,
            "to": 1,
            "label": "w"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "In four-point bending, a simply supported beam carries two equal loads P at L/3 from each support. What are the shear and moment between the two loads?",
      "options": [
        "V = P, M varies linearly",
        "V = 0, M = PL/3 (constant)",
        "V = 0, M = PL/4 (constant)",
        "V = P/2, M = PL/6"
      ],
      "answer": 1,
      "why": "Each reaction is P. Between the loads the shear cancels to zero, so the moment is constant at P × L/3. That pure-bending region is why four-point tests are used for material flexural properties.",
      "proof": [
        "Loads P at x = L/3 and x = 2L/3. By symmetry R_A = R_B. ΣF_y = 0:  2R = 2P  ⇒  R_A = R_B = P.",
        "Cut at L/3 < x < 2L/3, left piece:  V = R_A − P = 0.",
        "M(x) = R_A·x − P(x − L/3) = Px − Px + PL/3 = PL/3, which does not depend on x.",
        "Outside the loads (x < L/3):  V = P and M = Px, rising to PL/3 at x = L/3.",
        "Between the loads the shear is zero and the moment is constant, which is pure bending. That is why this setup is used to measure flexural properties."
      ],
      "proofTitle": "Origin at left support A",
      "methods": [
        {
          "title": "Origin at midspan",
          "steps": [
            "Put x = 0 at midspan. The loads are at x = ±L/6 and the middle region is −L/6 < x < L/6.",
            "Reactions are P each, by symmetry.",
            "Cut in the middle region and keep the left piece. R_A is at distance L/2 + x and the left load at distance L/6 + x:",
            "M(x) = P(L/2 + x) − P(L/6 + x) = PL/2 − PL/6 = PL/3. The x terms cancel.",
            "V = P − P = 0. Constant moment and zero shear: pure bending."
          ]
        }
      ],
      "diagram": {
        "support": "simple",
        "loads": [
          {
            "kind": "point",
            "x": 0.3333,
            "label": "P"
          },
          {
            "kind": "point",
            "x": 0.6667,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "Two identical flat plates are stacked and loaded in bending. Compared with leaving them free to slide, how much stiffer is the stack if they are fully bonded together?",
      "options": [
        "Same stiffness",
        "2× stiffer",
        "4× stiffer",
        "8× stiffer"
      ],
      "answer": 2,
      "why": "Unbonded, each plate bends about its own neutral axis: I = 2 × bh³/12. Bonded, they act as one section of height 2h: I = b(2h)³/12 = 8bh³/12. The ratio is 4. The bond line has to carry the interface shear for this to hold.",
      "proof": [
        "Unbonded: the interface cannot carry shear, so each plate bends about its own neutral axis and their stiffnesses add:  I_u = 2·bh³/12.",
        "Bonded: no slip at the interface, so the pair acts as one section of depth 2h, with the neutral axis on the bond line.",
        "I_b = b(2h)³/12 = 8·bh³/12.",
        "Check with the parallel axis theorem, each plate centroid at h/2 from the axis:  I_b = 2[bh³/12 + bh·(h/2)²] = 2[bh³/12 + 3bh³/12] = 8bh³/12.",
        "Ratio:  I_b / I_u = 8/2 = 4, so the bonded stack is 4× stiffer.",
        "The extra stiffness comes from the parallel-axis term, which only exists if the bond carries the interface shear flow."
      ],
      "reported": {
        "kind": "topic",
        "note": "Beam bending and shear/moment diagrams are the most often reported topic in Tesla mechanical interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "me",
          "mde2"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            60,
            50,
            150,
            16,
            {
              "f": 1
            }
          ],
          [
            "r",
            70,
            66,
            150,
            16,
            {
              "f": 1
            }
          ],
          [
            "t",
            140,
            112,
            "free to slide",
            {
              "s": 12
            }
          ],
          [
            "r",
            250,
            50,
            150,
            16,
            {
              "f": 1
            }
          ],
          [
            "r",
            250,
            66,
            150,
            16,
            {
              "f": 1
            }
          ],
          [
            "l",
            250,
            66,
            400,
            66,
            {
              "a": 1,
              "w": 3
            }
          ],
          [
            "t",
            325,
            112,
            "bonded",
            {
              "s": 12
            }
          ],
          [
            "t",
            230,
            150,
            "bonded stack: how much stiffer?",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A cantilever has a downward load at its free end. Where is the bending stress highest, and which surface is in tension?",
      "options": [
        "At the free end, bottom surface in tension",
        "At mid-length, top surface in tension",
        "At the wall, top surface in tension",
        "At the wall, bottom surface in tension"
      ],
      "answer": 2,
      "why": "The moment is largest at the wall (M = PL). The beam curves downward, so the top fibres stretch and the bottom fibres are compressed. That is where it yields or cracks first.",
      "proof": [
        "Cut at distance x from the wall and keep the tip piece:  |M(x)| = P(L − x).",
        "It is zero at the tip and largest at the wall:  M = PL.",
        "Bending stress:  σ = M·c/I, so it also peaks at the wall, at the outer fibres.",
        "A downward tip load bends the beam concave-down (hogging), so the top surface is stretched (tension) and the bottom is compressed.",
        "Shear force is P along the whole length. Deflection is largest at the tip:  PL³/3EI.",
        "A brittle beam cracks from the top surface at the wall. A ductile one yields at top and bottom there together."
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "question",
        "note": "Candidates reported being asked what happens to a cantilever under a downward force, and where a loaded cantilever would break.",
        "sources": [
          "cantforce",
          "cantbreak"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "For a cantilever with a point load P at its free end, what do the shear force and bending moment diagrams look like?",
      "options": [
        "Shear is constant at P, moment is linear from PL at the wall to zero at the tip",
        "Shear is linear, moment is parabolic",
        "Shear is zero, moment is constant at PL",
        "Shear is constant at P, moment is constant at PL"
      ],
      "answer": 0,
      "why": "No load acts between the wall and the tip, so shear stays at P. Moment is the area under the shear diagram, so it changes linearly: PL at the wall, zero at the free end.",
      "proof": [
        "Wall reactions:  V = P upward and M = PL.",
        "Cut anywhere along the beam: the only load beyond the cut is P, so V(x) = P. The shear diagram is a rectangle.",
        "Moment at the cut:  |M(x)| = P(L − x). It is a straight line from PL at the wall to 0 at the tip. The moment diagram is a triangle.",
        "Check:  dM/dx = −P, which matches the constant shear.",
        "With a uniform load instead, shear becomes linear (triangle) and moment parabolic, peaking at wL²/2."
      ],
      "proofTitle": "Cut from the wall",
      "methods": [
        {
          "title": "Cut from the free end",
          "steps": [
            "Measure ξ from the tip and keep the tip piece, so no reactions are needed.",
            "V(ξ) = P for every ξ.",
            "|M(ξ)| = P·ξ, growing linearly from 0 at the tip to PL at ξ = L.",
            "Same diagrams. For cantilevers, starting from the free end is usually fastest."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked for the shear and bending moment diagrams of a cantilever beam.",
        "sources": [
          "me",
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "The same beam, span L and load P are used two ways: as a cantilever with the load at the tip, and simply supported with the load at midspan. Which fails first, and where?",
      "options": [
        "The simply supported beam, at a support",
        "The cantilever, at the wall, at one quarter of the load the other can carry",
        "They fail at the same load",
        "The cantilever, at its tip"
      ],
      "answer": 1,
      "why": "Cantilever M_max = PL at the wall. Simply supported M_max = PL/4 at midspan. Same section, so the cantilever reaches the failure stress at a quarter of the load.",
      "proof": [
        "Cantilever, tip load:  M_max = P·L, at the wall.",
        "Simply supported, centre load:  M_max = P·L/4, at midspan under the load.",
        "Same cross-section, so stress σ = M·c/I is 4× higher in the cantilever for the same P.",
        "The cantilever fails at the wall (top fibre in tension). The simply supported beam fails at midspan (bottom fibre in tension).",
        "Deflection differs even more:  PL³/3EI against PL³/48EI, a factor of 16."
      ],
      "reported": {
        "kind": "question",
        "note": "An intern candidate reported being asked about the failure point of a simply supported beam versus a cantilever.",
        "sources": [
          "failpt"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "h",
            90,
            24,
            90,
            74,
            -1
          ],
          [
            "r",
            90,
            44,
            200,
            10,
            {
              "f": 1
            }
          ],
          [
            "a",
            290,
            14,
            290,
            40
          ],
          [
            "t",
            300,
            24,
            "P",
            {
              "an": "start"
            }
          ],
          [
            "t",
            320,
            54,
            "cantilever",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "r",
            90,
            120,
            200,
            10,
            {
              "f": 1
            }
          ],
          [
            "p",
            [
              [
                90,
                130
              ],
              [
                80,
                146
              ],
              [
                100,
                146
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "p",
            [
              [
                290,
                130
              ],
              [
                280,
                146
              ],
              [
                300,
                146
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "a",
            190,
            90,
            190,
            116
          ],
          [
            "t",
            200,
            100,
            "P",
            {
              "an": "start"
            }
          ],
          [
            "t",
            320,
            130,
            "simply supported",
            {
              "an": "start",
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "You need to reduce the tip deflection of a rectangular cantilever. Which single change reduces it the most?",
      "options": [
        "Double the width",
        "Shorten the length by 20%",
        "Switch to a higher-strength steel",
        "Increase the height by 30%"
      ],
      "answer": 3,
      "why": "δ = PL³/3EI with I = bh³/12. Height +30% gives 1/1.3³ = 0.46 of the deflection. Length −20% gives 0.51, doubling width gives 0.50, and a stronger steel changes nothing because E is the same.",
      "proof": [
        "δ = P·L³/(3·E·I), and I = b·h³/12. So δ ∝ P·L³/(E·b·h³).",
        "Double the width b:  δ × 1/2 = 0.50.",
        "Shorten L by 20%:  δ × 0.8³ = 0.51.",
        "Increase h by 30%:  δ × 1/1.3³ = 1/2.197 = 0.46.",
        "Stronger steel:  E is still about 200 GPa, so δ is unchanged.",
        "The full list of levers: lower the load, shorten the span, raise E, raise I (height is the strongest), or add a support."
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "question",
        "note": "Several candidates reported being asked how to decrease the deflection of a cantilever beam.",
        "sources": [
          "decdefl",
          "failpt",
          "reson"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Three cantilevers have the same length, load, material and cross-sectional area (1,200 mm²): (A) 20 wide × 60 tall, (B) 34.6 mm square, (C) 60 wide × 20 tall. Rank them from least to most deflection.",
      "options": [
        "C, B, A",
        "B, A, C",
        "A, B, C",
        "They all deflect the same"
      ],
      "answer": 2,
      "why": "I = bh³/12 gives 360,000, 120,000 and 40,000 mm⁴. Deflection goes as 1/I, so A deflects least, then B, then C, in the ratio 1 : 3 : 9.",
      "proof": [
        "Same P, L and E, so δ ∝ 1/I.",
        "A:  I = 20 × 60³/12 = 360,000 mm⁴.",
        "B:  I = 34.64⁴/12 = 120,000 mm⁴.",
        "C:  I = 60 × 20³/12 = 40,000 mm⁴.",
        "Deflections in the ratio 1 : 3 : 9. Least to most:  A, B, C."
      ],
      "proofTitle": "Compute I",
      "methods": [
        {
          "title": "Radius of gyration",
          "steps": [
            "With equal areas, I = A·r², and for a rectangle r² = h²/12.",
            "So I ∝ h²:  60² : 34.6² : 20² = 3,600 : 1,200 : 400 = 9 : 3 : 1.",
            "Same ranking with no need to compute I. For equal area, the deeper section always wins."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked to rank the deflection of a cantilever beam by cross-section.",
        "sources": [
          "mde2"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            95,
            30,
            30,
            90,
            {
              "f": 1
            }
          ],
          [
            "r",
            204,
            49,
            52,
            52,
            {
              "f": 1
            }
          ],
          [
            "r",
            325,
            60,
            90,
            30,
            {
              "f": 1
            }
          ],
          [
            "t",
            110,
            146,
            "A: 20 × 60",
            {
              "s": 12
            }
          ],
          [
            "t",
            230,
            146,
            "B: 34.6 sq",
            {
              "s": 12
            }
          ],
          [
            "t",
            370,
            146,
            "C: 60 × 20",
            {
              "s": 12
            }
          ],
          [
            "l",
            60,
            75,
            430,
            75,
            {
              "d": 1,
              "a": 1,
              "w": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A rectangular beam bends about its horizontal axis. Its width x is doubled and its height y is halved. What happens to the deflection under the same load?",
      "options": [
        "It is unchanged, because the area is the same",
        "It doubles",
        "It becomes 4× larger",
        "It drops to 1/4"
      ],
      "answer": 2,
      "why": "I = x·y³/12. New I = (2x)(y/2)³/12 = I/4. Deflection goes as 1/I, so it is 4× larger even though the area did not change.",
      "proof": [
        "I = x·y³/12, with y the dimension in the bending direction.",
        "New:  I′ = (2x)·(y/2)³/12 = 2x·y³/(8 × 12) = I/4.",
        "δ ∝ 1/I, so δ′ = 4δ.",
        "The area x·y is unchanged, so mass is the same. Stiffness is not.",
        "If instead x were the height and y the width:  I′ = (y/2)(2x)³/12 = 4I, and deflection would drop to 1/4. Always ask which dimension is in the load direction."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported a test question: a rectangular beam with one dimension doubled and the other halved, and what happens to deflection.",
        "sources": [
          "me"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            110,
            30,
            50,
            100,
            {
              "f": 1
            }
          ],
          [
            "r",
            260,
            55,
            100,
            50,
            {
              "f": 1
            }
          ],
          [
            "a",
            176,
            80,
            246,
            80
          ],
          [
            "l",
            110,
            150,
            160,
            150,
            {
              "w": 1
            }
          ],
          [
            "l",
            110,
            145,
            110,
            155,
            {
              "w": 1
            }
          ],
          [
            "l",
            160,
            145,
            160,
            155,
            {
              "w": 1
            }
          ],
          [
            "t",
            135,
            166,
            "x",
            {
              "s": 13
            }
          ],
          [
            "l",
            96,
            30,
            96,
            130,
            {
              "w": 1
            }
          ],
          [
            "l",
            91,
            30,
            101,
            30,
            {
              "w": 1
            }
          ],
          [
            "l",
            91,
            130,
            101,
            130,
            {
              "w": 1
            }
          ],
          [
            "t",
            88,
            85,
            "y",
            {
              "s": 13,
              "an": "end"
            }
          ],
          [
            "l",
            260,
            150,
            360,
            150,
            {
              "w": 1
            }
          ],
          [
            "l",
            260,
            145,
            260,
            155,
            {
              "w": 1
            }
          ],
          [
            "l",
            360,
            145,
            360,
            155,
            {
              "w": 1
            }
          ],
          [
            "t",
            310,
            166,
            "2x",
            {
              "s": 13
            }
          ],
          [
            "l",
            372,
            55,
            372,
            105,
            {
              "w": 1
            }
          ],
          [
            "l",
            367,
            55,
            377,
            55,
            {
              "w": 1
            }
          ],
          [
            "l",
            367,
            105,
            377,
            105,
            {
              "w": 1
            }
          ],
          [
            "t",
            380,
            85,
            "y/2",
            {
              "s": 13,
              "an": "start"
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A round cantilever carries a tip load. If you increase its diameter, does the bending stress at the base change?",
      "options": [
        "No, stress depends only on the load",
        "Yes, it falls in proportion to 1/d",
        "Yes, it falls in proportion to 1/d²",
        "Yes, it falls in proportion to 1/d³"
      ],
      "answer": 3,
      "why": "σ = Mc/I = 32M/(πd³). The moment PL is unchanged, so stress goes as 1/d³. Doubling the diameter cuts it to 1/8.",
      "proof": [
        "Moment at the base:  M = P·L, set by statics, so it does not change.",
        "σ = M·c/I with c = d/2 and I = π·d⁴/64.",
        "σ = (P·L)(d/2)/(π·d⁴/64) = 32·P·L/(π·d³).",
        "So σ ∝ 1/d³. Doubling d gives 1/8 of the stress.",
        "Deflection goes as 1/I ∝ 1/d⁴, so it falls to 1/16. Mass goes up 4×."
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "P"
          }
        ]
      },
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked whether the stress at the base of a cantilever changes if its diameter is increased, and how.",
        "sources": [
          "diam"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A steel cantilever (E = 200 GPa) is 1 m long with a 50 × 50 mm solid square section. A 1 kN load acts at the tip. What is the tip deflection?",
      "options": [
        "0.32 mm",
        "3.2 mm",
        "12.8 mm",
        "32 mm"
      ],
      "answer": 1,
      "why": "I = 50⁴/12 = 520,833 mm⁴. δ = PL³/3EI = (1,000 × 1,000³)/(3 × 200,000 × 520,833) = 3.2 mm.",
      "proof": [
        "I = b·h³/12 = 50 × 50³/12 = 520,833 mm⁴.",
        "Work in N and mm:  P = 1,000 N, L = 1,000 mm, E = 200,000 N/mm².",
        "δ = P·L³/(3·E·I) = 1,000 × 10⁹ / (3 × 200,000 × 520,833).",
        "δ = 10¹² / 3.125 × 10¹¹ = 3.2 mm."
      ],
      "proofTitle": "PL³/3EI",
      "methods": [
        {
          "title": "Beam as a spring",
          "steps": [
            "Tip stiffness:  k = 3·E·I/L³ = 3 × 200,000 × 520,833 / 10⁹ = 312.5 N/mm.",
            "δ = P/k = 1,000/312.5 = 3.2 mm.",
            "Bending stress check:  σ = 6·P·L/(b·h²) = 6 × 10⁶/125,000 = 48 MPa, far below yield, so the elastic formula applies."
          ]
        }
      ],
      "diagram": {
        "support": "cantilever",
        "loads": [
          {
            "kind": "point",
            "x": 1,
            "label": "1 kN"
          }
        ]
      },
      "reported": {
        "kind": "question",
        "note": "A candidate reported an interview focused on calculating beam deflection for a specific load and distance.",
        "sources": [
          "de"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "Two solid square beams have the same length and the same mass, one steel and one aluminium. Which deflects less under the same load?",
      "options": [
        "Steel, by about 3×",
        "They deflect the same",
        "Aluminium, by about 3×",
        "Aluminium, by about 8×"
      ],
      "answer": 2,
      "why": "Same mass means the aluminium beam has 2.9× the area, so 8.5× the I. Its EI is 69 × 8.45 / 200 ≈ 2.9× higher, so it deflects about a third as much.",
      "proof": [
        "Same mass and length:  ρ·A is equal, so A_al/A_st = 7.85/2.70 = 2.91.",
        "For a solid square, I = A²/12, so I_al/I_st = 2.91² = 8.45.",
        "EI ratio:  (69 × 8.45)/200 = 2.92.",
        "Deflection ∝ 1/EI, so the aluminium beam deflects about 1/2.9 as much."
      ],
      "proofTitle": "Compare EI at equal mass",
      "methods": [
        {
          "title": "Material index E/ρ²",
          "steps": [
            "For a beam of fixed length and shape with a free size, stiffness per mass² goes as E/ρ².",
            "Aluminium:  69/2.70² = 9.47.   Steel:  200/7.85² = 3.25.",
            "Ratio:  9.47/3.25 = 2.9 in favour of aluminium.",
            "Compare a tie rod in tension, where the index is E/ρ and the two metals tie. If the geometry is identical instead, steel deflects 2.9× less but weighs 2.9× more."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked whether an identical beam of aluminium or steel would have less deflection per unit mass.",
        "sources": [
          "almass"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            120,
            60,
            40,
            40,
            {
              "f": 2
            }
          ],
          [
            "r",
            270,
            46,
            68,
            68,
            {
              "f": 1
            }
          ],
          [
            "t",
            140,
            134,
            "steel"
          ],
          [
            "t",
            304,
            134,
            "aluminium"
          ],
          [
            "t",
            230,
            24,
            "same length, same mass",
            {
              "s": 12
            }
          ]
        ]
      }
    }
  ]
});
