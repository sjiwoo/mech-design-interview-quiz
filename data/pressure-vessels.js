/* Topic: Pressure vessels and hoop stress. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "pressure-vessels",
 "title": "Pressure vessels and hoop stress",
 "blurb": "Thin and thick walls, deriving hoop and axial stress, sizing, end caps, test practice, rotating rings and press fits.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "Derive the hoop stress in a thin-walled cylinder of radius r and wall thickness t under internal pressure p. Cut it in half along its length. Which force balance gives the answer?",
   "options": [
    "Pressure on the projected area 2r·L balances the wall stress on the two cut edges, 2t·L",
    "Pressure on the end area πr² balances the wall stress on the circumference 2πr·t",
    "Pressure on the curved area πr·L balances the wall stress on one cut edge t·L",
    "Pressure on the full surface 2πr·L balances the stress on both cut edges"
   ],
   "answer": 0,
   "why": "Pressure on a curved surface pushes the half-cylinder apart with a force equal to p times its projected area, 2r·L. The two strips of wall at the cut hold it together, each with σ·t·L. So p·2rL = 2σtL, giving σ_h = pr/t.",
   "proofTitle": "Half-cylinder free body",
   "proof": [
    "Take a length L of the cylinder and cut it along a diameter. Keep one half.",
    "Pressure acts normal to the inner surface. Its components along the cut cancel by symmetry; perpendicular to the cut they add up to p × projected area = p·(2r·L).",
    "The wall is cut in two places, top and bottom, each with area t·L, carrying the hoop stress σ_h.",
    "Balance:  p·2r·L = 2·σ_h·t·L.",
    "σ_h = p·r/t."
   ],
   "methods": [
    {
     "title": "Integrate the pressure",
     "steps": [
      "On a strip at angle θ, the force is p·(r dθ)·L, acting radially.",
      "Its component perpendicular to the cut is p·r·L·sin θ dθ.",
      "Integrate from 0 to π:  p·r·L·[−cos θ] = 2·p·r·L.",
      "Same as pressure times projected area, so σ_h = pr/t again. The projected-area shortcut works for any curved surface."
     ]
    }
   ],
   "reported": {
    "kind": "question",
    "note": "A Mechanical Design Engineer candidate reported being asked to derive the hoop stress equation. A Blind thread on Tesla mechanical interviews also lists hoop stress in a cylinder of radius r and thickness t as an example question.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   },
   "sketch": {
    "h": 180,
    "alt": "Half of a pressurised cylinder with pressure arrows and wall stress at the two cut edges",
    "items": [
     [
      "p",
      [
       [
        100,
        140
       ],
       [
        100,
        120
       ],
       [
        120,
        72
       ],
       [
        170,
        42
       ],
       [
        230,
        32
       ],
       [
        290,
        42
       ],
       [
        340,
        72
       ],
       [
        360,
        120
       ],
       [
        360,
        140
       ]
      ],
      {
       "w": 2
      }
     ],
     [
      "p",
      [
       [
        112,
        140
       ],
       [
        112,
        122
       ],
       [
        130,
        80
       ],
       [
        176,
        52
       ],
       [
        230,
        44
       ],
       [
        284,
        52
       ],
       [
        330,
        80
       ],
       [
        348,
        122
       ],
       [
        348,
        140
       ]
      ],
      {
       "w": 1,
       "m": 1
      }
     ],
     [
      "a",
      230,
      120,
      230,
      52,
      {
       "m": 1
      }
     ],
     [
      "a",
      170,
      122,
      150,
      72,
      {
       "m": 1
      }
     ],
     [
      "a",
      290,
      122,
      310,
      72,
      {
       "m": 1
      }
     ],
     [
      "t",
      230,
      135,
      "p on 2r × L",
      {
       "s": 12
      }
     ],
     [
      "a",
      106,
      150,
      106,
      176,
      {
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "a",
      354,
      150,
      354,
      176,
      {
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "t",
      60,
      168,
      "σ_h·t·L",
      {
       "s": 12,
       "a": 1
      }
     ],
     [
      "t",
      400,
      168,
      "σ_h·t·L",
      {
       "s": 12,
       "a": 1
      }
     ],
     [
      "l",
      100,
      140,
      360,
      140,
      {
       "d": 1,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Why is the axial (longitudinal) stress in a closed thin-walled cylinder only half the hoop stress?",
   "options": [
    "The end caps carry half the load",
    "Axial stress is only felt near the ends",
    "The pressure acts on the end area πr², but the wall resisting it has area 2πr·t, twice as large in proportion",
    "Material is stronger along the length"
   ],
   "answer": 2,
   "why": "Cut the cylinder across its length. The pressure pushes on the end with force p·πr². The ring of wall holding it has area 2πr·t. So σ_a = p·πr²/(2πr·t) = pr/2t, half of pr/t.",
   "proof": [
    "Transverse cut: pressure force on the end cap  F = p·π·r².",
    "Wall resisting it: a thin ring of circumference 2πr and thickness t, area 2πr·t.",
    "σ_a = p·πr²/(2πrt) = p·r/(2t).",
    "Hoop: σ_h = pr/t. So σ_a = σ_h/2.",
    "Consequence: a pressurised pipe splits lengthwise, because the hoop direction carries twice the stress, and longitudinal welds need more care than circumferential ones."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A steel tube with mean radius 50 mm must hold 10 MPa. The allowable stress is 125 MPa. What minimum wall thickness does thin-wall theory give?",
   "options": [
    "2 mm",
    "4 mm",
    "8 mm",
    "0.4 mm"
   ],
   "answer": 1,
   "why": "Hoop stress governs: σ_h = pr/t, so t = pr/σ = 10 × 50/125 = 4 mm. r/t = 12.5, above 10, so thin-wall theory is acceptable.",
   "proof": [
    "The hoop stress is the largest, so design to it:  t = p·r/σ_allow.",
    "t = 10 × 50/125 = 4 mm.",
    "Check the thin-wall assumption: r/t = 50/4 = 12.5 ≥ 10, so the stress is close to uniform through the wall.",
    "Axial stress is 62.5 MPa, half the allowable.",
    "In practice add corrosion allowance and round up to a standard tube size."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A hydraulic cylinder has inner radius 20 mm, outer radius 30 mm and 30 MPa inside. Thin-wall theory (pr/t with the inner radius) gives 60 MPa. What does thick-wall (Lamé) theory say about the hoop stress?",
   "options": [
    "It is a uniform 60 MPa",
    "It peaks at about 78 MPa at the outer surface",
    "It peaks at about 78 MPa at the inner bore",
    "It is lower everywhere, about 30 MPa"
   ],
   "answer": 2,
   "why": "With r/t = 2 the wall is thick, and stress is not uniform. Lamé gives the hoop stress highest at the bore: p(r_o² + r_i²)/(r_o² − r_i²) = 30 × 1,300/500 = 78 MPa, falling to 48 MPa at the outside.",
   "proof": [
    "Thin-wall rule of thumb: valid when r/t ≥ 10. Here r/t = 20/10 = 2, so use thick-wall theory.",
    "Lamé hoop stress for internal pressure only:  σ_h(r) = p·r_i²/(r_o² − r_i²) × (1 + r_o²/r²).",
    "At the bore (r = 20):  30 × 400/500 × (1 + 900/400) = 24 × 3.25 = 78 MPa.",
    "At the outside (r = 30):  24 × 2 = 48 MPa.",
    "The bore also sees radial stress −30 MPa, so its von Mises stress is higher still. Thin-wall theory with the inner radius under-predicts the peak by 23%."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A thin-walled steel cylinder (r = 100 mm, t = 5 mm, E = 200 GPa, ν = 0.3) is pressurised to 2 MPa with closed ends. How much does its radius grow?",
   "options": [
    "About 0.017 mm",
    "About 0.02 mm",
    "About 0.17 mm",
    "About 0.0017 mm"
   ],
   "answer": 0,
   "why": "Hoop stress is 40 MPa and axial 20 MPa. The hoop strain includes the Poisson effect of the axial stress: ε = (40 − 0.3 × 20)/200,000 = 1.7 × 10⁻⁴. Radial growth = r·ε = 0.017 mm.",
   "proof": [
    "σ_h = pr/t = 2 × 100/5 = 40 MPa.  σ_a = pr/2t = 20 MPa.",
    "Hoop strain:  ε_h = (σ_h − ν·σ_a)/E = (40 − 6)/200,000 = 1.7 × 10⁻⁴.",
    "Circumference grows by ε_h, and so does the radius:  δr = r·ε_h = 100 × 1.7 × 10⁻⁴ = 0.017 mm.",
    "Ignoring Poisson's effect would give 0.020 mm, 18% too high.",
    "This growth matters for seals and press fits on the outside of pressurised parts."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "An end cap of radius 100 mm closes a tank at 1 MPa. It is held by 8 bolts. Before allowing for preload or gasket loads, about how much separating force does each bolt carry?",
   "options": [
    "About 31 kN",
    "About 1.3 kN",
    "About 12.5 kN",
    "About 3.9 kN"
   ],
   "answer": 3,
   "why": "The pressure pushes on the whole cap area: F = p·πr² = 1 × π × 100² = 31,400 N. Shared by 8 bolts, about 3.9 kN each.",
   "proof": [
    "Force on the cap:  F = p × A = 1 N/mm² × π × 100² mm² = 31,416 N.",
    "Per bolt:  31,416/8 = 3,927 N ≈ 3.9 kN.",
    "Use the gasket's effective seal diameter, not the bolt circle, for the area. A larger seal diameter means more force.",
    "Bolt preload must exceed this with margin, or the joint opens and leaks. Gasketed joints also need a minimum seating stress.",
    "The force grows with r², so doubling the cap size quadruples the bolt load."
   ],
   "sketch": {
    "h": 160,
    "alt": "End cap bolted onto a pressurised tank",
    "items": [
     [
      "r",
      60,
      40,
      220,
      80,
      {
       "f": 1
      }
     ],
     [
      "t",
      170,
      85,
      "p = 1 MPa",
      {
       "s": 13
      }
     ],
     [
      "r",
      280,
      30,
      16,
      100,
      {
       "f": 2
      }
     ],
     [
      "l",
      296,
      50,
      320,
      50,
      {
       "w": 3
      }
     ],
     [
      "l",
      296,
      110,
      320,
      110,
      {
       "w": 3
      }
     ],
     [
      "a",
      230,
      80,
      276,
      80,
      {
       "a": 1
      }
     ],
     [
      "t",
      330,
      54,
      "8 bolts",
      {
       "s": 12,
       "an": "start"
      }
     ],
     [
      "t",
      330,
      130,
      "r = 100 mm",
      {
       "s": 12,
       "an": "start",
       "m": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "Why are pressure vessels proof-tested with water (hydrostatic test) rather than with compressed air at the same pressure?",
   "options": [
    "Water finds leaks more easily",
    "Air would corrode the vessel",
    "Water is nearly incompressible, so it stores very little energy and a rupture just leaks instead of exploding",
    "Water is cheaper to pressurise"
   ],
   "answer": 2,
   "why": "Stored energy depends on how much the fluid compresses. Water barely compresses, so at 30 MPa a litre stores about 200 J. The same volume of gas stores tens of thousands, and a failure throws fragments.",
   "proof": [
    "Energy stored in a compressed fluid ≈ ∫p dV. For a liquid, V barely changes:  E ≈ p²V/(2K), with bulk modulus K ≈ 2.2 GPa for water.",
    "1 litre of water at 30 MPa:  (30 × 10⁶)²× 0.001/(2 × 2.2 × 10⁹) ≈ 200 J.",
    "1 litre of air at 30 MPa expanding to atmosphere: roughly 60,000 J, about 300 times more.",
    "A hydrotest failure releases a small spray. A pneumatic failure behaves like a bomb.",
    "Test pressure is typically about 1.3 to 1.5 times the design pressure, to prove margin and to find leaks safely."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "At the same pressure and wall thickness, a tank's diameter is doubled. What happens to the hoop stress, and what wall thickness restores it?",
   "options": [
    "Hoop stress quadruples; double the wall thickness",
    "Hoop stress doubles; quadruple the wall thickness",
    "Hoop stress is unchanged",
    "Hoop stress doubles; double the wall thickness"
   ],
   "answer": 3,
   "why": "σ_h = pr/t, so it is proportional to radius. Doubling the diameter doubles the stress, and doubling t brings it back.",
   "proof": [
    "σ_h = p·r/t ∝ r at fixed p and t.",
    "2r gives 2σ_h.",
    "To restore:  t' = 2t.",
    "Wall mass per unit length goes as r·t, so it rises four times. Large tanks are heavy for this reason.",
    "Small diameters handle high pressure easily, which is why high-pressure lines are small-bore."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A thin steel ring (density 7,850 kg/m³) spins so that its rim moves at 100 m/s, like the rim of a flywheel or a motor rotor sleeve. What hoop stress does the spin create?",
   "options": [
    "About 7.9 MPa",
    "About 785 MPa",
    "About 78.5 MPa",
    "It depends on the ring's thickness"
   ],
   "answer": 2,
   "why": "For a thin rotating ring, σ = ρ·v², independent of its size or thickness: 7,850 × 100² = 78.5 MPa.",
   "proof": [
    "A small arc of the ring needs centripetal force m·v²/r. The hoop tension supplies it, the same way pressure does in a vessel.",
    "Equivalent pressure from the ring's own mass: p = ρ·t·v²/r. Substitute into σ = pr/t:  σ = ρ·v².",
    "σ = 7,850 × 10,000 = 78.5 × 10⁶ Pa = 78.5 MPa.",
    "Thickness and radius cancel, so making the ring thicker does not help. Only rim speed and material matter.",
    "Maximum safe rim speed:  v = √(σ_allow/ρ). That is why high-speed rotors use carbon-fibre sleeves: high strength, low density."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   },
   "sketch": {
    "h": 170,
    "alt": "Spinning ring with hoop tension",
    "items": [
     [
      "c",
      230,
      90,
      62,
      {
       "w": 6,
       "m": 1
      }
     ],
     [
      "c",
      230,
      90,
      4,
      {
       "f": 2
      }
     ],
     [
      "a",
      230,
      28,
      300,
      28,
      {
       "a": 1,
       "w": 2
      }
     ],
     [
      "t",
      310,
      32,
      "v = 100 m/s",
      {
       "s": 13,
       "an": "start",
       "a": 1
      }
     ],
     [
      "t",
      230,
      170,
      "σ = ρ·v², whatever the thickness",
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
   "q": "A steel shaft is pressed into a hub with an interference fit. Where is the hub's stress highest, and what kind of stress is it?",
   "options": [
    "At the outer surface, compressive",
    "At the bore, tensile hoop stress",
    "Uniform through the hub, compressive",
    "At the bore, compressive hoop stress"
   ],
   "answer": 1,
   "why": "The oversized shaft pushes outward on the bore like internal pressure. The hub responds the same way as a thick-walled cylinder: tensile hoop stress, highest at the bore.",
   "proof": [
    "Interference creates a contact pressure p at the shaft-hub interface.",
    "For the hub that is internal pressure, so Lamé applies: hoop stress is tensile and largest at the bore.",
    "The shaft sees the same p as external pressure, so it is in compression.",
    "A thin hub can crack from the bore, especially a brittle cast or powder-metal hub.",
    "Keyways or holes near the bore add stress concentrations on top of the hoop stress."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   },
   "sketch": {
    "h": 170,
    "alt": "Shaft pressed into a hub: contact pressure pushes the bore outward",
    "items": [
     [
      "c",
      230,
      90,
      70,
      {
       "f": 1
      }
     ],
     [
      "c",
      230,
      90,
      30,
      {
       "f": 2
      }
     ],
     [
      "t",
      230,
      95,
      "shaft",
      {
       "s": 12
      }
     ],
     [
      "t",
      230,
      146,
      "hub",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "a",
      262,
      90,
      288,
      90,
      {
       "a": 1
      }
     ],
     [
      "a",
      198,
      90,
      172,
      90,
      {
       "a": 1
      }
     ],
     [
      "a",
      230,
      58,
      230,
      32,
      {
       "a": 1
      }
     ],
     [
      "t",
      330,
      94,
      "pressure on the bore",
      {
       "s": 12,
       "an": "start",
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A steel hub with a 50 mm bore must be heated to fit over a shaft with 0.05 mm of interference. Steel expands at 12 × 10⁻⁶ per °C. How much must the hub be heated above the shaft, at minimum?",
   "options": [
    "About 8 °C",
    "About 42 °C",
    "About 830 °C",
    "About 83 °C"
   ],
   "answer": 3,
   "why": "The bore must grow by the interference: ΔT = δ/(α·d) = 0.05/(12 × 10⁻⁶ × 50) = 83 °C. In practice add more to give assembly clearance.",
   "proof": [
    "Thermal growth of the bore:  Δd = α·d·ΔT.",
    "Set Δd = 0.05 mm:  ΔT = 0.05/(12 × 10⁻⁶ × 50).",
    "ΔT = 0.05/0.0006 = 83 °C.",
    "Add clearance so it slides on before cooling: typically another 0.03 to 0.05 mm, which pushes the target to roughly 150 to 170 °C.",
    "Stay below the temperature that would temper or soften the hub. Alternatively, cool the shaft in liquid nitrogen."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "For a closed thin-walled cylinder under internal pressure, how does the von Mises stress in the wall compare with the hoop stress?",
   "options": [
    "It is about 87% of the hoop stress",
    "It equals the hoop stress",
    "It is 1.5 times the hoop stress",
    "It is half the hoop stress"
   ],
   "answer": 0,
   "why": "With σ₁ = pr/t, σ₂ = pr/2t and σ₃ ≈ 0, von Mises gives √(σ₁² − σ₁σ₂ + σ₂²) = σ₁·√0.75 = 0.87σ₁. The axial stress actually helps, so designing to hoop stress alone is slightly conservative.",
   "proof": [
    "Principal stresses at the wall: hoop σ₁, axial σ₂ = σ₁/2, radial ≈ 0 (small compared with the others for a thin wall).",
    "Plane-stress von Mises:  σ_vm = √(σ₁² − σ₁σ₂ + σ₂²).",
    "= σ₁·√(1 − 0.5 + 0.25) = σ₁·√0.75 = 0.866σ₁.",
    "Tresca gives σ₁ − 0 = σ₁, which is more conservative.",
    "For an open-ended tube (no axial stress), von Mises equals the hoop stress."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A tall, open-topped water tank is made of welded rings. Why are the bottom rings made of thicker plate than the top rings?",
   "options": [
    "The bottom carries the weight of the rings above",
    "Hydrostatic pressure, and so hoop stress, increase with depth",
    "Welds are weaker near the ground",
    "Corrosion only happens at the bottom"
   ],
   "answer": 1,
   "why": "Pressure in a liquid is ρgh, so it grows linearly with depth. Hoop stress is pr/t, so to keep the stress constant the wall must thicken towards the bottom.",
   "proof": [
    "Pressure at depth h:  p = ρ·g·h. For water, about 10 kPa per metre.",
    "At 10 m depth:  p ≈ 98 kPa.",
    "Required thickness:  t = p·r/σ_allow, so t grows linearly with depth.",
    "Tanks are built with stepped plate thicknesses: thick at the base, thin near the top, saving steel.",
    "The weight of the shell above is a much smaller effect than the water pressure."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A tube has radius 10 mm, wall 1 mm and an ultimate strength of 400 MPa. It works at 10 MPa. Roughly what burst pressure does thin-wall theory predict, and what is the safety factor?",
   "options": [
    "About 4 MPa, SF 0.4",
    "About 40 MPa, SF 4",
    "About 400 MPa, SF 40",
    "About 20 MPa, SF 2"
   ],
   "answer": 1,
   "why": "Burst happens roughly when hoop stress reaches the ultimate strength: p_burst = σ_u·t/r = 400 × 1/10 = 40 MPa. That is 4 times the working pressure.",
   "proof": [
    "Set σ_h = σ_u:  p_burst = σ_u·t/r.",
    "p_burst = 400 × 1/10 = 40 MPa.",
    "SF on burst = 40/10 = 4.",
    "Yield happens first: with a 250 MPa yield, the tube would start to bulge permanently at about 25 MPa.",
    "Codes usually require a burst safety factor of 3 to 4, and the wall thins as it bulges, so real burst is slightly below this estimate."
   ],
   "reported": {
    "kind": "topic",
    "note": "Hoop stress and pressure vessels were reported in Tesla interviews, including a request to derive the hoop stress equation. This exact question was not reported.",
    "sources": [
     "hoopder",
     "selfweight"
    ]
   }
  }
 ]
});
