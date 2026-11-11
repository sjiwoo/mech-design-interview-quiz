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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      }
    }
  ]
});
