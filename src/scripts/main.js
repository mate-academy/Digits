'use strict';

const burgerMenu = document.querySelector('#burgerMenu');
const burgerMenuClasses = burgerMenu.classList;
const headerMenuClasses = document.querySelector('#headerMenu').classList;

burgerMenu.addEventListener('click', () => {
  burgerMenuClasses.toggle('header__burger--active');
  headerMenuClasses.toggle('header__right--active');
});
