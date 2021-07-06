'use strict';

const toggler = document.querySelector('.logos__toggler');
const logos = document.querySelector('.logos__list');

toggler.addEventListener('click', function(event) {
  if (logos.style.display === 'none') {
    toggler.style.transform = 'rotateX(180deg)';
    logos.style.display = 'flex';
  } else {
    toggler.style.transform = 'rotateX(0)';
    logos.style.display = 'none';
  }
});
