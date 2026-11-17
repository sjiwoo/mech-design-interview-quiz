/* Topic: Torsion and shaft design. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "torsion-shafts",
 "title": "Torsion and shaft design",
 "blurb": "Torsion formula, angle of twist, hollow shafts, power and speed, indeterminate and non-circular shafts, thin-walled tubes, stress concentration, plastic torsion, and sizing shafts for bending plus torque.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A solid steel shaft of 20 mm diameter carries 100 N·m of torque. What is the maximum shear stress?",
   "options": [
    "31.8 MPa",
    "63.7 MPa",
    "127 MPa",
    "15.9 MPa"
   ],
   "answer": 1,
   "why": "τ = Tc/J. For a solid round shaft that simplifies to 16T/(πd³) = 16 × 100,000/(π × 8,000) = 63.7 MPa, at the outer surface.",
   "proof": [
    "J = πd⁴/32 = π × 20⁴/32 = 15,708 mm⁴.",
    "τ = T·c/J = 100,000 × 10/15,708 = 63.7 MPa.",
    "Shortcut:  τ = 16T/(πd³).",
    "Shear stress is zero at the centre and rises linearly to the surface, which is why hollow shafts waste little material."
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
   "q": "You double the diameter of a solid shaft. How do its torsional strength and stiffness change?",
   "options": [
    "Strength ×8, stiffness ×16",
    "Strength ×4, stiffness ×8",
    "Strength ×2, stiffness ×4",
    "Strength ×16, stiffness ×16"
   ],
   "answer": 0,
   "why": "Strength follows J/c ∝ d³, so 8 times. Stiffness follows J ∝ d⁴, so 16 times. Diameter is the strongest lever for a shaft.",
   "proof": [
    "τ = 16T/(πd³): the torque for a given stress ∝ d³, so ×8.",
    "Angle of twist φ = TL/(GJ), with J ∝ d⁴: stiffness ×16.",
    "Mass only goes up 4 times.",
    "A small increase in diameter goes a long way: 26% more diameter doubles torque capacity."
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
   "q": "A hollow shaft (40 mm outside, 30 mm inside) is compared with a solid shaft of the same weight. How do they compare in torsion?",
   "options": [
    "The same, it has the same area",
    "The solid shaft is about twice as strong",
    "The hollow one is about 3.6 times stiffer and 2.4 times stronger",
    "The hollow one is about 1.2 times stiffer"
   ],
   "answer": 2,
   "why": "Same area means a solid diameter of √(40² − 30²) = 26.5 mm. The hollow shaft puts its material far from the centre, where it works hardest, so its J is 3.6 times larger and its J/c is 2.4 times larger.",
   "proof": [
    "Solid with the same area:  d = √(1,600 − 900) = 26.5 mm.",
    "Hollow:  J = π(40⁴ − 30⁴)/32 = 171,800 mm⁴.  Solid:  J = π × 26.5⁴/32 = 48,100 mm⁴. Ratio 3.6.",
    "Strength ∝ J/c:  171,800/20 = 8,590 against 48,100/13.2 = 3,640. Ratio 2.4.",
    "Limit: very thin walls buckle locally under torsion."
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
   "q": "A steel shaft (G = 80 GPa) 10 mm in diameter and 500 mm long carries 10 N·m. How far does it twist?",
   "options": [
    "About 0.06°",
    "About 1.8°",
    "About 36°",
    "About 3.6°"
   ],
   "answer": 3,
   "why": "φ = TL/(GJ) = 10,000 × 500/(80,000 × 982) = 0.064 rad, which is 3.6°. Long, thin shafts are surprisingly floppy in torsion.",
   "proof": [
    "J = π × 10⁴/32 = 982 mm⁴.",
    "φ = TL/(GJ) = 5 × 10⁶/(7.85 × 10⁷) = 0.064 rad.",
    "In degrees:  0.064 × 57.3 = 3.6°.",
    "Torsional stiffness:  k = GJ/L = 157 N·m/rad. For a servo-driven joint this much wind-up would show up as position error and lower resonance."
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
   "q": "A 3 kW motor runs at 1,500 rpm and drives a 10:1 gearbox (assume no losses). What torque does the output shaft carry?",
   "options": [
    "19 N·m",
    "1.9 N·m",
    "191 N·m",
    "1,910 N·m"
   ],
   "answer": 2,
   "why": "Motor torque is P/ω = 3,000/(1,500 × 2π/60) = 19.1 N·m. The gearbox multiplies torque by 10 while cutting speed by 10, so the output carries 191 N·m at 150 rpm.",
   "proof": [
    "ω = 1,500 × 2π/60 = 157 rad/s.",
    "T_motor = P/ω = 3,000/157 = 19.1 N·m.",
    "Output:  T = 19.1 × 10 = 191 N·m at 150 rpm. Power stays 3 kW.",
    "Real gearboxes lose a few percent per stage, so size the output shaft for the torque, and size the motor for the losses."
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
   "q": "A motor's output power is fixed. You change the gearing so its shaft spins twice as fast. What happens to the shear stress in that shaft?",
   "options": [
    "It doubles",
    "It halves",
    "It stays the same",
    "It quadruples"
   ],
   "answer": 1,
   "why": "Torque is power divided by speed. At twice the speed the same power needs half the torque, so the shaft stress halves. Fast shafts can be thin; slow, high-torque output shafts must be thick.",
   "proof": [
    "P = T·ω, so T = P/ω.",
    "Double ω: T halves.",
    "τ ∝ T, so τ halves.",
    "This is why gearboxes have thin input shafts and thick output shafts."
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
   "q": "A shaft is fixed at both ends and a torque T is applied one third of the way along from the left end. How much torque does the left support carry?",
   "options": [
    "T/3",
    "T/2",
    "2T/3",
    "T"
   ],
   "answer": 2,
   "why": "Both sections twist through the same angle at the load point, so the shorter, stiffer left section carries more. The left end reacts T·b/L = 2T/3 and the right end T/3.",
   "proof": [
    "Equilibrium:  T_L + T_R = T.",
    "Compatibility: same angle at the load point.  T_L·a/(GJ) = T_R·b/(GJ), with a = L/3 and b = 2L/3.",
    "So T_L = 2T_R, giving T_L = 2T/3 and T_R = T/3.",
    "It works exactly like an axial bar between two walls: the shorter part is stiffer and attracts more load."
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
   "q": "A square bar and a round bar have the same cross-sectional area and material. How does the square bar's torsional stiffness compare?",
   "options": [
    "About 12% lower",
    "The same",
    "About 50% lower",
    "About 12% higher"
   ],
   "answer": 0,
   "why": "For a square of side a, J_eff ≈ 0.141a⁴. A circle of the same area has J = a⁴/(2π) = 0.159a⁴. So the square is about 0.885 times as stiff. Its corners carry almost no shear and so add little.",
   "proof": [
    "Square:  J_eff = 0.1406·a⁴ (torsion constant, not the polar moment).",
    "Circle of equal area:  r = a/√π, so J = πr⁴/2 = a⁴/(2π) = 0.159a⁴.",
    "Ratio 0.885.",
    "Using the polar moment Ix + Iy for a square gives 0.167a⁴, which is wrong: non-circular sections warp, and only a circle's polar moment equals its torsion constant."
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
   "q": "A rectangular steel bar is twisted. Where is the shear stress highest?",
   "options": [
    "At the corners",
    "At the centre",
    "At the middle of the short sides",
    "At the middle of the long sides"
   ],
   "answer": 3,
   "why": "In a rectangle the shear stress peaks at the middle of the long sides, the surface points closest to the centre. At the corners it is zero, because the stress must be parallel to both free faces at once.",
   "proof": [
    "At a corner, any shear stress would need to act across one of the free surfaces, so it must be zero.",
    "The peak is at the surface point nearest the centroid, the middle of each long side.",
    "For a thin strip of width b and thickness t:  τ_max ≈ 3T/(bt²), and J ≈ bt³/3.",
    "This is why fatigue cracks in twisted keys and flat springs start at the middle of the wide face."
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
   "q": "A thin-walled square tube, 50 × 50 mm measured to the middle of the wall, 2 mm thick, carries 500 N·m. What is the shear stress in the wall?",
   "options": [
    "25 MPa",
    "50 MPa",
    "100 MPa",
    "12.5 MPa"
   ],
   "answer": 1,
   "why": "For a closed thin-walled tube, Bredt's formula gives τ = T/(2·A_m·t), where A_m is the area enclosed by the wall's centreline: 500,000/(2 × 2,500 × 2) = 50 MPa.",
   "proof": [
    "Enclosed area:  A_m = 50 × 50 = 2,500 mm².",
    "Shear flow:  q = T/(2A_m) = 500,000/5,000 = 100 N/mm, constant all round the wall.",
    "τ = q/t = 100/2 = 50 MPa.",
    "Torsional stiffness:  J = 4A_m²t/(perimeter) = 4 × 2,500² × 2/200 = 250,000 mm⁴. A slit tube of the same size would have only about 530 mm⁴."
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
   "q": "A stepped shaft has a shoulder fillet with a torsional stress concentration factor of 1.6. Nominal shear stress is 50 MPa. When does the 80 MPa peak matter most?",
   "options": [
    "Never, nominal stress is what counts",
    "Only when the shaft is brittle",
    "Mostly in fatigue, and for brittle materials under static load",
    "Only when the shaft is hollow"
   ],
   "answer": 2,
   "why": "Peak stress is 1.6 × 50 = 80 MPa. Under a single static load a ductile shaft yields locally and redistributes it, so the peak barely matters. Under cyclic loading, or in brittle materials, cracks start at that peak.",
   "proof": [
    "Peak:  τ_max = Kt·τ_nom = 1.6 × 50 = 80 MPa.",
    "Static, ductile: local yielding relieves the peak; design on nominal stress with care.",
    "Fatigue: use the fatigue factor Kf = 1 + q(Kt − 1), where q is notch sensitivity, close to 1 for hardened steel.",
    "Fixes: a larger fillet radius, a relief groove, or a shoulder ring so the fillet can be larger."
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
   "q": "A solid round shaft is twisted until it is fully plastic. How does that torque compare with the torque at first yield?",
   "options": [
    "The same",
    "4/3 as much",
    "1.5 times",
    "2 times"
   ],
   "answer": 1,
   "why": "At first yield only the surface reaches the yield shear stress. When fully plastic, every fibre is at that stress. For a solid circle this gives 4/3 of the first-yield torque.",
   "proof": [
    "First yield:  T_y = τ_y·J/c = (π/2)·τ_y·c³.",
    "Fully plastic:  T_p = ∫ τ_y·r·2πr dr = (2π/3)·τ_y·c³.",
    "Ratio:  (2/3)/(1/2) = 4/3.",
    "A thin tube has almost no reserve: its wall is all at nearly the same radius, so the ratio is close to 1."
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
   "q": "Torsion bars and springs are often pre-twisted past yield in the direction they will be used, a step called presetting or scragging. Why?",
   "options": [
    "It makes them stiffer",
    "It removes the need for heat treatment",
    "It hardens the surface by friction",
    "It leaves residual stress opposite to the working stress at the surface, so the bar can take more load before yielding"
   ],
   "answer": 3,
   "why": "After twisting past yield and releasing, the outer fibres are left with residual stress in the opposite direction. When the service load is applied in the same direction, it first has to cancel that residual stress, so the bar stays elastic up to a higher torque.",
   "proof": [
    "Overload: the outer layer yields; the core stays elastic.",
    "Release: the core springs back and pushes the outer layer into reverse stress.",
    "Service load in the same direction: it starts from a reversed surface stress, so peak stress at a given torque is lower.",
    "It only helps in the preset direction. Load the bar the other way and it yields sooner."
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
   "q": "A solid shaft carries a bending moment of 300 N·m and a torque of 400 N·m. Using the maximum shear stress theory with an allowable shear stress of 60 MPa, what diameter does it need?",
   "options": [
    "About 30 mm",
    "About 40 mm",
    "About 28 mm",
    "About 35 mm"
   ],
   "answer": 3,
   "why": "Combine bending and torsion into an equivalent torque, √(M² + T²) = 500 N·m. Then τ_max = 16 × 500,000/(πd³) = 60 MPa gives d = 34.9 mm, so 35 mm.",
   "proof": [
    "Bending:  σ = 32M/(πd³). Torsion:  τ = 16T/(πd³).",
    "Maximum shear:  τ_max = √((σ/2)² + τ²) = 16√(M² + T²)/(πd³).",
    "√(300² + 400²) = 500 N·m.",
    "d³ = 16 × 500,000/(π × 60) = 42,400 mm³, so d = 34.9 mm.",
    "With von Mises:  σ' = 32√(M² + 0.75T²)/(πd³). With σ_allow = 120 MPa, d = 33.9 mm, slightly smaller."
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
   "q": "A gear shaft passes its stress check with a large margin, but the gears are noisy and wear unevenly. What should you check next?",
   "options": [
    "Its torsional shear stress again",
    "The slope and deflection of the shaft at the gears and bearings",
    "Its weight",
    "The surface finish of the shaft"
   ],
   "answer": 1,
   "why": "Shafts are often sized by stiffness, not strength. If the shaft bends, the gears tilt and mesh on one edge, and bearings run misaligned. Typical limits are about 0.13 mm deflection at a spur gear and slopes under about 0.0005 rad at gears.",
   "proof": [
    "Bending deflection at the gear pushes the teeth apart and changes the mesh.",
    "Slope at the gear tilts the teeth, so load concentrates at one end of the face.",
    "Slope at a bearing must stay within its rating: about 0.001 rad for tapered rollers, more for deep-groove ball bearings, much more for self-aligning ones.",
    "Fixes: a larger diameter, closer bearings, or gears placed nearer the supports."
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
   "q": "A shaft rotates under a constant sideways load from a belt and a constant torque. What stress cycle does a point on its surface see?",
   "options": [
    "Constant bending stress and alternating shear",
    "Alternating shear only",
    "Fully reversed bending stress (tension, then compression, once per turn) plus steady torsional shear",
    "No cyclic stress, because the loads are constant"
   ],
   "answer": 2,
   "why": "The bending moment is fixed in space, but the shaft turns through it. A point on the surface moves from the tension side to the compression side every turn, so bending is fully reversed. The torque twists every point the same way all the time, so torsion is a steady mean stress.",
   "proof": [
    "Bending: σ_a = 32M/(πd³), σ_m = 0.",
    "Torsion: τ_m = 16T/(πd³), τ_a = 0 if the torque is steady.",
    "Combine in a fatigue criterion such as the ASME elliptic or modified Goodman.",
    "Even a lightly loaded shaft does millions of cycles quickly: at 3,000 rpm, 10⁷ cycles take under 3 days."
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
