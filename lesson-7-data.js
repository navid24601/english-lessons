// Lesson 7: B1 grammar practice. Answers and feedback are stored with each prompt.
const LESSON = [
  {
    "title": "Find the right form",
    "intro": "Choose the sentence that fits.",
    "items": [
      {
        "prompt": "You want to spend less time on your phone while studying.",
        "parts": [
          {
            "label": "",
            "options": [
              "I avoid checking my phone during lessons.",
              "I avoid to check my phone during lessons.",
              "I avoid check my phone during lessons."
            ],
            "answer": 0,
            "explanation": "Use the -ing form after avoid: avoid checking."
          }
        ]
      },
      {
        "prompt": "A friend asks if you can wait for five minutes. You are happy to wait.",
        "parts": [
          {
            "label": "",
            "options": [
              "I don’t mind to wait.",
              "I don’t mind waiting.",
              "I don’t mind wait."
            ],
            "answer": 1,
            "explanation": "Don’t mind is followed by an -ing form."
          }
        ]
      },
      {
        "prompt": "You and a friend made a plan to meet after class.",
        "parts": [
          {
            "label": "",
            "options": [
              "We decided meeting after class.",
              "We decided meet after class.",
              "We decided to meet after class."
            ],
            "answer": 2,
            "explanation": "Use to + verb after decide."
          }
        ]
      },
      {
        "prompt": "You want to offer an idea for Saturday.",
        "parts": [
          {
            "label": "",
            "options": [
              "I suggest visiting the new park.",
              "I suggest to visit the new park.",
              "I suggest visit the new park."
            ],
            "answer": 0,
            "explanation": "When a verb follows suggest directly, use -ing."
          }
        ]
      },
      {
        "prompt": "You are learning a skill. You still need more lessons.",
        "parts": [
          {
            "label": "",
            "options": [
              "I’m learning driving.",
              "I’m learning to drive.",
              "I’m learning drive."
            ],
            "answer": 1,
            "explanation": "Use learn to drive when you mean develop the ability to drive."
          }
        ]
      },
      {
        "prompt": "Your friend asks about your plans for next year.",
        "parts": [
          {
            "label": "",
            "options": [
              "I hope finding a new job.",
              "I hope find a new job.",
              "I hope to find a new job."
            ],
            "answer": 2,
            "explanation": "Use to + verb after hope."
          }
        ]
      }
    ]
  },
  {
    "title": "Choose and explain",
    "intro": "Choose a reply and its meaning. Each choice earns one point.",
    "items": [
      {
        "prompt": "Your friend asks, “What do you want to do tonight?” You are in the mood for a film.",
        "parts": [
          {
            "label": "Reply",
            "options": [
              "I feel like watching a film.",
              "I feel like to watch a film.",
              "I feel like watch a film."
            ],
            "answer": 0,
            "explanation": "Use -ing after feel like."
          },
          {
            "label": "Meaning",
            "options": [
              "You have already watched the film.",
              "You want to watch a film now.",
              "You watch a film every night."
            ],
            "answer": 1,
            "explanation": "Feel like doing something describes what you want to do at that moment."
          }
        ]
      },
      {
        "prompt": "A friend asks if you can help on Sunday. You say yes and make a promise.",
        "parts": [
          {
            "label": "Reply",
            "options": [
              "I agreed helping on Sunday.",
              "I agreed to help on Sunday.",
              "I agreed help on Sunday."
            ],
            "answer": 1,
            "explanation": "Use to + verb after agree."
          },
          {
            "label": "Meaning",
            "options": [
              "You are asking your friend for help.",
              "You have already finished helping.",
              "You have said that you will help."
            ],
            "answer": 2,
            "explanation": "Agreeing to help means saying yes to helping."
          }
        ]
      },
      {
        "prompt": "You played a song badly, but you did not give up. You played it again and again.",
        "parts": [
          {
            "label": "Reply",
            "options": [
              "I kept to practise the song.",
              "I kept practise the song.",
              "I kept practising the song."
            ],
            "answer": 2,
            "explanation": "Use -ing after keep to describe continuing or repeating an action."
          },
          {
            "label": "Meaning",
            "options": [
              "You continued to practise.",
              "You chose a song but did not play it.",
              "You stopped practising for the day."
            ],
            "answer": 0,
            "explanation": "Kept practising means you continued, even though it was difficult."
          }
        ]
      },
      {
        "prompt": "You want to ask politely for a seat near the window.",
        "parts": [
          {
            "label": "Reply",
            "options": [
              "I’d like to sit near the window.",
              "I’d like sitting near the window.",
              "I’d like sit near the window."
            ],
            "answer": 0,
            "explanation": "Would like is followed by to + verb."
          },
          {
            "label": "Meaning",
            "options": [
              "You always sit by a window.",
              "You are asking for this seat now.",
              "You sat there on your last visit."
            ],
            "answer": 1,
            "explanation": "Would like expresses a wish or polite request here."
          }
        ]
      }
    ]
  },
  {
    "title": "What does it mean?",
    "intro": "Choose what each sentence tells you.",
    "items": [
      {
        "prompt": "“I tried to open the window.”",
        "parts": [
          {
            "label": "",
            "options": [
              "I opened it as a test to see if the room became cooler.",
              "I made an effort to open it; the sentence does not say if I succeeded.",
              "I decided not to open it."
            ],
            "answer": 1,
            "explanation": "Try to open focuses on the effort. This sentence alone does not say whether the window opened."
          }
        ]
      },
      {
        "prompt": "“The room was hot, so I tried opening the window to see if it helped.”",
        "parts": [
          {
            "label": "",
            "options": [
              "I wanted to open it, but could not move it.",
              "I knew that opening it would not help.",
              "I opened it as a possible way to cool the room."
            ],
            "answer": 2,
            "explanation": "Try opening means test an action to see if it helps. We do not yet know whether it helped."
          }
        ]
      },
      {
        "prompt": "“I began reading the book on the bus.” Which new sentence also works?",
        "parts": [
          {
            "label": "",
            "options": [
              "I began to read the book on the bus.",
              "I began read the book on the bus.",
              "I began to reading the book on the bus."
            ],
            "answer": 0,
            "explanation": "Begin can take -ing or to + verb. Both forms work here."
          }
        ]
      },
      {
        "prompt": "“I love cooking for my friends.” Which new sentence also works?",
        "parts": [
          {
            "label": "",
            "options": [
              "I love cook for my friends.",
              "I love to cook for my friends.",
              "I love to cooking for my friends."
            ],
            "answer": 1,
            "explanation": "Love can take -ing or to + verb. Both are natural in this situation."
          }
        ]
      }
    ]
  },
  {
    "title": "Make it personal",
    "intro": "Write about yourself or invent a person.",
    "items": [
      {
        "prompt": "Describe an activity you enjoy and one you avoid. Say why.",
        "criterion": "Are enjoy and avoid followed by suitable -ing forms? Is the meaning clear?",
        "model": "I enjoy cooking because I can try new food. I avoid eating late because I don’t sleep well."
      },
      {
        "prompt": "Describe a skill you want to learn and something you have decided to do to learn it.",
        "criterion": "Are want, learn and decide used with suitable to-infinitives? Accept other valid wording.",
        "model": "I want to learn to swim. I’ve decided to take lessons at the local pool."
      },
      {
        "prompt": "Suggest an activity for a free afternoon. Add something you would like to do afterwards.",
        "criterion": "Is suggest followed by -ing, or another valid structure? Is would like followed by a suitable to-infinitive?",
        "model": "I suggest going for a walk. Afterwards, I’d like to get a drink at a café."
      },
      {
        "prompt": "Describe a problem. Say what you tried doing to solve it and whether it helped.",
        "criterion": "Does try + -ing describe testing a possible solution? Is the result clear? Accept valid variations.",
        "model": "I couldn’t sleep, so I tried reading a book. It helped me relax, and I fell asleep soon after."
      }
    ]
  }
];
