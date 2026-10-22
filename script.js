const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project[data-tags]');
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const isSelected = item === button;
    item.classList.toggle('active', isSelected);
    item.setAttribute('aria-pressed', String(isSelected));
  });
  projects.forEach(project => {
    project.hidden = selected !== 'all' && !project.dataset.tags.split(' ').includes(selected);
  });
}));
document.getElementById('copyright-year').textContent = new Date().getFullYear();
