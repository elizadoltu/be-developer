const themeSwitch = document.getElementById('theme-switch');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    darkIcon.style.opacity = '0';
    lightIcon.style.opacity = '1';
  }
});

// Check user's preference or default to light theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeSwitch.checked = true;
  body.classList.add('dark-theme');
  darkIcon.style.opacity = '1';
  lightIcon.style.opacity = '0';
} else {
  themeSwitch.checked = false;
  body.classList.add('light-theme');
  darkIcon.style.opacity = '0';
  lightIcon.style.opacity = '1';
}
