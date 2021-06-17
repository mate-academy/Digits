'use strict';

const toggler = document.querySelector('.nav__toggler');
const togglerStatus = document.querySelector('.nav__toggler--menu');
const menu = document.querySelector('.nav__list');

toggler.addEventListener('click', function(event) {
  if (menu.style.display === 'flex') {
    togglerStatus.className = 'nav__toggler nav__toggler--menu';
    menu.style.display = 'none';
  } else {
    togglerStatus.className = 'nav__toggler nav__toggler--cancel';
    menu.style.display = 'flex';
  }
});
