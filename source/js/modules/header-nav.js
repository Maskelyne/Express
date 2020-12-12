'use strict';

(function () {

  var headerMenu = document.querySelector('.main-header__nav');

  if (headerMenu && window.innerWidth <= 1023) {

    var burgerBtn = document.querySelector('.main-header__burger');
    var burgerSocial = document.querySelector('.main-header__link');
    var headerSocial = document.querySelector('.main-header__tel');
    var headerWrapMenu = document.querySelector('.main-header__wrap-menu');
    var headerWrapActive = document.querySelector('.main-header__wrap')

    var activeMenu = function () {
      burgerBtn.classList.toggle('main-header__burger--active');
      headerMenu.classList.toggle('main-header__nav--active');
    };

    var activeSocial = function (evt) {
      evt.preventDefault();

      headerSocial.classList.toggle('main-header__tel--active');
    };

    var activeWrapMenu = function (evt) {
      evt.preventDefault();

      headerWrapMenu.classList.toggle('main-header__wrap-menu--active');
      headerWrapActive.classList.toggle('main-header__wrap--active');
    };

    burgerBtn.addEventListener('click', activeMenu);
    burgerSocial.addEventListener('click', activeSocial);
    headerWrapMenu.addEventListener('click', activeWrapMenu);

  }

})();
