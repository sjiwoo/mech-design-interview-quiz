/*
 * Topic: Moment of inertia (area moment) analysis.
 * Same question format as data/beam-loading.js. Cross-section diagrams use:
 *   diagram.section = {
 *     parts:  [[x, y, w, h], ...]          filled rectangles (y up)
 *     alt:    [[x, y, w, h], ...]          second material, darker fill
 *     cuts:   [[x, y, w, h], ...]          rectangular holes
 *     circles:[[cx, cy, r], ...]           filled circles
 *     holes:  [[cx, cy, r], ...]           circular holes
 *     axis:   { y, label }                 dashed bending axis
 *     labels: [{ x, y, text, anchor }]     text in model coordinates
 *   }
 */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "moment-of-inertia",
  "title": "Moment of inertia",
  "blurb": "Area moments for standard and built-up sections: parallel axis, centroids, hollow sections, orientation, buckling and composite beams.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "What is the second moment of area of a b × h rectangle about its horizontal centroidal axis (h is the vertical dimension)?",
      "options": [
        "bh³/12",
        "bh³/3",
        "b³h/12",
        "bh²/6"
      ],
      "answer": 0,
      "why": "I = bh³/12. bh³/3 is about the base, b³h/12 is about the vertical axis, and bh²/6 is the section modulus.",
      "proof": [
        "Definition:  I_x = ∫ y² dA, with y measured from the axis.",
        "Take a horizontal strip at height y, thickness dy:  dA = b·dy.",
        "Centroidal axis at mid-height, so y runs from −h/2 to +h/2.",
        "I_x = ∫ from −h/2 to h/2 of b·y² dy = b[y³/3] from −h/2 to h/2 = b(h³/24 + h³/24).",
        "I_x = bh³/12."
      ],
      "proofTitle": "Integrate about the centroid",
      "methods": [
        {
          "title": "Origin at the bottom edge, then shift",
          "steps": [
            "Measure y up from the bottom edge, so y runs from 0 to h:  I_base = ∫ from 0 to h of b·y² dy = bh³/3.",
            "Shift to the centroid, h/2 above the base, with the parallel axis theorem used in reverse:  I_c = I_base − A·d².",
            "I_c = bh³/3 − bh·(h/2)² = bh³/3 − bh³/4 = (4 − 3)bh³/12 = bh³/12."
          ]
        },
        {
          "title": "Split into two halves",
          "steps": [
            "Cut along the centroidal axis into two b × h/2 rectangles. Each one has its edge on the axis.",
            "Each half about its own edge (bh³/3 with height h/2):  b(h/2)³/3 = bh³/24.",
            "Two halves:  I = 2 × bh³/24 = bh³/12."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              40,
              60
            ]
          ],
          "axis": {
            "y": 30,
            "label": "x"
          },
          "labels": [
            {
              "x": 20,
              "y": -8,
              "text": "b"
            },
            {
              "x": 48,
              "y": 30,
              "text": "h",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Same b × h rectangle. What is its second moment of area about its bottom edge?",
      "options": [
        "bh³/12",
        "bh³/6",
        "bh³/3",
        "bh³/4"
      ],
      "answer": 2,
      "why": "Parallel axis theorem: bh³/12 + bh·(h/2)² = bh³/12 + 3bh³/12 = bh³/3.",
      "proof": [
        "Parallel axis theorem:  I = I_c + A·d², where I_c is about the centroid and d is the distance between the axes.",
        "From question 1:  I_c = bh³/12. Area A = bh. The centroid is d = h/2 above the base.",
        "I_base = bh³/12 + bh·(h/2)² = bh³/12 + bh³/4.",
        "Put over 12:  bh³/12 + 3bh³/12 = 4bh³/12 = bh³/3.",
        "Check by direct integration from 0 to h:  ∫ b·y² dy = bh³/3."
      ],
      "proofTitle": "Parallel axis from the centroid",
      "methods": [
        {
          "title": "Direct integration, origin at the base",
          "steps": [
            "Strip at height y from the base:  dA = b·dy, with y from 0 to h.",
            "I_base = ∫ from 0 to h of b·y² dy = b·h³/3.",
            "No centroid or parallel-axis step is needed when the origin is on the axis you want."
          ]
        },
        {
          "title": "Origin at the top edge",
          "steps": [
            "Measure s down from the top. A strip at depth s is (h − s) above the base.",
            "I_base = ∫ from 0 to h of b(h − s)² ds. Substitute u = h − s:  ∫ from 0 to h of b·u² du = bh³/3.",
            "Same result. The axis decides I, not where you put the coordinate origin."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              40,
              60
            ]
          ],
          "axis": {
            "y": 0,
            "label": "base"
          },
          "labels": [
            {
              "x": 20,
              "y": 68,
              "text": "b"
            },
            {
              "x": 48,
              "y": 30,
              "text": "h",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is the second moment of area of a solid circle of diameter d about a diameter?",
      "options": [
        "πd⁴/32",
        "πd⁴/64",
        "πd³/32",
        "πd⁴/16"
      ],
      "answer": 1,
      "why": "I = πd⁴/64. πd⁴/32 is the polar moment J, which is twice as large.",
      "proof": [
        "First find the polar moment  J = ∫ r² dA  about the centre.",
        "Use a thin ring of radius r and width dr:  dA = 2πr·dr.",
        "J = ∫ from 0 to R of r²·2πr dr = 2π·R⁴/4 = πR⁴/2.",
        "Since r² = x² + y², J = I_x + I_y. A circle is symmetric, so I_x = I_y = J/2 = πR⁴/4.",
        "With R = d/2:  I = π(d/2)⁴/4 = πd⁴/64."
      ],
      "proofTitle": "Polar moment and symmetry",
      "methods": [
        {
          "title": "Horizontal strips (Cartesian)",
          "steps": [
            "A strip at height y has width 2√(R² − y²), so dA = 2√(R² − y²) dy, with y from −R to R.",
            "I_x = ∫ from −R to R of y²·2√(R² − y²) dy.",
            "Substitute y = R sin θ, dy = R cos θ dθ:  I_x = ∫ from −π/2 to π/2 of 2R⁴ sin²θ cos²θ dθ.",
            "Use sin²θ cos²θ = sin²2θ / 4:  I_x = (R⁴/2) ∫ sin²2θ dθ = (R⁴/2)(π/2) = πR⁴/4.",
            "With R = d/2:  I = πd⁴/64. This route doesn't need the perpendicular axis theorem."
          ]
        }
      ],
      "diagram": {
        "section": {
          "circles": [
            [
              0,
              0,
              25
            ]
          ],
          "axis": {
            "y": 0,
            "label": "x"
          },
          "labels": [
            {
              "x": 0,
              "y": -33,
              "text": "d"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A round tube has outer diameter D and inner diameter d. What is its second moment of area about a diameter?",
      "options": [
        "π(D − d)⁴/64",
        "π(D⁴ − d⁴)/64",
        "π(D² − d²)²/64",
        "π(D⁴ − d⁴)/32"
      ],
      "answer": 1,
      "why": "Subtract the hole from the solid circle: πD⁴/64 − πd⁴/64. The /32 version is the polar moment J.",
      "proof": [
        "Second moments add and subtract for areas about the same axis, because I = ∫ y² dA is a sum over area.",
        "The tube is a solid circle of diameter D with a solid circle of diameter d removed, both centred on the same axis.",
        "From question 3:  I_outer = πD⁴/64 and I_hole = πd⁴/64.",
        "I_tube = πD⁴/64 − πd⁴/64 = π(D⁴ − d⁴)/64.",
        "Note that (D − d)⁴ and (D² − d²)² are not equal to D⁴ − d⁴, so those forms are wrong."
      ],
      "proofTitle": "Subtract the hole",
      "methods": [
        {
          "title": "Integrate rings from d to D",
          "steps": [
            "Polar moment by thin rings, only where there is material (r from d/2 to D/2):  J = ∫ r²·2πr dr = (π/2)[r⁴] = (π/2)(D⁴/16 − d⁴/16) = π(D⁴ − d⁴)/32.",
            "Symmetric section, so I = J/2 = π(D⁴ − d⁴)/64.",
            "Integrating only over material is the same as subtracting the hole, because integrals over areas add."
          ]
        }
      ],
      "diagram": {
        "section": {
          "circles": [
            [
              0,
              0,
              25
            ]
          ],
          "holes": [
            [
              0,
              0,
              18
            ]
          ],
          "axis": {
            "y": 0,
            "label": "x"
          },
          "labels": [
            {
              "x": 0,
              "y": -33,
              "text": "D"
            },
            {
              "x": 0,
              "y": 6,
              "text": "d"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "You double the diameter of a solid round shaft. By what factor does its second moment of area increase?",
      "options": [
        "2×",
        "4×",
        "8×",
        "16×"
      ],
      "answer": 3,
      "why": "I ∝ d⁴, so 2⁴ = 16. Bending deflection falls to 1/16, but peak stress (S ∝ d³) only falls to 1/8.",
      "proof": [
        "From question 3:  I = πd⁴/64, so I ∝ d⁴.",
        "I_new / I_old = (2d)⁴ / d⁴ = 2⁴ = 16.",
        "Deflection ∝ 1/I, so deflection drops to 1/16.",
        "Section modulus S = I/c = (πd⁴/64)/(d/2) = πd³/32, so S ∝ d³ and stress drops to 1/8.",
        "Area, and therefore mass, ∝ d², which only goes up 4×."
      ],
      "proofTitle": "From the formula",
      "methods": [
        {
          "title": "Dimensional scaling",
          "steps": [
            "I = ∫ y² dA has units of length⁴ (length² for y² times length² for dA).",
            "Scale every dimension by k. Each y becomes k·y and each dA becomes k²·dA, so I becomes k⁴·I, whatever the shape.",
            "k = 2  ⇒  16×. The same argument gives area ∝ k² and section modulus ∝ k³ for any shape."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "c",
            150,
            85,
            26,
            {
              "f": 1
            }
          ],
          [
            "c",
            310,
            85,
            52,
            {
              "f": 1
            }
          ],
          [
            "t",
            150,
            150,
            "d"
          ],
          [
            "t",
            310,
            158,
            "2d"
          ],
          [
            "a",
            190,
            85,
            246,
            85,
            {
              "a": 1
            }
          ],
          [
            "t",
            218,
            74,
            "I × ?",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A thin-walled round tube has mean radius R and wall thickness t, with t much smaller than R. Which is the best approximation for its second moment of area?",
      "options": [
        "πR³t",
        "2πR³t",
        "πR²t",
        "πRt³/12"
      ],
      "answer": 0,
      "why": "I ≈ πR³t. 2πR³t is the polar moment J. For R = 50, t = 2 the approximation is within 0.04% of the exact value.",
      "proof": [
        "Exact:  I = π(R_o⁴ − R_i⁴)/4, with R_o = R + t/2 and R_i = R − t/2.",
        "Factor:  R_o⁴ − R_i⁴ = (R_o² − R_i²)(R_o² + R_i²).",
        "R_o² − R_i² = (R_o − R_i)(R_o + R_i) = t·2R = 2Rt.",
        "R_o² + R_i² = 2R² + t²/2 ≈ 2R² when t ≪ R.",
        "So R_o⁴ − R_i⁴ ≈ 2Rt · 2R² = 4R³t, and I ≈ π·4R³t/4 = πR³t.",
        "Another way to see it: the area 2πRt sits at an average y² of R²/2, giving 2πRt · R²/2 = πR³t."
      ],
      "proofTitle": "Expand the exact formula",
      "methods": [
        {
          "title": "Integrate around the thin ring",
          "steps": [
            "Put the origin at the centre and use the angle θ around the wall. A wall element is dA = t·R dθ at height y = R sin θ.",
            "I = ∫ from 0 to 2π of (R sin θ)²·tR dθ = tR³ ∫ sin²θ dθ = tR³·π.",
            "I ≈ πR³t. The thin-wall assumption is that the whole wall sits at radius R."
          ]
        }
      ],
      "diagram": {
        "section": {
          "circles": [
            [
              0,
              0,
              25
            ]
          ],
          "holes": [
            [
              0,
              0,
              23
            ]
          ],
          "axis": {
            "y": 0,
            "label": "x"
          },
          "labels": [
            {
              "x": 0,
              "y": -33,
              "text": "mean radius R, wall t"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A rectangular bar is 40 mm wide and 60 mm tall. What is its second moment of area about the horizontal centroidal axis?",
      "options": [
        "320,000 mm⁴",
        "720,000 mm⁴",
        "2,880,000 mm⁴",
        "24,000 mm⁴"
      ],
      "answer": 1,
      "why": "I = bh³/12 = 40 × 60³ / 12 = 720,000 mm⁴. 320,000 uses the wrong orientation, and 2,880,000 is about the base.",
      "proof": [
        "Bending about the horizontal axis, so h = 60 mm (vertical) and b = 40 mm.",
        "60³ = 216,000 mm³.",
        "I = bh³/12 = 40 × 216,000 / 12 = 8,640,000 / 12 = 720,000 mm⁴.",
        "Swapping b and h gives 60 × 40³ / 12 = 320,000 mm⁴, which is the weak axis.",
        "About the base it would be bh³/3 = 2,880,000 mm⁴."
      ],
      "proofTitle": "bh³/12 about the centroid",
      "methods": [
        {
          "title": "About the base, then shift",
          "steps": [
            "About the bottom edge:  bh³/3 = 40 × 216,000 / 3 = 2,880,000 mm⁴.",
            "Shift to the centroid, 30 mm up:  A·d² = 2,400 × 30² = 2,160,000 mm⁴.",
            "I_c = 2,880,000 − 2,160,000 = 720,000 mm⁴."
          ]
        },
        {
          "title": "Two 40 × 30 halves",
          "steps": [
            "Each half about its own centroid:  40 × 30³ / 12 = 90,000 mm⁴.",
            "Each half's centroid is 15 mm from the axis:  A·d² = 1,200 × 15² = 270,000 mm⁴.",
            "I = 2 × (90,000 + 270,000) = 720,000 mm⁴."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              40,
              60
            ]
          ],
          "axis": {
            "y": 30,
            "label": "x"
          },
          "labels": [
            {
              "x": 20,
              "y": -8,
              "text": "40"
            },
            {
              "x": 48,
              "y": 30,
              "text": "60",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "That 40 wide × 60 tall bar is rotated 90° so it is 60 wide × 40 tall, with the same load. How does its bending deflection change?",
      "options": [
        "Unchanged",
        "About 1.5× larger",
        "About 2.25× larger",
        "About 3.4× larger"
      ],
      "answer": 2,
      "why": "I drops from 720,000 to 320,000 mm⁴, a ratio of (60/40)² = 2.25. Deflection ∝ 1/I.",
      "proof": [
        "Upright:  I = 40 × 60³ / 12 = 720,000 mm⁴.",
        "On its side:  I = 60 × 40³ / 12 = 60 × 64,000 / 12 = 320,000 mm⁴.",
        "In general, the ratio is (b·h³)/(h·b³) = (h/b)² = (60/40)² = 2.25.",
        "Deflection ∝ 1/I, so it grows by 720,000 / 320,000 = 2.25×.",
        "Same area and mass, so orientation alone changes the stiffness by 2.25×."
      ],
      "proofTitle": "Compute both I values",
      "methods": [
        {
          "title": "Radius of gyration",
          "steps": [
            "For a rectangle, r² = I/A = (bh³/12)/(bh) = h²/12, where h is the depth in the bending direction.",
            "Upright (h = 60):  r² = 3,600/12 = 300 mm². On its side (h = 40):  r² = 1,600/12 = 133.3 mm².",
            "Same area, so I ∝ r²:  300 / 133.3 = 2.25. Deflection grows 2.25×."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              60,
              40
            ]
          ],
          "axis": {
            "y": 20,
            "label": "x"
          },
          "labels": [
            {
              "x": 30,
              "y": -8,
              "text": "60"
            },
            {
              "x": 68,
              "y": 20,
              "text": "40",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A square tube is 50 mm outside with a 5 mm wall. What is its second moment of area about a centroidal axis parallel to one side?",
      "options": [
        "520,833 mm⁴",
        "307,500 mm⁴",
        "213,333 mm⁴",
        "92,250 mm⁴"
      ],
      "answer": 1,
      "why": "Outer square minus inner square: (50⁴ − 40⁴)/12 = 307,500 mm⁴.",
      "proof": [
        "The inner opening is 50 − 2 × 5 = 40 mm square, and shares the same centroid.",
        "Outer square:  50 × 50³ / 12 = 6,250,000 / 12 = 520,833 mm⁴.",
        "Inner square:  40 × 40³ / 12 = 2,560,000 / 12 = 213,333 mm⁴.",
        "Subtract:  I = 520,833 − 213,333 = 307,500 mm⁴.",
        "The tube keeps 59% of the solid square's I with only 36% of its area (900 vs 2,500 mm²)."
      ],
      "proofTitle": "Outer minus inner square",
      "methods": [
        {
          "title": "Add up the four walls",
          "steps": [
            "Side walls (5 wide × 50 tall, centred on the axis):  each 5 × 50³/12 = 52,083 mm⁴, so both together give 104,167 mm⁴.",
            "Top and bottom walls (40 wide × 5 thick, fitting between the sides), centroid 25 − 2.5 = 22.5 mm from the axis:",
            "Each:  40 × 5³/12 + (40 × 5) × 22.5² = 417 + 101,250 = 101,667 mm⁴, so both together give 203,333 mm⁴.",
            "Total:  104,167 + 203,333 = 307,500 mm⁴. This shows the top and bottom walls carry 2/3 of I."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              50,
              50
            ]
          ],
          "cuts": [
            [
              5,
              5,
              40,
              40
            ]
          ],
          "axis": {
            "y": 25,
            "label": "x"
          },
          "labels": [
            {
              "x": 25,
              "y": -8,
              "text": "50"
            },
            {
              "x": 58,
              "y": 25,
              "text": "wall 5",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "An I-beam is 200 mm deep with two 100 × 10 mm flanges and a 10 mm thick web. Roughly what is its strong-axis second moment of area?",
      "options": [
        "4.9 × 10⁶ mm⁴",
        "1.8 × 10⁷ mm⁴",
        "2.3 × 10⁷ mm⁴",
        "6.7 × 10⁷ mm⁴"
      ],
      "answer": 2,
      "why": "Flanges contribute about 1.81 × 10⁷ and the web 0.49 × 10⁷, for 2.29 × 10⁷ mm⁴. 6.7 × 10⁷ is a solid 100 × 200 block.",
      "proof": [
        "Web: 10 mm thick, 200 − 2 × 10 = 180 mm tall, centred on the axis.  I_web = 10 × 180³ / 12 = 4,860,000 mm⁴.",
        "Each flange about its own centroid:  100 × 10³ / 12 = 8,333 mm⁴.",
        "Each flange centroid is 100 − 5 = 95 mm from the neutral axis. Parallel axis term:  A·d² = 1,000 × 95² = 9,025,000 mm⁴.",
        "Each flange:  8,333 + 9,025,000 = 9,033,333 mm⁴. Two flanges:  18,066,667 mm⁴.",
        "Total:  I = 4,860,000 + 18,066,667 = 22,926,667 ≈ 2.29 × 10⁷ mm⁴.",
        "Check by subtraction:  (100 × 200³ − 90 × 180³)/12 = (800,000,000 − 524,880,000)/12 = 22,926,667 mm⁴.",
        "The flanges hold 50% of the area but give 79% of I, almost all from the A·d² term."
      ],
      "proofTitle": "Sum of parts about the centroid",
      "methods": [
        {
          "title": "Envelope minus voids",
          "steps": [
            "Solid 100 × 200 envelope:  100 × 200³/12 = 66,666,667 mm⁴.",
            "Remove the two side voids next to the web. Together they form a 90 × 180 block centred on the axis:  90 × 180³/12 = 43,740,000 mm⁴.",
            "I = 66,666,667 − 43,740,000 = 22,926,667 mm⁴ ≈ 2.29 × 10⁷. This is the quickest route for symmetric I and box sections."
          ]
        },
        {
          "title": "Origin at the bottom face, then shift",
          "steps": [
            "About the bottom face, using I_own + A·y² for each part:",
            "Bottom flange:  8,333 + 1,000 × 5² = 33,333.   Web:  4,860,000 + 1,800 × 100² = 22,860,000.   Top flange:  8,333 + 1,000 × 195² = 38,033,333.",
            "I_base = 60,926,667 mm⁴. Total area A = 3,800 mm², and the centroid is at 100 mm by symmetry.",
            "I_c = I_base − A·ȳ² = 60,926,667 − 3,800 × 100² = 22,926,667 mm⁴."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              100,
              10
            ],
            [
              0,
              190,
              100,
              10
            ],
            [
              45,
              10,
              10,
              180
            ]
          ],
          "axis": {
            "y": 100,
            "label": "x"
          },
          "labels": [
            {
              "x": 50,
              "y": -10,
              "text": "100"
            },
            {
              "x": 108,
              "y": 100,
              "text": "200",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked to describe the moment of inertia of an I-beam compared with a rectangular beam.",
        "sources": [
          "ibeam"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A T-section has a 100 × 20 mm flange on top of a 20 mm wide × 80 mm tall web, for a total height of 100 mm. How far above the bottom of the web is the centroid?",
      "options": [
        "50.0 mm",
        "32.2 mm",
        "67.8 mm",
        "60.0 mm"
      ],
      "answer": 2,
      "why": "ȳ = ΣAy / ΣA = (2,000 × 90 + 1,600 × 40) / 3,600 = 67.8 mm. 32.2 mm is the distance from the top.",
      "proof": [
        "Measure y up from the bottom of the web.",
        "Flange:  A₁ = 100 × 20 = 2,000 mm², centroid at y₁ = 80 + 10 = 90 mm.",
        "Web:  A₂ = 20 × 80 = 1,600 mm², centroid at y₂ = 40 mm.",
        "ȳ = (A₁y₁ + A₂y₂)/(A₁ + A₂) = (180,000 + 64,000)/3,600 = 244,000/3,600.",
        "ȳ = 67.8 mm above the bottom, which is 32.2 mm below the top.",
        "The neutral axis shifts toward the heavier flange, so the section is not symmetric top to bottom."
      ],
      "proofTitle": "Origin at the bottom of the web",
      "methods": [
        {
          "title": "Origin at the top of the flange",
          "steps": [
            "Measure down from the top. Flange centroid 10 mm down, web centroid 20 + 40 = 60 mm down.",
            "ȳ_top = (2,000 × 10 + 1,600 × 60)/3,600 = 116,000/3,600 = 32.2 mm below the top.",
            "From the bottom:  100 − 32.2 = 67.8 mm. Same point, and a good check on the arithmetic."
          ]
        },
        {
          "title": "Bounding box minus voids",
          "steps": [
            "The 100 × 100 bounding box has A = 10,000 mm² with its centroid at 50 mm.",
            "Remove two 40 × 80 voids beside the web:  A = 6,400 mm² in total, centroid at 40 mm.",
            "ȳ = (10,000 × 50 − 6,400 × 40)/(10,000 − 6,400) = 244,000/3,600 = 67.8 mm. Negative areas work in the centroid sum."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              80,
              100,
              20
            ],
            [
              40,
              0,
              20,
              80
            ]
          ],
          "labels": [
            {
              "x": 50,
              "y": 108,
              "text": "100"
            },
            {
              "x": 108,
              "y": 90,
              "text": "20",
              "anchor": "start"
            },
            {
              "x": 68,
              "y": 40,
              "text": "80",
              "anchor": "start"
            },
            {
              "x": 50,
              "y": -10,
              "text": "20"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "For the same T-section, what is the second moment of area about its horizontal centroidal axis?",
      "options": [
        "0.92 × 10⁶ mm⁴",
        "3.14 × 10⁶ mm⁴",
        "8.33 × 10⁶ mm⁴",
        "1.97 × 10⁷ mm⁴"
      ],
      "answer": 1,
      "why": "Each part's own I plus A·d² to the centroid at 67.8 mm gives 3.14 × 10⁶ mm⁴. 0.92 × 10⁶ leaves out the A·d² terms, and 1.97 × 10⁷ is about the base.",
      "proof": [
        "From question 11:  ȳ = 67.78 mm from the bottom.",
        "Flange own:  100 × 20³ / 12 = 66,667 mm⁴.  Distance d₁ = 90 − 67.78 = 22.22 mm.  A₁d₁² = 2,000 × 493.8 = 987,654 mm⁴.",
        "Web own:  20 × 80³ / 12 = 853,333 mm⁴.  Distance d₂ = 67.78 − 40 = 27.78 mm.  A₂d₂² = 1,600 × 771.6 = 1,234,568 mm⁴.",
        "I = 66,667 + 987,654 + 853,333 + 1,234,568 = 3,142,222 mm⁴ ≈ 3.14 × 10⁶ mm⁴.",
        "The A·d² terms make up about 70% of the total, so leaving them out is a big error.",
        "Check about the base:  I_base = I_c + Aȳ² = 3,142,222 + 3,600 × 67.78² ≈ 1.97 × 10⁷ mm⁴, which matches summing each part's I about the base directly."
      ],
      "proofTitle": "Parts about the centroid",
      "methods": [
        {
          "title": "About the base, then shift",
          "steps": [
            "Flange about the base:  66,667 + 2,000 × 90² = 16,266,667 mm⁴.",
            "Web about its own bottom edge:  20 × 80³/3 = 3,413,333 mm⁴.",
            "I_base = 19,680,000 mm⁴.",
            "Shift to the centroid:  I_c = I_base − A·ȳ² = 19,680,000 − 3,600 × 67.78² = 19,680,000 − 16,537,778 = 3,142,222 mm⁴."
          ]
        },
        {
          "title": "About the top, then shift",
          "steps": [
            "Flange about its own top edge:  100 × 20³/3 = 266,667 mm⁴.",
            "Web about the top, with its centroid 60 mm down:  853,333 + 1,600 × 60² = 6,613,333 mm⁴.",
            "I_top = 6,880,000 mm⁴.",
            "Shift to the centroid, 32.22 mm down:  I_c = 6,880,000 − 3,600 × 32.22² = 6,880,000 − 3,737,778 = 3,142,222 mm⁴.",
            "Base or top: pick the reference that makes the part terms easiest, then subtract A·ȳ² once."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              80,
              100,
              20
            ],
            [
              40,
              0,
              20,
              80
            ]
          ],
          "axis": {
            "y": 67.78,
            "label": "x"
          },
          "labels": [
            {
              "x": 50,
              "y": 108,
              "text": "100"
            },
            {
              "x": 68,
              "y": 40,
              "text": "ȳ = 67.8",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "You know a section's I₁ about an axis d₁ from its centroid and want I₂ about a parallel axis d₂ from the centroid. Which is correct?",
      "options": [
        "I₂ = I₁ + A(d₂ − d₁)²",
        "I₂ = I₁ − A·d₁² + A·d₂²",
        "I₂ = I₁ + A·d₂²",
        "I₂ = I₁, because the axes are parallel"
      ],
      "answer": 1,
      "why": "The parallel axis theorem only works from the centroidal axis. Step back to the centroid, then out to the new axis.",
      "proof": [
        "The theorem is I = I_c + A·d², where I_c must be about the centroidal axis.",
        "It holds because the cross term 2d·∫y dA is zero only when y is measured from the centroid.",
        "Step back to the centroid:  I_c = I₁ − A·d₁².",
        "Step out to the new axis:  I₂ = I_c + A·d₂² = I₁ − A·d₁² + A·d₂².",
        "Check with a b × h rectangle, from bottom edge to top edge (d₁ = d₂ = h/2):  I₂ = I₁ = bh³/3, which is right by symmetry.",
        "The (d₂ − d₁)² form would give bh³/3 + bh·h², which is wrong."
      ],
      "proofTitle": "Step back to the centroid",
      "methods": [
        {
          "title": "Expand the integral directly",
          "steps": [
            "Let a₁ and a₂ be the signed positions of the two axes measured from the centroid, with y from the centroid.",
            "I₂ = ∫(y − a₂)² dA = ∫[(y − a₁) + (a₁ − a₂)]² dA.",
            "= I₁ + 2(a₁ − a₂)∫(y − a₁) dA + A(a₁ − a₂)².",
            "The cross term is not zero here:  ∫(y − a₁) dA = 0 − A·a₁ = −A·a₁.",
            "I₂ = I₁ − 2A·a₁(a₁ − a₂) + A(a₁ − a₂)² = I₁ + A(a₂² − a₁²).",
            "That is the same as I₁ − A·d₁² + A·d₂². The naive A(d₂ − d₁)² form leaves out the cross term."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "p",
            [
              [
                150,
                60
              ],
              [
                210,
                34
              ],
              [
                300,
                50
              ],
              [
                320,
                100
              ],
              [
                260,
                140
              ],
              [
                170,
                126
              ]
            ],
            {
              "close": 1,
              "f": 1
            }
          ],
          [
            "l",
            90,
            90,
            380,
            90,
            {
              "d": 1,
              "w": 1.5
            }
          ],
          [
            "l",
            90,
            50,
            380,
            50,
            {
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "l",
            90,
            150,
            380,
            150,
            {
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "c",
            236,
            90,
            4,
            {
              "f": 2
            }
          ],
          [
            "t",
            386,
            94,
            "centroid",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            386,
            54,
            "axis 1",
            {
              "an": "start",
              "s": 12,
              "a": 1
            }
          ],
          [
            "t",
            386,
            154,
            "axis 2",
            {
              "an": "start",
              "s": 12,
              "a": 1
            }
          ],
          [
            "l",
            120,
            50,
            120,
            90,
            {
              "w": 1
            }
          ],
          [
            "l",
            115,
            50,
            125,
            50,
            {
              "w": 1
            }
          ],
          [
            "l",
            115,
            90,
            125,
            90,
            {
              "w": 1
            }
          ],
          [
            "t",
            112,
            75,
            "d₁",
            {
              "s": 13,
              "an": "end"
            }
          ],
          [
            "l",
            120,
            90,
            120,
            150,
            {
              "w": 1
            }
          ],
          [
            "l",
            115,
            90,
            125,
            90,
            {
              "w": 1
            }
          ],
          [
            "l",
            115,
            150,
            125,
            150,
            {
              "w": 1
            }
          ],
          [
            "t",
            112,
            125,
            "d₂",
            {
              "s": 13,
              "an": "end"
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "The T-section from question 11 (flange on top) carries a sagging moment. Where is the bending stress largest?",
      "options": [
        "Top surface of the flange",
        "Bottom of the web",
        "At the flange–web junction",
        "At the neutral axis"
      ],
      "answer": 1,
      "why": "σ = Mc/I, so the fibre farthest from the neutral axis has the highest stress. The bottom of the web is 67.8 mm away and the top is 32.2 mm away.",
      "proof": [
        "Bending stress is linear in distance from the neutral axis:  σ = M·y/I.",
        "From question 11 the neutral axis is 67.8 mm above the bottom and 32.2 mm below the top.",
        "c_bottom = 67.8 mm and c_top = 32.2 mm.",
        "σ_bottom / σ_top = 67.8 / 32.2 ≈ 2.1, so the web bottom is about twice as highly stressed, in tension under a sagging moment.",
        "So the section has two section moduli:  S_bottom = I/67.8 and S_top = I/32.2. Design to the smaller one, S_bottom.",
        "Stress is zero at the neutral axis, which is why the web tip is the critical point."
      ],
      "proofTitle": "Distance from the neutral axis",
      "methods": [
        {
          "title": "Compare the section moduli",
          "steps": [
            "From question 12:  I = 3,142,222 mm⁴.",
            "S_bottom = I / 67.78 = 46,361 mm³.   S_top = I / 32.22 = 97,517 mm³.",
            "σ = M/S, so the smaller S gives the larger stress:  σ_bottom / σ_top = 97,517 / 46,361 = 2.1.",
            "Handbooks often list both S values for T and channel sections, so check which fibre each one refers to."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              80,
              100,
              20
            ],
            [
              40,
              0,
              20,
              80
            ]
          ],
          "axis": {
            "y": 67.78,
            "label": "NA"
          },
          "labels": [
            {
              "x": 68,
              "y": 8,
              "text": "c = 67.8",
              "anchor": "start"
            },
            {
              "x": 108,
              "y": 90,
              "text": "c = 32.2",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is the polar moment of area J of a solid round shaft of diameter d, used in torsion (τ = Tr/J)?",
      "options": [
        "πd⁴/64",
        "πd⁴/32",
        "πd³/16",
        "πd⁴/16"
      ],
      "answer": 1,
      "why": "J = πd⁴/32, which is I_x + I_y = 2 × πd⁴/64. πd³/16 is J/r, the torsional section modulus.",
      "proof": [
        "Polar moment:  J = ∫ r² dA, where r is the distance from the shaft axis.",
        "Thin ring at radius r:  dA = 2πr dr.",
        "J = ∫ from 0 to d/2 of 2πr³ dr = 2π(d/2)⁴/4 = πd⁴/32.",
        "Check:  r² = x² + y², so J = I_x + I_y = 2 × πd⁴/64 = πd⁴/32.",
        "Peak shear:  τ_max = T(d/2)/J = 16T/(πd³), so πd³/16 is the torsional section modulus."
      ],
      "proofTitle": "Integrate rings",
      "methods": [
        {
          "title": "Perpendicular axis theorem",
          "steps": [
            "For any flat area, r² = x² + y², so J_z = I_x + I_y.",
            "From question 3, a circle has I_x = I_y = πd⁴/64.",
            "J = 2 × πd⁴/64 = πd⁴/32."
          ]
        }
      ],
      "diagram": {
        "section": {
          "circles": [
            [
              0,
              0,
              25
            ]
          ],
          "labels": [
            {
              "x": 0,
              "y": -33,
              "text": "d"
            },
            {
              "x": 0,
              "y": 4,
              "text": "J about centre"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A 40 mm solid shaft is replaced by a 50 mm OD tube with the same cross-sectional area (and so the same mass). How does the bending stiffness change?",
      "options": [
        "Unchanged",
        "About 1.25×",
        "About 1.56×",
        "About 2.1×"
      ],
      "answer": 3,
      "why": "Same area means the tube's ID is 30 mm. I = π(50⁴ − 30⁴)/64 against π·40⁴/64 gives a ratio of 2.125.",
      "proof": [
        "Same area:  π·40²/4 = π(50² − d_i²)/4  ⇒  1,600 = 2,500 − d_i²  ⇒  d_i = 30 mm.",
        "Solid:  I ∝ 40⁴ = 2,560,000.",
        "Tube:  I ∝ 50⁴ − 30⁴ = 6,250,000 − 810,000 = 5,440,000.",
        "The π/64 cancels:  ratio = 5,440,000 / 2,560,000 = 2.125.",
        "Same mass, more than twice the stiffness, because the material moved outward where y² is larger.",
        "In practice the limit is wall thickness: very thin walls buckle locally or dent."
      ],
      "proofTitle": "Compare I directly",
      "methods": [
        {
          "title": "Radius of gyration",
          "steps": [
            "I = A·r². With the same area, the stiffness ratio is r²_tube / r²_solid.",
            "Solid circle:  r² = I/A = (πd⁴/64)/(πd²/4) = d²/16 = 1,600/16 = 100 mm².",
            "Tube:  r² = (D² + d_i²)/16 = (2,500 + 900)/16 = 212.5 mm².",
            "Ratio:  212.5 / 100 = 2.125. The r² for a tube is the average of D² and d_i² divided by 8, so pushing the material outward raises it."
          ]
        }
      ],
      "diagram": {
        "section": {
          "circles": [
            [
              -35,
              0,
              20
            ],
            [
              35,
              0,
              25
            ]
          ],
          "holes": [
            [
              35,
              0,
              15
            ]
          ],
          "axis": {
            "y": 0,
            "label": "x"
          },
          "labels": [
            {
              "x": -35,
              "y": -30,
              "text": "Ø40 solid"
            },
            {
              "x": 35,
              "y": -33,
              "text": "Ø50 / Ø30"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A pinned column has a 20 × 60 mm rectangular section. You replace it with a square section of the same area. How does the Euler buckling load change?",
      "options": [
        "Unchanged",
        "3× higher",
        "9× higher",
        "1/3 as high"
      ],
      "answer": 1,
      "why": "A column buckles about its weakest axis. The rectangle's minimum I is 40,000 mm⁴ and the square's is 120,000 mm⁴, so the load is 3× higher.",
      "proof": [
        "Euler:  P_cr = π²EI/(KL)². Everything except I is unchanged, so P_cr ∝ I.",
        "A column buckles about the axis with the smallest I.",
        "Rectangle 20 × 60:  I_min = 60 × 20³ / 12 = 40,000 mm⁴ (its strong axis is 360,000 mm⁴, which doesn't control).",
        "Square, same area 1,200 mm²:  side a = √1,200 ≈ 34.6 mm, and I = a⁴/12 = 1,200²/12 = 120,000 mm⁴.",
        "Ratio:  120,000 / 40,000 = 3.",
        "For columns you want the minimum I as large as possible, so square or round tubes are best. A deep rectangle wastes its strong axis."
      ],
      "proofTitle": "Compare minimum I",
      "methods": [
        {
          "title": "Radius of gyration (slenderness)",
          "steps": [
            "P_cr = π²EI/(KL)² = π²E·A·r²/(KL)². Same E, A and L, so P_cr ∝ r²_min.",
            "Rectangle, thin direction 20 mm:  r²_min = 20²/12 = 33.3 mm².",
            "Square, side 34.6 mm:  r² = 1,200/12 = 100 mm².",
            "Ratio:  100 / 33.3 = 3. Equivalently, the slenderness KL/r drops by √3."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              60,
              20
            ],
            [
              80,
              -7.3,
              34.6,
              34.6
            ]
          ],
          "labels": [
            {
              "x": 30,
              "y": -8,
              "text": "60 × 20"
            },
            {
              "x": 97.3,
              "y": -15,
              "text": "34.6 sq"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "An L-angle cantilever is loaded vertically through its centroid. Besides bending downward, what else happens?",
      "options": [
        "Nothing else, it deflects only vertically",
        "It also deflects sideways",
        "It shortens axially",
        "Beam theory cannot be applied to it"
      ],
      "answer": 1,
      "why": "An angle has a non-zero product of inertia I_xy, so its principal axes are inclined. A vertical load bends it about both, and it moves sideways too. Loading off the shear centre also makes it twist.",
      "proof": [
        "Product of inertia:  I_xy = ∫ x·y dA, about the centroidal x and y axes.",
        "If the section has an axis of symmetry along x or y, the + and − contributions cancel and I_xy = 0. An L-angle has no such symmetry, so I_xy ≠ 0.",
        "Principal axes are where I_xy = 0:  tan 2θ = −2I_xy / (I_x − I_y). For an equal-leg angle I_x = I_y, so θ = 45°.",
        "Split the vertical load into components along the two principal axes. Each one bends the beam about its own principal axis, with stiffness I₁ or I₂.",
        "Because I₁ ≠ I₂, the two deflections aren't in the same proportion as the load components, so the total deflection is not parallel to the load and has a sideways part.",
        "Also, the shear centre of an angle is at the heel, not the centroid. A load through the centroid therefore twists it as well.",
        "Fixes: load along a principal axis, use a symmetric section, or brace it against sideways movement."
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              60,
              10
            ],
            [
              0,
              10,
              10,
              50
            ]
          ],
          "labels": [
            {
              "x": 30,
              "y": -8,
              "text": "60"
            },
            {
              "x": 18,
              "y": 50,
              "text": "60",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A 20 mm diameter hole is drilled through the centre of the 40 wide × 60 tall bar from question 7, along its length. How much bending stiffness is lost?",
      "options": [
        "About 1%",
        "About 13%",
        "About 33%",
        "None"
      ],
      "answer": 0,
      "why": "The hole removes 13% of the area but only πd⁴/64 = 7,854 mm⁴ of the 720,000 mm⁴, about 1.1%. Material at the neutral axis contributes almost nothing.",
      "proof": [
        "Solid bar:  I = 40 × 60³ / 12 = 720,000 mm⁴ (question 7).",
        "The hole is centred on the neutral axis, so no parallel-axis term:  I_hole = π × 20⁴ / 64 = 7,854 mm⁴.",
        "I_new = 720,000 − 7,854 = 712,146 mm⁴, a loss of 7,854 / 720,000 = 1.1%.",
        "Area lost:  π × 10² = 314 mm² out of 2,400 mm², which is 13%.",
        "So you lose 13% of the mass for 1% of the stiffness. Lightening holes and pockets near the neutral axis are efficient for this reason.",
        "The same hole at the outer fibre would cost far more, through its A·d² term."
      ],
      "proofTitle": "Subtract the hole",
      "methods": [
        {
          "title": "Ratio form",
          "steps": [
            "Fraction lost = (πd⁴/64)/(bh³/12) = (3π/16)·d⁴/(bh³).",
            "= 0.589 × 20⁴/(40 × 60³) = 0.589 × 160,000/8,640,000 = 0.589 × 0.0185 = 0.011.",
            "About 1.1%. The d⁴ term shows why small holes near the axis barely matter, while the area lost only goes as d²."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              0,
              40,
              60
            ]
          ],
          "holes": [
            [
              20,
              30,
              10
            ]
          ],
          "axis": {
            "y": 30,
            "label": "x"
          },
          "labels": [
            {
              "x": 20,
              "y": -8,
              "text": "40"
            },
            {
              "x": 48,
              "y": 30,
              "text": "60",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel strip is bonded to the bottom of an aluminium beam. Using the transformed-section method with everything expressed in aluminium, what do you do to the steel strip?",
      "options": [
        "Multiply its width by n = E_steel / E_aluminium (about 2.9)",
        "Multiply its thickness by n",
        "Use the average modulus for the whole section",
        "Add the EI of each part about its own centroid"
      ],
      "answer": 0,
      "why": "Widening the steel by n gives it the same force at each height as real steel, while keeping every fibre at its true distance from the neutral axis. Then treat the whole section as aluminium.",
      "proof": [
        "Bonded, so plane sections stay plane:  strain ε = y·κ is linear across both materials.",
        "Stress in each material:  σ = E·ε. At the same y, steel carries n = E_s/E_a ≈ 200/69 ≈ 2.9 times the stress of aluminium.",
        "Force in a strip of width b and height dy:  dF = E·ε·b·dy. A steel strip of width b gives the same force as an aluminium strip of width n·b at the same y.",
        "So widen the steel by n. Do not thicken it, because that would move fibres to different y values and change both strain and lever arm.",
        "Find the neutral axis as the centroid of the transformed section, then I_transformed by the parallel axis theorem, and use stiffness E_a·I_transformed.",
        "Stress:  σ_al = M·y/I_t in the aluminium, and σ_steel = n·M·y/I_t in the steel.",
        "Adding each part's EI about its own centroid ignores composite action, the A·d² terms that need the bond."
      ],
      "proofTitle": "Transformed section",
      "methods": [
        {
          "title": "Sum E·I directly (no transformation)",
          "steps": [
            "Neutral axis where the net axial force is zero:  Σ E_i·A_i·(y_i − ȳ) = 0  ⇒  ȳ = Σ E_i A_i y_i / Σ E_i A_i.",
            "Bending stiffness:  EI_eq = Σ E_i (I_i + A_i d_i²), with each d_i measured from that ȳ.",
            "Divide both by E_a:  ȳ is the transformed centroid, and EI_eq/E_a = I_transformed, with the steel's widths multiplied by n.",
            "Example, a 40 × 54 aluminium beam on a 40 × 6 steel strip: both routes give ȳ = 25.7 mm and EI = 6.90 × 10¹⁰ N·mm².",
            "Transformation is this same calculation, done in single-material units."
          ]
        }
      ],
      "diagram": {
        "section": {
          "parts": [
            [
              0,
              6,
              40,
              54
            ]
          ],
          "alt": [
            [
              0,
              0,
              40,
              6
            ]
          ],
          "labels": [
            {
              "x": 48,
              "y": 33,
              "text": "aluminium",
              "anchor": "start"
            },
            {
              "x": 48,
              "y": 3,
              "text": "steel",
              "anchor": "start"
            }
          ]
        }
      },
      "reported": {
        "kind": "topic",
        "note": "A candidate reported a round covering moment of inertia. This exact question was not reported.",
        "sources": [
          "mde"
        ]
      }
    }
  ]
});
