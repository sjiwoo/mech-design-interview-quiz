/* Topic: GD&T, part 2. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "gdt-2",
 "title": "GD&T, part 2",
 "blurb": "Form and orientation hierarchy, profile, runout, LMC, datum shift, composite and projected zones, fastener formulas and basic dimensions.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A surface has a parallelism tolerance of 0.05 to datum A. Is a separate flatness tolerance of 0.05 on the same surface needed?",
   "options": [
    "Yes, parallelism does not control flatness",
    "Yes, flatness must always be stated",
    "No, but parallelism cannot control flatness either",
    "No, parallelism already limits flatness to 0.05"
   ],
   "answer": 3,
   "why": "Parallelism puts the whole surface between two planes 0.05 apart, both parallel to A. A surface inside that zone cannot be out of flat by more than 0.05. Add flatness only if you want it tighter, for example 0.02.",
   "proof": [
    "Parallelism zone: two parallel planes, 0.05 apart, parallel to datum A. Every point of the surface must lie between them.",
    "Flatness zone: two parallel planes, 0.05 apart, in any orientation.",
    "Any surface that fits the parallelism zone also fits a flatness zone of the same width. So parallelism includes flatness.",
    "Hierarchy: location (position, profile) ⊃ orientation (parallelism, perpendicularity, angularity) ⊃ form (flatness, straightness).",
    "A refinement must be smaller than the control above it: flatness 0.02 under parallelism 0.05 is meaningful, flatness 0.05 is redundant."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: parallelism 0.05 to datum A",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "∥",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      54,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      153,
      45,
      "0.05",
      {
       "s": 15
      }
     ],
     [
      "r",
      180,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      198,
      45,
      "A",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A profile of a surface tolerance references datums A, B and C. Which characteristics of the surface does it control?",
   "options": [
    "Form only",
    "Form and orientation only",
    "Size, form, orientation and location",
    "Location only"
   ],
   "answer": 2,
   "why": "Profile of a surface with a full datum reference frame defines a zone that is fixed in space: every point must lie within a band around the true profile. That one zone limits where the surface is, how it is tilted, what shape it has, and for a closed shape its size.",
   "proof": [
    "The true profile is defined by basic dimensions from the datums.",
    "The zone is a uniform band around it, for example 0.2 total (±0.1).",
    "Location: the band is fixed relative to A, B, C.",
    "Orientation and form: the surface must follow the band everywhere, so it cannot tilt or wave more than the band allows.",
    "Without datums, profile controls only form (and size, for closed shapes). Profile is the most versatile control, which is why it is common on castings and sheet-metal parts."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: profile of a surface 0.2 to datums A, B, C",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "⌓",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      45,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      148.5,
      45,
      "0.2",
      {
       "s": 15
      }
     ],
     [
      "r",
      171,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      189,
      45,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      207,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      225,
      45,
      "B",
      {
       "s": 15
      }
     ],
     [
      "r",
      243,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      261,
      45,
      "C",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Why do modern drawings usually replace concentricity with circular runout or position?",
   "options": [
    "Concentricity is less accurate",
    "Concentricity needs the median points of many cross-sections, which is slow and hard to measure; runout is a simple dial reading",
    "Concentricity only works on non-round parts",
    "Runout allows bonus tolerance and concentricity does not"
   ],
   "answer": 1,
   "why": "Concentricity controls the median points of the feature relative to the datum axis, which means measuring many diametrically opposite point pairs. Runout is measured by spinning the part on its datum and reading a dial indicator. ASME Y14.5-2018 removed concentricity for this reason.",
   "proof": [
    "Concentricity: every median point (midpoint of opposite surface points) must lie within a cylinder around the datum axis.",
    "Measuring it means scanning many cross-sections and computing midpoints, normally on a CMM.",
    "Circular runout: rotate on the datum axis and read full indicator movement at each section. Fast and cheap.",
    "Runout also includes form errors (out-of-roundness), which is usually what matters for rotating parts.",
    "Position at MMC is used instead when the concern is assembly, because it allows bonus tolerance."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A hole sits close to the edge of a plate, and the wall between them must never get too thin. Which material condition modifier should its position tolerance use?",
   "options": [
    "LMC",
    "MMC",
    "RFS (no modifier)",
    "Projected tolerance zone"
   ],
   "answer": 0,
   "why": "The wall is thinnest when the hole is at its largest (least material) and shifted towards the edge. Using LMC ties the position tolerance to that worst case, and gives bonus tolerance as the hole gets smaller and the wall thicker.",
   "proof": [
    "MMC protects assembly: the worst case is the smallest hole with the most position error.",
    "LMC protects minimum material: the worst case is the largest hole with the most position error, which leaves the least wall.",
    "At LMC the position tolerance is as stated. As the hole shrinks towards MMC, the wall gets thicker, so extra position tolerance is safe: bonus.",
    "Minimum wall at worst case = edge distance − LMC radius − half the position tolerance at LMC.",
    "Use LMC for wall thickness, machining stock and minimum-edge-distance cases."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A hole is Ø10.0–10.2 with a position tolerance of Ø0.1 at LMC. A hole measures Ø10.0. How much position tolerance does it get?",
   "options": [
    "Ø0.1",
    "Ø0.2",
    "Ø0.3",
    "Ø0"
   ],
   "answer": 2,
   "why": "At LMC the hole is Ø10.2 and gets the stated Ø0.1. This hole is 0.2 smaller, so it gains 0.2 of bonus: Ø0.1 + 0.2 = Ø0.3.",
   "proof": [
    "LMC of a hole is its largest size, Ø10.2.",
    "Bonus = departure from LMC = 10.2 − 10.0 = 0.2.",
    "Allowed position tolerance = 0.1 + 0.2 = Ø0.3.",
    "Check the wall: a smaller hole with more shift leaves the same minimum material as a Ø10.2 hole with Ø0.1, which is the point of LMC.",
    "Compare MMC: the same frame at MMC would give the Ø10.0 hole only Ø0.1, and the Ø10.2 hole Ø0.3."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: position diameter 0.1 at LMC",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "⌖",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      72,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      162,
      45,
      "Ø0.1 Ⓛ",
      {
       "s": 15
      }
     ],
     [
      "r",
      198,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      216,
      45,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      234,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      252,
      45,
      "B",
      {
       "s": 15
      }
     ],
     [
      "r",
      270,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      288,
      45,
      "C",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "In a feature control frame, the datum reference reads B followed by Ⓜ, where datum B is a hole. What does the Ⓜ after the datum allow?",
   "options": [
    "Bonus tolerance on the controlled feature",
    "Datum feature shift: the pattern may move as datum hole B departs from its MMC",
    "Datum B can be any size",
    "Datum B must be measured at room temperature"
   ],
   "answer": 1,
   "why": "An Ⓜ on a datum reference means the gauge pin for datum B is fixed at its MMC size. If the actual hole B is larger, the part can shift on that pin, and the controlled features may move with it. This is called datum feature shift, and it is extra freedom on top of any bonus tolerance.",
   "proof": [
    "Gauge view: datum B is simulated by a fixed-size pin at its MMC boundary.",
    "An actual hole B larger than MMC fits loosely on that pin, so the whole part can translate or rotate slightly.",
    "The features being controlled move with the part. That freedom is datum shift.",
    "It is not added to each feature's tolerance zone. The pattern moves as a group relative to B.",
    "Use it when the mating part also locates on a pin through B, so the real assembly has the same play."
   ],
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: position, diameter 0.2 at MMC, datums A and B at MMC",
    "items": [
     [
      "r",
      80,
      25,
      34,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      97,
      45,
      "⌖",
      {
       "s": 14
      }
     ],
     [
      "r",
      114,
      25,
      70,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      149,
      45,
      "Ø0.2 Ⓜ",
      {
       "s": 14
      }
     ],
     [
      "r",
      184,
      25,
      34,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      201,
      45,
      "A",
      {
       "s": 14
      }
     ],
     [
      "r",
      218,
      25,
      43,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      239.5,
      45,
      "B Ⓜ",
      {
       "s": 14
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A bolt-hole pattern has a composite position tolerance: the upper line is Ø0.5 to A | B | C and the lower line is Ø0.1 to A. What does the lower line control?",
   "options": [
    "The location of the pattern relative to B and C",
    "The size of each hole",
    "The spacing and orientation of the holes relative to each other, and their perpendicularity to A",
    "Nothing, because the upper line already includes it"
   ],
   "answer": 2,
   "why": "The upper line, the pattern-locating zone, places the whole pattern relative to A, B and C within Ø0.5. The lower line, the feature-relating zone, keeps the holes within Ø0.1 of each other and perpendicular to A. The pattern can float as a group, but its holes must stay tightly spaced.",
   "proof": [
    "Upper line (PLTZF): Ø0.5 zones at true position from A, B, C. Controls where the pattern sits on the part.",
    "Lower line (FRTZF): Ø0.1 zones held at their basic spacing but free to translate and rotate as a group, only oriented to A.",
    "Each hole axis must lie in both its big zone and its small zone.",
    "Use this when the holes must line up with a mating pattern (tight spacing) but the pattern's location on the part is less critical.",
    "Two separate single-segment frames would instead lock the small zones to each datum listed in the lower line."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 110,
    "alt": "Composite feature control frame",
    "items": [
     [
      "r",
      90,
      20,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      41,
      "⌖",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      20,
      72,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      162,
      41,
      "Ø0.5 Ⓜ",
      {
       "s": 15
      }
     ],
     [
      "r",
      198,
      20,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      216,
      41,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      234,
      20,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      252,
      41,
      "B",
      {
       "s": 15
      }
     ],
     [
      "r",
      270,
      20,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      288,
      41,
      "C",
      {
       "s": 15
      }
     ],
     [
      "r",
      90,
      52,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      73,
      "",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      52,
      72,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      162,
      73,
      "Ø0.1 Ⓜ",
      {
       "s": 15
      }
     ],
     [
      "r",
      198,
      52,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      216,
      73,
      "A",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A pin is Ø10.0–10.1 with a perpendicularity tolerance of Ø0.05 at MMC to datum A. A pin measures Ø10.0. How much perpendicularity is it allowed, and what is the virtual condition?",
   "options": [
    "Ø0.05; virtual condition Ø10.05",
    "Ø0.15; virtual condition Ø10.15",
    "Ø0.10; virtual condition Ø10.10",
    "Ø0.15; virtual condition Ø10.05"
   ],
   "answer": 1,
   "why": "MMC of a pin is its largest size, Ø10.1. This pin is 0.1 smaller, so it gains 0.1 bonus: Ø0.15. The virtual condition is MMC plus the MMC tolerance: 10.1 + 0.05 = Ø10.15, the size of the gauge hole.",
   "proof": [
    "MMC of a pin = largest size = Ø10.1.",
    "Bonus = 10.1 − 10.0 = 0.1, so allowed = 0.05 + 0.1 = Ø0.15.",
    "Virtual condition (external feature, MMC) = MMC + geometric tolerance = 10.1 + 0.05 = Ø10.15.",
    "A functional gauge is a hole Ø10.15 perpendicular to A. Any good pin, of any size, drops into it.",
    "Check: the Ø10.0 pin tilted by Ø0.15 also just fits, 10.0 + 0.15 = 10.15."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: perpendicularity diameter 0.05 at MMC to A",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "⊥",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      81,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      166.5,
      45,
      "Ø0.05 Ⓜ",
      {
       "s": 15
      }
     ],
     [
      "r",
      207,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      225,
      45,
      "A",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A hole is dimensioned with a position tolerance of Ø0 at MMC. What does that mean, and is it a mistake?",
   "options": [
    "It is a mistake: zero tolerance cannot be made",
    "It requires perfect position at every size",
    "It means position is not controlled",
    "It is valid: at MMC the hole must be perfectly placed, but every bit of extra size becomes position tolerance"
   ],
   "answer": 3,
   "why": "Zero at MMC moves all the tolerance into the size limits. A hole at its smallest size must be perfect, but a hole 0.2 larger can be off position by Ø0.2. The gauge is the same as for any other split, and the shop decides how to spend the tolerance.",
   "proof": [
    "Function depends on the virtual condition: MMC − position at MMC. With Ø0, the virtual condition equals the MMC size.",
    "Example: hole Ø10.0–10.3, position Ø0 at MMC. A Ø10.1 hole may be off by Ø0.1, a Ø10.3 hole by Ø0.3.",
    "Same function as Ø9.9–10.3 with Ø0.1 at MMC, but the shop has more freedom: they can drill large and accurately, or small and loosely.",
    "It is only valid with MMC (or LMC). Ø0 RFS would demand perfection.",
    "Common on precision mounting holes, where it gives the most usable tolerance for the same fit."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame: position diameter zero at MMC",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "⌖",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      54,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      153,
      45,
      "Ø0 Ⓜ",
      {
       "s": 15
      }
     ],
     [
      "r",
      180,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      198,
      45,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      216,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      234,
      45,
      "B",
      {
       "s": 15
      }
     ],
     [
      "r",
      252,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      270,
      45,
      "C",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "Which surface should normally be chosen as the primary datum on a bracket that bolts flat against a frame?",
   "options": [
    "The flat mounting face that contacts the frame",
    "The largest hole in the part",
    "A small cosmetic edge",
    "Any surface, the choice does not matter"
   ],
   "answer": 0,
   "why": "Datums should copy how the part is located in the assembly. The mounting face is what the bracket actually sits on, it is large and stable (three-point contact), and measuring from it makes inspection match function.",
   "proof": [
    "Primary datum: removes 3 degrees of freedom. It should be the surface the part rests on in use, usually the largest functional face.",
    "Secondary: often a hole or edge that locates it sideways, removing 2 more.",
    "Tertiary: stops the last rotation.",
    "A non-functional datum forces conversions in the stack and can reject good parts or accept bad ones.",
    "Datum features should also be robust: big enough to fixture and not likely to be damaged."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "How does cylindricity differ from circularity (roundness)?",
   "options": [
    "They are the same control",
    "Cylindricity controls one cross-section; circularity controls the whole length",
    "Circularity requires a datum; cylindricity does not",
    "Cylindricity controls the whole surface at once, including roundness, straightness and taper; circularity checks each cross-section on its own"
   ],
   "answer": 3,
   "why": "Circularity puts each cross-section between two concentric circles, separately, so a tapered or banana-shaped shaft can still pass. Cylindricity puts the whole surface between two coaxial cylinders, so it also catches taper, bow and barrel shapes.",
   "proof": [
    "Circularity: at each section, all points lie between two concentric circles a set distance apart. Each section can have its own centre and size.",
    "Cylindricity: all points of the whole surface lie between two coaxial cylinders. One centre line for the whole length.",
    "So cylindricity includes circularity, straightness of the surface lines, and taper.",
    "Neither needs a datum: both are form controls.",
    "Use cylindricity on bearing journals and sealing bores, where taper or bow would matter."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "On a drawing, some dimensions are shown in a box, for example a hole location of 40 in a rectangle. What does the box mean?",
   "options": [
    "The dimension is critical and must be inspected",
    "It is a reference dimension only",
    "It is a basic dimension: theoretically exact, with its tolerance given by a feature control frame",
    "It is a dimension in inches"
   ],
   "answer": 2,
   "why": "A basic dimension has no ± tolerance of its own. It defines the exact true position or true profile, and the feature control frame says how far the real feature may vary from it.",
   "proof": [
    "Basic dimensions locate tolerance zones, not features directly.",
    "A hole at basic 40 from datum B with position Ø0.2 must have its axis within a Ø0.2 cylinder centred exactly 40 from B.",
    "This avoids tolerance stacking between chains of ± dimensions.",
    "Reference dimensions are different: shown in brackets, for information only, never inspected.",
    "Basic dimensions also set true profiles, true angles and the spacing in hole patterns."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A threaded hole will take a long stud that sticks 20 mm out of the part, into a mating plate. Why might the position tolerance carry a projected tolerance zone Ⓟ 20?",
   "options": [
    "It makes the thread stronger",
    "It extends the tolerance zone 20 mm above the surface, so tilt of the threaded hole cannot push the stud out of the mating hole",
    "It allows a larger thread",
    "It means the hole may be 20 mm deep"
   ],
   "answer": 1,
   "why": "A fixed fastener follows the threaded hole's axis. If the hole is slightly tilted, the stud's position error grows with height. Projecting the zone to where the mating part sits checks the axis where it actually matters.",
   "proof": [
    "Without Ⓟ, the zone applies only inside the threaded hole's depth.",
    "A small tilt θ over 20 mm moves the stud by 20·tan θ at the mating plate, which may exceed what the plain zone allows.",
    "With Ⓟ 20, the axis must lie within the zone over the 20 mm above the surface.",
    "Use it whenever a fixed fastener, dowel or stud passes into another part.",
    "Inspection uses a gauge pin threaded into the hole, measured above the surface."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   },
   "sketch": {
    "h": 80,
    "alt": "Feature control frame with a projected tolerance zone of 20",
    "items": [
     [
      "r",
      90,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      108,
      45,
      "⌖",
      {
       "s": 15
      }
     ],
     [
      "r",
      126,
      24,
      117,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      184.5,
      45,
      "Ø0.2 Ⓜ Ⓟ 20",
      {
       "s": 15
      }
     ],
     [
      "r",
      243,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      261,
      45,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      279,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      297,
      45,
      "B",
      {
       "s": 15
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Two plates are bolted together with M6 bolts passing through Ø6.6 clearance holes in both plates (a floating fastener). What is the largest equal position tolerance, at MMC, each pattern can have?",
   "options": [
    "Ø0.6",
    "Ø0.3",
    "Ø1.2",
    "Ø6.6"
   ],
   "answer": 0,
   "why": "For a floating fastener, T = H − F: hole MMC minus fastener MMC, applied to each part. Ø6.6 − Ø6.0 = Ø0.6 for each plate.",
   "proof": [
    "Floating fastener: both parts have clearance holes, so the bolt can sit anywhere in each.",
    "Worst-case fit: each hole can be off by T/2 radially in opposite directions, and the bolt still has to pass through both.",
    "Formula:  T = H − F, where H is the hole MMC and F the fastener MMC.",
    "T = 6.6 − 6.0 = Ø0.6 for each part.",
    "Compare the fixed fastener (bolt threaded into one part): T = (H − F)/2 = Ø0.3 each, because the bolt follows the threaded hole's error."
   ],
   "reported": {
    "kind": "topic",
    "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
    "sources": [
     "gtol",
     "srme",
     "mde2"
    ]
   }
  }
 ]
});
