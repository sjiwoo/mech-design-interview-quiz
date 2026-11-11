/* Topic: GD&T and tolerance trick questions. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "gdt-tolerance-tricks",
 "title": "GD&T and tolerance trick questions",
 "blurb": "Drawing callouts that look right but are not, and stack-up assumptions that fail in practice. Each one hinges on a common misreading.",
 "questions": [
  {
   "level": "Trick question",
   "q": "A hole was toleranced ±0.1 in X and Y. It measures 0.09 off in X and 0.09 off in Y, so it passes. The drawing is updated to position Ø0.2 to the same datums. Does the same hole still pass?",
   "options": [
    "Yes, Ø0.2 is the same as ±0.1",
    "Yes, position is always more generous",
    "No: its true offset is 0.127, outside the 0.1 radius",
    "It depends on the hole size"
   ],
   "answer": 2,
   "why": "Ø0.2 is a circle of radius 0.1. The hole is off diagonally by √(0.09² + 0.09²) = 0.127, which lies in the corner of the old square zone but outside the circle. Converting ±0.1 to Ø0.2 tightens the corners; the matching circle through the corners would be Ø0.28.",
   "proof": [
    "Radial offset:  √(0.09² + 0.09²) = 0.127.",
    "Position Ø0.2 allows a radial offset up to 0.1, so it fails.",
    "The ±0.1 square reaches 0.141 at its corners, so the old scheme passed it.",
    "A circle through the square's corners is Ø0.283. Using that gives 57% more zone area and passes every part the square did.",
    "Function is round (a round pin in a round hole), so the round zone is the right shape. Size it from function, not by copying the ± numbers."
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
    "h": 170,
    "alt": "Square ±0.1 zone with a circular Ø0.2 zone inside; a point in the corner is outside the circle",
    "items": [
     [
      "r",
      160,
      30,
      120,
      120,
      {
       "d": 1
      }
     ],
     [
      "c",
      220,
      90,
      60,
      {
       "f": 1
      }
     ],
     [
      "c",
      220,
      90,
      3,
      {
       "f": 2
      }
     ],
     [
      "c",
      273,
      37,
      5,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "l",
      220,
      90,
      273,
      37,
      {
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "t",
      300,
      40,
      "0.127 off",
      {
       "s": 12,
       "an": "start",
       "a": 1
      }
     ],
     [
      "t",
      220,
      166,
      "square ±0.1 against circle Ø0.2",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "What is the maximum material condition (MMC) of a hole dimensioned Ø10.0–10.2?",
   "options": [
    "Ø10.0, the smallest hole",
    "Ø10.2, the largest hole",
    "Ø10.1, the mean",
    "A hole has no MMC"
   ],
   "answer": 0,
   "why": "MMC means the most material left in the part. For a hole, that is when the hole is smallest. For a pin or shaft, MMC is its largest size. The name trips people up because \"maximum\" sounds like the biggest number.",
   "proof": [
    "Internal feature (hole, slot): MMC = smallest size, LMC = largest size.",
    "External feature (pin, shaft, tab): MMC = largest size, LMC = smallest.",
    "Memory aid: at MMC the part weighs the most.",
    "For this hole: MMC Ø10.0, LMC Ø10.2.",
    "MMC is the tightest-fit condition for assembly, which is why position tolerances at MMC are based on it."
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
   "level": "Trick question",
   "q": "A hole is Ø10.0–10.2 with position Ø0.2 and no material condition modifier. A hole measures Ø10.2. How much position tolerance does it get?",
   "options": [
    "Ø0.4",
    "Ø0.2",
    "Ø0.3",
    "Ø0"
   ],
   "answer": 1,
   "why": "With no modifier the tolerance applies regardless of feature size (RFS). There is no bonus tolerance, so every hole gets Ø0.2 whatever its size. Bonus only exists with Ⓜ or Ⓛ in the frame.",
   "proof": [
    "Since ASME Y14.5-1994, RFS is the default when no modifier is shown.",
    "RFS: the stated tolerance is the whole tolerance at every size.",
    "With Ⓜ, the same hole at Ø10.2 would get 0.2 + 0.2 = Ø0.4.",
    "RFS is used where centring matters more than fit, such as rotating parts and locating pins.",
    "Inspection under RFS needs the actual axis (CMM or adjustable gauge). A simple fixed-pin go gauge only works with MMC."
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
    "alt": "Feature control frame: position diameter 0.2, no modifier",
    "items": [
     [
      "r",
      110,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      128,
      45,
      "⌖",
      {
       "s": 15
      }
     ],
     [
      "r",
      146,
      24,
      54,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      173,
      45,
      "Ø0.2",
      {
       "s": 15
      }
     ],
     [
      "r",
      200,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      218,
      45,
      "A",
      {
       "s": 15
      }
     ],
     [
      "r",
      236,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      254,
      45,
      "B",
      {
       "s": 15
      }
     ],
     [
      "r",
      272,
      24,
      36,
      32,
      {
       "f": "s"
      }
     ],
     [
      "t",
      290,
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
   "level": "Trick question",
   "q": "A drawing calls out a flatness tolerance referenced to datum A, as shown. What is wrong with it?",
   "options": [
    "Nothing, flatness can reference a datum",
    "The tolerance must be bigger",
    "Flatness is a form control and never takes a datum; it should be flatness alone, or parallelism to A",
    "The datum must be listed first"
   ],
   "answer": 2,
   "why": "Flatness compares a surface only to itself: two parallel planes in any orientation. A datum would fix the planes' orientation, which turns it into parallelism. A flatness frame with a datum is invalid.",
   "proof": [
    "Form controls (flatness, straightness, circularity, cylindricity) never reference datums.",
    "If the surface must be flat and parallel to A, use parallelism to A, which also limits flatness.",
    "If only flatness matters, delete the datum.",
    "Orientation (parallelism, perpendicularity, angularity), location (position) and runout always need a datum.",
    "Profile can go either way: with datums it locates, without them it controls form only."
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
    "h": 84,
    "alt": "Invalid feature control frame: flatness 0.05 with datum A",
    "items": [
     [
      "r",
      150,
      14,
      36,
      32,
      {
       "f": "s",
       "a": 1
      }
     ],
     [
      "t",
      168,
      35,
      "⏥",
      {
       "s": 15
      }
     ],
     [
      "r",
      186,
      14,
      54,
      32,
      {
       "f": "s",
       "a": 1
      }
     ],
     [
      "t",
      213,
      35,
      "0.05",
      {
       "s": 15
      }
     ],
     [
      "r",
      240,
      14,
      36,
      32,
      {
       "f": "s",
       "a": 1
      }
     ],
     [
      "t",
      258,
      35,
      "A",
      {
       "s": 15
      }
     ],
     [
      "t",
      230,
      72,
      "flatness with a datum: not valid",
      {
       "s": 12,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A drawing shows a hole location as a boxed 40 with ±0.1 written next to it. What is wrong?",
   "options": [
    "The box should be a circle",
    "Nothing, it means 40 ± 0.1",
    "A basic dimension has no ± tolerance; its tolerance comes from the feature control frame",
    "±0.1 is too loose for a basic dimension"
   ],
   "answer": 2,
   "why": "The box marks a basic dimension: a theoretically exact value that only locates a tolerance zone. Adding ±0.1 gives it two tolerances that disagree. Either drop the box and use ±, or keep the box and control the hole with position.",
   "proof": [
    "Basic dimension: exact, no tolerance of its own.",
    "The hole's variation is set by its position tolerance, for example Ø0.2 at true position 40 from datum B.",
    "40 ± 0.1 boxed is contradictory and gives the shop and inspector no clear rule.",
    "General tolerance blocks in the title block do not apply to basic dimensions either.",
    "Mixing ± location with GD&T on the same feature is a common drawing review finding."
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
    "h": 90,
    "alt": "Boxed basic dimension 40 with ±0.1 written beside it",
    "items": [
     [
      "r",
      190,
      30,
      50,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      215,
      51,
      "40",
      {
       "s": 15
      }
     ],
     [
      "t",
      270,
      51,
      "± 0.1",
      {
       "s": 15,
       "an": "start",
       "a": 1
      }
     ],
     [
      "l",
      60,
      75,
      400,
      75,
      {
       "m": 1
      }
     ],
     [
      "t",
      230,
      88,
      "basic dimensions cannot carry ±",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A profile of a surface tolerance of 0.4 is shown with no other note. What zone does it define?",
   "options": [
    "±0.4 around the true profile, 0.8 wide in total",
    "+0.4 outward only",
    "Any 0.4 band the inspector chooses",
    "±0.2 around the true profile, 0.4 wide in total"
   ],
   "answer": 3,
   "why": "The number in a profile frame is the total width of the zone, split equally either side of the true profile by default. So 0.4 means ±0.2. A unilateral or unequal zone has to be shown explicitly.",
   "proof": [
    "Profile tolerance value = full zone width.",
    "Default: equally disposed, so half on each side, ±0.2.",
    "Unequal zones use the Ⓤ symbol in ASME Y14.5-2018, for example 0.4 Ⓤ 0.1 for 0.1 outside and 0.3 inside.",
    "Treating 0.4 as ±0.4 doubles the zone and passes bad parts.",
    "In a 1D stack, a profile of 0.4 contributes ±0.2."
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
    "h": 120,
    "alt": "True profile with a band 0.2 either side",
    "items": [
     [
      "p",
      [
       [
        60,
        70
       ],
       [
        160,
        70
       ],
       [
        220,
        40
       ],
       [
        300,
        40
       ],
       [
        400,
        70
       ]
      ],
      {
       "w": 2
      }
     ],
     [
      "p",
      [
       [
        60,
        60
       ],
       [
        160,
        60
       ],
       [
        220,
        30
       ],
       [
        300,
        30
       ],
       [
        400,
        60
       ]
      ],
      {
       "d": 1,
       "a": 1
      }
     ],
     [
      "p",
      [
       [
        60,
        80
       ],
       [
        160,
        80
       ],
       [
        220,
        50
       ],
       [
        300,
        50
       ],
       [
        400,
        80
       ]
      ],
      {
       "d": 1,
       "a": 1
      }
     ],
     [
      "t",
      230,
      100,
      "0.4 total: 0.2 each side",
      {
       "s": 12,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A threaded hole M8 has a position tolerance of Ø0.2. Unless the drawing says otherwise, which part of the thread does that tolerance apply to?",
   "options": [
    "The pitch diameter",
    "The major (outside) diameter",
    "The minor (root) diameter",
    "The countersink"
   ],
   "answer": 0,
   "why": "By default, geometric tolerances on screw threads apply to the axis of the pitch diameter, because that is the surface the mating thread actually locates on. To use the major or minor diameter instead, the drawing must say MAJOR DIA or MINOR DIA under the frame.",
   "proof": [
    "ASME Y14.5: tolerances on threads apply to the pitch cylinder unless stated otherwise.",
    "The pitch diameter is where the flanks of the two threads contact, so it sets where the bolt sits.",
    "Inspection uses a threaded gauge pin screwed into the hole, which locates on the pitch diameter.",
    "A smooth pin in the minor diameter can give a different reading if the tap ran off-axis.",
    "Gears and splines follow the same idea: the default is the pitch diameter."
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
   "level": "Trick question",
   "q": "A position tolerance on a single hole is written as 0.2, without the Ø symbol. What shape is the tolerance zone?",
   "options": [
    "A cylinder of diameter 0.2",
    "A cylinder of diameter 0.4",
    "There is no zone, the frame is invalid",
    "Two parallel planes 0.2 apart"
   ],
   "answer": 3,
   "why": "Without Ø, the zone is a total width between two parallel planes (or lines), which controls location in one direction only. That is correct for a slot or a width, but for a round hole it is almost always a drafting mistake, because it leaves the other direction to some other control.",
   "proof": [
    "Ø in the frame means a cylindrical zone: the axis must lie within a cylinder of that diameter.",
    "No Ø means a width-type zone: two parallel planes, 0.2 apart, centred on true position.",
    "Each direction then needs its own control. A hole with only one width zone is unconstrained the other way.",
    "Use the width form for slots, tabs and features located in one direction.",
    "Check this on any frame for a round feature: a missing Ø changes the meaning completely."
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
   "level": "Trick question",
   "q": "A part uses datums A (a face), B (a hole) and C (an edge). The inspector fixtures it as B | A | C instead of the drawing's A | B | C. Does that matter?",
   "options": [
    "No, the order of datums is only a convention",
    "Yes: the primary datum sets the part's orientation, so changing the order can change which parts pass",
    "Only if the part is plastic",
    "No, as long as all three datums are used"
   ],
   "answer": 1,
   "why": "The primary datum is contacted first and controls three degrees of freedom. If the hole is made primary, the part is aligned to the hole's axis instead of sitting flat on face A, so every measurement is taken in a slightly different frame.",
   "proof": [
    "Primary: full contact, removes 3 degrees of freedom (for a face: two rotations and one translation).",
    "Secondary and tertiary only remove what is left.",
    "A | B | C: sit the part flat on A, then locate B.  B | A | C: align to the hole's axis first, then touch A.",
    "If the hole is not perfectly perpendicular to A, the two frames differ by that tilt, and positions measured far from B change.",
    "Order should follow how the part mounts in the assembly, and inspection must match the drawing exactly."
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
   "level": "Trick question",
   "q": "A straightness tolerance of Ø0.05 is attached to the diameter dimension of a pin, rather than to its surface. What changes?",
   "options": [
    "Nothing, it still controls the surface lines",
    "It controls the pin's axis, and the pin may then exceed its MMC envelope (Rule #1 no longer applies)",
    "It becomes a position tolerance",
    "It makes the pin's size tolerance tighter"
   ],
   "answer": 1,
   "why": "A frame placed with the size dimension controls the derived median line, the axis. That overrides Rule #1 for this feature: the pin may bow beyond its perfect-form envelope, up to a virtual condition of MMC plus the straightness tolerance.",
   "proof": [
    "Frame pointing at the surface (a leader to the outline): controls straightness of surface lines. Rule #1 still applies, so the pin must fit its MMC envelope.",
    "Frame under the size dimension: controls the axis.",
    "With an axis control, the pin's virtual condition is MMC + 0.05 (at MMC), or larger RFS.",
    "So a Ø10.0 max pin could need a Ø10.05 hole to slide into.",
    "Use axis straightness for long, slender parts like shafts and pins, where some bow is acceptable if the assembly allows for it."
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
   "level": "Trick question",
   "q": "A step on a drawing is dimensioned three ways: three chained steps of 10, 20 and 30, each ±0.1, and the overall 60 ±0.1. A part has all three steps in tolerance but measures 60.25 overall. What should happen?",
   "options": [
    "Accept it, because every step is in tolerance",
    "Accept it, because the overall only matters in RSS",
    "Average the two results",
    "Reject it, and correct the drawing: the overall length is defined twice"
   ],
   "answer": 3,
   "why": "The part fails the overall dimension, so it is rejected. The real problem is the drawing: the overall is defined both directly (±0.1) and by the chain (up to ±0.3), which can disagree. One length must be removed or marked as a reference.",
   "proof": [
    "Steps in tolerance can add up to anywhere between 59.7 and 60.3.",
    "60.25 is fine by the chain but fails 60 ± 0.1, so the part is rejected as drawn.",
    "Over-dimensioning: a length with two defining routes and two tolerances.",
    "Fix: dimension the overall and two steps, and show the third step in brackets as a reference, or use baseline dimensions from one datum.",
    "Rule: each feature should be defined once, by the route that matters for function."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A stack has only two contributors, each ±0.1. RSS gives ±0.14 and worst case ±0.2. Is RSS a safe basis for the design?",
   "options": [
    "Not really: with so few contributors the averaging RSS relies on barely happens, so use worst case or check the actual distributions",
    "Yes, RSS is always valid",
    "Yes, because RSS is more accurate than worst case",
    "No, because RSS gives a larger number"
   ],
   "answer": 0,
   "why": "RSS assumes many independent contributors whose errors tend to cancel. With two, both being near their limits at once is fairly likely, especially if the processes are not centred. For few contributors, or safety-critical fits, worst case is the defensible choice.",
   "proof": [
    "Chance that two independent ±3σ parts both land in the outer 10% of their range on the same side is small but not negligible, and real processes often run off-centre.",
    "RSS benefit is √n: with n = 2 the saving is only 29%.",
    "Mean shifts, a common reality, add linearly and wipe out much of that saving.",
    "Guidance: RSS for 4+ contributors from capable, centred processes; worst case for 2 to 3 contributors or critical fits.",
    "Either way, the result is only as good as the assumption that each tolerance is really held."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A dimension is toleranced ±0.01 mm. The only tool on hand is a digital caliper with a resolution of 0.01 mm and an accuracy of about ±0.02 mm. Can it be used to accept parts?",
   "options": [
    "Yes, its resolution matches the tolerance",
    "No: its error is larger than the tolerance band itself; use a gauge about ten times more accurate",
    "Yes, if you measure three times and average",
    "Only for plastic parts"
   ],
   "answer": 1,
   "why": "The measurement uncertainty, ±0.02, is twice the tolerance, ±0.01. A good part could read bad and a bad part could read good. A common rule is that the instrument should be about 10 times more accurate than the tolerance: here, ±0.002, which means a micrometer or better.",
   "proof": [
    "Tolerance band: 0.02 total. Caliper uncertainty: ±0.02, so 0.04 total. The tool's error swamps the tolerance.",
    "Rule of ten: instrument accuracy should be no worse than a tenth of the tolerance.",
    "Resolution (the last digit shown) is not accuracy. Calipers show 0.01 but are rarely better than ±0.02.",
    "A gauge R&R study checks the whole measurement system, including operators and fixturing.",
    "Averaging repeated readings reduces random noise but not calibration bias or Abbe error from the caliper's jaws."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "An aluminium part with a 100.000 mm length is measured straight off the machine at 40 °C and reads 100.040. Aluminium expands at 23 × 10⁻⁶ /°C. Is it in tolerance to 100.00 ± 0.02?",
   "options": [
    "No, it is 0.04 over",
    "Yes, it is within ±0.05",
    "It depends on the operator",
    "Yes: at the standard 20 °C it would be about 99.994, inside tolerance"
   ],
   "answer": 3,
   "why": "Drawings are specified at 20 °C. The part is 20 °C warm, so it is 23 × 10⁻⁶ × 100 × 20 = 0.046 mm longer than it will be at 20 °C. Corrected, it is 99.994, which passes.",
   "proof": [
    "ISO 1 / ASME standard reference temperature: 20 °C.",
    "Thermal growth:  23 × 10⁻⁶ × 100 × 20 = 0.046 mm.",
    "Length at 20 °C:  100.040 − 0.046 = 99.994 mm, within 99.98 to 100.02.",
    "A steel gauge also expands, but less (12 × 10⁻⁶), so the error does not cancel when a steel instrument measures an aluminium part.",
    "Practice: let parts soak to room temperature before final inspection, or apply a temperature correction."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  }
 ]
});
