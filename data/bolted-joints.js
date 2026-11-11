/* Topic: Bolted joints. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "bolted-joints",
  "title": "Bolted joints",
  "blurb": "How a bolt works, torque and preload, joint stiffness, separation, slip, bolt grades and thread engagement.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "How does a properly tightened bolt hold a joint together against a sideways (shear) load?",
      "options": [
        "The bolt shank bears against the hole walls",
        "The bolt head resists the load in bending",
        "The threads lock the parts in place",
        "The bolt stretches like a spring, clamping the parts so friction carries the load"
      ],
      "answer": 3,
      "why": "Tightening stretches the bolt. That tension (preload) clamps the parts, and friction between them carries shear. The shank should not be loaded in a well-designed joint.",
      "proof": [
        "Turning the nut pulls the bolt longer by a small elastic amount. The bolt acts as a stiff tension spring.",
        "The bolt tension is balanced by compression in the clamped parts. That is the clamp force, or preload.",
        "A shear load is resisted by friction:  capacity = μ × clamp force × number of friction interfaces.",
        "Only if the joint slips does the shank bear on the hole. Clearance holes mean bolts would then share load unevenly, so joints are designed not to slip."
      ],
      "reported": {
        "kind": "question",
        "note": "A battery-team candidate reported being asked how a bolt works.",
        "sources": [
          "howbolt",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "An M10 bolt is tightened to 50 N·m. Using T = K·d·F with nut factor K = 0.2, what preload does it develop?",
      "options": [
        "2.5 kN",
        "25 kN",
        "10 kN",
        "100 kN"
      ],
      "answer": 1,
      "why": "F = T/(K·d) = 50 / (0.2 × 0.010) = 25,000 N = 25 kN.",
      "proof": [
        "T = K·d·F, with d the nominal diameter in metres:  d = 0.010 m.",
        "F = T/(K·d) = 50 / (0.2 × 0.010) = 50 / 0.002 = 25,000 N.",
        "K is about 0.2 for dry steel threads and about 0.12 to 0.15 when lubricated.",
        "So the same torque on lubricated threads gives 30 to 60% more preload. Torque specs must state the thread condition."
      ],
      "reported": {
        "kind": "question",
        "note": "Candidates reported bolt preload questions, and one was asked for the torque on a specific bolt.",
        "sources": [
          "srme",
          "boltcant",
          "m5"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "When you torque a typical dry steel bolt, roughly how much of the tightening torque ends up as useful preload?",
      "options": [
        "About 90%",
        "About 50%",
        "About 75%",
        "About 10%"
      ],
      "answer": 3,
      "why": "Roughly 50% is lost to friction under the head or nut and 40% in the threads. Only about 10% stretches the bolt.",
      "proof": [
        "Typical split: about 50% under-head friction, about 40% thread friction, about 10% producing tension.",
        "A small change in friction therefore makes a large change in preload.",
        "Torque control gives preload scatter of roughly ±25 to 30%.",
        "Critical joints use torque-plus-angle, or measure bolt stretch directly, to cut that scatter."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A preloaded joint has clamped members three times as stiff as the bolt. An external tensile load of 10 kN is applied to the joint. By how much does the bolt tension increase?",
      "options": [
        "7.5 kN",
        "5 kN",
        "2.5 kN",
        "10 kN"
      ],
      "answer": 2,
      "why": "The bolt takes the fraction C = k_b/(k_b + k_m) = 1/4 of the external load, so 2.5 kN. The other 7.5 kN relieves the clamp force.",
      "proof": [
        "Joint stiffness factor:  C = k_b/(k_b + k_m) = k/(k + 3k) = 0.25.",
        "Bolt load increase:  ΔF_b = C·P = 0.25 × 10 = 2.5 kN.",
        "Member compression decreases by (1 − C)·P = 7.5 kN.",
        "Bolt tension = preload + 2.5 kN, as long as the joint has not separated."
      ],
      "proofTitle": "Joint stiffness factor",
      "methods": [
        {
          "title": "Springs in parallel",
          "steps": [
            "The external load stretches the bolt and relaxes the members by the same extra displacement δ. They act as two springs in parallel.",
            "Force balance:  P = k_b·δ + k_m·δ  ⇒  δ = P/(k_b + k_m).",
            "Bolt share:  k_b·δ = P·k_b/(k_b + k_m) = 10 × 1/4 = 2.5 kN.",
            "The stiffer path carries more load. A long, slender bolt in a stiff joint sees very little of the external load."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "That joint (C = 0.25) has a preload of 20 kN. At what external tensile load does the joint separate?",
      "options": [
        "26.7 kN",
        "20 kN",
        "40 kN",
        "80 kN"
      ],
      "answer": 0,
      "why": "Separation is when member compression reaches zero: F_i − (1 − C)·P = 0, so P = 20/0.75 = 26.7 kN.",
      "proof": [
        "Clamp force in the members:  F_m = F_i − (1 − C)·P.",
        "Separation when F_m = 0:  P = F_i/(1 − C) = 20/0.75 = 26.7 kN.",
        "After separation the bolt carries the whole external load, and its load rises one-for-one with P.",
        "It is higher than the preload because the bolt also picks up part of the load as it stretches."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "Why does high preload improve the fatigue life of a bolt in a joint with a fluctuating tensile load?",
      "options": [
        "The bolt only sees a small fraction of the fluctuating load, so its stress amplitude is small",
        "It makes the bolt material stronger",
        "It lowers the mean stress in the bolt",
        "It doesn't, high preload always shortens fatigue life"
      ],
      "answer": 0,
      "why": "While the joint stays clamped, the bolt sees only C × the external load swing. Fatigue is driven by stress amplitude, so a small amplitude at high mean is better than the full swing.",
      "proof": [
        "With the joint clamped, bolt load = F_i + C·P. If P cycles from 0 to P_max, the bolt cycles by only C·P_max.",
        "For C = 0.25 the alternating load is a quarter of the applied swing.",
        "If preload is too low and the joint separates, the bolt takes the full swing and fails quickly, usually at the first engaged thread.",
        "Preload does raise the mean stress, but bolt fatigue is far more sensitive to amplitude. Typical target: 75% of proof load."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A lap joint with one friction interface is clamped by four bolts, each preloaded to 20 kN. The friction coefficient is 0.2. What shear load makes the joint slip?",
      "options": [
        "4 kN",
        "20 kN",
        "16 kN",
        "80 kN"
      ],
      "answer": 2,
      "why": "Slip load = μ × total clamp force × interfaces = 0.2 × 80 kN × 1 = 16 kN.",
      "proof": [
        "Total clamp force:  4 × 20 = 80 kN.",
        "Friction capacity:  μ·N = 0.2 × 80 = 16 kN for one interface.",
        "A double-lap joint has two interfaces and would carry 32 kN.",
        "To raise it: more preload, more or larger bolts, higher friction surfaces, or add dowels or a shoulder to take shear directly."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What do the numbers on a metric class 8.8 bolt mean?",
      "options": [
        "8 mm diameter, 8 mm thread length",
        "Hardness 8.8 on the Mohs scale",
        "Yield strength 880 MPa",
        "Ultimate strength 800 MPa, yield at 80% of that (640 MPa)"
      ],
      "answer": 3,
      "why": "First number × 100 = ultimate tensile strength in MPa. Second number ÷ 10 = yield as a fraction of ultimate. So 800 MPa and 640 MPa.",
      "proof": [
        "First digit:  8 × 100 = 800 MPa minimum ultimate tensile strength.",
        "Second digit:  0.8 × 800 = 640 MPa minimum yield.",
        "Class 10.9:  1,000 MPa ultimate, 900 MPa yield.   Class 12.9:  1,200 and 1,080 MPa.",
        "The rough inch equivalents are Grade 5 for 8.8 and Grade 8 for 10.9."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel bolt threads into a tapped hole in an aluminium housing. How should the thread engagement length be chosen?",
      "options": [
        "As short as possible to save weight",
        "Long enough that the bolt breaks in tension before the aluminium threads strip",
        "Equal to one thread pitch",
        "So the threads strip first, protecting the bolt"
      ],
      "answer": 1,
      "why": "Design so the bolt is the weak link. A broken bolt is obvious and replaceable, while stripped housing threads can fail gradually and scrap the part. In aluminium that needs about 1.5 to 2 diameters.",
      "proof": [
        "Thread stripping is a shear failure over the engaged thread area, which grows with engagement length.",
        "Bolt tensile capacity is fixed by its stress area and strength.",
        "Rule of thumb for full bolt strength: about 1× diameter in steel, 1.5 to 2× diameter in aluminium, because aluminium's shear strength is lower.",
        "Beyond that, extra length adds little because the first few threads carry most of the load.",
        "For joints that are taken apart often, use steel thread inserts in aluminium."
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "An M10 × 1.5 bolt carries a preload of 25 kN. What is the tensile stress in the threaded section?",
      "options": [
        "250 MPa",
        "318 MPa",
        "431 MPa",
        "580 MPa"
      ],
      "answer": 2,
      "why": "Use the tensile stress area, 58 mm² for M10 coarse: 25,000 / 58 = 431 MPa. Using the 10 mm shank area gives 318 MPa, which underestimates it.",
      "proof": [
        "Threads reduce the load-carrying section. The standard tensile stress area for M10 × 1.5 is A_t = 58.0 mm².",
        "σ = F/A_t = 25,000 / 58.0 = 431 MPa.",
        "Class 8.8 proof strength is about 580 MPa, so this is 74% of proof. That is a typical preload target.",
        "Using the nominal area π × 10²/4 = 78.5 mm² would give 318 MPa, about 26% too low."
      ],
      "proofTitle": "Tabulated stress area",
      "methods": [
        {
          "title": "Calculate the stress area",
          "steps": [
            "ISO formula:  A_t = (π/4)(d − 0.9382·p)², with pitch p = 1.5 mm.",
            "d − 0.9382 × 1.5 = 10 − 1.407 = 8.593 mm.",
            "A_t = (π/4) × 8.593² = 58.0 mm².",
            "σ = 25,000 / 58.0 = 431 MPa. The effective diameter is between the pitch and minor diameters."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Bolts and bolt preload are reported in several Tesla interviews. This exact question was not reported.",
        "sources": [
          "srme",
          "boltcant",
          "boltheat"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Roughly what tightening torque does a dry M5 class 8.8 steel bolt need?",
      "options": [
        "About 0.6 N·m",
        "About 6 N·m",
        "About 25 N·m",
        "About 60 N·m"
      ],
      "answer": 1,
      "why": "Preload target is about 75% of proof: 0.75 × 580 MPa × 14.2 mm² ≈ 6.2 kN. T = K·d·F = 0.2 × 0.005 × 6,177 ≈ 6 N·m.",
      "proof": [
        "M5 coarse thread tensile stress area:  A_t = 14.2 mm².",
        "Class 8.8 proof strength about 580 MPa. Target 75% of proof:  F = 0.75 × 580 × 14.2 = 6,177 N.",
        "T = K·d·F with K = 0.2 (dry) and d = 0.005 m.",
        "T = 0.2 × 0.005 × 6,177 = 6.2 N·m.",
        "Lubricated threads (K about 0.15) need about 4.6 N·m for the same preload. Into aluminium, use less."
      ],
      "proofTitle": "From preload",
      "methods": [
        {
          "title": "Scale from an M10",
          "steps": [
            "An M10 8.8 bolt takes about 50 N·m (25 kN preload).",
            "Torque goes as d × A_t. Diameter ratio 0.5, stress area ratio 14.2/58 = 0.245.",
            "T = 50 × 0.5 × 0.245 = 6.1 N·m.",
            "Rule of thumb: torque scales roughly with d³, so half the diameter needs about one eighth of the torque."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked how much torque an M5 bolt requires, as an exact number.",
        "sources": [
          "m5"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel bolt clamps aluminium parts and is torqued at room temperature. The assembly then cools by 80 K. What happens to the bolt preload?",
      "options": [
        "It drops, because the aluminium shrinks more than the steel bolt",
        "It rises, because the bolt shrinks",
        "It does not change",
        "It doubles"
      ],
      "answer": 0,
      "why": "Aluminium contracts about twice as much as steel per kelvin. The clamped stack gets shorter than the bolt wants to be, so the bolt relaxes and preload falls. Heating does the opposite.",
      "proof": [
        "Expansion coefficients:  aluminium about 23 × 10⁻⁶ /K, steel about 12 × 10⁻⁶ /K.",
        "Over a grip length L, the mismatch is Δ = (α_al − α_st)·L·ΔT.",
        "For L = 20 mm and ΔT = 80 K:  Δ = 11 × 10⁻⁶ × 20 × 80 = 0.018 mm.",
        "Cooling: the aluminium shrinks more, so the bolt is stretched less. Preload change = Δ × the combined stiffness k_b·k_m/(k_b + k_m), which can be a large share of the preload on a short bolt.",
        "Heating: the aluminium grows more, preload rises and can yield the bolt or crush the aluminium under the head.",
        "Friction also changes with temperature, so torque measured hot or cold does not give the same preload."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked about the difference in bolt torque in hot and cold conditions.",
        "sources": [
          "hotcold"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A pin joint carries 20 kN through a single bolt in double shear. The allowable shear stress is 100 MPa. What bolt diameter is needed?",
      "options": [
        "About 8 mm",
        "About 11.3 mm, so use M12",
        "About 16 mm",
        "About 22.6 mm"
      ],
      "answer": 1,
      "why": "Double shear has two shear planes: A = F/(2τ) = 20,000/200 = 100 mm². d = √(4A/π) = 11.3 mm.",
      "proof": [
        "Double shear: the bolt is cut on two planes, so each carries F/2.",
        "τ = F/(2A)  ⇒  A = F/(2·τ) = 20,000/(2 × 100) = 100 mm².",
        "d = √(4·A/π) = √127.3 = 11.3 mm. Choose M12.",
        "Also check bearing stress on the plates, F/(d·t), and keep threads out of the shear planes."
      ],
      "proofTitle": "Two shear planes",
      "methods": [
        {
          "title": "From single shear",
          "steps": [
            "In single shear the area needed would be F/τ = 200 mm², giving d = 16 mm.",
            "Double shear halves the area needed, so the diameter falls by √2:  16/1.414 = 11.3 mm.",
            "That is why clevis joints are used: same load, smaller pin, and no bending from offset plates."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked how to determine the diameter of a bolt in double shear under a known force.",
        "sources": [
          "dshear"
        ]
      }
    }
  ]
});
