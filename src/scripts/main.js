'use strict';

const list = document.querySelector('.menu-maxwidth1050__list');
const checkbox = document.querySelector('.menu-maxwidth1050__toggler');

list.addEventListener('click', () => {
  checkbox.checked = false;
});
