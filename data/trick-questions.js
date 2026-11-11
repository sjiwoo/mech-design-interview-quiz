/* Topic: Trick questions. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "trick-questions",
  "title": "Trick questions",
  "blurb": "Physics and engineering questions where the first instinct is wrong. Slow down and reason from first principles.",
  "questions": [
    {
      "level": "Trick question",
      "q": "You are in a boat on a small pond with a heavy rock on board. You throw the rock into the water and it sinks. What happens to the pond's water level?",
      "options": [
        "It falls",
        "It rises",
        "It stays the same",
        "It rises, then falls back"
      ],
      "answer": 0,
      "why": "In the boat, the rock displaces its weight in water. On the bottom, it only displaces its volume. Rock is denser than water, so its weight in water is a bigger volume. The level falls.",
      "proof": [
        "Floating: the boat displaces water equal to the total weight on board. The rock's share is V = m/ρ_water.",
        "Sunk: the rock displaces only its own volume, V = m/ρ_rock.",
        "ρ_rock is about 2.5 to 3 times ρ_water, so the sunk rock displaces 2.5 to 3 times less water.",
        "Less water displaced means the level falls."
      ],
      "proofTitle": "Compare displaced volumes",
      "methods": [
        {
          "title": "Take it to the extreme",
          "steps": [
            "Imagine the rock is a tiny pellet of something incredibly dense, weighing a tonne.",
            "In the boat it pushes the boat down and displaces a cubic metre of water.",
            "Thrown in, the pellet displaces almost nothing, and the boat bobs up.",
            "A cubic metre of displacement vanished, so the level must drop. Pushing a variable to its limit is a good way to check a direction."
          ]
        }
      ],
      "reported": {
        "kind": "secondhand",
        "note": "Listed by interview-prep sites as a Tesla and SpaceX question. I did not find a first-hand candidate report.",
        "sources": [
          "boat1",
          "boat2"
        ]
      }
    },
    {
      "level": "Trick question",
      "q": "An ice cube floats in a glass of fresh water filled to the brim. When the ice melts completely, what happens?",
      "options": [
        "The level stays exactly the same",
        "The level drops",
        "The water overflows",
        "It depends on the size of the cube"
      ],
      "answer": 0,
      "why": "Floating ice displaces its own weight of water. When it melts it becomes exactly that weight of water, which fills exactly the volume it was displacing.",
      "proof": [
        "Archimedes: a floating body displaces a weight of water equal to its own weight.",
        "Ice of mass m displaces a water volume m/ρ_water.",
        "Melted, it is water of mass m, which occupies volume m/ρ_water.",
        "The melt water exactly fills the hole the ice was making, so the level does not change.",
        "The part above the surface exists because ice is about 9% less dense than water. Melting land ice raises sea level because it was not floating to begin with."
      ]
    },
    {
      "level": "Trick question",
      "q": "A flat steel plate has a round hole in it. You heat the plate uniformly. What happens to the hole?",
      "options": [
        "It gets smaller, because the metal expands into it",
        "It stays the same size",
        "It gets larger",
        "It becomes oval"
      ],
      "answer": 2,
      "why": "Uniform heating scales every dimension by the same factor, like a photographic enlargement. The hole grows exactly as a disc of the same material would.",
      "proof": [
        "Thermal expansion is a uniform strain: every length in the body becomes L(1 + α·ΔT).",
        "That includes the distance across the hole, so its diameter grows by the same factor.",
        "It is like enlarging a photo of the plate: the hole in the picture gets bigger too."
      ],
      "proofTitle": "Uniform scaling",
      "methods": [
        {
          "title": "Put the plug back",
          "steps": [
            "Imagine the disc that was cut out is still in place. The plate is then solid and expands uniformly with no internal stress.",
            "The disc expands to a larger diameter. The surrounding plate stays in contact with it all the way round.",
            "So the hole's edge moved outward by the same amount. Removing the disc changes nothing, because no stress was passing between them.",
            "This is how shrink fits work: heat the hub so its bore grows, slide it on the shaft, and let it cool."
          ]
        }
      ]
    },
    {
      "level": "Trick question",
      "q": "A solid round bar and a tube have the same outside diameter and material. Which is stiffer in bending?",
      "options": [
        "The tube, because hollow sections are stiffer",
        "It depends on the wall thickness in a way that can favour either",
        "They are equally stiff",
        "The solid bar"
      ],
      "answer": 3,
      "why": "The solid bar. I_tube = I_solid − I_hole, so removing material can only reduce stiffness. Tubes are stiffer per kilogram, not in absolute terms.",
      "proof": [
        "Solid:  I = π·D⁴/64.   Tube:  I = π(D⁴ − d⁴)/64.",
        "The tube's I is the solid's minus the core's, so it is always smaller.",
        "Example with D = 50 and d = 40:  the tube keeps 1 − (40/50)⁴ = 59% of the stiffness with only 36% of the mass.",
        "So the correct statement is: for the same mass a tube is stiffer, and for the same outside diameter the solid is stiffer.",
        "The trick is the unstated constraint. Always ask: same what?"
      ],
      "reported": {
        "kind": "topic",
        "note": "Candidates reported questions on which cross-section is stiffest. This exact question was not reported.",
        "sources": [
          "intern5",
          "xsec"
        ]
      }
    },
    {
      "level": "Trick question",
      "q": "A helium balloon floats on a string inside a closed car. The car accelerates forward. Which way does the balloon move?",
      "options": [
        "Backward, like the passengers",
        "Forward",
        "It doesn't move",
        "Straight up"
      ],
      "answer": 1,
      "why": "The denser air is thrown toward the back, creating a higher pressure there. The balloon, lighter than air, is pushed toward the low-pressure front.",
      "proof": [
        "In the accelerating car, everything behaves as if there were an extra gravity pointing backward.",
        "The air, being denser than helium, 'sinks' toward the back, building a pressure gradient from back to front.",
        "A helium balloon moves opposite to effective gravity. That is why it floats up, and here it also moves forward.",
        "Combined effective gravity points down and back, so the balloon tilts up and forward.",
        "Under braking it moves backward. A hanging pendulum does the opposite of the balloon every time."
      ]
    },
    {
      "level": "Trick question",
      "q": "A sausage (or a pressurised pipe) bursts when overheated. Which way does it split, and why?",
      "options": [
        "Around its circumference, because the ends push apart",
        "At a random angle",
        "Along its length, because hoop stress is twice the axial stress",
        "At 45°, because of shear"
      ],
      "answer": 2,
      "why": "In a pressurised cylinder, hoop stress is pr/t and axial stress is pr/(2t). The skin fails across the larger stress, so the crack runs lengthwise.",
      "proof": [
        "Internal pressure loads the wall in two directions.",
        "Hoop (around the circumference):  σ_h = p·r/t.   Axial (along the length):  σ_a = p·r/(2t).",
        "Hoop stress is twice as large, so the wall fails in the hoop direction first.",
        "A crack opens perpendicular to the stress that causes it, so the split runs along the length.",
        "It is the reason pipes burst in long slits and why wound pressure vessels put more fibre in the hoop direction."
      ]
    },
    {
      "level": "Trick question",
      "q": "A coil spring has stiffness k. You cut it exactly in half. What is the stiffness of one half?",
      "options": [
        "k/2",
        "k",
        "4k",
        "2k"
      ],
      "answer": 3,
      "why": "Each half has half as many coils to deflect, so it stretches half as far under the same force: stiffness 2k.",
      "proof": [
        "Think of the original spring as two half-springs in series, each of stiffness k_h.",
        "Series rule:  1/k = 1/k_h + 1/k_h = 2/k_h.",
        "So k_h = 2k."
      ],
      "proofTitle": "Springs in series",
      "methods": [
        {
          "title": "From the spring formula",
          "steps": [
            "Coil spring stiffness:  k = G·d⁴/(8·D³·N), with N the number of active coils.",
            "Stiffness is inversely proportional to N.",
            "Half the coils means twice the stiffness: 2k.",
            "Same idea as a bar in tension, k = AE/L: a shorter bar is stiffer."
          ]
        }
      ]
    },
    {
      "level": "Trick question",
      "q": "A short bar and a bar ten times longer, of the same material, are each held between rigid walls and heated by the same amount. Which develops the higher stress?",
      "options": [
        "The long bar, because it tries to expand more",
        "They develop the same stress",
        "The short bar",
        "Neither develops any stress"
      ],
      "answer": 1,
      "why": "σ = E·α·ΔT. Length cancels out: the long bar wants to grow ten times more, but that growth is spread over ten times the length, so the strain is the same.",
      "proof": [
        "Free expansion would be δ = α·ΔT·L, which is ten times larger for the long bar.",
        "The walls prevent it, so the bar is compressed by strain δ/L = α·ΔT.",
        "L cancels. Strain, and so stress σ = E·α·ΔT, is identical for both bars.",
        "The cross-section does not matter either. The wall force does scale with area.",
        "The long bar is, however, much more likely to buckle under that same stress."
      ]
    },
    {
      "level": "Trick question",
      "q": "You drive the first half of a trip's distance at 30 mph and the second half at 60 mph. What is your average speed?",
      "options": [
        "It depends on the distance",
        "45 mph",
        "50 mph",
        "40 mph"
      ],
      "answer": 3,
      "why": "You spend twice as long at 30 as at 60, so the average is weighted toward 30: total distance over total time gives 40 mph.",
      "proof": [
        "Let each half be d. Time for the first half: d/30. Second half: d/60.",
        "Total time:  d/30 + d/60 = 3d/60 = d/20.",
        "Average speed = total distance / total time = 2d/(d/20) = 40 mph."
      ],
      "proofTitle": "Total distance over total time",
      "methods": [
        {
          "title": "Plug in a number",
          "steps": [
            "Pick a 120 mile trip, so 60 miles per half.",
            "First half:  60/30 = 2 hours.   Second half:  60/60 = 1 hour.",
            "120 miles in 3 hours = 40 mph.",
            "For equal distances the average is the harmonic mean, 2·v₁·v₂/(v₁ + v₂) = 3,600/90 = 40. It would be 45 only if the two speeds were held for equal times."
          ]
        }
      ]
    },
    {
      "level": "Trick question",
      "q": "A spring scale is held horizontally. A rope on each end runs over a pulley to a hanging 100 N weight, so 100 N pulls on each end. What does the scale read?",
      "options": [
        "0 N",
        "200 N",
        "100 N",
        "50 N"
      ],
      "answer": 2,
      "why": "The scale reads the tension in it, which is 100 N. It is the same as hanging one 100 N weight from a scale fixed to a wall: the wall pulls back with 100 N.",
      "proof": [
        "A spring scale measures the tension passing through it.",
        "Cut the rope anywhere and draw the free body of one weight: tension T up, 100 N down, so T = 100 N.",
        "That same tension runs through the scale, so it reads 100 N.",
        "Compare with a scale hooked to a wall holding one 100 N weight. The wall pulls with 100 N on the other end and the scale reads 100 N. The second weight simply replaces the wall.",
        "The net force on the scale is zero, which is why it does not accelerate. Net force and tension are different things."
      ]
    }
  ]
});
