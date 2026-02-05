// Seleccionamos botón hamburguesa y menú
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

// Al hacer click en el botón, agregamos/quitar clase 'active'
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
