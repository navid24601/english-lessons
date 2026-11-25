const list = document.querySelector('#lesson-list');
document.querySelector('#lesson-count').textContent = String(LESSONS.length).padStart(2, '0');
LESSONS.forEach(entry => {
  let status = 'Not started';
  try {
    const saved = JSON.parse(localStorage.getItem(`english-review.lesson-${entry.id}.v1`));
    if (saved && Array.isArray(saved.tasks)) {
      const tasks = saved.tasks.slice();
      if (entry.id === 2 && tasks.length === entry.tasks.length + 1) tasks.splice(3, 1);
      if (tasks.length === entry.tasks.length && tasks.every(t => Array.isArray(t.attempts))) {
        const all = tasks.every(t => t.attempts.length);
        const writing = tasks.at(-1).attempts.at(-1);
        const reviewed = writing && (writing.marks || []).filter(m => m === 'correct' || m === 'revision').length === entry.tasks.at(-1).items.length;
        status = all ? (reviewed ? 'Reviewed' : 'Awaiting teacher review') : tasks.some(t => t.attempts.length || t.draft) ? 'In progress' : status;
      }
    }
  } catch (_) {}
  const link = document.createElement('a');
  link.className = 'lesson-link'; link.href = `lesson.html?id=${encodeURIComponent(entry.id)}`;
  const number = document.createElement('span'); number.className = 'number'; number.textContent = String(entry.id).padStart(2,'0');
  const label = document.createElement('span'); const title = document.createElement('strong'); title.textContent = entry.title;
  const description = document.createElement('span'); description.textContent = entry.description;
  label.append(title, document.createElement('br'), description);
  const state = document.createElement('span'); state.className = 'status'; state.textContent = status;
  const arrow = document.createElement('span'); arrow.setAttribute('aria-hidden','true'); arrow.textContent = '→';
  link.append(number,label,state,arrow); list.append(link);
});
