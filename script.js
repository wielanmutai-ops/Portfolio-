const typedElement = document.querySelector('#typed');

if (typedElement && window.Typed) {
  new Typed(typedElement, {
    strings: ['Junior Full Stack Developer.', 'IT problem solver.', 'Builder of useful systems.'],
    typeSpeed: 48,
    backSpeed: 28,
    backDelay: 1800,
    loop: true,
    smartBackspace: true
  });
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '76px';
    navMenu.style.right = '20px';
    navMenu.style.padding = '18px';
    navMenu.style.background = 'rgba(10, 24, 21, 0.96)';
    navMenu.style.border = '1px solid var(--line)';
    navMenu.style.minWidth = '180px';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}
