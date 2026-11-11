/* Topic: Heat transfer. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "heat-transfer",
  "title": "Heat transfer",
  "blurb": "Conduction, convection, radiation, thermal resistance networks, transients, fins, thermal stress and coolant sizing.",
  "questions": [
    {
      "level": "Applied",
      "q": "An aluminium plate (k = 200 W/m·K) is 10 mm thick with 0.01 m² of area. One face is 5 K hotter than the other. How much heat flows through it?",
      "options": [
        "10 W",
        "100 W",
        "10,000 W",
        "1,000 W"
      ],
      "answer": 3,
      "why": "Fourier's law: q = kAΔT/L = 200 × 0.01 × 5 / 0.01 = 1,000 W.",
      "proof": [
        "Fourier's law for a flat wall:  q = k·A·ΔT/L.",
        "L = 10 mm = 0.01 m.",
        "q = 200 × 0.01 × 5 / 0.01 = 1,000 W."
      ],
      "proofTitle": "Fourier's law",
      "methods": [
        {
          "title": "Thermal resistance",
          "steps": [
            "Treat the plate as a resistor:  R = L/(k·A) = 0.01/(200 × 0.01) = 0.005 K/W.",
            "Heat flow is like current:  q = ΔT/R = 5 / 0.005 = 1,000 W.",
            "The resistance form is the one to use when layers are stacked, because resistances in series just add."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on heat and conduction. This exact question was not reported.",
        "sources": [
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Heat leaves a cell through a 0.5 mm thermal pad (k = 1 W/m·K), then a 10 mm aluminium plate (k = 200), then into coolant (h = 500 W/m²·K), all over 0.01 m². Which step limits the heat flow most?",
      "options": [
        "The thermal pad",
        "The aluminium plate",
        "Convection into the coolant",
        "They contribute equally"
      ],
      "answer": 2,
      "why": "Resistances: pad 0.05, plate 0.005, convection 0.2 K/W. Convection is 78% of the total, so improving it helps most.",
      "proof": [
        "Pad:  R = L/(kA) = 0.0005/(1 × 0.01) = 0.05 K/W.",
        "Plate:  R = 0.01/(200 × 0.01) = 0.005 K/W.",
        "Convection:  R = 1/(hA) = 1/(500 × 0.01) = 0.2 K/W.",
        "Total:  0.255 K/W. For 50 W the temperature rise is 50 × 0.255 = 12.75 K.",
        "Convection is 0.2/0.255 = 78% of it. Making the plate out of copper would change almost nothing. Always work on the largest resistance."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported battery cooling questions. This exact question was not reported.",
        "sources": [
          "cell",
          "boltheat"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Why are high-power battery packs cooled with liquid instead of air?",
      "options": [
        "Liquid convection coefficients are roughly 10 to 100 times higher than air's",
        "Liquid is lighter than air",
        "Liquid has a lower specific heat",
        "Air cannot remove heat"
      ],
      "answer": 0,
      "why": "Typical h: natural air 5 to 25, forced air 25 to 250, forced liquid 500 to 10,000 W/m²·K. Liquid also carries far more heat per unit volume.",
      "proof": [
        "Newton's law of cooling:  q = h·A·ΔT. For a fixed area and temperature difference, heat removed scales with h.",
        "Rough ranges in W/m²·K: natural convection in air 5 to 25, forced air 25 to 250, forced water or glycol 500 to 10,000.",
        "Volumetric heat capacity (ρ·c_p) of water-glycol is over 3,000 times that of air, so much less flow is needed to carry the heat away.",
        "That allows small ΔT between cells, which matters for battery life and charging rate.",
        "Trade-offs: mass, pumps, leak risk and sealing."
      ],
      "reported": {
        "kind": "question",
        "note": "Candidates reported being asked how to dissipate heat from a battery cell.",
        "sources": [
          "cell",
          "m5"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "When can you treat a solid as having one uniform temperature while it heats or cools (the lumped capacitance model)?",
      "options": [
        "When the Biot number h·L_c/k is below about 0.1",
        "When the Reynolds number is below 2,300",
        "When the solid is a perfect sphere",
        "Whenever the solid is metal"
      ],
      "answer": 0,
      "why": "Bi = hL_c/k compares internal conduction resistance with surface convection resistance. Below about 0.1 the inside evens out much faster than the surface exchanges heat.",
      "proof": [
        "Biot number:  Bi = h·L_c/k, with L_c = volume/surface area.",
        "It is the ratio of conduction resistance inside the body (L_c/kA) to convection resistance at its surface (1/hA).",
        "Bi < 0.1 means internal temperature differences are under about 5% of the body-to-fluid difference, so one temperature describes the body.",
        "Small metal parts in air usually qualify. Thick plastic parts or strong liquid cooling usually do not.",
        "Do not confuse it with the Nusselt number, hL/k_fluid, which uses the fluid's conductivity."
      ],
      "reported": {
        "kind": "topic",
        "note": "A thermal-role candidate reported a transient heat transfer question. This exact question was not reported.",
        "sources": [
          "transient"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A 70 g cell (c = 1,000 J/kg·K) has 0.005 m² of surface cooled with h = 50 W/m²·K. Treating it as lumped, what is its thermal time constant?",
      "options": [
        "About 28 s",
        "About 1,400 s",
        "About 280 s",
        "About 2,800 s"
      ],
      "answer": 2,
      "why": "τ = m·c/(h·A) = (0.07 × 1,000)/(50 × 0.005) = 70/0.25 = 280 s.",
      "proof": [
        "Energy balance:  m·c·dT/dt = −h·A·(T − T_∞).",
        "Solution:  T − T_∞ = (T₀ − T_∞)·e^(−t/τ), with τ = m·c/(h·A).",
        "τ = 0.07 × 1,000 / (50 × 0.005) = 70 / 0.25 = 280 s.",
        "After one time constant 63% of the temperature change is complete, and after about three it is 95% done.",
        "It is the thermal version of an RC circuit: τ = R·C with R = 1/(hA) and C = m·c."
      ],
      "reported": {
        "kind": "topic",
        "note": "A thermal-role candidate reported a transient heat transfer question. This exact question was not reported.",
        "sources": [
          "transient"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A surface radiates heat to cold surroundings. If its absolute temperature doubles, by what factor does its emitted radiation increase?",
      "options": [
        "2×",
        "4×",
        "8×",
        "16×"
      ],
      "answer": 3,
      "why": "Stefan-Boltzmann: emitted power ∝ T⁴, so 2⁴ = 16×. Temperatures must be in kelvin.",
      "proof": [
        "Emitted radiation:  q = ε·σ·A·T⁴, with T in kelvin.",
        "Doubling T:  (2T)⁴ = 16·T⁴.",
        "Net exchange with surroundings at T_s is ε·σ·A·(T⁴ − T_s⁴).",
        "Radiation is small near room temperature next to forced convection, but dominates at high temperature and in vacuum."
      ]
    },
    {
      "level": "Design judgment",
      "q": "In forced convection of a gas at a fixed velocity and temperature, what happens to the convection coefficient h if the gas pressure is raised?",
      "options": [
        "It decreases, because viscosity increases",
        "It increases, because density and so Reynolds number increase",
        "It does not change",
        "It drops to zero"
      ],
      "answer": 1,
      "why": "For a gas, viscosity, conductivity and c_p barely change with pressure, but density rises in proportion. Re = ρVL/μ goes up, so Nu and h go up.",
      "proof": [
        "h comes from the Nusselt number:  h = Nu·k/L, and for forced convection Nu = C·Reᵐ·Prⁿ.",
        "For an ideal gas, μ, k and c_p depend on temperature and hardly at all on pressure, so Pr and k are unchanged.",
        "Density ρ = p/(R·T) rises in proportion to pressure, so Re = ρVL/μ rises in proportion too.",
        "Turbulent flow has m of about 0.8, so doubling pressure raises h by about 2^0.8 = 1.74×. Laminar (m = 0.5) gives 1.41×.",
        "The reverse matters at altitude or in partial vacuum: thin air cools poorly."
      ],
      "reported": {
        "kind": "question",
        "note": "A thermal-role candidate reported being asked how pressure affects the convection heat transfer coefficient.",
        "sources": [
          "pressure"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A heat exchanger wall has liquid coolant on one side and air on the other. Where do fins do the most good?",
      "options": [
        "On the liquid side",
        "Equally on either side",
        "On the air side",
        "Fins never help"
      ],
      "answer": 2,
      "why": "Fins add area. They pay off where the convection resistance 1/(hA) is largest, which is the low-h air side. That is why radiators have dense air-side fins.",
      "proof": [
        "Total resistance is roughly 1/(h_liquid·A) + wall + 1/(h_air·A).",
        "With h_air around 50 and h_liquid around 5,000, the air side is about 100 times the resistance of the liquid side.",
        "Adding area on the air side cuts the dominant term. Adding it on the liquid side changes a term that was already negligible.",
        "Fins work best when made of high-conductivity material and kept short and thin enough that the tips stay hot (high fin efficiency)."
      ]
    },
    {
      "level": "Applied",
      "q": "An aluminium bar (E = 69 GPa, α = 23 × 10⁻⁶ /K) is held between rigid walls and heated by 50 K. What compressive stress develops?",
      "options": [
        "About 8 MPa",
        "It depends on the bar's length",
        "About 159 MPa",
        "About 79 MPa"
      ],
      "answer": 3,
      "why": "σ = E·α·ΔT = 69,000 × 23 × 10⁻⁶ × 50 ≈ 79 MPa. The length cancels out.",
      "proof": [
        "Fully constrained:  σ = E·α·ΔT.",
        "σ = 69,000 MPa × 23 × 10⁻⁶ /K × 50 K = 79.4 MPa, compressive.",
        "Neither the length nor the cross-section appears."
      ],
      "proofTitle": "Direct formula",
      "methods": [
        {
          "title": "Free expansion, then push it back",
          "steps": [
            "Let the bar expand freely:  δ = α·ΔT·L.",
            "The walls then push it back by that same δ. The strain needed is δ/L = α·ΔT = 0.00115.",
            "Stress:  σ = E·ε = 69,000 × 0.00115 = 79.4 MPa.",
            "L cancels in δ/L, which is why the stress is independent of length. The wall force, σ·A, does depend on area."
          ]
        }
      ]
    },
    {
      "level": "Applied",
      "q": "A coolant loop must remove 5 kW with a 5 K coolant temperature rise. Using water-glycol with c_p ≈ 3,500 J/kg·K, what mass flow is needed?",
      "options": [
        "About 0.03 kg/s",
        "About 0.29 kg/s",
        "About 2.9 kg/s",
        "About 29 kg/s"
      ],
      "answer": 1,
      "why": "Q = ṁ·c_p·ΔT, so ṁ = 5,000/(3,500 × 5) ≈ 0.29 kg/s.",
      "proof": [
        "Energy balance on the coolant:  Q = ṁ·c_p·ΔT.",
        "ṁ = Q/(c_p·ΔT) = 5,000 / (3,500 × 5) = 5,000 / 17,500 = 0.286 kg/s.",
        "With density about 1,050 kg/m³ that is roughly 16 litres per minute.",
        "Halving the allowed temperature rise doubles the flow needed. A small ΔT keeps cells at even temperatures but costs pump power."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported battery cooling questions. This exact question was not reported.",
        "sources": [
          "cell"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is a boundary layer?",
      "options": [
        "The layer of paint or coating on a surface",
        "The thin region of fluid next to a surface where velocity or temperature changes from the wall value to the free-stream value",
        "The outer wall of a pipe",
        "The interface between two solids in contact"
      ],
      "answer": 1,
      "why": "Fluid sticks to the wall (no slip), so velocity rises from zero at the surface to the free-stream value across a thin layer. The thermal boundary layer is the same idea for temperature, and it sets the convection coefficient.",
      "proof": [
        "No-slip condition: fluid touching the wall has the wall's velocity.",
        "Viscosity spreads that slowing effect outward, creating a thin layer with a steep velocity gradient. Outside it the flow is unaffected.",
        "A thermal boundary layer forms the same way between wall temperature and fluid temperature.",
        "Heat crosses it mainly by conduction, so roughly h ≈ k_fluid/δ_thermal. A thinner layer means a higher h.",
        "Higher velocity and turbulence thin the layer, which is why forced and turbulent flow cool better. It also causes skin-friction drag."
      ],
      "reported": {
        "kind": "question",
        "note": "A thermal-systems candidate reported being asked what a boundary layer is.",
        "sources": [
          "blayer"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Water flows at 1 m/s through a 10 mm pipe (ν = 10⁻⁶ m²/s, Pr = 7, k = 0.6 W/m·K). Using Nu = 0.023·Re^0.8·Pr^0.4, what is the convection coefficient?",
      "options": [
        "About 48 W/m²·K",
        "About 480 W/m²·K",
        "About 4,800 W/m²·K",
        "About 48,000 W/m²·K"
      ],
      "answer": 2,
      "why": "Re = VD/ν = 10,000. Nu = 0.023 × 10,000^0.8 × 7^0.4 ≈ 79. h = Nu·k/D = 79 × 0.6/0.01 ≈ 4,800 W/m²·K.",
      "proof": [
        "Reynolds number:  Re = V·D/ν = 1 × 0.01/10⁻⁶ = 10,000, so the flow is turbulent.",
        "Dittus–Boelter:  Nu = 0.023 × Re^0.8 × Pr^0.4.",
        "10,000^0.8 = 1,585.   7^0.4 = 2.18.",
        "Nu = 0.023 × 1,585 × 2.18 = 79.4.",
        "h = Nu·k/D = 79.4 × 0.6/0.01 = 4,760 W/m²·K."
      ],
      "proofTitle": "Dittus–Boelter",
      "methods": [
        {
          "title": "Gnielinski correlation",
          "steps": [
            "Friction factor for a smooth pipe:  f = (0.79·ln Re − 1.64)⁻² = (7.28 − 1.64)⁻² = 0.0315.",
            "Nu = (f/8)(Re − 1,000)·Pr / [1 + 12.7·√(f/8)·(Pr^(2/3) − 1)].",
            "Numerator:  0.00393 × 9,000 × 7 = 247.9.   Denominator:  1 + 12.7 × 0.0627 × 2.66 = 3.12.",
            "Nu = 79.5, so h = 79.5 × 0.6/0.01 = 4,770 W/m²·K.",
            "Both agree. The steps are always the same: Re, then Nu from a correlation, then h = Nu·k/L."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate on Blind reported being asked to calculate a convective heat transfer coefficient using Reynolds and Nusselt numbers.",
        "sources": [
          "blind"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A 500 kg battery pack (c ≈ 1,000 J/kg·K) has 0.1 Ω internal resistance and runs at a steady 200 A. Its 5 m² surface loses heat by natural convection (h ≈ 10 W/m²·K) with a 20 K allowed rise over ambient. Does it need active cooling?",
      "options": [
        "No, passive cooling removes all the heat",
        "Yes: it generates about 4 kW and can only shed about 1 kW passively",
        "No, batteries do not generate heat",
        "Yes, but only because of sunlight"
      ],
      "answer": 1,
      "why": "Heat generated = I²R = 200² × 0.1 = 4 kW. Passive loss = hAΔT = 10 × 5 × 20 = 1 kW. The other 3 kW would keep heating the pack, so it needs active cooling.",
      "proof": [
        "Heat generated:  Q = I²·R = 40,000 × 0.1 = 4,000 W.",
        "Heat it can lose passively at the allowed temperature:  h·A·ΔT = 10 × 5 × 20 = 1,000 W.",
        "Generation is 4× the passive capacity, so the temperature keeps climbing past the limit.",
        "Active cooling must remove at least the 3 kW difference at this load.",
        "The decision is always a heat balance: generation against removal at the allowed temperature, for the worst duty cycle such as fast charging or sustained high power."
      ],
      "proofTitle": "Steady-state heat balance",
      "methods": [
        {
          "title": "How long before it overheats",
          "steps": [
            "Thermal mass:  m·c = 500 × 1,000 = 500,000 J/K.",
            "With no cooling at all:  dT/dt = 4,000/500,000 = 0.008 K/s.",
            "Time to rise 20 K:  20/0.008 = 2,500 s, about 42 minutes.",
            "So a short burst is fine on thermal mass alone, but sustained 200 A is not. Duty cycle decides the answer as much as peak power."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked how to decide whether a battery pack needs cooling.",
        "sources": [
          "m5",
          "cell"
        ]
      }
    }
  ]
});
