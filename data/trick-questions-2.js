/* Topic: Trick questions, part 2. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "trick-questions-2",
 "title": "Trick questions, part 2",
 "blurb": "More questions where the obvious answer is wrong: rolling, free fall, friction, gears, bolts, heat loss and design loads. Reason from first principles before you pick.",
 "questions": [
  {
   "level": "Trick question",
   "q": "A wheel rolls along the ground without slipping. Its centre moves forward at speed v. How fast is the very top of the wheel moving relative to the ground?",
   "options": [
    "v",
    "Zero",
    "2v",
    "v/2"
   ],
   "answer": 2,
   "why": "Rolling is the centre moving forward at v plus a spin about the centre that is also v at the rim. At the top both point forward and add to 2v. At the contact point they cancel, which is why the bottom of the wheel is momentarily at rest.",
   "proofTitle": "Translation plus rotation",
   "proof": [
    "No slip means the contact point has zero velocity, so the rim speed from spin is ωr = v.",
    "Top: forward v from translation, plus forward ωr = v from rotation. Total 2v.",
    "Bottom: forward v, plus backward v. Total 0.",
    "Front and back of the rim: v forward combined with v vertically, so √2·v at 45°.",
    "This is why the top of a bike tyre looks blurred in photos while the bottom looks sharp."
   ],
   "methods": [
    {
     "title": "Pivot about the contact point",
     "steps": [
      "At any instant a rolling wheel is pivoting about its contact point, which is momentarily still.",
      "Speed of any point = ω × its distance from the contact point.",
      "The centre is r away:  ω·r = v.",
      "The top is 2r away:  ω·2r = 2v."
     ]
    }
   ],
   "sketch": {
    "h": 170,
    "alt": "Rolling wheel with velocity arrows: 2v at the top, v at the centre, zero at the contact point",
    "items": [
     [
      "c",
      200,
      90,
      60,
      {
       "f": 1
      }
     ],
     [
      "h",
      60,
      150,
      400,
      150,
      1
     ],
     [
      "c",
      200,
      90,
      4,
      {
       "f": 2
      }
     ],
     [
      "a",
      200,
      30,
      320,
      30,
      {
       "a": 1,
       "w": 2.5
      }
     ],
     [
      "t",
      340,
      34,
      "2v",
      {
       "s": 14,
       "an": "start",
       "a": 1
      }
     ],
     [
      "a",
      200,
      90,
      260,
      90,
      {
       "w": 2
      }
     ],
     [
      "t",
      272,
      94,
      "v",
      {
       "s": 14,
       "an": "start"
      }
     ],
     [
      "c",
      200,
      150,
      4,
      {
       "f": 2,
       "a": 1
      }
     ],
     [
      "t",
      214,
      140,
      "0",
      {
       "s": 14,
       "an": "start",
       "a": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A cup of water with a hole in its side is dropped from a height. What happens to the jet of water while the cup is falling?",
   "options": [
    "The jet gets stronger",
    "It stops: the water no longer pours out",
    "The jet is unchanged",
    "Water flows in through the hole"
   ],
   "answer": 1,
   "why": "Water squirts out because of hydrostatic pressure, which comes from gravity pressing the water down against the support of the cup. In free fall the cup and the water accelerate together, the water weighs nothing relative to the cup, and the pressure at the hole drops to atmospheric.",
   "proof": [
    "Hydrostatic pressure at depth h:  p = ρ·g_eff·h, where g_eff is the acceleration relative to the container.",
    "Cup at rest:  g_eff = g, so p = ρgh pushes water out.",
    "In free fall the cup accelerates down at g too, so g_eff = 0 and p = 0 (gauge).",
    "With no pressure difference there is no flow. The jet stops while the cup falls and starts again when it lands.",
    "Same idea: a fuel tank in a car braking hard sees g_eff tilted, which is why tanks have baffles and pickups placed where the fuel goes."
   ],
   "sketch": {
    "h": 170,
    "alt": "Cup with a hole falling: no jet comes out",
    "items": [
     [
      "p",
      [
       [
        170,
        40
       ],
       [
        180,
        140
       ],
       [
        260,
        140
       ],
       [
        270,
        40
       ]
      ]
     ],
     [
      "r",
      176,
      70,
      88,
      66,
      {
       "f": 1,
       "n": 1
      }
     ],
     [
      "c",
      266,
      110,
      3,
      {
       "f": 2
      }
     ],
     [
      "a",
      220,
      150,
      220,
      166,
      {
       "a": 1
      }
     ],
     [
      "t",
      300,
      110,
      "no jet in free fall",
      {
       "s": 13,
       "an": "start",
       "a": 1
      }
     ],
     [
      "t",
      220,
      30,
      "falling at g",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A bullet is fired horizontally from a rifle at the same instant an identical bullet is dropped from the same height. Ignoring air resistance on flat ground, which hits the ground first?",
   "options": [
    "The dropped bullet",
    "The fired bullet, because it is faster",
    "It depends on the muzzle speed",
    "They land at the same time"
   ],
   "answer": 3,
   "why": "Horizontal and vertical motion are independent. Both bullets start with zero vertical speed and fall under the same g, so they take the same time to drop the same height. The fired one just lands much further away.",
   "proof": [
    "Vertical motion for both:  y = ½·g·t², starting from zero vertical speed.",
    "Time to fall height h:  t = √(2h/g), the same for both.",
    "Horizontal speed adds distance, not time:  x = v·t.",
    "From 1.5 m:  t = √(3/9.81) = 0.55 s. At 900 m/s the fired bullet travels about 500 m in that time.",
    "In reality air drag and the Earth's curvature make tiny differences, which the question rules out."
   ]
  },
  {
   "level": "Trick question",
   "q": "A car brakes to a stop from 30 mph in 15 m. With the same tyres and road, about how far does it need from 60 mph?",
   "options": [
    "60 m",
    "30 m",
    "42 m",
    "15 m"
   ],
   "answer": 0,
   "why": "Braking distance goes with the square of speed because the brakes must remove kinetic energy, ½mv². Twice the speed is four times the energy, so four times the distance at the same braking force: 60 m.",
   "proof": [
    "Work done by friction equals kinetic energy:  μmg·d = ½mv².",
    "So d = v²/(2μg), proportional to v².",
    "Double v:  d is 2² = 4 times larger, 4 × 15 = 60 m.",
    "Mass cancels: a heavier car brakes in the same distance if the tyres' friction coefficient is the same.",
    "Stopping distance in real driving also includes reaction distance, which only grows linearly with speed."
   ]
  },
  {
   "level": "Trick question",
   "q": "You move a heavy cart using its handle, which is angled 30° from the ground. Is it easier to push down along the handle or pull up along it?",
   "options": [
    "Pull: it lifts the cart slightly, reducing the friction",
    "Push: you can lean your weight into it",
    "They are the same, the angle only changes the direction",
    "Push: the vertical part of the force helps it roll"
   ],
   "answer": 0,
   "why": "Pushing down along the handle adds a downward component, which presses the cart into the ground and raises friction. Pulling up along it lifts some of the weight, which lowers friction. So less force is needed to pull.",
   "proof": [
    "Force F along a handle at angle θ: horizontal part F·cos θ, vertical part F·sin θ.",
    "Pushing: normal force N = mg + F sin θ. Pulling: N = mg − F sin θ.",
    "To start sliding: F cos θ = μN.",
    "Pull:  F = μmg/(cos θ + μ sin θ).  Push:  F = μmg/(cos θ − μ sin θ). The pull needs less.",
    "With μ = 0.5 and θ = 30°:  pull 0.45·mg, push 0.81·mg, about 80% more effort to push."
   ]
  },
  {
   "level": "Trick question",
   "q": "A ladder leans against a smooth wall with friction only at the floor. As you climb it, when is it most likely to slide out?",
   "options": [
    "When you first step on the bottom rung",
    "Halfway up",
    "When you are near the top",
    "It is equally likely at every height"
   ],
   "answer": 2,
   "why": "The wall's push on the ladder grows as your weight moves higher, because your weight's lever arm about the floor contact grows. The floor friction must balance that push, so the friction needed is largest near the top.",
   "proof": [
    "Moments about the foot of the ladder: wall force N_w × height = sum of weights × their horizontal distances from the foot.",
    "Your horizontal distance from the foot grows as you climb, so N_w grows.",
    "Horizontal balance: floor friction = N_w.",
    "Floor normal force = total weight, which stays constant, so the friction available, μ × total weight, stays constant.",
    "Friction needed rises with your height while friction available stays the same, so slip comes near the top. That is why someone stands on the bottom rung to help: they add weight right at the foot."
   ]
  },
  {
   "level": "Trick question",
   "q": "An ice skater spinning with her arms out pulls them in and spins about twice as fast. What happens to her rotational kinetic energy?",
   "options": [
    "It stays the same, because angular momentum is conserved",
    "It roughly doubles, supplied by the work her arms do",
    "It halves",
    "It quadruples"
   ],
   "answer": 1,
   "why": "Angular momentum L = Iω is conserved. If ω doubles, I has halved. Kinetic energy is ½Iω² = L²/2I, so halving I doubles the energy. The extra energy comes from her muscles pulling her arms in against the outward pull of the spin.",
   "proof": [
    "No external torque, so L = I·ω is conserved.",
    "ω doubles  ⇒  I halves.",
    "KE = ½·I·ω² = L²/(2I).",
    "Halve I and KE doubles.",
    "Energy is not conserved here because she does work: pulling her arms inward against the centripetal pull she feels. Momentum and energy behave differently whenever internal work is done."
   ]
  },
  {
   "level": "Trick question",
   "q": "An hourglass sits on a precise scale. While sand is falling steadily, how does the reading compare with the reading when all the sand is at rest in the bottom?",
   "options": [
    "It reads less, because some sand is in the air",
    "It reads more, because falling sand hits the bottom",
    "It reads exactly the same",
    "It drops to zero"
   ],
   "answer": 2,
   "why": "Two effects cancel. The sand in the air is not pressing on the glass, which lowers the reading. But the sand landing at the bottom is being stopped, which needs a force, and that raises it. In steady flow the two are equal. Only the very start and the very end differ.",
   "proof": [
    "Sand in the air at any moment: mass m_air = ṁ·t_fall, where ṁ is the flow rate and t_fall the fall time.",
    "Missing weight:  m_air·g = ṁ·t_fall·g.",
    "Impact force at the bottom: the landing rate times the landing speed,  ṁ·v = ṁ·g·t_fall.",
    "The two are equal, so the reading is unchanged in steady flow.",
    "At the start the impact has not begun, so it reads slightly low. At the end, flow from the top stops while sand is still landing, so it reads slightly high."
   ]
  },
  {
   "level": "Trick question",
   "q": "A mechanic adds a 250 mm socket extension, in line with the bolt axis, between a torque wrench and the socket. Does it change the torque applied to the bolt?",
   "options": [
    "Yes: it adds 250 mm of lever arm",
    "Yes: it reduces torque by the extension's length",
    "No: an in-line extension adds no lever arm",
    "Yes: it doubles the torque"
   ],
   "answer": 2,
   "why": "Torque is force times the perpendicular distance from the axis. An in-line extension runs along the axis, so it adds no perpendicular distance. The wrench applies the same torque, apart from a little lost to twisting the extension.",
   "proof": [
    "Torque = F × r, where r is measured perpendicular to the axis of rotation.",
    "The handle is the only part that sits off-axis, so it sets r.",
    "An in-line extension is parallel to the axis, so r is unchanged.",
    "The extension does twist, which slightly cushions the click, but the torque it passes on is the same.",
    "Contrast: an offset adapter such as a crowfoot, which moves the socket sideways along the handle, does change the effective length, and the setting must be corrected."
   ]
  },
  {
   "level": "Trick question",
   "q": "A bolt is tightened to the same torque once dry and once with its threads oiled. How does the clamp force (preload) compare?",
   "options": [
    "Oiled gives much higher preload, and can overstretch the bolt",
    "They are the same, because the torque is the same",
    "Oiled gives lower preload because it slips",
    "Oiled gives slightly lower preload"
   ],
   "answer": 0,
   "why": "About 90% of tightening torque is lost to friction in the threads and under the head, and only about 10% stretches the bolt. Oil cuts the friction, so much more of the same torque goes into stretch: preload can rise 30 to 50% or more.",
   "proof": [
    "Torque-preload relation:  T = K·F·d, with a nut factor K of about 0.2 dry and about 0.15 or less oiled.",
    "Same T and d:  F_oiled/F_dry = K_dry/K_oiled = 0.2/0.15 = 1.33, or higher with a good lubricant.",
    "Torque specs are written for a stated condition, dry or lubricated. Using a dry spec on oiled threads can yield the bolt.",
    "Torque is a poor proxy for preload: scatter of ±25% is normal. Critical joints use torque-angle or bolt-stretch measurement instead."
   ],
   "reported": {
    "kind": "topic",
    "note": "A candidate reported being asked about the difference in bolt torque in hot and cold conditions. This exact question was not reported.",
    "sources": [
     "hotcold"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Gear A drives gear C through an idler gear B in between. A has 20 teeth, B has 60, C has 40. What is the speed ratio from A to C, and does C turn the same way as A?",
   "options": [
    "3:1, and C turns opposite to A",
    "6:1, and C turns the same way as A",
    "2:1, and C turns opposite to A",
    "2:1, and C turns the same way as A"
   ],
   "answer": 3,
   "why": "An idler's tooth count cancels out: A to B is 60/20 and B to C is 40/60, giving 40/20 = 2:1. What the idler does change is direction. With three gears in a line, A and C turn the same way.",
   "proof": [
    "Each mesh reverses direction and changes speed by the tooth ratio.",
    "A → B:  speed ratio 60/20 = 3.",
    "B → C:  speed ratio 40/60 = 0.667.",
    "Overall:  3 × 0.667 = 2, the same as A meshing straight with C (40/20).",
    "Directions: A clockwise, B anticlockwise, C clockwise. Idlers are used to fill a gap between shafts or to reverse direction."
   ],
   "sketch": {
    "h": 170,
    "alt": "Three gears in a row: small driver, large idler, medium driven gear",
    "items": [
     [
      "c",
      80,
      90,
      24,
      {
       "f": 1
      }
     ],
     [
      "t",
      80,
      95,
      "A 20",
      {
       "s": 12
      }
     ],
     [
      "c",
      164,
      90,
      60,
      {
       "f": 2
      }
     ],
     [
      "t",
      164,
      95,
      "B 60",
      {
       "s": 12
      }
     ],
     [
      "c",
      264,
      90,
      40,
      {
       "f": 1
      }
     ],
     [
      "t",
      264,
      95,
      "C 40",
      {
       "s": 12
      }
     ],
     [
      "t",
      80,
      140,
      "driver",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      164,
      165,
      "idler",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      264,
      148,
      "driven",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A thin electrical wire, 1 mm in radius, loses heat to still air (h = 10 W/m²K). You wrap it in insulation with k = 0.2 W/m·K. What happens to the heat it loses?",
   "options": [
    "Heat loss drops, as insulation always does",
    "Heat loss rises until the insulation is about 20 mm in radius",
    "Nothing changes, because the wire is too thin",
    "Heat loss drops only once the insulation is thicker than 1 mm"
   ],
   "answer": 1,
   "why": "Insulation adds conduction resistance but also adds outer surface area for convection. On a thin cylinder the extra surface wins at first. Heat loss keeps rising until the outer radius reaches the critical radius r = k/h = 0.2/10 = 20 mm.",
   "proof": [
    "Resistance per unit length:  R = ln(r_o/r_i)/(2πk) + 1/(2πr_o·h).",
    "The first term grows with r_o, the second shrinks.",
    "dR/dr_o = 0 at r_o = k/h. That is where R is smallest and heat loss largest.",
    "Critical radius:  0.2/10 = 0.02 m = 20 mm, far bigger than the 1 mm wire.",
    "So insulating a thin wire actually cools it better, which is useful for cables. For a large pipe, r_crit is smaller than the pipe and insulation always helps."
   ]
  },
  {
   "level": "Trick question",
   "q": "A sensor bracket bolted between two parts keeps cracking. The cause is thermal expansion: the parts grow apart by a fixed amount as they warm. Someone proposes making the bracket thicker and stiffer. What happens to its stress?",
   "options": [
    "It goes down because there is more material",
    "It goes up",
    "It stays the same",
    "It goes down by half"
   ],
   "answer": 1,
   "why": "This load is set by a displacement, not a force. The bracket must stretch the same amount whatever its size, and a stiffer bracket needs more force to do it. For a bending bracket, a thicker section also puts its surface further from the neutral axis, which raises the stress for the same deflection.",
   "proof": [
    "Force-controlled load: stress = F/A or Mc/I, so more material lowers it.",
    "Displacement-controlled load: the deflection δ is imposed. For a cantilever-style bracket, σ = 3Ecδ/L².",
    "Thicker section raises c and the stress rises in proportion.",
    "The fix is the opposite: make it more compliant. A thinner, longer flexure, a slotted hole, or a material with a matching expansion coefficient.",
    "Always ask first whether a load is force-controlled or displacement-controlled. The best design direction flips."
   ]
  },
  {
   "level": "Trick question",
   "q": "A fatigue crack is found growing from the edge of a plate. A technician drills a small hole right at the crack tip. What does this do?",
   "options": [
    "It blunts the sharp tip, cutting the stress concentration and often stopping the crack",
    "It makes the crack grow faster, because material was removed",
    "It has no effect",
    "It fully restores the plate's original strength"
   ],
   "answer": 0,
   "why": "The stress at a crack tip depends on how sharp the tip is. A crack has a near-zero radius, so the local stress is huge. Drilling a hole replaces the sharp tip with a smooth radius, and the local stress drops by a large factor. This is a standard crack-stop repair.",
   "proof": [
    "For a notch of depth a and tip radius ρ:  K_t ≈ 1 + 2√(a/ρ).",
    "A crack 10 mm long with a 0.01 mm tip:  K_t ≈ 1 + 2√1000 ≈ 64.",
    "Drill a 6 mm hole (ρ = 3 mm):  K_t ≈ 1 + 2√(10/3) ≈ 4.7.",
    "Removing material made the part stronger in fatigue, because the problem was the stress concentration, not the area.",
    "It is a temporary fix. The hole itself is a stress raiser, so inspect it, and replace or reinforce the part."
   ],
   "sketch": {
    "h": 150,
    "alt": "Plate with an edge crack ending in a drilled hole",
    "items": [
     [
      "r",
      60,
      30,
      340,
      90,
      {
       "f": 1
      }
     ],
     [
      "l",
      60,
      75,
      220,
      75,
      {
       "w": 2
      }
     ],
     [
      "c",
      230,
      75,
      10,
      {
       "f": "s",
       "a": 1,
       "w": 2
      }
     ],
     [
      "t",
      140,
      64,
      "crack",
      {
       "s": 12
      }
     ],
     [
      "t",
      260,
      58,
      "stop hole",
      {
       "s": 12,
       "an": "start",
       "a": 1
      }
     ],
     [
      "a",
      230,
      124,
      230,
      146,
      {
       "m": 1
      }
     ],
     [
      "a",
      230,
      28,
      230,
      4,
      {
       "m": 1
      }
     ]
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "Two dams are each 10 m tall and 50 m wide and hold water right to the top. One holds back a lake 5 km long, the other a channel only 10 m long. Which dam feels the larger total water force?",
   "options": [
    "The lake dam, by about 500 times",
    "The lake dam, by a little",
    "The channel dam",
    "They feel the same force"
   ],
   "answer": 3,
   "why": "Water pressure depends only on depth, ρgh, not on how much water is behind the wall. Both dams see the same pressure distribution over the same area, so the same total force.",
   "proof": [
    "Pressure at depth y:  p = ρ·g·y. Nothing about the reservoir's length appears.",
    "Force on a vertical wall of width w and depth H:  F = ½·ρ·g·H²·w.",
    "F = ½ × 1,000 × 9.81 × 10² × 50 = 24.5 MN for both.",
    "It acts at a third of the depth up from the bottom, 3.3 m.",
    "The lake matters for other things: how long the water lasts, wave height and flood risk. Not for the static force."
   ]
  }
 ]
});
