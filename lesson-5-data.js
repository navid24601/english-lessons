// Lesson 5: questions, answer keys, explanations, and teacher-review models.
const LESSON = [
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
];
