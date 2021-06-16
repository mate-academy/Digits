'use strict';

const aboveButton = document.querySelector('.above');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    aboveButton.style.display = 'block';
  } else {
    aboveButton.style.display = 'none';
  }
}
