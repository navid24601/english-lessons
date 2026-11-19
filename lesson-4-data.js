// Lesson 4: prompts, answer keys, explanations, and review examples.
const LESSON = [
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
];
