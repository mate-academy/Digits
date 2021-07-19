'use strict';

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.nav-mob__btn');
//   let links = menu.find('.nav-mob__link');
//   let overlay = menu.find('.nav-mob__overlay');

//   button.on('click', (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass('nav-mob--active');

//     if (menu.hasClass('nav-mob--active')) {
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
//   }
// }
// burgerMenu('.nav-mob');

// const menu = document.querySelector('.nav-mob');
// const toggler = document.querySelector('.nav-mob__btn');
// toggler.onclick = function toggleSidebar() {
//   menu.classList.toggle('nav-mob--active');
//   toggler.classList.toggle('nav-mob__btn--active');
// }
