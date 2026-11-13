/* Topic: Springs and resonance. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "springs-resonance",
 "title": "Springs and resonance",
 "blurb": "Springs in series and parallel, coil spring rate, preload, frequency from static sag, torsional and pendulum modes, phase, damping, isolation, tuned absorbers and critical speed.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "Two springs of 1,000 N/m and 3,000 N/m are connected first in parallel, then in series. What are the two combined stiffnesses?",
   "options": [
    "Parallel 4,000 N/m; series 750 N/m",
    "Parallel 750 N/m; series 4,000 N/m",
    "Parallel 2,000 N/m; series 2,000 N/m",
    "Parallel 4,000 N/m; series 2,000 N/m"
   ],
   "answer": 0,
   "why": "In parallel both springs stretch the same amount and their forces add: k = k₁ + k₂ = 4,000. In series they carry the same force and their stretches add: 1/k = 1/1,000 + 1/3,000, so k = 750.",
   "proof": [
    "Parallel: same δ, forces add.  k = k₁ + k₂ = 4,000 N/m.",
    "Series: same F, deflections add.  1/k = 1/k₁ + 1/k₂ = 0.001 + 0.000333 = 0.001333, so k = 750 N/m.",
    "Series is always below the softer spring; parallel is always above the stiffer one.",
    "Check with two equal springs: parallel 2k, series k/2."
   ],
   "sketch": {
    "h": 150,
    "alt": "Two springs side by side and two springs end to end",
    "items": [
     [
      "l",
      60,
      20,
      200,
      20,
      {
       "w": 3
      }
     ],
     [
      "s",
      100,
      20,
      100,
      110,
      6
     ],
     [
      "s",
      160,
      20,
      160,
      110,
      6
     ],
     [
      "r",
      80,
      110,
      100,
      16,
      {
       "f": 2
      }
     ],
     [
      "t",
      130,
      145,
      "parallel",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "l",
      270,
      20,
      390,
      20,
      {
       "w": 3
      }
     ],
     [
      "s",
      330,
      20,
      330,
      65,
      5
     ],
     [
      "r",
      318,
      65,
      24,
      6,
      {
       "f": 1
      }
     ],
     [
      "s",
      330,
      71,
      330,
      116,
      5
     ],
     [
      "r",
      300,
      116,
      60,
      14,
      {
       "f": 2
      }
     ],
     [
      "t",
      330,
      145,
      "series",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A coil spring's rate is k = G·d⁴/(8·D³·n), with wire diameter d, coil diameter D and n active coils. You double the wire diameter and keep everything else. What happens to the rate?",
   "options": [
    "It doubles",
    "It goes up 8 times",
    "It goes up 16 times",
    "It halves"
   ],
   "answer": 2,
   "why": "The wire diameter appears to the fourth power: 2⁴ = 16. Wire size is by far the strongest lever on spring rate.",
   "proof": [
    "k ∝ d⁴/(D³·n).",
    "Double d:  16 times stiffer.",
    "Double D instead:  1/8 the rate.  Double the coils:  half the rate (more wire to twist).",
    "Example: steel (G = 79 GPa), d = 2 mm, D = 20 mm, n = 10:  k = 79,000 × 16/(8 × 8,000 × 10) ≈ 2.0 N/mm.",
    "The d⁴ comes from torsion of the wire: each coil is a twisted rod, and torsional stiffness goes as J ∝ d⁴."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A spring has a rate of 5 N/mm and a free length of 50 mm. It is installed compressed to 40 mm, then compressed further to 30 mm in use. What forces does it give at installed and fully compressed lengths?",
   "options": [
    "50 N and 100 N",
    "40 N and 30 N",
    "10 N and 20 N",
    "200 N and 150 N"
   ],
   "answer": 0,
   "why": "Force is rate times compression from the free length: 5 × (50 − 40) = 50 N installed, and 5 × (50 − 30) = 100 N fully compressed.",
   "proof": [
    "F = k·(L_free − L).",
    "Installed:  5 × 10 = 50 N (the preload).",
    "Fully compressed:  5 × 20 = 100 N.",
    "Preload lets a spring hold a part firmly from the start of its travel.",
    "Check the solid length: the coils must not touch before 30 mm, or the force shoots up and the spring may be overstressed."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A machine sits on rubber mounts that compress 1 mm under its weight. Roughly what is its natural frequency of bouncing on the mounts?",
   "options": [
    "About 1.6 Hz",
    "About 16 Hz",
    "About 50 Hz",
    "About 160 Hz"
   ],
   "answer": 1,
   "why": "For any mass on a spring under gravity, f = (1/2π)√(g/δ), where δ is the static deflection. With δ = 1 mm: f = (1/2π)√(9,810) ≈ 15.8 Hz. Mass and stiffness need not be known separately.",
   "proof": [
    "Static deflection:  δ = mg/k, so k/m = g/δ.",
    "Natural frequency:  f = (1/2π)√(k/m) = (1/2π)√(g/δ).",
    "δ = 0.001 m:  √(9.81/0.001) = 99 rad/s, so f = 15.8 Hz.",
    "Handy form:  f ≈ 15.8/√(δ in mm) Hz.  10 mm sag gives 5 Hz; 0.1 mm gives 50 Hz.",
    "This also works for beams: the static sag at a mass gives its frequency, approximately."
   ],
   "sketch": {
    "h": 150,
    "alt": "Machine on rubber mounts that compress 1 mm",
    "items": [
     [
      "r",
      150,
      30,
      160,
      60,
      {
       "f": 1
      }
     ],
     [
      "t",
      230,
      66,
      "machine",
      {
       "s": 13
      }
     ],
     [
      "r",
      165,
      90,
      30,
      18,
      {
       "f": 2
      }
     ],
     [
      "r",
      265,
      90,
      30,
      18,
      {
       "f": 2
      }
     ],
     [
      "h",
      110,
      108,
      350,
      108,
      1
     ],
     [
      "t",
      370,
      104,
      "mounts sag 1 mm",
      {
       "s": 12,
       "an": "start",
       "m": 1
      }
     ],
     [
      "t",
      230,
      140,
      "f = ?",
      {
       "s": 13,
       "a": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A rotor with a polar mass moment of inertia of 0.02 kg·m² sits on a shaft with a torsional stiffness of 500 N·m/rad. What is its torsional natural frequency?",
   "options": [
    "About 4 Hz",
    "About 25 Hz",
    "About 160 Hz",
    "About 250 Hz"
   ],
   "answer": 1,
   "why": "Torsion works like a spring-mass system with J for mass and k_t for stiffness: f = (1/2π)√(k_t/J) = (1/2π)√25,000 ≈ 25 Hz.",
   "proof": [
    "Equation of motion:  J·θ'' + k_t·θ = 0.",
    "ω_n = √(k_t/J) = √(500/0.02) = √25,000 = 158 rad/s.",
    "f = 158/2π = 25.2 Hz.",
    "Drivelines, motor rotors and gear trains all have torsional modes. A torque ripple at this frequency would make it resonate.",
    "Raise it with a stiffer (shorter or thicker) shaft, or lower inertia."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A 1 m simple pendulum swings with a small amplitude. Its bob mass is doubled. What happens to its period?",
   "options": [
    "It doubles",
    "It halves",
    "It is unchanged, about 2 s",
    "It rises by √2"
   ],
   "answer": 2,
   "why": "For small swings T = 2π√(L/g). Mass appears in both the restoring force (gravity) and the inertia, so it cancels. With L = 1 m, T = 2.0 s.",
   "proof": [
    "Restoring torque:  −m·g·L·θ.  Inertia:  m·L².",
    "ω² = (mgL)/(mL²) = g/L, so mass cancels.",
    "T = 2π√(1/9.81) = 2.006 s.",
    "Only length and gravity matter, which is why pendulum clocks are adjusted by moving the bob up or down.",
    "At large amplitudes the period grows slightly, by about 2% at 30°."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A system is driven exactly at its natural frequency. How does the phase of the response compare with the driving force?",
   "options": [
    "In phase",
    "Lagging by 90°",
    "Lagging by 180°",
    "Leading by 90°"
   ],
   "answer": 1,
   "why": "At resonance the response lags the force by 90°, whatever the damping. Well below resonance it moves in phase with the force; well above it moves opposite (180° lag). The 90° point is a common way to find resonance in a test.",
   "proof": [
    "Steady response:  x = X·sin(ωt − φ), with tan φ = 2ζr/(1 − r²), r = ω/ω_n.",
    "At r = 1 the denominator is zero, so φ = 90° for any ζ.",
    "Below resonance (r ≪ 1): stiffness controls, φ ≈ 0.",
    "Above resonance (r ≫ 1): inertia controls, φ ≈ 180°: the mass moves opposite the force.",
    "At 90° the force is in phase with the velocity, so it does the most work per cycle, which is why amplitude builds up."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "After being tapped, a bracket's vibration amplitude halves with each cycle. Roughly what is its damping ratio?",
   "options": [
    "About 0.5",
    "About 0.01",
    "About 0.11",
    "About 0.69"
   ],
   "answer": 2,
   "why": "The logarithmic decrement is δ = ln(x₁/x₂) = ln 2 = 0.693. For light damping ζ ≈ δ/2π = 0.11, which is quite heavily damped for a metal part.",
   "proof": [
    "Log decrement:  δ = ln(x_n/x_n+1) = ln 2 = 0.693.",
    "Exact:  ζ = δ/√(4π² + δ²) = 0.693/6.32 = 0.110.",
    "Approximation for small ζ:  δ/2π = 0.110.",
    "Bare metal structures are usually ζ = 0.005 to 0.02, so ζ = 0.11 suggests friction in joints or added damping material.",
    "To find ζ, count cycles to halve: N cycles gives ζ ≈ 0.11/N."
   ],
   "given": [
    {
     "t": "Tap test: amplitude against time",
     "pts": [
      [
       0,
       1
      ],
      [
       0.008,
       0.919
      ],
      [
       0.017,
       0.755
      ],
      [
       0.025,
       0.53
      ],
      [
       0.033,
       0.269
      ],
      [
       0.042,
       0
      ],
      [
       0.05,
       -0.251
      ],
      [
       0.058,
       -0.461
      ],
      [
       0.067,
       -0.613
      ],
      [
       0.075,
       -0.696
      ],
      [
       0.083,
       -0.707
      ],
      [
       0.092,
       -0.65
      ],
      [
       0.1,
       -0.534
      ],
      [
       0.108,
       -0.375
      ],
      [
       0.117,
       -0.19
      ],
      [
       0.125,
       0
      ],
      [
       0.133,
       0.177
      ],
      [
       0.142,
       0.326
      ],
      [
       0.15,
       0.434
      ],
      [
       0.158,
       0.492
      ],
      [
       0.167,
       0.5
      ],
      [
       0.175,
       0.459
      ],
      [
       0.183,
       0.377
      ],
      [
       0.192,
       0.265
      ],
      [
       0.2,
       0.135
      ],
      [
       0.208,
       0
      ],
      [
       0.217,
       -0.126
      ],
      [
       0.225,
       -0.231
      ],
      [
       0.233,
       -0.307
      ],
      [
       0.242,
       -0.348
      ],
      [
       0.25,
       -0.354
      ],
      [
       0.258,
       -0.325
      ],
      [
       0.267,
       -0.267
      ],
      [
       0.275,
       -0.187
      ],
      [
       0.283,
       -0.095
      ],
      [
       0.292,
       0
      ],
      [
       0.3,
       0.089
      ],
      [
       0.308,
       0.163
      ],
      [
       0.317,
       0.217
      ],
      [
       0.325,
       0.246
      ],
      [
       0.333,
       0.25
      ],
      [
       0.342,
       0.23
      ],
      [
       0.35,
       0.189
      ],
      [
       0.358,
       0.132
      ],
      [
       0.367,
       0.067
      ],
      [
       0.375,
       0
      ],
      [
       0.383,
       -0.063
      ],
      [
       0.392,
       -0.115
      ],
      [
       0.4,
       -0.153
      ],
      [
       0.408,
       -0.174
      ],
      [
       0.417,
       -0.177
      ],
      [
       0.425,
       -0.162
      ],
      [
       0.433,
       -0.133
      ],
      [
       0.442,
       -0.094
      ],
      [
       0.45,
       -0.048
      ],
      [
       0.458,
       0
      ],
      [
       0.467,
       0.044
      ],
      [
       0.475,
       0.082
      ],
      [
       0.483,
       0.108
      ],
      [
       0.492,
       0.123
      ],
      [
       0.5,
       0.125
      ],
      [
       0.508,
       0.115
      ],
      [
       0.517,
       0.094
      ],
      [
       0.525,
       0.066
      ],
      [
       0.533,
       0.034
      ],
      [
       0.542,
       0
      ],
      [
       0.55,
       -0.031
      ],
      [
       0.558,
       -0.058
      ],
      [
       0.567,
       -0.077
      ],
      [
       0.575,
       -0.087
      ],
      [
       0.583,
       -0.088
      ],
      [
       0.592,
       -0.081
      ],
      [
       0.6,
       -0.067
      ],
      [
       0.608,
       -0.047
      ],
      [
       0.617,
       -0.024
      ],
      [
       0.625,
       0
      ],
      [
       0.633,
       0.022
      ],
      [
       0.642,
       0.041
      ],
      [
       0.65,
       0.054
      ],
      [
       0.658,
       0.062
      ],
      [
       0.667,
       0.063
      ],
      [
       0.675,
       0.057
      ],
      [
       0.683,
       0.047
      ],
      [
       0.692,
       0.033
      ],
      [
       0.7,
       0.017
      ],
      [
       0.708,
       0
      ],
      [
       0.717,
       -0.016
      ],
      [
       0.725,
       -0.029
      ],
      [
       0.733,
       -0.038
      ],
      [
       0.742,
       -0.044
      ],
      [
       0.75,
       -0.044
      ],
      [
       0.758,
       -0.041
      ],
      [
       0.767,
       -0.033
      ],
      [
       0.775,
       -0.023
      ],
      [
       0.783,
       -0.012
      ],
      [
       0.792,
       0
      ],
      [
       0.8,
       0.011
      ],
      [
       0.808,
       0.02
      ],
      [
       0.817,
       0.027
      ],
      [
       0.825,
       0.031
      ],
      [
       0.833,
       0.031
      ],
      [
       0.842,
       0.029
      ],
      [
       0.85,
       0.024
      ],
      [
       0.858,
       0.017
      ],
      [
       0.867,
       0.008
      ],
      [
       0.875,
       0
      ],
      [
       0.883,
       -0.008
      ],
      [
       0.892,
       -0.014
      ],
      [
       0.9,
       -0.019
      ],
      [
       0.908,
       -0.022
      ],
      [
       0.917,
       -0.022
      ],
      [
       0.925,
       -0.02
      ],
      [
       0.933,
       -0.017
      ],
      [
       0.942,
       -0.012
      ],
      [
       0.95,
       -0.006
      ],
      [
       0.958,
       0
      ],
      [
       0.967,
       0.006
      ],
      [
       0.975,
       0.01
      ],
      [
       0.983,
       0.014
      ],
      [
       0.992,
       0.015
      ],
      [
       1,
       0.016
      ]
     ]
    }
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A system has a damping ratio of 0.1. How much does damping lower its natural frequency of free vibration?",
   "options": [
    "By about 10%",
    "By about 0.5%",
    "By about 1%",
    "By half"
   ],
   "answer": 1,
   "why": "The damped natural frequency is ω_d = ω_n√(1 − ζ²). With ζ = 0.1 that is √0.99 = 0.995: only 0.5% lower. For most structures you can ignore damping when finding natural frequencies.",
   "proof": [
    "ω_d = ω_n·√(1 − ζ²).",
    "ζ = 0.1:  √(1 − 0.01) = 0.99499, a 0.5% drop.",
    "Even ζ = 0.3 only lowers it by 4.6%.",
    "Damping matters a lot for the height of the resonance peak (about 1/(2ζ)), and very little for where it is.",
    "So to move a resonance, change stiffness or mass. To shrink it, add damping."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A pump runs at 30 Hz. You want rubber mounts with a natural frequency of 10 Hz, a ratio of 3, for good isolation. About how much should the mounts sag under the pump's weight?",
   "options": [
    "About 0.25 mm",
    "About 25 mm",
    "About 10 mm",
    "About 2.5 mm"
   ],
   "answer": 3,
   "why": "Using f = (1/2π)√(g/δ): δ = g/(2πf)² = 9.81/(62.8)² = 2.5 mm. Softer mounts that sag more would isolate better but let the pump move more.",
   "proof": [
    "Isolation needs f_drive/f_n > √2; a ratio of about 3 gives roughly 88% isolation with light damping.",
    "f_n = 10 Hz:  ω_n = 62.8 rad/s.",
    "δ = g/ω_n² = 9.81/3,948 = 0.00248 m = 2.5 mm.",
    "Check the start-up: the pump passes through 10 Hz as it spins up, so the mounts need some damping or it will shake briefly.",
    "Hoses and cables must be flexible too, or they bypass the mounts."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A part's first natural frequency must be doubled to get it clear of a vibration source. Keeping the mass the same, how much stiffer must it be?",
   "options": [
    "2 times",
    "√2 times",
    "4 times",
    "8 times"
   ],
   "answer": 2,
   "why": "Natural frequency goes as √(k/m), so doubling it needs 2² = 4 times the stiffness, or a quarter of the mass, or a combination.",
   "proof": [
    "f ∝ √(k/m).",
    "2f needs k/m × 4.",
    "Options: 4× stiffness, ¼ mass, or for example 2× stiffness with ½ mass.",
    "For a cantilever bracket, halving its length raises k by 8 and lowers the moving mass, so frequency rises about 4 times.",
    "Adding a rib usually raises stiffness much faster than mass, which is why ribs are the usual fix."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A tuned mass damper (a small mass on a spring, tuned to a structure's natural frequency) is added to a structure that resonates. What does it do to the frequency response?",
   "options": [
    "It moves the single peak to a higher frequency",
    "It removes all vibration at every frequency",
    "It doubles the peak height",
    "It splits the one big peak into two smaller peaks, one either side of the original frequency"
   ],
   "answer": 3,
   "why": "The damper's mass moves opposite the structure at the tuned frequency, cancelling the force there. The combined system has two modes instead of one, so the single large peak becomes two lower peaks on either side. Damping in the absorber keeps those new peaks low.",
   "proof": [
    "Two masses and two springs give two natural frequencies.",
    "At the original frequency the absorber resonates and pushes back on the structure, so the structure's motion there drops close to zero.",
    "The response now has two peaks, one below and one above.",
    "A damper in the absorber flattens both peaks. Bigger absorber mass (typically 1 to 10% of the structure) widens the useful band.",
    "Used on tall buildings, power lines (Stockbridge dampers), engine crankshafts and some vehicle seats."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A disc is mounted at the middle of a shaft between bearings. Its weight makes the shaft sag 0.1 mm there. Roughly what is the shaft's first critical speed?",
   "options": [
    "About 300 rpm",
    "About 30,000 rpm",
    "About 50 rpm",
    "About 3,000 rpm"
   ],
   "answer": 3,
   "why": "The critical speed equals the lateral natural frequency, which you can get from the static sag: f = (1/2π)√(g/δ) = (1/2π)√98,100 ≈ 50 Hz, which is 3,000 rpm.",
   "proof": [
    "Whirl: at the critical speed the shaft's rotation frequency matches its bending natural frequency and any unbalance drives it to resonance.",
    "f = 15.8/√0.1 ≈ 50 Hz.",
    "Critical speed = 50 × 60 = 3,000 rpm.",
    "Either run well below it (stiff shaft) or accelerate quickly through it and run above it, with good balance.",
    "Raise it with a thicker shaft, shorter bearing span or lighter disc."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A spring stores energy when compressed. You compress it twice as far. How much more energy does it store?",
   "options": [
    "Twice as much",
    "The same",
    "Eight times as much",
    "Four times as much"
   ],
   "answer": 3,
   "why": "Spring energy is ½kx², the area under the force-deflection line. Double x gives four times the energy, because both the force and the distance double.",
   "proof": [
    "Force grows linearly:  F = kx.",
    "Energy = area under F against x = ½·k·x².",
    "Double x:  ½k(2x)² = 4 × ½kx².",
    "Example: k = 10 N/mm, x = 20 mm:  ½ × 10 × 20² = 2,000 N·mm = 2 J.",
    "This is why a spring that bottoms out or is released suddenly can be dangerous: the energy rises fast with compression."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported vibration questions, including relating a spring-damper system's resonance to a cantilever and finding natural frequencies. This exact question was not reported.",
    "sources": [
     "reson",
     "vibtest"
    ]
   }
  }
 ]
});
