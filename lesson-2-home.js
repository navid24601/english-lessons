try {
  const saved = JSON.parse(localStorage.getItem('english-review.lesson-2.v1'));
  if (saved && Array.isArray(saved.tasks) && (saved.tasks.length === 4 || saved.tasks.length === 5) && saved.tasks.every(t => Array.isArray(t.attempts))) {
    const tasks = saved.tasks.length === 5 ? saved.tasks.filter((_, i) => i !== 3) : saved.tasks;
    const all = tasks.every(t => t.attempts.length);
    const writing = tasks[3].attempts.at(-1);
    const reviewed = writing && (writing.marks || []).filter(m => m === 'correct' || m === 'revision').length === 4;
    document.querySelector('#home-status-2').textContent = all ? (reviewed ? 'Reviewed' : 'Awaiting teacher review') : tasks.some(t => t.attempts.length || t.draft) ? 'In progress' : 'Not started';
  }
} catch (_) { /* Practice remains available without storage. */ }
