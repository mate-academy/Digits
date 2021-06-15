'use strict';

const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const burgerLink = document.querySelector('.burger-nav__list');

hamburger.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hamburger-menu--active');
  hamburger.classList.toggle('hamburger--active');
});

burgerLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hamburger-menu--active');
  hamburger.classList.remove('hamburger--active');
});
