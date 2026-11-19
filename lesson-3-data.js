// Lesson 3: prompts, answer keys, explanations, and teacher-review models.
const LESSON = [
  {
    "title": "Ask it indirectly",
    "intro": "Choose the sentence that asks for the information naturally.",
    "items": [
      {
        "prompt": "At a station, you want to ask a stranger: “Where is platform 4?”",
        "parts": [
          {
            "label": "",
            "options": [
              "Could you tell me where platform 4 is?",
              "Could you tell me where is platform 4?",
              "Could you tell me where platform 4?"
            ],
            "answer": 0,
            "explanation": "The embedded question uses statement word order: platform 4 is."
          }
        ]
      },
      {
        "prompt": "You want to ask a classmate: “When does the workshop start?”",
        "parts": [
          {
            "label": "",
            "options": [
              "Do you know when does the workshop start?",
              "Do you know when the workshop starts?",
              "Do you know when starts the workshop?"
            ],
            "answer": 1,
            "explanation": "After when, use the subject and verb; do not add does."
          }
        ]
      },
      {
        "prompt": "You want to ask a librarian: “How can I renew this book?”",
        "parts": [
          {
            "label": "",
            "options": [
              "Could you explain how can I renew this book?",
              "Could you explain how I renew can this book?",
              "Could you explain how I can renew this book?"
            ],
            "answer": 2,
            "explanation": "The embedded clause is “how I can renew this book”."
          }
        ]
      },
      {
        "prompt": "You want to ask a friend: “Who sent the invitation?”",
        "parts": [
          {
            "label": "",
            "options": [
              "Do you know who sent the invitation?",
              "Do you know who did sent the invitation?",
              "Do you know who the invitation sent?"
            ],
            "answer": 0,
            "explanation": "Here who is the subject of sent, so it comes before the verb."
          }
        ]
      }
    ]
  },
  {
    "title": "Choose the link",
    "intro": "Choose the best way to report each question.",
    "items": [
      {
        "prompt": "The organiser asked Leo: “Are you free on Friday?”",
        "parts": [
          {
            "label": "",
            "options": [
              "The organiser asked Leo that he was free on Friday.",
              "The organiser asked Leo if he was free on Friday.",
              "The organiser asked Leo where he was free on Friday."
            ],
            "answer": 1,
            "explanation": "If introduces a reported yes/no question. Whether is also possible."
          }
        ]
      },
      {
        "prompt": "A visitor asked: “Where is the museum?”",
        "parts": [
          {
            "label": "",
            "options": [
              "The visitor asked if where the museum was.",
              "The visitor asked where was the museum.",
              "The visitor asked where the museum was."
            ],
            "answer": 2,
            "explanation": "Keep where and use statement word order in the reported question."
          }
        ]
      },
      {
        "prompt": "Maya asked: “Did the parcel arrive?”",
        "parts": [
          {
            "label": "",
            "options": [
              "Maya asked whether the parcel had arrived.",
              "Maya asked whether did the parcel arrive.",
              "Maya asked that the parcel arrived."
            ],
            "answer": 0,
            "explanation": "Whether introduces a yes/no question; the auxiliary does not precede the subject."
          }
        ]
      },
      {
        "prompt": "I asked Jo: “Why did you leave early?”",
        "parts": [
          {
            "label": "",
            "options": [
              "I asked Jo if why had they left early.",
              "I asked Jo why they had left early.",
              "I asked Jo why did they leave early."
            ],
            "answer": 1,
            "explanation": "Retain why and use statement word order. They refers to Jo."
          }
        ]
      }
    ]
  },
  {
    "title": "Report the conversation",
    "intro": "Choose the report that preserves the meaning and fits the stated context.",
    "items": [
      {
        "prompt": "Yesterday, Leila said: “I am tired.” Report it later, using a past form.",
        "parts": [
          {
            "label": "",
            "options": [
              "Leila said that I was tired.",
              "Leila said that she was excited.",
              "Leila said that she was tired."
            ],
            "answer": 2,
            "explanation": "She refers to Leila, and was is a natural backshift from am."
          }
        ]
      },
      {
        "prompt": "On Monday, Nima said: “I will call you tomorrow.” Report it on Wednesday to the person Nima addressed.",
        "parts": [
          {
            "label": "",
            "options": [
              "Nima said he would call you the next day.",
              "Nima said you would call him the day before.",
              "Nima said he calls you tomorrow."
            ],
            "answer": 0,
            "explanation": "The next day refers to Tuesday, the day after the original statement."
          }
        ]
      },
      {
        "prompt": "Yesterday, Asha asked me: “Have you finished the report?” Use a past perfect form in your report.",
        "parts": [
          {
            "label": "",
            "options": [
              "Asha asked me whether had I finished the report.",
              "Asha asked me whether I had finished the report.",
              "Asha asked me whether she had finished the report."
            ],
            "answer": 1,
            "explanation": "Use whether plus subject and verb; I refers to the person Asha asked."
          }
        ]
      },
      {
        "prompt": "The teacher says every week: “The class starts at nine.” Report this usual, still-current information.",
        "parts": [
          {
            "label": "",
            "options": [
              "The teacher says does the class start at nine.",
              "The teacher tells the class starts at nine.",
              "The teacher says the class starts at nine."
            ],
            "answer": 2,
            "explanation": "A present reporting verb and present tense suit a current repeated statement."
          }
        ]
      }
    ]
  },
  {
    "title": "Meaning and punctuation",
    "intro": "Choose the answer best supported by each situation.",
    "items": [
      {
        "prompt": "A guide asks a visitor, “Do you know where the lift is?” Which punctuation fits the complete sentence?",
        "parts": [
          {
            "label": "",
            "options": [
              "Do you know where the lift is?",
              "Do you know where the lift is.",
              "Do you know where is the lift."
            ],
            "answer": 0,
            "explanation": "The entire sentence is a direct question, so it ends with a question mark."
          }
        ]
      },
      {
        "prompt": "You report a question as a statement: “She asked where the lift was”. How should it end?",
        "parts": [
          {
            "label": "",
            "options": [
              "She asked where the lift was?",
              "She asked where the lift was.",
              "She asked where was the lift?"
            ],
            "answer": 1,
            "explanation": "The entire sentence is a statement, so use a full stop."
          }
        ]
      },
      {
        "prompt": "Yesterday, Ben said his sister works at a café. You know she still works there. Which report is possible?",
        "parts": [
          {
            "label": "",
            "options": [
              "Ben said his sister does works at a café.",
              "Ben said his sister work at a café.",
              "Ben said his sister works at a café."
            ],
            "answer": 2,
            "explanation": "A present form can remain when the information is still true; a backshifted form can also be possible."
          }
        ]
      },
      {
        "prompt": "A friend says: “I wonder who broke the window.” What information is the friend looking for?",
        "parts": [
          {
            "label": "",
            "options": [
              "The person who broke the window.",
              "The place where the window was bought.",
              "Whether the friend broke the window."
            ],
            "answer": 0,
            "explanation": "Who is the subject of broke and asks for the person responsible."
          }
        ]
      }
    ]
  },
  {
    "title": "Make it personal",
    "intro": "Write about yourself or an invented situation. Your teacher will review your answers.",
    "items": [
      {
        "prompt": "You are visiting a new place. Write a polite indirect question asking where something is.",
        "criterion": "Is the request natural, with appropriate word order in the embedded question? Accept valid variations.",
        "model": "Could you tell me where the nearest bus stop is?"
      },
      {
        "prompt": "Write a polite indirect question asking whether an event or service is available.",
        "criterion": "Does the response form a suitable yes/no indirect question with if or whether?",
        "model": "Do you know if the library is open on Sunday?"
      },
      {
        "prompt": "Imagine someone asked you a question yesterday. Report their question to a friend, making clear who asked whom.",
        "criterion": "Does the reported question keep the intended meaning and use suitable word order and pronouns?",
        "model": "My friend asked me where I had bought my jacket."
      },
      {
        "prompt": "Report something a person said, then report a question they asked. Give enough context to make the meanings clear.",
        "criterion": "Are both the reported statement and question clear, with appropriate pronouns and verb forms? Accept valid alternatives where tense need not shift.",
        "model": "Mina said she was planning a trip and asked whether I wanted to join her."
      }
    ]
  }
];
