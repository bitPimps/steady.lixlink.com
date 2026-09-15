// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // FAQ search filter (faq.html only)
  const search = document.getElementById('faq-search');
  if (!search) return;

  const groups = Array.from(document.querySelectorAll('.faq-group'));
  const items = Array.from(document.querySelectorAll('.faq-item'));
  const empty = document.getElementById('faq-empty');

  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let anyVisible = false;

    groups.forEach((group) => {
      let groupHasMatch = false;
      group.querySelectorAll('.faq-item').forEach((item) => {
        const text = item.textContent.toLowerCase();
        const matches = query === '' || text.includes(query);
        item.hidden = !matches;
        if (matches) {
          groupHasMatch = true;
          anyVisible = true;
          if (query !== '') item.open = true;
        } else {
          item.open = false;
        }
      });
      group.hidden = !groupHasMatch;
    });

    if (empty) empty.style.display = anyVisible ? 'none' : 'block';
  });
});
