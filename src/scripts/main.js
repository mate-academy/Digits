'use strict';

const contactUsButton = document.querySelector('.header__button');

contactUsButton.addEventListener('click', event => {
  window.open('tel:+00 123 456 789');
  event.preventDefault();
});

document.querySelector('.mobile-menu').onclick = () => {
  document.querySelector('.navigation__toggler').checked = false;
};
