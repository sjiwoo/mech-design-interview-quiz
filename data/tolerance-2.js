/* Topic: Tolerance analysis, part 2. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "tolerance-2",
 "title": "Tolerance analysis, part 2",
 "blurb": "Fits, thermal effects, statistics behind RSS, mean shifts, sensitivity, angles, capability and how to fix a failing stack.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "A hole is 20.00 to 20.05 mm and its shaft is 19.95 to 19.98 mm. What are the minimum and maximum clearances?",
   "options": [
    "0.05 and 0.07",
    "0.02 and 0.10",
    "0.00 and 0.10",
    "0.03 and 0.07"
   ],
   "answer": 1,
   "why": "Minimum clearance is the smallest hole with the largest shaft: 20.00 − 19.98 = 0.02. Maximum is the largest hole with the smallest shaft: 20.05 − 19.95 = 0.10.",
   "proof": [
    "Minimum clearance (tightest fit) = hole MMC − shaft MMC = 20.00 − 19.98 = 0.02 mm.",
    "Maximum clearance (loosest fit) = hole LMC − shaft LMC = 20.05 − 19.95 = 0.10 mm.",
    "Clearance tolerance = 0.10 − 0.02 = 0.08 = hole tolerance 0.05 + shaft tolerance 0.03.",
    "Positive minimum clearance means every pair assembles freely: a clearance fit."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A bore is 20.000 to 20.021 mm (H7) and its shaft is 20.035 to 20.048 mm (p6). What kind of fit is this?",
   "options": [
    "Clearance fit",
    "Transition fit: some pairs clear, some interfere",
    "Interference fit: every pair interferes, by 0.014 to 0.048 mm",
    "It depends on temperature only"
   ],
   "answer": 2,
   "why": "The smallest shaft, 20.035, is still larger than the largest bore, 20.021. So every pair interferes. Minimum interference 0.014, maximum 0.048.",
   "proof": [
    "Minimum interference = shaft LMC − hole LMC = 20.035 − 20.021 = 0.014 mm.",
    "Maximum interference = shaft MMC − hole MMC = 20.048 − 20.000 = 0.048 mm.",
    "Both positive, so it is always an interference fit: H7/p6 is a standard locational interference (press) fit.",
    "Transition fit: the shaft range overlaps the hole range, for example H7/k6.",
    "Check the maximum interference against the hub's stress and the press force."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "An aluminium housing holds a steel shaft over a 100 mm length, with a small axial gap set at 20 °C. The assembly heats to 100 °C. How does the gap change? (Aluminium 23, steel 12 × 10⁻⁶ /°C.)",
   "options": [
    "It grows by about 0.09 mm",
    "It shrinks by about 0.09 mm",
    "It grows by about 0.18 mm",
    "It does not change"
   ],
   "answer": 0,
   "why": "Both grow, but aluminium grows faster. The difference over 100 mm and 80 °C is (23 − 12) × 10⁻⁶ × 100 × 80 = 0.088 mm, so the housing pulls away from the shaft and the gap opens.",
   "proof": [
    "Housing growth:  23 × 10⁻⁶ × 100 × 80 = 0.184 mm.",
    "Shaft growth:  12 × 10⁻⁶ × 100 × 80 = 0.096 mm.",
    "Gap change = housing growth − shaft growth = +0.088 mm.",
    "A stack that works at room temperature can fail hot or cold. Check the stack at the temperature extremes, not just nominal.",
    "The reverse case, a steel housing around an aluminium part, closes the gap and can jam or overload the parts."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "Each part's tolerance is set at ±3σ of its process, and the stack uses RSS. What fraction of assemblies does the RSS result expect to fall outside its limits?",
   "options": [
    "About 5%",
    "About 0.27%",
    "None",
    "About 32%"
   ],
   "answer": 1,
   "why": "RSS adds the standard deviations in quadrature. If each tolerance is 3σ, the RSS total is 3σ of the stack, and a normal distribution has 99.73% inside ±3σ. So about 0.27%, or 2.7 in 1,000, fall outside.",
   "proof": [
    "σ_stack = √(σ₁² + σ₂² + …).",
    "If each T_i = 3σ_i, then RSS T_stack = √(ΣT_i²) = 3σ_stack.",
    "Inside ±3σ: 99.73%. Outside: 0.27%.",
    "That assumes centred, normal, independent processes. Mean shifts or non-normal distributions raise the reject rate.",
    "For high-volume parts, designers often target a higher Cpk or use a modified RSS with a safety factor."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "In a stack, some parts' processes run off-centre (mean shift) as well as varying. How should the mean shifts be combined?",
   "options": [
    "Shifts add arithmetically (worst case); the random variation is combined by RSS",
    "Shifts are combined by RSS along with the variation",
    "Shifts can be ignored if Cpk is above 1",
    "Shifts cancel each other on average"
   ],
   "answer": 0,
   "why": "A mean shift is a systematic error that is the same on every part, so it does not average out. Add the shifts directly, then RSS only the random part of the variation around those shifted means.",
   "proof": [
    "Random variation is independent from part to part, so it combines by RSS.",
    "A mean shift moves every part from that process the same way. Shifts in different parts may or may not cancel, so assume they add.",
    "Stack mean = nominal + Σ(signed shifts).",
    "Stack spread = √(Σσ_i²) around that mean.",
    "Ignoring mean shifts is a common reason RSS predictions look good on paper and fail in production."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A hole's position error of ±0.05 mm moves a pin that acts on a 2:1 lever, which drives the critical gap. How much does that one contributor add to the gap stack?",
   "options": [
    "±0.025",
    "±0.05",
    "±0.2",
    "±0.1"
   ],
   "answer": 3,
   "why": "A lever multiplies motion by its ratio. A 2:1 lever turns ±0.05 at the input into ±0.10 at the output, so the contributor enters the stack with a sensitivity of 2.",
   "proof": [
    "Gap = Σ(sensitivity_i × dimension_i). For simple 1D chains every sensitivity is ±1.",
    "Through a lever, sensitivity = output arm / input arm = 2.",
    "Contribution = 2 × 0.05 = ±0.10.",
    "In RSS, the term is (2 × 0.05)² = 0.01, four times the direct effect.",
    "Look for levers, ramps and angles in a stack: they amplify small errors, and they are where to tighten tolerances first."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "An arm 100 mm long is located by an angle with a tolerance of ±0.5°. How far can its tip wander sideways?",
   "options": [
    "About ±0.087 mm",
    "About ±0.5 mm",
    "About ±0.87 mm",
    "About ±8.7 mm"
   ],
   "answer": 2,
   "why": "For small angles the tip moves L × θ, with θ in radians. 0.5° = 0.00873 rad, so 100 × 0.00873 = 0.87 mm.",
   "proof": [
    "Convert:  0.5° × π/180 = 0.00873 rad.",
    "Tip displacement ≈ L·θ = 100 × 0.00873 = 0.873 mm.",
    "Rule of thumb: 1° over 1 m is about 17.5 mm, or 0.175 mm per 10 mm.",
    "Angular tolerances on long features are often the biggest contributor in a stack.",
    "Locating with two widely spaced features, such as two pins far apart, cuts the angular error."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A hole has a position tolerance of Ø0.2. How much does it contribute to a one-dimensional stack in one direction?",
   "options": [
    "±0.1",
    "±0.2",
    "±0.4",
    "±0.05"
   ],
   "answer": 0,
   "why": "A Ø0.2 zone is a circle of radius 0.1 around true position. In any one direction the hole axis can be off by at most 0.1, so it enters a 1D stack as ±0.1.",
   "proof": [
    "Ø0.2 is the diameter of the tolerance zone; the axis can be anywhere inside it.",
    "Largest offset in any single direction = radius = 0.1.",
    "So the stack term is ±0.1, plus any bonus tolerance if the zone is at MMC and the hole is larger.",
    "Do not enter Ø0.2 as ±0.2: that double-counts and makes the stack look worse than it is.",
    "Profile tolerances work the same way: a 0.4 total band is ±0.2."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "A high-volume assembly fails its tolerance stack. Tightening tolerances further would be expensive. What is usually the most robust fix?",
   "options": [
    "Change the inspection to measure fewer parts",
    "Switch from worst case to RSS",
    "Add a note asking assembly to be careful",
    "Redesign so fewer dimensions sit in the stack, for example by locating parts from the same datum or combining parts"
   ],
   "answer": 3,
   "why": "Every part and interface in the loop adds a contributor. Removing them, by locating directly from the functional datum, combining parts or moving the critical feature onto one part, shrinks the stack for free.",
   "proof": [
    "Stack size grows with the number of contributors, whether worst case (sum) or RSS (√n).",
    "Design changes that cut contributors: datum the critical features to the same surface, merge two parts into one moulding, put the mating features on one machined part.",
    "Adjustment is the other robust option: shims, slotted holes or set-at-assembly fixtures absorb the stack.",
    "Switching to RSS without checking that its assumptions hold just hides the risk.",
    "Tightening the biggest contributor is the next lever when redesign is not possible."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "An RSS stack has contributors of ±0.3, ±0.1 and ±0.1. What share of the stack's variance does the ±0.3 contributor account for?",
   "options": [
    "About 60%",
    "About 82%",
    "About 33%",
    "About 95%"
   ],
   "answer": 1,
   "why": "In RSS, each contributor's share of the variance is its tolerance squared over the sum of squares: 0.09/(0.09 + 0.01 + 0.01) = 82%. One large contributor dominates.",
   "proof": [
    "Sum of squares:  0.3² + 0.1² + 0.1² = 0.09 + 0.01 + 0.01 = 0.11.",
    "Share of the ±0.3 term:  0.09/0.11 = 82%.",
    "Total RSS:  √0.11 = ±0.33.",
    "Remove the two ±0.1 terms entirely and the stack only improves to ±0.30. Halve the ±0.3 and it drops to ±0.21.",
    "This is a Pareto: in RSS, fix the biggest contributor first."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A process has Cp = 1.33 but Cpk = 1.0. What does that tell you?",
   "options": [
    "The process spread is too wide for the tolerance",
    "The process is centred and capable",
    "The spread would fit, but the process mean is off-centre toward one limit",
    "The measurement system is broken"
   ],
   "answer": 2,
   "why": "Cp compares the tolerance width with the process spread, ignoring where the mean sits. Cpk measures distance from the mean to the nearer limit. Cp is good but Cpk is lower, so the spread fits and the mean has drifted.",
   "proof": [
    "Cp = (USL − LSL)/(6σ). 1.33 means the tolerance is 8σ wide.",
    "Cpk = min(USL − μ, μ − LSL)/(3σ). 1.0 means the nearer limit is only 3σ from the mean.",
    "If centred, Cpk would equal Cp = 1.33, with 4σ to each limit.",
    "Fix: re-centre the process, for example by a tool offset. That is usually easier than reducing the spread.",
    "Cpk = 1.0 gives about 0.13% out on the near side. Cpk = 1.33 gives about 0.003%."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "When is a Monte Carlo tolerance simulation worth using instead of worst-case or RSS hand calculations?",
   "options": [
    "Never, RSS is always good enough",
    "When every contributor is normal and the stack is linear",
    "Only for stacks with two contributors",
    "When the stack is non-linear (angles, levers, geometry) or contributors are not normally distributed"
   ],
   "answer": 3,
   "why": "Worst case and RSS assume a linear sum, and RSS also assumes normal, independent contributors. Monte Carlo samples random values for each dimension and runs the real geometry, so it handles non-linear relationships and real distributions.",
   "proof": [
    "Monte Carlo: draw each dimension from its distribution, compute the gap with the full equation, repeat 10,000+ times, and read off the distribution of results.",
    "It handles angles and trigonometry, levers, clearance taken up in one direction, and skewed or uniform distributions.",
    "It gives a predicted reject rate directly.",
    "Its answer is only as good as the input distributions, so use real process data where possible.",
    "For simple linear stacks with well-behaved processes, RSS gives the same answer much faster."
   ],
   "reported": {
    "kind": "topic",
    "note": "Candidates reported tolerance stack-up questions in technical rounds. This exact question was not reported.",
    "sources": [
     "stack",
     "gdtstack"
    ]
   }
  }
 ]
});
