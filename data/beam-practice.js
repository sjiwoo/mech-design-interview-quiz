/* Topic: More beam problems. Format: see data/beam-loading.js
 * Extra fields used here: diagram.at / diagram.span, load kinds "couple" and "tri",
 * given / after (curve panels shown with the question / after answering) and
 * optionCurves (one small curve per option, drawn in place of the option text). */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "beam-practice",
 "title": "More beam problems",
 "blurb": "A second set of quick beam problems at the same level: off-centre loads, overhangs, partial loads, superposition and sizing. Each is solvable in three minutes or less.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A simply supported beam spans 4 m. A 12 kN point load acts 1 m from the left support A. What is the reaction at A?",
   "options": [
    "3 kN",
    "6 kN",
    "9 kN",
    "12 kN"
   ],
   "answer": 2,
   "why": "Take moments about B. The load is 3 m from B and the span is 4 m, so A carries 12 × 3/4 = 9 kN. The support nearer the load always takes the bigger share.",
   "proofTitle": "Moments about B",
   "proof": [
    "Unknowns: R_A and R_B, both upward.",
    "ΣM_B = 0:  R_A·4 − 12·3 = 0.",
    "R_A = 36/4 = 9 kN.",
    "Check with ΣF_y:  R_B = 12 − 9 = 3 kN, and about A:  3·4 = 12·1. ✓."
   ],
   "methods": [
    {
     "title": "Lever rule",
     "steps": [
      "A point load splits between the supports in inverse proportion to its distances from them.",
      "R_A = P·b/L, where b is the distance from the load to the other support:  12 × 3/4 = 9 kN.",
      "R_B = P·a/L = 12 × 1/4 = 3 kN.",
      "Quick sense check: the load is three times closer to A, so A carries three times as much."
     ]
    }
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 0.25,
      "label": "12 kN"
     }
    ],
    "span": "4 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.25,
       1
      ],
      [
       0.25,
       -0.333
      ],
      [
       1,
       -0.333
      ]
     ],
     "notes": [
      {
       "x": 0.12,
       "text": "+9 kN"
      },
      {
       "x": 0.62,
       "text": "−3 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.104,
       0.417
      ],
      [
       0.208,
       0.833
      ],
      [
       0.25,
       1
      ],
      [
       0.25,
       1
      ],
      [
       0.594,
       0.542
      ],
      [
       0.906,
       0.125
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "9 kN·m"
      }
     ]
    }
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
   "level": "Fundamental",
   "q": "Same beam: 4 m span, simply supported, 12 kN point load 1 m from the left support. What is the maximum bending moment?",
   "options": [
    "12 kN·m",
    "9 kN·m",
    "4.5 kN·m",
    "3 kN·m"
   ],
   "answer": 1,
   "why": "The moment peaks under the load. From the left: R_A × 1 m = 9 × 1 = 9 kN·m.",
   "proofTitle": "From the left support",
   "proof": [
    "Reactions: R_A = 9 kN, R_B = 3 kN (from the previous question).",
    "With only point loads, the moment diagram is straight lines and peaks under a load.",
    "Cut just left of the load and keep the left piece:  M = R_A·1 = 9 kN·m.",
    "Check from the right:  M = R_B·3 = 3·3 = 9 kN·m. ✓"
   ],
   "methods": [
    {
     "title": "Formula Pab/L",
     "steps": [
      "For a point load at distance a from one support and b from the other:  M_max = P·a·b/L.",
      "M_max = 12·1·3/4 = 9 kN·m.",
      "At midspan a = b = L/2 and this becomes the familiar PL/4 = 12 kN·m. Moving the load off-centre always lowers the peak."
     ]
    },
    {
     "title": "Area under the shear diagram",
     "steps": [
      "Shear is +9 kN from A to the load, a length of 1 m.",
      "Moment at the load = area under the shear diagram up to that point = 9 × 1 = 9 kN·m.",
      "The remaining area is −3 × 3 = −9, which brings the moment back to zero at B. ✓"
     ]
    }
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 0.25,
      "label": "12 kN"
     }
    ],
    "span": "4 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.25,
       1
      ],
      [
       0.25,
       -0.333
      ],
      [
       1,
       -0.333
      ]
     ],
     "notes": [
      {
       "x": 0.12,
       "text": "+9 kN"
      },
      {
       "x": 0.62,
       "text": "−3 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.104,
       0.417
      ],
      [
       0.208,
       0.833
      ],
      [
       0.25,
       1
      ],
      [
       0.25,
       1
      ],
      [
       0.594,
       0.542
      ],
      [
       0.906,
       0.125
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "9 kN·m"
      }
     ]
    }
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
   "level": "Fundamental",
   "q": "A simply supported beam spans 4 m. It carries 10 kN at 1 m and 20 kN at 3 m from the left support A. What is the reaction at the right support B?",
   "options": [
    "15 kN",
    "12.5 kN",
    "20 kN",
    "17.5 kN"
   ],
   "answer": 3,
   "why": "Moments about A: R_B × 4 = 10 × 1 + 20 × 3 = 70, so R_B = 17.5 kN. The heavier load is nearer B, so B takes more than half of the 30 kN.",
   "proofTitle": "Moments about A",
   "proof": [
    "ΣM_A = 0:  R_B·4 − 10·1 − 20·3 = 0.",
    "R_B = 70/4 = 17.5 kN.",
    "ΣF_y:  R_A = 30 − 17.5 = 12.5 kN.",
    "Check about B:  12.5·4 = 10·3 + 20·1 = 50. ✓"
   ],
   "methods": [
    {
     "title": "Superposition",
     "steps": [
      "Treat each load separately with the lever rule, then add.",
      "10 kN at 1 m:  R_B = 10 × 1/4 = 2.5 kN.",
      "20 kN at 3 m:  R_B = 20 × 3/4 = 15 kN.",
      "Total R_B = 17.5 kN."
     ]
    }
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 0.25,
      "label": "10 kN"
     },
     {
      "kind": "point",
      "x": 0.75,
      "label": "20 kN"
     }
    ],
    "span": "4 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       0.714
      ],
      [
       0.25,
       0.714
      ],
      [
       0.25,
       0.143
      ],
      [
       0.75,
       0.143
      ],
      [
       0.75,
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.12,
       "text": "+12.5"
      },
      {
       "x": 0.5,
       "text": "+2.5"
      },
      {
       "x": 0.88,
       "text": "−17.5"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.104,
       0.298
      ],
      [
       0.25,
       0.714
      ],
      [
       0.25,
       0.714
      ],
      [
       0.625,
       0.929
      ],
      [
       0.75,
       1
      ],
      [
       0.75,
       1
      ],
      [
       0.854,
       0.583
      ],
      [
       0.958,
       0.167
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "12.5"
      },
      {
       "x": 0.75,
       "text": "17.5 kN·m"
      }
     ]
    }
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
   "level": "Fundamental",
   "q": "A cantilever is 1 m long. It carries 2 kN at the free end and 3 kN at mid-length. What is the magnitude of the bending moment at the wall?",
   "options": [
    "3.5 kN·m",
    "5 kN·m",
    "2.5 kN·m",
    "4 kN·m"
   ],
   "answer": 0,
   "why": "Each load times its distance from the wall: 2 × 1 + 3 × 0.5 = 3.5 kN·m.",
   "proofTitle": "Sum the lever arms",
   "proof": [
    "Free body of the whole beam. The wall supplies a force and a moment.",
    "ΣM about the wall:  M_wall = 2·1.0 + 3·0.5.",
    "M_wall = 2 + 1.5 = 3.5 kN·m, hogging (top fibre in tension).",
    "Wall shear = 2 + 3 = 5 kN."
   ],
   "methods": [
    {
     "title": "Origin at the free end",
     "steps": [
      "Measure s from the tip toward the wall. For s < 0.5 m only the tip load acts:  M = −2·s.",
      "At the 3 kN load (s = 0.5):  M = −1 kN·m.",
      "Beyond it:  M = −2·s − 3·(s − 0.5).",
      "At the wall (s = 1):  M = −2 − 1.5 = −3.5 kN·m. Same magnitude."
     ]
    }
   ],
   "diagram": {
    "support": "cantilever",
    "loads": [
     {
      "kind": "point",
      "x": 0.5,
      "label": "3 kN"
     },
     {
      "kind": "point",
      "x": 1,
      "label": "2 kN"
     }
    ],
    "span": "1 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.5,
       1
      ],
      [
       0.5,
       0.4
      ],
      [
       1,
       0.4
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "+5 kN"
      },
      {
       "x": 0.75,
       "text": "+2 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       -1
      ],
      [
       0.188,
       -0.732
      ],
      [
       0.375,
       -0.464
      ],
      [
       0.5,
       -0.286
      ],
      [
       0.5,
       -0.286
      ],
      [
       0.875,
       -0.071
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.06,
       "text": "−3.5 kN·m"
      },
      {
       "x": 0.5,
       "text": "−1"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A cantilever of length L carries a uniform load w only over its outer half, from L/2 to the free end. What is the magnitude of the wall moment?",
   "options": [
    "wL²/8",
    "wL²/4",
    "3wL²/8",
    "wL²/2"
   ],
   "answer": 2,
   "why": "The load totals wL/2 and its centroid is 3L/4 from the wall. (wL/2)(3L/4) = 3wL²/8.",
   "proofTitle": "Resultant at the centroid",
   "proof": [
    "Replace the distributed load by its resultant: W = w·(L/2).",
    "It acts at the middle of the loaded length: L/2 + L/4 = 3L/4 from the wall.",
    "M_wall = W × arm = (wL/2)(3L/4) = 3wL²/8."
   ],
   "methods": [
    {
     "title": "Full load minus the missing half",
     "steps": [
      "A full-length uniform load gives M_wall = wL²/2.",
      "Remove the inner half: a uniform load on a cantilever of length L/2 gives w(L/2)²/2 = wL²/8.",
      "Difference:  wL²/2 − wL²/8 = 3wL²/8.",
      "The outer half does three quarters of the damage because it has the long lever arm."
     ]
    }
   ],
   "diagram": {
    "support": "cantilever",
    "loads": [
     {
      "kind": "udl",
      "from": 0.5,
      "to": 1,
      "label": "w"
     }
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.5,
       1
      ],
      [
       0.5,
       1
      ],
      [
       0.688,
       0.625
      ],
      [
       0.813,
       0.375
      ],
      [
       0.938,
       0.125
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "+wL/2"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       -1
      ],
      [
       0.188,
       -0.75
      ],
      [
       0.417,
       -0.444
      ],
      [
       0.5,
       -0.333
      ],
      [
       0.5,
       -0.333
      ],
      [
       0.583,
       -0.231
      ],
      [
       0.667,
       -0.148
      ],
      [
       0.75,
       -0.083
      ],
      [
       0.833,
       -0.037
      ],
      [
       0.917,
       -0.009
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.08,
       "text": "−3wL²/8"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A simply supported beam of length L carries a uniform load w over the left half only. What is the reaction at the left support A?",
   "options": [
    "wL/4",
    "3wL/8",
    "wL/2",
    "wL/8"
   ],
   "answer": 1,
   "why": "The load totals wL/2 and acts at L/4 from A. By the lever rule A takes three quarters of it: 3wL/8.",
   "proofTitle": "Moments about B",
   "proof": [
    "Resultant: W = wL/2, acting at x = L/4.",
    "ΣM_B = 0:  R_A·L − (wL/2)(3L/4) = 0.",
    "R_A = 3wL/8.",
    "R_B = wL/2 − 3wL/8 = wL/8."
   ],
   "methods": [
    {
     "title": "Symmetry plus antisymmetry",
     "steps": [
      "Split the half load into a full-span load w/2 plus an antisymmetric pair: +w/2 on the left half and −w/2 on the right half.",
      "Full-span w/2 gives each support wL/4.",
      "The antisymmetric pair is a couple: two forces of wL/4, L/2 apart, moment wL²/8. The supports resist it with ±(wL²/8)/L = ±wL/8.",
      "R_A = wL/4 + wL/8 = 3wL/8.   R_B = wL/4 − wL/8 = wL/8."
     ]
    }
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "udl",
      "from": 0,
      "to": 0.5,
      "label": "w"
     }
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.188,
       0.5
      ],
      [
       0.313,
       0.167
      ],
      [
       0.479,
       -0.278
      ],
      [
       0.5,
       -0.333
      ],
      [
       0.5,
       -0.333
      ],
      [
       1,
       -0.333
      ]
     ],
     "notes": [
      {
       "x": 0.04,
       "text": "+3wL/8"
      },
      {
       "x": 0.8,
       "text": "−wL/8"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.042,
       0.21
      ],
      [
       0.083,
       0.395
      ],
      [
       0.125,
       0.556
      ],
      [
       0.167,
       0.691
      ],
      [
       0.208,
       0.802
      ],
      [
       0.25,
       0.889
      ],
      [
       0.292,
       0.951
      ],
      [
       0.333,
       0.988
      ],
      [
       0.375,
       1
      ],
      [
       0.417,
       0.988
      ],
      [
       0.458,
       0.951
      ],
      [
       0.5,
       0.889
      ],
      [
       0.5,
       0.889
      ],
      [
       0.688,
       0.556
      ],
      [
       0.938,
       0.111
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.375,
       "text": "9wL²/128"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A simply supported beam spans 6 m and carries a uniform load of 2 kN/m. The allowable bending stress is 150 MPa. What section modulus does it need?",
   "options": [
    "6,000 mm³",
    "27,000 mm³",
    "600,000 mm³",
    "60,000 mm³"
   ],
   "answer": 3,
   "why": "M_max = wL²/8 = 2 × 36/8 = 9 kN·m. S = M/σ = 9,000,000 N·mm / 150 MPa = 60,000 mm³.",
   "proof": [
    "M_max = wL²/8 = 2·6²/8 = 9 kN·m.",
    "Convert: 9 kN·m = 9 × 10⁶ N·mm.",
    "σ = M/S  ⇒  S = M/σ_allow = 9 × 10⁶ / 150 = 60,000 mm³ (60 cm³).",
    "Unit habit: N, mm and MPa are consistent. Mixing metres with MPa is the usual slip, and it gives an answer 1,000 times off."
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "udl",
      "from": 0,
      "to": 1,
      "label": "2 kN/m"
     }
    ],
    "span": "6 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.167,
       0.667
      ],
      [
       0.292,
       0.417
      ],
      [
       0.417,
       0.167
      ],
      [
       0.542,
       -0.083
      ],
      [
       0.667,
       -0.333
      ],
      [
       0.792,
       -0.583
      ],
      [
       0.917,
       -0.833
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.06,
       "text": "+6 kN"
      },
      {
       "x": 0.94,
       "text": "−6 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.042,
       0.16
      ],
      [
       0.083,
       0.306
      ],
      [
       0.125,
       0.437
      ],
      [
       0.167,
       0.556
      ],
      [
       0.208,
       0.66
      ],
      [
       0.25,
       0.75
      ],
      [
       0.292,
       0.826
      ],
      [
       0.333,
       0.889
      ],
      [
       0.375,
       0.937
      ],
      [
       0.417,
       0.972
      ],
      [
       0.458,
       0.993
      ],
      [
       0.5,
       1
      ],
      [
       0.542,
       0.993
      ],
      [
       0.583,
       0.972
      ],
      [
       0.625,
       0.938
      ],
      [
       0.667,
       0.889
      ],
      [
       0.708,
       0.826
      ],
      [
       0.75,
       0.75
      ],
      [
       0.792,
       0.66
      ],
      [
       0.833,
       0.556
      ],
      [
       0.875,
       0.438
      ],
      [
       0.917,
       0.306
      ],
      [
       0.958,
       0.16
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "9 kN·m"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A simply supported beam spans 2 m. It carries a 4 kN point load at midspan and a uniform load of 2 kN/m over the whole span. What is the maximum bending moment?",
   "options": [
    "3 kN·m",
    "2 kN·m",
    "1 kN·m",
    "5 kN·m"
   ],
   "answer": 0,
   "why": "Both loads peak at midspan, so the moments add: PL/4 + wL²/8 = 2 + 1 = 3 kN·m.",
   "proofTitle": "Superposition",
   "proof": [
    "Point load alone:  PL/4 = 4·2/4 = 2 kN·m at midspan.",
    "Uniform load alone:  wL²/8 = 2·2²/8 = 1 kN·m at midspan.",
    "The beam is linear elastic, so effects add. Both peaks are at the same place:  M_max = 3 kN·m.",
    "Superposition of peak values only works when the peaks coincide. Otherwise add the full diagrams."
   ],
   "methods": [
    {
     "title": "Direct from reactions",
     "steps": [
      "Total load = 4 + 2·2 = 8 kN, symmetric, so each reaction is 4 kN.",
      "Cut at midspan, keep the left half:  M = 4·1 − (2·1)(0.5).",
      "M = 4 − 1 = 3 kN·m."
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
      "label": "2 kN/m"
     },
     {
      "kind": "point",
      "x": 0.5,
      "label": "4 kN"
     }
    ],
    "span": "2 m"
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.188,
       0.813
      ],
      [
       0.417,
       0.583
      ],
      [
       0.5,
       0.5
      ],
      [
       0.5,
       -0.5
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.06,
       "text": "+4 kN"
      },
      {
       "x": 0.94,
       "text": "−4 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.083,
       0.213
      ],
      [
       0.146,
       0.361
      ],
      [
       0.208,
       0.498
      ],
      [
       0.292,
       0.664
      ],
      [
       0.375,
       0.813
      ],
      [
       0.458,
       0.942
      ],
      [
       0.5,
       1
      ],
      [
       0.5,
       1
      ],
      [
       0.583,
       0.88
      ],
      [
       0.667,
       0.741
      ],
      [
       0.771,
       0.541
      ],
      [
       0.854,
       0.361
      ],
      [
       0.938,
       0.161
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "3 kN·m"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A 6 m beam rests on a pin at A (x = 0) and a roller at B (x = 4 m), with 2 m overhanging past B. A 6 kN load acts at the overhanging tip. What is the reaction at A?",
   "options": [
    "3 kN upward",
    "3 kN downward",
    "9 kN upward",
    "6 kN downward"
   ],
   "answer": 1,
   "why": "The tip load tries to lever the beam up off A, pivoting about B. Moments about B: R_A × 4 = −6 × 2, so A must pull down with 3 kN.",
   "proofTitle": "Moments about B",
   "proof": [
    "Assume R_A upward.",
    "ΣM_B = 0:  R_A·4 + 6·2 = 0 (both would turn the beam the same way about B).",
    "R_A = −3 kN. The minus sign means it acts downward: the support must hold the beam down.",
    "ΣF_y:  R_B = 6 + 3 = 9 kN upward.",
    "Design point: a simple rest at A would lift off. It needs a hold-down."
   ],
   "methods": [
    {
     "title": "Moments about A",
     "steps": [
      "ΣM_A = 0:  R_B·4 − 6·6 = 0  ⇒  R_B = 9 kN upward.",
      "ΣF_y:  R_A = 6 − 9 = −3 kN, so 3 kN downward.",
      "A reaction larger than the applied load is the sign of a lever: B is the fulcrum."
     ]
    }
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 1,
      "label": "6 kN"
     }
    ],
    "span": "6 m",
    "at": [
     0,
     0.667
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       -0.5
      ],
      [
       0.667,
       -0.5
      ],
      [
       0.667,
       1
      ],
      [
       1,
       1
      ]
     ],
     "marks": [
      0,
      0.667
     ],
     "notes": [
      {
       "x": 0.33,
       "text": "−3 kN"
      },
      {
       "x": 0.84,
       "text": "+6 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.167,
       -0.25
      ],
      [
       0.306,
       -0.458
      ],
      [
       0.528,
       -0.792
      ],
      [
       0.667,
       -1
      ],
      [
       0.667,
       -1
      ],
      [
       0.806,
       -0.583
      ],
      [
       0.931,
       -0.208
      ],
      [
       1,
       0
      ]
     ],
     "marks": [
      0,
      0.667
     ],
     "notes": [
      {
       "x": 0.667,
       "text": "−12 kN·m"
      }
     ]
    }
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
   "level": "Applied",
   "q": "Same overhanging beam: supports at x = 0 and x = 4 m, 6 kN at the tip at x = 6 m. Where is the bending moment largest, and how big is it?",
   "options": [
    "12 kN·m at support B",
    "36 kN·m at support B",
    "12 kN·m midway between A and B",
    "6 kN·m at support B"
   ],
   "answer": 0,
   "why": "The overhang is a 2 m cantilever off support B: 6 × 2 = 12 kN·m, hogging. Between A and B the moment ramps linearly from zero up to that value.",
   "proofTitle": "From the free end",
   "proof": [
    "Cut at B and keep the overhang. Only the 6 kN load acts on it, 2 m away.",
    "M_B = −6·2 = −12 kN·m (hogging, top in tension).",
    "Check from the left:  M_B = R_A·4 = −3·4 = −12 kN·m. ✓",
    "No load between A and B, so M is a straight line from 0 at A to −12 at B. The peak is at B."
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 1,
      "label": "6 kN"
     }
    ],
    "span": "6 m",
    "at": [
     0,
     0.667
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       -0.5
      ],
      [
       0.667,
       -0.5
      ],
      [
       0.667,
       1
      ],
      [
       1,
       1
      ]
     ],
     "marks": [
      0,
      0.667
     ],
     "notes": [
      {
       "x": 0.33,
       "text": "−3 kN"
      },
      {
       "x": 0.84,
       "text": "+6 kN"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.167,
       -0.25
      ],
      [
       0.306,
       -0.458
      ],
      [
       0.528,
       -0.792
      ],
      [
       0.667,
       -1
      ],
      [
       0.667,
       -1
      ],
      [
       0.806,
       -0.583
      ],
      [
       0.931,
       -0.208
      ],
      [
       1,
       0
      ]
     ],
     "marks": [
      0,
      0.667
     ],
     "notes": [
      {
       "x": 0.667,
       "text": "−12 kN·m"
      }
     ]
    }
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
   "level": "Fundamental",
   "q": "A cantilever carries a load at its tip. Its length is doubled, with the same section, material and load. What happens to the tip deflection and the peak bending stress?",
   "options": [
    "Deflection ×2, stress ×2",
    "Deflection ×4, stress ×2",
    "Deflection ×8, stress ×2",
    "Deflection ×8, stress ×4"
   ],
   "answer": 2,
   "why": "δ = PL³/3EI goes with L³, so 8 times. σ = M·c/I with M = PL goes with L, so 2 times. Length hurts stiffness far more than it hurts strength.",
   "proof": [
    "Deflection:  δ = PL³/(3EI).  Replace L by 2L:  (2L)³ = 8L³, so δ is 8 times larger.",
    "Stress:  σ = M·c/I, and M_max = P·L at the wall.  Replace L by 2L:  σ doubles.",
    "Slope at the tip, PL²/2EI, goes up 4 times.",
    "Pattern to remember: moment ∝ L, slope ∝ L², deflection ∝ L³."
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
   "level": "Applied",
   "q": "A cantilever of length L carries a point load P at mid-length. What is the deflection at the free end?",
   "options": [
    "PL³/24EI",
    "PL³/3EI",
    "PL³/48EI",
    "5PL³/48EI"
   ],
   "answer": 3,
   "why": "The loaded half bends like a cantilever of length L/2. The outer half carries no moment, so it stays straight and swings down at the slope of the loaded point.",
   "proofTitle": "Deflection plus slope × distance",
   "proof": [
    "Treat the inner half as a cantilever of length a = L/2 with a tip load.",
    "Deflection at the load:  δ₁ = P·a³/3EI = P(L/2)³/3EI = PL³/24EI.",
    "Slope at the load:  θ = P·a²/2EI = P(L/2)²/2EI = PL²/8EI.",
    "Beyond the load M = 0, so the beam is straight. The tip drops a further θ × (L/2) = PL³/16EI.",
    "Total:  PL³/24EI + PL³/16EI = (2 + 3)PL³/48EI = 5PL³/48EI."
   ],
   "methods": [
    {
     "title": "Sanity bounds",
     "steps": [
      "It must be more than the deflection at the load itself, PL³/24EI = 2PL³/48EI.",
      "It must be less than the same load at the tip, PL³/3EI = 16PL³/48EI.",
      "5PL³/48EI sits between. Of the options only this one does."
     ]
    }
   ],
   "diagram": {
    "support": "cantilever",
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
   "q": "Two cantilevers of the same length and material sit side by side and are joined at their tips, so they deflect together. One has second moment of area I, the other 2I. A load P is applied at the joined tip. How much does the stiffer beam carry?",
   "options": [
    "P/2",
    "2P/3",
    "P/3",
    "P"
   ],
   "answer": 1,
   "why": "They are springs in parallel with the same deflection. Each carries load in proportion to its stiffness, and stiffness goes with I, so the split is 1 : 2.",
   "proof": [
    "Tip stiffness of a cantilever:  k = 3EI/L³.",
    "Same E and L, so k₁ : k₂ = I : 2I = 1 : 2.",
    "Parallel springs share the same deflection δ, so F₁ = k₁δ and F₂ = k₂δ.",
    "F₂ = P·k₂/(k₁ + k₂) = P·2/3.",
    "General rule: in a parallel load path, the stiff member attracts the load."
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
   "level": "Applied",
   "q": "A steel strip (E = 200 GPa) is clamped as a cantilever 100 mm long. Its section is 10 mm wide and 1 mm thick. What is its stiffness at the tip?",
   "options": [
    "5 N/mm",
    "0.05 N/mm",
    "50 N/mm",
    "0.5 N/mm"
   ],
   "answer": 3,
   "why": "k = 3EI/L³ with I = b·h³/12 = 0.833 mm⁴. That gives 3 × 200,000 × 0.833 / 1,000,000 = 0.5 N/mm.",
   "proof": [
    "I = b·h³/12 = 10·1³/12 = 0.833 mm⁴.",
    "Tip deflection δ = PL³/3EI, so k = P/δ = 3EI/L³.",
    "k = 3 × 200,000 × 0.833 / 100³ = 500,000 / 1,000,000 = 0.5 N/mm.",
    "So 1 N at the tip moves it 2 mm. Doubling the thickness would make it 8 times stiffer."
   ],
   "diagram": {
    "support": "cantilever",
    "loads": [
     {
      "kind": "point",
      "x": 1,
      "label": "P"
     }
    ],
    "span": "100 mm"
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
   "q": "A solid round bar, 20 mm in diameter, is simply supported over 1 m and carries 1 kN at midspan. What is the peak bending stress?",
   "options": [
    "80 MPa",
    "159 MPa",
    "318 MPa",
    "637 MPa"
   ],
   "answer": 2,
   "why": "M = PL/4 = 250 N·m. For a solid round, S = πd³/32 = 785 mm³. σ = 250,000 / 785 = 318 MPa.",
   "proof": [
    "M_max = PL/4 = 1,000 × 1,000 / 4 = 250,000 N·mm.",
    "Section modulus of a solid circle:  S = I/c = (πd⁴/64)/(d/2) = πd³/32.",
    "S = π × 20³/32 = 785 mm³.",
    "σ = M/S = 250,000/785 = 318 MPa.",
    "That is above the yield of mild steel (about 250 MPa), so this bar would take a permanent set."
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 0.5,
      "label": "1 kN"
     }
    ],
    "span": "1 m"
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
   "q": "A flat steel spring is a cantilever 100 mm long, 10 mm wide and 2 mm thick, with a yield strength of 600 MPa. What tip load just causes yielding?",
   "options": [
    "40 N",
    "20 N",
    "80 N",
    "400 N"
   ],
   "answer": 0,
   "why": "For a rectangle σ = 6M/(b·h²) with M = P·L. Solving: P = σ·b·h²/(6L) = 600 × 10 × 4 / 600 = 40 N.",
   "proof": [
    "Peak moment at the clamp:  M = P·L.",
    "Section modulus of a rectangle:  S = b·h²/6 = 10 × 2²/6 = 6.67 mm³.",
    "Yield when σ = M/S = 600 MPa:  P·100 = 600 × 6.67.",
    "P = 4,000/100 = 40 N.",
    "Thickness counts squared for strength: a 4 mm strip would take 160 N."
   ],
   "diagram": {
    "support": "cantilever",
    "loads": [
     {
      "kind": "point",
      "x": 1,
      "label": "P"
     }
    ],
    "span": "100 mm"
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
   "q": "A simply supported beam of length L has no forces on it, only a couple M₀ applied at the left support A. What are the support reactions?",
   "options": [
    "Both zero",
    "M₀/L each, both upward",
    "M₀/2L, equal and opposite",
    "M₀/L, equal and opposite"
   ],
   "answer": 3,
   "why": "Forces must sum to zero, so the two reactions are equal and opposite. Together they form a couple R × L that balances M₀, so R = M₀/L.",
   "proof": [
    "ΣF_y = 0:  R_A + R_B = 0, so R_B = −R_A.",
    "ΣM_A = 0:  R_B·L − M₀ = 0 for a clockwise M₀  ⇒  R_B = M₀/L upward, R_A = M₀/L downward.",
    "Only a couple can balance a couple.",
    "The moment diagram starts at M₀ at A and falls in a straight line to zero at B. Shear is constant, M₀/L in magnitude."
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "couple",
      "x": 0,
      "label": "M₀"
     }
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "−M₀/L"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.06,
       "text": "M₀"
      }
     ]
    }
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
   "level": "Applied",
   "q": "A simply supported beam of length L carries a uniform load w over the left half only. How far from the left support is the bending moment largest?",
   "options": [
    "L/4",
    "3L/8",
    "L/2",
    "L/8"
   ],
   "answer": 1,
   "why": "Moment peaks where shear is zero. Shear starts at R_A = 3wL/8 and falls by w per unit length, so it reaches zero at x = 3L/8.",
   "proof": [
    "R_A = 3wL/8 (load wL/2 at L/4 from A).",
    "Inside the loaded half:  V(x) = 3wL/8 − w·x.",
    "V = 0 at x = 3L/8. This is inside the loaded half, so it is valid.",
    "M_max = area under shear = ½ × (3wL/8) × (3L/8) = 9wL²/128.",
    "It is not under the centre of the load (L/4) and not at midspan. Always find the zero of shear."
   ],
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "udl",
      "from": 0,
      "to": 0.5,
      "label": "w"
     }
    ]
   },
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.188,
       0.5
      ],
      [
       0.313,
       0.167
      ],
      [
       0.479,
       -0.278
      ],
      [
       0.5,
       -0.333
      ],
      [
       0.5,
       -0.333
      ],
      [
       1,
       -0.333
      ]
     ],
     "notes": [
      {
       "x": 0.04,
       "text": "+3wL/8"
      },
      {
       "x": 0.8,
       "text": "−wL/8"
      }
     ]
    },
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.042,
       0.21
      ],
      [
       0.083,
       0.395
      ],
      [
       0.125,
       0.556
      ],
      [
       0.167,
       0.691
      ],
      [
       0.208,
       0.802
      ],
      [
       0.25,
       0.889
      ],
      [
       0.292,
       0.951
      ],
      [
       0.333,
       0.988
      ],
      [
       0.375,
       1
      ],
      [
       0.417,
       0.988
      ],
      [
       0.458,
       0.951
      ],
      [
       0.5,
       0.889
      ],
      [
       0.5,
       0.889
      ],
      [
       0.688,
       0.556
      ],
      [
       0.938,
       0.111
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.375,
       "text": "9wL²/128"
      }
     ]
    }
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
   "q": "You must drill a small cross hole through the side of a rectangular beam that works in bending. At what height in the section does the hole reduce bending strength least?",
   "options": [
    "Near the top surface",
    "Near the bottom surface",
    "At mid-height, on the neutral axis",
    "Height makes no difference"
   ],
   "answer": 2,
   "why": "Bending stress is zero at the neutral axis and largest at the top and bottom. Material near mid-height contributes almost nothing to I, so removing it costs the least.",
   "proof": [
    "σ = M·y/I: stress grows linearly with distance y from the neutral axis.",
    "A hole of diameter d centred on the axis removes ΔI = b·d³/12. The same hole at distance y removes about b·d³/12 + b·d·y².",
    "For a 60 mm tall beam and a 6 mm hole, moving it from the centre to y = 24 mm increases the lost I by about 190 times.",
    "Along the length, also keep it away from the peak moment. Near a support of a simply supported beam the moment is small, but shear is highest at mid-height there, so keep the hole small.",
    "This is why webs of I-beams and aircraft ribs can have lightening holes."
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
   "level": "Applied",
   "q": "A 1 mm thick steel strip (E = 200 GPa) is bent elastically around a drum of radius 500 mm. What is the peak bending stress in the strip?",
   "options": [
    "200 MPa",
    "100 MPa",
    "400 MPa",
    "20 MPa"
   ],
   "answer": 0,
   "why": "Strain at the surface is y/ρ = 0.5/500 = 0.001. Stress = E × strain = 200 MPa. No load or span is needed: curvature alone sets the stress.",
   "proof": [
    "Geometry of bending: strain at distance y from the neutral axis is ε = y/ρ, where ρ is the radius of curvature.",
    "Surface of the strip:  y = t/2 = 0.5 mm.   ε = 0.5/500 = 0.001.",
    "σ = E·ε = 200,000 × 0.001 = 200 MPa.",
    "Same result from M/I = E/ρ and σ = M·y/I.",
    "Use: the tightest elastic bend radius is ρ_min = E·t/(2σ_y). Thinner strips can wrap tighter."
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
   "level": "Fundamental",
   "q": "A simply supported beam carries a full-span uniform load. The load intensity w is doubled and the span is halved. What happens to the maximum bending moment?",
   "options": [
    "It halves",
    "It is unchanged",
    "It doubles",
    "It drops to a quarter"
   ],
   "answer": 0,
   "why": "M_max = wL²/8. Doubling w gives ×2 and halving L gives ×¼, so the moment is halved.",
   "proof": [
    "M_max = wL²/8, so M ∝ w·L².",
    "New value:  (2w)(L/2)² = 2w·L²/4 = wL²/2 in the same units, half of w·L².",
    "Total load is unchanged (2w × L/2 = wL), but it sits closer to the supports, so the lever arms are shorter.",
    "Deflection goes as wL⁴:  2 × 1/16 = 1/8 of the original."
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
  }
 ]
});
