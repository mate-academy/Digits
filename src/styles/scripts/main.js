'use strict';

const toggler = document.querySelector('.header__menu-toggler');
const menu = document.querySelector('.menu');
const page = document.querySelector('.page');

const toggleMenu = () => {
  toggler.classList.toggle('header__menu-toggler--active');
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--fixed');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
