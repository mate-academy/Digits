'use strict';

const burgerButton = document.querySelector('.burger_button');
const nav = document.querySelector('.navigation');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger_button--open');
  nav.classList.toggle('navigation--open');
});
