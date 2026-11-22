/* Minimal enhancements: accessible menu + theme preference. Site content works without JS. */
(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  function activeTheme() {
    return doc.dataset.theme || (media.matches ? 'dark' : 'light');
  }
  function updateThemeButton() {
    const dark = activeTheme() === 'dark';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = dark ? '#0f1924' : '#f7f9fb';
  }
  try {
    const saved = localStorage.getItem('schanlar-theme');
    if (saved === 'light' || saved === 'dark') doc.dataset.theme = saved;
  } catch { /* Allow browsing when storage is disabled. */ }
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    doc.dataset.theme = activeTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('schanlar-theme', doc.dataset.theme); } catch { /* noncritical */ }
    updateThemeButton();
  });
  if (typeof media.addEventListener === 'function') media.addEventListener('change', updateThemeButton);

  function closeMenu(returnFocus = false) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  window.matchMedia('(min-width: 971px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
})();
