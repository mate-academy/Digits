'use strict';

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

window.onload = function() {
  document.addEventListener('click', documentActions);

  // Actions (делегирование события click)
  function documentActions(e) {
    const targetElement = e.target;

    if (isMobile.any()) {
      document.body.classList.add('_touch');

      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_active');
      }

      if (
        (!targetElement.closest('.menu__item')
        && document.querySelectorAll('.menu__item._active').length > 0)
      ) {
        _removeClasses(
          document.querySelectorAll('.menu__item._active'),
          '_active'
        );
      }

      if (targetElement.classList.contains('menu-footer__title')) {
        targetElement.closest('.menu-footer__column')
          .classList.toggle('_active');
      }

      if (
        (!targetElement.closest('.menu-footer__column')
        && document.querySelectorAll('.menu-footer__column._active').length > 0)
      ) {
        _removeClasses(
          document.querySelectorAll('.menu-footer__column._active'),
          '_active'
        );
      }
    }
  }
};

function _removeClasses(el, className) {
  for (let i = 0; i < el.length; i++) {
    el[i].classList.remove(className);
  }
}

// Menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue
      = gotoBlock.getBoundingClientRect().top
      + window.pageYOffset
      - document.querySelector('.header__body').offsetHeight;

    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}
