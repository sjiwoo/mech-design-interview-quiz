/* Topic: Trick questions. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "trick-questions",
 "title": "Trick questions",
 "blurb": "Physics and engineering questions where the first instinct is wrong. Slow down and reason from first principles.",
 "questions": [
  {
   "level": "Trick question",
   "q": "You are in a boat on a small pond with a heavy rock on board. You throw the rock into the water and it sinks. What happens to the pond's water level?",
   "options": [
    "It falls",
    "It rises",
    "It stays the same",
    "It rises, then falls back"
   ],
   "answer": 0,
   "why": "In the boat, the rock displaces its weight in water. On the bottom, it only displaces its volume. Rock is denser than water, so its weight in water is a bigger volume. The level falls.",
   "proof": [
    "Floating: the boat displaces water equal to the total weight on board. The rock's share is V = m/ρ_water.",
    "Sunk: the rock displaces only its own volume, V = m/ρ_rock.",
    "ρ_rock is about 2.5 to 3 times ρ_water, so the sunk rock displaces 2.5 to 3 times less water.",
    "Less water displaced means the level falls."
   ],
   "proofTitle": "Compare displaced volumes",
   "methods": [
    {
     "title": "Take it to the extreme",
     "steps": [
      "Imagine the rock is a tiny pellet of something incredibly dense, weighing a tonne.",
      "In the boat it pushes the boat down and displaces a cubic metre of water.",
      "Thrown in, the pellet displaces almost nothing, and the boat bobs up.",
      "A cubic metre of displacement vanished, so the level must drop. Pushing a variable to its limit is a good way to check a direction."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineer candidate in Palo Alto reported it with an anchor thrown from a row boat in a tank. Prep sites also list it as a Tesla and SpaceX question.",
    "sources": [
     "anchor",
     "boat1",
     "boat2"
    ]
   },
   "sketch": {
    "h": 170,
    "items": [
     [
      "r",
      40,
      90,
      380,
      60,
      {
       "f": 1,
       "n": 1
      }
     ],
     [
      "l",
      40,
      90,
      420,
      90,
      {
       "w": 2
      }
     ],
     [
      "p",
      [
       [
        170,
        76
       ],
       [
        290,
        76
       ],
       [
        270,
        112
       ],
       [
        190,
        112
       ]
      ],
      {
       "close": 1,
       "f": "s"
      }
     ],
     [
      "c",
      230,
      64,
      13,
      {
       "f": 2
      }
     ],
     [
      "t",
      250,
      58,
      "rock",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "a",
      256,
      70,
      330,
      104,
      {
       "d": 1,
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "t",
      410,
      80,
      "level?",
      {
       "an": "end",
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "An ice cube floats in a glass of fresh water filled to the brim. When the ice melts completely, what happens?",
   "options": [
    "The level stays exactly the same",
    "The level drops",
    "The water overflows",
    "It depends on the size of the cube"
   ],
   "answer": 0,
   "why": "Floating ice displaces its own weight of water. When it melts it becomes exactly that weight of water, which fills exactly the volume it was displacing.",
   "proof": [
    "Archimedes: a floating body displaces a weight of water equal to its own weight.",
    "Ice of mass m displaces a water volume m/ρ_water.",
    "Melted, it is water of mass m, which occupies volume m/ρ_water.",
    "The melt water exactly fills the hole the ice was making, so the level does not change.",
    "The part above the surface exists because ice is about 9% less dense than water. Melting land ice raises sea level because it was not floating to begin with."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "p",
      [
       [
        170,
        30
       ],
       [
        180,
        160
       ],
       [
        280,
        160
       ],
       [
        290,
        30
       ]
      ],
      {
       "w": 2.5
      }
     ],
     [
      "r",
      174,
      36,
      112,
      122,
      {
       "f": 1,
       "n": 1
      }
     ],
     [
      "l",
      171,
      36,
      289,
      36,
      {
       "w": 1.5
      }
     ],
     [
      "r",
      205,
      22,
      44,
      40,
      {
       "f": "s"
      }
     ],
     [
      "t",
      227,
      48,
      "ice",
      {
       "s": 12
      }
     ],
     [
      "t",
      300,
      40,
      "full to the brim",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "t",
      300,
      100,
      "after melting?",
      {
       "an": "start",
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A flat steel plate has a round hole in it. You heat the plate uniformly. What happens to the hole?",
   "options": [
    "It gets smaller, because the metal expands into it",
    "It stays the same size",
    "It gets larger",
    "It becomes oval"
   ],
   "answer": 2,
   "why": "Uniform heating scales every dimension by the same factor, like a photographic enlargement. The hole grows exactly as a disc of the same material would.",
   "proof": [
    "Thermal expansion is a uniform strain: every length in the body becomes L(1 + α·ΔT).",
    "That includes the distance across the hole, so its diameter grows by the same factor.",
    "It is like enlarging a photo of the plate: the hole in the picture gets bigger too."
   ],
   "proofTitle": "Uniform scaling",
   "methods": [
    {
     "title": "Put the plug back",
     "steps": [
      "Imagine the disc that was cut out is still in place. The plate is then solid and expands uniformly with no internal stress.",
      "The disc expands to a larger diameter. The surrounding plate stays in contact with it all the way round.",
      "So the hole's edge moved outward by the same amount. Removing the disc changes nothing, because no stress was passing between them.",
      "This is how shrink fits work: heat the hub so its bore grows, slide it on the shaft, and let it cool."
     ]
    }
   ],
   "sketch": {
    "h": 170,
    "items": [
     [
      "r",
      120,
      30,
      220,
      110,
      {
       "f": 1
      }
     ],
     [
      "c",
      230,
      85,
      28,
      {
       "f": "s"
      }
     ],
     [
      "p",
      [
       [
        150,
        165
       ],
       [
        145,
        158
       ],
       [
        155,
        150
       ],
       [
        150,
        143
       ]
      ],
      {
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "p",
      [
       [
        210,
        165
       ],
       [
        205,
        158
       ],
       [
        215,
        150
       ],
       [
        210,
        143
       ]
      ],
      {
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "p",
      [
       [
        270,
        165
       ],
       [
        265,
        158
       ],
       [
        275,
        150
       ],
       [
        270,
        143
       ]
      ],
      {
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "t",
      350,
      160,
      "heated",
      {
       "an": "start",
       "a": 1,
       "s": 12
      }
     ],
     [
      "t",
      230,
      90,
      "?",
      {
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A solid round bar and a tube have the same outside diameter and material. Which is stiffer in bending?",
   "options": [
    "The tube, because hollow sections are stiffer",
    "It depends on the wall thickness in a way that can favour either",
    "They are equally stiff",
    "The solid bar"
   ],
   "answer": 3,
   "why": "The solid bar. I_tube = I_solid − I_hole, so removing material can only reduce stiffness. Tubes are stiffer per kilogram, not in absolute terms.",
   "proof": [
    "Solid:  I = π·D⁴/64.   Tube:  I = π(D⁴ − d⁴)/64.",
    "The tube's I is the solid's minus the core's, so it is always smaller.",
    "Example with D = 50 and d = 40:  the tube keeps 1 − (40/50)⁴ = 59% of the stiffness with only 36% of the mass.",
    "So the correct statement is: for the same mass a tube is stiffer, and for the same outside diameter the solid is stiffer.",
    "The trick is the unstated constraint. Always ask: same what?"
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported questions on which cross-section is stiffest. This exact question was not reported.",
    "sources": [
     "intern5",
     "xsec"
    ]
   },
   "sketch": {
    "h": 160,
    "items": [
     [
      "c",
      150,
      75,
      45,
      {
       "f": 1
      }
     ],
     [
      "c",
      310,
      75,
      45,
      {
       "f": 1
      }
     ],
     [
      "c",
      310,
      75,
      34,
      {
       "f": "s"
      }
     ],
     [
      "t",
      150,
      142,
      "solid"
     ],
     [
      "t",
      310,
      142,
      "tube"
     ],
     [
      "t",
      230,
      80,
      "vs"
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A helium balloon floats on a string inside a closed car. The car accelerates forward. Which way does the balloon move?",
   "options": [
    "Backward, like the passengers",
    "Forward",
    "It doesn't move",
    "Straight up"
   ],
   "answer": 1,
   "why": "The denser air is thrown toward the back, creating a higher pressure there. The balloon, lighter than air, is pushed toward the low-pressure front.",
   "proof": [
    "In the accelerating car, everything behaves as if there were an extra gravity pointing backward.",
    "The air, being denser than helium, 'sinks' toward the back, building a pressure gradient from back to front.",
    "A helium balloon moves opposite to effective gravity. That is why it floats up, and here it also moves forward.",
    "Combined effective gravity points down and back, so the balloon tilts up and forward.",
    "Under braking it moves backward. A hanging pendulum does the opposite of the balloon every time."
   ],
   "sketch": {
    "h": 170,
    "items": [
     [
      "p",
      [
       [
        70,
        130
       ],
       [
        70,
        80
       ],
       [
        130,
        76
       ],
       [
        170,
        40
       ],
       [
        300,
        40
       ],
       [
        340,
        76
       ],
       [
        390,
        84
       ],
       [
        390,
        130
       ]
      ],
      {
       "close": 1,
       "f": 1
      }
     ],
     [
      "c",
      130,
      132,
      18,
      {
       "f": 2
      }
     ],
     [
      "c",
      330,
      132,
      18,
      {
       "f": 2
      }
     ],
     [
      "l",
      240,
      118,
      240,
      84,
      {
       "w": 1.2
      }
     ],
     [
      "c",
      240,
      70,
      14,
      {
       "f": "s",
       "a": 1
      }
     ],
     [
      "a",
      300,
      16,
      380,
      16,
      {
       "a": 1
      }
     ],
     [
      "t",
      290,
      20,
      "accelerating",
      {
       "an": "end",
       "a": 1,
       "s": 12
      }
     ],
     [
      "t",
      262,
      74,
      "?",
      {
       "an": "start"
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A sausage (or a pressurised pipe) bursts when overheated. Which way does it split, and why?",
   "options": [
    "Around its circumference, because the ends push apart",
    "At a random angle",
    "Along its length, because hoop stress is twice the axial stress",
    "At 45°, because of shear"
   ],
   "answer": 2,
   "why": "In a pressurised cylinder, hoop stress is pr/t and axial stress is pr/(2t). The skin fails across the larger stress, so the crack runs lengthwise.",
   "proof": [
    "Internal pressure loads the wall in two directions.",
    "Hoop (around the circumference):  σ_h = p·r/t.   Axial (along the length):  σ_a = p·r/(2t).",
    "Hoop stress is twice as large, so the wall fails in the hoop direction first.",
    "A crack opens perpendicular to the stress that causes it, so the split runs along the length.",
    "It is the reason pipes burst in long slits and why wound pressure vessels put more fibre in the hoop direction."
   ],
   "sketch": {
    "h": 160,
    "items": [
     [
      "r",
      70,
      40,
      320,
      80,
      {
       "f": 1,
       "rx": 36
      }
     ],
     [
      "l",
      110,
      80,
      350,
      80,
      {
       "d": 1,
       "a": 1
      }
     ],
     [
      "l",
      230,
      44,
      230,
      116,
      {
       "d": 1
      }
     ],
     [
      "t",
      230,
      144,
      "bursts along its length or around?",
      {
       "s": 12
      }
     ],
     [
      "t",
      96,
      74,
      "p",
      {
       "s": 13
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A coil spring has stiffness k. You cut it exactly in half. What is the stiffness of one half?",
   "options": [
    "k/2",
    "k",
    "4k",
    "2k"
   ],
   "answer": 3,
   "why": "Each half has half as many coils to deflect, so it stretches half as far under the same force: stiffness 2k.",
   "proof": [
    "Think of the original spring as two half-springs in series, each of stiffness k_h.",
    "Series rule:  1/k = 1/k_h + 1/k_h = 2/k_h.",
    "So k_h = 2k."
   ],
   "proofTitle": "Springs in series",
   "methods": [
    {
     "title": "From the spring formula",
     "steps": [
      "Coil spring stiffness:  k = G·d⁴/(8·D³·N), with N the number of active coils.",
      "Stiffness is inversely proportional to N.",
      "Half the coils means twice the stiffness: 2k.",
      "Same idea as a bar in tension, k = AE/L: a shorter bar is stiffer."
     ]
    }
   ],
   "sketch": {
    "h": 150,
    "items": [
     [
      "h",
      60,
      30,
      60,
      100,
      -1
     ],
     [
      "s",
      60,
      65,
      380,
      65,
      12
     ],
     [
      "l",
      220,
      36,
      220,
      96,
      {
       "d": 1,
       "a": 1
      }
     ],
     [
      "t",
      220,
      28,
      "cut here",
      {
       "a": 1,
       "s": 12
      }
     ],
     [
      "t",
      140,
      110,
      "whole spring: k"
     ],
     [
      "t",
      310,
      110,
      "one half: ?"
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A short bar and a bar ten times longer, of the same material, are each held between rigid walls and heated by the same amount. Which develops the higher stress?",
   "options": [
    "The long bar, because it tries to expand more",
    "They develop the same stress",
    "The short bar",
    "Neither develops any stress"
   ],
   "answer": 1,
   "why": "σ = E·α·ΔT. Length cancels out: the long bar wants to grow ten times more, but that growth is spread over ten times the length, so the strain is the same.",
   "proof": [
    "Free expansion would be δ = α·ΔT·L, which is ten times larger for the long bar.",
    "The walls prevent it, so the bar is compressed by strain δ/L = α·ΔT.",
    "L cancels. Strain, and so stress σ = E·α·ΔT, is identical for both bars.",
    "The cross-section does not matter either. The wall force does scale with area.",
    "The long bar is, however, much more likely to buckle under that same stress."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "h",
      100,
      20,
      100,
      70,
      -1
     ],
     [
      "h",
      180,
      20,
      180,
      70,
      1
     ],
     [
      "r",
      100,
      36,
      80,
      18,
      {
       "f": 1
      }
     ],
     [
      "t",
      260,
      50,
      "short bar",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "h",
      60,
      100,
      60,
      150,
      -1
     ],
     [
      "h",
      400,
      100,
      400,
      150,
      1
     ],
     [
      "r",
      60,
      116,
      340,
      18,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      170,
      "same heating: which has more stress?",
      {
       "s": 12
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "You drive the first half of a trip's distance at 30 mph and the second half at 60 mph. What is your average speed?",
   "options": [
    "It depends on the distance",
    "45 mph",
    "50 mph",
    "40 mph"
   ],
   "answer": 3,
   "why": "You spend twice as long at 30 as at 60, so the average is weighted toward 30: total distance over total time gives 40 mph.",
   "proof": [
    "Let each half be d. Time for the first half: d/30. Second half: d/60.",
    "Total time:  d/30 + d/60 = 3d/60 = d/20.",
    "Average speed = total distance / total time = 2d/(d/20) = 40 mph."
   ],
   "proofTitle": "Total distance over total time",
   "methods": [
    {
     "title": "Plug in a number",
     "steps": [
      "Pick a 120 mile trip, so 60 miles per half.",
      "First half:  60/30 = 2 hours.   Second half:  60/60 = 1 hour.",
      "120 miles in 3 hours = 40 mph.",
      "For equal distances the average is the harmonic mean, 2·v₁·v₂/(v₁ + v₂) = 3,600/90 = 40. It would be 45 only if the two speeds were held for equal times."
     ]
    }
   ],
   "sketch": {
    "h": 130,
    "items": [
     [
      "l",
      60,
      60,
      400,
      60,
      {
       "w": 4
      }
     ],
     [
      "l",
      230,
      48,
      230,
      72,
      {
       "w": 2
      }
     ],
     [
      "t",
      145,
      44,
      "30 mph"
     ],
     [
      "t",
      315,
      44,
      "60 mph"
     ],
     [
      "l",
      60,
      84,
      230,
      84,
      {
       "w": 1
      }
     ],
     [
      "l",
      60,
      79,
      60,
      89,
      {
       "w": 1
      }
     ],
     [
      "l",
      230,
      79,
      230,
      89,
      {
       "w": 1
      }
     ],
     [
      "t",
      145,
      100,
      "half the distance",
      {
       "s": 13
      }
     ],
     [
      "l",
      230,
      84,
      400,
      84,
      {
       "w": 1
      }
     ],
     [
      "l",
      230,
      79,
      230,
      89,
      {
       "w": 1
      }
     ],
     [
      "l",
      400,
      79,
      400,
      89,
      {
       "w": 1
      }
     ],
     [
      "t",
      315,
      100,
      "half the distance",
      {
       "s": 13
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A spring scale is held horizontally. A rope on each end runs over a pulley to a hanging 100 N weight, so 100 N pulls on each end. What does the scale read?",
   "options": [
    "0 N",
    "200 N",
    "100 N",
    "50 N"
   ],
   "answer": 2,
   "why": "The scale reads the tension in it, which is 100 N. It is the same as hanging one 100 N weight from a scale fixed to a wall: the wall pulls back with 100 N.",
   "proof": [
    "A spring scale measures the tension passing through it.",
    "Cut the rope anywhere and draw the free body of one weight: tension T up, 100 N down, so T = 100 N.",
    "That same tension runs through the scale, so it reads 100 N.",
    "Compare with a scale hooked to a wall holding one 100 N weight. The wall pulls with 100 N on the other end and the scale reads 100 N. The second weight simply replaces the wall.",
    "The net force on the scale is zero, which is why it does not accelerate. Net force and tension are different things."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "r",
      175,
      40,
      110,
      26,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      58,
      "scale",
      {
       "s": 12
      }
     ],
     [
      "l",
      110,
      53,
      175,
      53
     ],
     [
      "l",
      285,
      53,
      350,
      53
     ],
     [
      "c",
      96,
      58,
      14,
      {
       "f": 1
      }
     ],
     [
      "c",
      364,
      58,
      14,
      {
       "f": 1
      }
     ],
     [
      "l",
      82,
      58,
      82,
      120
     ],
     [
      "l",
      378,
      58,
      378,
      120
     ],
     [
      "r",
      60,
      120,
      44,
      36,
      {
       "f": 2
      }
     ],
     [
      "r",
      356,
      120,
      44,
      36,
      {
       "f": 2
      }
     ],
     [
      "t",
      82,
      174,
      "100 N",
      {
       "s": 12
      }
     ],
     [
      "t",
      378,
      174,
      "100 N",
      {
       "s": 12
      }
     ],
     [
      "t",
      230,
      100,
      "reads?",
      {
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Two cars are identical except that one has twice the total mass, with all the extra mass in the body. They roll from rest down the same hill. Neglect air resistance. Which reaches the bottom first?",
   "options": [
    "The heavier car, by a small margin",
    "The lighter car, by a small margin",
    "They arrive at exactly the same time",
    "The lighter car, by a large margin"
   ],
   "answer": 0,
   "why": "The wheels have to be spun up as well as moved. Both cars have the same wheels, so in the heavier car the wheels are a smaller share of the total inertia and it accelerates slightly faster.",
   "proofTitle": "Forces and torque",
   "proof": [
    "Let M be the total mass and I the combined rotational inertia of the wheels, radius r. Rolling without slipping: ω = v/r.",
    "Energy after dropping a height h:  M·g·h = ½·M·v² + ½·I·(v/r)².",
    "So v² = 2·g·h / (1 + I/(M·r²)), and the acceleration is a = g·sin θ / (1 + I/(M·r²)).",
    "I/r² is the same for both cars. Doubling M halves the term I/(M·r²), so a moves closer to g·sin θ.",
    "Numbers: wheels worth I/r² = 60 kg. M = 1,500 kg gives a = 0.962·g·sin θ. M = 3,000 kg gives 0.980·g·sin θ. About 2% more acceleration and 1% less time.",
    "The phrase \"extra mass in the body\" is the clue. If the wheels were scaled up too, it would be a tie."
   ],
   "methods": [
    {
     "title": "Take it to the extreme",
     "steps": [
      "Imagine a car that is nearly all wheel: a pair of heavy hoops with a paper body. A hoop rolls with a = ½·g·sin θ.",
      "Now imagine a huge body on tiny, light wheels. It behaves like a sliding frictionless block, a = g·sin θ.",
      "Adding body mass moves a car from the first case toward the second, so the heavier car is quicker.",
      "Rolling resistance scales with weight, so it slows both equally and does not change the result."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineer candidate in Palo Alto reported this question. The top-voted answer on the page gives the wheel-inertia explanation.",
    "sources": [
     "hill",
     "fridge"
    ]
   },
   "sketch": {
    "h": 150,
    "alt": "Two cars with the same wheels, one with twice the mass",
    "items": [
     [
      "r",
      60,
      50,
      120,
      36,
      {
       "f": 1,
       "rx": 6
      }
     ],
     [
      "c",
      88,
      98,
      12,
      {
       "f": "s"
      }
     ],
     [
      "c",
      152,
      98,
      12,
      {
       "f": "s"
      }
     ],
     [
      "t",
      120,
      73,
      "M"
     ],
     [
      "r",
      280,
      50,
      120,
      36,
      {
       "f": 2,
       "rx": 6
      }
     ],
     [
      "c",
      308,
      98,
      12,
      {
       "f": "s"
      }
     ],
     [
      "c",
      372,
      98,
      12,
      {
       "f": "s"
      }
     ],
     [
      "t",
      340,
      73,
      "2M"
     ],
     [
      "h",
      30,
      111,
      430,
      111,
      1
     ],
     [
      "t",
      230,
      140,
      "same wheels, same hill, no air drag",
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
   "q": "A refrigerator is left running with its door wide open all day in a closed kitchen. What happens to the kitchen's temperature?",
   "options": [
    "It falls steadily, like an air conditioner",
    "It falls at first, then returns to where it started",
    "It stays exactly the same",
    "It rises"
   ],
   "answer": 3,
   "why": "A fridge only moves heat from its inside to the coils on its back, and both are in the same room. The electrical work it draws ends up as extra heat, so the room warms.",
   "proofTitle": "Energy balance on the room",
   "proof": [
    "Draw the boundary around the kitchen. Heat pulled from the room air at the open door: Q_c. Heat rejected at the condenser coils: Q_h.",
    "First law for the fridge:  Q_h = Q_c + W, where W is the electrical work into the compressor.",
    "Both Q_c and Q_h stay inside the kitchen, so they cancel. Net heat added to the room = W.",
    "With the door open the thermostat never trips, so the compressor runs all day. A 150 W compressor is a 150 W heater.",
    "An air conditioner works because its hot coil is outside the room. Move the fridge's coils outdoors and the kitchen would cool."
   ],
   "methods": [
    {
     "title": "Second-law check",
     "steps": [
      "If a closed, insulated room could cool itself with a machine that only takes in electricity, energy would have to disappear.",
      "Energy crosses the room boundary in one direction only: electricity in.",
      "So the room's internal energy rises and so does its temperature, whatever the machine does inside."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "Listed on Glassdoor as a Tesla Mechanical Design Engineer interview question.",
    "sources": [
     "fridge"
    ]
   },
   "sketch": {
    "h": 180,
    "alt": "Fridge running with its door open in a closed kitchen",
    "items": [
     [
      "r",
      40,
      20,
      380,
      140,
      {
       "w": 2.5
      }
     ],
     [
      "t",
      105,
      40,
      "closed kitchen",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      195,
      55,
      70,
      95,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      108,
      "fridge",
      {
       "s": 12
      }
     ],
     [
      "t",
      120,
      100,
      "door open",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "a",
      230,
      175,
      230,
      153,
      {
       "w": 2.5
      }
     ],
     [
      "t",
      290,
      174,
      "W (electricity)",
      {
       "s": 12
      }
     ],
     [
      "t",
      340,
      100,
      "room temp: ?",
      {
       "s": 13,
       "a": 1
      }
     ]
    ]
   },
   "sketchAfter": {
    "h": 180,
    "alt": "Fridge in a closed room: heat taken from the room and returned to it, plus electrical work",
    "items": [
     [
      "r",
      40,
      20,
      380,
      140,
      {
       "w": 2.5
      }
     ],
     [
      "t",
      105,
      40,
      "closed kitchen",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      195,
      55,
      70,
      95,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      108,
      "fridge",
      {
       "s": 12
      }
     ],
     [
      "a",
      120,
      90,
      190,
      90,
      {
       "a": 1
      }
     ],
     [
      "t",
      120,
      80,
      "Q_c",
      {
       "a": 1
      }
     ],
     [
      "a",
      270,
      90,
      345,
      90,
      {
       "a": 1
      }
     ],
     [
      "t",
      330,
      80,
      "Q_c + W",
      {
       "a": 1
      }
     ],
     [
      "a",
      230,
      175,
      230,
      153,
      {
       "w": 2.5
      }
     ],
     [
      "t",
      290,
      174,
      "W (electricity)",
      {
       "s": 12
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Two beams have identical geometry and supports. One is steel, one is aluminium. With no external load, which sags more under its own weight?",
   "options": [
    "They sag about the same",
    "The steel beam, about 3 times more",
    "The aluminium beam, about 3 times more",
    "The steel beam, about 9 times more"
   ],
   "answer": 0,
   "why": "Steel is about 3 times heavier and about 3 times stiffer. Self-weight deflection goes as ρ/E, and that ratio is nearly the same for both metals.",
   "proofTitle": "Scale the formula",
   "proof": [
    "Self-weight is a uniform load:  w = ρ·g·A.",
    "Any beam under uniform load deflects as δ = C·w·L⁴/(E·I), with C set by the supports (5/384 simply supported, 1/8 cantilever).",
    "Same geometry, so A, I, L and C cancel:  δ ∝ ρ/E.",
    "Steel:  7.85/200 = 0.039.   Aluminium:  2.70/69 = 0.039.",
    "The sag is the same to within about 1%. Under an added external load the steel beam deflects 3 times less."
   ],
   "methods": [
    {
     "title": "Link to natural frequency",
     "steps": [
      "The first natural frequency of a beam goes as √(E/ρ) for fixed geometry.",
      "Static sag under own weight and natural frequency are tied together:  f ≈ 0.5/√δ_static roughly, for δ in metres.",
      "Steel and aluminium beams of the same shape ring at the same frequency, so they must sag the same."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Blind thread on Tesla mechanical test interviews gives this as an example question: an aluminium beam against a steel beam of the same cross-section, with and without external load.",
    "sources": [
     "selfweight"
    ]
   },
   "sketch": {
    "h": 150,
    "alt": "Simply supported beam sagging under its own weight",
    "items": [
     [
      "r",
      60,
      50,
      340,
      12,
      {
       "f": 1
      }
     ],
     [
      "p",
      [
       [
        60,
        62
       ],
       [
        50,
        82
       ],
       [
        70,
        82
       ]
      ],
      {
       "close": 1
      }
     ],
     [
      "p",
      [
       [
        400,
        62
       ],
       [
        390,
        82
       ],
       [
        410,
        82
       ]
      ],
      {
       "close": 1
      }
     ],
     [
      "p",
      [
       [
        60,
        68
       ],
       [
        150,
        84
       ],
       [
        230,
        89
       ],
       [
        310,
        84
       ],
       [
        400,
        68
       ]
      ],
      {
       "d": 1,
       "a": 1
      }
     ],
     [
      "a",
      230,
      20,
      230,
      46,
      {
       "m": 1
      }
     ],
     [
      "a",
      150,
      20,
      150,
      46,
      {
       "m": 1
      }
     ],
     [
      "a",
      310,
      20,
      310,
      46,
      {
       "m": 1
      }
     ],
     [
      "t",
      230,
      14,
      "own weight only",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      120,
      "steel: 3× heavier, 3× stiffer",
      {
       "s": 13
      }
     ],
     [
      "t",
      230,
      140,
      "sag = ?",
      {
       "a": 1,
       "s": 13
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A steel beam and an aluminium beam have identical geometry and carry the same external load. Which statement is right?",
   "options": [
    "Aluminium deflects less and is stiffer per kilogram",
    "Steel deflects about 3 times less, but stiffness per kilogram is about equal",
    "Steel deflects about 3 times less and is about 3 times stiffer per kilogram",
    "They deflect the same, and aluminium is stiffer per kilogram"
   ],
   "answer": 1,
   "why": "Deflection goes as 1/E, so steel deflects about a third as much. It also weighs about 3 times more, so stiffness per unit mass, E/ρ, is a tie.",
   "proof": [
    "Same load and geometry:  δ ∝ 1/E.   E_steel/E_al = 200/69 = 2.9.",
    "Mass ∝ ρ:  7.85/2.70 = 2.9.",
    "Stiffness per unit mass ∝ E/ρ:  steel 25.5, aluminium 25.6 (GPa per g/cm³). Equal.",
    "The real advantage of aluminium appears when geometry is free. For a beam of fixed width, bending stiffness per mass goes as E^(1/3)/ρ, and aluminium wins by about 2 times because you can make it deeper.",
    "So the answer to \"which is better per unit mass\" is: neither for a fixed shape, aluminium if you can change the section."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported being asked whether an identical beam of aluminium or steel would have less deflection per unit mass. Other candidates reported the plain version: which beam deflects more.",
    "sources": [
     "permass",
     "selfweight"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "How does the strength-to-weight ratio of 6061-T6 aluminium (yield about 275 MPa) compare with mild steel (yield about 250 MPa)?",
   "options": [
    "They are about the same, like their stiffness-to-weight",
    "Steel is about 3 times better",
    "Aluminium is about 10% better",
    "Aluminium is about 3 times better"
   ],
   "answer": 3,
   "why": "The yield strengths are similar but aluminium is about a third of the density, so its strength per unit mass is about 3 times higher. The trap is assuming it ties like stiffness-to-weight does.",
   "proof": [
    "Specific strength = σ_y/ρ.",
    "6061-T6:  275/2.70 = 102 MPa per g/cm³.",
    "Mild steel:  250/7.85 = 32 MPa per g/cm³.",
    "Ratio about 3.2 in favour of aluminium.",
    "It depends on the alloy. A 1,000 MPa high-strength steel gives 127, ahead of 6061. 7075-T6 at 500 MPa gives 185.",
    "Stiffness-to-weight, E/ρ, does not depend much on alloy and is equal for both metals. Strength varies widely with alloy and heat treatment, so always ask which grades."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineer Intern candidate reported being asked how the strength-to-weight ratio of aluminium and steel compares.",
    "sources": [
     "sw"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Leaving aside the label \"natural material\", which engineering material class does wood belong to?",
   "options": [
    "Ceramic",
    "Composite",
    "Thermoset polymer",
    "Foam"
   ],
   "answer": 1,
   "why": "Wood is strong cellulose fibres bound in a lignin matrix, which is the definition of a fibre-reinforced composite. That is why it is much stronger along the grain than across it.",
   "proof": [
    "A composite combines two or more distinct phases: a reinforcement that carries load and a matrix that holds it together.",
    "In wood, cellulose microfibrils are the reinforcement. Lignin and hemicellulose are the matrix.",
    "Like carbon fibre, it is anisotropic: stiffness along the grain is roughly 10 to 20 times the stiffness across it.",
    "Its constituents are polymers, so \"polymer\" is a tempting answer, but the two-phase fibre-and-matrix structure makes it a composite. Its cells also make it a cellular solid, which explains its low density."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineer Intern candidate reported this question.",
    "sources": [
     "wood"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A plastic coil spring is cheaper and lighter than a steel one. For a spring that stays compressed for years, what is the main reason not to make the swap?",
   "options": [
    "Plastic creeps, so the spring force relaxes over time",
    "Plastic cannot be moulded into a coil",
    "Plastic is too brittle to deflect elastically",
    "Plastic conducts too little heat"
   ],
   "answer": 0,
   "why": "Polymers are viscoelastic. Held at constant deflection, the stress relaxes and the spring loses force, and it does so faster when warm. Steel at room temperature holds its load indefinitely.",
   "proof": [
    "A spring's job is to hold a force at a deflection for the life of the product.",
    "Under sustained strain, polymer chains slowly slide. Stress relaxation of 30 to 50% over the product's life is common, more near the glass transition temperature.",
    "Second problem: modulus. Steel has G of about 79 GPa, unfilled plastics about 1 GPa, so the same spring rate needs a far bulkier spring.",
    "Third: properties drift with temperature and humidity, and fatigue life is shorter.",
    "Plastic springs do work when the load is brief: a snap-fit or a living hinge is deflected only during assembly, then sits unloaded."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported the open-ended question: why wouldn't you replace a conventional spring with a plastic spring?",
    "sources": [
     "plasticspring"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Follow-up to the boat and rock question. This time you throw a beach ball overboard, and it floats. What happens to the pond's water level?",
   "options": [
    "It falls",
    "It rises",
    "It stays the same",
    "It depends on the size of the ball"
   ],
   "answer": 2,
   "why": "A floating object displaces its own weight of water whether it sits in the boat or floats beside it. The total displaced weight does not change, so the level does not move.",
   "proof": [
    "In the boat: the ball's weight is carried by the boat, which displaces an extra m/ρ_water.",
    "Floating by itself: the ball displaces exactly its own weight of water, m/ρ_water.",
    "Same displaced volume before and after, so no change.",
    "The level only falls for something that sinks, because the bottom of the pond then carries part of its weight and it displaces less than its weight.",
    "General rule: if everything is still floating afterwards, the level is unchanged. This is also why melting floating ice does not change the level."
   ],
   "reported": {
    "kind": "topic",
    "note": "The anchor version was reported for Tesla. This floating-object follow-up was reported for mechanical test engineer interviews at other companies, not specifically Tesla.",
    "sources": [
     "anchor"
    ]
   }
  }
 ]
});
