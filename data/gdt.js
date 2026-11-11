/* Topic: GD&T. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "gdt",
  "title": "GD&T",
  "blurb": "Position, datums, MMC and bonus tolerance, virtual condition, form controls, runout and fastener formulas.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "A hole has a position tolerance of Ø0.2 relative to datums A, B and C. What does that mean?",
      "options": [
        "The hole diameter may vary by ±0.2",
        "The hole centre may be up to 0.2 from true position in any direction",
        "The hole's axis must lie inside a 0.2 diameter cylinder centred on the true position",
        "The hole centre may be off by ±0.2 in X and ±0.2 in Y"
      ],
      "answer": 2,
      "why": "The Ø symbol makes the zone a cylinder of diameter 0.2 around the theoretically exact location. The axis may be at most 0.1 from true position.",
      "proof": [
        "Basic dimensions from the datums locate the true position exactly.",
        "The tolerance zone is a cylinder of diameter 0.2 centred there, through the depth of the hole.",
        "The hole's axis must stay inside it, so the largest radial offset is 0.1.",
        "Position says nothing about the hole's size. That has its own size tolerance."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported GD&T position tolerance coming up in a hiring-manager round.",
        "sources": [
          "srme"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            30,
            30,
            190,
            120,
            {
              "f": 1
            }
          ],
          [
            "c",
            125,
            90,
            26,
            {
              "f": "s"
            }
          ],
          [
            "c",
            125,
            90,
            8,
            {
              "d": 1,
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "l",
            115,
            90,
            135,
            90,
            {
              "w": 1
            }
          ],
          [
            "l",
            125,
            80,
            125,
            100,
            {
              "w": 1
            }
          ],
          [
            "r",
            238,
            50,
            79.6,
            24
          ],
          [
            "t",
            277.8,
            67,
            "position",
            {
              "s": 13
            }
          ],
          [
            "r",
            317.6,
            50,
            46.8,
            24
          ],
          [
            "t",
            341,
            67,
            "Ø0.2",
            {
              "s": 13
            }
          ],
          [
            "r",
            364.40000000000003,
            50,
            26,
            24
          ],
          [
            "t",
            377.40000000000003,
            67,
            "A",
            {
              "s": 13
            }
          ],
          [
            "r",
            390.40000000000003,
            50,
            26,
            24
          ],
          [
            "t",
            403.40000000000003,
            67,
            "B",
            {
              "s": 13
            }
          ],
          [
            "r",
            416.40000000000003,
            50,
            26,
            24
          ],
          [
            "t",
            429.40000000000003,
            67,
            "C",
            {
              "s": 13
            }
          ],
          [
            "t",
            250,
            110,
            "zone = ?",
            {
              "an": "start",
              "a": 1
            }
          ],
          [
            "a",
            246,
            106,
            137,
            92,
            {
              "a": 1,
              "w": 1.5
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A hole is dimensioned Ø10.0–10.2 with position Ø0.2 at MMC. One part's hole measures Ø10.15. What position tolerance does that hole get?",
      "options": [
        "Ø0.20",
        "Ø0.25",
        "Ø0.35",
        "Ø0.40"
      ],
      "answer": 2,
      "why": "Bonus = actual size − MMC size = 10.15 − 10.0 = 0.15. Total = 0.2 + 0.15 = Ø0.35.",
      "proof": [
        "MMC of a hole is its smallest size: Ø10.0. That is when the stated Ø0.2 applies.",
        "As the hole gets bigger than MMC, it gains bonus tolerance equal to the departure:  10.15 − 10.0 = 0.15.",
        "Allowed position = 0.2 + 0.15 = Ø0.35."
      ],
      "proofTitle": "Stated tolerance plus bonus",
      "methods": [
        {
          "title": "Virtual condition",
          "steps": [
            "Virtual condition of the hole = MMC size − position tolerance = 10.0 − 0.2 = Ø9.8. A Ø9.8 gauge pin at true position must always fit.",
            "For an actual hole of Ø10.15, the axis can move until the hole touches that pin:  10.15 − 9.8 = Ø0.35 diametral zone.",
            "Same answer. MMC is used because it guarantees assembly while accepting more parts."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            20,
            30,
            160,
            110,
            {
              "f": 1
            }
          ],
          [
            "c",
            100,
            85,
            30,
            {
              "f": "s"
            }
          ],
          [
            "t",
            100,
            90,
            "Ø10.15",
            {
              "s": 12
            }
          ],
          [
            "r",
            205,
            44,
            79.6,
            24
          ],
          [
            "t",
            244.8,
            61,
            "position",
            {
              "s": 13
            }
          ],
          [
            "r",
            284.6,
            44,
            79.6,
            24
          ],
          [
            "t",
            324.40000000000003,
            61,
            "Ø0.2 (M)",
            {
              "s": 13
            }
          ],
          [
            "r",
            364.20000000000005,
            44,
            26,
            24
          ],
          [
            "t",
            377.20000000000005,
            61,
            "A",
            {
              "s": 13
            }
          ],
          [
            "r",
            390.20000000000005,
            44,
            26,
            24
          ],
          [
            "t",
            403.20000000000005,
            61,
            "B",
            {
              "s": 13
            }
          ],
          [
            "r",
            416.20000000000005,
            44,
            26,
            24
          ],
          [
            "t",
            429.20000000000005,
            61,
            "C",
            {
              "s": 13
            }
          ],
          [
            "t",
            205,
            96,
            "size Ø10.0–10.2",
            {
              "an": "start"
            }
          ],
          [
            "t",
            205,
            120,
            "allowed position = ?",
            {
              "an": "start",
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A pin is Ø9.9–10.0 with position Ø0.1 at MMC. What is its virtual condition (the worst-case boundary a mating hole must clear)?",
      "options": [
        "Ø10.1",
        "Ø9.9",
        "Ø10.0",
        "Ø9.8"
      ],
      "answer": 0,
      "why": "For an external feature, virtual condition = MMC size + geometric tolerance = 10.0 + 0.1 = Ø10.1.",
      "proof": [
        "MMC of a pin is its largest size: Ø10.0.",
        "At MMC its axis can be off by up to 0.05 radially (Ø0.1 zone), so the pin can sweep a boundary of 10.0 + 0.1 = Ø10.1.",
        "A smaller pin gets bonus tolerance, but its boundary never exceeds Ø10.1.",
        "For a hole the sign flips: virtual condition = MMC − tolerance."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            70,
            110,
            160,
            34,
            {
              "f": 1
            }
          ],
          [
            "r",
            130,
            40,
            40,
            70,
            {
              "f": 2
            }
          ],
          [
            "t",
            150,
            34,
            "pin"
          ],
          [
            "r",
            250,
            44,
            79.6,
            24
          ],
          [
            "t",
            289.8,
            61,
            "position",
            {
              "s": 13
            }
          ],
          [
            "r",
            329.6,
            44,
            79.6,
            24
          ],
          [
            "t",
            369.40000000000003,
            61,
            "Ø0.1 (M)",
            {
              "s": 13
            }
          ],
          [
            "r",
            409.20000000000005,
            44,
            26,
            24
          ],
          [
            "t",
            422.20000000000005,
            61,
            "A",
            {
              "s": 13
            }
          ],
          [
            "t",
            250,
            96,
            "size Ø9.9–10.0",
            {
              "an": "start"
            }
          ],
          [
            "t",
            250,
            120,
            "virtual condition = ?",
            {
              "an": "start",
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A CMM report shows a hole centre off true position by 0.06 in X and 0.08 in Y. What is the measured position error, reported the way a feature control frame states it?",
      "options": [
        "0.10",
        "0.20",
        "0.14",
        "0.28"
      ],
      "answer": 1,
      "why": "Position is reported as a diameter: 2 × √(0.06² + 0.08²) = 2 × 0.10 = 0.20.",
      "proof": [
        "Radial offset:  r = √(0.06² + 0.08²) = √0.0100 = 0.10.",
        "The tolerance zone is a diameter, so the reported deviation is 2r = 0.20.",
        "This hole just passes a Ø0.2 position tolerance, and fails Ø0.15.",
        "Forgetting the factor of 2 is the most common mistake here."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "l",
            120,
            130,
            330,
            130,
            {
              "w": 1,
              "d": 1
            }
          ],
          [
            "l",
            160,
            160,
            160,
            30,
            {
              "w": 1,
              "d": 1
            }
          ],
          [
            "t",
            152,
            122,
            "true position",
            {
              "an": "end",
              "s": 12
            }
          ],
          [
            "c",
            260,
            62,
            5,
            {
              "f": 2,
              "a": 1
            }
          ],
          [
            "t",
            270,
            56,
            "measured centre",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "l",
            160,
            146,
            260,
            146,
            {
              "w": 1
            }
          ],
          [
            "l",
            160,
            141,
            160,
            151,
            {
              "w": 1
            }
          ],
          [
            "l",
            260,
            141,
            260,
            151,
            {
              "w": 1
            }
          ],
          [
            "t",
            210,
            162,
            "0.06",
            {
              "s": 13
            }
          ],
          [
            "l",
            346,
            62,
            346,
            130,
            {
              "w": 1
            }
          ],
          [
            "l",
            341,
            62,
            351,
            62,
            {
              "w": 1
            }
          ],
          [
            "l",
            341,
            130,
            351,
            130,
            {
              "w": 1
            }
          ],
          [
            "t",
            354,
            101,
            "0.08",
            {
              "s": 13,
              "an": "start"
            }
          ],
          [
            "l",
            160,
            130,
            260,
            62,
            {
              "a": 1,
              "d": 1,
              "w": 1.5
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "In a datum reference frame A | B | C built from three flat surfaces, how many degrees of freedom does the primary datum A remove?",
      "options": [
        "1",
        "2",
        "6",
        "3"
      ],
      "answer": 3,
      "why": "A plane contacts on at least 3 points and removes 3 degrees of freedom: one translation and two rotations. This is the 3-2-1 rule.",
      "proof": [
        "A free part has 6 degrees of freedom: 3 translations and 3 rotations.",
        "Primary plane (3 contact points): stops translation normal to it and rotation about the two in-plane axes. That removes 3.",
        "Secondary plane (2 points): stops one more translation and the last rotation. That removes 2.",
        "Tertiary plane (1 point): stops the final translation. That removes 1.  3 + 2 + 1 = 6.",
        "Datum order matters: choose the primary as the surface that seats the part in the real assembly."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported degree-of-freedom questions covering x, y, z and the three rotations.",
        "sources": [
          "dof"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "h",
            60,
            140,
            400,
            140,
            1
          ],
          [
            "h",
            100,
            30,
            100,
            140,
            -1
          ],
          [
            "r",
            100,
            70,
            200,
            70,
            {
              "f": 1
            }
          ],
          [
            "t",
            200,
            110,
            "part"
          ],
          [
            "t",
            250,
            162,
            "A (primary)"
          ],
          [
            "t",
            56,
            80,
            "B",
            {
              "an": "end"
            }
          ],
          [
            "t",
            330,
            60,
            "C: end stop",
            {
              "an": "start",
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Which of these tolerances never references a datum?",
      "options": [
        "Flatness",
        "Perpendicularity",
        "Position",
        "Total runout"
      ],
      "answer": 0,
      "why": "Flatness is a form tolerance. Form controls (flatness, straightness, circularity, cylindricity) compare a feature only to itself.",
      "proof": [
        "Form tolerances describe the shape of one feature: all points of the surface must lie between two parallel planes the tolerance apart.",
        "Those planes are free to sit wherever best fits the surface, so no datum is needed or allowed.",
        "Orientation (perpendicularity, parallelism, angularity), location (position) and runout all relate a feature to something else, so they need datums.",
        "Profile is the exception that can be used with or without datums."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Under Rule #1 (the envelope principle, ASME Y14.5), a shaft is dimensioned Ø20.0–20.1 with no other tolerance. How much can it be bent (out of straight) if it measures Ø20.1 everywhere?",
      "options": [
        "0.05",
        "0",
        "0.1",
        "No limit, straightness is uncontrolled"
      ],
      "answer": 1,
      "why": "Rule #1: a feature of size must have perfect form at MMC. At Ø20.1 everywhere the shaft must fit inside a perfect Ø20.1 envelope, so no bend is allowed.",
      "proof": [
        "Rule #1 says the size limits also control form: the surface may not go outside a perfect-form envelope at MMC (Ø20.1 for this shaft).",
        "A shaft at Ø20.1 along its whole length fills that envelope, so it has to be perfectly straight.",
        "A shaft at Ø20.0 everywhere could be bent by up to 0.1 and still fit inside the envelope.",
        "So size tolerance gives form control for free. ISO drawings do not assume this by default (independency principle)."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 150,
        "items": [
          [
            "r",
            70,
            52,
            320,
            36,
            {
              "d": 1,
              "w": 1.5
            }
          ],
          [
            "p",
            [
              [
                75,
                78
              ],
              [
                150,
                62
              ],
              [
                230,
                56
              ],
              [
                310,
                62
              ],
              [
                385,
                78
              ],
              [
                385,
                86
              ],
              [
                310,
                72
              ],
              [
                230,
                66
              ],
              [
                150,
                72
              ],
              [
                75,
                86
              ]
            ],
            {
              "close": 1,
              "f": 1
            }
          ],
          [
            "t",
            230,
            36,
            "perfect-form envelope Ø20.1",
            {
              "s": 12
            }
          ],
          [
            "t",
            230,
            118,
            "bend allowed = ?",
            {
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "What does total runout control that circular runout does not?",
      "options": [
        "Nothing, they are the same",
        "Only the surface finish",
        "The size of the feature",
        "The whole surface at once, including taper and straightness along the axis"
      ],
      "answer": 3,
      "why": "Circular runout checks each cross-section on its own. Total runout sweeps the indicator along the whole surface while the part rotates, so taper and bow count too.",
      "proof": [
        "Both are measured by rotating the part about a datum axis under a dial indicator.",
        "Circular runout: the indicator is reset at each cross-section. It catches eccentricity and out-of-roundness at that section.",
        "Total runout: the indicator travels along the surface without resetting, and the full reading must be within tolerance.",
        "So total runout also limits taper, straightness and coaxiality together. It is the tighter and more expensive control."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            70,
            80,
            320,
            40,
            {
              "f": 1
            }
          ],
          [
            "l",
            50,
            100,
            410,
            100,
            {
              "d": 1,
              "w": 1
            }
          ],
          [
            "l",
            230,
            34,
            230,
            78
          ],
          [
            "c",
            230,
            24,
            13,
            {
              "f": "s"
            }
          ],
          [
            "a",
            170,
            56,
            290,
            56,
            {
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "t",
            300,
            52,
            "sweep along",
            {
              "an": "start",
              "s": 12,
              "a": 1
            }
          ],
          [
            "p",
            [
              [
                417.5,
                120.7
              ],
              [
                421,
                119.1
              ],
              [
                424.1,
                116.9
              ],
              [
                426.9,
                114.1
              ],
              [
                429.1,
                111
              ],
              [
                430.7,
                107.5
              ],
              [
                431.7,
                103.8
              ],
              [
                432,
                100
              ],
              [
                431.7,
                96.2
              ],
              [
                430.7,
                92.5
              ],
              [
                429.1,
                89
              ],
              [
                426.9,
                85.9
              ],
              [
                424.1,
                83.1
              ],
              [
                421,
                80.9
              ],
              [
                417.5,
                79.3
              ]
            ],
            {
              "w": 1.5
            }
          ],
          [
            "t",
            230,
            146,
            "datum axis",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "Two plates are joined by an M6 screw that passes through a clearance hole in the top plate and threads into the bottom plate (a fixed fastener). The clearance hole's smallest size is Ø6.6. What equal position tolerance can each plate have and still always assemble?",
      "options": [
        "Ø0.15",
        "Ø0.3",
        "Ø0.6",
        "Ø1.2"
      ],
      "answer": 1,
      "why": "Fixed fastener formula: H = F + T₁ + T₂. With equal tolerances, T = (6.6 − 6.0)/2 = Ø0.3 each.",
      "proof": [
        "Total diametral clearance:  H − F = 6.6 − 6.0 = 0.6.",
        "In a fixed fastener joint the screw is located by the threaded hole, so the threaded hole's error moves the screw and the clearance hole's error moves the hole.",
        "Both errors use up the same clearance:  T₁ + T₂ = H − F = 0.6.",
        "Split equally:  T = Ø0.3 each."
      ],
      "proofTitle": "Fixed fastener formula",
      "methods": [
        {
          "title": "Worst-case shift argument",
          "steps": [
            "Radial clearance between screw and hole when both are perfectly placed:  (6.6 − 6.0)/2 = 0.3.",
            "Worst case: the threaded hole is off by its radial limit one way and the clearance hole by its radial limit the other way.",
            "They touch when the two radial errors add up to 0.3. With equal zones, each radial error is 0.15, which is a Ø0.3 zone each.",
            "Compare a floating fastener (bolt and nut, clearance holes in both plates): each hole gets T = H − F = Ø0.6, because the bolt can shift."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            120,
            62,
            220,
            34,
            {
              "f": 1
            }
          ],
          [
            "r",
            120,
            96,
            220,
            34,
            {
              "f": 1
            }
          ],
          [
            "r",
            204,
            62,
            52,
            34,
            {
              "f": "s"
            }
          ],
          [
            "r",
            208,
            44,
            44,
            18,
            {
              "f": 2
            }
          ],
          [
            "r",
            221,
            62,
            18,
            58,
            {
              "f": 2
            }
          ],
          [
            "t",
            350,
            84,
            "clearance Ø6.6",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            350,
            118,
            "M6 tapped",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "l",
            256,
            79,
            346,
            80,
            {
              "w": 1
            }
          ],
          [
            "l",
            240,
            112,
            346,
            114,
            {
              "w": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A hole located with ±0.05 in X and Y has a square tolerance zone. Replacing it with a position tolerance whose circular zone passes through the square's corners gives how much more tolerance area?",
      "options": [
        "About 57% more",
        "About 27% more",
        "None",
        "About 100% more"
      ],
      "answer": 0,
      "why": "The square is 0.1 × 0.1 = 0.0100. The circle through its corners is Ø0.141, area 0.0157. That is 57% more for the same worst-case offset.",
      "proof": [
        "Square zone:  0.1 × 0.1 = 0.0100 mm².",
        "The coordinate scheme already accepts a hole at the corner, 0.0707 from nominal (half the 0.141 diagonal).",
        "A circular zone with that radius:  Ø0.141, area = π × 0.0707² = 0.0157 mm².",
        "0.0157 / 0.0100 = 1.57, so 57% more good parts are accepted with no change in worst-case fit.",
        "Position also allows MMC bonus and makes the datums explicit, which ± dimensions do not."
      ],
      "reported": {
        "kind": "topic",
        "note": "GD&T is reported in many Tesla mechanical design interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "mde2",
          "gtol"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "r",
            150,
            40,
            100,
            100
          ],
          [
            "c",
            200,
            90,
            70.7,
            {
              "d": 1,
              "a": 1
            }
          ],
          [
            "l",
            190,
            90,
            210,
            90,
            {
              "w": 1
            }
          ],
          [
            "l",
            200,
            80,
            200,
            100,
            {
              "w": 1
            }
          ],
          [
            "l",
            150,
            156,
            250,
            156,
            {
              "w": 1
            }
          ],
          [
            "l",
            150,
            151,
            150,
            161,
            {
              "w": 1
            }
          ],
          [
            "l",
            250,
            151,
            250,
            161,
            {
              "w": 1
            }
          ],
          [
            "t",
            200,
            172,
            "±0.05",
            {
              "s": 13
            }
          ],
          [
            "t",
            300,
            60,
            "square: ± zone",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            300,
            84,
            "circle: position",
            {
              "an": "start",
              "s": 12,
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is GD&T, and what is its main advantage over plain ± dimensions?",
      "options": [
        "A CAD file format that replaces drawings",
        "A way to make every tolerance tighter",
        "A symbolic language that controls form, orientation and location of features relative to datums that reflect how the part functions",
        "A method for measuring surface roughness"
      ],
      "answer": 2,
      "why": "Geometric dimensioning and tolerancing states how much a feature's shape, angle and position may vary, measured from datums chosen to match how the part is located in use. It removes ambiguity and usually allows more tolerance.",
      "proof": [
        "± dimensions control size and distance but leave the reference and the shape of the zone unclear.",
        "GD&T adds datums (the measurement setup), feature control frames (the type and size of zone) and modifiers such as MMC.",
        "Benefits: one unambiguous interpretation, round zones that are 57% larger than the square equivalent, bonus tolerance, and inspection that mirrors assembly.",
        "The 14 characteristics fall into form, orientation, location, profile and runout.",
        "Standards: ASME Y14.5 in the US, ISO 1101 internationally."
      ],
      "reported": {
        "kind": "question",
        "note": "Candidates reported being asked what GD&T (geometric tolerance) is and why it is important.",
        "sources": [
          "gdtstack",
          "gtol"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "In a feature control frame, what does the symbol ⊥ specify?",
      "options": [
        "Position",
        "Flatness",
        "Perpendicularity",
        "Parallelism"
      ],
      "answer": 2,
      "why": "⊥ is perpendicularity, an orientation control. It limits how far a surface or axis may deviate from exactly 90° to a datum.",
      "proof": [
        "⊥ perpendicularity: the feature must lie within a zone that is exactly 90° to the referenced datum.",
        "For a surface the zone is two parallel planes. For an axis, with a Ø symbol, it is a cylinder.",
        "It is an orientation control, so it always needs a datum. It controls angle but not location.",
        "Related symbols: ∥ parallelism, ∠ angularity, a crosshair circle for position, a parallelogram for flatness."
      ],
      "reported": {
        "kind": "question",
        "note": "An intern candidate reported being shown a GD&T symbol and asked what it means.",
        "sources": [
          "gtol"
        ]
      },
      "sketch": {
        "h": 150,
        "items": [
          [
            "h",
            60,
            120,
            280,
            120,
            1
          ],
          [
            "r",
            120,
            40,
            30,
            80,
            {
              "f": 1
            }
          ],
          [
            "t",
            60,
            140,
            "A",
            {
              "an": "start"
            }
          ],
          [
            "r",
            250,
            50,
            26,
            24
          ],
          [
            "t",
            263,
            67,
            "⊥",
            {
              "s": 13
            }
          ],
          [
            "r",
            276,
            50,
            38.599999999999994,
            24
          ],
          [
            "t",
            295.3,
            67,
            "0.1",
            {
              "s": 13
            }
          ],
          [
            "r",
            314.6,
            50,
            26,
            24
          ],
          [
            "t",
            327.6,
            67,
            "A",
            {
              "s": 13
            }
          ],
          [
            "l",
            150,
            62,
            250,
            62,
            {
              "w": 1
            }
          ]
        ]
      }
    }
  ]
});
