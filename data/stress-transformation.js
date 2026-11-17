/* Topic: Stress and strain transformation. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "stress-transformation",
 "title": "Stress and strain transformation",
 "blurb": "Plane stress and strain, principal stresses, Mohr's circle, 3-D maximum shear, strain rosettes, gauge factor, Wheatstone bridges, torque gauges and turning strains into stresses.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "What does 'plane stress' assume about a part?",
   "options": [
    "All stresses are equal",
    "The stresses acting through the thickness (σz, τxz and τyz) are zero, which holds for thin plates and free surfaces",
    "There is no shear stress anywhere",
    "The strain through the thickness is zero"
   ],
   "answer": 1,
   "why": "Plane stress means stress only acts in one plane. It is a good model for thin sheets and for any free surface, where nothing pushes on the surface, so the through-thickness stresses vanish.",
   "proof": [
    "Plane stress:  σz = τxz = τyz = 0. Only σx, σy and τxy remain.",
    "The strain through the thickness is not zero: εz = −ν(σx + σy)/E, so the sheet thins.",
    "Plane strain is the opposite case: εz = 0, which applies to thick, constrained parts.",
    "Strain gauges sit on free surfaces, which is why plane stress formulas are used to turn their readings into stress."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A point has σx = 80 MPa, σy = 20 MPa and τxy = 40 MPa. What are the principal stresses?",
   "options": [
    "80 and 20 MPa",
    "100 and 0 MPa",
    "90 and 10 MPa",
    "120 and −20 MPa"
   ],
   "answer": 1,
   "why": "Centre of Mohr's circle: (80 + 20)/2 = 50. Radius: √(30² + 40²) = 50. Principal stresses are 50 ± 50, so 100 and 0 MPa.",
   "proof": [
    "Centre:  C = (σx + σy)/2 = 50 MPa.",
    "Radius:  R = √(((σx − σy)/2)² + τxy²) = √(900 + 1,600) = 50 MPa.",
    "σ₁ = C + R = 100 MPa,  σ₂ = C − R = 0.",
    "Check: σ₁ + σ₂ = σx + σy = 100. The sum of normal stresses is the same on any axes."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "For the same point (σx = 80, σy = 20, τxy = 40 MPa), what is the maximum in-plane shear stress, and on which planes?",
   "options": [
    "40 MPa, on the x and y planes",
    "100 MPa, on the principal planes",
    "25 MPa, at 30° to x",
    "50 MPa, on planes 45° from the principal planes"
   ],
   "answer": 3,
   "why": "The maximum in-plane shear stress is the radius of Mohr's circle, 50 MPa. It acts on planes 45° from the principal planes, and those planes also carry the average normal stress of 50 MPa.",
   "proof": [
    "τ_max,in-plane = R = 50 MPa.",
    "On Mohr's circle the top and bottom points are 90° from the principal points, which is 45° on the part.",
    "Normal stress on those planes:  C = 50 MPa, not zero.",
    "The given τxy = 40 MPa is not the maximum: rotating the element finds more."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "For the same point (σx = 80, σy = 20, τxy = 40 MPa), at what angle from the x axis is the first principal plane?",
   "options": [
    "About 26.6°",
    "45°",
    "About 53.1°",
    "About 13.3°"
   ],
   "answer": 0,
   "why": "tan 2θp = 2τxy/(σx − σy) = 80/60, so 2θp = 53.1° and θp = 26.6°. On Mohr's circle you rotate 53.1°; on the part you rotate half that.",
   "proof": [
    "tan 2θp = 2 × 40/(80 − 20) = 1.333.",
    "2θp = 53.1°, so θp = 26.6°.",
    "Mohr's circle angles are double the physical angles.",
    "Check: σ at 26.6° = 50 + 30cos 53.1° + 40sin 53.1° = 50 + 18 + 32 = 100 MPa."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A ductile steel bar is pulled in simple tension, σ. Where is the shear stress largest, and how big is it?",
   "options": [
    "σ, on the cross-section",
    "Zero, there is no shear in tension",
    "σ/2, on planes at 45° to the axis",
    "σ√2, at 45°"
   ],
   "answer": 2,
   "why": "In uniaxial tension Mohr's circle runs from 0 to σ, so its radius, the maximum shear stress, is σ/2. It acts on planes at 45° to the axis. Ductile metals yield by shear slip, which is why tensile specimens show 45° slip bands and cup-and-cone fractures.",
   "proof": [
    "Principal stresses:  σ and 0.",
    "τ_max = (σ − 0)/2 = σ/2.",
    "Planes: 45° to the load axis.",
    "Brittle materials, which fail in tension instead, break straight across at 90°."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Chalk (brittle, weak in tension) is twisted until it breaks. What does the fracture surface look like, and why?",
   "options": [
    "A flat break straight across, because shear is largest there",
    "A 45° helix, because pure shear puts the largest tension on 45° planes",
    "Many small cracks along its length",
    "It cannot break in torsion"
   ],
   "answer": 1,
   "why": "Pure shear τ has principal stresses +τ and −τ on planes at 45°. Brittle materials fail in tension, so the crack follows the 45° tension direction, spiralling round the stick.",
   "proof": [
    "Pure shear:  σx = σy = 0, τxy = τ. Mohr's circle is centred at zero with radius τ.",
    "Principal stresses:  ±τ at 45°.",
    "Brittle: fails when σ₁ reaches its tensile strength, so the fracture plane is perpendicular to σ₁, a 45° helix.",
    "Ductile shafts break flat across instead, by shear on the cross-section."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "On Mohr's circle you move 90° round from the point representing the x face. How far has the element been rotated on the part?",
   "options": [
    "90°",
    "180°",
    "45°",
    "22.5°"
   ],
   "answer": 2,
   "why": "Angles on Mohr's circle are twice the angles on the part. 90° on the circle is 45° on the element.",
   "proof": [
    "The transformation equations use 2θ: σ(θ) = C + R·cos(2θ − 2θp).",
    "So a full 360° round the circle is a 180° turn of the element, which brings it back to the same faces.",
    "Principal planes and maximum shear planes are 90° apart on the circle and 45° apart on the part.",
    "The direction of rotation matches the part if you plot shear with the usual sign convention."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A thin-walled cylinder has hoop stress 100 MPa, axial stress 50 MPa and nearly zero radial stress at its outer surface. What is the absolute maximum shear stress there?",
   "options": [
    "25 MPa",
    "50 MPa",
    "75 MPa",
    "0 MPa"
   ],
   "answer": 1,
   "why": "The in-plane Mohr's circle (100 and 50) gives only 25 MPa. But the third principal stress, radial, is zero, and the largest circle runs from 100 to 0: radius 50 MPa. That shear acts on planes at 45° through the wall.",
   "proof": [
    "Principal stresses:  σ₁ = 100, σ₂ = 50, σ₃ = 0.",
    "In-plane:  (σ₁ − σ₂)/2 = 25 MPa.",
    "Absolute:  (σ₁ − σ₃)/2 = 50 MPa.",
    "Tresca uses the absolute maximum, so ignoring σ₃ would underestimate it by a factor of 2."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A thin spherical pressure vessel has equal 100 MPa stresses in every direction in its wall. What is the maximum shear stress?",
   "options": [
    "Zero, Mohr's circle in the plane is a point",
    "100 MPa",
    "200 MPa",
    "50 MPa, through the thickness"
   ],
   "answer": 3,
   "why": "In the wall's plane the two stresses are equal, so in-plane shear is zero in every direction. But the radial stress is about zero, so the out-of-plane circle runs from 100 to 0, giving 50 MPa of shear on planes through the thickness.",
   "proof": [
    "In-plane:  σ₁ = σ₂ = 100, so (σ₁ − σ₂)/2 = 0.",
    "Out of plane:  σ₃ ≈ 0, so (σ₁ − σ₃)/2 = 50 MPa.",
    "Yielding starts when that 50 MPa reaches the yield shear stress.",
    "Always draw all three circles for a full 3-D check."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "When is 'plane strain' the right model, rather than plane stress?",
   "options": [
    "For thin sheets",
    "For any surface with a strain gauge",
    "For a long or thick body that cannot expand or shrink along one direction, such as a long dam or the middle of a thick plate",
    "When there is no load"
   ],
   "answer": 2,
   "why": "Plane strain means εz = 0: the body is held against strain in one direction, usually because it is very long or thick. A stress σz = ν(σx + σy) builds up to stop it straining.",
   "proof": [
    "Plane strain:  εz = γxz = γyz = 0.",
    "Stress in z is not zero: σz = ν(σx + σy).",
    "Examples: long dams, tunnels, rolled sheet in the mill, the middle of a thick cracked plate.",
    "Thick parts are often more brittle at cracks for this reason: the extra constraint raises the stress needed to yield, so fracture toughness is lowest in plane strain."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "At a point the strains are εx = 400 µε, εy = −200 µε and γxy = 800 µε. What are the principal strains?",
   "options": [
    "400 and −200 µε",
    "600 and −400 µε",
    "800 and 0 µε",
    "500 and −300 µε"
   ],
   "answer": 1,
   "why": "Mohr's circle for strain uses γ/2 on the vertical axis. Centre (400 − 200)/2 = 100, radius √(300² + 400²) = 500. Principal strains are 100 ± 500: 600 and −400 µε.",
   "proof": [
    "Centre:  (εx + εy)/2 = 100 µε.",
    "Radius:  √(((εx − εy)/2)² + (γxy/2)²) = √(300² + 400²) = 500 µε.",
    "ε₁ = 600 µε,  ε₂ = −400 µε.",
    "Common mistake: using γxy, not γxy/2, as the circle's vertical coordinate."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A 0°/45°/90° strain rosette reads ε₀ = 400, ε₄₅ = 300 and ε₉₀ = −200 µε. What is the shear strain γxy?",
   "options": [
    "100 µε",
    "300 µε",
    "200 µε",
    "400 µε"
   ],
   "answer": 3,
   "why": "For a rectangular rosette, γxy = 2ε₄₅ − (ε₀ + ε₉₀) = 600 − 200 = 400 µε. One gauge cannot measure shear, which is why rosettes have three.",
   "proof": [
    "ε at 45°:  ε₄₅ = (εx + εy)/2 + γxy/2.",
    "So γxy = 2ε₄₅ − εx − εy = 2 × 300 − 400 − (−200) = 400 µε.",
    "With εx, εy and γxy you can find principal strains, then stresses with plane-stress Hooke's law.",
    "Use a rosette whenever you do not know the principal directions in advance."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A 350 Ω strain gauge with gauge factor 2 sees 500 µε. How much does its resistance change?",
   "options": [
    "0.35 Ω",
    "0.175 Ω",
    "3.5 Ω",
    "0.0005 Ω"
   ],
   "answer": 0,
   "why": "ΔR/R = GF × ε = 2 × 0.0005 = 0.001. On 350 Ω that is 0.35 Ω, a tiny change, which is why gauges are read with a Wheatstone bridge.",
   "proof": [
    "ΔR/R = GF·ε = 2 × 500 × 10⁻⁶ = 0.001.",
    "ΔR = 0.001 × 350 = 0.35 Ω.",
    "Metal foil gauges have GF ≈ 2; semiconductor gauges can be 50 to 200 times more sensitive but drift more with temperature.",
    "A 0.1% change is far below what a multimeter resolves reliably."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A quarter-bridge circuit (one active gauge, GF = 2) is powered at 5 V. The gauge sees 500 µε. What is the bridge output, roughly?",
   "options": [
    "5 mV",
    "1.25 mV",
    "0.5 mV",
    "12.5 mV"
   ],
   "answer": 1,
   "why": "For a quarter bridge, V_out ≈ V_ex × GF × ε/4 = 5 × 2 × 0.0005/4 = 1.25 mV. Half and full bridges double and quadruple this.",
   "proof": [
    "V_out/V_ex ≈ GF·ε/4 for one active arm.",
    "5 × 2 × 500e-6/4 = 1.25 × 10⁻³ V.",
    "Full bridge, four active arms: 5 mV.",
    "Millivolt signals need an amplifier with high gain and low noise, often a 24-bit ADC with a built-in instrumentation amplifier."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "You want strain gauges on a round shaft to measure torque only, ignoring bending and axial load. How should you arrange them?",
   "options": [
    "One gauge along the shaft's axis",
    "One gauge around the circumference",
    "Four gauges at ±45° to the axis, two on each side of the shaft, wired as a full bridge",
    "Two gauges along the axis on opposite sides"
   ],
   "answer": 2,
   "why": "Torsion is pure shear, whose principal strains lie at ±45° to the axis. Gauges at +45° and −45° read equal and opposite strains under torque. Placing pairs on opposite sides and wiring a full bridge cancels bending and axial strains, which affect both orientations equally.",
   "proof": [
    "Torque: +45° gauge reads +ε, −45° reads −ε. In a full bridge they add.",
    "Axial load: both orientations read the same, so it cancels.",
    "Bending: opposite sides read opposite strains, so the pairs cancel it.",
    "Temperature also cancels, because every gauge sees it equally. Shear strain:  γ = ε₊₄₅ − ε₋₄₅."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A strain gauge reading drifts as a part warms up, with no load applied. What is the most effective fix?",
   "options": [
    "Use a higher excitation voltage",
    "Use a gauge with a higher gauge factor",
    "Add a dummy gauge on an unloaded piece of the same material and temperature, in the adjacent bridge arm",
    "Glue the gauge with more adhesive"
   ],
   "answer": 2,
   "why": "Temperature changes a gauge's resistance and makes the part expand. A dummy gauge on the same material at the same temperature sees exactly those effects but no load. In the adjacent arm of the bridge its change cancels the active gauge's.",
   "proof": [
    "Apparent strain comes from the gauge's resistance changing with temperature and from expansion mismatch between gauge and part.",
    "Adjacent bridge arms subtract, so identical changes cancel.",
    "Self-temperature-compensated gauges are matched to a material's expansion (steel, aluminium), reducing but not removing drift.",
    "Higher excitation voltage makes it worse, by heating the gauge itself."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A steel plate (E = 200 GPa, ν = 0.3) has σx = σy = 100 MPa (equal biaxial tension). What strain does a gauge along x read?",
   "options": [
    "500 µε",
    "650 µε",
    "0 µε",
    "350 µε"
   ],
   "answer": 3,
   "why": "With plane-stress Hooke's law, εx = (σx − νσy)/E = (100 − 30)/200,000 = 350 µε. The stress in y shrinks the plate in x, so the strain is lower than the 500 µε of uniaxial stress.",
   "proof": [
    "εx = (σx − ν·σy)/E.",
    "= (100 − 0.3 × 100)/200,000 = 3.5 × 10⁻⁴ = 350 µε.",
    "Uniaxial 100 MPa would give 500 µε.",
    "Reading 350 µε and assuming uniaxial stress would underestimate the stress by 30%."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "Gauges on a steel part (E = 200 GPa, ν = 0.3) read εx = 500 µε and εy = −150 µε, with no shear. What are the stresses?",
   "options": [
    "σx = 100 MPa, σy = −30 MPa",
    "σx = 100 MPa, σy = 0",
    "σx = 110 MPa, σy = 0",
    "σx = 130 MPa, σy = −30 MPa"
   ],
   "answer": 1,
   "why": "Invert plane-stress Hooke's law: σx = E(εx + νεy)/(1 − ν²) = 100 MPa and σy = E(εy + νεx)/(1 − ν²) = 0. The −150 µε in y is just the Poisson contraction from a uniaxial 100 MPa stress, not a compressive stress.",
   "proof": [
    "E/(1 − ν²) = 200,000/0.91 = 219,800 MPa.",
    "σx = 219,800 × (500 − 45) × 10⁻⁶ = 100 MPa.",
    "σy = 219,800 × (−150 + 150) × 10⁻⁶ = 0.",
    "Multiplying each strain by E alone would give a false −30 MPa in y."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   }
  }
 ]
});
