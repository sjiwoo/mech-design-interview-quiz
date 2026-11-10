/* Topic: Manufacturing processes and DFM. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "manufacturing-dfm",
  "title": "Manufacturing and DFM",
  "blurb": "Injection moulding, casting, forging, stamping and machining: design rules, process selection and assembly.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "Why do injection-moulded parts need draft on walls parallel to the mould opening direction?",
      "options": [
        "To make the part stronger",
        "To help the plastic flow faster",
        "To reduce the amount of plastic used",
        "So the part releases from the mould without dragging or sticking"
      ],
      "answer": 3,
      "why": "Plastic shrinks onto the core as it cools. A small taper, typically 1 to 2°, lets the part break free as soon as ejection starts.",
      "proof": [
        "As the part cools it shrinks and grips the core side of the tool.",
        "With zero draft, the wall slides against steel over the full ejection stroke. That causes drag marks, distortion, or a stuck part.",
        "With draft, the surfaces separate after the first fraction of a millimetre of travel.",
        "Typical: 1 to 2° per side, and more for textured surfaces (about 1° extra per 0.025 mm of texture depth)."
      ]
    },
    {
      "level": "Applied",
      "q": "An injection-moulded housing has a 3 mm nominal wall. Roughly how thick should a stiffening rib be at its base to avoid sink marks on the outer surface?",
      "options": [
        "0.5 mm",
        "1.5 to 1.8 mm",
        "3 mm",
        "4.5 mm"
      ],
      "answer": 1,
      "why": "Ribs should be about 50 to 60% of the wall they join: 1.5 to 1.8 mm here. Thicker ribs create a heavy section that sinks.",
      "proof": [
        "Where a rib meets a wall, the local section is thicker and cools last.",
        "As that hot core shrinks it pulls the outer skin inward, leaving a sink mark opposite the rib.",
        "Keeping the rib at 50 to 60% of the wall limits the extra mass:  0.5 × 3 = 1.5 mm to 0.6 × 3 = 1.8 mm.",
        "For more stiffness, use more or taller ribs (height up to about 3× wall) instead of thicker ones, and keep draft on them."
      ]
    },
    {
      "level": "Applied",
      "q": "A plastic part can be machined for $12.00 each with no tooling, or moulded for $0.50 each with a $50,000 tool. Above roughly what quantity is moulding cheaper?",
      "options": [
        "About 435 parts",
        "About 4,350 parts",
        "About 43,500 parts",
        "About 100,000 parts"
      ],
      "answer": 1,
      "why": "Break-even is tooling ÷ saving per part = 50,000 / (12.00 − 0.50) ≈ 4,350 parts.",
      "proof": [
        "Total cost, machining:  12.00·N.   Moulding:  50,000 + 0.50·N.",
        "Set equal:  12.00·N = 50,000 + 0.50·N  ⇒  11.50·N = 50,000.",
        "N = 4,348 parts."
      ],
      "proofTitle": "Equate total costs",
      "methods": [
        {
          "title": "Cost per part",
          "steps": [
            "Moulded cost per part = 0.50 + 50,000/N. It must fall below 12.00.",
            "50,000/N < 11.50  ⇒  N > 4,348.",
            "At 500,000 parts the tool adds only $0.10 per part, so moulding costs $0.60 against $12.00.",
            "This is why high-volume automotive parts are tooled and prototypes are machined or printed."
          ]
        }
      ]
    },
    {
      "level": "Fundamental",
      "q": "As a general rule, what is the minimum inside bend radius for sheet metal to avoid cracking?",
      "options": [
        "Zero, a sharp corner is fine",
        "It doesn't depend on thickness",
        "About ten times the material thickness",
        "About equal to the material thickness"
      ],
      "answer": 3,
      "why": "A common rule is inside radius ≥ 1× thickness for ductile sheet. Tighter bends put too much strain on the outer fibres.",
      "proof": [
        "In a bend, the outer surface stretches. Strain there is roughly t/(2R + t).",
        "With R = t that is about 33%, which ductile steel and soft aluminium can take.",
        "Harder tempers such as 6061-T6 need larger radii, often 2 to 3× thickness, and bending across the grain direction helps.",
        "Related rules: keep holes at least about 2.5× thickness plus the bend radius away from a bend, and add bend relief at edges."
      ]
    },
    {
      "level": "Design judgment",
      "q": "You need 100,000 per year of a thin-walled aluminium housing with bosses, ribs and mounting features. Which process fits best?",
      "options": [
        "High-pressure die casting",
        "Sand casting",
        "CNC machining from billet",
        "Open-die forging"
      ],
      "answer": 0,
      "why": "High-pressure die casting gives thin walls, fine detail and short cycle times at high volume. The tooling cost is spread over many parts.",
      "proof": [
        "Machining from billet: no tooling, but minutes of cycle time and most of the material turned to chips. Too costly at 100,000 per year.",
        "Sand casting: low tooling cost, but thick walls (about 4 mm or more), rough surface and slow. Suits low volume or very large parts.",
        "Die casting: molten aluminium injected into a steel die at high pressure. Walls of 1.5 to 3 mm, net-shape detail, cycle times under a minute.",
        "Open-die forging gives strength but only simple shapes.",
        "Die casting trade-offs: porosity (limits welding and heat treatment), draft needed, and critical faces still get machined."
      ]
    },
    {
      "level": "Applied",
      "q": "You are designing a pocket to be CNC milled. What should you do with its internal vertical corners?",
      "options": [
        "Make them perfectly sharp",
        "Make the radius as small as possible, such as 0.1 mm",
        "Give them a radius slightly larger than the cutter radius",
        "Add a chamfer instead of a radius"
      ],
      "answer": 2,
      "why": "A rotating end mill always leaves a radius in an internal corner. Making it slightly larger than the tool radius lets the cutter sweep through smoothly without dwelling.",
      "proof": [
        "An end mill is round, so it cannot cut a sharp internal vertical corner.",
        "If the corner radius equals the tool radius, the cutter engages a large arc at once in the corner, which causes chatter and a poor finish.",
        "A radius about 10 to 30% larger than the tool radius lets the tool follow a curved path.",
        "Deep pockets need long tools, so keep depth under about 4× the tool diameter. A larger corner radius allows a bigger, stiffer tool.",
        "If a mating part has a sharp corner, add relief (dog-bone) cuts or chamfer the mating part."
      ]
    },
    {
      "level": "Applied",
      "q": "After bending, sheet metal springs back partly toward flat. Which material property combination gives the most springback?",
      "options": [
        "Low yield strength and high modulus",
        "High ductility",
        "High density",
        "High yield strength and low modulus"
      ],
      "answer": 3,
      "why": "Springback is the elastic recovery, which scales with σ_y/E. High-strength steel and aluminium spring back more than mild steel.",
      "proof": [
        "Bending takes the outer fibres plastic, but on release the elastic part of the strain, σ_y/E, recovers.",
        "So the springback angle grows with yield strength and shrinks with modulus.",
        "Mild steel:  about 250/200,000 = 0.00125.   6061-T6:  about 275/69,000 = 0.0040, roughly three times more.",
        "Tooling compensates by overbending, bottoming or coining the bend. Springback also rises with a larger radius-to-thickness ratio."
      ]
    },
    {
      "level": "Design judgment",
      "q": "Why is a forged suspension control arm generally better in fatigue than a cast one of the same alloy and shape?",
      "options": [
        "Forging aligns the grain flow with the part shape and closes internal porosity",
        "Forging makes the part lighter",
        "Forged parts have a higher Young's modulus",
        "Forging is cheaper"
      ],
      "answer": 0,
      "why": "Forging works the metal so the grain follows the part's contours and voids are closed. Castings have random grain and some porosity, which are fatigue crack starters.",
      "proof": [
        "Castings solidify in the mould. Shrinkage and trapped gas leave pores, and grains have no preferred direction.",
        "Pores act as stress concentrations where fatigue cracks start.",
        "Forging deforms solid metal under high pressure. That closes voids, refines the grain and makes it flow along the shape, like wood grain.",
        "The result is higher fatigue strength and toughness, and less scatter. Young's modulus is unchanged.",
        "Trade-offs: forging costs more and allows less complex shapes, so castings are used where geometry and cost matter more."
      ]
    },
    {
      "level": "Fundamental",
      "q": "What is a weld line (knit line) in an injection-moulded part?",
      "options": [
        "Where two parts are ultrasonically welded together",
        "The mark left by the mould parting line",
        "A line where two melt flow fronts meet and fuse",
        "A scratch from the ejector pins"
      ],
      "answer": 2,
      "why": "When plastic flows around a hole or from multiple gates, the fronts meet and fuse imperfectly. That line is weaker and often visible.",
      "proof": [
        "Melt splits to flow around a core pin (a hole) or arrives from two gates.",
        "Where the fronts rejoin, they have already cooled slightly, so the polymer chains do not mix fully across the boundary.",
        "Strength across a weld line can drop noticeably, more so in glass-filled materials because fibres align along the line.",
        "Fixes: move the gate so the line falls in a low-stress area, raise melt and mould temperature, or add venting.",
        "The parting line and ejector marks are different features, caused by the tool and not by flow."
      ]
    },
    {
      "level": "Design judgment",
      "q": "Which change usually gives the biggest reduction in assembly cost and defects?",
      "options": [
        "Reducing the part count by combining parts",
        "Using more fastener types so each joint is optimised",
        "Tightening all tolerances",
        "Adding more inspection steps"
      ],
      "answer": 0,
      "why": "Every part removed takes away its handling, insertion, fastening, inventory and a chance for error. Part count reduction is the first rule of design for assembly.",
      "proof": [
        "Each part has to be made, bought, stocked, handled, oriented, inserted and secured, and each of those steps can go wrong.",
        "Test for combining two parts: do they need to move relative to each other, be different materials, or come apart for service? If not, merge them.",
        "Other DFA rules: one assembly direction (top-down), self-locating features, snap fits in place of screws, a single fastener type.",
        "Mistake-proof (poka-yoke): make parts either fully symmetric or obviously asymmetric so they cannot go in wrong.",
        "Tesla's large single-piece castings follow this idea: one part replacing many stamped and welded pieces."
      ]
    }
  ]
});
