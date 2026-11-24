// Lesson 6: original practice based on Unit 36, News. Keys and models follow each prompt.
const LESSON = [
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
];
