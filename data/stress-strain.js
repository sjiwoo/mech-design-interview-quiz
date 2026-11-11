/* Topic: Stress-strain and material properties. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "stress-strain",
  "title": "Stress–strain and materials",
  "blurb": "Reading the stress–strain curve, elastic constants, yield and ultimate strength, toughness, and steel vs aluminium.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "On an engineering stress–strain curve for a metal, what does the slope of the initial straight-line region represent?",
      "options": [
        "Yield strength",
        "Toughness",
        "Young's modulus E",
        "Poisson's ratio"
      ],
      "answer": 2,
      "why": "In the linear elastic region σ = E·ε (Hooke's law), so the slope is Young's modulus.",
      "proof": [
        "In the elastic region stress is proportional to strain:  σ = E·ε.",
        "Slope = Δσ/Δε = E. Strain has no units, so E has units of stress (GPa).",
        "Typical values: steel about 200 GPa, titanium about 114 GPa, aluminium about 69 GPa.",
        "Yield strength is a point on the curve, toughness is an area under it, and Poisson's ratio relates lateral to axial strain."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked about stress and strain and Young's modulus in a hiring-manager round.",
        "sources": [
          "srme"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Aluminium has no sharp yield point. How is its yield strength usually defined?",
      "options": [
        "The stress where a line parallel to the elastic slope, offset by 0.2% strain, crosses the curve",
        "The stress at 0.2% total strain",
        "Half of the ultimate tensile strength",
        "The highest stress on the curve"
      ],
      "answer": 0,
      "why": "The 0.2% offset method: draw a line with slope E starting at ε = 0.002 and read the stress where it meets the curve.",
      "proof": [
        "Many alloys curve gradually from elastic to plastic, so there is no clear corner to read.",
        "Draw a line with the elastic slope E starting from ε = 0.002 on the strain axis.",
        "Where it crosses the curve, the material has 0.2% permanent (plastic) strain. That stress is the 0.2% offset yield, R_p0.2.",
        "It is not the stress at 0.2% total strain, because total strain there also includes the elastic part σ/E."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A 10 mm diameter steel rod (E = 200 GPa) is 1 m long and carries 10 kN in tension. How much does it stretch?",
      "options": [
        "0.064 mm",
        "6.4 mm",
        "1.27 mm",
        "0.64 mm"
      ],
      "answer": 3,
      "why": "δ = PL/AE = (10,000 × 1,000)/(78.5 × 200,000) ≈ 0.64 mm.",
      "proof": [
        "Area:  A = π × 10²/4 = 78.54 mm².",
        "δ = PL/(AE), in N and mm with E = 200,000 N/mm².",
        "δ = 10,000 × 1,000 / (78.54 × 200,000) = 10,000,000 / 15,708,000 = 0.637 mm."
      ],
      "proofTitle": "Direct formula δ = PL/AE",
      "methods": [
        {
          "title": "Stress, then strain, then stretch",
          "steps": [
            "Stress:  σ = P/A = 10,000 / 78.54 = 127.3 MPa. That is below yield for any steel, so Hooke's law applies.",
            "Strain:  ε = σ/E = 127.3 / 200,000 = 6.37 × 10⁻⁴.",
            "Stretch:  δ = ε·L = 6.37 × 10⁻⁴ × 1,000 mm = 0.637 mm."
          ]
        },
        {
          "title": "Treat the rod as a spring",
          "steps": [
            "Axial stiffness:  k = AE/L = 78.54 × 200,000 / 1,000 = 15,708 N/mm.",
            "δ = P/k = 10,000 / 15,708 = 0.637 mm.",
            "This form is handy for bolted joints, where bolt and clamped parts are springs."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A steel specimen is loaded past yield and then fully unloaded. What path does it follow on the stress–strain curve as it unloads?",
      "options": [
        "Back along the original loading curve to zero strain",
        "A straight line parallel to the elastic slope, leaving permanent strain",
        "Straight down at constant strain",
        "A straight line directly to the origin"
      ],
      "answer": 1,
      "why": "Unloading is elastic, with slope E. The elastic strain is recovered and the plastic strain stays.",
      "proof": [
        "Total strain at any point is elastic plus plastic:  ε = σ/E + ε_p.",
        "Removing load only recovers the elastic part, so the path is a straight line of slope E.",
        "At zero stress the remaining strain is ε_p, the permanent set.",
        "Reloading goes back up the same line and yields at the higher stress it reached before. That is work hardening."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "On an engineering stress–strain curve for a ductile metal, where does necking begin?",
      "options": [
        "At the proportional limit",
        "At the ultimate tensile strength",
        "At the yield point",
        "At fracture"
      ],
      "answer": 1,
      "why": "Up to the ultimate tensile strength the specimen deforms uniformly. At the peak, deformation localises into a neck.",
      "proof": [
        "Before the peak, work hardening raises the strength faster than the cross-section shrinks, so deformation spreads evenly.",
        "At the ultimate tensile strength the two effects balance: load capacity is at its maximum.",
        "Beyond it, any slightly thinner spot weakens faster than it hardens, so strain concentrates there and a neck forms.",
        "Engineering stress then falls because it is load divided by the original area."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "After necking starts, engineering stress falls. What does true stress do?",
      "options": [
        "It also falls",
        "It stays constant",
        "It drops to zero",
        "It keeps rising until fracture"
      ],
      "answer": 3,
      "why": "True stress is load over the actual, shrinking area. The material keeps work hardening, so true stress rises all the way to fracture.",
      "proof": [
        "Engineering stress = F/A₀ (original area). True stress = F/A (current area).",
        "In the neck A shrinks quickly, faster than F drops, so F/A keeps increasing.",
        "Before necking, with constant volume:  σ_true = σ_eng(1 + ε_eng)  and  ε_true = ln(1 + ε_eng).",
        "The fall in the engineering curve comes from dividing by the original area, not from the material getting weaker."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A mild steel bracket deflects too much. A colleague suggests switching to a heat-treated alloy steel with three times the yield strength. What happens to the deflection?",
      "options": [
        "It stays essentially the same",
        "It drops by about half",
        "It drops to one third",
        "It increases"
      ],
      "answer": 0,
      "why": "Deflection depends on E, and all steels have E of about 200 GPa. Alloying and heat treatment change strength, not stiffness.",
      "proof": [
        "Elastic deflection is δ = k·(load)·Lⁿ/(E·I). Yield strength does not appear.",
        "E comes from atomic bonding, which alloying and heat treatment barely change: about 200 GPa for mild, alloy and tool steels.",
        "So the stronger steel deflects the same amount. It can only carry more load before permanent deformation.",
        "To cut deflection, change geometry (raise I, shorten the span, add supports) or pick a material with higher E."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A steel has yield strength 400 MPa and E = 200 GPa. What is its modulus of resilience (elastic energy stored per unit volume at yield)?",
      "options": [
        "0.002 MJ/m³",
        "0.8 MJ/m³",
        "0.4 MJ/m³",
        "4 MJ/m³"
      ],
      "answer": 2,
      "why": "u = σ_y²/(2E) = 400²/(2 × 200,000) = 0.4 MPa = 0.4 MJ/m³.",
      "proof": [
        "Resilience is the area under the stress–strain curve up to yield.",
        "u = σ_y²/(2E) = 160,000 / 400,000 = 0.4 N·mm/mm³.",
        "1 N·mm/mm³ = 1 MPa = 1 MJ/m³, so u = 0.4 MJ/m³.",
        "Toughness is the area all the way to fracture, which is far larger for a ductile metal."
      ],
      "proofTitle": "Formula σ_y²/2E",
      "methods": [
        {
          "title": "Area of the elastic triangle",
          "steps": [
            "Yield strain:  ε_y = σ_y/E = 400 / 200,000 = 0.002.",
            "The elastic region is a triangle with base ε_y and height σ_y.",
            "Area = ½ × 0.002 × 400 MPa = 0.4 MPa = 0.4 MJ/m³."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A rod with Poisson's ratio 0.3 is stretched to an axial strain of +0.001. What is its lateral (diameter) strain?",
      "options": [
        "+0.0003",
        "−0.0033",
        "−0.001",
        "−0.0003"
      ],
      "answer": 3,
      "why": "ε_lateral = −ν·ε_axial = −0.3 × 0.001 = −0.0003. The rod gets thinner as it gets longer.",
      "proof": [
        "Poisson's ratio:  ν = −ε_lateral / ε_axial.",
        "ε_lateral = −0.3 × 0.001 = −0.0003.",
        "A 10 mm rod would shrink in diameter by 10 × 0.0003 = 0.003 mm.",
        "Most metals have ν of about 0.3. Rubber is close to 0.5, which means its volume barely changes."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel tie rod in pure tension is replaced by an aluminium rod of the same length and the same mass. How does its axial stiffness change?",
      "options": [
        "About the same",
        "About one third as stiff",
        "About three times stiffer",
        "About nine times stiffer"
      ],
      "answer": 0,
      "why": "Axial stiffness per unit mass depends on E/ρ, which is nearly identical for steel, aluminium and titanium (about 25 MN·m/kg).",
      "proof": [
        "Axial stiffness:  k = AE/L. Mass:  m = ρAL, so A = m/(ρL).",
        "k = (m/L²)·(E/ρ). For the same mass and length, k depends only on E/ρ.",
        "Steel:  200 / 7.85 = 25.5.   Aluminium:  69 / 2.70 = 25.6.   Titanium:  114 / 4.43 = 25.7  (GPa per g/cm³).",
        "So the aluminium rod has 2.9× the area and about the same stiffness.",
        "In bending it is different: the lighter material lets you make a deeper section, and stiffness goes with depth cubed, so aluminium wins per kilogram."
      ],
      "reported": {
        "kind": "topic",
        "note": "The stress–strain curve and material properties are reported in many Tesla interviews. This exact question was not reported.",
        "sources": [
          "mde",
          "diam",
          "fbd"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Moving along the stress–strain curve of mild steel from zero load to failure, in what order do these points appear?",
      "options": [
        "Yield point, proportional limit, fracture, ultimate strength",
        "Proportional limit, yield point, ultimate strength, fracture",
        "Ultimate strength, yield point, proportional limit, fracture",
        "Proportional limit, ultimate strength, yield point, fracture"
      ],
      "answer": 1,
      "why": "Linear elastic up to the proportional limit, then yield, then strain hardening up to the ultimate tensile strength, then necking and fracture.",
      "proof": [
        "Origin to proportional limit: straight line of slope E (Hooke's law).",
        "Elastic limit: just beyond, the last point from which unloading leaves no permanent strain.",
        "Yield point: plastic flow begins. Mild steel shows an upper and lower yield point and a flat yield plateau.",
        "Strain hardening: stress rises again as dislocations pile up.",
        "Ultimate tensile strength: the peak of the engineering curve. Necking starts here.",
        "Fracture: engineering stress falls during necking until the specimen breaks.",
        "Areas: under the elastic triangle is resilience, under the whole curve is toughness."
      ],
      "reported": {
        "kind": "question",
        "note": "Many candidates reported being asked to draw or explain the stress–strain curve and label all its points.",
        "sources": [
          "mde",
          "sslabel2",
          "diam",
          "fbd",
          "taro"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Which statement about steel, mild steel and aluminium is correct?",
      "options": [
        "Mild steel is an aluminium alloy",
        "Mild steel is stiffer than high-strength steel",
        "Mild steel is a low-carbon steel: ductile, weldable and cheap, with the same stiffness as other steels",
        "Aluminium has about half the density of steel"
      ],
      "answer": 2,
      "why": "Steel is iron with carbon. Mild steel is the low-carbon kind (about 0.05 to 0.25% C). All steels have E ≈ 200 GPa. Aluminium is a different metal with about a third of steel's density and stiffness.",
      "proof": [
        "Steel: iron alloyed with carbon (up to about 2%) and often other elements. Density about 7.85 g/cm³, E about 200 GPa.",
        "Mild steel: low carbon. Yield about 250 MPa, very ductile, easy to form and weld, low cost, rusts.",
        "Medium and high-carbon or alloy steels: stronger and harder after heat treatment, less ductile, same E.",
        "Aluminium: density about 2.70 g/cm³ and E about 69 GPa, both roughly one third of steel. No endurance limit, good corrosion resistance and conductivity, easy to cast, extrude and machine.",
        "Typical yield: 6061-T6 about 275 MPa, 7075-T6 about 500 MPa."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked the difference between steel, aluminium and mild steel.",
        "sources": [
          "diam",
          "mde"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is the difference between stiffness and resilience?",
      "options": [
        "They are the same property",
        "Stiffness is resistance to elastic deformation. Resilience is the elastic energy a material can absorb before yielding",
        "Stiffness is the stress at fracture. Resilience is the strain at fracture",
        "Stiffness is hardness. Resilience is resistance to corrosion"
      ],
      "answer": 1,
      "why": "Stiffness is the slope E (or k for a part). Resilience is the area under the curve up to yield, σ_y²/2E. A stiffer material with the same yield strength is less resilient.",
      "proof": [
        "Stiffness: how much load it takes to deform something elastically. For a material it is E, for a part it is k = force/deflection.",
        "Resilience: elastic strain energy per volume stored at yield:  u = σ_y²/(2E).",
        "They pull in opposite directions: raising E with σ_y fixed lowers resilience.",
        "Example: spring steel has high σ_y, so high resilience. Rubber has very low E, so it also stores a lot of elastic energy.",
        "Toughness is different again: energy to fracture, the area under the whole curve."
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked about stiffness versus resilience.",
        "sources": [
          "pend"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Engineering materials are usually grouped as metals, ceramics, polymers and composites. Which group does wood belong to?",
      "options": [
        "Metals",
        "Ceramics",
        "Polymers",
        "Composites"
      ],
      "answer": 3,
      "why": "Wood is a natural composite: strong cellulose fibres held in a lignin matrix. That is why it is much stronger and stiffer along the grain than across it.",
      "proof": [
        "A composite combines two or more distinct phases so the result is better than either alone.",
        "Wood: cellulose fibres (the reinforcement) in a lignin and hemicellulose matrix.",
        "Like carbon-fibre laminate, it is anisotropic: stiff and strong along the fibres, weak across them.",
        "Other natural composites: bone (collagen and mineral) and bamboo."
      ],
      "reported": {
        "kind": "question",
        "note": "An intern candidate reported being asked which category of materials wood falls under.",
        "sources": [
          "wood"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What is brass, and what property lets you separate its constituents?",
      "options": [
        "Copper and tin; they separate with a magnet",
        "Copper and zinc; zinc boils at a lower temperature than copper melts",
        "Iron and copper; they separate by density in water",
        "Pure copper that has been heat treated"
      ],
      "answer": 1,
      "why": "Brass is a copper–zinc alloy. Zinc boils at about 907 °C, below copper's melting point of about 1,085 °C, so heating drives the zinc off as vapour. Copper and tin make bronze.",
      "proof": [
        "Brass: copper with roughly 5 to 40% zinc. Bronze is copper with tin.",
        "Zinc melts at 420 °C and boils at 907 °C. Copper melts at 1,085 °C.",
        "Heat brass above 907 °C and zinc leaves as vapour, which can be condensed and collected. Copper is left behind.",
        "Industrially, copper is also purified by electrolytic refining.",
        "Neither metal is magnetic, so a magnet does nothing."
      ],
      "reported": {
        "kind": "question",
        "note": "An intern candidate reported being asked the composition of brass and how to separate it from copper.",
        "sources": [
          "brass"
        ]
      }
    }
  ]
});
