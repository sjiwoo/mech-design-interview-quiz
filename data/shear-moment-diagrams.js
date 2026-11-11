/* Topic: Shear and moment diagrams. Format: see data/beam-loading.js
 * Extra fields used here: diagram.at / diagram.span, load kinds "couple" and "tri",
 * given / after (curve panels shown with the question / after answering) and
 * optionCurves (one small curve per option, drawn in place of the option text). */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "shear-moment-diagrams",
 "title": "Shear and moment diagrams",
 "blurb": "Match a loading to its shear or moment diagram, and read loads, peak moments and couples back off a diagram.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "Which shear force diagram matches this simply supported beam with a point load at midspan?",
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
   "options": [
    "A tent that peaks under the load",
    "Constant +P/2, a drop of P at the load, then constant −P/2",
    "A straight line from + to − through midspan",
    "Constant along the whole beam"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
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
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       1
      ]
     ]
    }
   ],
   "answer": 1,
   "why": "Between point loads nothing is added, so shear is flat. At the load it steps down by P. The left reaction is P/2, so the diagram is +P/2 then −P/2.",
   "proof": [
    "Reactions are P/2 each.",
    "Start at the left end: shear jumps up by R_A = P/2.",
    "No load until midspan, so it stays flat.",
    "At the load it drops by P to −P/2, then stays flat to B, where R_B closes it back to zero.",
    "The tent shape is the moment diagram for this beam. Mixing the two up is the most common slip."
   ],
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
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "+P/2"
      },
      {
       "x": 0.75,
       "text": "−P/2"
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
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
       "x": 0.5,
       "text": "PL/4"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which bending moment diagram matches this simply supported beam with a point load at midspan? (Sagging is positive.)",
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
   "options": [
    "A smooth parabola",
    "Two flat steps",
    "A tent of straight lines peaking under the load",
    "An upside-down tent"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       -0.375
      ],
      [
       0.313,
       -0.625
      ],
      [
       0.438,
       -0.875
      ],
      [
       0.5,
       -1
      ],
      [
       0.5,
       -1
      ],
      [
       0.688,
       -0.625
      ],
      [
       0.813,
       -0.375
      ],
      [
       0.938,
       -0.125
      ],
      [
       1,
       0
      ]
     ]
    }
   ],
   "answer": 2,
   "why": "Moment is the running area under the shear diagram. Constant shear gives a straight sloping line, and the slope flips sign at the load, which makes a tent with peak PL/4.",
   "proof": [
    "dM/dx = V.",
    "Left half: V = +P/2, so M rises in a straight line from 0.",
    "Right half: V = −P/2, so M falls in a straight line back to 0.",
    "Peak under the load:  (P/2)(L/2) = PL/4.",
    "A parabola would need a distributed load. The beam sags, so the diagram is positive."
   ],
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
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.25,
       "text": "+P/2"
      },
      {
       "x": 0.75,
       "text": "−P/2"
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
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
       "x": 0.5,
       "text": "PL/4"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which shear force diagram matches this simply supported beam with a full-span uniform load?",
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
   "options": [
    "A straight line from +wL/2 down to −wL/2",
    "Two flat steps",
    "A parabola",
    "A straight line rising from −wL/2 to +wL/2"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
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
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       0.167,
       -0.667
      ],
      [
       0.292,
       -0.417
      ],
      [
       0.417,
       -0.167
      ],
      [
       0.542,
       0.083
      ],
      [
       0.667,
       0.333
      ],
      [
       0.792,
       0.583
      ],
      [
       0.917,
       0.833
      ],
      [
       1,
       1
      ]
     ]
    }
   ],
   "answer": 0,
   "why": "A uniform load removes shear at a constant rate w, so the diagram is a straight line. It starts at the left reaction, +wL/2, and passes through zero at midspan.",
   "proof": [
    "dV/dx = −w: constant downward slope.",
    "Starts at R_A = +wL/2.",
    "After a length L it has fallen by wL, ending at −wL/2, where R_B closes it.",
    "It crosses zero at midspan, which is where the moment peaks.",
    "The rising line has the wrong sign: a downward load can only push the shear diagram down as you move right."
   ],
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
       "x": 0.05,
       "text": "+wL/2"
      },
      {
       "x": 0.95,
       "text": "−wL/2"
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
       "text": "wL²/8"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which bending moment diagram matches this simply supported beam with a full-span uniform load? (Sagging is positive.)",
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
   "options": [
    "A tent of straight lines",
    "An upside-down parabola",
    "A straight line through zero at midspan",
    "A parabola peaking at midspan"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.042,
       -0.16
      ],
      [
       0.083,
       -0.306
      ],
      [
       0.125,
       -0.437
      ],
      [
       0.167,
       -0.556
      ],
      [
       0.208,
       -0.66
      ],
      [
       0.25,
       -0.75
      ],
      [
       0.292,
       -0.826
      ],
      [
       0.333,
       -0.889
      ],
      [
       0.375,
       -0.937
      ],
      [
       0.417,
       -0.972
      ],
      [
       0.458,
       -0.993
      ],
      [
       0.5,
       -1
      ],
      [
       0.542,
       -0.993
      ],
      [
       0.583,
       -0.972
      ],
      [
       0.625,
       -0.938
      ],
      [
       0.667,
       -0.889
      ],
      [
       0.708,
       -0.826
      ],
      [
       0.75,
       -0.75
      ],
      [
       0.792,
       -0.66
      ],
      [
       0.833,
       -0.556
      ],
      [
       0.875,
       -0.438
      ],
      [
       0.917,
       -0.306
      ],
      [
       0.958,
       -0.16
      ],
      [
       1,
       0
      ]
     ]
    },
    {
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
     ]
    },
    {
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
     ]
    }
   ],
   "answer": 3,
   "why": "Shear is a straight line, and moment is its integral, so the moment is a parabola. It is zero at both pins and peaks at wL²/8 where the shear crosses zero.",
   "proof": [
    "V(x) = wL/2 − w·x, a straight line.",
    "M(x) = ∫V dx = wLx/2 − wx²/2, a parabola.",
    "M = 0 at x = 0 and x = L (pin and roller carry no moment).",
    "Peak at V = 0, x = L/2:  M = wL²/8.",
    "Each integration raises the order by one: load constant, shear linear, moment quadratic."
   ],
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
       "x": 0.05,
       "text": "+wL/2"
      },
      {
       "x": 0.95,
       "text": "−wL/2"
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
       "text": "wL²/8"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which shear force diagram matches this cantilever with a load at its tip?",
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
   "options": [
    "A triangle falling to zero at the tip",
    "Constant P along the whole length",
    "Two flat steps of opposite sign",
    "A straight line through zero at mid-length"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       1
      ]
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
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
     ]
    }
   ],
   "answer": 1,
   "why": "Cut the beam anywhere: the piece to the right always carries just the tip load P. So the shear is the same at every section.",
   "proof": [
    "Wall reaction is P upward, so shear starts at +P.",
    "No load between the wall and the tip, so shear stays flat.",
    "At the tip the load P brings it back to zero.",
    "A triangle would be the shear for a uniform load on this cantilever."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       1
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "+P"
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
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.08,
       "text": "−PL"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which bending moment diagram matches this cantilever with a load at its tip? (Sagging is positive.)",
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
   "options": [
    "Zero at the wall, growing to −PL at the tip",
    "A parabola from the wall to the tip",
    "A straight line from −PL at the wall to zero at the tip",
    "Constant −PL"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       1,
       -1
      ],
      [
       0,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       0.083,
       -0.84
      ],
      [
       0.167,
       -0.694
      ],
      [
       0.25,
       -0.563
      ],
      [
       0.333,
       -0.444
      ],
      [
       0.417,
       -0.34
      ],
      [
       0.458,
       -0.293
      ],
      [
       0.542,
       -0.21
      ],
      [
       0.625,
       -0.141
      ],
      [
       0.708,
       -0.085
      ],
      [
       0.792,
       -0.043
      ],
      [
       0.875,
       -0.016
      ],
      [
       0.958,
       -0.002
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       -1
      ]
     ]
    }
   ],
   "answer": 2,
   "why": "Moment at a section is P times the distance to the tip. That is largest at the wall (PL) and zero at the free end, and it is hogging, so it plots negative.",
   "proof": [
    "Cut at x from the wall, keep the right-hand piece. The load is (L − x) away.",
    "M(x) = −P(L − x): a straight line.",
    "At the wall: −PL. At the tip: 0. A free end can carry no moment.",
    "Negative because the top fibre is in tension.",
    "The first option puts the peak at the free end, which is impossible."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       1
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "+P"
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
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.08,
       "text": "−PL"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Which bending moment diagram matches this cantilever with a uniform load? (Sagging is positive.)",
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
   "options": [
    "A parabola that is flat at the wall",
    "A straight line from the wall to the tip",
    "A parabola above the axis",
    "A parabola that is steep at the wall and flat at the tip"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       0.05,
       -0.998
      ],
      [
       0.1,
       -0.99
      ],
      [
       0.15,
       -0.978
      ],
      [
       0.2,
       -0.96
      ],
      [
       0.25,
       -0.938
      ],
      [
       0.3,
       -0.91
      ],
      [
       0.35,
       -0.878
      ],
      [
       0.4,
       -0.84
      ],
      [
       0.45,
       -0.797
      ],
      [
       0.5,
       -0.75
      ],
      [
       0.55,
       -0.698
      ],
      [
       0.6,
       -0.64
      ],
      [
       0.65,
       -0.577
      ],
      [
       0.7,
       -0.51
      ],
      [
       0.75,
       -0.438
      ],
      [
       0.8,
       -0.36
      ],
      [
       0.85,
       -0.278
      ],
      [
       0.9,
       -0.19
      ],
      [
       0.95,
       -0.098
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       0.083,
       0.84
      ],
      [
       0.167,
       0.694
      ],
      [
       0.25,
       0.563
      ],
      [
       0.333,
       0.444
      ],
      [
       0.417,
       0.34
      ],
      [
       0.458,
       0.293
      ],
      [
       0.542,
       0.21
      ],
      [
       0.625,
       0.141
      ],
      [
       0.708,
       0.085
      ],
      [
       0.792,
       0.043
      ],
      [
       0.875,
       0.016
      ],
      [
       0.958,
       0.002
      ],
      [
       1,
       0
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       0.083,
       -0.84
      ],
      [
       0.167,
       -0.694
      ],
      [
       0.25,
       -0.563
      ],
      [
       0.333,
       -0.444
      ],
      [
       0.417,
       -0.34
      ],
      [
       0.458,
       -0.293
      ],
      [
       0.542,
       -0.21
      ],
      [
       0.625,
       -0.141
      ],
      [
       0.708,
       -0.085
      ],
      [
       0.792,
       -0.043
      ],
      [
       0.875,
       -0.016
      ],
      [
       0.958,
       -0.002
      ],
      [
       1,
       0
      ]
     ]
    }
   ],
   "answer": 3,
   "why": "The slope of the moment diagram equals the shear. Shear is largest at the wall (wL) and zero at the tip, so the curve is steepest at the wall and levels off at the free end.",
   "proof": [
    "M(x) = −w(L − x)²/2.",
    "At the wall:  −wL²/2. At the tip: 0.",
    "Slope dM/dx = V = w(L − x):  wL at the wall, 0 at the tip.",
    "So the parabola leaves the wall steeply and arrives at the tip horizontally.",
    "The look-alike that is flat at the wall would mean zero shear at the wall, which is where shear is greatest."
   ],
   "after": [
    {
     "t": "Shear force V",
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
       "text": "+wL"
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
       0.083,
       -0.84
      ],
      [
       0.167,
       -0.694
      ],
      [
       0.25,
       -0.563
      ],
      [
       0.333,
       -0.444
      ],
      [
       0.417,
       -0.34
      ],
      [
       0.458,
       -0.293
      ],
      [
       0.542,
       -0.21
      ],
      [
       0.625,
       -0.141
      ],
      [
       0.708,
       -0.085
      ],
      [
       0.792,
       -0.043
      ],
      [
       0.875,
       -0.016
      ],
      [
       0.958,
       -0.002
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.08,
       "text": "−wL²/2"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "The load is at L/4 from the left support. Which shear force diagram is right?",
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
   "options": [
    "+3P/4 up to the load, then −P/4",
    "+P/2 up to the load, then −P/2",
    "+P/4 up to the load, then −3P/4",
    "A tent peaking under the load"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0.333
      ],
      [
       0.25,
       0.333
      ],
      [
       0.25,
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
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
     ]
    }
   ],
   "answer": 0,
   "why": "The nearer support takes the bigger share: R_A = 3P/4 and R_B = P/4. Shear is +3P/4 on the short side and −P/4 on the long side. The step at the load is still P.",
   "proof": [
    "Lever rule:  R_A = P·(3L/4)/L = 3P/4,  R_B = P/4.",
    "Shear from A to the load:  +3P/4.",
    "Drop of P at the load:  3P/4 − P = −P/4.",
    "Check with areas:  (3P/4)(L/4) = (P/4)(3L/4) = 3PL/16. The positive and negative areas must cancel so the moment returns to zero."
   ],
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
       "text": "+3P/4"
      },
      {
       "x": 0.62,
       "text": "−P/4"
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
       "text": "3PL/16"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Two equal loads sit at the third points. Which bending moment diagram is right?",
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 0.333,
      "label": "P"
     },
     {
      "kind": "point",
      "x": 0.667,
      "label": "P"
     }
    ]
   },
   "options": [
    "A tent peaking at midspan",
    "A trapezoid: ramps at the ends, flat between the loads",
    "A smooth parabola",
    "Three flat steps"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.181,
       0.542
      ],
      [
       0.306,
       0.917
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.806,
       0.583
      ],
      [
       0.931,
       0.208
      ],
      [
       1,
       0
      ]
     ]
    },
    {
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
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       0
      ],
      [
       0.667,
       0
      ],
      [
       0.667,
       -1
      ],
      [
       1,
       -1
      ]
     ]
    }
   ],
   "answer": 1,
   "why": "Between the loads the shear is zero, so the moment cannot change: it is flat at PL/3. This constant-moment zone is why four-point bending is used for material tests.",
   "proof": [
    "Reactions are P each.",
    "Outer thirds:  V = ±P, so M ramps linearly.",
    "At the first load:  M = P·(L/3) = PL/3.",
    "Middle third:  V = P − P = 0, so dM/dx = 0 and M stays at PL/3.",
    "Result: a trapezoid. Pure bending with no shear in the middle."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       0
      ],
      [
       0.667,
       0
      ],
      [
       0.667,
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.16,
       "text": "+P"
      },
      {
       "x": 0.5,
       "text": "0"
      },
      {
       "x": 0.84,
       "text": "−P"
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
       0.181,
       0.542
      ],
      [
       0.306,
       0.917
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.806,
       0.583
      ],
      [
       0.931,
       0.208
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "PL/3"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "The only load is a clockwise couple M₀ at midspan. Which bending moment diagram is right? (Sagging is positive.)",
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "couple",
      "x": 0.5,
      "label": "M₀"
     }
    ]
   },
   "options": [
    "A tent peaking at midspan",
    "Constant along the beam",
    "Two parallel ramps with a vertical jump of M₀ at midspan",
    "A straight line from −M₀ at one end to +M₀ at the other"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       -0.375
      ],
      [
       0.313,
       -0.625
      ],
      [
       0.438,
       -0.875
      ],
      [
       0.5,
       -1
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
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       1
      ]
     ]
    }
   ],
   "answer": 2,
   "why": "A couple adds no force, so shear is constant and the moment has the same slope on both sides. At the couple the moment jumps by exactly M₀: from −M₀/2 to +M₀/2.",
   "proof": [
    "Reactions: equal and opposite, M₀/L, forming a couple that balances M₀.",
    "Shear is constant at −M₀/L across the whole span. A couple does not show on the shear diagram.",
    "M falls linearly from 0 to −M₀/2 just left of midspan.",
    "The applied couple adds a step of +M₀, to +M₀/2.",
    "Then the same slope takes it back to 0 at B. Both ends must be zero, which rules out the last option."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       -1
      ],
      [
       0.5,
       -1
      ],
      [
       0.5,
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
       0
      ],
      [
       0.188,
       -0.375
      ],
      [
       0.313,
       -0.625
      ],
      [
       0.438,
       -0.875
      ],
      [
       0.5,
       -1
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
       "x": 0.36,
       "text": "−M₀/2"
      },
      {
       "x": 0.66,
       "text": "+M₀/2"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "The uniform load covers the left half only. Which shear force diagram is right?",
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
   "options": [
    "A straight line across the whole span",
    "Flat, a step at midspan, then flat",
    "Flat over the left half, then a sloping line",
    "A sloping line over the left half, then flat"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
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
       -0.333
      ],
      [
       1,
       -0.333
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0.333
      ],
      [
       0.5,
       0.333
      ],
      [
       0.5,
       0.333
      ],
      [
       0.563,
       0.167
      ],
      [
       0.729,
       -0.278
      ],
      [
       0.813,
       -0.5
      ],
      [
       0.938,
       -0.833
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
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
     ]
    }
   ],
   "answer": 3,
   "why": "Shear slopes only where there is distributed load, and is flat where there is none. So it falls from +3wL/8 under the load and then stays at −wL/8 over the unloaded half.",
   "proof": [
    "R_A = 3wL/8, R_B = wL/8.",
    "Loaded half:  dV/dx = −w, a straight line from +3wL/8 down to 3wL/8 − wL/2 = −wL/8.",
    "Unloaded half:  dV/dx = 0, flat at −wL/8.",
    "No point load at midspan, so there is no step there. The diagram is continuous.",
    "It crosses zero at 3L/8, which is where the moment peaks."
   ],
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
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "The beam overhangs its right support and carries a load at the tip. Which bending moment diagram is right? (Sagging is positive; triangles mark the supports.)",
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "point",
      "x": 1,
      "label": "P"
     }
    ],
    "at": [
     0,
     0.667
    ]
   },
   "options": [
    "Positive everywhere, peaking over the right support",
    "Negative everywhere, peaking over the right support",
    "Positive tent peaking midway between the supports",
    "A straight line from the left end to the tip"
   ],
   "optionCurves": [
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.167,
       0.25
      ],
      [
       0.306,
       0.458
      ],
      [
       0.528,
       0.792
      ],
      [
       0.667,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.806,
       0.583
      ],
      [
       0.931,
       0.208
      ],
      [
       1,
       0
      ]
     ],
     "marks": [
      0,
      0.667
     ]
    },
    {
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
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.167,
       0.5
      ],
      [
       0.278,
       0.833
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.611,
       0.583
      ],
      [
       0.861,
       0.208
      ],
      [
       1,
       0
      ]
     ],
     "marks": [
      0,
      0.667
     ]
    },
    {
     "pts": [
      [
       0,
       -1
      ],
      [
       1,
       0
      ]
     ],
     "marks": [
      0,
      0.667
     ]
    }
   ],
   "answer": 1,
   "why": "The tip load bends the whole beam hogging, top in tension, so the moment is negative throughout. It is zero at the left pin and at the free tip, and largest over the support next to the overhang.",
   "proof": [
    "Overhang: a cantilever off support B.  M_B = −P × (overhang length).",
    "Free tip: M = 0.",
    "Left pin: M = 0.",
    "No load between A and B, so M runs in a straight line from 0 at A to M_B at B.",
    "Result: a negative triangle with its point over B. There is no sagging region at all."
   ],
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
       "text": "−P/2"
      },
      {
       "x": 0.84,
       "text": "+P"
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
       "text": "−PL/3"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "This is the shear force diagram of a simply supported beam: +P over the first third, zero over the middle third, −P over the last third. What is the loading?",
   "given": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       0
      ],
      [
       0.667,
       0
      ],
      [
       0.667,
       -1
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.16,
       "text": "+P"
      },
      {
       "x": 0.5,
       "text": "0"
      },
      {
       "x": 0.84,
       "text": "−P"
      }
     ]
    }
   ],
   "options": [
    "One point load at midspan",
    "A uniform load over the middle third",
    "Two equal point loads at the third points",
    "A couple at midspan"
   ],
   "answer": 2,
   "why": "Every vertical step in a shear diagram is a point force of that size. There are two downward steps of P, at L/3 and 2L/3, and flat lines everywhere else, so there is no distributed load.",
   "proof": [
    "Read left to right. Jump up of P at the left end: reaction R_A = P.",
    "Step down of P at L/3: a downward point load P.",
    "Step down of P at 2L/3: a second downward point load P.",
    "Jump up of P at the right end: reaction R_B = P.",
    "Flat segments mean no distributed load. A uniform load would show as a sloping line, and a couple would not show at all."
   ],
   "after": [
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.181,
       0.542
      ],
      [
       0.306,
       0.917
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.667,
       1
      ],
      [
       0.806,
       0.583
      ],
      [
       0.931,
       0.208
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.5,
       "text": "PL/3"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "This is the bending moment diagram of a beam. Which shear force diagram goes with it?",
   "given": [
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
     ]
    }
   ],
   "options": [
    "A straight line from + to −, crossing zero at midspan",
    "Two flat steps",
    "A tent",
    "Constant"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
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
       -1
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       0.375
      ],
      [
       0.313,
       0.625
      ],
      [
       0.438,
       0.875
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
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       1,
       1
      ]
     ]
    }
   ],
   "answer": 0,
   "why": "Shear is the slope of the moment diagram. A parabola's slope changes at a steady rate: positive on the way up, zero at the peak, negative on the way down. That is a straight line through zero.",
   "proof": [
    "V = dM/dx.",
    "Left end: M rises steeply, so V is large and positive.",
    "Peak: the tangent is horizontal, so V = 0.",
    "Right end: M falls steeply, so V is large and negative.",
    "The slope of a parabola is linear, so V is a straight line. Two flat steps would give a tent, not a curve."
   ],
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
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A simply supported beam spans 6 m. Its shear diagram is +6 kN from 0 to 2 m and −3 kN from 2 m to 6 m. What is the maximum bending moment?",
   "given": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       -0.5
      ],
      [
       1,
       -0.5
      ]
     ],
     "notes": [
      {
       "x": 0.16,
       "text": "+6 kN"
      },
      {
       "x": 0.66,
       "text": "−3 kN"
      }
     ]
    }
   ],
   "options": [
    "6 kN·m",
    "9 kN·m",
    "18 kN·m",
    "12 kN·m"
   ],
   "answer": 3,
   "why": "The change in moment equals the area under the shear diagram. From the left end to where the shear changes sign: 6 kN × 2 m = 12 kN·m.",
   "proof": [
    "M starts at 0 at the pinned end.",
    "M(2 m) = area under V from 0 to 2 m = 6 × 2 = 12 kN·m.",
    "After that V is negative, so M falls. The peak is where V changes sign.",
    "Check: the remaining area is −3 × 4 = −12, which returns M to zero at the roller. ✓",
    "The step of 9 kN at 2 m is the applied load."
   ],
   "after": [
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.181,
       0.542
      ],
      [
       0.306,
       0.917
      ],
      [
       0.333,
       1
      ],
      [
       0.333,
       1
      ],
      [
       0.556,
       0.667
      ],
      [
       0.778,
       0.333
      ],
      [
       0.917,
       0.125
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.333,
       "text": "12 kN·m"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "This bending moment diagram has a vertical jump at midspan. What causes a jump like that?",
   "given": [
    {
     "t": "Bending moment M (sagging +)",
     "pts": [
      [
       0,
       0
      ],
      [
       0.188,
       -0.375
      ],
      [
       0.313,
       -0.625
      ],
      [
       0.438,
       -0.875
      ],
      [
       0.5,
       -1
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
     ]
    }
   ],
   "options": [
    "An applied couple at that point",
    "A point load at that point",
    "A support reaction at that point",
    "The end of a uniform load"
   ],
   "answer": 0,
   "why": "A point force makes a kink (change of slope) in the moment diagram and a step in the shear diagram. Only a concentrated couple makes a step in the moment diagram.",
   "proof": [
    "Take a very short piece of beam around the point.",
    "If a couple M₀ acts on it, moment equilibrium needs the internal moment on the two faces to differ by M₀: a jump.",
    "A point force on the short piece changes the shear by P but changes the moment by P × (tiny length), which is zero: no jump, only a change of slope.",
    "Summary: force → step in V, kink in M. Couple → nothing in V, step in M.",
    "The slopes on each side are equal here, which confirms the shear is unchanged."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       -1
      ],
      [
       0.5,
       -1
      ],
      [
       0.5,
       -1
      ],
      [
       1,
       -1
      ]
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "The load rises linearly from zero at the left to w₀ at the right. Which shear force diagram is right?",
   "diagram": {
    "support": "simple",
    "loads": [
     {
      "kind": "tri",
      "from": 0,
      "to": 1,
      "label": "w₀"
     }
    ]
   },
   "options": [
    "A straight line crossing zero at midspan",
    "A curve, flat at the left and steepening to the right, crossing zero right of midspan",
    "A curve, steep at the left and flattening to the right",
    "A lopsided hump"
   ],
   "optionCurves": [
    {
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
     ]
    },
    {
     "pts": [
      [
       0,
       0.5
      ],
      [
       0.083,
       0.49
      ],
      [
       0.125,
       0.477
      ],
      [
       0.208,
       0.435
      ],
      [
       0.25,
       0.406
      ],
      [
       0.292,
       0.372
      ],
      [
       0.375,
       0.289
      ],
      [
       0.417,
       0.24
      ],
      [
       0.5,
       0.125
      ],
      [
       0.542,
       0.06
      ],
      [
       0.625,
       -0.086
      ],
      [
       0.667,
       -0.167
      ],
      [
       0.75,
       -0.344
      ],
      [
       0.792,
       -0.44
      ],
      [
       0.875,
       -0.648
      ],
      [
       0.917,
       -0.76
      ],
      [
       1,
       -1
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       1
      ],
      [
       0.083,
       0.76
      ],
      [
       0.125,
       0.648
      ],
      [
       0.208,
       0.44
      ],
      [
       0.25,
       0.344
      ],
      [
       0.333,
       0.167
      ],
      [
       0.375,
       0.086
      ],
      [
       0.458,
       -0.06
      ],
      [
       0.5,
       -0.125
      ],
      [
       0.583,
       -0.24
      ],
      [
       0.625,
       -0.289
      ],
      [
       0.708,
       -0.372
      ],
      [
       0.75,
       -0.406
      ],
      [
       0.792,
       -0.435
      ],
      [
       0.875,
       -0.477
      ],
      [
       0.917,
       -0.49
      ],
      [
       1,
       -0.5
      ]
     ]
    },
    {
     "pts": [
      [
       0,
       0
      ],
      [
       0.083,
       0.215
      ],
      [
       0.167,
       0.421
      ],
      [
       0.208,
       0.518
      ],
      [
       0.25,
       0.609
      ],
      [
       0.292,
       0.693
      ],
      [
       0.333,
       0.77
      ],
      [
       0.375,
       0.837
      ],
      [
       0.417,
       0.895
      ],
      [
       0.458,
       0.941
      ],
      [
       0.5,
       0.974
      ],
      [
       0.542,
       0.995
      ],
      [
       0.583,
       1
      ],
      [
       0.625,
       0.99
      ],
      [
       0.667,
       0.962
      ],
      [
       0.708,
       0.917
      ],
      [
       0.75,
       0.853
      ],
      [
       0.792,
       0.768
      ],
      [
       0.833,
       0.662
      ],
      [
       0.875,
       0.533
      ],
      [
       0.917,
       0.38
      ],
      [
       0.958,
       0.203
      ],
      [
       1,
       0
      ]
     ]
    }
   ],
   "answer": 1,
   "why": "The slope of the shear diagram is minus the load intensity. The load is zero at the left, so the curve starts flat, and it steepens as the load grows. More load sits on the right, so the zero crossing is right of centre, at 0.577L.",
   "proof": [
    "Total load = w₀L/2, acting at 2L/3 from the left.",
    "R_A = w₀L/6,  R_B = w₀L/3.",
    "V(x) = w₀L/6 − w₀x²/2L: a parabola with zero slope at x = 0.",
    "V = 0 at x = L/√3 = 0.577L.",
    "Linear load, quadratic shear, cubic moment."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       0.5
      ],
      [
       0.083,
       0.49
      ],
      [
       0.125,
       0.477
      ],
      [
       0.208,
       0.435
      ],
      [
       0.25,
       0.406
      ],
      [
       0.292,
       0.372
      ],
      [
       0.375,
       0.289
      ],
      [
       0.417,
       0.24
      ],
      [
       0.5,
       0.125
      ],
      [
       0.542,
       0.06
      ],
      [
       0.625,
       -0.086
      ],
      [
       0.667,
       -0.167
      ],
      [
       0.75,
       -0.344
      ],
      [
       0.792,
       -0.44
      ],
      [
       0.875,
       -0.648
      ],
      [
       0.917,
       -0.76
      ],
      [
       1,
       -1
      ]
     ],
     "notes": [
      {
       "x": 0.04,
       "text": "+w₀L/6"
      },
      {
       "x": 0.95,
       "text": "−w₀L/3"
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
       0.215
      ],
      [
       0.167,
       0.421
      ],
      [
       0.208,
       0.518
      ],
      [
       0.25,
       0.609
      ],
      [
       0.292,
       0.693
      ],
      [
       0.333,
       0.77
      ],
      [
       0.375,
       0.837
      ],
      [
       0.417,
       0.895
      ],
      [
       0.458,
       0.941
      ],
      [
       0.5,
       0.974
      ],
      [
       0.542,
       0.995
      ],
      [
       0.583,
       1
      ],
      [
       0.625,
       0.99
      ],
      [
       0.667,
       0.962
      ],
      [
       0.708,
       0.917
      ],
      [
       0.75,
       0.853
      ],
      [
       0.792,
       0.768
      ],
      [
       0.833,
       0.662
      ],
      [
       0.875,
       0.533
      ],
      [
       0.917,
       0.38
      ],
      [
       0.958,
       0.203
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.577,
       "text": "0.064·w₀L²"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "This is the shear force diagram for a beam with a uniform load on its left half. Where is the bending moment largest?",
   "given": [
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
    }
   ],
   "options": [
    "At midspan",
    "At the left support",
    "Where the shear crosses zero, 3L/8 from the left",
    "Where the load ends"
   ],
   "answer": 2,
   "why": "dM/dx = V. The moment climbs while shear is positive and falls once it is negative, so the peak is at the zero crossing.",
   "proof": [
    "Shear starts at +3wL/8 and falls at rate w.",
    "Zero at x = (3wL/8)/w = 3L/8.",
    "To the left V > 0, so M is still rising. To the right V < 0, so M is falling.",
    "M_max = area of the positive triangle = ½ × (3wL/8) × (3L/8) = 9wL²/128.",
    "Midspan is only the answer for symmetric loading."
   ],
   "after": [
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
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A cantilever carries only a couple M₀ at its free end. What do its diagrams look like?",
   "diagram": {
    "support": "cantilever",
    "loads": [
     {
      "kind": "couple",
      "x": 1,
      "label": "M₀"
     }
    ]
   },
   "options": [
    "Constant shear, moment falling linearly to zero at the tip",
    "Linear shear, parabolic moment",
    "Zero shear, moment rising linearly from the wall",
    "Zero shear everywhere, constant moment M₀ along the whole length"
   ],
   "answer": 3,
   "why": "There is no force anywhere, so shear is zero. With zero shear the moment cannot change, so every section carries the same M₀. This is pure bending.",
   "proof": [
    "ΣF_y: the wall force is zero because no vertical load is applied.",
    "V = 0 everywhere.",
    "dM/dx = V = 0, so M is constant.",
    "At the tip the internal moment must equal the applied couple, so M = M₀ in magnitude all the way to the wall.",
    "The beam bends into a circular arc, since curvature M/EI is constant."
   ],
   "after": [
    {
     "t": "Shear force V",
     "pts": [
      [
       0,
       0
      ],
      [
       1,
       0
      ]
     ],
     "notes": []
    },
    {
     "t": "Bending moment M (sagging +)",
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
       "text": "M₀ (constant)"
      }
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "On a stretch of beam with no load on it at all, what must the diagrams look like?",
   "options": [
    "Shear constant, moment a straight line",
    "Shear a straight line, moment a parabola",
    "Shear zero, moment zero",
    "Shear constant, moment constant"
   ],
   "answer": 0,
   "why": "dV/dx = −w and dM/dx = V. No load means shear cannot change, so it is constant. A constant slope means the moment is a straight line.",
   "proof": [
    "Load to shear:  dV/dx = −w.  With w = 0, V is constant (possibly zero).",
    "Shear to moment:  dM/dx = V.  Constant V gives a straight line. If V happens to be zero, M is flat.",
    "The ladder: no load → constant V → linear M.  Uniform load → linear V → parabolic M.  Linearly varying load → parabolic V → cubic M.",
    "Point force: step in V, kink in M.  Couple: no change in V, step in M.",
    "These four lines are enough to sketch or check any diagram."
   ],
   "sketch": {
    "h": 150,
    "alt": "Ladder of load, shear and moment shapes",
    "items": [
     [
      "t",
      90,
      24,
      "load w",
      {
       "s": 13
      }
     ],
     [
      "t",
      230,
      24,
      "shear V",
      {
       "s": 13
      }
     ],
     [
      "t",
      370,
      24,
      "moment M",
      {
       "s": 13
      }
     ],
     [
      "t",
      90,
      58,
      "none",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      230,
      58,
      "constant",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      370,
      58,
      "straight line",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      90,
      90,
      "uniform",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      230,
      90,
      "straight line",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      370,
      90,
      "parabola",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      90,
      122,
      "linear",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      230,
      122,
      "parabola",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "t",
      370,
      122,
      "cubic",
      {
       "s": 13,
       "b": 0
      }
     ],
     [
      "a",
      140,
      54,
      180,
      54,
      {
       "m": 1
      }
     ],
     [
      "a",
      280,
      54,
      320,
      54,
      {
       "m": 1
      }
     ],
     [
      "a",
      140,
      86,
      180,
      86,
      {
       "m": 1
      }
     ],
     [
      "a",
      280,
      86,
      320,
      86,
      {
       "m": 1
      }
     ],
     [
      "a",
      140,
      118,
      180,
      118,
      {
       "m": 1
      }
     ],
     [
      "a",
      280,
      118,
      320,
      118,
      {
       "m": 1
      }
     ],
     [
      "l",
      40,
      36,
      420,
      36,
      {
       "w": 1,
       "m": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Candidates often report being asked to draw or interpret shear force and bending moment diagrams. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "mde2"
    ]
   }
  }
 ]
});
