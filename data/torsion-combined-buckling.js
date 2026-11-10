/* Topic: Torsion, pressure vessels, combined loading and buckling. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "torsion-combined-buckling",
  "title": "Torsion, combined loading and buckling",
  "blurb": "Shaft torsion and twist, pressure vessels, Mohr's circle, bending plus torsion, and column buckling.",
  "questions": [
    {
      "level": "Applied",
      "q": "A solid 20 mm diameter shaft carries a torque of 100 N·m. What is the maximum shear stress?",
      "options": [
        "About 16 MPa",
        "About 32 MPa",
        "About 127 MPa",
        "About 64 MPa"
      ],
      "answer": 3,
      "why": "τ = 16T/(πd³) = 16 × 100,000 / (π × 8,000) ≈ 63.7 MPa.",
      "proof": [
        "Work in N and mm:  T = 100 N·m = 100,000 N·mm.",
        "For a solid round shaft:  τ_max = 16T/(π·d³).",
        "τ = 1,600,000 / (π × 8,000) = 1,600,000 / 25,133 = 63.7 MPa, at the outer surface."
      ],
      "proofTitle": "16T/πd³",
      "methods": [
        {
          "title": "From τ = T·r/J",
          "steps": [
            "Polar moment:  J = π·d⁴/32 = π × 160,000 / 32 = 15,708 mm⁴.",
            "τ = T·r/J = 100,000 × 10 / 15,708 = 63.7 MPa.",
            "Shear stress is zero at the centre and rises linearly to this value at r = d/2, which is why hollow shafts are efficient.",
            "127 MPa would be the bending stress, 32M/(πd³), for a 100 N·m bending moment."
          ]
        }
      ]
    },
    {
      "level": "Fundamental",
      "q": "A solid shaft twists too much under torque. You double its diameter. What happens to the angle of twist?",
      "options": [
        "It drops to 1/16",
        "It drops to 1/4",
        "It drops to 1/8",
        "It halves"
      ],
      "answer": 0,
      "why": "θ = TL/(GJ) and J = πd⁴/32 ∝ d⁴, so twist falls to 1/16. Shear stress (∝ 1/d³) falls to 1/8.",
      "proof": [
        "Angle of twist:  θ = T·L/(G·J).",
        "J = π·d⁴/32, so doubling d multiplies J by 16.",
        "θ_new = θ/16.",
        "Stress τ = 16T/(πd³) falls to 1/8. It is the same pattern as bending: stiffness goes with d⁴, strength with d³."
      ]
    },
    {
      "level": "Applied",
      "q": "A thin-walled cylindrical tank has radius 100 mm, wall thickness 5 mm and internal pressure 2 MPa. What are the hoop and axial stresses?",
      "options": [
        "Hoop 20 MPa, axial 40 MPa",
        "Hoop 40 MPa, axial 20 MPa",
        "Hoop 40 MPa, axial 40 MPa",
        "Hoop 80 MPa, axial 40 MPa"
      ],
      "answer": 1,
      "why": "Hoop = pr/t = 2 × 100/5 = 40 MPa. Axial = pr/(2t) = 20 MPa. Hoop is always twice axial.",
      "proof": [
        "Hoop stress:  σ_h = p·r/t = 2 × 100 / 5 = 40 MPa.",
        "Axial stress:  σ_a = p·r/(2t) = 20 MPa.",
        "Thin-wall theory is valid when r/t is above about 10. Here it is 20."
      ],
      "proofTitle": "Formulas",
      "methods": [
        {
          "title": "Derive both from free-body cuts",
          "steps": [
            "Hoop: slice the cylinder lengthwise and keep half, of length L. Pressure pushes on the projected area 2r·L with force p·2r·L.",
            "Two wall sections, each of area t·L, hold it:  2·σ_h·t·L = p·2r·L  ⇒  σ_h = p·r/t.",
            "Axial: cut across the cylinder. Pressure on the end cap gives p·π·r². The wall ring of area 2π·r·t resists it.",
            "σ_a·2π·r·t = p·π·r²  ⇒  σ_a = p·r/(2t).",
            "This is why a cylinder splits along its length, and why a sausage does the same when cooked."
          ]
        }
      ]
    },
    {
      "level": "Fundamental",
      "q": "For the same radius, wall thickness and pressure, how does the wall stress in a thin-walled sphere compare with the hoop stress in a cylinder?",
      "options": [
        "Twice as high",
        "The same",
        "A quarter as high",
        "Half as high"
      ],
      "answer": 3,
      "why": "Sphere: σ = pr/(2t) in every direction. Cylinder hoop: pr/t. The sphere has half the stress, which makes it the most efficient pressure vessel shape.",
      "proof": [
        "Cut a sphere in half. Pressure force on the projected circle:  p·π·r².",
        "Resisting wall area:  2π·r·t.",
        "σ = p·π·r²/(2π·r·t) = p·r/(2t), the same in all directions by symmetry.",
        "That equals the cylinder's axial stress and is half its hoop stress.",
        "Spheres need half the wall thickness but are harder to make and package, so cylinders with domed ends are the usual compromise."
      ]
    },
    {
      "level": "Fundamental",
      "q": "A point is in pure shear with shear stress τ. What are the principal stresses and where do they act?",
      "options": [
        "+τ and 0, on the shear planes",
        "+τ and −τ, on planes at 45° to the shear planes",
        "+2τ and −2τ, on planes at 90°",
        "0 and 0, there are no normal stresses"
      ],
      "answer": 1,
      "why": "Mohr's circle for pure shear is centred at the origin with radius τ. The principal stresses are ±τ, at 90° on the circle, which is 45° in the material.",
      "proof": [
        "Mohr's circle: centre at (σ_x + σ_y)/2 = 0, radius = √(((σ_x − σ_y)/2)² + τ²) = τ.",
        "It crosses the normal-stress axis at +τ and −τ. Those are the principal stresses.",
        "Those points are 90° around the circle from the pure-shear points. Angles on the circle are doubled, so the planes are 45° away in the material.",
        "So pure shear is the same as equal tension and compression at 45°. That explains why brittle shafts break on a 45° helix in torsion."
      ]
    },
    {
      "level": "Applied",
      "q": "A 20 mm solid shaft carries a bending moment of 100 N·m and a torque of 100 N·m at the same section. What is the von Mises stress at the surface?",
      "options": [
        "About 168 MPa",
        "About 142 MPa",
        "About 127 MPa",
        "About 191 MPa"
      ],
      "answer": 0,
      "why": "σ = 32M/(πd³) = 127.3 MPa, τ = 16T/(πd³) = 63.7 MPa. σ_vm = √(σ² + 3τ²) = √(16,211 + 12,159) ≈ 168 MPa.",
      "proof": [
        "Bending:  σ = 32M/(π·d³) = 3,200,000 / 25,133 = 127.3 MPa.",
        "Torsion:  τ = 16T/(π·d³) = 1,600,000 / 25,133 = 63.7 MPa.",
        "Both peak at the outer surface, so combine them there:  σ_vm = √(σ² + 3τ²).",
        "σ_vm = √(127.3² + 3 × 63.7²) = √(16,211 + 12,159) = √28,370 = 168.4 MPa."
      ],
      "proofTitle": "Stresses, then von Mises",
      "methods": [
        {
          "title": "Equivalent bending moment",
          "steps": [
            "Substitute the shaft formulas into von Mises:  σ_vm = (32/(π·d³))·√(M² + 0.75·T²).",
            "Equivalent moment:  M_e = √(100² + 0.75 × 100²) = √17,500 = 132.3 N·m.",
            "σ_vm = 32 × 132,288 / (π × 8,000) = 168.4 MPa.",
            "This form lets you size a shaft directly:  d³ = 32·M_e/(π·σ_allow)."
          ]
        }
      ]
    },
    {
      "level": "Fundamental",
      "q": "A column's ends are changed from pinned-pinned to fixed-fixed. What happens to its Euler buckling load?",
      "options": [
        "Unchanged",
        "2× higher",
        "4× higher",
        "16× higher"
      ],
      "answer": 2,
      "why": "P_cr = π²EI/(KL)². K goes from 1.0 to 0.5, so the load goes up by (1/0.5)² = 4.",
      "proof": [
        "Euler:  P_cr = π²·E·I/(K·L)², where K·L is the effective length (distance between inflection points of the buckled shape).",
        "Pinned-pinned: K = 1.   Fixed-fixed: K = 0.5.   Fixed-pinned: K ≈ 0.7.   Fixed-free: K = 2.",
        "Ratio:  (1/0.5)² = 4.",
        "A fixed-free column (a flagpole) has only 1/4 the pinned-pinned load.",
        "Real ends are never perfectly fixed, so designers use slightly larger K values, such as 0.65 for fixed-fixed."
      ]
    },
    {
      "level": "Applied",
      "q": "A 10 mm diameter steel rod (E = 200 GPa), 1 m long and pinned at both ends, is compressed. At about what load does it buckle?",
      "options": [
        "About 97 N",
        "About 9.7 kN",
        "About 970 N",
        "About 19.6 kN"
      ],
      "answer": 2,
      "why": "I = πd⁴/64 = 491 mm⁴. P_cr = π² × 200,000 × 491 / 1,000² ≈ 970 N. That is about 5% of the load needed to yield it.",
      "proof": [
        "I = π × 10⁴/64 = 490.9 mm⁴.",
        "P_cr = π²·E·I/L² = 9.870 × 200,000 × 490.9 / 1,000,000.",
        "P_cr = 969 N.",
        "Compare with yielding at 250 MPa:  250 × 78.5 mm² = 19,600 N. The rod buckles at about 5% of that.",
        "Buckling is a stiffness failure. A stronger steel would not help at all, because E is the same."
      ]
    },
    {
      "level": "Design judgment",
      "q": "For which columns is the Euler buckling formula not valid on its own?",
      "options": [
        "Short, stocky columns, where the Euler stress would exceed yield",
        "Long, slender columns",
        "Columns made of steel",
        "Columns with pinned ends"
      ],
      "answer": 0,
      "why": "Euler assumes elastic behaviour. For a stocky column the predicted buckling stress is above yield, so the column yields or buckles inelastically first. Use the Johnson formula there.",
      "proof": [
        "Euler stress:  σ_cr = π²·E/(K·L/r)², where L/r is the slenderness ratio and r = √(I/A).",
        "As the column gets shorter, σ_cr rises without limit, which cannot be right once it passes the yield strength.",
        "Transition slenderness:  (KL/r)_c = √(2π²E/S_y). For steel with S_y = 250 MPa it is about 126.",
        "Above it, use Euler. Below it, use the Johnson parabola, which blends into yield at zero length.",
        "Real columns also have eccentricity and initial bow, so use a healthy safety factor."
      ]
    },
    {
      "level": "Applied",
      "q": "A point has σ_x = 80 MPa, σ_y = 0 and τ_xy = 30 MPa. What are the principal stresses?",
      "options": [
        "80 and 0 MPa",
        "90 and −10 MPa",
        "110 and −30 MPa",
        "50 and 30 MPa"
      ],
      "answer": 1,
      "why": "Centre = 40, radius = √(40² + 30²) = 50. Principal stresses are 40 ± 50 = 90 and −10 MPa.",
      "proof": [
        "σ₁,₂ = (σ_x + σ_y)/2 ± √(((σ_x − σ_y)/2)² + τ_xy²).",
        "Average:  (80 + 0)/2 = 40.   Root term:  √(40² + 30²) = √2,500 = 50.",
        "σ₁ = 90 MPa,  σ₂ = −10 MPa.  Maximum in-plane shear = 50 MPa."
      ],
      "proofTitle": "Formula",
      "methods": [
        {
          "title": "Draw Mohr's circle",
          "steps": [
            "Plot the x-face at (80, 30) and the y-face at (0, −30) on axes of normal stress against shear stress.",
            "The centre is midway between them:  (40, 0).",
            "The radius is the distance from the centre to either point: a 3-4-5 triangle with legs 40 and 30, so 50.",
            "The circle crosses the normal axis at 40 + 50 = 90 and 40 − 50 = −10.",
            "Angle to the principal plane:  tan 2θ = 30/40, so θ = 18.4°. Check: σ₁ + σ₂ = 80 = σ_x + σ_y."
          ]
        }
      ]
    }
  ]
});
