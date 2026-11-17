/* Topic: Beam shear and advanced bending. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "advanced-beams",
 "title": "Beam shear and advanced bending",
 "blurb": "Web shear, shear flow and fastener spacing, shear centre, unsymmetric and composite beams, thermal bowing, curved beams, plastic moment, beam-columns, eccentric loads, Macaulay, moment-area and indeterminate beams.",
 "questions": [
  {
   "level": "Applied",
   "q": "An I-beam has a 6 mm × 300 mm web and carries a vertical shear force of 50 kN. Roughly what is the shear stress in the web?",
   "options": [
    "About 28 MPa",
    "About 167 MPa",
    "About 8 MPa",
    "About 56 MPa"
   ],
   "answer": 0,
   "why": "In an I-beam the web carries nearly all the vertical shear, and the stress across it is close to uniform. A good estimate is V/(web area) = 50,000/(6 × 300) = 28 MPa.",
   "proof": [
    "Web area:  6 × 300 = 1,800 mm².",
    "τ ≈ V/A_web = 50,000/1,800 = 27.8 MPa.",
    "The exact VQ/(It) peak at the neutral axis is typically 10 to 20% higher.",
    "The flanges carry the bending stress; the web carries the shear. That split is what makes I-beams efficient."
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
   "q": "Two planks are screwed together to act as one deep beam. It is simply supported and carries a uniform load. Where should the screws be closest together?",
   "options": [
    "At midspan, where the bending moment is largest",
    "Evenly spaced, the shear between layers is constant",
    "Near the supports, where the shear force is largest",
    "Only at the very ends"
   ],
   "answer": 2,
   "why": "The screws carry the horizontal shear between the planks, the shear flow q = VQ/I. That follows the shear force V, not the bending moment. Under a uniform load V is largest at the supports and zero at midspan.",
   "proof": [
    "Shear flow along the joint:  q = VQ/I, in N/mm.",
    "Screw spacing:  s = (screw capacity)/q.",
    "Uniform load:  V = wL/2 at the supports, falling linearly to 0 at midspan.",
    "So screws go closest near the ends and can spread out towards the middle. Example: V = 1 kN, Q = 20,000 mm³, I = 533,000 mm⁴ gives q = 37.5 N/mm, so 750 N screws at 20 mm."
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
   "q": "The same two planks are simply stacked with no screws or glue. How does the stack's bending stiffness compare with the joined beam?",
   "options": [
    "The same",
    "4 times lower",
    "2 times lower",
    "8 times lower"
   ],
   "answer": 1,
   "why": "Unjoined, each plank bends about its own neutral axis and they slide over each other: 2 × b(h)³/12. Joined, they act as one deep beam: b(2h)³/12, four times as much. The fasteners exist to stop that sliding.",
   "proof": [
    "Separate:  I = 2 × 100 × 20³/12 = 133,000 mm⁴.",
    "Joined:  I = 100 × 40³/12 = 533,000 mm⁴.",
    "Ratio:  4. Peak bending stress is also 2 times higher when unjoined.",
    "Look at the ends of a bent stack of paper: the sheets slide. That slip is the shear the glue or screws would carry."
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
   "q": "How does the horizontal shear flow vary along the top flange of an I-beam, from the flange tip to the web?",
   "options": [
    "Constant across the flange",
    "Highest at the tip, falling to zero at the web",
    "Zero at the free tip, rising linearly to a maximum where the flange meets the web",
    "Parabolic, with a peak at the flange midpoint"
   ],
   "answer": 2,
   "why": "Shear flow q = VQ/I, and Q counts the flange area between the free edge and the point you are looking at. At the tip there is none, so q = 0. It grows linearly toward the web, where the flows from both sides join and turn down into it.",
   "proof": [
    "At distance s from the tip:  Q = t·s·(h/2), which is linear in s.",
    "So q = V·t·s·h/(2I), linear.",
    "At the web the two flange flows add and feed the web, where q is parabolic with its peak at the neutral axis.",
    "The flow is like water in pipes: it has to be continuous at the junctions."
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
   "q": "A channel (C-section) is loaded downward through the middle of its web. What happens?",
   "options": [
    "It bends cleanly downward",
    "It bends and also twists, because the load does not pass through the shear centre, which lies outside the web on the open side away from the flanges",
    "It only twists",
    "It bends sideways only"
   ],
   "answer": 1,
   "why": "Shear flows in the two flanges in opposite directions and forms a couple that twists the section. To bend without twisting, the load has to pass through the shear centre, which for a channel lies outside the web, on the side away from the flanges.",
   "proof": [
    "Shear flow in the top flange runs one way, in the bottom flange the other: a twisting couple.",
    "The shear centre is where an applied load makes that couple cancel.",
    "For a channel it sits about e ≈ 3b²/(h + 6b) outside the web for equal thin flanges of width b and web height h, both with the same thickness.",
    "Fix: load through the shear centre, use back-to-back channels, or use a closed or symmetric section."
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
   "q": "A cross-section has one axis of symmetry. Where is its shear centre, and what does its position depend on?",
   "options": [
    "At the centroid, and it depends on the load",
    "On the axis of symmetry, and it depends only on the shape of the section",
    "Always outside the section",
    "At the heaviest point, and it depends on the material"
   ],
   "answer": 1,
   "why": "The shear centre is the point a transverse load must pass through for the beam to bend without twisting. It always lies on an axis of symmetry, and it is a property of the section's geometry alone, like the centroid.",
   "proof": [
    "Doubly symmetric sections (I-beam, rectangle, tube): shear centre = centroid.",
    "Singly symmetric (channel, T): on the axis of symmetry, not necessarily at the centroid.",
    "Angle or T made of thin plates: where the plates' centrelines meet.",
    "It does not move with the size of the load or the material."
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
   "q": "A rectangular bar is 20 mm wide and 60 mm tall. How many times stiffer is it in bending about its strong axis (load vertical) than about its weak axis (load sideways)?",
   "options": [
    "3 times",
    "6 times",
    "9 times",
    "27 times"
   ],
   "answer": 2,
   "why": "I = bh³/12 about each axis. Strong: 20 × 60³/12. Weak: 60 × 20³/12. The ratio is (60/20)² = 9. A tall, thin section is much weaker sideways, so even a slightly tilted load can raise its peak stress a lot.",
   "proof": [
    "Strong axis:  I = 20 × 60³/12 = 360,000 mm⁴.",
    "Weak axis:  I = 60 × 20³/12 = 40,000 mm⁴.",
    "Ratio = (h/b)² = 9.",
    "A load tilted just 10° sideways raises the peak corner stress by about 50% for this section. Resolve the load into components along the principal axes and add the stresses."
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
   "q": "An L-shaped angle section is loaded straight down. It deflects both down and sideways. Why?",
   "options": [
    "The material is anisotropic",
    "Its principal axes are inclined, because its product of inertia about the vertical and horizontal axes is not zero",
    "The load is too large",
    "Angle sections always twist without bending"
   ],
   "answer": 1,
   "why": "For unsymmetric sections, the vertical and horizontal axes are not principal axes. The product of inertia Ixy is not zero, so a moment about one axis bends the section about both. It deflects toward its weak principal axis.",
   "proof": [
    "Product of inertia:  Ixy = ∫xy dA, zero only if an axis is a line of symmetry.",
    "Principal axes are found from tan 2θ = −2Ixy/(Ix − Iy). For an equal-leg angle they lie at 45°.",
    "Load along a principal axis gives deflection along that axis only.",
    "An angle also has its shear centre at the corner where the legs meet, so off-corner loads twist it too."
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
   "q": "An aluminium beam (E = 70 GPa) has a 20 mm wide steel strip (E = 200 GPa) bonded to its underside. In the transformed-section method, how do you treat the steel strip?",
   "options": [
    "Delete it",
    "As an aluminium strip of the same width",
    "As an aluminium strip about 7 mm wide",
    "As an aluminium strip about 57 mm wide"
   ],
   "answer": 3,
   "why": "Convert everything to one material. Steel is n = 200/70 = 2.86 times stiffer, so the strip acts like an aluminium strip 2.86 times as wide, 57 mm, at the same height. Find I for that shape, then multiply the stress in the steel by n.",
   "proof": [
    "Modular ratio:  n = E_steel/E_al = 2.86.",
    "Transformed width:  20 × 2.86 = 57 mm. Keep the thickness and height.",
    "Bending stress in aluminium:  σ = My/I_t.  In steel:  σ = n·My/I_t.",
    "The same method handles carbon-fibre caps on metal beams, bimetal strips and reinforced concrete."
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
   "q": "An aluminium beam 10 mm deep and 500 mm long, simply supported, is 10 °C hotter on top than on the bottom (α = 23 × 10⁻⁶ /°C). How much does its middle bow?",
   "options": [
    "About 0.7 mm",
    "About 0.07 mm",
    "About 7 mm",
    "Zero, a temperature change causes no bending"
   ],
   "answer": 0,
   "why": "A linear temperature difference across the depth curves the beam with κ = αΔT/h = 2.3 × 10⁻⁵ per mm. A beam with constant curvature sags by κL²/8 = 0.72 mm at the middle. Being free to bow, it carries no stress.",
   "proof": [
    "Curvature:  κ = αΔT/h = 23e-6 × 10/10 = 2.3 × 10⁻⁵ mm⁻¹.",
    "Midspan deflection for uniform curvature:  δ = κL²/8 = 2.3e-5 × 250,000/8 = 0.72 mm.",
    "It bows toward the cold side: the hot top grows longer.",
    "This matters for optical benches, precision stages and sensor mounts in the sun or near motors."
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
   "q": "The same beam (10 mm deep aluminium, E = 70 GPa, 10 °C hotter on top) is instead clamped at both ends so it cannot rotate. What happens?",
   "options": [
    "It bows twice as much",
    "It stays straight and develops a bending stress of about 8 MPa at the top and bottom faces",
    "It buckles",
    "Nothing, the clamps absorb it"
   ],
   "answer": 1,
   "why": "Clamping prevents the curvature, so the beam stays straight but must be bent back by an end moment. The stress is E·α·ΔT/2 = 70,000 × 23e-6 × 10/2 = 8 MPa, compressive on the hot face and tensile on the cold one.",
   "proof": [
    "Free curvature:  κ = αΔT/h. Clamped:  κ = 0.",
    "Moment needed:  M = EIκ.",
    "Stress at the faces:  σ = Mc/I = E·κ·h/2 = EαΔT/2.",
    "= 70,000 × 23e-6 × 10/2 = 8 MPa. If the clamps also stop axial growth, the average temperature rise adds a uniform E·α·ΔT_avg on top of this."
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
   "q": "Compared with the straight-beam formula, how does bending stress behave in a sharply curved beam, such as a crane hook?",
   "options": [
    "It is the same",
    "It is lower everywhere",
    "It is higher on the inner (concave) edge, and the neutral axis shifts toward the centre of curvature",
    "It is higher on the outer edge"
   ],
   "answer": 2,
   "why": "Fibres on the inside of a curved beam are shorter, so the same rotation of the section strains them more. Stress becomes hyperbolic rather than linear, peaking on the inside, and the neutral axis moves inward from the centroid.",
   "proof": [
    "Strain at radius r:  ε ∝ (r − r_n)/r, which is larger where r is small.",
    "The neutral axis sits at r_n = A/∫(dA/r), inside the centroid.",
    "For a rectangular section with centroid radius 2 times its depth, the inner stress is about 20% above the straight-beam value.",
    "Rule of thumb: use the curved-beam formula when the radius of curvature is less than about 5 times the depth; above that the straight-beam formula is close enough. Hooks are deep and pear-shaped, with extra material on the inside, for this reason."
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
   "q": "Which cross-section has the largest reserve of bending strength beyond first yield (the largest shape factor, M_plastic/M_yield)?",
   "options": [
    "An I-beam",
    "A thin-walled tube",
    "A rectangle",
    "A solid circle"
   ],
   "answer": 3,
   "why": "The shape factor measures how much material sits near the neutral axis, still elastic at first yield. A solid circle has the most: 1.70. A rectangle has 1.5, a thin tube about 1.27 and an I-beam about 1.12 to 1.15.",
   "proof": [
    "Rectangle:  M_p = σ_y·bh²/4,  M_y = σ_y·bh²/6.  Ratio 1.5.",
    "Solid circle:  16/(3π) = 1.70.",
    "Thin tube:  4/π ≈ 1.27.",
    "I-beam:  about 1.12 to 1.15. It is efficient elastically precisely because it has little material near the centre, so it has little reserve."
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
   "q": "A beam is bent so far that its outer fibres yield. How does the strain vary across its depth now?",
   "options": [
    "It still varies linearly from the neutral axis, because sections stay plane; only the stress distribution flattens",
    "It becomes uniform",
    "It is zero in the yielded zone",
    "It varies with the square of the distance"
   ],
   "answer": 0,
   "why": "Plane sections remain plane: strain depends only on the geometry of bending, so it stays linear whether or not the material yields. The stress follows the stress–strain curve, so in an elastic-perfectly-plastic material it caps at yield in the outer zone.",
   "proof": [
    "Strain:  ε = −y/ρ, linear in y at any load.",
    "Elastic core: σ = Eε, linear.",
    "Yielded zone: σ = σ_y, constant.",
    "The neutral axis is where the net axial force is zero. For a symmetric section it stays at the centroid; for an unsymmetric one it moves once yielding starts."
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
   "q": "A rectangular steel beam first yields at its surface at 100 N·m. Assuming elastic-perfectly plastic steel, what moment makes the whole section yield (a plastic hinge)?",
   "options": [
    "100 N·m",
    "150 N·m",
    "200 N·m",
    "170 N·m"
   ],
   "answer": 1,
   "why": "For a rectangle, the plastic moment is 1.5 times the first-yield moment. At 150 N·m every fibre has reached yield, half in tension and half in compression, and the section rotates freely like a hinge.",
   "proof": [
    "First yield:  M_y = σ_y·bh²/6.",
    "Fully plastic:  M_p = σ_y·(bh/2)·(h/2) = σ_y·bh²/4.",
    "Ratio 1.5, so M_p = 150 N·m.",
    "An indeterminate beam does not collapse at its first plastic hinge: it needs enough hinges to form a mechanism, two for a propped cantilever, three for a fixed-fixed beam."
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
   "q": "A slender column also carries a sideways load that bends it. The axial load is half its Euler buckling load. Roughly how much does the axial load amplify the bending deflection?",
   "options": [
    "About 2 times",
    "About 1.5 times",
    "No change, axial and bending are independent",
    "About 4 times"
   ],
   "answer": 0,
   "why": "Axial compression acts on the bent shape and adds moment, which bends it further. The amplification is about 1/(1 − P/P_cr) = 1/(1 − 0.5) = 2.",
   "proof": [
    "Beam-column amplification:  δ ≈ δ₀/(1 − P/P_cr).",
    "P/P_cr = 0.5, so δ = 2δ₀.",
    "At P/P_cr = 0.9 it is 10 times. Near buckling, a small side load gives huge deflection.",
    "Tension does the opposite and stiffens the beam, like a guitar string."
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
   "q": "A 20 × 20 mm bar is pulled by 10 kN, but the load line is 10 mm off the centroid. What are the largest and smallest normal stresses across the section?",
   "options": [
    "25 MPa everywhere",
    "100 MPa tension and 50 MPa compression",
    "75 MPa tension and −75 MPa compression",
    "50 MPa tension and 0"
   ],
   "answer": 1,
   "why": "The offset adds a bending moment P·e = 100 N·m. Axial stress P/A = 25 MPa plus or minus bending stress Mc/I = 75 MPa gives 100 MPa tension on one side and 50 MPa compression on the other.",
   "proof": [
    "Axial:  P/A = 10,000/400 = 25 MPa.",
    "Moment:  M = P·e = 10,000 × 10 = 100,000 N·mm.",
    "Bending:  Mc/I = 100,000 × 10/(20 × 20³/12) = 75 MPa.",
    "Combined:  25 + 75 = 100 MPa, and 25 − 75 = −50 MPa. A 10 mm offset quadrupled the peak stress; keeping load lines on the centroid matters."
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
   "q": "A cantilever of constant width carries a load at its tip. You want the peak bending stress to be the same at every section, to save weight. How should its depth vary with distance x from the tip?",
   "options": [
    "Linearly with x",
    "With x squared",
    "With √x",
    "Constant"
   ],
   "answer": 2,
   "why": "The moment grows linearly, M = Px. With constant width, stress at the surface is 6Px/(bh²). For it to stay constant, h² must grow with x, so h ∝ √x: a parabolic profile.",
   "proof": [
    "σ = Mc/I = 6Px/(bh²) for a rectangle.",
    "Constant σ:  h(x) = √(6Px/(bσ)), proportional to √x.",
    "At the tip h goes to zero, so in practice a minimum depth is kept for shear.",
    "If instead the depth is constant and the width varies, b ∝ x: a triangle, the shape of a leaf spring."
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
   "q": "Why are Macaulay brackets, ⟨x − a⟩ⁿ, useful for beam deflection?",
   "options": [
    "They are only for statically determinate beams",
    "They make the bending moment constant",
    "They replace E and I",
    "One equation covers the whole beam: each term switches on only past the point where its load is applied, so you integrate once instead of segment by segment"
   ],
   "answer": 3,
   "why": "A Macaulay term ⟨x − a⟩ⁿ is zero for x < a and (x − a)ⁿ beyond it. So a beam with several loads gets a single moment equation for its whole length. Integrate twice, apply the boundary conditions once, and you have the deflection everywhere.",
   "proof": [
    "Definition:  ⟨x − a⟩ⁿ = 0 for x < a, and (x − a)ⁿ for x ≥ a.",
    "Integration:  ∫⟨x − a⟩ⁿ dx = ⟨x − a⟩ⁿ⁺¹/(n + 1).",
    "Point load P at a:  M(x) includes −P⟨x − a⟩¹.",
    "Without it you need separate equations for every segment and continuity conditions at every load."
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
   "q": "With the moment-area method, the change in slope between two points on a beam equals what?",
   "options": [
    "The area of the M/EI diagram between those points",
    "The bending moment at the second point",
    "The deflection at the midpoint",
    "The area of the shear force diagram"
   ],
   "answer": 0,
   "why": "Integrate curvature, M/EI, between two points to get the change in slope. For a cantilever with a tip load, the M/EI diagram is a triangle of height PL/EI and base L, so the tip slope is PL²/(2EI).",
   "proof": [
    "Curvature:  d²v/dx² = M/(EI).",
    "Integrating once:  θ_B − θ_A = ∫ M/(EI) dx, the area under the M/EI diagram.",
    "Second theorem: the tangential deviation of B from the tangent at A is the first moment of that area about B.",
    "Cantilever, tip load:  area = ½ × L × PL/EI = PL²/(2EI). Deviation = area × 2L/3 = PL³/(3EI), the tip deflection."
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
   "q": "You find a beam's deflection by integrating EI·v″ = M(x) twice. Which boundary conditions fit a cantilever fixed at x = 0?",
   "options": [
    "v = 0 at both ends",
    "v = 0 and v′ = 0 at the fixed end",
    "v′ = 0 at both ends",
    "M = 0 at the fixed end"
   ],
   "answer": 1,
   "why": "A fixed end stops both deflection and rotation, so v(0) = 0 and v′(0) = 0. These two conditions set the two constants of integration. A simply supported beam uses v = 0 at each support instead.",
   "proof": [
    "Fixed end:  v = 0 and v′ = 0.",
    "Pinned or roller support:  v = 0 only (and M = 0 if it is an end).",
    "Free end:  M = 0 and V = 0, which are already in the moment equation.",
    "Two integrations give two constants, so two conditions are needed. Each extra support makes the beam indeterminate and adds an unknown reaction and one more condition."
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
   "q": "A propped cantilever (fixed at one end, simply supported at the other) carries a uniform load w over its length L. What does the prop carry?",
   "options": [
    "wL/2",
    "5wL/8",
    "wL/4",
    "3wL/8"
   ],
   "answer": 3,
   "why": "This is statically indeterminate. Remove the prop: the tip of a uniformly loaded cantilever drops wL⁴/(8EI). The prop must push it back up, and a tip force R gives RL³/(3EI). Setting them equal gives R = 3wL/8, and the fixed end takes the other 5wL/8.",
   "proof": [
    "Without the prop:  δ = wL⁴/(8EI).",
    "Prop force R alone:  δ = RL³/(3EI).",
    "Compatibility, zero tip deflection:  RL³/3 = wL⁴/8, so R = 3wL/8.",
    "Fixed end:  5wL/8 and a moment wL²/8. The largest positive moment, 9wL²/128, is at 3L/8 from the prop."
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
