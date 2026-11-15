// Lesson 2: questions, answer keys, explanations and teacher-review models.
const LESSON = [
  {
    "title": "Upgrade the student profile",
    "intro": "Choose the best phrase to replace the informal expression in each sentence.",
    "items": [
      {
        "prompt": "At the end of term, Amir will do an exam in biology.",
        "parts": [
          {
            "label": "",
            "options": [
              "award an exam",
              "take an exam",
              "pass an exam"
            ],
            "answer": 1,
            "explanation": "Sit and take both mean participate in an exam; passing means succeeding."
          }
        ]
      },
      {
        "prompt": "Their class did a research project into local history.",
        "parts": [
          {
            "label": "",
            "options": [
              "awarded a research project",
              "received a research project",
              "conducted a research project"
            ],
            "answer": 2,
            "explanation": "Carry out and conduct both work naturally with a research project."
          }
        ]
      },
      {
        "prompt": "Leila decided to do a programming course.",
        "parts": [
          {
            "label": "",
            "options": [
              "take a course",
              "award a course",
              "receive a course"
            ],
            "answer": 0,
            "explanation": "Enrol on means join a course; take means study it."
          }
        ]
      },
      {
        "prompt": "Mina is doing a degree in engineering.",
        "parts": [
          {
            "label": "",
            "options": [
              "giving a degree",
              "studying for a degree",
              "receiving a degree yesterday"
            ],
            "answer": 1,
            "explanation": "Study for and take can describe pursuing a degree."
          }
        ]
      },
      {
        "prompt": "At school, Ben did history.",
        "parts": [
          {
            "label": "",
            "options": [
              "awarded history",
              "submitted history",
              "studied history"
            ],
            "answer": 2,
            "explanation": "Study and take can describe a subject at school."
          }
        ]
      },
      {
        "prompt": "Students must do an essay.",
        "parts": [
          {
            "label": "",
            "options": [
              "write an essay",
              "conduct an essay",
              "attend an essay"
            ],
            "answer": 0,
            "explanation": "We write an essay or assignment."
          }
        ]
      },
      {
        "prompt": "A professor did a lecture on climate change.",
        "parts": [
          {
            "label": "",
            "options": [
              "received a lecture",
              "gave a lecture",
              "handed in a lecture"
            ],
            "answer": 1,
            "explanation": "Give a lecture describes presenting one."
          }
        ]
      },
      {
        "prompt": "She got a diploma after finishing her course.",
        "parts": [
          {
            "label": "",
            "options": [
              "attended a diploma",
              "held a diploma exam",
              "was awarded a diploma"
            ],
            "answer": 2,
            "explanation": "Obtain and be awarded both describe receiving a qualification."
          }
        ]
      },
      {
        "prompt": "His assignment got an A grade.",
        "parts": [
          {
            "label": "",
            "options": [
              "received an A grade",
              "conducted an A grade",
              "withdrew an A grade"
            ],
            "answer": 0,
            "explanation": "Work can receive or be given a grade."
          }
        ]
      },
      {
        "prompt": "She wants to get a teaching qualification.",
        "parts": [
          {
            "label": "",
            "options": [
              "give a qualification notebook",
              "obtain a qualification",
              "submit a qualification course"
            ],
            "answer": 1,
            "explanation": "Obtain and acquire can both be used with a qualification."
          }
        ]
      },
      {
        "prompt": "More children now get a basic education.",
        "parts": [
          {
            "label": "",
            "options": [
              "conduct a basic education",
              "hand in a basic education",
              "receive a basic education"
            ],
            "answer": 2,
            "explanation": "Receive an education is a natural collocation."
          }
        ]
      }
    ]
  },
  {
    "title": "Navigate campus life",
    "intro": "Help a student respond to each college message. Choose both the action and the matching expression.",
    "items": [
      {
        "prompt": "The college asks you to be present at every lecture.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Wait for exam results.",
              "Write a final draft instead.",
              "Go to the lectures."
            ],
            "answer": 2,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "attend all the lectures",
              "withdraw from all the lectures",
              "receive a vocabulary notebook"
            ],
            "answer": 0,
            "explanation": "Attend means be present at an event."
          }
        ]
      },
      {
        "prompt": "You have finished all requirements of your course.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Finish the course.",
              "Wait for exam results.",
              "Write a final draft instead."
            ],
            "answer": 0,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "receive a vocabulary notebook",
              "complete the course",
              "enrol on the course"
            ],
            "answer": 1,
            "explanation": "Complete means finish."
          }
        ]
      },
      {
        "prompt": "The notice says next week’s class takes place in Room 405.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Write a final draft instead.",
              "Find the location.",
              "Wait for exam results."
            ],
            "answer": 1,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "the class will be submitted in Room 405",
              "receive a vocabulary notebook",
              "the class will be held in Room 405"
            ],
            "answer": 2,
            "explanation": "A class can be held in a place."
          }
        ]
      },
      {
        "prompt": "The teacher asks you to give them your essay on Friday.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Wait for exam results.",
              "Write a final draft instead.",
              "Give the teacher your essay."
            ],
            "answer": 2,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "hand in the essay",
              "attend the essay",
              "receive a vocabulary notebook"
            ],
            "answer": 0,
            "explanation": "Hand in means give work to a teacher for review."
          }
        ]
      },
      {
        "prompt": "The university asks for your application by Friday.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Send the application.",
              "Wait for exam results.",
              "Write a final draft instead."
            ],
            "answer": 0,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "receive a vocabulary notebook",
              "submit the application",
              "give a lecture to the application"
            ],
            "answer": 1,
            "explanation": "Submit means formally give or send something for consideration."
          }
        ]
      },
      {
        "prompt": "You have decided to leave your course before finishing it.",
        "parts": [
          {
            "label": "What should the student do?",
            "options": [
              "Write a final draft instead.",
              "Leave the course.",
              "Wait for exam results."
            ],
            "answer": 1,
            "explanation": "The message describes this action."
          },
          {
            "label": "Choose the matching expression.",
            "options": [
              "complete the course",
              "receive a vocabulary notebook",
              "withdraw from the course"
            ],
            "answer": 2,
            "explanation": "Withdraw from a course means leave it."
          }
        ]
      }
    ]
  },
  {
    "title": "What does the evidence tell you?",
    "intro": "Choose the conclusion supported by the situation.",
    "items": [
      {
        "prompt": "Nadia sat her exam yesterday. The results arrive next week.",
        "parts": [
          {
            "label": "",
            "options": [
              "She took the exam; we do not know if she passed.",
              "She definitely passed.",
              "She has not taken it yet."
            ],
            "answer": 0,
            "explanation": "Sitting an exam means taking it, not necessarily passing it."
          }
        ]
      },
      {
        "prompt": "Owen has been studying for a degree. He has not graduated yet.",
        "parts": [
          {
            "label": "",
            "options": [
              "He has withdrawn from all education.",
              "He is working towards a degree.",
              "He has already been awarded the degree."
            ],
            "answer": 1,
            "explanation": "Studying for a degree does not mean it has been awarded."
          }
        ]
      },
      {
        "prompt": "Ava enrolled on a course last week. It lasts six months.",
        "parts": [
          {
            "label": "",
            "options": [
              "She has definitely completed it.",
              "She failed the final exam.",
              "She joined the course."
            ],
            "answer": 2,
            "explanation": "Enrolling means joining, not completing."
          }
        ]
      },
      {
        "prompt": "A teacher gave a project an A.",
        "parts": [
          {
            "label": "",
            "options": [
              "The project received an A grade.",
              "The student acquired a teaching qualification.",
              "The class withdrew from an A."
            ],
            "answer": 0,
            "explanation": "A grade is an assessment; a qualification is an award."
          }
        ]
      }
    ]
  },
  {
    "title": "Create a learner’s story",
    "intro": "Write about yourself, or imagine you are a character and write as that person. Use study collocations where they fit. Your teacher will review your work.",
    "items": [
      {
        "prompt": "Describe a course or subject you chose and why you joined it.",
        "criterion": "Does the response describe a course or subject and explain why you chose or joined it, using a suitable study collocation?",
        "model": "I enrolled on a photography course because I wanted to take better pictures."
      },
      {
        "prompt": "Describe your study routine and the steps you take to finish an assignment.",
        "criterion": "Are the study and assignment collocations natural and appropriate?",
        "model": "I keep a vocabulary notebook, write a first draft and then hand in my final draft."
      },
      {
        "prompt": "Describe an achievement and a qualification you hope to gain.",
        "criterion": "Is the achievement clear, and is the qualification expressed naturally?",
        "model": "I passed my exam and hope to obtain a teaching qualification."
      },
      {
        "prompt": "Give another learner advice about studying, feedback or assessment.",
        "criterion": "Is the advice understandable and does it use a relevant collocation naturally?",
        "model": "Do your homework regularly and ask your teacher to give you feedback."
      }
    ]
  }
];
