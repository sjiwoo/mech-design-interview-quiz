/* Topic: Vibrations and dynamics. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "vibrations",
  "title": "Vibrations and dynamics",
  "blurb": "Natural frequency, springs, resonance and damping, isolation, how geometry and material move a mode, and random vibration.",
  "questions": [
    {
      "level": "Applied",
      "q": "A 10 kg mass sits on a spring of stiffness 40,000 N/m. What is its natural frequency?",
      "options": [
        "About 1 Hz",
        "About 10 Hz",
        "About 63 Hz",
        "About 100 Hz"
      ],
      "answer": 1,
      "why": "f = (1/2π)√(k/m) = (1/2π)√4,000 = 63.2/6.28 ≈ 10 Hz. 63 is the answer in rad/s.",
      "proof": [
        "ω_n = √(k/m) = √(40,000/10) = √4,000 = 63.2 rad/s.",
        "f_n = ω_n/(2π) = 63.2/6.283 = 10.1 Hz.",
        "Watch the units: 63 rad/s and 10 Hz are the same frequency."
      ],
      "proofTitle": "√(k/m)",
      "methods": [
        {
          "title": "From static deflection",
          "steps": [
            "Static deflection under its own weight:  δ = m·g/k = 98.1/40,000 = 0.00245 m.",
            "Since k/m = g/δ:  f_n = (1/2π)√(g/δ) = (1/2π)√(9.81/0.00245) = (1/2π)(63.2).",
            "f_n = 10.1 Hz. Shortcut:  f ≈ 0.5/√δ with δ in metres, or 15.8/√δ with δ in mm.",
            "Useful when you can measure or calculate how far something sags but don't know k and m separately."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A mass m sits on the tip of a light cantilever of length L and bending stiffness EI. How does this relate to a spring-mass system, and what is its natural frequency?",
      "options": [
        "The beam acts as a spring with k = 48EI/L³, so ω = √(48EI/(mL³))",
        "The beam acts as a spring with k = EI/L, so ω = √(EI/(mL))",
        "The beam acts as a damper, so there is no natural frequency",
        "The beam acts as a spring with k = 3EI/L³, so ω = √(3EI/(mL³))"
      ],
      "answer": 3,
      "why": "A tip force P deflects the cantilever by PL³/3EI, so its stiffness is k = P/δ = 3EI/L³. Then ω = √(k/m).",
      "proof": [
        "Any elastic structure is a spring: stiffness is force divided by deflection at the point of interest.",
        "Cantilever with tip load:  δ = PL³/(3EI)  ⇒  k = P/δ = 3EI/L³.",
        "Put that into the spring-mass result:  ω_n = √(k/m) = √(3EI/(m·L³)).",
        "This ignores the beam's own mass. Adding about 24% of the beam mass to the tip mass corrects for it.",
        "A simply supported beam with a centre mass works the same way with k = 48EI/L³."
      ],
      "reported": {
        "kind": "question",
        "note": "An intern candidate reported being asked to relate resonance in a spring-damper system to a cantilever beam.",
        "sources": [
          "reson"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "You double the mass on a spring. What happens to the natural frequency?",
      "options": [
        "It drops by about 29%",
        "It halves",
        "It doubles",
        "It does not change"
      ],
      "answer": 0,
      "why": "f ∝ 1/√m, so it becomes 1/√2 = 0.707 of the original: a 29% drop.",
      "proof": [
        "f_n = (1/2π)√(k/m).",
        "With mass 2m:  f_new/f_old = √(m/2m) = 1/√2 = 0.707.",
        "That is a 29% reduction. To halve the frequency you need four times the mass.",
        "Likewise, doubling stiffness raises frequency by only 41%."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Fundamental",
      "q": "Two identical springs of stiffness k are joined end to end (in series). What is the combined stiffness?",
      "options": [
        "2k",
        "k",
        "k/2",
        "4k"
      ],
      "answer": 2,
      "why": "In series each spring carries the full force and their deflections add, so the pair is half as stiff: k/2. Side by side (parallel) they would give 2k.",
      "proof": [
        "Series: the same force F passes through both springs.",
        "Each stretches F/k, so the total stretch is 2F/k.",
        "k_eq = F/(2F/k) = k/2. In general:  1/k_eq = 1/k₁ + 1/k₂.",
        "Parallel: both share the same deflection and their forces add:  k_eq = k₁ + k₂ = 2k.",
        "Springs combine the opposite way to electrical resistors."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A lightly damped system with damping ratio ζ = 0.05 is driven exactly at its natural frequency. Roughly how much is the static deflection amplified?",
      "options": [
        "2×",
        "5×",
        "20×",
        "10×"
      ],
      "answer": 3,
      "why": "At resonance the amplification is Q = 1/(2ζ) = 1/(2 × 0.05) = 10.",
      "proof": [
        "Dynamic amplification for a forced single-degree-of-freedom system:  X/X_static = 1/√((1 − r²)² + (2ζr)²), with r = ω/ω_n.",
        "At r = 1 the first term is zero:  X/X_static = 1/(2ζ).",
        "ζ = 0.05  ⇒  Q = 10.",
        "Bare metal structures often have ζ of 0.01 to 0.02, giving amplification of 25 to 50. That is why a resonance inside the operating range breaks parts."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "You mount a pump on rubber isolators to stop its vibration reaching the frame. For which excitation frequencies does the mount actually reduce the transmitted force?",
      "options": [
        "Only frequencies above √2 times the mount's natural frequency",
        "Only frequencies below the mount's natural frequency",
        "All frequencies",
        "Only exactly at the natural frequency"
      ],
      "answer": 0,
      "why": "Transmissibility drops below 1 only when ω/ω_n > √2. Below that the mount passes the force through or amplifies it, so isolators must be soft enough to put ω_n well under the excitation.",
      "proof": [
        "Transmissibility TR = transmitted force / applied force, as a function of r = ω/ω_n.",
        "r well below 1:  TR ≈ 1, the mount does nothing.",
        "r near 1:  resonance, TR > 1, the mount makes things worse.",
        "All curves cross TR = 1 at r = √2. Above it, TR < 1 and keeps falling.",
        "Design rule: put the mount's natural frequency at a third or less of the lowest excitation frequency. More damping lowers the resonance peak but slightly worsens isolation at high frequency."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A flat rectangular bracket's first bending mode is too low. You double its thickness, keeping length, width and material. What happens to that natural frequency?",
      "options": [
        "Unchanged",
        "About 1.4×",
        "2×",
        "8×"
      ],
      "answer": 2,
      "why": "Stiffness goes up 8× (t³) and mass goes up 2×, so f ∝ √(8/2) = 2×.",
      "proof": [
        "Bending stiffness k ∝ I = b·t³/12, so doubling t gives 8× the stiffness.",
        "Mass ∝ b·t·L, so 2× the mass.",
        "f ∝ √(k/m) = √(8/2) = √4 = 2."
      ],
      "proofTitle": "Stiffness and mass ratio",
      "methods": [
        {
          "title": "Beam frequency scaling",
          "steps": [
            "For any uniform beam:  f ∝ (1/L²)·√(EI/(ρA)).",
            "For a rectangle, I/A = t²/12, so √(I/A) ∝ t.",
            "So f ∝ t/L²: linear in thickness, and independent of width.",
            "Doubling t doubles f. Making the bracket wider does nothing for this mode."
          ]
        }
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "You shorten a cantilevered bracket to half its length, keeping the same cross-section. What happens to its first natural frequency?",
      "options": [
        "4×",
        "2×",
        "1.4×",
        "8×"
      ],
      "answer": 0,
      "why": "Beam bending frequency goes as 1/L², so halving the length gives 4×.",
      "proof": [
        "Uniform beam:  f ∝ (1/L²)·√(EI/(ρA)).",
        "Halving L:  1/(L/2)² = 4/L².",
        "Check with a tip-mass view: stiffness 3EI/L³ goes up 8× and the beam's mass halves, so √(8/0.5) = √16 = 4.",
        "Shortening the unsupported span is usually the cheapest way to raise a mode."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Design judgment",
      "q": "A steel bracket has a resonance problem. Someone suggests remaking it in aluminium with identical geometry to shift the natural frequency. What happens?",
      "options": [
        "The frequency drops to about a third",
        "The frequency drops by about 40%",
        "The frequency rises by about 70%",
        "The frequency barely changes"
      ],
      "answer": 3,
      "why": "For the same geometry f ∝ √(E/ρ), and E/ρ is nearly the same for steel and aluminium. The frequency moves by well under 1%.",
      "proof": [
        "Same shape, so f ∝ √(E/ρ), the speed of sound in the material.",
        "Steel:  √(200/7.85) = 5.05.   Aluminium:  √(69/2.70) = 5.06.",
        "The two are within 1%.",
        "To move the mode, change geometry: thicker, shorter, add a rib or a support. The aluminium part is lighter, so you could afford to make it thicker, and that would raise the frequency."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A random vibration test spec is flat at 0.04 g²/Hz from 20 Hz to 2,000 Hz. What is the overall level in g RMS?",
      "options": [
        "About 0.04 g",
        "About 8.9 g",
        "About 2.8 g",
        "About 79 g"
      ],
      "answer": 1,
      "why": "G_rms = √(area under the PSD) = √(0.04 × 1,980) = √79.2 ≈ 8.9 g.",
      "proof": [
        "A power spectral density (PSD) gives mean-square acceleration per unit frequency, in g²/Hz.",
        "The mean-square acceleration is the area under the curve:  0.04 × (2,000 − 20) = 79.2 g².",
        "G_rms = √79.2 = 8.9 g.",
        "Peaks reach about 3× the RMS value (3σ), so around 27 g here.",
        "For a part with a resonance at f_n, Miles' equation estimates the response:  G_rms ≈ √((π/2)·f_n·Q·PSD)."
      ],
      "reported": {
        "kind": "topic",
        "note": "A candidate reported questions on vibration testing. This exact question was not reported.",
        "sources": [
          "vibtest"
        ]
      }
    },
    {
      "level": "Applied",
      "q": "A solid cylinder and a thin-walled hollow cylinder of the same mass and radius roll without slipping down the same ramp from rest. Which reaches the bottom first?",
      "options": [
        "The hollow cylinder",
        "The solid cylinder",
        "They arrive together",
        "It depends on their mass"
      ],
      "answer": 1,
      "why": "The hollow cylinder has more rotational inertia (mr² against ½mr²), so more of its energy goes into spinning and less into moving forward. The solid one is faster. Mass and radius cancel out.",
      "proof": [
        "Energy:  m·g·h = ½·m·v² + ½·I·ω², with rolling ω = v/r.",
        "Write I = k·m·r². Then m·g·h = ½·m·v²(1 + k), so v² = 2·g·h/(1 + k).",
        "Solid cylinder, k = ½:  v² = (4/3)·g·h.   Hollow, k = 1:  v² = g·h.",
        "The solid cylinder is faster by √(4/3), about 15%, at every point, so it arrives first.",
        "m and r cancel: any solid cylinder beats any hollow one. A sliding frictionless block (k = 0) beats both."
      ],
      "proofTitle": "Energy",
      "methods": [
        {
          "title": "Forces and torque",
          "steps": [
            "Along the ramp:  m·g·sin θ − f = m·a, where f is friction at the contact.",
            "About the centre:  f·r = I·α = k·m·r²·(a/r)  ⇒  f = k·m·a.",
            "Combine:  a = g·sin θ/(1 + k).",
            "Solid:  a = (2/3)·g·sin θ.   Hollow:  a = (1/2)·g·sin θ.",
            "Higher acceleration all the way down, so the solid cylinder wins."
          ]
        }
      ],
      "reported": {
        "kind": "question",
        "note": "A candidate reported being asked to compare a hollow and a solid cylinder rolling down a ramp.",
        "sources": [
          "roll"
        ]
      }
    }
  ]
});
