/* Topic: Fatigue and failure. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "fatigue-failure",
  "title": "Fatigue and failure",
  "blurb": "S-N curves, endurance limit, stress concentration, mean stress, yield criteria, fracture surfaces and cumulative damage.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "What does an S-N curve plot?",
      "options": [
        "Stress against strain for one load cycle",
        "Stress amplitude against the number of cycles to failure",
        "Strength against temperature",
        "Crack length against time"
      ],
      "answer": 1,
      "why": "S is the alternating stress amplitude and N the cycles to failure, usually on a log scale. Lower stress means longer life.",
      "proof": [
        "Specimens are cycled at a fixed stress amplitude until they break, and the cycle count N is recorded.",
        "Plotting amplitude S against log N gives a curve that falls as N increases.",
        "For steels it flattens at about 10⁶ cycles. That level is the endurance limit, roughly half the ultimate strength for a polished specimen (up to a cap).",
        "Real parts get lower values after correcting for surface finish, size, loading type and reliability."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked to explain the S-N curve.",
        "sources": [
          "sn"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "How does the S-N behaviour of aluminium differ from that of steel?",
      "options": [
        "Aluminium has a higher endurance limit",
        "Aluminium does not fatigue",
        "Aluminium has no true endurance limit, its curve keeps falling",
        "There is no difference"
      ],
      "answer": 2,
      "why": "Steel's curve flattens, so stresses below the endurance limit give effectively infinite life. Aluminium's keeps dropping, so it will eventually fail at any cyclic stress.",
      "proof": [
        "Steels and titanium alloys show a knee near 10⁶ cycles, below which fatigue cracks do not grow.",
        "Aluminium and most non-ferrous alloys have no knee. Life keeps shortening as cycles accumulate.",
        "So aluminium is given a fatigue strength at a stated life, for example at 5 × 10⁸ cycles.",
        "Design consequence: aluminium parts under cyclic load are designed for a finite life, with inspection or replacement."
      ],
      "reported": {
        "kind": "topic",
        "note": "The S-N curve was reported. This follow-up was not.",
        "sources": [
          "sn"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A wide plate in tension has a small circular hole. What is the theoretical stress concentration factor at the edge of the hole?",
      "options": [
        "3",
        "2",
        "1.5",
        "10"
      ],
      "answer": 0,
      "why": "K_t = 3 for a small circular hole in a wide plate under uniaxial tension. The peak stress at the hole edge is three times the nominal stress.",
      "proof": [
        "The hole forces the stress to flow around it, crowding the load paths at the sides of the hole.",
        "The elasticity solution (Kirsch) gives peak stress 3σ at the edge, on the diameter perpendicular to the load.",
        "For an ellipse:  K_t = 1 + 2a/b, with a the half-width across the load. A circle has a = b, giving 3.",
        "A sharp crack is a very thin ellipse, so K_t becomes very large. That is why cracks are stopped by drilling a round hole at the tip."
      ]
    },
    {
      "level": "Applied",
      "q": "A steel part sees an alternating stress of 100 MPa on a mean stress of 200 MPa. With endurance limit 250 MPa and ultimate strength 800 MPa, what is the Goodman fatigue safety factor?",
      "options": [
        "About 0.65",
        "About 2.5",
        "About 1.5",
        "About 4.0"
      ],
      "answer": 2,
      "why": "Goodman: σ_a/S_e + σ_m/S_ut = 1/n. 100/250 + 200/800 = 0.65, so n ≈ 1.54.",
      "proof": [
        "Goodman line:  σ_a/S_e + σ_m/S_ut = 1/n.",
        "σ_a/S_e = 100/250 = 0.40.   σ_m/S_ut = 200/800 = 0.25.",
        "1/n = 0.65  ⇒  n = 1.54.",
        "Without the mean stress, n would be 250/100 = 2.5. Tensile mean stress cuts fatigue life. Compressive mean stress helps, which is why shot peening works."
      ],
      "reported": {
        "kind": "topic",
        "note": "The S-N curve was reported. This exact question was not.",
        "sources": [
          "sn"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A point on a ductile steel shaft has a normal stress of 100 MPa and a shear stress of 50 MPa. What is the von Mises equivalent stress?",
      "options": [
        "112 MPa",
        "132 MPa",
        "150 MPa",
        "187 MPa"
      ],
      "answer": 1,
      "why": "σ_vm = √(σ² + 3τ²) = √(10,000 + 7,500) = 132 MPa.",
      "proof": [
        "For one normal stress and one shear stress:  σ_vm = √(σ² + 3τ²).",
        "σ_vm = √(100² + 3 × 50²) = √17,500 = 132.3 MPa.",
        "Compare this with the yield strength to get the static safety factor."
      ],
      "proofTitle": "Direct formula",
      "methods": [
        {
          "title": "Through the principal stresses",
          "steps": [
            "Principal stresses:  σ₁,₂ = σ/2 ± √((σ/2)² + τ²) = 50 ± √(2,500 + 2,500) = 50 ± 70.7.",
            "σ₁ = 120.7 MPa,  σ₂ = −20.7 MPa.",
            "Plane-stress von Mises:  σ_vm = √(σ₁² − σ₁σ₂ + σ₂²) = √(14,571 + 2,500 + 429) = √17,500.",
            "σ_vm = 132.3 MPa. Same answer, and you also learn the largest principal stress."
          ]
        }
      ]
    },
    {
      "level": "Fundamental",
      "q": "How do the Tresca (maximum shear) and von Mises yield criteria compare for a ductile metal?",
      "options": [
        "They always predict the same yield load",
        "Neither applies to ductile metals",
        "von Mises is more conservative, by up to about 15%",
        "Tresca is more conservative, by up to about 15%"
      ],
      "answer": 3,
      "why": "They agree in uniaxial tension, but in pure shear Tresca predicts yield at 0.5·S_y and von Mises at 0.577·S_y. Tresca is the safer, simpler one, and von Mises matches tests better.",
      "proof": [
        "Tresca: yield when the maximum shear stress reaches S_y/2.",
        "von Mises: yield when distortion energy reaches its value at uniaxial yield.",
        "Pure shear τ:  Tresca gives τ = 0.5·S_y.  von Mises gives √3·τ = S_y, so τ = 0.577·S_y.",
        "Ratio 0.577/0.5 = 1.155, so Tresca is up to 15% conservative. FEA packages report von Mises by default."
      ]
    },
    {
      "level": "Design judgment",
      "q": "A ductile steel shaft and a brittle cast iron shaft are each twisted to failure. How do their fracture surfaces differ?",
      "options": [
        "Both break flat across the shaft",
        "Both break along a 45° spiral",
        "Ductile breaks along a 45° spiral, brittle breaks flat across",
        "Ductile breaks flat across the shaft, brittle breaks along a 45° spiral"
      ],
      "answer": 3,
      "why": "Ductile materials fail in shear, and torsion's maximum shear is on the transverse plane. Brittle materials fail in tension, and torsion's maximum tension is at 45°, giving a helix. Twisting a stick of chalk shows it.",
      "proof": [
        "Pure torsion is pure shear on the transverse and longitudinal planes.",
        "Mohr's circle: the principal stresses are +τ and −τ on planes at 45° to the axis.",
        "Ductile metal is weakest in shear, so it shears off flat across the shaft, on the plane of maximum shear.",
        "Brittle material is weakest in tension, so it cracks perpendicular to the maximum tensile stress. That surface is a 45° helix.",
        "Reading the fracture surface this way tells you the failure mode and the type of loading."
      ]
    },
    {
      "level": "Fundamental",
      "q": "Which feature on a fracture surface most clearly indicates a fatigue failure?",
      "options": [
        "A uniform, rough, grainy surface",
        "Beach marks spreading from an origin, with a separate rough final-fracture zone",
        "Heavy necking and a cup-and-cone shape",
        "A surface covered in rust"
      ],
      "answer": 1,
      "why": "Fatigue cracks grow in stages, leaving curved beach marks that radiate from the start point. When the remaining section is too small, it snaps, leaving a rough zone.",
      "proof": [
        "Initiation: a crack starts at a stress concentration, usually at the surface (a fillet, thread root, scratch or pit).",
        "Propagation: it grows a little each cycle. Changes in load or pauses leave visible concentric beach marks centred on the origin.",
        "Final fracture: the remaining area overloads and breaks suddenly, leaving a rough, fibrous or grainy region.",
        "A small final-fracture zone means the stress was low and the life long. A large one means high stress.",
        "Necking with a cup-and-cone is ductile overload, not fatigue."
      ],
      "reported": {
        "kind": "topic",
        "note": "The S-N curve and fatigue were reported. This exact question was not.",
        "sources": [
          "sn"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A stepped shaft keeps cracking in fatigue at a shoulder. Which change is most effective?",
      "options": [
        "Switch to a steel with higher Young's modulus",
        "Make the corner sharper so the bearing seats fully",
        "Increase the fillet radius at the shoulder and shot peen it",
        "Paint the shaft"
      ],
      "answer": 2,
      "why": "A larger fillet lowers the stress concentration where the crack starts, and shot peening adds compressive residual stress at the surface. Both act directly on crack initiation.",
      "proof": [
        "Fatigue cracks start at the surface where local stress is highest: the shoulder fillet.",
        "A larger fillet radius lowers K_t. Going from r/d of 0.02 to 0.1 can roughly halve the peak stress.",
        "Shot peening leaves the surface in compression, which opposes the tensile part of each cycle and slows crack initiation.",
        "A smoother surface finish also helps. All steels have nearly the same modulus, so that option changes nothing.",
        "If a bearing needs a sharp corner to seat, use an undercut relief groove or a spacer ring instead of a sharp fillet."
      ]
    },
    {
      "level": "Applied",
      "q": "A part runs 10,000 cycles at a stress level where life is 100,000 cycles, then 200,000 cycles at a level where life is 1,000,000 cycles. By Miner's rule, what fraction of its fatigue life is used?",
      "options": [
        "0.30",
        "0.21",
        "0.12",
        "0.50"
      ],
      "answer": 0,
      "why": "Damage = Σ n/N = 10,000/100,000 + 200,000/1,000,000 = 0.1 + 0.2 = 0.3.",
      "proof": [
        "Miner's rule: damage from each stress level is n/N, cycles applied over cycles to failure at that level.",
        "First block:  10,000 / 100,000 = 0.10.",
        "Second block:  200,000 / 1,000,000 = 0.20.",
        "Total damage D = 0.30. Failure is predicted when D reaches 1, so 70% of life remains.",
        "It ignores load sequence effects, so real designs often limit D to well below 1."
      ],
      "reported": {
        "kind": "topic",
        "note": "The S-N curve and fatigue were reported. This exact question was not.",
        "sources": [
          "sn"
        ]
      }
    }
  ]
});
