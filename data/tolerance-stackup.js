/* Topic: Tolerance stack-up. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "tolerance-stackup",
  "title": "Tolerance stack-up",
  "blurb": "Worst-case and RSS stacks, gap analysis, process capability, and how dimensioning choices change the stack.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "Three parts are stacked end to end: 10 ± 0.1, 20 ± 0.2 and 30 ± 0.1 mm. What is the worst-case total length?",
      "options": [
        "60 ± 0.1",
        "60 ± 0.2",
        "60 ± 0.4",
        "60 ± 0.24"
      ],
      "answer": 2,
      "why": "Worst case adds the tolerances directly: 0.1 + 0.2 + 0.1 = ±0.4.",
      "proof": [
        "Nominal:  10 + 20 + 30 = 60.",
        "Maximum, all parts at their upper limit:  10.1 + 20.2 + 30.1 = 60.4.",
        "Minimum, all at their lower limit:  9.9 + 19.8 + 29.9 = 59.6.",
        "Total:  60 ± 0.4. Worst case guarantees 100% of assemblies, at the cost of tight part tolerances."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 150,
        "items": [
          [
            "r",
            70,
            50,
            60,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            100,
            77,
            "10 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            130,
            50,
            110,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            185,
            77,
            "20 ±0.2",
            {
              "s": 12
            }
          ],
          [
            "r",
            240,
            50,
            160,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            320,
            77,
            "30 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "l",
            70,
            116,
            400,
            116,
            {
              "w": 1
            }
          ],
          [
            "l",
            70,
            111,
            70,
            121,
            {
              "w": 1
            }
          ],
          [
            "l",
            400,
            111,
            400,
            121,
            {
              "w": 1
            }
          ],
          [
            "t",
            235,
            132,
            "total = 60 ± ?",
            {
              "s": 13
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "For the same three parts (±0.1, ±0.2, ±0.1), what is the statistical (RSS) tolerance on the total length?",
      "options": [
        "±0.24",
        "±0.14",
        "±0.40",
        "±0.06"
      ],
      "answer": 0,
      "why": "RSS = √(0.1² + 0.2² + 0.1²) = √0.06 ≈ ±0.245.",
      "proof": [
        "RSS (root sum of squares):  T = √(Σ tᵢ²).",
        "T = √(0.01 + 0.04 + 0.01) = √0.06 = 0.245.",
        "Total:  60 ± 0.245, against ±0.4 for worst case.",
        "It is smaller because it is unlikely that every part is at its limit in the same direction at once."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 150,
        "items": [
          [
            "r",
            70,
            50,
            60,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            100,
            77,
            "10 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            130,
            50,
            110,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            185,
            77,
            "20 ±0.2",
            {
              "s": 12
            }
          ],
          [
            "r",
            240,
            50,
            160,
            44,
            {
              "f": 1
            }
          ],
          [
            "t",
            320,
            77,
            "30 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "l",
            70,
            116,
            400,
            116,
            {
              "w": 1
            }
          ],
          [
            "l",
            70,
            111,
            70,
            121,
            {
              "w": 1
            }
          ],
          [
            "l",
            400,
            111,
            400,
            121,
            {
              "w": 1
            }
          ],
          [
            "t",
            235,
            132,
            "total = 60 ± ?",
            {
              "s": 13
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A slot is 50.0 ± 0.2 mm wide. Two blocks, each 24.8 ± 0.1 mm, sit side by side in it. What is the worst-case minimum gap?",
      "options": [
        "0.2 mm",
        "0.0 mm",
        "0.4 mm",
        "−0.2 mm (interference)"
      ],
      "answer": 1,
      "why": "Smallest slot minus largest blocks: 49.8 − 24.9 − 24.9 = 0.0 mm. It is line-to-line at the limit.",
      "proof": [
        "Minimum gap happens with the smallest slot and the largest blocks.",
        "Slot minimum:  50.0 − 0.2 = 49.8.   Block maximum:  24.8 + 0.1 = 24.9 each.",
        "Gap_min = 49.8 − 24.9 − 24.9 = 0.0 mm."
      ],
      "proofTitle": "Limits directly",
      "methods": [
        {
          "title": "Nominal gap ± sum of tolerances",
          "steps": [
            "Write the loop:  Gap = Slot − Block₁ − Block₂.",
            "Nominal gap:  50.0 − 24.8 − 24.8 = 0.4 mm.",
            "Tolerances always add in a worst-case stack, whatever the sign in the loop:  0.2 + 0.1 + 0.1 = 0.4.",
            "Gap = 0.4 ± 0.4, so it ranges from 0.0 to 0.8 mm."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "p",
            [
              [
                70,
                40
              ],
              [
                70,
                130
              ],
              [
                390,
                130
              ],
              [
                390,
                40
              ],
              [
                370,
                40
              ],
              [
                370,
                110
              ],
              [
                90,
                110
              ],
              [
                90,
                40
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "r",
            90,
            56,
            125,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            215,
            56,
            125,
            54,
            {
              "f": 1
            }
          ],
          [
            "t",
            152,
            88,
            "24.8 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "t",
            277,
            88,
            "24.8 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "l",
            90,
            30,
            370,
            30,
            {
              "w": 1
            }
          ],
          [
            "l",
            90,
            25,
            90,
            35,
            {
              "w": 1
            }
          ],
          [
            "l",
            370,
            25,
            370,
            35,
            {
              "w": 1
            }
          ],
          [
            "t",
            230,
            24,
            "slot 50.0 ±0.2",
            {
              "s": 13
            }
          ],
          [
            "l",
            340,
            60,
            370,
            60,
            {
              "a": 1,
              "w": 2
            }
          ],
          [
            "t",
            355,
            80,
            "gap?",
            {
              "a": 1,
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Applied",
      "q": "For that same slot and two blocks, what minimum gap does an RSS analysis predict?",
      "options": [
        "0.00 mm",
        "0.24 mm",
        "0.16 mm",
        "0.40 mm"
      ],
      "answer": 2,
      "why": "RSS tolerance = √(0.2² + 0.1² + 0.1²) = 0.245, so the gap is 0.4 ± 0.245 and the minimum is about 0.16 mm.",
      "proof": [
        "Nominal gap:  0.4 mm (from the previous question).",
        "RSS:  √(0.04 + 0.01 + 0.01) = √0.06 = 0.245.",
        "Gap = 0.4 ± 0.245, so the statistical minimum is 0.155 mm.",
        "If each tolerance is ±3σ, about 99.7% of assemblies fall in that range. A few in a thousand may be outside it."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 170,
        "items": [
          [
            "p",
            [
              [
                70,
                40
              ],
              [
                70,
                130
              ],
              [
                390,
                130
              ],
              [
                390,
                40
              ],
              [
                370,
                40
              ],
              [
                370,
                110
              ],
              [
                90,
                110
              ],
              [
                90,
                40
              ]
            ],
            {
              "close": 1,
              "f": 2
            }
          ],
          [
            "r",
            90,
            56,
            125,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            215,
            56,
            125,
            54,
            {
              "f": 1
            }
          ],
          [
            "t",
            152,
            88,
            "24.8 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "t",
            277,
            88,
            "24.8 ±0.1",
            {
              "s": 12
            }
          ],
          [
            "l",
            90,
            30,
            370,
            30,
            {
              "w": 1
            }
          ],
          [
            "l",
            90,
            25,
            90,
            35,
            {
              "w": 1
            }
          ],
          [
            "l",
            370,
            25,
            370,
            35,
            {
              "w": 1
            }
          ],
          [
            "t",
            230,
            24,
            "slot 50.0 ±0.2",
            {
              "s": 13
            }
          ],
          [
            "l",
            340,
            60,
            370,
            60,
            {
              "a": 1,
              "w": 2
            }
          ],
          [
            "t",
            355,
            80,
            "gap?",
            {
              "a": 1,
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "When is it reasonable to use an RSS stack instead of worst case?",
      "options": [
        "When there are several independent contributors from capable, centred, roughly normal processes at volume",
        "Always, it gives a smaller answer",
        "Only for stacks with two dimensions",
        "When the parts are 100% inspected and sorted to match"
      ],
      "answer": 0,
      "why": "RSS assumes independent, normally distributed, centred dimensions, and enough contributors and volume for the statistics to hold.",
      "proof": [
        "RSS adds variances:  σ_total² = Σσᵢ². That only holds if the dimensions vary independently.",
        "It assumes each process is centred on nominal and its tolerance is about ±3σ (Cpk near 1 or better).",
        "With only two or three contributors, or a process running off-centre, RSS is optimistic.",
        "Use worst case for safety-critical fits, few contributors, or low volume. Many teams use RSS with a correction factor (for example 1.5×) as a middle ground."
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
      "level": "Applied",
      "q": "Nine parts, each ±0.1 mm, are stacked. How much larger is the worst-case tolerance than the RSS tolerance?",
      "options": [
        "1.5×",
        "2×",
        "3×",
        "9×"
      ],
      "answer": 2,
      "why": "Worst case = 9 × 0.1 = 0.9. RSS = √9 × 0.1 = 0.3. The ratio is √N = 3.",
      "proof": [
        "Worst case with N equal tolerances t:  N·t = 9 × 0.1 = ±0.9.",
        "RSS:  √(N·t²) = √N·t = 3 × 0.1 = ±0.3.",
        "Ratio:  N/√N = √N = 3.",
        "The gap between the methods grows with the number of parts, which is why long stacks are usually done statistically."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 150,
        "items": [
          [
            "r",
            50,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            70,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            90,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            110,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            130,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            150,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            170,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            190,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            210,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            230,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            250,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            270,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            290,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            310,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            330,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            350,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "r",
            370,
            56,
            40,
            40,
            {
              "f": 1
            }
          ],
          [
            "t",
            390,
            81,
            "±0.1",
            {
              "s": 12
            }
          ],
          [
            "l",
            50,
            118,
            410,
            118,
            {
              "w": 1
            }
          ],
          [
            "l",
            50,
            113,
            50,
            123,
            {
              "w": 1
            }
          ],
          [
            "l",
            410,
            113,
            410,
            123,
            {
              "w": 1
            }
          ],
          [
            "t",
            230,
            134,
            "9 parts: worst case vs RSS",
            {
              "s": 13
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A drawing gives a dimension as 10.0 +0.3 / −0.1. What is the equivalent symmetric (±) form to use in a stack?",
      "options": [
        "10.0 ± 0.2",
        "10.1 ± 0.2",
        "10.2 ± 0.1",
        "10.0 ± 0.3"
      ],
      "answer": 1,
      "why": "The limits are 9.9 and 10.3. The midpoint is 10.1 and half the range is 0.2, so 10.1 ± 0.2.",
      "proof": [
        "Limits:  10.0 − 0.1 = 9.9  and  10.0 + 0.3 = 10.3.",
        "Midpoint:  (9.9 + 10.3)/2 = 10.1.",
        "Half range:  (10.3 − 9.9)/2 = 0.2.",
        "Convert every dimension to this form first. Otherwise the nominal of the stack is wrong."
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
      "level": "Applied",
      "q": "A dimension is specified 10.00 ± 0.05. The process runs with mean 10.02 and standard deviation 0.01. What is Cpk?",
      "options": [
        "0.67",
        "2.33",
        "1.67",
        "1.0"
      ],
      "answer": 3,
      "why": "Cpk = distance from the mean to the nearest limit ÷ 3σ = (10.05 − 10.02)/(3 × 0.01) = 1.0.",
      "proof": [
        "Upper limit 10.05, lower limit 9.95.",
        "Distance to upper:  10.05 − 10.02 = 0.03.   Distance to lower:  10.02 − 9.95 = 0.07.",
        "Cpk = min(0.03, 0.07)/(3σ) = 0.03/0.03 = 1.0.",
        "Cp ignores centring:  (10.05 − 9.95)/(6 × 0.01) = 1.67. The process is capable but off-centre.",
        "Re-centring it would raise Cpk to 1.67 with no change to the process spread. Automotive targets are usually 1.33 or 1.67."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "l",
            60,
            140,
            420,
            140,
            {
              "w": 1.5
            }
          ],
          [
            "p",
            [
              [
                130,
                140
              ],
              [
                134,
                140
              ],
              [
                138,
                140
              ],
              [
                142,
                140
              ],
              [
                146,
                140
              ],
              [
                150,
                140
              ],
              [
                154,
                140
              ],
              [
                158,
                140
              ],
              [
                162,
                140
              ],
              [
                166,
                140
              ],
              [
                170,
                140
              ],
              [
                174,
                140
              ],
              [
                178,
                140
              ],
              [
                182,
                140
              ],
              [
                186,
                140
              ],
              [
                190,
                140
              ],
              [
                194,
                139.9
              ],
              [
                198,
                139.8
              ],
              [
                202,
                139.7
              ],
              [
                206,
                139.4
              ],
              [
                210,
                138.9
              ],
              [
                214,
                138
              ],
              [
                218,
                136.6
              ],
              [
                222,
                134.4
              ],
              [
                226,
                131.1
              ],
              [
                230,
                126.5
              ],
              [
                234,
                120.2
              ],
              [
                238,
                112.2
              ],
              [
                242,
                102.5
              ],
              [
                246,
                91.3
              ],
              [
                250,
                79.3
              ],
              [
                254,
                67.4
              ],
              [
                258,
                56.5
              ],
              [
                262,
                47.7
              ],
              [
                266,
                42
              ],
              [
                270,
                40
              ],
              [
                274,
                42
              ],
              [
                278,
                47.7
              ],
              [
                282,
                56.5
              ],
              [
                286,
                67.4
              ],
              [
                290,
                79.3
              ],
              [
                294,
                91.3
              ],
              [
                298,
                102.5
              ],
              [
                302,
                112.2
              ],
              [
                306,
                120.2
              ],
              [
                310,
                126.5
              ],
              [
                314,
                131.1
              ],
              [
                318,
                134.4
              ],
              [
                322,
                136.6
              ],
              [
                326,
                138
              ],
              [
                330,
                138.9
              ],
              [
                334,
                139.4
              ],
              [
                338,
                139.7
              ],
              [
                342,
                139.8
              ],
              [
                346,
                139.9
              ],
              [
                350,
                140
              ],
              [
                354,
                140
              ],
              [
                358,
                140
              ],
              [
                362,
                140
              ],
              [
                366,
                140
              ]
            ],
            {
              "a": 1,
              "w": 2.5
            }
          ],
          [
            "l",
            130,
            40,
            130,
            150,
            {
              "d": 1
            }
          ],
          [
            "l",
            330,
            40,
            330,
            150,
            {
              "d": 1
            }
          ],
          [
            "l",
            230,
            130,
            230,
            150,
            {
              "w": 1
            }
          ],
          [
            "l",
            270,
            36,
            270,
            150,
            {
              "w": 1,
              "a": 1
            }
          ],
          [
            "t",
            130,
            166,
            "9.95"
          ],
          [
            "t",
            330,
            166,
            "10.05"
          ],
          [
            "t",
            230,
            166,
            "10.00",
            {
              "s": 12
            }
          ],
          [
            "t",
            276,
            32,
            "mean 10.02",
            {
              "an": "start",
              "a": 1,
              "s": 12
            }
          ],
          [
            "t",
            390,
            120,
            "σ = 0.01",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "An RSS stack has contributors of ±0.3, ±0.1 and ±0.1. You can afford to halve either the single ±0.3 or both of the ±0.1 tolerances. Which helps more?",
      "options": [
        "Halve both ±0.1 tolerances",
        "Neither changes the RSS result",
        "They help equally",
        "Halve the ±0.3 tolerance"
      ],
      "answer": 3,
      "why": "RSS is dominated by the largest term. Halving the 0.3 cuts the stack from 0.33 to 0.21. Halving both 0.1s only gets it to 0.31.",
      "proof": [
        "Baseline:  √(0.09 + 0.01 + 0.01) = √0.11 = 0.332.",
        "Halve the 0.3 to 0.15:  √(0.0225 + 0.01 + 0.01) = √0.0425 = 0.206. That is a 38% reduction.",
        "Halve both 0.1s to 0.05:  √(0.09 + 0.0025 + 0.0025) = √0.095 = 0.308. That is a 7% reduction.",
        "Because terms are squared, the 0.3 contributes 82% of the variance. Always work on the biggest contributor first."
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
      "level": "Design judgment",
      "q": "A stepped part has three steps, each dimensioned from the previous one (chain dimensioning) at ±0.1. The overall length is what matters for fit. What is the best change?",
      "options": [
        "Tighten all three step tolerances to ±0.03",
        "Dimension the overall length directly from the functional datum",
        "Add a note saying the overall length is critical",
        "Switch the analysis from worst case to RSS"
      ],
      "answer": 1,
      "why": "With chain dimensions the overall length accumulates ±0.3. Dimensioning it directly makes it ±0.1 with no extra manufacturing cost.",
      "proof": [
        "Chain dimensioning: overall length = step₁ + step₂ + step₃, so worst case is ±0.3.",
        "Dimension the overall length directly: it is a single dimension at ±0.1.",
        "The accumulated variation moves to a step that does not matter for fit.",
        "Rule: dimension functional features directly from the functional datum, so the stack has as few contributors as possible. Fixing the scheme costs far less than tightening tolerances."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
        "sources": [
          "stack",
          "gdtstack"
        ]
      },
      "sketch": {
        "h": 180,
        "items": [
          [
            "p",
            [
              [
                70,
                120
              ],
              [
                70,
                50
              ],
              [
                170,
                50
              ],
              [
                170,
                70
              ],
              [
                270,
                70
              ],
              [
                270,
                90
              ],
              [
                370,
                90
              ],
              [
                370,
                120
              ]
            ],
            {
              "close": 1,
              "f": 1
            }
          ],
          [
            "l",
            70,
            36,
            170,
            36,
            {
              "w": 1
            }
          ],
          [
            "l",
            70,
            31,
            70,
            41,
            {
              "w": 1
            }
          ],
          [
            "l",
            170,
            31,
            170,
            41,
            {
              "w": 1
            }
          ],
          [
            "t",
            120,
            30,
            "±0.1",
            {
              "s": 13
            }
          ],
          [
            "l",
            170,
            56,
            270,
            56,
            {
              "w": 1
            }
          ],
          [
            "l",
            170,
            51,
            170,
            61,
            {
              "w": 1
            }
          ],
          [
            "l",
            270,
            51,
            270,
            61,
            {
              "w": 1
            }
          ],
          [
            "t",
            220,
            50,
            "±0.1",
            {
              "s": 13
            }
          ],
          [
            "l",
            270,
            76,
            370,
            76,
            {
              "w": 1
            }
          ],
          [
            "l",
            270,
            71,
            270,
            81,
            {
              "w": 1
            }
          ],
          [
            "l",
            370,
            71,
            370,
            81,
            {
              "w": 1
            }
          ],
          [
            "t",
            320,
            70,
            "±0.1",
            {
              "s": 13
            }
          ],
          [
            "l",
            70,
            140,
            370,
            140,
            {
              "w": 1
            }
          ],
          [
            "l",
            70,
            135,
            70,
            145,
            {
              "w": 1
            }
          ],
          [
            "l",
            370,
            135,
            370,
            145,
            {
              "w": 1
            }
          ],
          [
            "t",
            220,
            156,
            "overall = ?",
            {
              "s": 13
            }
          ]
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is tolerance stacking?",
      "options": [
        "Making every tolerance on a drawing the same",
        "Measuring a part several times and averaging",
        "Storing finished parts in stacks",
        "The way individual part tolerances add up along a chain of dimensions to change an assembly gap or fit"
      ],
      "answer": 3,
      "why": "Every dimension in the chain between two features can vary. Those variations accumulate, so the gap or fit that matters varies more than any single part does.",
      "proof": [
        "Pick the gap or fit you care about and trace the chain (loop) of dimensions that sets it.",
        "Each dimension in the loop contributes its tolerance.",
        "Worst case: add all the tolerances. Statistical (RSS): take the root sum of squares.",
        "Use the result to check the assembly always fits and works, and to decide which tolerances to tighten.",
        "Fewer dimensions in the loop means less stack, which is why functional features are dimensioned directly from the functional datum."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked what GD&T is and what tolerance stacking is.",
        "sources": [
          "gdtstack",
          "stack"
        ]
      }
    }
  ]
});
