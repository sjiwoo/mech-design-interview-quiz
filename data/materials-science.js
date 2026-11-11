/* Topic: Materials science fundamentals. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "materials-science",
  "title": "Materials science fundamentals",
  "blurb": "Crystal structure, strengthening mechanisms, heat treatment, creep, corrosion, fracture toughness and hardness.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "Aluminium and copper (FCC) are generally more ductile than magnesium and titanium (HCP). Why?",
      "options": [
        "FCC metals have more slip systems, so dislocations can move in many directions",
        "FCC metals have stronger atomic bonds",
        "FCC metals have fewer atoms per unit cell",
        "FCC metals contain no dislocations"
      ],
      "answer": 0,
      "why": "Plastic deformation happens by dislocations gliding on slip systems. FCC has 12 close-packed slip systems, so some are always well oriented. HCP has only about 3 that work easily at room temperature.",
      "proof": [
        "Metals deform plastically when dislocations glide on close-packed planes in close-packed directions. Each plane-direction pair is a slip system.",
        "FCC (Al, Cu, Ni, austenitic stainless): 4 planes × 3 directions = 12 close-packed systems.",
        "BCC (ferritic steel, W, Mo): 48 possible systems, but none truly close-packed, so slip needs thermal help. That is why BCC metals turn brittle when cold.",
        "HCP (Mg, Ti, Zn): about 3 easy systems at room temperature, so grains cannot all change shape together and ductility is limited.",
        "More available slip systems means more ductility and easier forming."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Which change does not increase the yield strength of a metal?",
      "options": [
        "Cold working it",
        "Adding alloying atoms in solid solution",
        "Growing its grains larger",
        "Forming fine precipitates by ageing"
      ],
      "answer": 2,
      "why": "Every strengthening mechanism works by blocking dislocation motion. Larger grains mean fewer grain boundaries to block them, so the metal gets weaker (Hall-Petch).",
      "proof": [
        "Yield happens when dislocations start to move. Anything that pins them raises yield strength.",
        "Work hardening: more dislocations tangle with each other.",
        "Solid-solution strengthening: mismatched atoms distort the lattice.",
        "Precipitation hardening: fine particles force dislocations to cut through or bow around.",
        "Grain refinement: boundaries stop dislocations. Hall-Petch:  σ_y = σ₀ + k/√d, so smaller grains are stronger and larger grains weaker.",
        "None of these changes Young's modulus."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A medium-carbon steel is heated until austenitic, quenched in water, then tempered. What does each step do?",
      "options": [
        "Quenching softens it, tempering hardens it",
        "Quenching forms hard, brittle martensite, and tempering trades some hardness for toughness",
        "Both steps only clean the surface",
        "Quenching raises Young's modulus, tempering lowers it"
      ],
      "answer": 1,
      "why": "Fast cooling traps carbon and forms martensite, which is very hard and brittle. Tempering reheats it moderately so some carbon precipitates, restoring toughness at the cost of some hardness.",
      "proof": [
        "Austenitise (about 850 °C): carbon dissolves in the FCC iron.",
        "Quench: cooling is too fast for carbon to diffuse out. The lattice shears into martensite, a distorted, carbon-supersaturated structure. Very hard, very brittle, with high residual stress.",
        "Temper (about 200 to 650 °C): carbon forms fine carbides and stress relaxes. Higher tempering temperature gives lower hardness and higher toughness.",
        "Slow cooling instead gives soft ferrite and pearlite (annealed or normalised).",
        "Section thickness matters: thick parts cool slowly at the centre, so alloying is added for hardenability."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "6061-T6 aluminium gets its strength from precipitation hardening. What happens to the metal next to a weld?",
      "options": [
        "It gets stronger because it is heated",
        "Nothing changes",
        "It turns into steel",
        "It loses much of its strength, because the heat dissolves or coarsens the precipitates"
      ],
      "answer": 3,
      "why": "T6 strength comes from fine Mg-Si precipitates formed by solution treatment and ageing. Weld heat over-ages or dissolves them, so the heat-affected zone drops toward the soft condition, often to about half the T6 yield.",
      "proof": [
        "T6 = solution heat treated, quenched, then artificially aged to grow fine precipitates that block dislocations.",
        "Welding heats the neighbouring metal well above the ageing temperature.",
        "Precipitates there coarsen (over-age) or dissolve, so they stop blocking dislocations effectively.",
        "6061-T6 yield is about 275 MPa. As-welded heat-affected zone is roughly 110 to 140 MPa.",
        "Fixes: design welds in low-stress areas, thicken the joint, re-heat-treat the whole part, or use bolts, adhesive or friction-stir welding."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "A copper tube becomes hard and cracks after repeated bending. What restores its ductility?",
      "options": [
        "Quenching it in water from room temperature",
        "Painting it",
        "Annealing: heating it so new strain-free grains form",
        "Bending it further"
      ],
      "answer": 2,
      "why": "Bending work-hardens the copper by multiplying dislocations until it has little ductility left. Annealing lets the structure recover and recrystallise into soft, strain-free grains.",
      "proof": [
        "Cold work raises dislocation density. Strength and hardness go up, ductility goes down.",
        "Annealing stages: recovery (dislocations rearrange), recrystallisation (new strain-free grains replace the deformed ones), grain growth.",
        "Recrystallisation happens at roughly 0.3 to 0.5 of the absolute melting temperature.",
        "After annealing, the metal is soft and ductile again and can be formed further.",
        "This is why deep-drawn parts are annealed between stages, and why sheet is sold in tempers such as O, H14 or half-hard."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "Which material is most at risk of becoming brittle in very cold conditions?",
      "options": [
        "6061 aluminium",
        "Austenitic (304) stainless steel",
        "Copper",
        "Plain carbon (ferritic) steel"
      ],
      "answer": 3,
      "why": "BCC metals such as ferritic steel have a ductile-to-brittle transition temperature. Below it, impact energy drops sharply. FCC metals such as aluminium, copper and austenitic stainless stay ductile when cold.",
      "proof": [
        "In BCC metals, dislocation motion needs thermal activation. At low temperature it is easier to cleave than to slip.",
        "A Charpy impact test shows the transition: high absorbed energy when warm, low when cold.",
        "The transition temperature rises with carbon content, coarse grains, high strain rate and notches.",
        "FCC metals have no such transition, which is why aluminium and austenitic stainless are used for cryogenic tanks.",
        "For cold-climate structures, specify steels with a guaranteed Charpy energy at the lowest service temperature."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "Creep becomes significant above roughly 0.4 of a metal's absolute melting temperature. For aluminium (melting point 660 °C), about what temperature is that?",
      "options": [
        "About 100 °C",
        "About 264 °C",
        "About 400 °C",
        "About 600 °C"
      ],
      "answer": 0,
      "why": "Use kelvin: 660 °C = 933 K. 0.4 × 933 = 373 K, which is about 100 °C. Using Celsius directly gives the wrong answer of 264 °C.",
      "proof": [
        "Creep is slow, permanent strain under steady stress, driven by diffusion and dislocation climb.",
        "It scales with homologous temperature T/T_m in kelvin.",
        "T_m = 660 + 273 = 933 K.   0.4 × 933 = 373 K = 100 °C.",
        "So aluminium near motors, inverters or battery busbars can creep. Bolted aluminium joints lose preload this way.",
        "Steel (T_m about 1,800 K) starts at roughly 450 °C. Polymers and solder creep at room temperature."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel bolt holds two aluminium plates in a wet, salty environment with no coating or isolation. Which metal corrodes preferentially?",
      "options": [
        "The steel bolt",
        "The aluminium around the bolt",
        "Both equally",
        "Neither, because both are metals"
      ],
      "answer": 1,
      "why": "Aluminium is more active (anodic) than steel in the galvanic series, so it corrodes and protects the steel. The large aluminium area against a small bolt at least spreads the attack.",
      "proof": [
        "Galvanic corrosion needs two dissimilar metals, electrical contact and an electrolyte.",
        "The more active metal becomes the anode and dissolves. The nobler metal is the cathode and is protected.",
        "Aluminium is more active than carbon or stainless steel, so the aluminium corrodes.",
        "Area ratio matters: a small anode with a large cathode is the worst case. Here the anode (plate) is large, which is the less harmful arrangement.",
        "Prevention: coat the fasteners (zinc-flake), isolate with washers or sealant, keep water out, or choose metals close together in the series."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A plate has fracture toughness K_IC = 30 MPa·√m and carries 200 MPa. Using K = σ·√(π·a), what crack half-length a causes fast fracture?",
      "options": [
        "About 0.7 mm",
        "About 7 mm",
        "About 23 mm",
        "About 72 mm"
      ],
      "answer": 1,
      "why": "a = (K_IC/σ)²/π = (30/200)²/π = 0.0225/π = 0.0072 m, about 7 mm (a 14 mm long through-crack).",
      "proof": [
        "Fracture when the stress intensity reaches the toughness:  K_IC = σ·√(π·a), taking the geometry factor as 1.",
        "a = (K_IC/σ)²/π = (30/200)²/π.",
        "(0.15)² = 0.0225 m.   0.0225/π = 0.00716 m = 7.2 mm."
      ],
      "proofTitle": "Solve for crack size",
      "methods": [
        {
          "title": "Check by working forwards",
          "steps": [
            "Try a = 7.2 mm = 0.0072 m.",
            "K = 200 × √(π × 0.0072) = 200 × √0.0226 = 200 × 0.150 = 30 MPa·√m.",
            "That equals K_IC, so this is the critical size. Halving the stress to 100 MPa would allow a crack four times longer, because a goes as 1/σ²."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A steel part measures 200 HB on a Brinell hardness test. Roughly what is its ultimate tensile strength?",
      "options": [
        "About 70 MPa",
        "About 200 MPa",
        "About 690 MPa",
        "About 2,000 MPa"
      ],
      "answer": 2,
      "why": "For steels, UTS in MPa is about 3.45 × HB. 3.45 × 200 ≈ 690 MPa.",
      "proof": [
        "Hardness measures resistance to local plastic indentation, which is closely tied to tensile strength.",
        "Empirical rule for steel:  UTS (MPa) ≈ 3.45 × HB, or UTS (psi) ≈ 500 × HB.",
        "UTS ≈ 3.45 × 200 = 690 MPa.",
        "It lets you check heat treatment on a finished part without destroying it.",
        "The factor is different for aluminium and other alloys, and the rule fails for case-hardened surfaces."
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported rounds focused on materials and the different materials used in mechanical engineering. This exact question was not reported.",
        "sources": [
          "matfocus",
          "som"
        ]
      }
    }
  ]
});
