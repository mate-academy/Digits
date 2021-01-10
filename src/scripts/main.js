'use strict';

const burgerMenu = document.querySelector('#burger-menu');
const burgerMenuClasses = burgerMenu.classList;
const headerMenuClasses = document.querySelector('#header-menu').classList;

burgerMenu.addEventListener('click', () => {
  burgerMenuClasses.toggle('header__burger--active');
  headerMenuClasses.toggle('header__menu--active');
});

// smooth scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 500, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
