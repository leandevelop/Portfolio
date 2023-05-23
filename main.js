// Establecer variables de elementos
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Mostrar el menú de navegación móvil
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Ocultar el menú de navegación móvil
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Ocultar el menú de navegación móvil al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Animación de scroll suave
const smoothScroll = () => {
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });
};

smoothScroll();
