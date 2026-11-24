/* Topic: Materials trick questions. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "materials-tricks",
 "title": "Materials trick questions",
 "blurb": "Real interview questions on materials that catch people out: hardening and stiffness, which metal is stiffest, aluminium alloys, magnets and stainless, galvanic and copper–aluminium joints, conductivity, fatigue limits, hardness against toughness, bimetal strips and work hardening.",
 "questions": [
  {
   "level": "Trick question",
   "q": "A stainless steel part is supplied either fully annealed (soft) or cold-rolled 'full hard', with several times the yield strength. How do their elastic moduli compare?",
   "options": [
    "Full hard is about twice as stiff",
    "Annealed is stiffer, because it is softer",
    "About the same: hardening raises strength, not stiffness",
    "Full hard has no defined modulus"
   ],
   "answer": 2,
   "why": "Elastic modulus comes from the stiffness of the bonds between atoms, which hardening does not change. Cold work and heat treatment move dislocations around, which raises yield and tensile strength, but the slope of the elastic line stays at about 193 to 200 GPa.",
   "proof": [
    "E is set by interatomic bonding and crystal structure, so it barely changes with processing (a few percent at most).",
    "Hardening blocks dislocation motion: higher yield and ultimate strength, lower ductility.",
    "On a stress–strain plot, the two curves share the same straight elastic line; the hardened one just keeps going further before it bends over.",
    "A common wrong answer in interviews is 'hardened is stiffer'. To make a part stiffer, change its geometry or switch material."
   ],
   "reported": {
    "kind": "question",
    "note": "Candidates reported being asked how the modulus of full-hard stainless compares with fully annealed stainless (Apple), and whether the stress–strain curves of steel and hardened steel differ.",
    "sources": [
     "mtmod",
     "mthard"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Which of these is the stiffest (highest elastic modulus): magnesium, aluminium, titanium, copper or steel?",
   "options": [
    "Titanium",
    "Copper",
    "Steel",
    "They are all within 10% of each other"
   ],
   "answer": 2,
   "why": "Steel, at about 200 GPa. Copper is about 117, titanium about 110, aluminium about 69 and magnesium about 45. Titanium is famous for strength-to-weight, not stiffness, and copper surprises people by beating it.",
   "proof": [
    "Approximate E: steel 200 GPa, copper 117, titanium 110, aluminium 69, magnesium 45.",
    "Stiffness depends on bond strength, roughly tracking melting point and atomic packing.",
    "Titanium's reputation comes from its high strength and low density, not its modulus.",
    "Per unit mass (E/ρ), steel, aluminium, titanium and magnesium are all close to 25 GPa/(g/cm³); copper is worse at 13."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked which of steel, magnesium, titanium, copper and aluminium is the stiffest, and why (Apple, Mechanical Engineer).",
    "sources": [
     "mtstiff"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A bracket in 5052 aluminium deflects too much. A colleague suggests switching to the stronger 6061-T6. How much stiffer will it be?",
   "options": [
    "About twice as stiff",
    "About 50% stiffer",
    "About 20% stiffer",
    "Essentially no stiffer: both have E ≈ 69 to 70 GPa"
   ],
   "answer": 3,
   "why": "Aluminium alloys all have nearly the same modulus, about 69 to 72 GPa. 6061-T6 has a much higher yield strength than 5052, but the same deflection under load.",
   "proof": [
    "E: 5052 about 70 GPa, 6061 about 69 GPa.",
    "Yield strength: 5052-H32 about 190 MPa, 6061-T6 about 275 MPa.",
    "Deflection ∝ 1/(EI), so it is unchanged.",
    "To reduce deflection, add depth or ribs, or change to a stiffer material class such as steel."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked the difference in Young's modulus between 6061 aluminium and 5052.",
    "sources": [
     "mt6061"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Roughly how do aluminium's density and elastic modulus compare with steel's?",
   "options": [
    "Density about 1/3, modulus about 1/3",
    "Density about 1/3, modulus about the same",
    "Density about 1/2, modulus about 1/2",
    "Density about 1/3, modulus about 2/3"
   ],
   "answer": 0,
   "why": "Aluminium is about 2.7 g/cm³ against steel's 7.85, and about 69 GPa against 200 GPa. Both ratios are close to 1/3, so the stiffness per unit mass is almost the same.",
   "proof": [
    "Density: 2.70/7.85 = 0.34.",
    "Modulus: 69/200 = 0.35.",
    "So E/ρ is nearly equal: a tie rod of a given mass and length has about the same axial stiffness in either.",
    "Aluminium wins when you can use its extra thickness: bending stiffness of a panel goes as t³, so a thicker, same-mass aluminium panel is much stiffer."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked the difference in density and in modulus of elasticity between aluminium and steel (Apple, Product Design Engineer).",
    "sources": [
     "mtdens"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "You have three unlabelled bars: plain steel, stainless steel and aluminium. A magnet sticks to only one of them. What can you conclude?",
   "options": [
    "The bar the magnet sticks to is the plain steel, probably; the stainless may well be the austenitic kind (304 or 316), which is usually non-magnetic",
    "The other two must both be aluminium",
    "Stainless steel is always magnetic, so it is the one that stuck",
    "The magnet test proves nothing because all steels are non-magnetic"
   ],
   "answer": 0,
   "why": "Common austenitic stainless steels such as 304 and 316 are usually non-magnetic, because their crystal structure is face-centred cubic. So a non-magnetic bar is not necessarily aluminium. Weigh them: aluminium is about a third of the density of either steel.",
   "proof": [
    "Plain carbon steel (BCC ferrite) is strongly magnetic.",
    "Austenitic stainless (304, 316, FCC) is usually non-magnetic, though cold working can make it slightly magnetic.",
    "Ferritic and martensitic stainless (400 series) are magnetic.",
    "Tell aluminium from stainless by weight (2.7 against 8 g/cm³), colour, or a scratch test: aluminium is much softer."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked how to tell steel, stainless steel and aluminium apart if they were on the table.",
    "sources": [
     "mtmag"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Which joint corrodes faster in salt spray: stainless steel screws in a large aluminium sheet, or aluminium rivets in a large stainless steel sheet?",
   "options": [
    "Stainless screws in aluminium sheet",
    "Aluminium rivets in stainless sheet",
    "They corrode at the same rate",
    "Neither, stainless and aluminium are compatible"
   ],
   "answer": 1,
   "why": "Aluminium is anodic to stainless steel, so the aluminium corrodes in both cases. The rate depends on the area ratio: a small anode (the rivets) paired with a large cathode (the stainless sheet) concentrates all the corrosion current on the rivets, which can be eaten away quickly.",
   "proof": [
    "Galvanic corrosion needs two dissimilar metals, an electrolyte (salt water) and electrical contact.",
    "The less noble metal, the anode, corrodes; here that is aluminium.",
    "Corrosion current is set by the cathode area, but it is spread over the anode area. A small anode sees a very high current density.",
    "Rule: fasteners should be the more noble metal, or be isolated with washers, sealant or coatings."
   ],
   "reported": {
    "kind": "question",
    "note": "A Tesla Mechanical Engineer Intern candidate reported being asked for a high-level explanation of galvanic corrosion.",
    "sources": [
     "mtgalv"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A copper busbar is bolted to an aluminium busbar for a high-current connection. Which problem is the most likely over time?",
   "options": [
    "None, both are excellent conductors",
    "The copper melts",
    "The joint loosens and its resistance rises: aluminium creeps and expands more than copper, galvanic corrosion attacks the aluminium, and its surface oxide insulates",
    "The aluminium becomes magnetic"
   ],
   "answer": 2,
   "why": "Copper-to-aluminium joints are notorious. Aluminium creeps under bolt pressure and expands about 40% more than copper with temperature, so the clamp relaxes. Moisture causes galvanic corrosion of the aluminium, and its oxide layer adds resistance. Higher resistance means more heat, which speeds all three up.",
   "proof": [
    "Thermal expansion: aluminium about 23 × 10⁻⁶ /K, copper about 17 × 10⁻⁶ /K.",
    "Creep: aluminium relaxes under steady clamp load, even near room temperature.",
    "Galvanic: aluminium is the anode relative to copper.",
    "Fixes: bimetallic transition pieces, tin plating, joint compound, Belleville washers to hold preload, or friction or ultrasonic welding of the two."
   ],
   "reported": {
    "kind": "question",
    "note": "A Tesla candidate (Berlin) reported being asked what issues to expect in a copper–aluminium electrical joint, and what material to use to join them.",
    "sources": [
     "mtcual"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Brass is about 70% copper and 30% zinc. Both are good conductors. How does brass's electrical conductivity compare with pure copper's?",
   "options": [
    "About the same",
    "Higher, because zinc adds electrons",
    "In between copper and zinc",
    "Much lower, about a quarter of copper's"
   ],
   "answer": 3,
   "why": "Alloying atoms disrupt the regular crystal lattice and scatter the conducting electrons. Even though copper and zinc are both good conductors, the alloy conducts far worse than copper: about 28% of copper's conductivity, no better than zinc.",
   "proof": [
    "Pure copper: 100% IACS (the reference).  Zinc: about 28%.  70/30 brass: about 28%.",
    "Resistivity rises with the concentration of solute atoms (Matthiessen's rule): impurities add resistance.",
    "Cold work does the same in a smaller way, by adding dislocations.",
    "This is why busbars and windings use high-purity copper or pure aluminium, and why alloying for strength always costs conductivity."
   ],
   "reported": {
    "kind": "question",
    "note": "A Tesla candidate (Berlin) reported being asked why alloys are bad conductors.",
    "sources": [
     "mtcual"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A welded joint in an electrical conductor runs much hotter than the rest of the conductor at the same current. What is the most likely cause?",
   "options": [
    "The weld metal is a better conductor",
    "The current is higher at the weld",
    "A poor weld has porosity, cracks or a small fused area, so its resistance is higher, and heat goes as I²R",
    "Welds always run hot"
   ],
   "answer": 2,
   "why": "The same current flows through the whole conductor. A bad weld conducts through a smaller effective area, through voids, or across oxide, so its resistance is higher, and the heat it generates, I²R, is concentrated in that small spot.",
   "proof": [
    "Series path: the same I everywhere, so local heat ∝ local R.",
    "Porosity and lack of fusion reduce the area carrying current, raising resistance as 1/A.",
    "Heat raises resistance further (about 0.4% per °C for copper), a runaway effect.",
    "Thermal imaging and resistance (milliohm) measurement are standard checks on busbar welds."
   ],
   "reported": {
    "kind": "question",
    "note": "A Tesla Mechanical Design Engineer candidate reported being asked why a faulty weld in an electrical conduit would cause excessive heat.",
    "sources": [
     "mtweld"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A steel part and an aluminium part each run at a stress well below their published fatigue strength. Which one can last forever?",
   "options": [
    "Both",
    "Neither",
    "Only the aluminium",
    "Probably the steel; aluminium has no true endurance limit, so it eventually fails at any cyclic stress"
   ],
   "answer": 3,
   "why": "Most steels have an endurance limit: below about half their tensile strength they can survive effectively unlimited cycles. Aluminium's S–N curve keeps falling, so its 'fatigue strength' is quoted at a set number of cycles, often 5 × 10⁸. Beyond that it can still fail.",
   "proof": [
    "Steel: the S–N curve flattens at about 10⁶ to 10⁷ cycles, at roughly 0.5 × UTS for polished specimens.",
    "Aluminium and copper: no flat portion. Fatigue strength is quoted at a fixed life.",
    "Design aluminium for a finite life with margin, and inspect, as aircraft do.",
    "Real steel parts lose part of their endurance limit to corrosion, surface finish and notches, so 'forever' still needs margin."
   ],
   "reported": {
    "kind": "question",
    "note": "Candidates reported being asked why steel has an endurance limit but aluminium does not, and what failure occurs in aluminium and not in steel.",
    "sources": [
     "mtendur",
     "mtalfail"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Which material has very high hardness but low toughness?",
   "options": [
    "Glass or a technical ceramic",
    "Mild steel",
    "Rubber",
    "Copper"
   ],
   "answer": 0,
   "why": "Hardness is resistance to scratching and indentation; toughness is the energy needed to break it. Glass and ceramics such as alumina are very hard but crack almost without plastic deformation, so they absorb little energy and shatter.",
   "proof": [
    "Hardness: glass about 500 to 600 HV, alumina about 1,500 HV, mild steel about 130 HV.",
    "Fracture toughness: glass about 0.7 MPa·√m, alumina about 4, mild steel about 50 or more.",
    "Brittle materials cannot blunt a crack tip by yielding, so small flaws grow freely.",
    "Hardened tool steel is another example: very hard, but it can chip if dropped."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked for an example of a material with high hardness and low toughness.",
    "sources": [
     "mthardtough"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Is a ductile material always tougher than a brittle one?",
   "options": [
    "Yes, ductile always means tougher",
    "No: toughness is the area under the stress–strain curve, so it needs both strength and ductility; a very weak but ductile material can absorb less energy than a strong, less ductile one",
    "No, brittle materials are always tougher",
    "Yes, because ductile materials have a higher modulus"
   ],
   "answer": 1,
   "why": "Toughness (energy to fracture per unit volume) is roughly strength × strain at fracture. A soft, very ductile material such as annealed pure aluminium (about 90 MPa, 40% elongation) absorbs less energy than a high-strength steel at 1,400 MPa and 10% elongation.",
   "proof": [
    "Toughness ≈ area under the curve ≈ (average stress) × (fracture strain).",
    "Annealed pure aluminium:  about 0.5 × (35 + 90) MPa × 0.4 ≈ 25 MJ/m³.",
    "High-strength steel:  about 1,300 MPa × 0.1 ≈ 130 MJ/m³.",
    "Truly brittle materials, such as glass with almost no strain, do have very low toughness. And fracture toughness (resistance to crack growth) is a separate measure."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked whether the toughness of a ductile material is always higher than a brittle material's, with examples (Applied Materials).",
    "sources": [
     "mttough"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Two flat strips of the same size, one steel and one aluminium, are bonded face to face and heated together. What happens?",
   "options": [
    "Nothing, they expand together",
    "The strip bends, curving toward the steel side; the aluminium ends up in compression and the steel in tension",
    "The strip bends toward the aluminium side",
    "The bond fails immediately in every case"
   ],
   "answer": 1,
   "why": "Aluminium expands about twice as much as steel. Bonded together, they must stay the same length at the joint, so aluminium is held back (compression) and steel is stretched (tension). The mismatch curls the strip with the longer aluminium on the outside, so it bends toward the steel.",
   "proof": [
    "α: aluminium about 23 × 10⁻⁶ /K, steel about 12 × 10⁻⁶ /K.",
    "At the bond line they must strain equally, so forces develop: compressive in aluminium, tensile in steel.",
    "Those forces are offset through the thickness, creating a bending moment: the strip curves with aluminium on the convex side.",
    "This is the bimetallic strip used in thermostats, and the reason bonded mixed-metal assemblies warp or debond in thermal cycling."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked what happens when dimensionally identical steel and aluminium plates are bonded and heated, and which is in tension or compression.",
    "sources": [
     "mtbimetal"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A soft copper wire is bent back and forth a few times. It becomes noticeably harder to bend at that spot. Why?",
   "options": [
    "The copper oxidises",
    "It heats up and expands",
    "Bending creates and tangles dislocations, which block each other's motion, raising the yield strength (work hardening)",
    "It loses carbon"
   ],
   "answer": 2,
   "why": "Plastic deformation happens by dislocations moving through the crystal. Each bend creates many more of them, and they pile up and tangle. A tangled forest of dislocations is harder to move, so the metal is stronger but less ductile, and with enough bending it cracks.",
   "proof": [
    "Annealed copper: few dislocations, low yield strength, high ductility.",
    "Plastic deformation multiplies dislocations by orders of magnitude.",
    "Interacting dislocations pin each other, so more stress is needed to keep deforming.",
    "Annealing (heating to recrystallise) removes them and restores the soft state."
   ],
   "reported": {
    "kind": "question",
    "note": "A candidate reported being asked what strain hardening is and how it works at the most fundamental level.",
    "sources": [
     "mtstrain"
    ]
   }
  }
 ]
});
