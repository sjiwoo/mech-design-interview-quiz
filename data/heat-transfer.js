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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]
});
