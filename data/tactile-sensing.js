/* Topic: Tactile sensing. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "tactile-sensing",
 "title": "Tactile sensing",
 "blurb": "How touch sensors work and how to design them into a robot hand: sensing principles, elastomer skins, resolution, shear and slip, wiring and overload. Practice questions; Tesla lists Optimus tactile sensing roles, but no interview reports exist for them.",
 "questions": [
  {
   "level": "Applied",
   "q": "A capacitive tactile element is two plates separated by a soft dielectric. Pressing it reduces the gap from 100 µm to 90 µm. How does the capacitance change?",
   "options": [
    "It drops by 10%",
    "It rises by about 11%",
    "It does not change",
    "It doubles"
   ],
   "answer": 1,
   "why": "C = εA/d, so C is inversely proportional to the gap. 100/90 = 1.11, an 11% rise.",
   "proof": [
    "Parallel plates:  C = ε·A/d.",
    "Only d changes:  C_new/C_old = d_old/d_new = 100/90 = 1.111.",
    "That is +11.1%. The response is nonlinear: each further 10 µm gives a bigger change.",
    "A softer or thinner dielectric gives more signal per newton but less force range.",
    "Shear can be sensed with offset electrode pairs whose overlap area changes."
   ],
   "sketch": {
    "h": 170,
    "items": [
     [
      "r",
      120,
      50,
      220,
      12,
      {
       "f": 2
      }
     ],
     [
      "r",
      120,
      62,
      220,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      120,
      98,
      220,
      12,
      {
       "f": 2
      }
     ],
     [
      "l",
      350,
      62,
      350,
      98,
      {
       "w": 1
      }
     ],
     [
      "l",
      345,
      62,
      355,
      62,
      {
       "w": 1
      }
     ],
     [
      "l",
      345,
      98,
      355,
      98,
      {
       "w": 1
      }
     ],
     [
      "t",
      358,
      85,
      "gap",
      {
       "s": 13,
       "an": "start"
      }
     ],
     [
      "t",
      360,
      112,
      "100 → 90 µm",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "a",
      230,
      14,
      230,
      46,
      {
       "a": 1
      }
     ],
     [
      "t",
      240,
      24,
      "press",
      {
       "an": "start",
       "a": 1
      }
     ],
     [
      "t",
      230,
      84,
      "soft dielectric",
      {
       "s": 12
      }
     ],
     [
      "t",
      230,
      140,
      "capacitance change = ?"
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which tactile sensing principle cannot measure a steady, unchanging force?",
   "options": [
    "Capacitive",
    "Piezoresistive",
    "Piezoelectric",
    "Strain gauge"
   ],
   "answer": 2,
   "why": "A piezoelectric element generates charge only when the stress changes, and that charge leaks away. It is excellent for vibration and slip onset but reads zero for a constant grip.",
   "proof": [
    "Piezoelectric (PVDF film, PZT): stress produces charge. Under constant load the charge drains through the circuit, so the output decays to zero.",
    "It is very sensitive to fast events: contact, texture vibration and incipient slip.",
    "Capacitive: gap or area changes. Reads static force, sensitive, low power, needs shielding from stray capacitance.",
    "Piezoresistive and strain gauge: resistance changes with pressure or strain. Simple and static, with more hysteresis and drift.",
    "Other options: optical or camera-based skins, magnetic (Hall sensor under a magnet in rubber) and barometric. Hands often combine a static and a dynamic type."
   ]
  },
  {
   "level": "Design judgment",
   "q": "A fingertip sensor sits under a soft elastomer skin. What happens if you make that skin much thicker?",
   "options": [
    "Spatial resolution improves",
    "Nothing changes",
    "The sensor reads higher forces",
    "Spatial resolution gets worse, because the skin spreads each contact over a wider area"
   ],
   "answer": 3,
   "why": "The skin acts as a mechanical low-pass filter. A point contact on the surface arrives at the sensing layer as a blurred pressure bump about as wide as the skin is thick.",
   "proof": [
    "Stress under a point load spreads out with depth. At depth t the pressure footprint is roughly t to 2t wide.",
    "So two contacts closer together than about the skin thickness merge into one.",
    "Thicker, softer skin gives better conformance, grip, protection and durability, but less resolution and more hysteresis.",
    "Thin skin gives sharp images but less protection and compliance.",
    "Design choice: keep skin thickness comparable to the taxel pitch, or use ridges or bumps to concentrate load onto each element."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "r",
      80,
      60,
      300,
      60,
      {
       "f": 1
      }
     ],
     [
      "r",
      92,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      132,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      172,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      212,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      252,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      292,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "r",
      332,
      124,
      28,
      14,
      {
       "f": 2
      }
     ],
     [
      "a",
      230,
      16,
      230,
      56,
      {
       "a": 1
      }
     ],
     [
      "l",
      230,
      60,
      170,
      120,
      {
       "d": 1,
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "l",
      230,
      60,
      290,
      120,
      {
       "d": 1,
       "a": 1,
       "w": 1.5
      }
     ],
     [
      "t",
      390,
      94,
      "skin",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "t",
      230,
      160,
      "sensing elements",
      {
       "s": 12
      }
     ],
     [
      "l",
      64,
      60,
      64,
      120,
      {
       "w": 1
      }
     ],
     [
      "l",
      59,
      60,
      69,
      60,
      {
       "w": 1
      }
     ],
     [
      "l",
      59,
      120,
      69,
      120,
      {
       "w": 1
      }
     ],
     [
      "t",
      56,
      95,
      "t",
      {
       "s": 13,
       "an": "end"
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A soft elastomer tactile sensor reads 5.0 N while a force is rising and 5.4 N at the same true force while it is falling. What is this effect, and what causes it?",
   "options": [
    "Hysteresis, from the viscoelastic elastomer",
    "Electrical noise",
    "Resolution limit of the converter",
    "Thermal expansion"
   ],
   "answer": 0,
   "why": "Elastomers dissipate energy and lag behind the load, so the loading and unloading curves differ. The same material behaviour also causes creep: the reading drifts under a constant force.",
   "proof": [
    "Viscoelastic materials store and dissipate energy. Their deformation depends on load history and time.",
    "Loading and unloading follow different paths, which is hysteresis. Here it is 0.4 N at 5 N, about 8%.",
    "Under a held load the elastomer keeps deforming, so the reading creeps upward.",
    "Reduce it with lower-loss elastomers (silicone has less than many polyurethanes), thinner layers, stiffer flexure-based structures, or model-based compensation.",
    "Characterise with slow load-unload cycles and step-and-hold tests at several temperatures."
   ]
  },
  {
   "level": "Applied",
   "q": "You want a fingertip sensor to distinguish features 2 mm apart. What is the largest sensing-element (taxel) pitch that can do it?",
   "options": [
    "4 mm",
    "2 mm",
    "About 1 mm",
    "10 mm"
   ],
   "answer": 2,
   "why": "Sampling theory: you need at least two samples per feature spacing, so the pitch must be 1 mm or less. Human fingertips resolve about 1 to 2 mm.",
   "proof": [
    "Two bumps 2 mm apart are a spatial pattern with a 2 mm period.",
    "To capture it you need at least 2 samples per period (Nyquist), so pitch ≤ 1 mm.",
    "At a 2 mm pitch both bumps could land on adjacent taxels and look like one wide contact.",
    "The skin also blurs, so thickness must be small enough not to wash out the detail.",
    "Human fingertip two-point discrimination is about 1 to 2 mm, and several times coarser on the palm, so robot hands use dense arrays at fingertips and sparse ones elsewhere."
   ],
   "sketch": {
    "h": 170,
    "items": [
     [
      "r",
      110,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      150,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      190,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      230,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      270,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "r",
      310,
      90,
      36,
      36,
      {
       "f": 1
      }
     ],
     [
      "c",
      210,
      60,
      9,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "c",
      250,
      60,
      9,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "l",
      210,
      36,
      250,
      36,
      {
       "w": 1
      }
     ],
     [
      "l",
      210,
      31,
      210,
      41,
      {
       "w": 1
      }
     ],
     [
      "l",
      250,
      31,
      250,
      41,
      {
       "w": 1
      }
     ],
     [
      "t",
      230,
      30,
      "2 mm",
      {
       "s": 13
      }
     ],
     [
      "l",
      110,
      146,
      150,
      146,
      {
       "w": 1
      }
     ],
     [
      "l",
      110,
      141,
      110,
      151,
      {
       "w": 1
      }
     ],
     [
      "l",
      150,
      141,
      150,
      151,
      {
       "w": 1
      }
     ],
     [
      "t",
      130,
      162,
      "pitch = ?",
      {
       "s": 13
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A robot pinches a 0.5 kg object between two flat fingertips with friction coefficient 0.5 and holds it against gravity. What is the minimum normal force per finger?",
   "options": [
    "About 1.2 N",
    "About 2.5 N",
    "About 4.9 N",
    "About 9.8 N"
   ],
   "answer": 2,
   "why": "Two contacts share the weight by friction: 2·μ·N ≥ m·g, so N ≥ 4.905/(2 × 0.5) = 4.9 N per finger.",
   "proof": [
    "Weight:  0.5 × 9.81 = 4.905 N, acting down.",
    "Each fingertip supplies friction up to μ·N. Two contacts:  2·μ·N ≥ m·g.",
    "N ≥ 4.905/(2 × 0.5) = 4.9 N.",
    "In practice use a safety factor of 1.5 to 2 and extra for acceleration:  N = m(g + a)/(2μ)."
   ],
   "proofTitle": "Whole-object force balance",
   "methods": [
    {
     "title": "Free body of one contact",
     "steps": [
      "By symmetry each finger carries half the weight in friction:  f = 2.45 N.",
      "No slip requires f ≤ μ·N, so N ≥ 2.45/0.5 = 4.9 N.",
      "This is the friction cone: the contact force must stay within the angle arctan μ = 26.6° of the surface normal.",
      "A tactile sensor that measures shear f and normal N lets the hand hold f/N just under μ, gripping gently without slipping."
     ]
    }
   ],
   "sketch": {
    "h": 190,
    "items": [
     [
      "r",
      120,
      30,
      50,
      130,
      {
       "f": 2
      }
     ],
     [
      "r",
      290,
      30,
      50,
      130,
      {
       "f": 2
      }
     ],
     [
      "r",
      170,
      50,
      120,
      90,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      90,
      "0.5 kg"
     ],
     [
      "a",
      70,
      95,
      116,
      95,
      {
       "a": 1
      }
     ],
     [
      "a",
      390,
      95,
      344,
      95,
      {
       "a": 1
      }
     ],
     [
      "t",
      70,
      82,
      "N = ?",
      {
       "an": "start",
       "a": 1
      }
     ],
     [
      "a",
      230,
      144,
      230,
      182
     ],
     [
      "t",
      240,
      176,
      "weight",
      {
       "an": "start",
       "s": 12
      }
     ],
     [
      "t",
      230,
      24,
      "μ = 0.5",
      {
       "s": 12
      }
     ]
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "Why is measuring shear force at the fingertip, as well as normal force, so valuable for manipulation?",
   "options": [
    "It lets the hand detect and prevent slip, and sense object weight and torque",
    "It makes the sensor cheaper",
    "It removes the need for calibration",
    "Shear is always larger than normal force"
   ],
   "answer": 0,
   "why": "Slip starts when tangential force reaches μ times normal force. Knowing both lets the controller keep the grip just above the slip limit, and tangential force tells it how heavy the object is and which way it is being pulled.",
   "proof": [
    "Coulomb friction: no slip while |F_t| ≤ μ·F_n.",
    "With only normal force, the hand cannot tell how close it is to slipping, so it must squeeze hard, which crushes fragile objects.",
    "With shear: monitor F_t/F_n and raise grip force as it approaches μ.",
    "Shear also shows load direction, object weight when lifting, and twisting about the contact.",
    "Incipient slip, where the edge of the contact slips first, shows up as vibration or a changing shear pattern. Humans use the same cues."
   ]
  },
  {
   "level": "Applied",
   "q": "A 16 × 16 tactile array is wired as a row-column matrix instead of giving every element its own wire. How many signal lines are needed, and what is the main drawback?",
   "options": [
    "256 lines, no drawback",
    "32 lines, but elements must be scanned and can suffer crosstalk",
    "16 lines, with slower response only",
    "2 lines, with no drawback"
   ],
   "answer": 1,
   "why": "A matrix needs rows + columns = 32 lines instead of 256. Elements are read one at a time, and current can leak through neighbouring elements, causing ghost readings unless the circuit guards against it.",
   "proof": [
    "Individual wiring:  16 × 16 = 256 signal lines (plus ground). Impractical through a finger joint.",
    "Matrix addressing:  16 row lines + 16 column lines = 32.",
    "Each element sits at a row-column crossing and is read by driving one row and sensing one column.",
    "Drawbacks: scan time grows with element count, and sneak paths through other elements create crosstalk. Fix with grounding or guarding of unselected lines, or a diode or transistor at each element.",
    "Alternative: put the readout chip in the fingertip and send data over a serial bus, so only a few wires cross the joints."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "l",
      110,
      40,
      350,
      40,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      110,
      62,
      350,
      62,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      110,
      84,
      350,
      84,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      110,
      106,
      350,
      106,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      110,
      128,
      350,
      128,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      110,
      150,
      350,
      150,
      {
       "w": 1.5
      }
     ],
     [
      "l",
      120,
      30,
      120,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "l",
      164,
      30,
      164,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "l",
      208,
      30,
      208,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "l",
      252,
      30,
      252,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "l",
      296,
      30,
      296,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "l",
      340,
      30,
      340,
      160,
      {
       "w": 1.5,
       "a": 1
      }
     ],
     [
      "c",
      120,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      120,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      120,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      120,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      120,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      120,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      164,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      208,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      252,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      296,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      40,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      62,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      84,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      106,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      128,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "c",
      340,
      150,
      3.5,
      {
       "f": 2
      }
     ],
     [
      "t",
      104,
      44,
      "rows",
      {
       "an": "end",
       "s": 12
      }
     ],
     [
      "t",
      230,
      176,
      "columns",
      {
       "s": 12,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A fingertip force sensor must resolve 0.01 N but the hand can hit things with over 100 N. How do you protect the sensor without losing sensitivity?",
   "options": [
    "Make the sensing element 10,000 times stiffer",
    "Remove the sensor before any impact",
    "Rely on software limits only",
    "Add a mechanical hard stop so that, beyond the working range, load bypasses the sensing element"
   ],
   "answer": 3,
   "why": "A sensitive element must deflect measurably under tiny loads, so it cannot also survive huge ones. A hard stop lets it deflect freely over its range, then closes a gap so the structure carries the overload.",
   "proof": [
    "Sensitivity needs a compliant element: measurable strain or gap change at 0.01 N.",
    "That same element would yield or tear at 100 N.",
    "Design a small clearance that closes at, say, 120% of full scale. After that, load passes through a stiff parallel path.",
    "The gap is small, so its tolerance stack and the stiffness of the stop matter.",
    "Stiffening the element instead would cut sensitivity in proportion. Software cannot react fast enough to an impact.",
    "The compliant skin also helps by spreading and slowing impact loads."
   ],
   "sketchAfter": {
    "h": 180,
    "items": [
     [
      "r",
      110,
      30,
      240,
      22,
      {
       "f": 1
      }
     ],
     [
      "r",
      190,
      52,
      80,
      34,
      {
       "f": 2
      }
     ],
     [
      "r",
      110,
      96,
      240,
      40,
      {
       "f": 1
      }
     ],
     [
      "r",
      120,
      58,
      50,
      32,
      {
       "f": 1
      }
     ],
     [
      "r",
      290,
      58,
      50,
      32,
      {
       "f": 1
      }
     ],
     [
      "l",
      176,
      90,
      176,
      96,
      {
       "a": 1,
       "w": 3
      }
     ],
     [
      "t",
      230,
      112,
      "small gap at each stop",
      {
       "s": 11,
       "a": 1
      }
     ],
     [
      "a",
      230,
      2,
      230,
      26,
      {
       "a": 1
      }
     ],
     [
      "t",
      240,
      12,
      "overload",
      {
       "an": "start",
       "a": 1,
       "s": 12
      }
     ],
     [
      "t",
      230,
      74,
      "sensor",
      {
       "s": 12
      }
     ],
     [
      "t",
      145,
      150,
      "hard stop",
      {
       "s": 12
      }
     ],
     [
      "t",
      315,
      150,
      "hard stop",
      {
       "s": 12
      }
     ],
     [
      "l",
      145,
      140,
      145,
      94,
      {
       "w": 1
      }
     ],
     [
      "l",
      315,
      140,
      315,
      94,
      {
       "w": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A soft hemispherical fingertip presses on a flat surface. As the force doubles, how does the contact area change (Hertz contact)?",
   "options": [
    "It doubles",
    "It quadruples",
    "It stays the same",
    "It grows by about 59%, as force to the 2/3 power"
   ],
   "answer": 3,
   "why": "For a sphere on a flat, contact radius goes as F^(1/3), so area goes as F^(2/3). 2^(2/3) = 1.59.",
   "proof": [
    "Hertz contact, sphere on flat:  contact radius a = (3·F·R/(4·E*))^(1/3).",
    "So a ∝ F^(1/3) and area π·a² ∝ F^(2/3).",
    "Doubling F:  area × 2^(2/3) = 1.59.",
    "Average pressure F/area ∝ F^(1/3), so it rises only 26%.",
    "For tactile sensing this means area is a nonlinear measure of force, and curved soft fingertips naturally spread load and gain grip as they press harder. Large soft deformations deviate from Hertz, so calibrate."
   ],
   "sketch": {
    "h": 180,
    "items": [
     [
      "h",
      90,
      140,
      370,
      140,
      1
     ],
     [
      "p",
      [
       [
        160,
        70
       ],
       [
        161.8,
        85.6
       ],
       [
        166.9,
        100.4
       ],
       [
        175.3,
        113.6
       ],
       [
        186.4,
        124.7
       ],
       [
        199.6,
        133.1
       ],
       [
        214.4,
        138.2
       ],
       [
        230,
        140
       ],
       [
        245.6,
        138.2
       ],
       [
        260.4,
        133.1
       ],
       [
        273.6,
        124.7
       ],
       [
        284.7,
        113.6
       ],
       [
        293.1,
        100.4
       ],
       [
        298.2,
        85.6
       ],
       [
        300,
        70
       ],
       [
        160,
        70
       ]
      ],
      {
       "close": 1,
       "f": 1
      }
     ],
     [
      "l",
      196,
      140,
      264,
      140,
      {
       "a": 1,
       "w": 5
      }
     ],
     [
      "a",
      230,
      6,
      230,
      50,
      {
       "a": 1
      }
     ],
     [
      "t",
      240,
      22,
      "F → 2F",
      {
       "an": "start",
       "a": 1
      }
     ],
     [
      "t",
      230,
      166,
      "contact area grows by?",
      {
       "s": 12
      }
     ]
    ]
   }
  }
 ]
});
