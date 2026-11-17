/* Topic: Axial loading, shear and fits. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "axial-shear",
 "title": "Axial loading, shear and fits",
 "blurb": "Normal and shear strain, single and double shear, bearing stress, pin sizing, factor of safety, stepped and indeterminate bars, misfits, press fits, complementary shear, internal loads, superposition, ductility, G and bulk modulus, residual stress.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A 200 mm bar stretches 0.1 mm under load. What is its normal strain?",
   "options": [
    "0.05",
    "0.0005, or 500 microstrain",
    "0.005, or 5,000 microstrain",
    "0.1 mm"
   ],
   "answer": 1,
   "why": "Normal strain is the change in length divided by the original length: 0.1/200 = 0.0005. Engineers often write this as 500 µε (microstrain). It has no units.",
   "proof": [
    "ε = ΔL/L₀ = 0.1/200 = 0.0005.",
    "In microstrain: 0.0005 × 10⁶ = 500 µε.",
    "Strain is dimensionless, so 0.1 mm is a deflection, not a strain.",
    "For steel (E = 200 GPa) this strain means σ = Eε = 100 MPa, well below yield."
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
   "q": "A rubber pad 10 mm thick is glued between two plates. The top plate slides 2 mm sideways relative to the bottom. What is the shear strain in the rubber?",
   "options": [
    "0.02 rad",
    "2 rad",
    "0.2 rad",
    "5 rad"
   ],
   "answer": 2,
   "why": "Shear strain is the change in angle of a right angle. For small angles it is the sideways shift divided by the thickness: 2/10 = 0.2 rad.",
   "proof": [
    "γ ≈ tan γ = sideways shift / thickness = 2/10 = 0.2 rad (about 11.5°).",
    "The exact angle is atan(0.2) = 0.197 rad, close enough for small angles.",
    "The shear stress follows from τ = Gγ. For a rubber with G = 0.5 MPa, τ = 0.1 MPa.",
    "Shear pads like this are used as compliant mounts and in some tactile sensors, where sideways slip is read as shear strain."
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
   "q": "A 10 mm diameter pin joins a clevis (two outer plates) to a single middle plate carrying 10 kN. What is the average shear stress in the pin?",
   "options": [
    "127 MPa",
    "255 MPa",
    "31.8 MPa",
    "63.7 MPa"
   ],
   "answer": 3,
   "why": "In a clevis the pin is in double shear: it is cut on two planes, so each carries half the load. τ = F/(2A) = 10,000/(2 × 78.5) = 63.7 MPa.",
   "proof": [
    "Pin area:  A = πd²/4 = π × 10²/4 = 78.5 mm².",
    "Double shear: two cut planes, each carries F/2 = 5 kN.",
    "τ = 5,000/78.5 = 63.7 MPa.",
    "In single shear (two overlapping plates, one cut plane) the same pin would see 127 MPa, which is why clevises are used for heavily loaded pins."
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
   "q": "The same 10 mm pin passes through a 5 mm thick plate carrying 10 kN. What is the bearing stress on the plate's hole?",
   "options": [
    "200 MPa",
    "127 MPa",
    "63.7 MPa",
    "400 MPa"
   ],
   "answer": 0,
   "why": "Bearing stress is the load divided by the projected contact area, diameter × thickness: 10,000/(10 × 5) = 200 MPa. Thin plates usually fail in bearing or tear-out before the pin shears.",
   "proof": [
    "Projected area:  d × t = 10 × 5 = 50 mm².",
    "σ_bearing = F/(d·t) = 10,000/50 = 200 MPa.",
    "The real contact pressure is not uniform, so codes allow a bearing stress higher than yield, often about 1.5 times, for this average value.",
    "Also check tear-out: the hole must sit far enough from the edge, commonly at least 1.5 to 2 diameters, so the plate does not shear out behind the pin."
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
   "q": "A clevis pin carries 20 kN. The pin material's allowable shear stress is 100 MPa. What is the smallest standard pin diameter you should choose?",
   "options": [
    "8 mm",
    "10 mm",
    "12 mm",
    "16 mm"
   ],
   "answer": 2,
   "why": "In double shear each plane carries 10 kN, so the pin needs 10,000/100 = 100 mm² of area: d = √(4 × 100/π) = 11.3 mm. Round up to the next standard size, 12 mm.",
   "proof": [
    "Double shear:  τ = F/(2A), so A = F/(2τ_allow) = 20,000/(2 × 100) = 100 mm².",
    "d = √(4A/π) = √127 = 11.3 mm.",
    "Round up: 12 mm. Never round down on a strength calculation.",
    "Then check bearing on the plates and pin bending, which can govern if there is a gap between the clevis plates and the middle plate."
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
   "q": "A bracket's working stress is 100 MPa. Its material yields at 300 MPa. What is its factor of safety against yield, and what is an allowable stress?",
   "options": [
    "Factor 0.33; allowable stress is the working stress",
    "Factor 3; allowable stress is the material strength divided by the factor of safety",
    "Factor 3; allowable stress is the yield stress times the factor of safety",
    "Factor 200; allowable stress is the difference between yield and working stress"
   ],
   "answer": 1,
   "why": "Factor of safety is strength divided by the stress the part actually sees: 300/100 = 3. In allowable stress design you pick a factor of safety first, then limit the working stress to strength/FoS.",
   "proof": [
    "FoS = σ_yield/σ_working = 300/100 = 3.",
    "Allowable stress = σ_yield/FoS. With a required FoS of 2, the allowable stress is 150 MPa.",
    "Factor of safety can also be based on ultimate strength, buckling load or fatigue strength. State which.",
    "A factor of safety below 1 means the part is predicted to fail."
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
   "q": "Which situation calls for the largest factor of safety?",
   "options": [
    "A ductile steel part under a well-known static load, verified by test",
    "A cast iron part under impact loads that are poorly known, where failure could injure someone",
    "An aluminium part under a known load, where failure only means a cheap replacement",
    "A steel part whose stress was found by careful FEA and matches strain-gauge readings"
   ],
   "answer": 1,
   "why": "Factor of safety covers uncertainty and consequence. Brittle material, unknown impact loads and a risk to people each push it up. Well-known loads, ductile materials, testing and low consequence each bring it down.",
   "proof": [
    "Uncertainty in load: impact and unknown loads need more margin.",
    "Uncertainty in strength: castings have porosity and scatter; brittle materials give no warning.",
    "Consequence: injury or a safety function calls for a higher factor, often set by a code or standard.",
    "Typical rough ranges: 1.25 to 1.5 for well-understood aerospace parts, 2 to 3 for general machinery, 3 to 5 or more for brittle materials, uncertain loads or lifting gear."
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
   "q": "Load and resistance factor design (limit state design) differs from allowable stress design how?",
   "options": [
    "It uses no safety factors",
    "It applies one factor to the material strength only",
    "It applies separate factors to each kind of load (for example 1.2 on dead load and 1.6 on live load) and a separate factor below 1 on the resistance",
    "It only checks deflection, not strength"
   ],
   "answer": 2,
   "why": "Allowable stress design puts all the margin in a single factor on strength. Limit state design scales up each load by a factor matched to how uncertain it is, scales down the predicted strength by its own factor, and checks that the factored strength exceeds the factored load.",
   "proof": [
    "Allowable stress:  σ_working ≤ σ_strength/FoS.",
    "Limit state:  φ·R_n ≥ Σ γᵢ·Qᵢ, for example 0.9·R_n ≥ 1.2·Dead + 1.6·Live.",
    "Well-known loads, like self-weight, get small factors; variable loads get larger ones.",
    "It is standard in structural steel and concrete codes; mechanical design mostly still uses a single factor of safety."
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
   "q": "A narrow bar is pulled by a load applied at a single point at its end. Where is the stress close to uniform across the section?",
   "options": [
    "Everywhere, including right under the load",
    "Only at the exact centre of the bar",
    "Nowhere, it is never uniform",
    "About one bar-width or more away from the load"
   ],
   "answer": 3,
   "why": "Saint-Venant's principle: the way a load is applied only affects the stress nearby. About one section-width away, the stress has spread out and is close to the uniform P/A, whatever the exact load distribution.",
   "proof": [
    "Right under a point load the stress is concentrated and far above P/A.",
    "At about one width away it is within a few percent of uniform.",
    "This is why test specimens have long, narrow gauge lengths away from the grips.",
    "It also lets FEA apply a load as a simple pressure, as long as you do not trust stresses right at that face."
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
   "q": "You cut a loaded member with an imaginary section to find the loads inside it (the method of sections). In general, which internal loads can act on that cut?",
   "options": [
    "Only an axial force",
    "An axial force and a bending moment only",
    "An axial (normal) force, a shear force, a twisting torque and a bending moment",
    "Only stresses, never forces"
   ],
   "answer": 2,
   "why": "The cut face holds the piece in equilibrium, so it can carry whatever force and moment are needed. Splitting them along and across the member gives a normal force, shear force, torque and bending moment. Each of these produces its own stress.",
   "proof": [
    "Draw a free-body diagram of one piece, including the internal loads on the cut.",
    "Normal force N, along the axis: gives σ = N/A.",
    "Shear force V, across the axis: gives shear stress.",
    "Torque T, about the axis: gives torsional shear.  Bending moment M: gives σ = My/I.",
    "In 3-D there are six components: one normal force, two shears, one torque and two bending moments."
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
   "q": "When can you NOT find a total stress or deflection by adding up the results of each load acting alone (superposition)?",
   "options": [
    "When there are more than two loads",
    "When the loads are in different directions",
    "When the loads are applied at different times",
    "When the material yields, or the deflection is large enough to change how the loads act, as in a column near buckling"
   ],
   "answer": 3,
   "why": "Superposition needs a linear relation between load and response. That breaks if the material goes past its elastic limit, or if the part deforms enough to change the geometry, such as a column whose bending adds moment from the axial load.",
   "proof": [
    "Requirement 1: linear elastic material (σ = Eε, no yielding).",
    "Requirement 2: small deformations, so the loads act on essentially the original shape.",
    "Columns and beam-columns fail requirement 2: the axial load times the deflection adds moment, so the response is nonlinear.",
    "Within those limits, superposition is how beam tables are combined for multiple loads."
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
   "q": "A steel bar (E = 200 GPa) has two parts: 100 mm long with 100 mm² area, then 200 mm long with 50 mm² area. A 10 kN pull runs through both. How much does it stretch?",
   "options": [
    "0.15 mm",
    "0.25 mm",
    "0.05 mm",
    "0.20 mm"
   ],
   "answer": 1,
   "why": "Each segment carries the same force, so add their stretches: δ = Σ PL/(AE) = 0.05 + 0.20 = 0.25 mm. The thin, long part does most of the stretching.",
   "proof": [
    "Segment 1:  δ₁ = 10,000 × 100/(100 × 200,000) = 0.05 mm.",
    "Segment 2:  δ₂ = 10,000 × 200/(50 × 200,000) = 0.20 mm.",
    "Total:  0.25 mm.",
    "Equivalently the segments are springs in series: k₁ = AE/L = 200 kN/mm and k₂ = 50 kN/mm, combined 40 kN/mm, and 10 kN/40 = 0.25 mm."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   },
   "sketch": {
    "h": 120,
    "alt": "Stepped bar fixed to a wall, thick section then thin section, pulled at the free end",
    "items": [
     [
      "h",
      40,
      35,
      40,
      95,
      -1
     ],
     [
      "r",
      40,
      50,
      120,
      30,
      {
       "f": 1
      }
     ],
     [
      "r",
      160,
      57,
      220,
      16,
      {
       "f": 1
      }
     ],
     [
      "a",
      380,
      65,
      430,
      65,
      {
       "a": 1
      }
     ],
     [
      "t",
      440,
      60,
      "10 kN",
      {
       "s": 12
      }
     ],
     [
      "t",
      100,
      105,
      "100 mm, A = 100",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      270,
      105,
      "200 mm, A = 50",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A rod hangs from the ceiling and stretches under its own weight W. How does that stretch compare with hanging a weight W from the bottom of a weightless rod of the same size?",
   "options": [
    "Half as much",
    "The same",
    "Twice as much",
    "A quarter as much"
   ],
   "answer": 0,
   "why": "Under self-weight the force in the rod grows from zero at the bottom to W at the top, an average of W/2. So it stretches half as much as with all of W at the end: δ = WL/(2AE).",
   "proof": [
    "At distance x from the bottom the rod carries the weight below it:  N(x) = W·x/L.",
    "δ = ∫ N dx/(AE) = (W/L)(L²/2)/(AE) = WL/(2AE).",
    "With W hung at the end:  δ = WL/(AE).",
    "Ratio:  ½. By superposition, a rod with its own weight W and a load P at the end stretches (P + W/2)L/(AE)."
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
   "q": "A bar is fixed between two rigid walls, 300 mm apart. A 9 kN axial load is applied 100 mm from the left wall. How much does the left wall carry?",
   "options": [
    "3 kN",
    "4.5 kN",
    "6 kN",
    "9 kN"
   ],
   "answer": 2,
   "why": "The two parts must stretch and squash by the same amount, so the shorter, stiffer left part carries more. The left wall takes P·b/L = 9 × 200/300 = 6 kN and the right wall 3 kN.",
   "proof": [
    "Equilibrium:  R_L + R_R = 9 kN.",
    "Compatibility: the load point moves the same distance for both parts.  R_L·a/(AE) = R_R·b/(AE), with a = 100 and b = 200.",
    "So R_L = 2R_R:  R_L = 6 kN, R_R = 3 kN.",
    "The parts are springs in parallel: the stiffer one (shorter) takes more of the load. Statics alone could not answer this."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported solid mechanics questions in Tesla mechanical design interviews, alongside circuits. This exact question was not reported.",
    "sources": [
     "linckt",
     "mde"
    ]
   },
   "sketch": {
    "h": 120,
    "alt": "Bar between two walls with an axial load one third of the way along",
    "items": [
     [
      "h",
      40,
      35,
      40,
      95,
      -1
     ],
     [
      "h",
      420,
      35,
      420,
      95,
      1
     ],
     [
      "r",
      40,
      58,
      380,
      14,
      {
       "f": 1
      }
     ],
     [
      "l",
      167,
      52,
      167,
      78,
      {
       "w": 2
      }
     ],
     [
      "a",
      140,
      40,
      190,
      40,
      {
       "a": 1
      }
     ],
     [
      "t",
      165,
      30,
      "9 kN",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      103,
      100,
      "100 mm",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      293,
      100,
      "200 mm",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A steel post and an aluminium post, same length and area, sit side by side under a rigid plate carrying 27 kN. E is 200 GPa for steel and 70 GPa for aluminium. How much does the steel post carry?",
   "options": [
    "13.5 kN",
    "20 kN",
    "7 kN",
    "27 kN"
   ],
   "answer": 1,
   "why": "Both posts shorten the same amount, so the load splits in proportion to their stiffness, AE/L. Steel takes 200/270 of the load: 20 kN. Aluminium takes 7 kN.",
   "proof": [
    "Compatibility: same shortening δ.  F_s = k_s·δ, F_a = k_a·δ.",
    "Stiffness ratio:  k_s/k_a = 200/70.",
    "F_s = 27 × 200/270 = 20 kN.  F_a = 27 × 70/270 = 7 kN.",
    "The stiff member attracts load. Adding a stiff part in parallel can overload it while protecting the soft one."
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
   "q": "A steel bar (E = 200 GPa) is 200 mm long but the gap between two rigid walls is 199.9 mm. It is forced in. What stress does it carry?",
   "options": [
    "10 MPa compression",
    "50 MPa compression",
    "200 MPa compression",
    "100 MPa compression"
   ],
   "answer": 3,
   "why": "Forcing the bar in shortens it by 0.1 mm, a strain of 0.0005. Its stress is Eε = 200,000 × 0.0005 = 100 MPa in compression, with no external load at all.",
   "proof": [
    "Misfit:  δ = 0.1 mm. Strain:  ε = 0.1/200 = 0.0005.",
    "σ = Eε = 200,000 × 0.0005 = 100 MPa.",
    "If the walls are springs instead of rigid, they take part of the misfit and the stress is lower.",
    "This is the same mechanism as thermal stress and preload: any built-in misfit becomes stress in a constrained part."
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
   "q": "A press fit holds a shaft in a hub. The interference is doubled, staying in the elastic range. What happens to the contact pressure and the torque the fit can carry?",
   "options": [
    "Both double",
    "Pressure doubles, torque stays the same",
    "Both rise four times",
    "Neither changes, friction sets the torque"
   ],
   "answer": 0,
   "why": "While everything stays elastic, contact pressure is proportional to the interference. The torque the fit can carry is friction × pressure × contact area × radius, so it doubles too. So do the stresses in the hub.",
   "proof": [
    "Elastic: pressure ∝ interference, p = (constant set by E and the diameters) × δ.",
    "Torque capacity:  T = μ·p·(πdL)·(d/2), proportional to p.",
    "So doubling δ doubles p and T.",
    "The hub's hoop stress also doubles, and it is highest at the bore. Check it stays below yield, especially for a thin hub."
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
   "q": "A tiny square element inside a loaded part has a shear stress τ acting along its top face. What must act on its two side faces?",
   "options": [
    "Nothing, shear only acts on one face",
    "A normal stress equal to τ",
    "A shear stress of the same size τ, directed so the element does not spin",
    "Half of τ on each side"
   ],
   "answer": 2,
   "why": "Shear stresses come in matched pairs. If the top and bottom faces carry τ, they form a couple that would spin the element. Equilibrium needs an equal and opposite couple, so the side faces carry the same τ. This is called the complementary property of shear.",
   "proof": [
    "Top and bottom faces: τ acting in opposite directions forms a couple τ·(dx·dz)·dy.",
    "Moment equilibrium needs an opposite couple from the side faces: τ'·(dy·dz)·dx.",
    "So τ' = τ. All four faces carry the same shear stress, pointing either towards or away from the same corners.",
    "Consequences: a twisted shaft has shear along its length as well as across it, and a beam has horizontal shear between its layers as well as vertical shear."
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
   "q": "Steel has E = 200 GPa and Poisson's ratio 0.3. What is its shear modulus G?",
   "options": [
    "About 77 GPa",
    "About 100 GPa",
    "About 154 GPa",
    "About 60 GPa"
   ],
   "answer": 0,
   "why": "For an isotropic material, G = E/(2(1 + ν)) = 200/2.6 = 77 GPa. You only need two of E, G and ν; the third follows.",
   "proof": [
    "G = E/(2(1 + ν)) = 200/(2 × 1.3) = 76.9 GPa.",
    "Aluminium: 70/(2 × 1.33) = 26 GPa.",
    "G sets torsional stiffness, so a steel shaft twists about 3 times less than an aluminium one of the same size.",
    "The relation fails for anisotropic materials like composites and wood, where G is measured separately."
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
   "q": "How is a metal's ductility usually reported from a tensile test?",
   "options": [
    "By its yield strength",
    "By its modulus of elasticity",
    "By its hardness",
    "By its percent elongation at fracture and its percent reduction in area"
   ],
   "answer": 3,
   "why": "Ductility is how much a material can deform plastically before it breaks. A tensile test gives two numbers for it: how much the gauge length grew by fracture, and how much the cross-section shrank at the neck.",
   "proof": [
    "Percent elongation = (L_fracture − L₀)/L₀ × 100. Mild steel is typically 20 to 35%.",
    "Percent reduction in area = (A₀ − A_fracture)/A₀ × 100. Mild steel often reaches about 60%.",
    "Brittle materials such as grey cast iron show well under 1%.",
    "Strength and stiffness say nothing about ductility: a strong steel can be brittle and a weak aluminium can be very ductile."
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
   "q": "Steel has E = 200 GPa and ν = 0.3. What is its bulk modulus K, the resistance to change in volume under uniform pressure?",
   "options": [
    "About 67 GPa",
    "About 167 GPa",
    "About 500 GPa",
    "About 77 GPa"
   ],
   "answer": 1,
   "why": "K = E/(3(1 − 2ν)) = 200/(3 × 0.4) = 167 GPa. Under a hydrostatic pressure p, the volume strain is p/K.",
   "proof": [
    "K = E/(3(1 − 2ν)) = 200/1.2 = 167 GPa.",
    "Volume strain under 100 MPa pressure:  100/167,000 = 0.0006.",
    "As ν approaches 0.5, K goes to infinity: the material becomes incompressible.",
    "Generalised Hooke's law in 3-D: εx = [σx − ν(σy + σz)]/E, and the same for y and z."
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
   "q": "A silicone rubber pad (ν ≈ 0.49) for a tactile sensor is much stiffer than expected once it is glued inside a rigid cup. Why?",
   "options": [
    "Glue makes rubber harder",
    "Rubber is nearly incompressible: when it cannot bulge sideways, compressing it means changing its volume, which takes enormous force",
    "The cup adds its own stiffness in series",
    "Rubber's modulus rises with time"
   ],
   "answer": 1,
   "why": "Rubber changes shape easily but barely changes volume. A free pad squashes by bulging out at the sides. Bonded and confined, it has nowhere to go, so the effective stiffness approaches the bulk modulus, hundreds or thousands of times E.",
   "proof": [
    "Free pad: stiffness set by E, about 1 to 3 MPa for soft silicone.",
    "Bonded faces: the shape factor (loaded area/free side area) raises stiffness sharply.",
    "Fully confined: stiffness approaches K = E/(3(1 − 2ν)), about 17 times E at ν = 0.49 and far more as ν approaches 0.5.",
    "Design fix: leave room to bulge, add relief grooves or cavities, or use a foam or a lower-ν material."
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
   "q": "A ductile plate with a hole is loaded until the edge of the hole yields, then the load is removed. What stress is left at the edge of the hole?",
   "options": [
    "None, it returns to zero",
    "Tensile residual stress",
    "Compressive residual stress",
    "It depends only on the hole size"
   ],
   "answer": 2,
   "why": "The yielded material at the hole edge was stretched permanently. When the elastic material around it springs back, it squeezes that yielded zone, leaving compression. This is the principle behind cold-expanding holes to improve fatigue life.",
   "proof": [
    "Loading: the peak stress at the hole (Kt × nominal) reaches yield and that ring stretches plastically.",
    "Unloading: the surrounding elastic material unloads elastically and wants to return to its original size.",
    "The permanently stretched ring is now too big for its surroundings, so it ends up in compression.",
    "Compressive residual stress at the hole slows fatigue cracks, which is why aircraft fastener holes are cold-expanded."
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
   "q": "An axially loaded steel bar (elastic-perfectly plastic) first yields at load P_y. How much more load can it carry before it yields completely?",
   "options": [
    "50% more",
    "70% more",
    "About 14% more",
    "None: the stress is uniform, so the whole section yields at once"
   ],
   "answer": 3,
   "why": "In uniform tension every fibre has the same stress, so the whole section reaches yield together. There is no reserve as there is in bending, where the outer fibres yield first and the inner ones can still carry more.",
   "proof": [
    "Axial:  σ = P/A, the same everywhere, so first yield is full yield.",
    "Rectangular beam in bending: full plastic moment is 1.5 times the first-yield moment.",
    "Real steels strain-harden, so there is some reserve up to ultimate strength, but with large deformation.",
    "For statically indeterminate assemblies there is reserve: when one member yields, the others take more load."
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
