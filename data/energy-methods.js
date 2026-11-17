/* Topic: Energy methods, impact and columns. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "energy-methods",
 "title": "Energy methods, impact and columns",
 "blurb": "Strain energy, shock-absorbing design, sudden and drop loads, unit-load method, Castigliano, the secant formula, slenderness and the Johnson formula.",
 "questions": [
  {
   "level": "Applied",
   "q": "A steel rod (E = 200 GPa) of 100 mm² area and 1 m length is pulled with 10 kN. How much elastic energy does it store?",
   "options": [
    "25 J",
    "0.25 J",
    "2.5 J",
    "250 J"
   ],
   "answer": 2,
   "why": "U = P²L/(2AE) = (10,000² × 1,000)/(2 × 100 × 200,000) = 2,500 N·mm = 2.5 J. Equivalently ½ × force × stretch: ½ × 10,000 × 0.5 mm.",
   "proof": [
    "Stretch:  δ = PL/(AE) = 10,000 × 1,000/(100 × 200,000) = 0.5 mm.",
    "U = ½Pδ = ½ × 10,000 × 0.5 = 2,500 N·mm = 2.5 J.",
    "Same thing:  U = P²L/(2AE).",
    "Per unit volume it is σ²/(2E): at 100 MPa that is 0.025 N·mm/mm³."
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
   "q": "A force is increased slowly from zero to F, stretching a spring by Δ. How much work does it do, and how does that change if the full force F is applied throughout the motion?",
   "options": [
    "FΔ in both cases",
    "FΔ/2 when increased gradually; FΔ if F is constant the whole way",
    "FΔ/2 in both cases",
    "2FΔ when increased gradually"
   ],
   "answer": 1,
   "why": "When the force grows with deflection, the work is the area under a triangle: ½FΔ. That is the strain energy stored. A constant force F does work FΔ, twice as much, and the extra goes into motion, which is why a suddenly applied load overshoots to twice the static deflection.",
   "proof": [
    "Gradual: F rises linearly with Δ, so work = ∫F dx = ½FΔ = ½kΔ².",
    "Constant force: work = F·Δ.",
    "For a suddenly applied weight, the energy balance W·δ = ½kδ² gives δ = 2W/k.",
    "A couple moment does work in the same way through a rotation: ½Mθ when applied gradually."
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
   "q": "When you calculate the strain energy (or deflection) of a long beam, why is the energy from shear usually ignored?",
   "options": [
    "Shear energy is negative",
    "Beams carry no shear",
    "For long, slender beams the bending energy is far larger than the shear energy",
    "Shear energy only exists in torsion"
   ],
   "answer": 2,
   "why": "Bending energy grows with length cubed relative to shear energy's growth with length alone. For a steel beam ten times longer than it is deep, shear adds under 1% to the deflection.",
   "proof": [
    "Bending:  U_b = ∫M²/(2EI) dx.  Shear:  U_s = ∫f_s·V²/(2GA) dx.",
    "Rectangular cantilever, tip load (f_s = 1.2):  U_s/U_b = 0.3·(E/G)·(h/L)², about 0.8·(h/L)² for steel.",
    "With L = 10h, shear adds under 1%.",
    "Short, deep beams, sandwich panels with soft cores and composite beams with low G are exceptions: shear deflection can dominate."
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
   "q": "Why do bolts meant to absorb shock often have a shank turned down to the thread's root diameter along most of their length?",
   "options": [
    "To save weight only",
    "More of the bolt reaches the same peak stress, so it stores far more energy before yielding",
    "It makes the bolt stiffer",
    "It moves the threads"
   ],
   "answer": 1,
   "why": "Energy stored per unit volume is σ²/(2E). A plain bolt reaches its peak stress only in the thin threaded section, while the thicker shank carries lower stress and stores little. Thinning the shank to the same area brings it up to the same peak stress, storing much more energy before any part yields.",
   "proof": [
    "U = ∫σ²/(2E) dV. Energy capacity is the volume at peak stress, not the peak stress alone.",
    "Plain bolt: thick shank, low stress, little energy.",
    "Waisted bolt: the shank reaches the same stress as the threads, so energy capacity can be several times higher.",
    "Making a shock-loaded part bigger in one place can make it worse, by raising the stress in its weakest section relative to the rest."
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
   "q": "For the same peak stress, how much energy does a rectangular cantilever with a tip load store, compared with a bar of the same volume in uniform tension?",
   "options": [
    "The same",
    "About 1/3",
    "About 1/9",
    "About 1/2"
   ],
   "answer": 2,
   "why": "In bending, only the outer fibres at the root reach the peak stress. Stress falls to zero at the neutral axis and at the tip. Integrating σ²/(2E) over the beam gives 1/9 of the uniform-tension value.",
   "proof": [
    "Beam:  U = P²L³/(6EI), with σ_max = 6PL/(bh²).",
    "Rewriting in σ_max and volume V = bhL:  U = σ_max²V/(18E).",
    "Uniform tension:  U = σ²V/(2E).",
    "Ratio:  1/9. Leaf springs taper to approach uniform stress and store more energy for their weight."
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
   "q": "A load is suddenly dropped onto a structure from zero height (released at contact). How does the peak deflection compare with the same load applied slowly?",
   "options": [
    "The same",
    "1.5 times",
    "2 times",
    "It depends only on the material"
   ],
   "answer": 2,
   "why": "Released suddenly, the weight does work W·δ falling through the deflection, but the spring only stores ½kδ². Setting them equal gives δ = 2W/k, twice the static deflection. It overshoots and vibrates about the static position.",
   "proof": [
    "Energy:  W·δ = ½kδ².",
    "δ_max = 2W/k = 2δ_static.",
    "General drop from height h:  δ_max = δ_st(1 + √(1 + 2h/δ_st)). With h = 0 it gives 2.",
    "Peak stress also doubles, so even a gently placed load needs a factor of 2 if it is released suddenly."
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
   "q": "A weight that would deflect a beam 1 mm if placed gently is dropped onto it from 12 mm above. What is the peak deflection?",
   "options": [
    "6 mm",
    "12 mm",
    "2 mm",
    "13 mm"
   ],
   "answer": 0,
   "why": "δ_max = δ_st(1 + √(1 + 2h/δ_st)) = 1 × (1 + √25) = 6 mm. The peak force and stress are 6 times the static values.",
   "proof": [
    "Energy: W(h + δ) = ½kδ², with k = W/δ_st.",
    "Solving:  δ = δ_st(1 + √(1 + 2h/δ_st)).",
    "= 1 × (1 + √(1 + 24)) = 6 mm.",
    "Impact factor 6. For a large drop it simplifies to about √(2h/δ_st), so a softer structure (bigger δ_st) sees a smaller impact factor."
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
   "q": "A long steel bolt takes a shock load. To make it stiffer, it is replaced by a bolt of the same diameter and material but half the length. For the same impact energy, what happens to its peak stress?",
   "options": [
    "It halves",
    "It stays the same",
    "It rises by about 41%",
    "It falls by about 30%"
   ],
   "answer": 2,
   "why": "In impact the energy is fixed, not the force. A bar in uniform stress stores U = σ²V/(2E), so σ = √(2EU/V). Halving the length halves the volume and raises the peak stress by √2, about 41%. The stiffer bolt is worse.",
   "proof": [
    "Energy stored in a bar at uniform stress:  U = σ²·V/(2E).",
    "So the peak stress for a given energy:  σ = √(2EU/V).",
    "Half the length, half the volume:  σ × √2 = 1.41.",
    "Equivalently, stiffness doubles, so the peak force F = √(2Uk) rises by √2 on the same area.",
    "Rule for shock loads: maximise the volume of material at uniform stress and add compliance. Stiffness alone does not help."
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
   "q": "A 2 kg mass moving at 3 m/s hits a spring of 50 N/mm. How far does the spring compress, and what is the peak force?",
   "options": [
    "About 6 mm and 300 N",
    "About 13 mm and 670 N",
    "About 38 mm and 1,900 N",
    "About 19 mm and 950 N"
   ],
   "answer": 3,
   "why": "All the kinetic energy, ½mv² = 9 J, goes into the spring, ½kx². So x = √(2 × 9/50,000) = 0.019 m = 19 mm, and the peak force is kx = 50 × 19 = 950 N.",
   "proof": [
    "Kinetic energy:  ½ × 2 × 3² = 9 J.",
    "Spring:  ½kx² = 9 J with k = 50,000 N/m.  x = √(18/50,000) = 0.019 m.",
    "Peak force:  F = kx = 50 N/mm × 19 mm = 950 N.",
    "A softer spring (k ÷ 4) doubles x and halves the force. This is the logic behind end-stop bumpers."
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
   "q": "With the unit-load (virtual work) method, how do you find the deflection at a point of a beam?",
   "options": [
    "Apply a unit moment at the support",
    "Apply a unit force at that point in the direction you want the deflection, find its moment diagram m(x), and integrate M·m/(EI) along the beam",
    "Double the real load",
    "Integrate the shear force diagram"
   ],
   "answer": 1,
   "why": "Virtual work: the deflection at a point equals ∫M·m/(EI) dx, where M is the real moment and m is the moment from a unit load at that point. It works for any statically determinate structure, including frames and curved members.",
   "proof": [
    "Real loads give M(x). A unit load at the point of interest gives m(x).",
    "δ = ∫ M·m/(EI) dx over every member.",
    "Cantilever, tip load:  M = Px, m = x.  δ = ∫₀ᴸ Px²/(EI) dx = PL³/(3EI).",
    "For a rotation, apply a unit moment instead. For trusses:  δ = Σ N·n·L/(AE)."
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
   "q": "A cantilever's strain energy under a tip load P is U = P²L³/(6EI). What does Castigliano's theorem give for the tip deflection?",
   "options": [
    "PL³/(6EI)",
    "PL³/(2EI)",
    "PL³/(3EI)",
    "P²L³/(3EI)"
   ],
   "answer": 2,
   "why": "Castigliano's theorem says the deflection under a load equals the derivative of the strain energy with respect to that load: ∂U/∂P = 2PL³/(6EI) = PL³/(3EI).",
   "proof": [
    "δ = ∂U/∂P.",
    "∂/∂P of P²L³/(6EI) = 2PL³/(6EI) = PL³/(3EI).",
    "The same works for rotation under an applied moment:  θ = ∂U/∂M.",
    "To find deflection where there is no load, add a dummy load Q there, differentiate, then set Q = 0."
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
   "q": "An L-shaped bracket has a vertical post of height a fixed at its base and a horizontal arm of length a. A downward load P acts at the arm's tip. Ignoring axial and shear effects, how does the tip's vertical deflection compare with the arm alone fixed at its root?",
   "options": [
    "The same",
    "2 times",
    "4 times",
    "8 times"
   ],
   "answer": 2,
   "why": "The arm alone gives Pa³/(3EI). The post carries a constant moment Pa, which rotates the arm's root by Pa²/(EI) and adds Pa³/(EI) at the tip. Total 4Pa³/(3EI), four times the arm alone.",
   "proof": [
    "Strain energy:  arm  ∫₀ᵃ (Px)²/(2EI) dx = P²a³/(6EI);  post  (Pa)²·a/(2EI) = P²a³/(2EI).",
    "Castigliano:  δ = ∂U/∂P = Pa³/(3EI) + Pa³/(EI) = 4Pa³/(3EI).",
    "The flexible post makes up three quarters of the deflection.",
    "Lesson: the parts of the load path far from the load, carrying the full moment, often dominate. Stiffen the post, not the arm."
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
    "h": 160,
    "alt": "L-shaped bracket: vertical post fixed at the ground with a horizontal arm and a downward load at the arm tip",
    "items": [
     [
      "h",
      50,
      140,
      110,
      140,
      1
     ],
     [
      "r",
      74,
      40,
      12,
      100,
      {
       "f": 1
      }
     ],
     [
      "r",
      74,
      34,
      200,
      12,
      {
       "f": 1
      }
     ],
     [
      "a",
      268,
      6,
      268,
      32,
      {
       "a": 1
      }
     ],
     [
      "t",
      285,
      20,
      "P",
      {
       "s": 13
      }
     ],
     [
      "t",
      60,
      92,
      "a",
      {
       "s": 13,
       "m": 1
      }
     ],
     [
      "t",
      175,
      62,
      "a",
      {
       "s": 13,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A real column always has a slightly crooked shape or an off-centre load. How does it behave as the load rises towards the Euler load?",
   "options": [
    "It stays straight, then suddenly buckles at the Euler load",
    "It bends from the start, and the bending grows faster and faster as the load approaches the Euler load",
    "It shortens but never bends",
    "It is stronger than the Euler load predicts"
   ],
   "answer": 1,
   "why": "An imperfect column never buckles suddenly. It starts bending at once, and the axial load acting on that bend adds moment, so the deflection grows nonlinearly. Peak stress can reach yield below the Euler load, which is what the secant formula predicts.",
   "proof": [
    "Ideal straight column: no bending until P_cr, then it buckles (neutral equilibrium).",
    "Real column: deflection ≈ e/(1 − P/P_cr) roughly, growing rapidly near P_cr.",
    "Load and deflection are not proportional, so superposition does not apply.",
    "The secant formula gives the peak stress for a given eccentricity; at half the Euler load the bending moment is already about 2.25 times P·e."
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
   "q": "For a steel column (E = 200 GPa, yield 250 MPa), at roughly what slenderness ratio L_e/r does Euler buckling stop being valid, so the Johnson formula should be used for shorter columns?",
   "options": [
    "About 126",
    "About 40",
    "About 60",
    "About 300"
   ],
   "answer": 0,
   "why": "The Johnson parabola meets the Euler curve where the Euler stress is half the yield stress: (L/r)_t = π√(2E/σ_y) = π√1,600 = 126. Shorter columns fail by a mix of yielding and buckling.",
   "proof": [
    "Transition:  (L/r)_t = π√(2E/σ_y).",
    "= π√(2 × 200,000/250) = π × 40 = 126.",
    "Above 126: Euler,  σ_cr = π²E/(L/r)².",
    "Below 126: Johnson,  σ_cr = σ_y − (σ_y²/(4π²E))(L/r)². Very short columns (L/r under about 10 to 20) just yield."
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
   "q": "Euler's formula gives a critical stress of 400 MPa for a short steel column whose yield stress is 250 MPa. What does that tell you?",
   "options": [
    "The column can take 400 MPa",
    "The column will yield before it buckles elastically, so Euler's formula does not apply; use a yield check or an inelastic formula such as Johnson's",
    "The column is unsafe at any load",
    "Use the average, 325 MPa"
   ],
   "answer": 1,
   "why": "Euler assumes the column stays elastic up to buckling. If the predicted stress is above yield, the column is too short and stocky for that to happen: it will yield or buckle inelastically first, at a lower stress.",
   "proof": [
    "Euler stress:  σ_cr = π²E/(L/r)².",
    "If σ_cr > σ_y (or even above about σ_y/2 in practice), elastic buckling is not the failure mode.",
    "Intermediate columns: use the Johnson parabola,  σ_cr = σ_y − (σ_y²/(4π²E))(L/r)².",
    "Very short columns: they simply yield at σ = P/A = σ_y."
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
