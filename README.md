# Interactive English Learning

## Run locally

Extract the archive, open a terminal in this folder, and run:

```powershell
python -m http.server 8000
```

Open http://localhost:8000/ in a browser. Keep the terminal running. Stop the server with Ctrl+C. The Google fonts require internet; system fonts are used when offline. Progress and manual teacher review are stored in this browser and on this origin. Sharing a link does not transfer a learner's answers to the teacher: review must happen in the same browser/profile, or the learner must share their screen/device.

## Add a lesson

Copy lesson-1.html and adapt the page title and introduction. Copy data.js and app.js under new names, update the script references, and use a new versioned storage key in the copied JavaScript. Edit the labelled data in the copied data file: each automatically checked part has a prompt, choices, a zero-based answer index, and an explanation; writing prompts have criteria and example responses. The existing logic is intentionally specific to three tasks (four items each, two parts per item in Task 2). Adjust it and the home-page lesson list/status if the new lesson uses a different structure. Test the answers, retries, and teacher review before sharing.
