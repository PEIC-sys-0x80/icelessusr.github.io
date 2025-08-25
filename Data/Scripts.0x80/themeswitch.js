const themeSwitcher = document.getElementById('themeSwitcher');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitcher.textContent = '🌙';
  } else {
    document.body.classList.remove('dark-mode');
    themeSwitcher.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

// 初始化主題
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDarkScheme.matches) {
  setTheme('dark');
}

// 切換主題按鈕事件
themeSwitcher.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// 監聽系統主題變化
prefersDarkScheme.addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light';
  setTheme(newTheme);
});
