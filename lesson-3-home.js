try {
  const saved = JSON.parse(localStorage.getItem('english-review.lesson-3.v1'));
  if (saved && saved.version === 1 && Array.isArray(saved.tasks) && saved.tasks.length === 5 && saved.tasks.every(t => Array.isArray(t.attempts))) {
    const tasks = saved.tasks;
    const all = tasks.every(t => t.attempts.length);
    const writing = tasks[4].attempts.at(-1);
    const reviewed = writing && (writing.marks || []).filter(m => m === 'correct' || m === 'revision').length === 4;
    document.querySelector('#home-status-3').textContent = all ? (reviewed ? 'Reviewed' : 'Awaiting teacher review') : tasks.some(t => t.attempts.length || t.draft) ? 'In progress' : 'Not started';
  }
} catch (_) { /* Practice remains available without storage. */ }
