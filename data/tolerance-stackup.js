/* Topic: Tolerance stack-up. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
  "id": "tolerance-stackup",
  "title": "Tolerance stack-up",
  "blurb": "Worst-case and RSS stacks, gap analysis, process capability, and how dimensioning choices change the stack.",
  "questions": [
    {
      "level": "Fundamental",
      "q": "Three parts are stacked end to end: 10 ± 0.1, 20 ± 0.2 and 30 ± 0.1 mm. What is the worst-case total length?",
      "options": [
        "60 ± 0.1",
        "60 ± 0.2",
        "60 ± 0.4",
        "60 ± 0.24"
      ],
      "answer": 2,
      "why": "Worst case adds the tolerances directly: 0.1 + 0.2 + 0.1 = ±0.4.",
      "proof": [
        "Nominal:  10 + 20 + 30 = 60.",
        "Maximum, all parts at their upper limit:  10.1 + 20.2 + 30.1 = 60.4.",
        "Minimum, all at their lower limit:  9.9 + 19.8 + 29.9 = 59.6.",
        "Total:  60 ± 0.4. Worst case guarantees 100% of assemblies, at the cost of tight part tolerances."
      ]
    },
    {
      "level": "Applied",
      "q": "For the same three parts (±0.1, ±0.2, ±0.1), what is the statistical (RSS) tolerance on the total length?",
      "options": [
        "±0.24",
        "±0.14",
        "±0.40",
        "±0.06"
      ],
      "answer": 0,
      "why": "RSS = √(0.1² + 0.2² + 0.1²) = √0.06 ≈ ±0.245.",
      "proof": [
        "RSS (root sum of squares):  T = √(Σ tᵢ²).",
        "T = √(0.01 + 0.04 + 0.01) = √0.06 = 0.245.",
        "Total:  60 ± 0.245, against ±0.4 for worst case.",
        "It is smaller because it is unlikely that every part is at its limit in the same direction at once."
      ]
    },
    {
      "level": "Applied",
      "q": "A slot is 50.0 ± 0.2 mm wide. Two blocks, each 24.8 ± 0.1 mm, sit side by side in it. What is the worst-case minimum gap?",
      "options": [
        "0.2 mm",
        "0.0 mm",
        "0.4 mm",
        "−0.2 mm (interference)"
      ],
      "answer": 1,
      "why": "Smallest slot minus largest blocks: 49.8 − 24.9 − 24.9 = 0.0 mm. It is line-to-line at the limit.",
      "proof": [
        "Minimum gap happens with the smallest slot and the largest blocks.",
        "Slot minimum:  50.0 − 0.2 = 49.8.   Block maximum:  24.8 + 0.1 = 24.9 each.",
        "Gap_min = 49.8 − 24.9 − 24.9 = 0.0 mm."
      ],
      "proofTitle": "Limits directly",
      "methods": [
        {
          "title": "Nominal gap ± sum of tolerances",
          "steps": [
            "Write the loop:  Gap = Slot − Block₁ − Block₂.",
            "Nominal gap:  50.0 − 24.8 − 24.8 = 0.4 mm.",
            "Tolerances always add in a worst-case stack, whatever the sign in the loop:  0.2 + 0.1 + 0.1 = 0.4.",
            "Gap = 0.4 ± 0.4, so it ranges from 0.0 to 0.8 mm."
          ]
        }
      ]
    },
    {
      "level": "Applied",
      "q": "For that same slot and two blocks, what minimum gap does an RSS analysis predict?",
      "options": [
        "0.00 mm",
        "0.24 mm",
        "0.16 mm",
        "0.40 mm"
      ],
      "answer": 2,
      "why": "RSS tolerance = √(0.2² + 0.1² + 0.1²) = 0.245, so the gap is 0.4 ± 0.245 and the minimum is about 0.16 mm.",
      "proof": [
        "Nominal gap:  0.4 mm (from the previous question).",
        "RSS:  √(0.04 + 0.01 + 0.01) = √0.06 = 0.245.",
        "Gap = 0.4 ± 0.245, so the statistical minimum is 0.155 mm.",
        "If each tolerance is ±3σ, about 99.7% of assemblies fall in that range. A few in a thousand may be outside it."
      ]
    },
    {
      "level": "Design judgment",
      "q": "When is it reasonable to use an RSS stack instead of worst case?",
      "options": [
        "When there are several independent contributors from capable, centred, roughly normal processes at volume",
        "Always, it gives a smaller answer",
        "Only for stacks with two dimensions",
        "When the parts are 100% inspected and sorted to match"
      ],
      "answer": 0,
      "why": "RSS assumes independent, normally distributed, centred dimensions, and enough contributors and volume for the statistics to hold.",
      "proof": [
        "RSS adds variances:  σ_total² = Σσᵢ². That only holds if the dimensions vary independently.",
        "It assumes each process is centred on nominal and its tolerance is about ±3σ (Cpk near 1 or better).",
        "With only two or three contributors, or a process running off-centre, RSS is optimistic.",
        "Use worst case for safety-critical fits, few contributors, or low volume. Many teams use RSS with a correction factor (for example 1.5×) as a middle ground."
      ]
    },
    {
      "level": "Applied",
      "q": "Nine parts, each ±0.1 mm, are stacked. How much larger is the worst-case tolerance than the RSS tolerance?",
      "options": [
        "1.5×",
        "2×",
        "3×",
        "9×"
      ],
      "answer": 2,
      "why": "Worst case = 9 × 0.1 = 0.9. RSS = √9 × 0.1 = 0.3. The ratio is √N = 3.",
      "proof": [
        "Worst case with N equal tolerances t:  N·t = 9 × 0.1 = ±0.9.",
        "RSS:  √(N·t²) = √N·t = 3 × 0.1 = ±0.3.",
        "Ratio:  N/√N = √N = 3.",
        "The gap between the methods grows with the number of parts, which is why long stacks are usually done statistically."
      ]
    },
    {
      "level": "Fundamental",
      "q": "A drawing gives a dimension as 10.0 +0.3 / −0.1. What is the equivalent symmetric (±) form to use in a stack?",
      "options": [
        "10.0 ± 0.2",
        "10.1 ± 0.2",
        "10.2 ± 0.1",
        "10.0 ± 0.3"
      ],
      "answer": 1,
      "why": "The limits are 9.9 and 10.3. The midpoint is 10.1 and half the range is 0.2, so 10.1 ± 0.2.",
      "proof": [
        "Limits:  10.0 − 0.1 = 9.9  and  10.0 + 0.3 = 10.3.",
        "Midpoint:  (9.9 + 10.3)/2 = 10.1.",
        "Half range:  (10.3 − 9.9)/2 = 0.2.",
        "Convert every dimension to this form first. Otherwise the nominal of the stack is wrong."
      ]
    },
    {
      "level": "Applied",
      "q": "A dimension is specified 10.00 ± 0.05. The process runs with mean 10.02 and standard deviation 0.01. What is Cpk?",
      "options": [
        "0.67",
        "2.33",
        "1.67",
        "1.0"
      ],
      "answer": 3,
      "why": "Cpk = distance from the mean to the nearest limit ÷ 3σ = (10.05 − 10.02)/(3 × 0.01) = 1.0.",
      "proof": [
        "Upper limit 10.05, lower limit 9.95.",
        "Distance to upper:  10.05 − 10.02 = 0.03.   Distance to lower:  10.02 − 9.95 = 0.07.",
        "Cpk = min(0.03, 0.07)/(3σ) = 0.03/0.03 = 1.0.",
        "Cp ignores centring:  (10.05 − 9.95)/(6 × 0.01) = 1.67. The process is capable but off-centre.",
        "Re-centring it would raise Cpk to 1.67 with no change to the process spread. Automotive targets are usually 1.33 or 1.67."
      ]
    },
    {
      "level": "Design judgment",
      "q": "An RSS stack has contributors of ±0.3, ±0.1 and ±0.1. You can afford to halve either the single ±0.3 or both of the ±0.1 tolerances. Which helps more?",
      "options": [
        "Halve both ±0.1 tolerances",
        "Neither changes the RSS result",
        "They help equally",
        "Halve the ±0.3 tolerance"
      ],
      "answer": 3,
      "why": "RSS is dominated by the largest term. Halving the 0.3 cuts the stack from 0.33 to 0.21. Halving both 0.1s only gets it to 0.31.",
      "proof": [
        "Baseline:  √(0.09 + 0.01 + 0.01) = √0.11 = 0.332.",
        "Halve the 0.3 to 0.15:  √(0.0225 + 0.01 + 0.01) = √0.0425 = 0.206. That is a 38% reduction.",
        "Halve both 0.1s to 0.05:  √(0.09 + 0.0025 + 0.0025) = √0.095 = 0.308. That is a 7% reduction.",
        "Because terms are squared, the 0.3 contributes 82% of the variance. Always work on the biggest contributor first."
      ]
    },
    {
      "level": "Design judgment",
      "q": "A stepped part has three steps, each dimensioned from the previous one (chain dimensioning) at ±0.1. The overall length is what matters for fit. What is the best change?",
      "options": [
        "Tighten all three step tolerances to ±0.03",
        "Dimension the overall length directly from the functional datum",
        "Add a note saying the overall length is critical",
        "Switch the analysis from worst case to RSS"
      ],
      "answer": 1,
      "why": "With chain dimensions the overall length accumulates ±0.3. Dimensioning it directly makes it ±0.1 with no extra manufacturing cost.",
      "proof": [
        "Chain dimensioning: overall length = step₁ + step₂ + step₃, so worst case is ±0.3.",
        "Dimension the overall length directly: it is a single dimension at ±0.1.",
        "The accumulated variation moves to a step that does not matter for fit.",
        "Rule: dimension functional features directly from the functional datum, so the stack has as few contributors as possible. Fixing the scheme costs far less than tightening tolerances."
      ]
    }
  ]
});
