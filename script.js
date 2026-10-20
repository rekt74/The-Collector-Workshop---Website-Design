const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('mobile-open', expanded);
});
const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('button');
function closeDropdown() { dropdown.classList.remove('open'); dropdownButton.setAttribute('aria-expanded', 'false'); }
dropdownButton.addEventListener('click', () => {
  const expanded = dropdownButton.getAttribute('aria-expanded') !== 'true';
  dropdownButton.setAttribute('aria-expanded', String(expanded));
  dropdown.classList.toggle('open', expanded);
});
document.addEventListener('click', event => { if (!dropdown.contains(event.target)) closeDropdown(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeDropdown(); nav.classList.remove('mobile-open'); menuButton.setAttribute('aria-expanded', 'false'); } });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('mobile-open'); menuButton.setAttribute('aria-expanded', 'false'); closeDropdown(); }));
const dialog = document.querySelector('dialog');
document.querySelector('.film-button').addEventListener('click', () => dialog.showModal());
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#dialog-enquire').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) { const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Your enquiry is ready in this preview. It has not been sent; the website needs an enquiry delivery service connected before launch.';
});
