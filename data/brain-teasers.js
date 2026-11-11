/* Topic: Brain teasers. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "brain-teasers",
  "title": "Brain teasers",
  "blurb": "Logic puzzles and estimates of the kind tech interviewers use to watch how you reason. Talk through your approach out loud.",
  "questions": [
    {
      "level": "Brain teaser",
      "q": "You stand on the Earth's surface. You walk one mile south, one mile west and one mile north, and end up exactly where you started. Where are you?",
      "options": [
        "At the North Pole, or on certain circles near the South Pole",
        "Anywhere on the equator",
        "At the South Pole",
        "It is impossible"
      ],
      "answer": 0,
      "why": "From the North Pole, any direction is south, the westward mile follows a circle of latitude, and north brings you back. There is also a family of starting points near the South Pole.",
      "proof": [
        "At the North Pole every direction is south. Walk one mile south.",
        "Walking west keeps you on a circle of latitude, one mile from the pole.",
        "Walking one mile north returns you to the pole, whatever the westward distance was.",
        "This riddle is widely reported as a favourite of Elon Musk's in interviews. The follow-up is: where else?"
      ],
      "proofTitle": "North Pole",
      "methods": [
        {
          "title": "The other answers, near the South Pole",
          "steps": [
            "Find the circle of latitude near the South Pole whose circumference is exactly 1 mile.",
            "Start anywhere 1 mile north of that circle. Walk 1 mile south to reach it.",
            "Walk 1 mile west: that is one full lap, ending where you joined the circle. Walk 1 mile north and you are back at the start.",
            "It also works for circles of circumference 1/2, 1/3, 1/4 mile and so on (two laps, three laps...), so there are infinitely many starting circles.",
            "You cannot start at the South Pole itself, because you cannot walk south from there."
          ]
        }
      ],
      "reported": {
        "kind": "secondhand",
        "note": "Reported as Elon Musk's interview riddle for SpaceX engineers, and listed by prep sites for Tesla. I did not find a first-hand Tesla mechanical candidate report.",
        "sources": [
          "musk1",
          "musk2"
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "You have 8 identical-looking balls. One is slightly heavier. Using a two-pan balance, what is the smallest number of weighings that always finds it?",
      "options": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 2,
      "why": "Two. Weigh 3 against 3. That narrows it to 3 balls (or 2), and one more weighing finishes.",
      "proof": [
        "Each weighing has three outcomes: left heavy, right heavy, or balanced. So split into three groups, not two.",
        "Weighing 1: put 3 balls on each pan and leave 2 aside.",
        "If one pan is heavy, the odd ball is among those 3. Weighing 2: compare two of them. The heavier one is it, or if they balance, it is the third.",
        "If the pans balance, it is one of the 2 set aside. Weighing 2: compare them."
      ],
      "proofTitle": "Split 3-3-2",
      "methods": [
        {
          "title": "Information bound",
          "steps": [
            "One weighing can distinguish at most 3 cases, and two weighings at most 3² = 9 cases.",
            "There are 8 possibilities for which ball is heavy. 8 > 3, so one weighing cannot be enough. 8 ≤ 9, so two can be.",
            "The same argument shows two weighings handle up to 9 balls, and three weighings up to 27.",
            "Splitting in halves (4 against 4) wastes the 'balanced' outcome and takes three weighings."
          ]
        }
      ],
      "sketch": {
        "h": 170,
        "items": [
          [
            "l",
            120,
            60,
            340,
            60,
            {
              "w": 3
            }
          ],
          [
            "p",
            [
              [
                230,
                60
              ],
              [
                218,
                90
              ],
              [
                242,
                90
              ]
            ],
            {
              "close": 1,
              "f": 1
            }
          ],
          [
            "l",
            120,
            60,
            120,
            84
          ],
          [
            "l",
            340,
            60,
            340,
            84
          ],
          [
            "p",
            [
              [
                86,
                84
              ],
              [
                86.9,
                91.6
              ],
              [
                89.4,
                98.8
              ],
              [
                93.4,
                105.2
              ],
              [
                98.8,
                110.6
              ],
              [
                105.2,
                114.6
              ],
              [
                112.4,
                117.1
              ],
              [
                120,
                118
              ],
              [
                127.6,
                117.1
              ],
              [
                134.8,
                114.6
              ],
              [
                141.2,
                110.6
              ],
              [
                146.6,
                105.2
              ],
              [
                150.6,
                98.8
              ],
              [
                153.1,
                91.6
              ],
              [
                154,
                84
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
                306,
                84
              ],
              [
                306.9,
                91.6
              ],
              [
                309.4,
                98.8
              ],
              [
                313.4,
                105.2
              ],
              [
                318.8,
                110.6
              ],
              [
                325.2,
                114.6
              ],
              [
                332.4,
                117.1
              ],
              [
                340,
                118
              ],
              [
                347.6,
                117.1
              ],
              [
                354.8,
                114.6
              ],
              [
                361.2,
                110.6
              ],
              [
                366.6,
                105.2
              ],
              [
                370.6,
                98.8
              ],
              [
                373.1,
                91.6
              ],
              [
                374,
                84
              ]
            ],
            {
              "w": 2
            }
          ],
          [
            "l",
            86,
            84,
            154,
            84
          ],
          [
            "l",
            306,
            84,
            374,
            84
          ],
          [
            "c",
            104,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            140,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            176,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            212,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            248,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            284,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            320,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "c",
            356,
            146,
            11,
            {
              "f": 1
            }
          ],
          [
            "t",
            230,
            36,
            "8 balls, one heavier",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "You have 25 horses and a track that races 5 at a time, with no stopwatch. What is the smallest number of races needed to find the 3 fastest?",
      "options": [
        "5",
        "7",
        "6",
        "11"
      ],
      "answer": 1,
      "why": "Seven: 5 heats, 1 race of the heat winners, and 1 final race among the 5 horses that could still be second or third.",
      "proof": [
        "Races 1 to 5: split into 5 heats of 5. Call the heats A to E.",
        "Race 6: race the five heat winners. Rename heats so the result is A1 > B1 > C1 > D1 > E1. A1 is the fastest overall.",
        "Eliminate: all of heats D and E (at least three horses beat them). In C, everything behind C1. In B, everything behind B2. In A, everything behind A3.",
        "Candidates left for 2nd and 3rd:  A2, A3, B1, B2, C1. That is five horses.",
        "Race 7: race those five. The top two are 2nd and 3rd overall.",
        "Total: 7 races."
      ]
    },
    {
      "level": "Brain teaser",
      "q": "You have two ropes. Each takes exactly 60 minutes to burn end to end, but burns unevenly. Using only the ropes and a lighter, how do you measure 45 minutes?",
      "options": [
        "Cut one rope into quarters and burn three of them",
        "It cannot be done",
        "Light both ropes at one end at the same time",
        "Light rope A at both ends and rope B at one end. When A is gone, light B's other end"
      ],
      "answer": 3,
      "why": "A lit at both ends lasts 30 minutes. B then has 30 minutes left, and lighting its other end burns that in 15. 30 + 15 = 45.",
      "proof": [
        "A rope lit at both ends burns out in 30 minutes, however unevenly it burns, because the two flames together consume 60 minutes' worth.",
        "At t = 0, light both ends of A and one end of B.",
        "At t = 30, A is gone. B has 30 minutes of burning left.",
        "Now light B's other end. Its remaining 30 minutes burns in 15.",
        "B finishes at t = 45. Cutting does not work, because uneven burning means a quarter of the length is not a quarter of the time."
      ],
      "sketch": {
        "h": 140,
        "items": [
          [
            "p",
            [
              [
                80,
                54
              ],
              [
                90,
                50
              ],
              [
                100,
                50
              ],
              [
                110,
                54
              ],
              [
                120,
                46
              ],
              [
                130,
                52
              ],
              [
                140,
                48
              ],
              [
                150,
                46
              ],
              [
                160,
                48
              ],
              [
                170,
                46
              ],
              [
                180,
                50
              ],
              [
                190,
                52
              ],
              [
                200,
                48
              ],
              [
                210,
                52
              ],
              [
                220,
                54
              ],
              [
                230,
                46
              ],
              [
                240,
                54
              ],
              [
                250,
                48
              ],
              [
                260,
                46
              ],
              [
                270,
                48
              ],
              [
                280,
                52
              ],
              [
                290,
                50
              ],
              [
                300,
                48
              ],
              [
                310,
                52
              ],
              [
                320,
                48
              ],
              [
                330,
                46
              ],
              [
                340,
                48
              ],
              [
                350,
                54
              ],
              [
                360,
                54
              ],
              [
                370,
                52
              ],
              [
                380,
                48
              ]
            ],
            {
              "w": 3
            }
          ],
          [
            "p",
            [
              [
                80,
                98
              ],
              [
                90,
                96
              ],
              [
                100,
                96
              ],
              [
                110,
                98
              ],
              [
                120,
                98
              ],
              [
                130,
                98
              ],
              [
                140,
                98
              ],
              [
                150,
                100
              ],
              [
                160,
                100
              ],
              [
                170,
                98
              ],
              [
                180,
                104
              ],
              [
                190,
                98
              ],
              [
                200,
                98
              ],
              [
                210,
                98
              ],
              [
                220,
                102
              ],
              [
                230,
                100
              ],
              [
                240,
                96
              ],
              [
                250,
                100
              ],
              [
                260,
                102
              ],
              [
                270,
                98
              ],
              [
                280,
                98
              ],
              [
                290,
                100
              ],
              [
                300,
                96
              ],
              [
                310,
                100
              ],
              [
                320,
                100
              ],
              [
                330,
                104
              ],
              [
                340,
                104
              ],
              [
                350,
                96
              ],
              [
                360,
                104
              ],
              [
                370,
                100
              ],
              [
                380,
                96
              ]
            ],
            {
              "w": 3
            }
          ],
          [
            "t",
            230,
            28,
            "each burns for 60 min, unevenly",
            {
              "s": 12
            }
          ],
          [
            "t",
            60,
            54,
            "A",
            {
              "an": "end"
            }
          ],
          [
            "t",
            60,
            104,
            "B",
            {
              "an": "end"
            }
          ],
          [
            "t",
            230,
            130,
            "measure 45 min?",
            {
              "s": 12,
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "You have a 3 litre jug and a 5 litre jug, no markings, and unlimited water. Can you measure exactly 4 litres?",
      "options": [
        "No, only multiples of 3 and 5 are possible",
        "Only with a third container",
        "Yes: fill both and pour out half",
        "Yes: fill 5, pour into 3, empty 3, pour the remaining 2 into 3, fill 5, top up the 3"
      ],
      "answer": 3,
      "why": "After that sequence the 3 litre jug held 2 and takes 1 more from the full 5, leaving exactly 4 in the 5 litre jug.",
      "proof": [
        "Fill the 5. Pour into the 3 until full:  5 jug has 2, 3 jug has 3.",
        "Empty the 3. Pour the 2 litres into it:  5 jug has 0, 3 jug has 2.",
        "Fill the 5. Top up the 3, which has room for 1:  5 jug has 4.",
        "Done in 6 moves."
      ],
      "proofTitle": "Start by filling the 5",
      "methods": [
        {
          "title": "Start by filling the 3",
          "steps": [
            "Fill the 3, pour into the 5:  (3 jug 0, 5 jug 3).",
            "Fill the 3 again, pour into the 5 until full (it takes 2):  (3 jug 1, 5 jug 5).",
            "Empty the 5. Pour the 1 litre into it:  (0, 1).",
            "Fill the 3 and pour into the 5:  (0, 4). That takes 8 moves.",
            "Why it is always possible: 3 and 5 share no common factor, so any whole number of litres up to 5 can be reached."
          ]
        }
      ],
      "sketch": {
        "h": 170,
        "items": [
          [
            "r",
            130,
            80,
            60,
            60,
            {
              "f": 1
            }
          ],
          [
            "r",
            260,
            40,
            70,
            100,
            {
              "f": 1
            }
          ],
          [
            "t",
            160,
            158,
            "3 L"
          ],
          [
            "t",
            295,
            158,
            "5 L"
          ],
          [
            "t",
            230,
            24,
            "measure exactly 4 L?",
            {
              "a": 1,
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "A hallway has 100 closed lockers. Person 1 toggles every locker, person 2 every 2nd, person 3 every 3rd, and so on to person 100. How many lockers are open at the end?",
      "options": [
        "1",
        "10",
        "25",
        "50"
      ],
      "answer": 1,
      "why": "Only lockers with an odd number of divisors end up open, and those are the perfect squares: 1, 4, 9, ..., 100. There are 10.",
      "proof": [
        "Locker n is toggled once for each divisor of n.",
        "It ends open if it was toggled an odd number of times.",
        "Divisors come in pairs (d and n/d), so the count is even, unless d = n/d, which happens only when n is a perfect square.",
        "Perfect squares up to 100:  1, 4, 9, 16, 25, 36, 49, 64, 81, 100. That is 10 lockers.",
        "Example: 12 has divisors 1, 2, 3, 4, 6, 12 (six, so closed). 16 has 1, 2, 4, 8, 16 (five, so open)."
      ],
      "sketch": {
        "h": 140,
        "items": [
          [
            "r",
            50,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            86,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            122,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            158,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            194,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            230,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            266,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            302,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            338,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "r",
            374,
            46,
            30,
            54,
            {
              "f": 1
            }
          ],
          [
            "t",
            65,
            78,
            "1",
            {
              "s": 12
            }
          ],
          [
            "t",
            101,
            78,
            "2",
            {
              "s": 12
            }
          ],
          [
            "t",
            137,
            78,
            "3",
            {
              "s": 12
            }
          ],
          [
            "t",
            173,
            78,
            "4",
            {
              "s": 12
            }
          ],
          [
            "t",
            209,
            78,
            "5",
            {
              "s": 12
            }
          ],
          [
            "t",
            245,
            78,
            "6",
            {
              "s": 12
            }
          ],
          [
            "t",
            281,
            78,
            "7",
            {
              "s": 12
            }
          ],
          [
            "t",
            317,
            78,
            "8",
            {
              "s": 12
            }
          ],
          [
            "t",
            353,
            78,
            "9",
            {
              "s": 12
            }
          ],
          [
            "t",
            389,
            78,
            "10",
            {
              "s": 12
            }
          ],
          [
            "t",
            418,
            78,
            "… 100",
            {
              "an": "start",
              "s": 12
            }
          ],
          [
            "t",
            230,
            126,
            "person n toggles every nth locker",
            {
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "What is the angle between the hour and minute hands of a clock at 3:15?",
      "options": [
        "0°",
        "15°",
        "7.5°",
        "30°"
      ],
      "answer": 2,
      "why": "The minute hand is at 90°. The hour hand has moved a quarter of the way from 3 to 4: 90° + 7.5° = 97.5°. The difference is 7.5°.",
      "proof": [
        "Minute hand:  15 minutes × 6° per minute = 90°.",
        "Hour hand moves 30° per hour, or 0.5° per minute.",
        "At 3:15 it is at 3 × 30° + 15 × 0.5° = 97.5°.",
        "Angle between them:  97.5° − 90° = 7.5°."
      ],
      "proofTitle": "Position of each hand",
      "methods": [
        {
          "title": "Relative speed",
          "steps": [
            "At 3:00 the hands are 90° apart, with the hour hand ahead.",
            "The minute hand gains on the hour hand at 6 − 0.5 = 5.5° per minute.",
            "In 15 minutes it gains 82.5°.",
            "Remaining gap:  90° − 82.5° = 7.5°. The same method tells you the hands overlap about 16.4 minutes past 3."
          ]
        }
      ],
      "sketch": {
        "h": 190,
        "items": [
          [
            "c",
            230,
            95,
            78
          ],
          [
            "l",
            300,
            95,
            308,
            95
          ],
          [
            "l",
            290.6217782649107,
            60.00000000000001,
            297.5499814951862,
            56.00000000000001
          ],
          [
            "l",
            265,
            34.3782217350893,
            269,
            27.450018504813784
          ],
          [
            "l",
            230,
            25,
            230,
            17
          ],
          [
            "l",
            195,
            34.37822173508929,
            191,
            27.450018504813784
          ],
          [
            "l",
            169.37822173508928,
            60.00000000000001,
            162.45001850481378,
            56.00000000000001
          ],
          [
            "l",
            160,
            94.99999999999999,
            152,
            94.99999999999999
          ],
          [
            "l",
            169.3782217350893,
            130,
            162.45001850481378,
            134
          ],
          [
            "l",
            194.99999999999997,
            155.6217782649107,
            190.99999999999997,
            162.5499814951862
          ],
          [
            "l",
            230,
            165,
            229.99999999999997,
            173
          ],
          [
            "l",
            265,
            155.6217782649107,
            269,
            162.54998149518622
          ],
          [
            "l",
            290.6217782649107,
            130.00000000000003,
            297.5499814951862,
            134.00000000000003
          ],
          [
            "l",
            230,
            95,
            296,
            95,
            {
              "w": 2.5
            }
          ],
          [
            "l",
            230,
            95,
            274,
            100.8,
            {
              "w": 4
            }
          ],
          [
            "c",
            230,
            95,
            4,
            {
              "f": 2
            }
          ],
          [
            "t",
            230,
            34,
            "12",
            {
              "s": 12
            }
          ],
          [
            "t",
            294,
            84,
            "3",
            {
              "s": 12
            }
          ],
          [
            "t",
            230,
            166,
            "6",
            {
              "s": 12
            }
          ],
          [
            "t",
            166,
            100,
            "9",
            {
              "s": 12
            }
          ],
          [
            "t",
            340,
            100,
            "angle = ?",
            {
              "an": "start",
              "a": 1
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "A patch of lily pads doubles in area every day and covers the whole lake on day 48. On which day did it cover half the lake?",
      "options": [
        "Day 47",
        "Day 24",
        "Day 46",
        "Day 12"
      ],
      "answer": 0,
      "why": "It doubles each day, so one day before full it was half. Day 47.",
      "proof": [
        "Work backwards: the area on any day is half of the next day's area.",
        "Full on day 48, so half on day 47.",
        "Quarter on day 46, and so on.",
        "The tempting answer, day 24, treats the growth as linear. Exponential growth does almost all its growing at the end."
      ]
    },
    {
      "level": "Brain teaser",
      "q": "Two trains start 100 km apart and drive toward each other at 50 km/h each. A fly starts on one train and flies back and forth between them at 75 km/h until they meet. How far does the fly travel?",
      "options": [
        "50 km",
        "75 km",
        "100 km",
        "150 km"
      ],
      "answer": 1,
      "why": "The trains close at 100 km/h, so they meet in 1 hour. The fly flies for that hour at 75 km/h: 75 km.",
      "proof": [
        "Closing speed:  50 + 50 = 100 km/h.",
        "Time until they meet:  100 km / 100 km/h = 1 hour.",
        "The fly is in the air the whole time:  75 km/h × 1 h = 75 km."
      ],
      "proofTitle": "Think about time, not legs",
      "methods": [
        {
          "title": "Sum the legs (the hard way)",
          "steps": [
            "Leg 1: fly and oncoming train close at 75 + 50 = 125 km/h over 100 km, taking 0.8 h. The fly covers 60 km.",
            "In that time each train moved 40 km, so the gap is now 100 − 80 = 20 km, which is 1/5 of the original.",
            "Every leg is the same picture scaled by 1/5, so the legs are 60, 12, 2.4, ... km.",
            "Geometric series:  60/(1 − 1/5) = 75 km.",
            "The story goes that von Neumann answered instantly and, told about the shortcut, said he had summed the series."
          ]
        }
      ],
      "sketch": {
        "h": 150,
        "items": [
          [
            "r",
            50,
            60,
            70,
            30,
            {
              "f": 1
            }
          ],
          [
            "r",
            340,
            60,
            70,
            30,
            {
              "f": 1
            }
          ],
          [
            "a",
            124,
            75,
            170,
            75
          ],
          [
            "a",
            336,
            75,
            290,
            75
          ],
          [
            "c",
            190,
            62,
            4,
            {
              "f": 2,
              "a": 1
            }
          ],
          [
            "a",
            196,
            62,
            250,
            62,
            {
              "a": 1,
              "w": 1.5
            }
          ],
          [
            "t",
            222,
            52,
            "fly 75 km/h",
            {
              "a": 1,
              "s": 12
            }
          ],
          [
            "t",
            85,
            52,
            "50 km/h",
            {
              "s": 12
            }
          ],
          [
            "t",
            375,
            52,
            "50 km/h",
            {
              "s": 12
            }
          ],
          [
            "l",
            50,
            112,
            410,
            112,
            {
              "w": 1
            }
          ],
          [
            "l",
            50,
            107,
            50,
            117,
            {
              "w": 1
            }
          ],
          [
            "l",
            410,
            107,
            410,
            117,
            {
              "w": 1
            }
          ],
          [
            "t",
            230,
            128,
            "100 km",
            {
              "s": 13
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "Estimate: roughly how many tennis balls would fill the interior of a sedan with about 3 m³ of cabin volume?",
      "options": [
        "About 1,000",
        "About 100,000",
        "About 10,000",
        "About 1,000,000"
      ],
      "answer": 2,
      "why": "A tennis ball is about 6.7 cm across, so about 160 cm³. Loose spheres fill about 64% of space. 3,000,000 × 0.64 / 160 ≈ 12,000.",
      "proof": [
        "State assumptions out loud: cabin volume about 3 m³ = 3,000,000 cm³, ignoring seats.",
        "Ball diameter about 6.7 cm:  volume = (4/3)π × 3.35³ ≈ 157 cm³.",
        "Randomly packed spheres fill about 64% of the space.",
        "Count:  3,000,000 × 0.64 / 157 ≈ 12,000.",
        "The interviewer cares about the structure: volume, unit volume, packing factor, then a sanity check. Being within a factor of two or three is fine."
      ],
      "proofTitle": "Volume and packing fraction",
      "methods": [
        {
          "title": "Count balls along each side",
          "steps": [
            "Model the cabin as a box about 2 m × 1.5 m × 1 m.",
            "Balls of 6.7 cm in a square grid:  200/6.7 ≈ 30,  150/6.7 ≈ 22,  100/6.7 ≈ 15.",
            "30 × 22 × 15 ≈ 9,900 balls.",
            "A square grid fills only 52% of space, so real packing gets a bit more. Both routes give about 10,000."
          ]
        }
      ]
    },
    {
      "level": "Brain teaser",
      "q": "Looking at the ends of cylindrical battery cells packed into a large rectangular tray, what is the highest fraction of the area the cells can cover?",
      "options": [
        "About 50%",
        "About 79%",
        "About 91%",
        "100%"
      ],
      "answer": 2,
      "why": "Hexagonal (honeycomb) packing covers π/(2√3) ≈ 90.7%. A square grid covers only π/4 ≈ 78.5%.",
      "proof": [
        "Hexagonal packing: each row is offset by half a cell so cells nest in the gaps of the row below.",
        "Unit cell: a rhombus joining four neighbouring centres, with side d and area d²·sin 60° = 0.866·d².",
        "It contains exactly one full circle of area π·d²/4 = 0.785·d².",
        "Fraction:  0.785/0.866 = π/(2√3) = 0.907.",
        "In a finite tray, the edges waste some space, so real packs are a little lower. Gaps are also needed for cooling, structure and fire protection."
      ],
      "proofTitle": "Hexagonal packing",
      "methods": [
        {
          "title": "Compare with a square grid",
          "steps": [
            "Square grid: each cell sits in a d × d square.",
            "Fraction:  (π·d²/4)/d² = π/4 = 0.785.",
            "Offsetting alternate rows reduces the row spacing from d to 0.866·d, so about 15% more rows fit.",
            "0.785/0.866 = 0.907. Hexagonal is proven to be the densest packing of equal circles in a plane."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked to determine the optimal packing efficiency of cylindrical battery cells in a rectangular battery pack.",
        "sources": [
          "pack"
        ]
      },
      "sketch": {
        "h": 185,
        "items": [
          [
            "r",
            110,
            30,
            240,
            116,
            {
              "rx": 6
            }
          ],
          [
            "c",
            134,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            134,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            134,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            170,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            170,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            170,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            206,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            206,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            206,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            242,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            242,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            242,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            278,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            278,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            278,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            314,
            54,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            314,
            90,
            17,
            {
              "f": 1
            }
          ],
          [
            "c",
            314,
            126,
            17,
            {
              "f": 1
            }
          ],
          [
            "t",
            230,
            170,
            "best possible fill = ?",
            {
              "a": 1,
              "s": 12
            }
          ]
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "Estimate: about how many pianos are there in a town of 100,000 people?",
      "options": [
        "About 20",
        "About 200",
        "About 2,000",
        "About 200,000"
      ],
      "answer": 2,
      "why": "About 40,000 households, a few percent of which own a piano, plus schools, churches and venues. That lands near 2,000. The interviewer is grading the chain of assumptions, not the number.",
      "proofTitle": "Count the owners",
      "proof": [
        "People per household: about 2.5, so 100,000/2.5 = 40,000 households.",
        "Share of households with a piano: roughly 1 in 25. That gives 1,600.",
        "Institutions: about 50 schools, 50 churches and a few dozen venues and studios with one to several each. Add 300 to 400.",
        "Total about 2,000. State each assumption aloud and say which one you trust least (the ownership share).",
        "Sanity bounds: one per person is absurd (100,000), one per thousand people is too few (100). The answer sits between."
      ],
      "methods": [
        {
          "title": "Cross-check with piano tuners",
          "steps": [
            "A tuner does about 4 pianos a day, 250 days a year: 1,000 tunings a year.",
            "If pianos are tuned about once every two years on average, one tuner supports 2,000 pianos.",
            "A town of 100,000 having one or two full-time tuners feels right, which matches 2,000 to 4,000 pianos."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A Mechanical Engineering candidate reported being asked how to determine how many pianos are in a given town.",
        "sources": [
          "pianos"
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "Estimate: about how many ping-pong balls (40 mm diameter) fit inside an empty-seated school bus?",
      "options": [
        "About 5,000",
        "About 50,000",
        "About 5 million",
        "About 500,000"
      ],
      "answer": 3,
      "why": "A bus holds roughly 40 to 45 m³ of air after the seats. Randomly packed 40 mm balls take about 52 cm³ each, which gives several hundred thousand.",
      "proofTitle": "Volume and packing",
      "proof": [
        "Bus interior: about 10 m × 2.4 m × 1.9 m = 46 m³. Take off 10 to 15% for seats and the driver's area: about 40 m³.",
        "One ball:  (4/3)·π·(2 cm)³ = 33.5 cm³.",
        "Spheres poured in at random fill about 64% of the space, so each ball uses 33.5/0.64 = 52 cm³.",
        "40 m³ = 40,000,000 cm³.   40,000,000/52 = 770,000.",
        "Round honestly: 500,000 to 1,000,000. Perfect stacking (74%) would add 15%, but nobody stacks half a million balls."
      ],
      "methods": [
        {
          "title": "The reported twist: you have $15",
          "steps": [
            "The reported version adds a budget. The point is to measure instead of guessing the packing fraction.",
            "Buy a pack of balls and find a box, about $15. Pour the balls in, count them and measure the box. That gives balls per litre directly, with the real random packing.",
            "Measure the bus with a tape or look up its interior dimensions, subtract the seats, and scale up.",
            "Say what the error is: the box's walls disturb the packing, so a small box slightly under-counts."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A Mechanical Engineering Intern candidate reported: you have $15 to determine how many ping-pong balls fit into a school bus. How would you go about it?",
        "sources": [
          "pingpong"
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "Treating it as a single ball-and-socket joint, how many degrees of freedom does your shoulder have?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answer": 1,
      "why": "A ball-and-socket joint blocks all three translations and leaves all three rotations free: raise the arm forward, raise it sideways, and twist it about its own axis.",
      "proof": [
        "A free rigid body has 6 degrees of freedom: 3 translations and 3 rotations.",
        "A ball in a socket cannot translate, so 3 are removed.",
        "The 3 left are rotations: flexion and extension, abduction and adduction, and internal and external rotation.",
        "A good answer adds the caveat: the real shoulder also lets the socket move, because the shoulder blade slides and tilts on the ribcage. Counting the whole shoulder complex gives more than 3.",
        "Compare: the elbow is a hinge with 1 (plus forearm twist), and a computer mouse sliding on a desk has 3 (x, y and yaw)."
      ],
      "reported": {
        "kind": "question",
        "note": "A Tesla intern candidate reported being asked how many degrees of freedom the shoulder has. A computer mouse version was also reported.",
        "sources": [
          "shoulder",
          "dof"
        ]
      }
    },
    {
      "level": "Brain teaser",
      "q": "An interviewer asks you to name ten ways to make a hole in a part. Which of these would NOT belong on your list?",
      "options": [
        "Knurling",
        "Sinker EDM",
        "Piercing in a stamping die",
        "A core pin in an injection mould"
      ],
      "answer": 0,
      "why": "Knurling rolls a grip pattern onto a surface and removes no material. The other three all produce holes.",
      "proof": [
        "Cutting: drilling, reaming, boring, milling with helical interpolation, broaching.",
        "Shearing: punching or piercing in a die.",
        "Thermal and erosive: laser cutting, plasma, waterjet, sinker and wire EDM, chemical etching.",
        "Formed in: a core pin in a casting or injection mould, a hole printed in an additive part, flow drilling that displaces material into a bushing.",
        "That is well over ten. A strong answer groups them like this and says when each is used: drilling for general holes, reaming for tight tolerance, punching for sheet at volume, EDM for hard materials or odd shapes, moulded-in for plastics."
      ],
      "reported": {
        "kind": "question",
        "note": "A Mechanical Design Engineer candidate reported the rapid-fire prompts: mention 10 manufacturing processes, and mention 10 ways to make a hole.",
        "sources": [
          "holes"
        ]
      }
    }
  ]
});
