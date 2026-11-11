/* Topic: Polymer fundamentals. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "polymers",
  "title": "Polymer fundamentals",
  "blurb": "Thermoplastics and thermosets, glass transition, crystallinity, creep and relaxation, fillers, moisture, elastomers and plastic selection.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "What is the key difference between a thermoplastic and a thermoset?",
      "options": [
        "Thermoplastics are always clear",
        "A thermoplastic can be remelted and reshaped; a thermoset cross-links permanently and cannot",
        "Thermosets are metals",
        "Thermoplastics cannot be injection moulded"
      ],
      "answer": 1,
      "why": "Thermoplastic chains are held by weak secondary bonds that release on heating. Thermosets cure into a covalently cross-linked network that chars instead of melting.",
      "proof": [
        "Thermoplastics (PP, ABS, PC, nylon, TPU): long separate chains. Heat lets them slide, so the material melts, flows and can be recycled.",
        "Thermosets (epoxy, polyurethane foam, vulcanised rubber, phenolic): curing forms permanent cross-links between chains.",
        "Thermosets do not melt. They hold shape and stiffness at temperature and resist creep and solvents better.",
        "Process consequence: thermoplastics suit injection moulding and thermoforming. Thermosets are cast, compression moulded or laid up, with a cure time.",
        "Thermoplastic elastomers such as TPU behave like rubber in use but process like a thermoplastic."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "What happens to an amorphous polymer as it is heated through its glass transition temperature T_g?",
      "options": [
        "It melts into a thin liquid",
        "It burns",
        "It becomes a crystal",
        "It changes from stiff and glassy to soft and rubbery, with a large drop in modulus"
      ],
      "answer": 3,
      "why": "Below T_g the chains are frozen in place and the material is rigid. Above it, chain segments can move, so modulus drops by orders of magnitude without a sharp melting point.",
      "proof": [
        "T_g is where chain segments gain enough thermal energy to move past one another.",
        "Below T_g: glassy, stiff, often brittle. Above T_g: leathery, then rubbery.",
        "Amorphous plastics (PC, ABS, PMMA, PS) are used below T_g. PC has T_g about 147 °C.",
        "Semi-crystalline plastics (PP, PE, nylon, POM) have both T_g and a melting point T_m. The crystals keep them usable between the two. PP has T_g about −10 °C, so it is tough at room temperature.",
        "Elastomers are used above their T_g. Cool one below it and it shatters."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "How do semi-crystalline plastics (PP, nylon, POM) typically compare with amorphous ones (PC, ABS) in moulding and use?",
      "options": [
        "They shrink more and less evenly, but resist chemicals and wear better",
        "They shrink less and are always transparent",
        "They cannot be moulded",
        "They have no melting point"
      ],
      "answer": 0,
      "why": "Crystals pack chains tightly, so these plastics shrink more on cooling (about 1.5 to 3% against 0.4 to 0.7%) and warp more easily. The crystals also block solvents and give good fatigue and wear behaviour.",
      "proof": [
        "Crystalline regions are denser than the melt, so volume drops sharply on solidifying: higher and direction-dependent shrink.",
        "Result: more warpage and looser tolerances than amorphous grades.",
        "Benefits: chemical resistance, low friction, good fatigue life (living hinges in PP, gears in POM).",
        "Amorphous plastics: low, even shrink, tight tolerances, can be transparent, good for bonding. Weaker against solvents and stress cracking.",
        "Crystals scatter light, so semi-crystalline parts are usually opaque or translucent."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A screw clamps a plastic cover. A year later the screw is loose, though it never turned. What is the most likely cause?",
      "options": [
        "The screw grew longer",
        "Thermal expansion of the screw",
        "Stress relaxation: the plastic creeps under the clamp load, so the preload decays",
        "The plastic became stiffer"
      ],
      "answer": 2,
      "why": "Polymers are viscoelastic. Held at constant strain, their stress relaxes with time, faster when warm. The compressed plastic under the head slowly flows and the clamp force drops.",
      "proof": [
        "Viscoelastic: response depends on time as well as load. Two faces of the same behaviour: creep (strain grows at constant stress) and stress relaxation (stress falls at constant strain).",
        "A tightened screw holds the plastic at nearly constant compression, so the stress in the plastic, and with it the preload, decays.",
        "Higher temperature, higher stress and moisture all speed it up.",
        "Fixes: metal compression limiters or shoulder screws so the plastic is not in the load path, larger bearing area, threaded inserts, glass-filled grades, or snap fits designed to be unloaded once assembled.",
        "The same effect makes a constantly deflected snap arm lose its grip."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "What is the main trade-off of adding 30% short glass fibre to an injection-moulded nylon?",
      "options": [
        "It becomes softer and clearer",
        "Stiffness and strength go up, but properties and shrinkage become direction-dependent and the part is more brittle",
        "It becomes a thermoset",
        "It no longer needs draft"
      ],
      "answer": 1,
      "why": "Fibres carry load, so modulus can rise three-fold or more. They align with the flow, so the part is stiffer and shrinks less along the flow than across it, which causes warpage. Weld lines and elongation get worse.",
      "proof": [
        "Stiff fibres in a softer matrix share load: unfilled nylon is about 3 GPa, 30% glass-filled about 9 GPa. Creep and heat resistance improve too.",
        "Fibres orient along the melt flow, so the part is anisotropic: stiffer and lower shrink along the flow.",
        "Uneven shrink means warpage, which gate location has to manage.",
        "Costs: lower elongation and impact toughness, weak weld lines (fibres lie along the line), rougher surface, and abrasive wear on tooling.",
        "Always use direction-dependent data in simulation of filled parts."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A nylon part is tested dry straight from the mould and again after weeks in humid air. How do its properties change?",
      "options": [
        "It becomes stiffer and more brittle",
        "It becomes tougher and less stiff, and grows slightly",
        "Nothing changes",
        "It dissolves"
      ],
      "answer": 1,
      "why": "Nylon absorbs water, which acts as a plasticiser between the chains. Modulus and strength drop, toughness rises, and dimensions grow.",
      "proof": [
        "Polyamide chains attract water. PA66 takes up about 2.5% at 50% humidity and about 8% when saturated.",
        "Water pushes chains apart and lowers T_g, so the material is plasticised.",
        "Modulus can fall by half. Impact toughness rises. Parts swell by up to about 0.5% or more.",
        "Design using conditioned data, not dry-as-moulded data, and allow for growth in fits.",
        "Before moulding it must be dried, or the water breaks chains and leaves splay marks. POM, PP and PBT absorb far less."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "You need a one-piece flip-top cap whose thin hinge survives hundreds of thousands of flexes. Which plastic is the standard choice?",
      "options": [
        "Polycarbonate",
        "Polystyrene",
        "Acrylic (PMMA)",
        "Polypropylene"
      ],
      "answer": 3,
      "why": "Polypropylene forms an oriented, fatigue-resistant living hinge when flexed straight after moulding. It is also cheap and chemical resistant. The others crack after few cycles.",
      "proof": [
        "A living hinge is a thin web, about 0.25 to 0.5 mm, moulded between two sections.",
        "Flow through the thin web aligns PP chains across the hinge. Flexing it while warm orients them further.",
        "Semi-crystalline PP has excellent flex fatigue life. PE also works.",
        "Amorphous glassy plastics (PS, PMMA, PC) craze and crack under repeated sharp bending.",
        "Other quick picks: PC for clear impact-resistant covers, POM for low-friction gears, nylon for tough structural clips, TPU for soft skins and seals."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Which property best predicts whether a rubber O-ring will still seal after years of being squeezed?",
      "options": [
        "Tensile strength",
        "Colour",
        "Compression set",
        "Density"
      ],
      "answer": 2,
      "why": "Compression set is the fraction of squeeze the elastomer fails to recover. High set means the ring has taken a permanent flat shape and no longer pushes back on the sealing faces.",
      "proof": [
        "A seal works by elastic push-back against the surfaces.",
        "Over time and temperature the rubber relaxes and partly takes the compressed shape.",
        "Compression set = (thickness not recovered)/(amount it was compressed), measured after a set time and temperature. Lower is better.",
        "Also needed: correct hardness (often about 70 Shore A), 15 to 30% squeeze, and chemical and temperature compatibility (NBR for oils, EPDM for coolant and weather, FKM for heat and fuel, silicone for wide temperature range).",
        "Shore A is for soft rubbers, Shore D for harder plastics."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A 300 mm ABS housing (α ≈ 90 × 10⁻⁶ /K) is fixed to a steel frame (α ≈ 12 × 10⁻⁶ /K). Over a 50 K temperature rise, how much more does the plastic grow than the steel?",
      "options": [
        "About 0.02 mm",
        "About 0.18 mm",
        "About 1.2 mm",
        "About 12 mm"
      ],
      "answer": 2,
      "why": "Plastic: 300 × 90 × 10⁻⁶ × 50 = 1.35 mm. Steel: 300 × 12 × 10⁻⁶ × 50 = 0.18 mm. Difference ≈ 1.2 mm.",
      "proof": [
        "ΔL = α·L·ΔT.",
        "ABS:  90 × 10⁻⁶ × 300 × 50 = 1.35 mm.",
        "Steel:  12 × 10⁻⁶ × 300 × 50 = 0.18 mm.",
        "Mismatch:  1.35 − 0.18 = 1.17 mm."
      ],
      "proofTitle": "Each part separately",
      "methods": [
        {
          "title": "Use the difference in α",
          "steps": [
            "Mismatch = (α_plastic − α_steel)·L·ΔT = (90 − 12) × 10⁻⁶ × 300 × 50.",
            "= 78 × 10⁻⁶ × 15,000 = 1.17 mm.",
            "Plastics expand roughly 5 to 10 times more than metals. Fix the part at one point and use slots or floating clips elsewhere, or it will bow, crack at screws or squeak."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A polycarbonate cover develops fine cracks around its screw bosses after being wiped with a cleaning solvent, though loads are low. What is this?",
      "options": [
        "Fatigue from vibration",
        "Environmental stress cracking: a chemical attacks the plastic where it is under stress",
        "Corrosion, as in metals",
        "Creep"
      ],
      "answer": 1,
      "why": "Amorphous plastics such as PC, ABS and PMMA craze and crack when a mild chemical meets tensile stress, even stress well below their strength. Moulded-in and assembly stresses at bosses are typical sites.",
      "proof": [
        "Environmental stress cracking needs three things: a susceptible plastic, a chemical agent (solvents, oils, cleaners, some adhesives and thread lockers) and tensile stress.",
        "The chemical lowers the energy needed to open crazes, which grow into cracks.",
        "Stress can be residual from moulding, or from screws, press fits or snap fits.",
        "Amorphous plastics are the most vulnerable. Semi-crystalline ones resist far better.",
        "Fixes: check chemical compatibility, reduce stress (radii, compression limiters, anneal), or change material."
      ],
      "reported": {
        "kind": "topic",
        "note": "A senior candidate reported being expected to know different metals and plastics and how each is fabricated. This exact question was not reported.",
        "sources": [
          "srpanel",
          "xsec"
        ]
      }
    }
  ]
});
