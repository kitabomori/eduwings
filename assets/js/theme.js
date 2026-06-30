/* ============================================================
   theme.js – Dark mode toggle for Kitabomori.
   Runs before paint to prevent flash of wrong colour scheme.
   Uses localStorage to persist preference.
   Called from base.html <head> so it executes immediately.
   ============================================================ */

(function () {
  // Read stored preference; fall back to OS setting
  var stored = localStorage.getItem('ew-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = stored === 'dark' || (!stored && prefersDark);

  if (isDark) {
    document.documentElement.classList.add('dark');
  }
})();

/* toggleDark() – called by the button in header.html */
function toggleDark() {
  var html = document.documentElement;
  var isDark = html.classList.toggle('dark');
  localStorage.setItem('ew-theme', isDark ? 'dark' : 'light');

  // Update button label
  var btn = document.getElementById('theme-btn');
  if (btn) {
    // Detect language from <html lang="…">
    var lang = html.getAttribute('lang') || 'en';
    if (lang === 'ur') {
      btn.textContent = isDark ? 'روشن' : 'تاریک';
    } else {
      btn.textContent = isDark ? 'Light' : 'Dark';
    }
  }
}
