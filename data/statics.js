/* Topic: Statics and free-body diagrams. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "statics",
  "title": "Statics and free-body diagrams",
  "blurb": "Equilibrium, cables, friction, levers, trusses, tipping and centre of gravity.",
  "questions": [
    {
      "level": "Applied",
      "q": "A 100 N weight hangs from two cables, each making 30° with the horizontal. What is the tension in each cable?",
      "options": [
        "100 N",
        "57.7 N",
        "50 N",
        "200 N"
      ],
      "answer": 0,
      "why": "Vertical equilibrium: 2T·sin30° = 100, so T = 100 N. Shallow cables carry much more than half the weight.",
      "proof": [
        "Free body of the joint: weight 100 N down, two tensions T up and outward at 30° to horizontal.",
        "ΣF_x = 0 is satisfied by symmetry.",
        "ΣF_y = 0:  2T·sin 30° − 100 = 0  ⇒  2T × 0.5 = 100  ⇒  T = 100 N."
      ],
      "proofTitle": "Sum of vertical forces",
      "methods": [
        {
          "title": "Force triangle",
          "steps": [
            "Three forces in equilibrium form a closed triangle when drawn head to tail.",
            "The two tensions are each 60° from the vertical weight vector, so the triangle's angles are 60°, 60° and 60°.",
            "An equilateral triangle has equal sides, so T = W = 100 N.",
            "As the cables get flatter, T = W/(2·sin θ) grows without limit. A perfectly horizontal cable cannot hold any weight."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A block rests on a ramp with static friction coefficient 0.5. At about what ramp angle does it start to slide?",
      "options": [
        "About 14°",
        "About 27°",
        "About 30°",
        "About 45°"
      ],
      "answer": 1,
      "why": "Sliding starts when tan θ = μ, so θ = arctan(0.5) ≈ 26.6°. The mass does not matter.",
      "proof": [
        "Along the ramp: the weight component W·sin θ pulls down the slope.",
        "Normal to the ramp:  N = W·cos θ, so the maximum friction is μ·W·cos θ.",
        "Slides when W·sin θ > μ·W·cos θ  ⇒  tan θ > μ.",
        "θ = arctan(0.5) = 26.6°. W cancels, so a heavy and a light block slide at the same angle."
      ],
      "proofTitle": "Forces along and normal to the ramp",
      "methods": [
        {
          "title": "Friction angle",
          "steps": [
            "Combine normal force and friction into one reaction R. At the point of slipping, R is tilted from the normal by the friction angle φ, where tan φ = μ.",
            "The block has only two forces: weight (vertical) and R. For equilibrium they must be collinear, so R is vertical.",
            "The normal is tilted θ from vertical, so R is θ from the normal. Slip starts when θ = φ = arctan(0.5) = 26.6°."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A 2 m lever has its pivot 0.5 m from a 600 N load. What force at the far end balances it?",
      "options": [
        "150 N",
        "600 N",
        "300 N",
        "200 N"
      ],
      "answer": 3,
      "why": "Moments about the pivot: 600 × 0.5 = F × 1.5, so F = 200 N.",
      "proof": [
        "The load is 0.5 m from the pivot and the effort is 2 − 0.5 = 1.5 m from it.",
        "ΣM about the pivot = 0:  600 × 0.5 − F × 1.5 = 0.",
        "F = 300 / 1.5 = 200 N. Mechanical advantage is 1.5/0.5 = 3.",
        "Check with forces: the pivot reaction is 600 + 200 = 800 N upward."
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A link is pinned at both ends and has no loads along its length (a two-force member). What do you know about the forces at its pins?",
      "options": [
        "They are equal, opposite, and act along the line joining the two pins",
        "They can point in any direction",
        "They are always perpendicular to the link",
        "They are always zero"
      ],
      "answer": 0,
      "why": "With only two forces on a body, equilibrium requires them to be equal, opposite and collinear, so they act along the line between the pins.",
      "proof": [
        "ΣF = 0 with only two forces means they are equal and opposite.",
        "ΣM = 0 about one pin means the other force has no moment arm, so it passes through that pin.",
        "Both forces therefore lie on the line through the two pins. The member is in pure tension or compression, even if the link itself is curved.",
        "Spotting two-force members first cuts the unknowns in frame and mechanism problems."
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A triangular truss has two inclined members at 45° meeting at an apex, with a horizontal bottom member between the supports. A load P pushes down on the apex. What is the force in each inclined member?",
      "options": [
        "0.5P compression",
        "0.707P compression",
        "0.707P tension",
        "P compression"
      ],
      "answer": 1,
      "why": "At the apex: 2F·sin45° = P, so F = 0.707P, in compression. The bottom member carries 0.5P in tension.",
      "proof": [
        "Free body of the apex joint: load P down, and two member forces F along the 45° members.",
        "ΣF_y = 0:  2F·sin 45° = P  ⇒  F = P/(2 × 0.707) = 0.707P.",
        "The members push up on the joint, so they are in compression."
      ],
      "proofTitle": "Joint at the apex",
      "methods": [
        {
          "title": "Joint at a support",
          "steps": [
            "By symmetry each support reaction is P/2 upward.",
            "At a support joint, the inclined member must supply the vertical balance:  F·sin 45° = P/2  ⇒  F = 0.707P, pushing down into the support, so compression.",
            "Its horizontal component, F·cos 45° = 0.5P, pushes the support outward. The bottom member holds it in with 0.5P tension.",
            "Without the bottom member the supports would need to resist that 0.5P thrust themselves."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A uniform ladder leans at 60° to the floor against a frictionless wall. What minimum floor friction coefficient stops it sliding?",
      "options": [
        "0.87",
        "0.50",
        "0.58",
        "0.29"
      ],
      "answer": 3,
      "why": "μ_min = 1/(2·tan θ) = 1/(2 × 1.732) = 0.29.",
      "proof": [
        "Forces: weight W at mid-length, floor normal N and friction f at the base, wall normal N_w at the top (horizontal, no friction).",
        "ΣF_y = 0:  N = W.   ΣF_x = 0:  f = N_w.",
        "Moments about the base:  N_w·L·sin θ = W·(L/2)·cos θ  ⇒  N_w = W/(2·tan θ).",
        "μ_min = f/N = 1/(2·tan 60°) = 1/3.46 = 0.289."
      ],
      "proofTitle": "Moments about the base",
      "methods": [
        {
          "title": "Moments about the top",
          "steps": [
            "Take moments about the wall contact point, which removes N_w.",
            "N acts at horizontal distance L·cos θ, W at (L/2)·cos θ, and f at vertical distance L·sin θ.",
            "N·L·cos θ − W·(L/2)·cos θ − f·L·sin θ = 0. With N = W:  W·(L/2)·cos θ = f·L·sin θ.",
            "f = W/(2·tan θ), so μ_min = 1/(2·tan θ) = 0.289. Same result, and neither W nor L matters."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A beam in a plane is built in (fixed) at both ends. To what degree is it statically indeterminate?",
      "options": [
        "0 (determinate)",
        "3",
        "2",
        "1"
      ],
      "answer": 1,
      "why": "Each fixed end gives 3 reactions (two forces and a moment), so 6 unknowns against 3 equilibrium equations: degree 3.",
      "proof": [
        "A fixed support in 2D resists horizontal force, vertical force and moment: 3 unknowns.",
        "Two fixed ends: 6 unknown reactions.",
        "Planar equilibrium gives 3 equations:  ΣF_x = 0, ΣF_y = 0, ΣM = 0.",
        "Degree of indeterminacy = 6 − 3 = 3. The extra equations come from compatibility of deflections.",
        "With only transverse loads and small deflections the axial reactions are zero, which is why textbook problems solve it with fewer unknowns."
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A crate 0.4 m wide and 1.0 m tall, with its centre of gravity at its centre, is pushed horizontally at its top edge. The floor friction coefficient is 0.3. What happens as the push increases?",
      "options": [
        "It tips first",
        "It slides first",
        "It slides and tips at the same force",
        "It does neither"
      ],
      "answer": 0,
      "why": "Tipping needs a push of 0.2W and sliding needs 0.3W, so it tips first. In general it tips first when μ > b/(2h).",
      "proof": [
        "To slide:  F = μ·W = 0.3W.",
        "To tip about the far bottom edge: push moment F·h equals restoring moment W·(b/2).",
        "F = W·(0.4/2)/1.0 = 0.2W.",
        "0.2W < 0.3W, so the crate tips before it slides.",
        "General condition for tipping first:  μ > b/(2h) = 0.2. Pushing lower down raises the force needed to tip."
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A 100 kg load hangs from a single movable pulley. One end of the rope is fixed to the ceiling and you pull straight up on the other. Ignoring friction and pulley mass, what force do you need?",
      "options": [
        "About 245 N",
        "About 981 N",
        "About 490 N",
        "About 1,962 N"
      ],
      "answer": 2,
      "why": "Two rope segments support the pulley, each with tension T, so 2T = 981 N and T ≈ 490 N.",
      "proof": [
        "Weight:  100 × 9.81 = 981 N.",
        "Free body of the pulley: two upward rope tensions T (same rope, frictionless pulley) and 981 N down.",
        "2T = 981  ⇒  T = 490 N."
      ],
      "proofTitle": "Free body of the pulley",
      "methods": [
        {
          "title": "Work (rope length) argument",
          "steps": [
            "To lift the load 1 m, both supporting segments must shorten by 1 m, so you pull 2 m of rope.",
            "Work in equals work out with no friction:  F × 2 m = 981 N × 1 m.",
            "F = 490 N. You trade distance for force: mechanical advantage 2."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A car with a 3.0 m wheelbase sits on scales that read 9 kN on the front axle and 6 kN on the rear. How far behind the front axle is its centre of gravity?",
      "options": [
        "1.0 m",
        "1.5 m",
        "1.2 m",
        "1.8 m"
      ],
      "answer": 2,
      "why": "Moments about the front axle: 15 kN × x = 6 kN × 3.0 m, so x = 1.2 m.",
      "proof": [
        "Total weight:  9 + 6 = 15 kN, acting at the centre of gravity, distance x behind the front axle.",
        "ΣM about the front axle = 0:  15·x = 6 × 3.0.",
        "x = 18/15 = 1.2 m. The heavier axle is the one closer to the centre of gravity."
      ],
      "proofTitle": "Moments about the front axle",
      "methods": [
        {
          "title": "Moments about the rear axle",
          "steps": [
            "Let y be the distance from the rear axle to the centre of gravity.",
            "ΣM about the rear axle = 0:  15·y = 9 × 3.0  ⇒  y = 1.8 m.",
            "x = 3.0 − 1.8 = 1.2 m behind the front axle.",
            "Shortcut: weight distribution is 60% front, so the centre of gravity is 40% of the wheelbase back:  0.4 × 3.0 = 1.2 m."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Free-body diagrams and static equilibrium problems are reported in Tesla interviews. This exact question was not reported.",
        "sources": [
          "fbd",
          "joint"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A pendulum bob of mass m is released from rest with the string horizontal. What is the string tension as it passes through the lowest point?",
      "options": [
        "mg",
        "2mg",
        "3mg",
        "Zero"
      ],
      "answer": 2,
      "why": "At the bottom the string must hold the weight and also supply the centripetal force: T = mg + mv²/L. Energy gives v² = 2gL, so T = 3mg.",
      "proof": [
        "Free body at the bottom: tension T up, weight mg down. The bob is moving in a circle of radius L.",
        "Newton along the string:  T − mg = m·v²/L.",
        "Energy from release to the bottom, a drop of L:  ½·m·v² = m·g·L  ⇒  v² = 2gL.",
        "T = mg + m(2gL)/L = 3mg."
      ],
      "proofTitle": "Free body plus energy",
      "methods": [
        {
          "title": "General angle",
          "steps": [
            "At angle θ from vertical, released from θ₀:  v² = 2gL(cos θ − cos θ₀).",
            "Along the string:  T − mg·cos θ = m·v²/L.",
            "T = mg(3·cos θ − 2·cos θ₀).",
            "With θ₀ = 90° and θ = 0:  T = 3mg. At the release point T = 0, and at rest hanging straight down T = mg."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked for the free-body diagram of a pendulum.",
        "sources": [
          "pend"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A motor produces 400 N·m of torque at 3,000 rpm. What power is that?",
      "options": [
        "About 12.6 kW",
        "About 40 kW",
        "About 126 kW (169 hp)",
        "About 1,200 kW"
      ],
      "answer": 2,
      "why": "P = T·ω. ω = 3,000 × 2π/60 = 314 rad/s, so P = 400 × 314 = 125.7 kW, about 169 hp.",
      "proof": [
        "Power = torque × angular speed, with ω in rad/s.",
        "ω = 3,000 rev/min × 2π/60 = 314.2 rad/s.",
        "P = 400 × 314.2 = 125,664 W = 125.7 kW.",
        "In horsepower:  125.7 kW / 0.7457 = 168.5 hp."
      ],
      "proofTitle": "P = T·ω in SI",
      "methods": [
        {
          "title": "Imperial shortcut",
          "steps": [
            "hp = torque (lb·ft) × rpm / 5,252.",
            "400 N·m × 0.7376 = 295 lb·ft.",
            "hp = 295 × 3,000 / 5,252 = 168.5 hp.",
            "Torque and horsepower curves always cross at 5,252 rpm for that reason. A gearbox trades torque for speed, and power stays the same apart from losses."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported torque and horsepower coming up in a hiring-manager round.",
        "sources": [
          "srme"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A motor applies a constant 100 N·m of torque through 10 full revolutions. How much energy does it deliver?",
      "options": [
        "100 J",
        "628 J",
        "1,000 J",
        "About 6,280 J"
      ],
      "answer": 3,
      "why": "Work = torque × angle in radians = 100 × (10 × 2π) = 6,283 J. Energy is an amount, and power is the rate of delivering it.",
      "proof": [
        "Energy (work) is force × distance. For rotation, it is torque × angle, with the angle in radians.",
        "Angle:  10 rev × 2π = 62.83 rad.",
        "W = 100 × 62.83 = 6,283 J.",
        "Power is energy per unit time:  P = T·ω. If the 10 turns take 2 s, P = 6,283/2 = 3.1 kW.",
        "Units: energy in J or kWh, power in W. A battery stores kWh, and a motor is rated in kW."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked the difference between power and energy, and how torque relates to energy.",
        "sources": [
          "mdesearch"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A horizontal arm is welded to a vertical post and carries a downward load at its tip. What stresses act on the welded joint?",
      "options": [
        "Only axial tension",
        "Bending stress plus transverse shear",
        "Only torsion",
        "No stress, the post carries it"
      ],
      "answer": 1,
      "why": "Cut the arm at the weld: the tip load needs a shear force V = P and a moment M = PL there. The moment gives bending stress, usually the larger part, and the shear force gives shear stress.",
      "proof": [
        "Free body of the arm: load P down at the tip. At the weld the reactions are V = P up and M = P·L.",
        "M produces normal stress σ = M·c/I: tension at the top of the joint, compression at the bottom.",
        "V produces shear stress τ, about V/A on average.",
        "For a long arm, bending dominates because M grows with L and V does not.",
        "If the load is offset sideways from the arm axis, add torsion T = P·e. If the load is angled, add axial stress.",
        "Combine them with von Mises to check the joint."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being shown a diagram of forces and moments and asked what stresses one of the joints would feel.",
        "sources": [
          "joint"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Treating it as a rigid body sliding on a desk, how many degrees of freedom does a computer mouse have?",
      "options": [
        "1",
        "2",
        "3",
        "6"
      ],
      "answer": 2,
      "why": "A free body has 6. The desk surface removes three (lift, pitch and roll), leaving 3: slide in x, slide in y, and rotate about the vertical axis. The sensor only reports two of them.",
      "proof": [
        "A free rigid body has 6 degrees of freedom: translations x, y, z and rotations Rx, Ry, Rz.",
        "Flat contact with the desk removes z, Rx and Ry.",
        "Remaining: x, y and Rz (yaw). That is 3.",
        "The optical sensor measures only x and y, which is why twisting the mouse on the spot barely moves the cursor.",
        "If you count its mechanisms, each button and the scroll wheel add one more each."
      ],
      "reported": {
        "kind": "question",
        "note": "Candidates reported being asked the degrees of freedom of a computer mouse, and general x, y, z and rotation questions.",
        "sources": [
          "mdesearch",
          "dof"
        ]
      }
    }
  ]
});
