# Interactive English Learning

A static collection of interactive English lessons. Learners can answer questions, review feedback, and export or share their work.

## Project structure

- `index.html` — the lesson library page.
- `home.js` — builds the lesson list and displays saved progress.
- `lesson.html` — the shared lesson page.
- `lesson.js` — renders activities, checks answers, saves progress, and handles teacher review, export, and sharing.
- `lessons.js` — the lesson catalog: titles, introductions, questions, answer keys, and explanations.
- `style.css` — styles shared by the pages.
- `README.md` — project and authoring documentation.

## How it works

All seven existing lessons already use the shared system: their material lives in `lessons.js`, and `lesson.html` and `lesson.js` display and run them. The home page reads `LESSONS` from `lessons.js` and builds its list automatically. A lesson link opens `lesson.html?id=7` (for example); the shared viewer finds that ID in the catalog and renders its content. The final task is teacher-reviewed writing; preceding tasks are multiple-choice activities. The viewer handles different numbers of tasks and questions.

Progress and teacher reviews are stored in the learner's browser, tied to the site's origin and the lesson ID. They are not stored in the GitHub repository or synchronized between devices. The Markdown export includes saved attempts and drafts, answer keys, explanations, and available teacher feedback. Native file sharing is used where supported; otherwise the file is downloaded.

## Add a lesson and update GitHub Pages

For a new lesson using the existing activity format, **only update and push `lessons.js`** to the branch and folder configured as the GitHub Pages source. GitHub Pages will publish the updated file; the home page will list the new lesson automatically. You do not need to update `index.html` or create lesson-specific HTML, app, or home files. Allow a little time for the Pages deployment to finish, then check the live lesson.

In `lessons.js`, add an object to the `LESSONS` array, using an existing lesson as an example:

1. Give it a unique numeric `id`, a `title`, a short `description`, and an `intro` containing introductory HTML. Keep existing IDs unchanged so saved progress stays associated with the right lesson.
2. Add its `tasks`. Multiple-choice items have a `prompt` and `parts`; each part has `options`, a zero-based `answer`, and an `explanation`. The final task contains writing items with a `prompt`, `criterion`, and `model`.
3. Test the lesson, including answer checking and writing review, before pushing it.

If a lesson needs a new type of activity or a change to the shared design, update the relevant shared code or styles too.

