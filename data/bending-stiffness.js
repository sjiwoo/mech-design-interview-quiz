/* Topic: Bending stiffness. Format: see data/beam-loading.js */
window.QUESTION_SETS = window.QUESTION_SETS || [];
window.QUESTION_SETS.push({
 "id": "bending-stiffness",
 "title": "Bending stiffness",
 "blurb": "EI against point stiffness, supports, section shape, sheet flanges and sandwich panels, open against closed sections, joints in series, material indices, and when strength does not help.",
 "questions": [
  {
   "level": "Fundamental",
   "q": "What is the difference between a beam's bending stiffness EI and its stiffness k at a point?",
   "options": [
    "They are the same thing",
    "EI is a property of the section and material; k also depends on the length and how the beam is supported and loaded",
    "EI depends on the load; k does not",
    "k only applies to springs, not beams"
   ],
   "answer": 1,
   "why": "EI (modulus times second moment of area) describes how hard the cross-section is to curve. The stiffness you feel at a point, k = force/deflection, also depends on span and supports: k = 3EI/L³ for a tip-loaded cantilever and 48EI/L³ for a simply supported beam loaded at midspan.",
   "proof": [
    "EI: units N·mm². Set by material (E) and section shape (I) only.",
    "Point stiffness:  k = F/δ, units N/mm.",
    "Cantilever, tip load:  δ = FL³/3EI, so k = 3EI/L³.",
    "Simply supported, centre load:  δ = FL³/48EI, so k = 48EI/L³.",
    "The same EI can give very different k: length enters as L³, and supports change the constant by 16 times or more."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "The same beam, same length, is used as a cantilever loaded at its tip and as a simply supported beam loaded at midspan. How much stiffer is the simply supported version?",
   "options": [
    "2 times",
    "4 times",
    "8 times",
    "16 times"
   ],
   "answer": 3,
   "why": "k = 48EI/L³ against 3EI/L³, a ratio of 16. Supporting both ends and loading the middle is far stiffer than holding one end.",
   "proof": [
    "Cantilever:  k_c = 3EI/L³.",
    "Simply supported, centre load:  k_ss = 48EI/L³.",
    "Ratio:  48/3 = 16.",
    "Physically, the simply supported beam is like two cantilevers of half the span, back to back, each carrying half the load: stiffness of one is 3EI/(L/2)³ = 24EI/L³, two in parallel give 48EI/L³.",
    "Fixing both ends raises it again, to 192EI/L³, four times the simply supported value."
   ],
   "proofTitle": "Using the standard formulas",
   "methods": [
    {
     "title": "Two half-length cantilevers",
     "steps": [
      "Split the simply supported beam at midspan. By symmetry the slope there is zero, so each half acts as a cantilever of length L/2 with load P/2 at its end, turned upside down.",
      "Each half deflects  (P/2)(L/2)³/(3EI) = PL³/48EI.",
      "So k = P/δ = 48EI/L³, sixteen times the full-length cantilever."
     ]
    }
   ],
   "sketch": {
    "h": 110,
    "alt": "Cantilever with a tip load and simply supported beam with a centre load",
    "items": [
     [
      "h",
      40,
      20,
      40,
      70,
      -1
     ],
     [
      "r",
      40,
      38,
      180,
      8,
      {
       "f": 1
      }
     ],
     [
      "a",
      220,
      10,
      220,
      36,
      {
       "a": 1
      }
     ],
     [
      "t",
      130,
      62,
      "cantilever",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "r",
      250,
      38,
      180,
      8,
      {
       "f": 1
      }
     ],
     [
      "p",
      [
       [
        250,
        46
       ],
       [
        242,
        60
       ],
       [
        258,
        60
       ]
      ],
      {
       "close": 1
      }
     ],
     [
      "p",
      [
       [
        430,
        46
       ],
       [
        422,
        60
       ],
       [
        438,
        60
       ]
      ],
      {
       "close": 1
      }
     ],
     [
      "a",
      340,
      10,
      340,
      36,
      {
       "a": 1
      }
     ],
     [
      "t",
      340,
      80,
      "simply supported",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      100,
      "same beam, same length L",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "You double the height of a rectangular cantilever, keeping width, length and material. How do its stiffness and its strength (load to yield) change?",
   "options": [
    "Stiffness ×8, strength ×4",
    "Stiffness ×4, strength ×4",
    "Stiffness ×8, strength ×8",
    "Stiffness ×2, strength ×2"
   ],
   "answer": 0,
   "why": "Stiffness follows I = bh³/12, so ×8. Strength follows the section modulus S = bh²/6, so ×4. Height helps stiffness more than strength.",
   "proof": [
    "Stiffness:  k = 3EI/L³ with I = bh³/12. Double h: I goes up 2³ = 8 times.",
    "Strength: yield when M·c/I = σ_y, so the load limit is ∝ S = I/c = bh²/6. Double h: S goes up 2² = 4 times.",
    "Weight only doubles.",
    "So a deeper section is the best way to add stiffness for its weight, until it gets so tall and thin that it buckles sideways."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A 1 mm steel sheet, 50 mm wide, is too floppy. You bend a 10 mm flange up along each long edge, making a shallow channel. Roughly how much stiffer is it in bending, and how much heavier?",
   "options": [
    "About 2 times stiffer, 36% heavier",
    "About 10 times stiffer, 36% heavier",
    "About 100 times stiffer, 36% heavier",
    "About 100 times stiffer, twice as heavy"
   ],
   "answer": 2,
   "why": "A flat 50 × 1 strip has I = 4.2 mm⁴. The channel puts material 10 mm away from the plate, and its I is about 460 mm⁴, roughly 110 times more, for only 36% more metal.",
   "proof": [
    "Flat strip:  I = bt³/12 = 50 × 1³/12 = 4.17 mm⁴.",
    "Channel: base 48 × 1 plus two flanges 1 × 10. Area 68 mm² against 50 mm², so 36% more material.",
    "Centroid of the channel: about 1.8 mm above the base.",
    "Second moment by the parallel-axis theorem:  I ≈ 456 mm⁴.",
    "Ratio ≈ 110. Bending a flange, adding a bead or a rib is the cheapest way to stiffen sheet metal."
   ],
   "sketch": {
    "h": 130,
    "alt": "Flat strip compared with the same strip with two bent-up flanges",
    "items": [
     [
      "r",
      40,
      70,
      150,
      4,
      {
       "f": 2
      }
     ],
     [
      "t",
      115,
      100,
      "flat 50 × 1",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "p",
      [
       [
        260,
        40
       ],
       [
        260,
        74
       ],
       [
        410,
        74
       ],
       [
        410,
        40
       ]
      ],
      {
       "w": 3
      }
     ],
     [
      "t",
      335,
      100,
      "50 wide, 10 mm flanges",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "t",
      230,
      124,
      "stiffness ratio = ?",
      {
       "s": 12,
       "a": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A sandwich panel has two 1 mm skins on a light core. You double the core thickness from 10 to 20 mm, keeping the same skins. About how much does the bending stiffness rise?",
   "options": [
    "About 2 times",
    "About 8 times",
    "About 3.6 times",
    "It barely changes, the core carries no load"
   ],
   "answer": 2,
   "why": "The skins carry the bending and their contribution goes as their distance from the centre squared. Doubling that distance gives roughly 4 times. The exact value for 1 mm skins is 3.6 times, with almost no added weight.",
   "proof": [
    "Ignoring the core:  I ≈ b[(d + 2t)³ − d³]/12 per unit width.",
    "Core 10, skins 1:  (12³ − 10³)/12 = 60.7.",
    "Core 20, skins 1:  (22³ − 20³)/12 = 220.7.",
    "Ratio:  3.64. The parallel-axis approximation, 2·A_skin·(d/2)², gives exactly 4.",
    "The core's job is to keep the skins apart and carry shear. This is why aircraft floors and race-car tubs are sandwich panels."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A tube of 40 mm diameter and 1 mm wall is slit along its whole length. What happens to its bending and torsional stiffness?",
   "options": [
    "Both drop by about half",
    "Bending barely changes; torsional stiffness drops by roughly 1,000 times",
    "Torsional barely changes; bending drops a lot",
    "Both are unchanged, no material was removed"
   ],
   "answer": 1,
   "why": "Bending depends on how far material sits from the neutral axis, which the slit hardly changes. Torsion in a closed tube relies on shear flowing all the way round; once it is cut, only the thin wall resists twisting on its own, and for these proportions it is over 1,000 times less stiff.",
   "proof": [
    "Closed thin tube:  J ≈ 2πr³t = 2π × 20³ × 1 ≈ 50,300 mm⁴.",
    "Open (slit) section:  J ≈ (perimeter)·t³/3 = 2π × 20 × 1³/3 ≈ 42 mm⁴.",
    "Ratio:  about 1,200.",
    "Bending I is almost the same because the material is still in the same place.",
    "Design rule: for torsion, close the section. Box sections and welded seams beat C-channels and open seams."
   ],
   "sketch": {
    "h": 130,
    "alt": "Closed tube and the same tube with a slit",
    "items": [
     [
      "c",
      140,
      65,
      40,
      {
       "w": 3
      }
     ],
     [
      "t",
      140,
      125,
      "closed",
      {
       "s": 12,
       "m": 1
      }
     ],
     [
      "p",
      [
       [
        336.9,
        25.6
       ],
       [
        341,
        26.5
       ],
       [
        345,
        27.9
       ],
       [
        348.8,
        29.7
       ],
       [
        352.4,
        31.8
       ],
       [
        355.7,
        34.4
       ],
       [
        358.8,
        37.2
       ],
       [
        361.5,
        40.4
       ],
       [
        363.9,
        43.8
       ],
       [
        366,
        47.5
       ],
       [
        367.6,
        51.3
       ],
       [
        368.8,
        55.3
       ],
       [
        369.6,
        59.4
       ],
       [
        370,
        63.6
       ],
       [
        369.9,
        67.8
       ],
       [
        369.4,
        71.9
       ],
       [
        368.5,
        76
       ],
       [
        367.1,
        80
       ],
       [
        365.3,
        83.8
       ],
       [
        363.2,
        87.4
       ],
       [
        360.6,
        90.7
       ],
       [
        357.8,
        93.8
       ],
       [
        354.6,
        96.5
       ],
       [
        351.2,
        98.9
       ],
       [
        347.5,
        101
       ],
       [
        343.7,
        102.6
       ],
       [
        339.7,
        103.8
       ],
       [
        335.6,
        104.6
       ],
       [
        331.4,
        105
       ],
       [
        327.2,
        104.9
       ],
       [
        323.1,
        104.4
       ],
       [
        319,
        103.5
       ],
       [
        315,
        102.1
       ],
       [
        311.2,
        100.3
       ],
       [
        307.6,
        98.2
       ],
       [
        304.3,
        95.6
       ],
       [
        301.2,
        92.8
       ],
       [
        298.5,
        89.6
       ],
       [
        296.1,
        86.2
       ],
       [
        294,
        82.5
       ],
       [
        292.4,
        78.7
       ],
       [
        291.2,
        74.7
       ],
       [
        290.4,
        70.6
       ],
       [
        290,
        66.4
       ],
       [
        290.1,
        62.2
       ],
       [
        290.6,
        58.1
       ],
       [
        291.5,
        54
       ],
       [
        292.9,
        50
       ],
       [
        294.7,
        46.2
       ],
       [
        296.8,
        42.6
       ],
       [
        299.4,
        39.3
       ],
       [
        302.2,
        36.2
       ],
       [
        305.4,
        33.5
       ],
       [
        308.8,
        31.1
       ],
       [
        312.5,
        29
       ],
       [
        316.3,
        27.4
       ],
       [
        320.3,
        26.2
       ]
      ],
      {
       "w": 3
      }
     ],
     [
      "t",
      330,
      125,
      "slit along its length",
      {
       "s": 12,
       "m": 1
      }
     ]
    ]
   },
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A bracket is 10 N/µm stiff on its own, and it bolts to a mount that is also 10 N/µm stiff. What stiffness does the load see at the bracket tip?",
   "options": [
    "20 N/µm",
    "10 N/µm",
    "5 N/µm",
    "2.5 N/µm"
   ],
   "answer": 2,
   "why": "The bracket and mount deflect one after the other under the same load, so they act as springs in series: 1/k = 1/10 + 1/10, k = 5 N/µm. The system is less stiff than either part.",
   "proof": [
    "Series: the same force passes through both, and their deflections add.",
    "1/k_total = 1/k₁ + 1/k₂ = 0.1 + 0.1 = 0.2, so k_total = 5 N/µm.",
    "The softest element dominates. Making the bracket infinitely stiff only raises the total to 10.",
    "This is why FEA of a part alone, fixed at its bolt holes, over-predicts stiffness: real mounts, joints and bolts add compliance.",
    "Look for the weakest link in the load path before stiffening the part you are designing."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A beam sags under its own weight. Its length is doubled, keeping the same section and supports. How much more does it sag?",
   "options": [
    "2 times",
    "4 times",
    "8 times",
    "16 times"
   ],
   "answer": 3,
   "why": "Self-weight is a uniform load w that does not change with length, and uniform-load deflection goes as wL⁴/EI. Doubling L gives 2⁴ = 16 times the sag.",
   "proof": [
    "w = ρgA, independent of length.",
    "Deflection under a uniform load:  δ = C·wL⁴/(EI).",
    "Double L:  δ grows 16 times.",
    "Compare a point load at the tip: δ ∝ PL³, so 8 times. With self-weight the load also grows with length, adding one more power.",
    "Long spans are limited by self-weight sag long before strength, which is why bridges and long robot arms use deep, hollow sections."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Applied",
   "q": "A thin-walled round tube is replaced by one with twice the diameter and the same wall thickness. How do its bending stiffness and mass change?",
   "options": [
    "Stiffness ×2, mass ×2",
    "Stiffness ×8, mass ×2",
    "Stiffness ×4, mass ×4",
    "Stiffness ×16, mass ×2"
   ],
   "answer": 1,
   "why": "For a thin wall, I ≈ πr³t, so doubling the radius gives 8 times the stiffness. The mass goes with the circumference, so only twice as much.",
   "proof": [
    "Thin-walled tube:  I ≈ π·r³·t.",
    "Double r:  I × 8.",
    "Area ≈ 2π·r·t, so mass × 2.",
    "Stiffness per unit mass × 4.",
    "The limit is local buckling: very thin walls on a large diameter crumple. A common guide is to keep D/t below about 50 for structural tubes."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "For a flat panel that must have a set bending stiffness, which metal gives the lightest panel? (E in GPa and density in g/cm³: steel 200, 7.85; aluminium 69, 2.70; titanium 110, 4.5; magnesium 45, 1.8.)",
   "options": [
    "Steel",
    "Aluminium",
    "Titanium",
    "Magnesium"
   ],
   "answer": 3,
   "why": "For a panel the free variable is thickness, and stiffness goes as E·t³. The lightest panel maximises E^(1/3)/ρ: magnesium 1.98, aluminium 1.52, titanium 1.06, steel 0.74. Light metals win because they can be made much thicker for the same mass.",
   "proof": [
    "Panel stiffness ∝ E·t³. Fixed stiffness means t ∝ E^(−1/3).",
    "Mass ∝ ρ·t ∝ ρ/E^(1/3). Minimise it, or maximise E^(1/3)/ρ.",
    "Steel 5.85/7.85 = 0.74.  Aluminium 4.10/2.70 = 1.52.  Titanium 4.79/4.5 = 1.06.  Magnesium 3.56/1.8 = 1.98.",
    "For a tie rod (fixed geometry, axial) the index is E/ρ, about 25 for all four, so none wins. The answer depends on what you are free to change.",
    "This is why magnesium is used for large thin housings and seat frames, and aluminium for body panels."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Fundamental",
   "q": "A steel part is remade in titanium with exactly the same geometry. How does its deflection under the same load change? (E: steel 200 GPa, titanium 110 GPa.)",
   "options": [
    "It deflects about 1.8 times more",
    "It deflects about the same",
    "It deflects about half as much",
    "It deflects about 3 times more"
   ],
   "answer": 0,
   "why": "Deflection goes as 1/E for the same geometry. 200/110 = 1.8, so the titanium part deflects 1.8 times as much, though it weighs about 43% less.",
   "proof": [
    "δ ∝ 1/(EI), and I is unchanged.",
    "δ_Ti/δ_steel = 200/110 = 1.82.",
    "Mass ratio:  4.5/7.85 = 0.57.",
    "Titanium's advantage is strength-to-weight and corrosion resistance, not stiffness.",
    "To match the steel part's stiffness, add depth: about 22% more height on a rectangular section (1.82^(1/3))."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Design judgment",
   "q": "FEA of a bracket, fixed at its bolt holes, predicts a stiffness of 20 N/µm. On the test rig it measures 12 N/µm. What is the most likely reason?",
   "options": [
    "The material's modulus is 40% lower than the datasheet",
    "The FEA mesh is too fine",
    "The test rig is too stiff",
    "The real bolted joints and rig are not perfectly rigid, so their compliance adds in series"
   ],
   "answer": 3,
   "why": "Fixing the bolt holes in FEA assumes infinitely stiff joints and supports. In reality the bolts, the clamped interface and the fixture all flex, and that compliance adds in series with the part, so the measured stiffness is lower.",
   "proof": [
    "Measured compliance = part + joints + fixture:  1/12 = 1/20 + 1/k_rest, so k_rest ≈ 30 N/µm.",
    "Steel's modulus varies by only a few percent, so a 40% error from the material is unlikely.",
    "Fixes in the model: include the bolts and contact, model the fixture, or apply boundary conditions at the clamped faces rather than the hole edges.",
    "On the rig: measure deflection right at the bracket base to separate part and joint compliance.",
    "Lesson: a stiffness target must define where it is measured from."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  },
  {
   "level": "Trick question",
   "q": "A bracket deflects too much under load. Someone suggests swapping its mild steel (250 MPa yield) for a high-strength steel (700 MPa yield) with the same geometry. Does it help?",
   "options": [
    "Yes, it is nearly three times stiffer",
    "Yes, slightly",
    "No, stiffness depends on E, which is the same for all steels",
    "No, high-strength steel is less stiff"
   ],
   "answer": 2,
   "why": "Deflection depends on E and geometry. All steels have E ≈ 200 GPa whatever their strength, so the stronger steel deflects exactly the same. It only helps if the problem is yielding, not deflection.",
   "proof": [
    "δ ∝ F·L³/(E·I). Yield strength does not appear.",
    "Mild and high-strength steel: E = 200 to 210 GPa for both.",
    "So the deflection is unchanged.",
    "To reduce deflection: increase I (depth, flanges, ribs), shorten the span, add a support, or use a higher-E material.",
    "Strength and stiffness are separate properties: strength is how much load before damage, stiffness is how much it moves."
   ],
   "reported": {
    "kind": "topic",
    "note": "Beam stiffness and deflection are among the most reported topics in Tesla mechanical interviews, including ranking cross-sections and comparing deflection per unit mass. This exact question was not reported.",
    "sources": [
     "mde",
     "me",
     "permass"
    ]
   }
  }
 ]
});
