// Add lessons to this catalog. Each entry contains its page introduction and tasks.
const LESSONS = [
  {
    "id": 1,
    "title": "Present Perfect Cont.",
    "description": "Continuous and simple forms",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 01 / Grammar review</p><h1>Present Perfect Cont.</h1><p class=\"lead\">Notice the difference between an activity, its duration, and its result.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
      {
        "title": "Read the clues",
        "intro": "Choose the explanation best supported by each situation.",
        "items": [
          {
            "prompt": "Mina comes inside with muddy shoes and a wet coat. She says she has just stopped working outside.",
            "parts": [
              {
                "label": "What has probably been happening?",
                "options": [
                  "She has been gardening in the rain.",
                  "She has finished planting every flower.",
                  "She has stayed indoors all afternoon."
                ],
                "answer": 0,
                "explanation": "The mud and wet coat are present evidence of recent gardening. They do not tell us that every flower is planted."
              }
            ]
          },
          {
            "prompt": "For the last three months, Leo has been taking the bus to college while his bike is being repaired.",
            "parts": [
              {
                "label": "Which conclusion is supported?",
                "options": [
                  "He took the bus only once.",
                  "He has travelled by bus repeatedly over a period of time.",
                  "His bike was repaired three months ago."
                ],
                "answer": 1,
                "explanation": "“For the last three months” describes repeated journeys over a period, not a single journey."
              }
            ]
          },
          {
            "prompt": "Ari says, “I’ve been reading this novel all evening.” There is still a bookmark halfway through it.",
            "parts": [
              {
                "label": "What do we know?",
                "options": [
                  "Ari has finished the novel.",
                  "Ari has spent time reading; the novel is not necessarily finished.",
                  "Ari started the novel this morning."
                ],
                "answer": 1,
                "explanation": "The sentence focuses on time spent reading. It does not claim the book is finished."
              }
            ]
          },
          {
            "prompt": "Sam is out of breath after running upstairs. A friend says, “You’ve been running!”",
            "parts": [
              {
                "label": "Which interpretation fits?",
                "options": [
                  "Sam must still be running now.",
                  "Sam has recently been running, even though the activity has stopped.",
                  "Sam has never run before."
                ],
                "answer": 1,
                "explanation": "Present evidence can point to a recent activity that has already stopped."
              }
            ]
          }
        ]
      },
      {
        "title": "Choose and explain",
        "intro": "For each situation, choose a sentence and the meaning it communicates. Each choice earns one point.",
        "items": [
          {
            "prompt": "The club needs exactly 20 posters. They are all printed and ready to collect.",
            "parts": [
              {
                "label": "Choose the sentence.",
                "options": [
                  "We’ve printed 20 posters.",
                  "We’ve been printing posters for an hour."
                ],
                "answer": 0,
                "explanation": "The simple form states the completed quantity: all 20 posters are ready."
              },
              {
                "label": "What does your sentence emphasise?",
                "options": [
                  "The amount of time spent printing.",
                  "The completed number of posters.",
                  "A future plan to print."
                ],
                "answer": 1,
                "explanation": "The key fact is the finished quantity, not how long printing took."
              }
            ]
          },
          {
            "prompt": "The kitchen smells of bread. Noor has just put a batch in the oven; it is not ready yet. Focus on the recent activity behind the smell.",
            "parts": [
              {
                "label": "Choose the sentence.",
                "options": [
                  "Noor has baked three loaves.",
                  "Noor has been baking bread."
                ],
                "answer": 1,
                "explanation": "The continuous form highlights recent activity behind the present evidence; no completed quantity is given."
              },
              {
                "label": "What does your sentence emphasise?",
                "options": [
                  "A completed number of loaves.",
                  "The recent activity that explains the smell.",
                  "A permanent preference for bread."
                ],
                "answer": 1,
                "explanation": "The smell provides evidence of the recent baking activity."
              }
            ]
          },
          {
            "prompt": "Jay’s phone screen is fixed and working again. The repair is complete; focus on its result.",
            "parts": [
              {
                "label": "Choose the sentence.",
                "options": [
                  "Jay has repaired the phone screen.",
                  "Jay has been repairing the phone screen for an hour."
                ],
                "answer": 0,
                "explanation": "The simple form communicates the completed repair and its result."
              },
              {
                "label": "What does your sentence emphasise?",
                "options": [
                  "The finished repair and its result.",
                  "The length of the repair process.",
                  "An activity that has not yet begun."
                ],
                "answer": 0,
                "explanation": "The phone works now because the repair is complete."
              }
            ]
          },
          {
            "prompt": "Ella met her closest friend in 2020, and they are still friends. Describe the state of knowing that person.",
            "parts": [
              {
                "label": "Choose the sentence.",
                "options": [
                  "Ella has been knowing her friend since 2020.",
                  "Ella has known her friend since 2020."
                ],
                "answer": 1,
                "explanation": "“Know” is a stative verb here, so the simple form is natural. The friendship continues."
              },
              {
                "label": "What does your sentence communicate?",
                "options": [
                  "Their friendship ended in 2020.",
                  "A state that began in 2020 and continues.",
                  "A single meeting that lasted one day."
                ],
                "answer": 1,
                "explanation": "“Since 2020” marks the beginning of a state that still holds."
              }
            ]
          }
        ]
      },
      {
        "title": "Make it personal",
        "intro": "Write about yourself or invent a person. Your teacher will review your answers.",
        "items": [
          {
            "prompt": "Describe an activity you or your character are still doing, and say how long it has been going on.",
            "criterion": "Does the sentence describe an ongoing activity and its duration using a suitable present perfect continuous form?",
            "model": "I’ve been learning to play the guitar for six months."
          },
          {
            "prompt": "Imagine someone notices evidence of a recent activity: a smell, a mess, tiredness, or something else. Explain the evidence.",
            "criterion": "Does the recent activity plausibly explain the present evidence? Is the continuous form appropriate?",
            "model": "My hands are covered in paint because I’ve been painting my room."
          },
          {
            "prompt": "Describe a completed achievement or a specific quantity you or your character have achieved.",
            "criterion": "Does the answer express a completed achievement or quantity with an appropriate present perfect simple form?",
            "model": "I’ve finished three chapters of my comic."
          },
          {
            "prompt": "Describe time spent on an activity and contrast it with what has been achieved so far. Write one or two sentences.",
            "criterion": "Does the answer distinguish time spent on an activity from the result or quantity achieved, using suitable forms?",
            "model": "I’ve been practising the song for two hours, and I’ve learned the first verse."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Study and Learning Vocabulary",
    "description": "Collocations for study and education",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 02 / Vocabulary review</p><h1>Study and Learning Vocabulary</h1><p class=\"lead\">Practise useful collocations for study, courses and education.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
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
    ]
  },
  {
    "id": 3,
    "title": "Indirect and Reported Speech",
    "description": "Indirect questions and reporting speech",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 03 / Grammar review</p><h1>Indirect and Reported Speech</h1><p class=\"lead\">Practise reporting what people say and asking indirect questions.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
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
    ]
  },
  {
    "id": 4,
    "title": "Relationships",
    "description": "Vocabulary and collocations",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 04 / Vocabulary review</p><h1>Relationships</h1><p class=\"lead\">Practise vocabulary for friendships and relationships.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
      {
        "title": "Friendship in context",
        "intro": "Choose the phrase that fits.",
        "items": [
          {
            "prompt": "After joining a climbing club, Saba met people and began new friendships. She managed to ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "make friends",
                  "find friendships",
                  "take friends"
                ],
                "answer": 0,
                "explanation": "Make friends means begin friendships."
              }
            ]
          },
          {
            "prompt": "Two people met on a train and soon started a friendship. They ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "accepted a friendship",
                  "struck up a friendship",
                  "kept up an acquaintance"
                ],
                "answer": 1,
                "explanation": "Strike up a friendship means begin one."
              }
            ]
          },
          {
            "prompt": "After years of sharing experiences, their friendship became stronger. Their friendship ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "withdrew",
                  "returned",
                  "grew"
                ],
                "answer": 2,
                "explanation": "A friendship can grow as the relationship strengthens."
              }
            ]
          },
          {
            "prompt": "Working together on the project made their friendship stronger. The project helped to ___ it.",
            "parts": [
              {
                "label": "",
                "options": [
                  "cement",
                  "accept",
                  "lose"
                ],
                "answer": 0,
                "explanation": "Cement a friendship means strengthen it."
              }
            ]
          },
          {
            "prompt": "Mina and I both know and are friends with Tara. Tara is one of our ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "casual proposals",
                  "mutual friends",
                  "returned friends"
                ],
                "answer": 1,
                "explanation": "A mutual friend is a friend shared by two people."
              }
            ]
          },
          {
            "prompt": "I know my neighbour’s name, but we rarely talk and do not know each other well. We are ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "close friends",
                  "the loves of each other’s lives",
                  "casual acquaintances"
                ],
                "answer": 2,
                "explanation": "A casual acquaintance is someone you know only a little."
              }
            ]
          },
          {
            "prompt": "Sam and Alex always enjoy spending time together and support each other. They ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "have a good relationship",
                  "have a good proposal",
                  "strike a good relationship"
                ],
                "answer": 0,
                "explanation": "Have a good relationship describes a positive connection."
              }
            ]
          },
          {
            "prompt": "After the course ends, they plan to continue communicating. They will ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "lose contact",
                  "keep in touch",
                  "spoil a friendship"
                ],
                "answer": 1,
                "explanation": "Keep in touch means remain in contact."
              }
            ]
          }
        ]
      },
      {
        "title": "Read between the lines",
        "intro": "Choose the conclusion supported by each situation.",
        "items": [
          {
            "prompt": "Two close friends argued. Later, they stopped calling and no longer know how to reach each other.",
            "parts": [
              {
                "label": "",
                "options": [
                  "They kept in contact.",
                  "They accepted a proposal.",
                  "They lost touch."
                ],
                "answer": 2,
                "explanation": "Lose touch means stop being in contact."
              }
            ]
          },
          {
            "prompt": "Ana was worried that a serious disagreement would damage her friendship with Kim.",
            "parts": [
              {
                "label": "",
                "options": [
                  "The disagreement might spoil their friendship.",
                  "The disagreement definitely cemented their friendship.",
                  "Ana and Kim had never met."
                ],
                "answer": 0,
                "explanation": "Spoil a friendship means damage it; the outcome is not stated."
              }
            ]
          },
          {
            "prompt": "During a long volunteer project, two classmates gradually became good friends.",
            "parts": [
              {
                "label": "",
                "options": [
                  "They accepted a friendship.",
                  "They developed a friendship.",
                  "They lost contact before meeting."
                ],
                "answer": 1,
                "explanation": "Develop a friendship describes a friendship forming over time."
              }
            ]
          },
          {
            "prompt": "Two friends say their connection has become especially strong over the years.",
            "parts": [
              {
                "label": "",
                "options": [
                  "They are only casual acquaintances.",
                  "They have necessarily fallen in love.",
                  "They are close friends."
                ],
                "answer": 2,
                "explanation": "Close friends have a strong friendship; this does not imply romance."
              }
            ]
          },
          {
            "prompt": "Ravi felt an immediate romantic attraction when he met Lee for the first time.",
            "parts": [
              {
                "label": "",
                "options": [
                  "For Ravi, it was love at first sight.",
                  "Ravi accepted a proposal.",
                  "Ravi had already lost contact with Lee."
                ],
                "answer": 0,
                "explanation": "Love at first sight describes immediate romantic love on first meeting."
              }
            ]
          },
          {
            "prompt": "A character loves someone deeply, but that person does not feel the same way.",
            "parts": [
              {
                "label": "",
                "options": [
                  "They have both accepted a proposal.",
                  "The character’s love is not returned.",
                  "Their friendship has necessarily ended."
                ],
                "answer": 1,
                "explanation": "Love is returned when the other person loves the first person in the same way."
              }
            ]
          }
        ]
      },
      {
        "title": "Choose the expression",
        "intro": "Complete each situation.",
        "items": [
          {
            "prompt": "A character describes falling ___ in love with someone.",
            "parts": [
              {
                "label": "",
                "options": [
                  "madly",
                  "casually",
                  "mutually at sight"
                ],
                "answer": 0,
                "explanation": "Fall madly in love emphasises strong romantic feeling."
              }
            ]
          },
          {
            "prompt": "When Alex proposed marriage, Robin said yes. Robin ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "made the acquaintance",
                  "accepted the proposal",
                  "lost the commitment"
                ],
                "answer": 1,
                "explanation": "Accept a proposal means agree to a marriage proposal."
              }
            ]
          },
          {
            "prompt": "Two partners decided to make a serious promise to support their relationship. They decided to ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "make a casual acquaintance",
                  "spoil a commitment",
                  "make a commitment"
                ],
                "answer": 2,
                "explanation": "Make a commitment means make a serious promise or decision."
              }
            ]
          },
          {
            "prompt": "In a story, Jo calls her partner the most important romantic partner in her life: “You are the ___.”",
            "parts": [
              {
                "label": "",
                "options": [
                  "love of my life",
                  "friend of my sight",
                  "commitment of my contact"
                ],
                "answer": 0,
                "explanation": "The love of my life refers to a particularly important romantic partner."
              }
            ]
          },
          {
            "prompt": "In the story, a character says their love does not depend on the other person’s achievements or mistakes: “I love you ___.”",
            "parts": [
              {
                "label": "",
                "options": [
                  "mutually friends",
                  "unconditionally",
                  "at first relationship"
                ],
                "answer": 1,
                "explanation": "Love unconditionally means love without conditions."
              }
            ]
          },
          {
            "prompt": "A married character has a secret romantic or sexual relationship with someone else. In the story, the character ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "keeps in contact",
                  "makes a proposal",
                  "has an affair"
                ],
                "answer": 2,
                "explanation": "Have an affair can describe a secret romantic or sexual relationship outside a committed relationship."
              }
            ]
          }
        ]
      },
      {
        "title": "Write your own story",
        "intro": "Write about yourself or invent characters.",
        "items": [
          {
            "prompt": "Describe how you or a character first became friends with someone.",
            "criterion": "Does the response describe the beginning of a friendship using a suitable collocation? Accept valid variations.",
            "model": "I struck up a friendship with a classmate on a school trip."
          },
          {
            "prompt": "Describe a friendship that changed over time and what affected it.",
            "criterion": "Does the response explain how a friendship changed using a suitable collocation? Accept valid variations.",
            "model": "Our friendship grew as we worked on a project together."
          },
          {
            "prompt": "Explain how you or a character stay in contact with someone, or why contact was lost.",
            "criterion": "Does the response use an appropriate expression about contact? Accept valid variations.",
            "model": "We keep in touch through messages, even though we live far apart."
          },
          {
            "prompt": "Write a short fictional scene about a relationship using at least two expressions from the lesson.",
            "criterion": "Are at least two relevant expressions used naturally and clearly? Accept any appropriate relationship and valid variations.",
            "model": "Two mutual friends introduced them, and they soon formed a close friendship."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Prepositions of Time and Place",
    "description": "At, in and on",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 05 / Grammar review</p><h1>Prepositions of Time and Place</h1><p class=\"lead\">Practise using at, in and on for time and place.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
      {
        "title": "Everyday plans",
        "intro": "Choose the best option.",
        "items": [
          {
            "prompt": "The film starts ___ 7:30.",
            "parts": [
              {
                "label": "",
                "options": [
                  "at",
                  "in",
                  "on"
                ],
                "answer": 0,
                "explanation": "Use at with a clock time."
              }
            ]
          },
          {
            "prompt": "We have a lesson ___ Wednesday.",
            "parts": [
              {
                "label": "",
                "options": [
                  "in",
                  "on",
                  "at"
                ],
                "answer": 1,
                "explanation": "Use on with a day of the week."
              }
            ]
          },
          {
            "prompt": "My birthday is ___ September.",
            "parts": [
              {
                "label": "",
                "options": [
                  "on",
                  "at",
                  "in"
                ],
                "answer": 2,
                "explanation": "Use in with a month."
              }
            ]
          },
          {
            "prompt": "The keys are inside my bag: they are ___ the bag.",
            "parts": [
              {
                "label": "",
                "options": [
                  "in",
                  "on",
                  "at"
                ],
                "answer": 0,
                "explanation": "In expresses a location inside the bag."
              }
            ]
          },
          {
            "prompt": "The phone is resting on the surface of the table: it is ___ the table.",
            "parts": [
              {
                "label": "",
                "options": [
                  "in",
                  "on",
                  "at"
                ],
                "answer": 1,
                "explanation": "On describes contact with the table’s surface."
              }
            ]
          },
          {
            "prompt": "Let’s meet beside the entrance. I’ll wait ___ the entrance.",
            "parts": [
              {
                "label": "",
                "options": [
                  "in",
                  "on",
                  "at"
                ],
                "answer": 2,
                "explanation": "At identifies the entrance as the meeting point."
              }
            ]
          }
        ]
      },
      {
        "title": "Make the arrangements",
        "intro": "Choose the expression that fits each situation.",
        "items": [
          {
            "prompt": "Your friend’s train leaves at 9:00. She is already inside the train.",
            "parts": [
              {
                "label": "",
                "options": [
                  "She is on the train.",
                  "She is at the train.",
                  "She is in the station building."
                ],
                "answer": 0,
                "explanation": "On the train describes her as a passenger aboard it."
              }
            ]
          },
          {
            "prompt": "Your friend is sitting inside a car and waiting for you.",
            "parts": [
              {
                "label": "",
                "options": [
                  "She is on the car.",
                  "She is in the car.",
                  "She is at the car park entrance."
                ],
                "answer": 1,
                "explanation": "In the car describes being inside it."
              }
            ]
          },
          {
            "prompt": "The concert takes place in the evening of Friday 12 June.",
            "parts": [
              {
                "label": "",
                "options": [
                  "It is in Friday evening.",
                  "It is at Friday evening.",
                  "It is on Friday evening."
                ],
                "answer": 2,
                "explanation": "Use on with a named day plus part of the day."
              }
            ]
          },
          {
            "prompt": "You will meet at the café entrance; your friend has not gone inside.",
            "parts": [
              {
                "label": "",
                "options": [
                  "I’m waiting at the entrance.",
                  "I’m waiting in the entrance hall.",
                  "I’m sitting on the roof."
                ],
                "answer": 0,
                "explanation": "At the entrance identifies the meeting point."
              }
            ]
          },
          {
            "prompt": "A class meets the day after today.",
            "parts": [
              {
                "label": "",
                "options": [
                  "We meet on tomorrow.",
                  "We meet tomorrow.",
                  "We meet in tomorrow."
                ],
                "answer": 1,
                "explanation": "Tomorrow normally takes no preceding at, in, or on."
              }
            ]
          },
          {
            "prompt": "The film was scheduled for 6:00 and started at 6:00.",
            "parts": [
              {
                "label": "",
                "options": [
                  "It started in time to miss the beginning.",
                  "It started at time.",
                  "It started on time."
                ],
                "answer": 2,
                "explanation": "On time means at the scheduled time."
              }
            ]
          }
        ]
      },
      {
        "title": "Put it into words",
        "intro": "Write about your life or an invented situation. Your teacher will review your answers.",
        "items": [
          {
            "prompt": "Describe an event with a specific day, a clock time and a meeting point.",
            "criterion": "Does the response use appropriate time and place expressions for the intended meaning? Accept valid alternatives.",
            "model": "We’re meeting at the library entrance on Friday at six."
          },
          {
            "prompt": "Describe where two objects are: one inside something and one on a surface.",
            "criterion": "Does the response clearly distinguish an enclosed location from a surface using suitable prepositions?",
            "model": "My notebook is in my bag, and my phone is on the desk."
          },
          {
            "prompt": "Describe a journey using two different types of transport and say when it happens.",
            "criterion": "Are the transport and time expressions natural in context? Accept valid alternatives.",
            "model": "On Monday morning, I’ll travel on the train and then in my friend’s car."
          },
          {
            "prompt": "Write a short story in which someone arrives in time to do something, but an event does not start on time.",
            "criterion": "Does the response distinguish arriving early enough from happening at the scheduled time? Accept valid alternatives.",
            "model": "I arrived in time to find a seat, but the concert didn’t start on time."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "News",
    "description": "Vocabulary and collocations",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 06 / Vocabulary review</p><h1>News</h1><p class=\"lead\">Collocations for following and reporting the news.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div>",
    "tasks": [
      {
        "title": "Read the newsroom",
        "intro": "Choose the update that matches the facts.",
        "items": [
          {
            "prompt": "The council planned to announce a closure on Friday. On Tuesday, an employee shared the confidential document with a reporter. What happened on Tuesday?",
            "parts": [
              {
                "label": "",
                "options": [
                  "News of the closure leaked out.",
                  "The council gave the go-ahead for the closure.",
                  "The council held a news conference about the closure."
                ],
                "answer": 0,
                "explanation": "Leaked out signals that information became known despite an intention to keep it secret. No approval or conference is mentioned."
              }
            ]
          },
          {
            "prompt": "A local paper has investigated a housing problem for a month. Tomorrow it will publish the completed report. Which action is scheduled?",
            "parts": [
              {
                "label": "",
                "options": [
                  "The paper will hold talks about the housing problem.",
                  "The paper will run a story about the housing problem.",
                  "The paper will give the go-ahead to the housing plans."
                ],
                "answer": 1,
                "explanation": "Run a story means publish it. Investigating a problem does not mean negotiating or approving plans."
              }
            ]
          },
          {
            "prompt": "A routine local report suddenly becomes the main story across national newspapers. Which phrase describes this change in attention?",
            "parts": [
              {
                "label": "",
                "options": [
                  "The report outlined plans.",
                  "News of the report came in.",
                  "The report hit the headlines."
                ],
                "answer": 2,
                "explanation": "Hit the headlines means become prominent news. News coming in describes information arriving, not its prominence."
              }
            ]
          },
          {
            "prompt": "During a scheduled public briefing, an agency sends the newsroom a verified update. Which phrase describes its arrival?",
            "parts": [
              {
                "label": "",
                "options": [
                  "More news has just come in.",
                  "More news has just leaked out.",
                  "The story has just become front-page news."
                ],
                "answer": 0,
                "explanation": "News comes in when information reaches the newsroom. A scheduled public update is not a leak, and arrival says nothing about front-page placement."
              }
            ]
          },
          {
            "prompt": "An editor has five minutes before a meeting and scans several pages, reading only a few lines on each. What is the editor doing?",
            "parts": [
              {
                "label": "",
                "options": [
                  "Running a story in the newspaper.",
                  "Flicking through the newspaper.",
                  "Keeping readers informed through the newspaper."
                ],
                "answer": 1,
                "explanation": "Flick through describes looking quickly through pages. It does not imply publishing or reporting to readers."
              }
            ]
          },
          {
            "prompt": "The online report was updated at 14:05, after earlier updates at 12:00 and 13:30. Which label best identifies the 14:05 version?",
            "parts": [
              {
                "label": "",
                "options": [
                  "The front-page headline.",
                  "The last item in the bulletin.",
                  "The latest news."
                ],
                "answer": 2,
                "explanation": "Latest identifies the most recent information. Front-page refers to placement; last item refers to position in a sequence."
              }
            ]
          }
        ]
      },
      {
        "title": "Edit the news update",
        "intro": "Choose the wording that preserves the intended meaning.",
        "items": [
          {
            "prompt": "The mayor described a proposed recycling scheme in broad terms. The scheme has not started, and no decision on funding has been made. The mayor ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "outlined plans for the scheme",
                  "launched a campaign for the scheme",
                  "gave the go-ahead to the scheme"
                ],
                "answer": 0,
                "explanation": "Outline plans means describe the main features. Launch signals a start; give the go-ahead signals permission to proceed."
              }
            ]
          },
          {
            "prompt": "Officials have now approved the bridge project. The engineers may begin construction. Officials ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "held talks on the project",
                  "gave the go-ahead to the project",
                  "kept a close watch on the project"
                ],
                "answer": 1,
                "explanation": "Give the go-ahead means authorise something to proceed. Talks and monitoring alone do not establish approval."
              }
            ]
          },
          {
            "prompt": "After months of preparation, the first posters and adverts appeared today. The health agency ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "outlined plans for a campaign",
                  "attracted attention to a proposal",
                  "launched a campaign"
                ],
                "answer": 2,
                "explanation": "Launch a campaign means start it. The preparation is over and public activity has begun."
              }
            ]
          },
          {
            "prompt": "The union and management could not reach agreement and stopped negotiating. Their talks ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "broke down",
                  "resumed",
                  "continued"
                ],
                "answer": 0,
                "explanation": "Talks break down when negotiations fail. Resumed means restarted, and continued means carried on; neither fits the decision to stop."
              }
            ]
          },
          {
            "prompt": "The company and local residents will meet to negotiate. The meeting includes everyone directly affected by the proposal. They will ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "hold a news conference for all reporters",
                  "hold talks with all interested parties",
                  "run a story for all newspaper readers"
                ],
                "answer": 1,
                "explanation": "Hold talks describes negotiation. Interested parties are people or groups connected with the issue, not just people who find it interesting."
              }
            ]
          },
          {
            "prompt": "Reporters will monitor the situation carefully and publish updates as details become available. They will ___.",
            "parts": [
              {
                "label": "",
                "options": [
                  "run an initial story and then wait for a final report",
                  "outline their reporting plans without publishing further updates",
                  "keep a close watch on events and keep readers informed"
                ],
                "answer": 2,
                "explanation": "Keep a close watch means monitor carefully; keep readers informed means continue supplying information. The other choices omit ongoing monitoring or updates."
              }
            ]
          }
        ]
      },
      {
        "title": "File your own report",
        "intro": "Write brief updates for a fictional news site.",
        "items": [
          {
            "prompt": "A secret plan becomes public before its scheduled announcement. Write two sentences about how the news became known and the attention it received.",
            "criterion": "Does the update distinguish disclosure from publicity and use at least two suitable news collocations naturally?",
            "model": "News of the plan leaked out on Monday. By Tuesday, the story had made headlines across the country."
          },
          {
            "prompt": "A local project moves from discussion to approval. Write two or three sentences showing the stages, without implying it has already been built.",
            "criterion": "Does the sequence distinguish discussion, plans and permission, with at least two natural news collocations?",
            "model": "The council held talks with interested parties and outlined plans for a new sports centre. It then gave the go-ahead to the project."
          },
          {
            "prompt": "A fictional storm damages a building. Write a two-sentence update about the damage and the people affected, using news-style collocations.",
            "criterion": "Are at least two news collocations used accurately? Check that statements about damage or loss of life are clear and internally consistent.",
            "model": "Lightning struck a community centre, which caught fire. Firefighters rescued everyone inside, and there was no loss of life."
          },
          {
            "prompt": "A fictional transport strike is unresolved. Write two or three sentences explaining the failed negotiations and how your newsroom will follow developments.",
            "criterion": "Does the report use at least two news collocations naturally and distinguish failed negotiations from ongoing monitoring?",
            "model": "Talks between drivers and managers broke down last night. We are keeping a close watch on the situation and will keep you informed as more news comes in."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Gerunds and Infinitives",
    "description": "Grammar review · B1",
    "intro": "<div class=\"lesson-intro\"><p class=\"kicker\">Lesson 07 / Grammar review / B1</p><h1>Gerunds and Infinitives</h1><p class=\"lead\">Talk about activities, choices and plans.</p><p class=\"muted\">Progress is saved in this browser. Your teacher reviews your writing here on the same browser.</p></div><section class=\"grammar-reference\" aria-labelledby=\"patterns-heading\"><h2 id=\"patterns-heading\">Verb patterns</h2><div class=\"grammar-table-scroll\" role=\"region\" aria-label=\"Verb patterns reference\" tabindex=\"0\"><table><caption>Common patterns when one verb follows another</caption><thead><tr><th scope=\"col\">Pattern</th><th scope=\"col\">Verbs and phrases</th><th scope=\"col\">Examples</th></tr></thead><tbody><tr><th scope=\"row\">Gerund: verb + -ing</th><td>avoid, discuss, dislike, don’t mind, enjoy, feel like, keep, practice, quit, suggest</td><td>I enjoy cooking.<br>We discussed moving house.</td></tr><tr><th scope=\"row\">Infinitive: to + verb</th><td>agree, choose, decide, expect, hope, learn, need, seem, want, wish, would like</td><td>We agreed to meet.<br>I’d like to join you.</td></tr><tr><th scope=\"row\">Either form</th><td>begin, can’t stand, continue, hate, like, love, prefer, start, try</td><td>I like walking.<br>I like to walk.</td></tr></tbody></table></div><p class=\"muted\">With the other verbs in “Either form”, both forms can work. Sometimes the focus changes. Use <strong>to + verb</strong> after <strong>would like</strong>: “I’d like to go.”</p></section><section class=\"meaning-reference\" aria-labelledby=\"meaning-heading\"><h2 id=\"meaning-heading\">Same verb, different meaning</h2><p class=\"muted\">With these four verbs, the form changes the meaning.</p><article class=\"meaning-card\" aria-labelledby=\"meaning-stop\"><h3 id=\"meaning-stop\">Stop</h3><div class=\"meaning-pair\"><div class=\"meaning-side\"><h4>Stop + -ing</h4><p>End an activity.</p><p class=\"meaning-example\">We stopped talking when the film began.</p><p class=\"muted\">We were talking, and then we became quiet.</p></div><div class=\"meaning-side\"><h4>Stop + to + verb</h4><p>Pause one activity to do something else.</p><p class=\"meaning-example\">We stopped to talk to a friend on our way home.</p><p class=\"muted\">We were walking home. We paused because we wanted to talk.</p></div></div></article><article class=\"meaning-card\" aria-labelledby=\"meaning-try\"><h3 id=\"meaning-try\">Try</h3><div class=\"meaning-pair\"><div class=\"meaning-side\"><h4>Try + -ing</h4><p>Test an idea to see if it helps.</p><p class=\"meaning-example\">I tried drinking less coffee, and I slept better.</p><p class=\"muted\">I changed my habit to see if it helped me sleep.</p></div><div class=\"meaning-side\"><h4>Try + to + verb</h4><p>Make an effort to do something.</p><p class=\"meaning-example\">I tried to open the jar, but the lid was too tight.</p><p class=\"muted\">I made an effort, but I could not open it. “Try to” alone does not tell us if the action was successful.</p></div></div></article><article class=\"meaning-card\" aria-labelledby=\"meaning-remember\"><h3 id=\"meaning-remember\">Remember</h3><div class=\"meaning-pair\"><div class=\"meaning-side\"><h4>Remember + -ing</h4><p>Have a memory of a past action.</p><p class=\"meaning-example\">I remember locking the door before I left.</p><p class=\"muted\">I locked it, and now I can remember doing it.</p></div><div class=\"meaning-side\"><h4>Remember + to + verb</h4><p>Remember a task and then do it.</p><p class=\"meaning-example\">I remembered to lock the door before I left.</p><p class=\"muted\">I did not forget the task, so I locked the door.</p></div></div></article><article class=\"meaning-card\" aria-labelledby=\"meaning-forget\"><h3 id=\"meaning-forget\">Forget</h3><div class=\"meaning-pair\"><div class=\"meaning-side\"><h4>Forget + -ing</h4><p>Not remember a past action or experience.</p><p class=\"meaning-example\">I’ll never forget meeting my best friend on my first day at school.</p><p class=\"muted\">We met in the past. Because I say “never forget”, I mean I will always remember it.</p></div><div class=\"meaning-side\"><h4>Forget + to + verb</h4><p>Not do a task because you do not remember it.</p><p class=\"meaning-example\">I forgot to call Mia yesterday.</p><p class=\"muted\">I planned to call her, but I did not make the call.</p></div></div></article></section>",
    "tasks": [
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
    ]
  }
];
