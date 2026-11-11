/* Topic: Mechatronics. Format: see data/beam-loading.js and data/shear-moment-diagrams.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "mechatronics",
 "title": "Mechatronics",
 "blurb": "Circuits, motors and drives, sensors and control: the electrical side that comes up for mechanical engineers on robotics, drive and battery teams.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A 12 V battery is connected across a 4 Ω resistor. What current flows, and how much power does the resistor dissipate?",
   "options": [
    "3 A and 36 W",
    "3 A and 12 W",
    "48 A and 576 W",
    "0.33 A and 4 W"
   ],
   "answer": 0,
   "why": "Ohm's law gives I = V/R = 12/4 = 3 A. Power is P = V·I = 12 × 3 = 36 W, all of it turned into heat in the resistor.",
   "proofTitle": "Ohm's law, then P = VI",
   "proof": [
    "Ohm's law: V = I·R, so I = V/R = 12/4 = 3 A.",
    "Power: P = V·I = 12 × 3 = 36 W.",
    "Check with the other two forms:  P = I²R = 9 × 4 = 36 W, and P = V²/R = 144/4 = 36 W.",
    "Mechanical analogy: voltage is like pressure, current like flow, resistance like a restriction in a pipe."
   ],
   "methods": [
    {
     "title": "Pick the power form that fits what you know",
     "steps": [
      "Know V and R: use P = V²/R = 144/4 = 36 W directly.",
      "Know I and R: use P = I²R. This is the one for wires and busbars, because the current is set by the load.",
      "Know V and I: use P = V·I."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate listed basic electrical questions based on Ohm's law among the topics asked.",
    "sources": [
     "ohms",
     "linckt"
    ]
   },
   "sketch": {
    "h": 170,
    "alt": "Battery connected across a resistor",
    "items": [
     [
      "l",
      120,
      30,
      340,
      30,
      {}
     ],
     [
      "p",
      [
       [
        200,
        30
       ],
       [
        208,
        30
       ],
       [
        213.33333333333334,
        23
       ],
       [
        224,
        37
       ],
       [
        234.66666666666666,
        23
       ],
       [
        245.33333333333331,
        37
       ],
       [
        256,
        23
       ],
       [
        266.6666666666667,
        37
       ],
       [
        272,
        30
       ],
       [
        280,
        30
       ]
      ]
     ],
     [
      "t",
      240,
      16,
      "4 Ω",
      {
       "s": 13
      }
     ],
     [
      "l",
      340,
      30,
      340,
      140,
      {}
     ],
     [
      "l",
      340,
      140,
      120,
      140,
      {}
     ],
     [
      "l",
      120,
      30,
      120,
      79,
      {}
     ],
     [
      "l",
      106,
      79,
      134,
      79,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      113,
      91,
      127,
      91,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      120,
      91,
      120,
      140,
      {}
     ],
     [
      "t",
      86,
      90,
      "12 V",
      {
       "s": 13,
       "an": "end"
      }
     ],
     [
      "t",
      140,
      75,
      "+",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "a",
      300,
      60,
      330,
      60,
      {
       "a": 1
      }
     ],
     [
      "t",
      300,
      80,
      "I = ?",
      {
       "s": 13,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Two 10 Ω resistors are in parallel, and that pair is in series with a 5 Ω resistor. What is the total resistance?",
   "options": [
    "25 Ω",
    "10 Ω",
    "3.3 Ω",
    "15 Ω"
   ],
   "answer": 1,
   "why": "Two equal resistors in parallel give half of one: 5 Ω. Add the 5 Ω in series for a total of 10 Ω.",
   "proof": [
    "Parallel:  1/R_p = 1/10 + 1/10 = 2/10, so R_p = 5 Ω.",
    "Shortcut for two in parallel: R_p = R₁R₂/(R₁ + R₂) = 100/20 = 5 Ω.",
    "Series resistances add:  R_total = 5 + 5 = 10 Ω.",
    "Sense check: a parallel combination is always smaller than its smallest member, a series one is always larger than its largest."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   },
   "sketch": {
    "h": 170,
    "alt": "Two 10 ohm resistors in parallel, in series with a 5 ohm resistor",
    "items": [
     [
      "l",
      40,
      85,
      90,
      85,
      {}
     ],
     [
      "l",
      90,
      45,
      90,
      125,
      {}
     ],
     [
      "l",
      90,
      45,
      130,
      45,
      {}
     ],
     [
      "p",
      [
       [
        130,
        45
       ],
       [
        138,
        45
       ],
       [
        145,
        38
       ],
       [
        159,
        52
       ],
       [
        173,
        38
       ],
       [
        187,
        52
       ],
       [
        201,
        38
       ],
       [
        215,
        52
       ],
       [
        222,
        45
       ],
       [
        230,
        45
       ]
      ]
     ],
     [
      "l",
      230,
      45,
      270,
      45,
      {}
     ],
     [
      "l",
      90,
      125,
      130,
      125,
      {}
     ],
     [
      "p",
      [
       [
        130,
        125
       ],
       [
        138,
        125
       ],
       [
        145,
        118
       ],
       [
        159,
        132
       ],
       [
        173,
        118
       ],
       [
        187,
        132
       ],
       [
        201,
        118
       ],
       [
        215,
        132
       ],
       [
        222,
        125
       ],
       [
        230,
        125
       ]
      ]
     ],
     [
      "l",
      230,
      125,
      270,
      125,
      {}
     ],
     [
      "l",
      270,
      45,
      270,
      125,
      {}
     ],
     [
      "l",
      270,
      85,
      300,
      85,
      {}
     ],
     [
      "p",
      [
       [
        300,
        85
       ],
       [
        308,
        85
       ],
       [
        315,
        78
       ],
       [
        329,
        92
       ],
       [
        343,
        78
       ],
       [
        357,
        92
       ],
       [
        371,
        78
       ],
       [
        385,
        92
       ],
       [
        392,
        85
       ],
       [
        400,
        85
       ]
      ]
     ],
     [
      "l",
      400,
      85,
      420,
      85,
      {}
     ],
     [
      "t",
      180,
      30,
      "10 Ω",
      {
       "s": 13
      }
     ],
     [
      "t",
      180,
      150,
      "10 Ω",
      {
       "s": 13
      }
     ],
     [
      "t",
      350,
      70,
      "5 Ω",
      {
       "s": 13
      }
     ],
     [
      "c",
      40,
      85,
      4,
      {
       "f": 2
      }
     ],
     [
      "c",
      420,
      85,
      4,
      {
       "f": 2
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A switch connects a 5 V supply to a 10 kΩ resistor in series with an uncharged 100 µF capacitor. About what is the capacitor voltage 1 second after the switch closes?",
   "options": [
    "5.0 V",
    "2.5 V",
    "1.8 V",
    "3.2 V"
   ],
   "answer": 3,
   "why": "The time constant is τ = RC = 10,000 × 0.0001 = 1 s. After one time constant a charging capacitor reaches 63% of the supply: about 3.2 V.",
   "proofTitle": "Time constant",
   "proof": [
    "τ = R·C = 10 × 10³ Ω × 100 × 10⁻⁶ F = 1.0 s.",
    "Charging from zero:  V(t) = V_s·(1 − e^(−t/τ)).",
    "At t = τ:  V = 5 × (1 − e⁻¹) = 5 × 0.632 = 3.16 V.",
    "Rules of thumb: 63% after 1τ, 86% after 2τ, 95% after 3τ, over 99% after 5τ.",
    "At the instant the switch closes the capacitor acts like a short: the current jumps to 5 V/10 kΩ = 0.5 mA, then decays."
   ],
   "methods": [
    {
     "title": "Same maths as a thermal mass",
     "steps": [
      "A part with thermal resistance R to ambient and heat capacity C warms the same way: ΔT(t) = ΔT_final·(1 − e^(−t/RC)).",
      "So a heated block reaches 63% of its final temperature rise after one time constant too.",
      "One first-order equation covers circuits, lumped heating and a damper with a spring."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported a timed-test question on the voltage in a circuit after closing a switch. An RC circuit also appears in a video series of Tesla MDE interview questions.",
    "sources": [
     "switch",
     "rcvid"
    ]
   },
   "sketch": {
    "h": 180,
    "alt": "RC circuit with a switch",
    "items": [
     [
      "l",
      80,
      40,
      80,
      89,
      {}
     ],
     [
      "l",
      66,
      89,
      94,
      89,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      73,
      101,
      87,
      101,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      80,
      101,
      80,
      150,
      {}
     ],
     [
      "t",
      46,
      100,
      "5 V",
      {
       "s": 13,
       "an": "end"
      }
     ],
     [
      "t",
      100,
      85,
      "+",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "l",
      80,
      40,
      140,
      40,
      {}
     ],
     [
      "l",
      140,
      40,
      176,
      26,
      {
       "w": 2
      }
     ],
     [
      "c",
      140,
      40,
      3,
      {
       "f": 2
      }
     ],
     [
      "c",
      180,
      40,
      3,
      {
       "f": 2
      }
     ],
     [
      "l",
      180,
      40,
      200,
      40,
      {}
     ],
     [
      "p",
      [
       [
        200,
        40
       ],
       [
        208,
        40
       ],
       [
        214.16666666666666,
        33
       ],
       [
        226.5,
        47
       ],
       [
        238.83333333333334,
        33
       ],
       [
        251.16666666666669,
        47
       ],
       [
        263.5,
        33
       ],
       [
        275.83333333333337,
        47
       ],
       [
        282,
        40
       ],
       [
        290,
        40
       ]
      ]
     ],
     [
      "t",
      245,
      24,
      "10 kΩ",
      {
       "s": 13
      }
     ],
     [
      "l",
      290,
      40,
      360,
      40,
      {}
     ],
     [
      "l",
      360,
      40,
      360,
      90,
      {}
     ],
     [
      "l",
      346,
      90,
      374,
      90,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      346,
      100,
      374,
      100,
      {
       "w": 2.5
      }
     ],
     [
      "l",
      360,
      100,
      360,
      150,
      {}
     ],
     [
      "t",
      384,
      100,
      "100 µF",
      {
       "s": 13,
       "an": "start"
      }
     ],
     [
      "l",
      360,
      150,
      80,
      150,
      {}
     ],
     [
      "t",
      158,
      64,
      "switch",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A wire carrying current I settles 20 °C above ambient. The current is doubled and the cooling is unchanged. Roughly what is the new temperature rise?",
   "options": [
    "About 40 °C",
    "About 80 °C, a little more in practice",
    "About 28 °C",
    "About 20 °C, the wire's resistance does not change"
   ],
   "answer": 1,
   "why": "Heating is I²R, so doubling the current gives four times the heat. With the same cooling the temperature rise scales with heat: 4 × 20 = 80 °C. Copper's resistance also climbs as it warms, so the real figure is somewhat higher.",
   "proof": [
    "Heat generated:  Q = I²·R.",
    "Steady state: heat in = heat out = h·A·ΔT, so ΔT = I²R/(hA).",
    "Double I:  ΔT goes up by 2² = 4, to 80 °C.",
    "Copper's resistance rises about 0.4% per °C. Going from 20 to 80 °C above ambient adds roughly 24% more resistance, so more heat again.",
    "This is why wires and busbars are rated by current, and why a small undersizing causes a large temperature rise."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported a timed-test question on the surface temperature of a current-carrying wire.",
    "sources": [
     "switch"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A small capacitor is connected between a circuit's supply rail and its ground rail, right next to a chip. What is it for?",
   "options": [
    "It raises the supply voltage",
    "It blocks DC current to the chip",
    "It stores a local charge that supplies fast current spikes and shunts noise to ground",
    "It protects against reverse polarity"
   ],
   "answer": 2,
   "why": "This is a decoupling capacitor. When the chip suddenly draws current, the long supply wires cannot respond instantly, so the nearby capacitor supplies it. High-frequency noise also finds a low-impedance path through it to ground instead of through the chip.",
   "proof": [
    "A capacitor resists changes in voltage: i = C·dV/dt.",
    "Supply wiring has inductance, which resists fast changes in current. A sudden demand would make the rail voltage dip.",
    "A capacitor right at the chip is a local reservoir that covers the spike while the main supply catches up.",
    "Its impedance, 1/(2πfC), is low at high frequency, so noise is shunted to ground.",
    "Placement matters: a decoupling capacitor far from the chip has extra wire inductance in series and does little."
   ],
   "reported": {
    "kind": "question",
    "note": "A Battery Engineer candidate reported being asked how a capacitor would affect a ground rail.",
    "sources": [
     "caprail"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A motor turns at 12,000 rpm and produces 300 N·m. A 9:1 reduction gearbox drives the wheels. Ignoring losses, what speed and torque reach the wheels?",
   "options": [
    "1,333 rpm and 2,700 N·m",
    "108,000 rpm and 33 N·m",
    "1,333 rpm and 33 N·m",
    "12,000 rpm and 2,700 N·m"
   ],
   "answer": 0,
   "why": "A reduction divides speed and multiplies torque by the same ratio, so power is unchanged. 12,000/9 = 1,333 rpm and 300 × 9 = 2,700 N·m.",
   "proofTitle": "Ratio on speed and torque",
   "proof": [
    "Speed:  n_out = n_in/N = 12,000/9 = 1,333 rpm.",
    "Torque:  T_out = T_in·N = 300 × 9 = 2,700 N·m (ideal, no losses).",
    "Power check:  P = T·ω.  In: 300 × (12,000 × 2π/60) = 377 kW.  Out: 2,700 × (1,333 × 2π/60) = 377 kW. ✓",
    "A real gearbox loses a few percent, so the output torque would be slightly lower, about 2,600 N·m at 97% efficiency.",
    "On a car: a high ratio gives strong acceleration but caps top speed at the motor's maximum rpm. That is the trade-off when choosing the final drive."
   ],
   "methods": [
    {
     "title": "Power is conserved",
     "steps": [
      "P_in = P_out (ideal), so T_in·ω_in = T_out·ω_out.",
      "ω_out = ω_in/9, therefore T_out = 9·T_in.",
      "You only need to remember one ratio; the other follows from power."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineering Intern candidate reported being asked to describe the relationship between gear ratio and speed and how it applies to vehicles.",
    "sources": [
     "gearratio"
    ]
   },
   "sketch": {
    "h": 180,
    "alt": "Small pinion driving a large gear",
    "items": [
     [
      "c",
      168,
      80,
      22,
      {
       "f": 1
      }
     ],
     [
      "c",
      260,
      80,
      70,
      {
       "f": 1
      }
     ],
     [
      "t",
      168,
      85,
      "motor",
      {
       "s": 12
      }
     ],
     [
      "t",
      260,
      85,
      "wheel gear",
      {
       "s": 13
      }
     ],
     [
      "t",
      168,
      130,
      "pinion",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      260,
      172,
      "9 times the teeth",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A car's wheels are 0.7 m in diameter and turn at 1,333 rpm. About how fast is the car going?",
   "options": [
    "About 49 km/h",
    "About 176 km/h",
    "About 98 km/h",
    "About 293 km/h"
   ],
   "answer": 1,
   "why": "Each turn moves the car one circumference, π × 0.7 = 2.2 m. At 1,333 rpm that is 2,932 m per minute, or 48.9 m/s, about 176 km/h.",
   "proof": [
    "Distance per turn:  πd = π × 0.7 = 2.199 m.",
    "Turns per second:  1,333/60 = 22.2.",
    "Speed:  2.199 × 22.2 = 48.9 m/s.",
    "Convert:  48.9 × 3.6 = 176 km/h (about 109 mph).",
    "Ignores tyre slip and the slightly smaller rolling radius of a loaded tyre."
   ],
   "reported": {
    "kind": "topic",
    "note": "A candidate reported being asked how gear ratio and speed apply to vehicles. This exact calculation was not reported.",
    "sources": [
     "gearratio"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A brushed DC motor's torque falls in a straight line from stall torque at zero speed to zero at no-load speed. At what speed does it deliver the most mechanical power?",
   "options": [
    "At stall",
    "At no-load speed",
    "At 70% of no-load speed",
    "At half the no-load speed"
   ],
   "answer": 3,
   "why": "Power is torque times speed. With a straight-line torque curve, T·ω is a parabola that is zero at both ends and peaks in the middle: half speed, half torque, a quarter of stall torque × no-load speed.",
   "proof": [
    "T(ω) = T_s·(1 − ω/ω₀).",
    "P(ω) = T·ω = T_s·ω·(1 − ω/ω₀).",
    "dP/dω = T_s·(1 − 2ω/ω₀) = 0  ⇒  ω = ω₀/2.",
    "P_max = T_s·(ω₀/2)·(1/2) = T_s·ω₀/4.",
    "Efficiency peaks closer to no-load speed, so motors are usually run there for continuous duty and only pushed toward half speed for short bursts."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   },
   "given": [
    {
     "t": "Torque and power against speed",
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
       "text": "stall torque"
      },
      {
       "x": 0.86,
       "text": "no-load speed"
      }
     ]
    },
    {
     "t": "Mechanical power P = T·ω",
     "pts": [
      [
       0,
       0
      ],
      [
       0.05,
       0.19
      ],
      [
       0.1,
       0.36
      ],
      [
       0.15,
       0.51
      ],
      [
       0.2,
       0.64
      ],
      [
       0.25,
       0.75
      ],
      [
       0.3,
       0.84
      ],
      [
       0.35,
       0.91
      ],
      [
       0.4,
       0.96
      ],
      [
       0.45,
       0.99
      ],
      [
       0.5,
       1
      ],
      [
       0.55,
       0.99
      ],
      [
       0.6,
       0.96
      ],
      [
       0.65,
       0.91
      ],
      [
       0.7,
       0.84
      ],
      [
       0.75,
       0.75
      ],
      [
       0.8,
       0.64
      ],
      [
       0.85,
       0.51
      ],
      [
       0.9,
       0.36
      ],
      [
       0.95,
       0.19
      ],
      [
       1,
       0
      ]
     ]
    }
   ]
  },
  {
   "level": "Applied",
   "q": "A DC motor has a winding resistance of 0.5 Ω and runs from 24 V. At its working speed its back-EMF is 22 V. What current does it draw, and what would it draw if the shaft were stalled?",
   "options": [
    "4 A running, 48 A stalled",
    "48 A running, 4 A stalled",
    "4 A in both cases",
    "44 A running, 48 A stalled"
   ],
   "answer": 0,
   "why": "Only the difference between the supply and the back-EMF drives current through the winding: (24 − 22)/0.5 = 4 A. Stalled, there is no back-EMF, so the full 24 V is across 0.5 Ω: 48 A.",
   "proof": [
    "A spinning motor acts as a generator, producing a back-EMF proportional to speed:  E = k·ω.",
    "Winding current:  I = (V − E)/R.",
    "Running:  (24 − 22)/0.5 = 4 A.",
    "Stalled (ω = 0, E = 0):  24/0.5 = 48 A. Heat in the winding is I²R = 1,150 W.",
    "This is why a jammed motor burns out, and why motor drives limit current at start-up."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Why is a diode fitted across the coil of a relay or solenoid that a transistor switches off?",
   "options": [
    "To make the coil switch on faster",
    "To give the coil current a path when the transistor turns off, preventing a large voltage spike",
    "To stop the coil drawing current from the supply",
    "To convert the coil's AC to DC"
   ],
   "answer": 1,
   "why": "A coil is an inductor, and an inductor fights any sudden change in current. When the transistor opens, the coil drives its voltage up until current can flow, which can be hundreds of volts. The flyback diode lets the current circulate and die away safely.",
   "proof": [
    "Inductor law:  V = L·di/dt.",
    "Switching off makes di/dt huge and negative, so V spikes, easily to hundreds of volts.",
    "That spike appears across the transistor and can destroy it.",
    "The diode is fitted reverse-biased in normal running, so it does nothing. At switch-off it conducts and the current decays through the coil and diode loop.",
    "Trade-off: the relay releases a little more slowly. A diode with a zener in series speeds it up."
   ],
   "reported": {
    "kind": "topic",
    "note": "A candidate reported questions on electrical components in a Tesla mechanical screening round. This exact question was not reported.",
    "sources": [
     "fastelec"
    ]
   },
   "sketch": {
    "h": 180,
    "alt": "Relay coil with a flyback diode across it, switched by a transistor",
    "items": [
     [
      "l",
      150,
      20,
      150,
      50,
      {}
     ],
     [
      "l",
      310,
      20,
      310,
      50,
      {}
     ],
     [
      "l",
      150,
      20,
      310,
      20,
      {}
     ],
     [
      "t",
      230,
      14,
      "+12 V",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      130,
      50,
      40,
      70,
      {
       "f": 1
      }
     ],
     [
      "t",
      150,
      90,
      "coil",
      {
       "s": 12
      }
     ],
     [
      "l",
      150,
      120,
      150,
      150,
      {}
     ],
     [
      "l",
      310,
      50,
      310,
      75,
      {}
     ],
     [
      "p",
      [
       [
        296,
        75
       ],
       [
        324,
        75
       ],
       [
        310,
        95
       ]
      ],
      {
       "close": 1,
       "a": 1,
       "f": 2
      }
     ],
     [
      "l",
      296,
      95,
      324,
      95,
      {
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "l",
      310,
      95,
      310,
      150,
      {}
     ],
     [
      "l",
      150,
      150,
      310,
      150,
      {}
     ],
     [
      "t",
      360,
      90,
      "diode",
      {
       "s": 12,
       "an": "start",
       "a": 1
      }
     ],
     [
      "l",
      150,
      150,
      150,
      165,
      {}
     ],
     [
      "r",
      130,
      160,
      40,
      14,
      {
       "f": 2
      }
     ],
     [
      "t",
      205,
      172,
      "transistor",
      {
       "s": 12,
       "an": "start"
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A 12 V supply drives a motor through PWM at a 25% duty cycle. What average voltage does the motor see?",
   "options": [
    "9 V",
    "12 V",
    "3 V",
    "0.25 V"
   ],
   "answer": 2,
   "why": "PWM switches fully on and fully off very fast. The average is the supply times the fraction of time it is on: 12 × 0.25 = 3 V. The motor's inductance and inertia smooth the pulses.",
   "proof": [
    "Duty cycle D = on-time / period = 0.25.",
    "Average voltage = D × V_supply = 0.25 × 12 = 3 V.",
    "The transistor is either fully on (low voltage across it) or fully off (no current), so it wastes very little power. A resistor dropping 9 V would waste most of the energy as heat.",
    "The switching frequency is chosen well above what the motor can follow, typically 10 to 30 kHz, which also keeps it above hearing."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   },
   "given": [
    {
     "t": "Supply voltage against time",
     "pts": [
      [
       0,
       0
      ],
      [
       0,
       1
      ],
      [
       0.0625,
       1
      ],
      [
       0.0625,
       0
      ],
      [
       0.25,
       0
      ],
      [
       0.25,
       1
      ],
      [
       0.3125,
       1
      ],
      [
       0.3125,
       0
      ],
      [
       0.5,
       0
      ],
      [
       0.5,
       1
      ],
      [
       0.5625,
       1
      ],
      [
       0.5625,
       0
      ],
      [
       0.75,
       0
      ],
      [
       0.75,
       1
      ],
      [
       0.8125,
       1
      ],
      [
       0.8125,
       0
      ],
      [
       1,
       0
      ]
     ],
     "notes": [
      {
       "x": 0.03,
       "text": "12 V"
      }
     ]
    }
   ]
  },
  {
   "level": "Fundamental",
   "q": "What does an H-bridge let a controller do with a brushed DC motor?",
   "options": [
    "Run it in either direction from a single supply",
    "Double its maximum speed",
    "Turn it into a stepper motor",
    "Measure its position"
   ],
   "answer": 0,
   "why": "Four switches arranged in an H connect each motor terminal to either the supply or ground. Closing one diagonal pair pushes current one way, the other pair reverses it.",
   "proof": [
    "Switches S1 and S4 on: current flows left to right through the motor, so it turns forward.",
    "Switches S2 and S3 on: current reverses, so the motor turns backward.",
    "Both low-side switches on: the motor terminals are shorted together, which brakes it.",
    "Never turn on both switches on the same side: that shorts the supply to ground (shoot-through). Drivers add a short dead time to prevent it.",
    "Combined with PWM on the switches, the H-bridge gives both speed and direction control."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   },
   "sketch": {
    "h": 190,
    "alt": "H-bridge with four switches around a motor",
    "items": [
     [
      "l",
      80,
      20,
      380,
      20,
      {}
     ],
     [
      "l",
      80,
      170,
      380,
      170,
      {}
     ],
     [
      "t",
      230,
      14,
      "+V",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      186,
      "ground",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "l",
      120,
      20,
      120,
      170,
      {}
     ],
     [
      "l",
      340,
      20,
      340,
      170,
      {}
     ],
     [
      "r",
      105,
      42,
      30,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      120,
      62,
      "S1",
      {
       "s": 12
      }
     ],
     [
      "r",
      325,
      42,
      30,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      340,
      62,
      "S2",
      {
       "s": 12
      }
     ],
     [
      "r",
      105,
      118,
      30,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      120,
      138,
      "S3",
      {
       "s": 12
      }
     ],
     [
      "r",
      325,
      118,
      30,
      30,
      {
       "f": "s"
      }
     ],
     [
      "t",
      340,
      138,
      "S4",
      {
       "s": 12
      }
     ],
     [
      "l",
      120,
      95,
      205,
      95,
      {}
     ],
     [
      "l",
      255,
      95,
      340,
      95,
      {}
     ],
     [
      "c",
      230,
      95,
      25,
      {
       "f": 2
      }
     ],
     [
      "t",
      230,
      100,
      "M",
      {
       "s": 13
      }
     ],
     [
      "a",
      150,
      85,
      200,
      85,
      {
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A motor has a 1,024-line incremental encoder read in quadrature. What is the smallest angle it can resolve?",
   "options": [
    "About 0.35°",
    "About 0.09°",
    "About 1°",
    "About 0.18°"
   ],
   "answer": 1,
   "why": "Quadrature uses two channels 90° out of phase and counts every edge of both, which is four counts per line: 4,096 counts per turn. 360/4,096 = 0.088°.",
   "proof": [
    "Two channels, A and B, each with 1,024 pulses per turn, offset by a quarter of a pulse.",
    "Counting rising and falling edges on both gives 4 counts per line:  4 × 1,024 = 4,096 counts per turn.",
    "Resolution:  360°/4,096 = 0.088°.",
    "The phase order (A leads B, or B leads A) also gives the direction of rotation.",
    "After a 10:1 gearbox, the output resolution is ten times finer, 0.0088°, though gear backlash may be larger than that."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "You are choosing between a stepper motor run open loop and a servo motor with an encoder for a positioning axis. What is the main risk with the stepper?",
   "options": [
    "It cannot hold position when stopped",
    "It cannot run at low speed",
    "If the load exceeds its torque it skips steps, and the controller never knows",
    "It needs a gearbox to move at all"
   ],
   "answer": 2,
   "why": "An open-loop stepper only counts the steps it was told to take. If it stalls or skips under load, the controller still believes it is in the commanded position, and every later move is off by the lost steps.",
   "proof": [
    "A stepper moves a fixed angle per pulse, often 1.8° (200 steps per turn), so position is known only by counting commands.",
    "Torque falls off quickly with speed. A fast move or a heavy load can make it slip a step.",
    "With no feedback the error is invisible until something crashes or a part is wrong. A homing switch at start-up limits the damage.",
    "A servo measures its actual position and corrects it, so it can run closer to its limits and report a fault if it falls behind.",
    "Steppers win on cost and simplicity, and hold well at rest. Size them with a 2× torque margin, or add an encoder (closed-loop stepper)."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported questions on open-loop and closed-loop control. This exact question was not reported.",
    "sources": [
     "loopctl"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Which of these is a closed-loop control system?",
   "options": [
    "A toaster that runs for a set time",
    "A washing machine on a fixed cycle",
    "A stepper motor driven by a fixed pulse count",
    "Cruise control that adjusts the throttle using measured speed"
   ],
   "answer": 3,
   "why": "A closed-loop system measures the output and uses the error from the target to adjust the input. Cruise control compares measured speed with the set speed and changes the throttle. The others run a fixed program regardless of the result.",
   "proof": [
    "Open loop: input → plant → output. No measurement of the output, so disturbances go uncorrected (a toaster burns thick bread and underdoes thin).",
    "Closed loop: a sensor measures the output, the controller compares it with the setpoint, and the error drives the actuator.",
    "Cruise control: a hill slows the car, measured speed drops, the error grows, and the throttle opens.",
    "Closed loop rejects disturbances and copes with changes in the plant, but it costs a sensor and can oscillate if the gains are too high."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported being asked to describe open-loop and closed-loop control systems.",
    "sources": [
     "loopctl"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A proportional-only temperature controller settles a few degrees below its setpoint. Which term, added to make it PI or PID, removes that steady error?",
   "options": [
    "The derivative term",
    "A larger proportional gain alone",
    "The integral term",
    "A low-pass filter on the sensor"
   ],
   "answer": 2,
   "why": "A proportional controller needs some error to produce any output, so it settles where the error is just big enough to balance the load. The integral term keeps growing while any error remains, so it pushes the output until the error is zero.",
   "proof": [
    "P only:  u = K_p·e. To hold the heater at, say, 40% power, e must equal 0.4/K_p, so there is always an offset.",
    "Raising K_p shrinks the offset but makes the loop more prone to overshoot and oscillation.",
    "Integral:  u = K_p·e + K_i·∫e dt. The integral accumulates as long as e ≠ 0 and stops changing only when e = 0.",
    "Derivative (K_d·de/dt) reacts to how fast the error is changing. It damps overshoot but does not remove offset.",
    "Watch for integral windup: if the actuator saturates, the integral keeps growing and causes a big overshoot. Clamp it."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported questions on open-loop and closed-loop control. This exact question was not reported.",
    "sources": [
     "loopctl"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A strain gauge with gauge factor 2 is wired in a quarter Wheatstone bridge excited at 5 V. The part sees 500 microstrain. About what is the bridge output?",
   "options": [
    "About 5 mV",
    "About 1.25 mV",
    "About 0.5 V",
    "About 2.5 mV"
   ],
   "answer": 1,
   "why": "The gauge's resistance changes by GF × strain = 2 × 0.0005 = 0.1%. A quarter bridge outputs about V × (ΔR/R)/4 = 5 × 0.001/4 = 1.25 mV.",
   "proof": [
    "Gauge factor:  ΔR/R = GF·ε = 2 × 500 × 10⁻⁶ = 0.001.",
    "Quarter bridge (one active gauge, three fixed resistors):  V_out ≈ V_ex·(ΔR/R)/4.",
    "V_out ≈ 5 × 0.001/4 = 1.25 mV.",
    "That is tiny, which is why bridges feed an instrumentation amplifier.",
    "A half bridge with two active gauges doubles the output and cancels temperature drift. A full bridge with four gives four times the output."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates report basic electrical and circuit questions in Tesla mechanical interviews and timed tests. This exact question was not reported.",
    "sources": [
     "ohms",
     "recontest",
     "linckt"
    ]
   },
   "sketch": {
    "h": 200,
    "alt": "Wheatstone bridge with one strain gauge",
    "items": [
     [
      "p",
      [
       [
        230,
        20
       ],
       [
        330,
        100
       ],
       [
        230,
        180
       ],
       [
        130,
        100
       ],
       [
        230,
        20
       ]
      ]
     ],
     [
      "r",
      158,
      40,
      26,
      26,
      {
       "f": "s",
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "t",
      120,
      48,
      "gauge",
      {
       "s": 12,
       "an": "end",
       "a": 1
      }
     ],
     [
      "r",
      277,
      40,
      26,
      26,
      {
       "f": "s"
      }
     ],
     [
      "r",
      158,
      134,
      26,
      26,
      {
       "f": "s"
      }
     ],
     [
      "r",
      277,
      134,
      26,
      26,
      {
       "f": "s"
      }
     ],
     [
      "c",
      130,
      100,
      4,
      {
       "f": 2
      }
     ],
     [
      "c",
      330,
      100,
      4,
      {
       "f": 2
      }
     ],
     [
      "t",
      100,
      105,
      "V_out −",
      {
       "s": 12,
       "an": "end"
      }
     ],
     [
      "t",
      360,
      105,
      "V_out +",
      {
       "s": 12,
       "an": "start"
      }
     ],
     [
      "t",
      230,
      14,
      "+5 V",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      196,
      "0 V",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "What happens when you squeeze a piezoelectric crystal and then hold the force constant?",
   "options": [
    "It produces a steady voltage for as long as the force is held",
    "Its resistance drops in proportion to the force",
    "It gets hot and expands",
    "It produces a burst of charge that leaks away while the force is held"
   ],
   "answer": 3,
   "why": "Stress shifts the charge centres in the crystal lattice, so a change in force produces charge on its faces. With the force held steady no new charge is made, and what was produced leaks away through the circuit.",
   "proof": [
    "Piezoelectric materials (quartz, PZT) have crystal structures with no centre of symmetry.",
    "Strain moves the positive and negative charge centres apart, so a voltage appears across the faces: the direct piezoelectric effect.",
    "Charge generated is proportional to the change in force. Hold the force and the charge bleeds off through the finite input resistance.",
    "So piezo sensors are excellent for vibration, impact and slip, but cannot measure a static load. Use a strain gauge or capacitive sensor for that.",
    "The effect also works backwards: apply a voltage and the crystal deforms, which drives buzzers, ultrasonic transducers and precision actuators."
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Engineer Intern candidate reported being asked how a piezoelectric material works.",
    "sources": [
     "piezo"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A battery pack uses cells of 3.6 V and 5 Ah, arranged 96 in series and 4 in parallel (96s4p). What are the pack's nominal voltage and energy?",
   "options": [
    "14.4 V and 6.9 kWh",
    "345.6 V and 6.9 kWh",
    "345.6 V and 1.7 kWh",
    "1,382 V and 27.6 kWh"
   ],
   "answer": 1,
   "why": "Series adds voltage: 96 × 3.6 = 345.6 V. Parallel adds capacity: 4 × 5 = 20 Ah. Energy is voltage times capacity: 345.6 × 20 = 6.9 kWh, which is just 384 cells × 18 Wh each.",
   "proofTitle": "Series and parallel",
   "proof": [
    "Series adds voltage:  96 × 3.6 = 345.6 V.",
    "Parallel adds capacity:  4 × 5 Ah = 20 Ah.",
    "Energy:  345.6 V × 20 Ah = 6,912 Wh = 6.9 kWh.",
    "Current is shared by the 4 parallel cells, so a 100 A pack current means 25 A per cell.",
    "Total cells: 96 × 4 = 384."
   ],
   "methods": [
    {
     "title": "Count the cells",
     "steps": [
      "Energy does not depend on the arrangement, only on how many cells there are.",
      "One cell:  3.6 V × 5 Ah = 18 Wh.",
      "384 cells × 18 Wh = 6.9 kWh.",
      "The arrangement only sets the voltage and current: more series for higher voltage, more parallel for more current."
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates on battery and pack teams reported questions on pack design and cell packing. This exact question was not reported.",
    "sources": [
     "pack"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "On a high-voltage busbar assembly, what is the difference between clearance and creepage?",
   "options": [
    "Clearance is the shortest distance through air; creepage is the shortest distance along an insulating surface",
    "Clearance is between parts that move; creepage is between fixed parts",
    "They are two names for the same distance",
    "Clearance is along the surface; creepage is through air"
   ],
   "answer": 0,
   "why": "Clearance guards against an arc jumping straight through the air. Creepage guards against current tracking slowly across a surface, helped by dust and moisture. Creepage is always at least as long as clearance, and a rib or groove in the insulator adds creepage without moving the parts apart.",
   "proof": [
    "Clearance: the straight-line air gap between two conductors. Set mainly by the peak voltage and altitude (thinner air arcs more easily).",
    "Creepage: the path along the surface of the insulation between them. Set by working voltage, pollution degree and the material's tracking resistance (its CTI).",
    "Adding a rib or slot to the insulator lengthens the surface path, so it raises creepage while keeping the parts compact.",
    "Both come from standards such as IEC 60664, and an HV design review checks both.",
    "In packs, condensation and debris shrink the effective creepage over time, so designs keep margin."
   ],
   "reported": {
    "kind": "topic",
    "note": "A Blind answer on Tesla mechanical design interviews advised reviewing creepage and clearance guidelines for high-voltage teams. This exact question was not reported.",
    "sources": [
     "creepage"
    ]
   },
   "sketch": {
    "h": 160,
    "alt": "Two busbars on an insulator with a rib: clearance is through the air, creepage is along the surface",
    "items": [
     [
      "r",
      60,
      90,
      340,
      26,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      108,
      "insulator",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      90,
      60,
      70,
      30,
      {
       "f": 2
      }
     ],
     [
      "r",
      300,
      60,
      70,
      30,
      {
       "f": 2
      }
     ],
     [
      "r",
      222,
      60,
      16,
      30,
      {
       "f": 1
      }
     ],
     [
      "l",
      160,
      52,
      300,
      52,
      {
       "a": 1,
       "d": 1
      }
     ],
     [
      "t",
      230,
      40,
      "clearance (through air)",
      {
       "s": 12,
       "a": 1
      }
     ],
     [
      "p",
      [
       [
        160,
        88
       ],
       [
        220,
        88
       ],
       [
        220,
        58
       ],
       [
        240,
        58
       ],
       [
        240,
        88
       ],
       [
        300,
        88
       ]
      ],
      {
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "t",
      230,
      142,
      "creepage (along the surface, over the rib)",
      {
       "s": 12,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A robot arm joint must hold a 2 kg payload at 0.5 m out, horizontally. It is driven through a 100:1 gearbox that is 90% efficient. Ignoring the arm's own weight, what torque must the motor supply to hold it?",
   "options": [
    "About 0.11 N·m",
    "About 9.8 N·m",
    "About 0.098 N·m",
    "About 0.98 N·m"
   ],
   "answer": 0,
   "why": "The joint needs m·g·r = 2 × 9.81 × 0.5 = 9.81 N·m. The gearbox multiplies motor torque by 100 but loses 10%, so the motor supplies 9.81/(100 × 0.9) = 0.109 N·m.",
   "proof": [
    "Joint torque from gravity:  T = m·g·r = 2 × 9.81 × 0.5 = 9.81 N·m (largest when the arm is horizontal).",
    "Ideal gearbox:  T_motor = T_joint/N = 9.81/100 = 0.098 N·m.",
    "With 90% efficiency the motor must make up the loss:  0.098/0.9 = 0.109 N·m.",
    "Holding a load uses current continuously, so the motor heats even though nothing moves. Check the motor's continuous (not peak) torque rating, or add a brake.",
    "In practice add the arm's own weight at its centre of mass, and the torque needed to accelerate the load."
   ],
   "reported": {
    "kind": "topic",
    "note": "A Robotics Engineer candidate reported questions on dynamics, controller design, stability and robot hardware. This exact question was not reported.",
    "sources": [
     "robeng"
    ]
   },
   "sketch": {
    "h": 160,
    "alt": "Robot arm holding a payload horizontally from a geared joint",
    "items": [
     [
      "c",
      90,
      70,
      18,
      {
       "f": 2
      }
     ],
     [
      "t",
      90,
      112,
      "joint",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      90,
      130,
      "100:1",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      108,
      64,
      240,
      12,
      {
       "f": 1
      }
     ],
     [
      "r",
      348,
      58,
      36,
      36,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "t",
      366,
      82,
      "2 kg",
      {
       "s": 12
      }
     ],
     [
      "a",
      366,
      98,
      366,
      136,
      {
       "a": 1
      }
     ],
     [
      "t",
      366,
      152,
      "mg",
      {
       "s": 12,
       "a": 1
      }
     ],
     [
      "l",
      90,
      40,
      366,
      40,
      {
       "w": 1,
       "m": 1
      }
     ],
     [
      "t",
      228,
      32,
      "0.5 m",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A planar two-link arm has two 0.3 m links. To reach a point 0.42 m from the shoulder, what angle must the elbow make between the two links?",
   "options": [
    "About 45°",
    "About 135°",
    "About 90°",
    "About 180°"
   ],
   "answer": 2,
   "why": "The two links and the line to the target form a triangle with sides 0.3, 0.3 and 0.42. The law of cosines gives the angle between the links: cos θ = (0.09 + 0.09 − 0.176)/0.18 = 0.02, so θ ≈ 89°.",
   "proof": [
    "Triangle: shoulder, elbow, target. Sides L₁ = 0.3, L₂ = 0.3, d = 0.42 m.",
    "Law of cosines for the angle θ between the links:  d² = L₁² + L₂² − 2·L₁·L₂·cos θ.",
    "0.1764 = 0.09 + 0.09 − 0.18·cos θ  ⇒  cos θ = 0.0036/0.18 = 0.02.",
    "θ = 88.9°, about 90°. (0.42 ≈ 0.3·√2, which is the right-angle case.)",
    "There are two solutions, elbow up and elbow down, with the same elbow angle. The shoulder angle is then found from the same triangle. This is the core of an inverse kinematics solver."
   ],
   "reported": {
    "kind": "question",
    "note": "A Robotics Intern candidate reported being asked to create an inverse kinematics solver. This question is the two-link core of that problem.",
    "sources": [
     "ikintern"
    ]
   },
   "sketch": {
    "h": 170,
    "alt": "Two-link arm reaching a target",
    "items": [
     [
      "c",
      80,
      140,
      7,
      {
       "f": 2
      }
     ],
     [
      "l",
      80,
      140,
      230,
      40,
      {
       "w": 3
      }
     ],
     [
      "c",
      230,
      40,
      6,
      {
       "f": 2
      }
     ],
     [
      "l",
      230,
      40,
      380,
      140,
      {
       "w": 3
      }
     ],
     [
      "c",
      380,
      140,
      6,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "l",
      80,
      140,
      380,
      140,
      {
       "d": 1,
       "m": 1
      }
     ],
     [
      "t",
      140,
      82,
      "0.3 m",
      {
       "s": 12
      }
     ],
     [
      "t",
      320,
      82,
      "0.3 m",
      {
       "s": 12
      }
     ],
     [
      "t",
      230,
      160,
      "0.42 m to target",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      72,
      "θ = ?",
      {
       "s": 13,
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "You raise the proportional gain on a robot joint's position loop to make it faster. Now it overshoots and rings after every step. What is the usual fix?",
   "options": [
    "Raise the proportional gain further",
    "Add or increase derivative gain to add damping",
    "Add more integral gain",
    "Lower the encoder resolution"
   ],
   "answer": 1,
   "why": "A higher proportional gain acts like a stiffer spring: faster, but less damped, so it overshoots. The derivative term opposes velocity, which is damping, so it cuts the overshoot while keeping the speed.",
   "proof": [
    "Joint with P control behaves like a mass on a spring:  J·θ'' = K_p·(θ_target − θ). The natural frequency rises with K_p but nothing removes energy.",
    "Derivative term:  −K_d·θ'. That is a damper, so the system becomes J·θ'' + K_d·θ' + K_p·θ = K_p·θ_target.",
    "Damping ratio:  ζ = K_d/(2√(K_p·J)). Raising K_p alone lowers ζ, so overshoot grows. Raise K_d to restore ζ ≈ 0.7.",
    "More integral gain usually makes overshoot worse. It adds phase lag.",
    "Limits: derivative amplifies sensor noise, and the motor's current limit caps how fast the joint can respond anyway."
   ],
   "reported": {
    "kind": "topic",
    "note": "A Robotics Engineer candidate reported questions on controller design and system stability analysis. This exact question was not reported.",
    "sources": [
     "robeng"
    ]
   }
  }
 ]
});
