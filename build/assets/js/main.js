/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';

(function () {

  let btn = document.querySelectorAll('a[href^="tel:"]');

  let resizeWindow = function (evt) {
    if (window.innerWidth <= 1023) {
      evt.stopPropagation();
    } else {
      evt.preventDefault();
    }
  };

  btn.forEach(function (item) {
    item.addEventListener('click', resizeWindow);
  });

  btn.forEach(function (item) {
    item.addEventListener('resize', resizeWindow);
  });

})();
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

      if (burgerBtn.classList.contains('main-header__burger--closed')) {
        burgerBtn.classList.remove('main-header__burger--closed');
        burgerBtn.classList.add('main-header__burger--active');
        headerMenu.classList.add('main-header__nav--active');
        headerSocial.classList.remove('main-header__tel--active');
        headerSocial.classList.add('main-header__tel--closed');
        document.body.style.overflow = 'hidden';
      } else {
        burgerBtn.classList.add('main-header__burger--closed');
        burgerBtn.classList.remove('main-header__burger--active');
        headerMenu.classList.remove('main-header__nav--active');
        document.body.style.overflow = '';
      }

    };

    var activeSocial = function (evt) {
      evt.preventDefault();

      if (headerSocial.classList.contains('main-header__tel--closed')) {
        headerSocial.classList.remove('main-header__tel--closed');
        headerSocial.classList.add('main-header__tel--active');
        burgerBtn.classList.remove('main-header__burger--active');
        burgerBtn.classList.add('main-header__burger--closed');
        headerMenu.classList.remove('main-header__nav--active');
        document.body.style.overflow = 'hidden';
      } else {
        headerSocial.classList.add('main-header__tel--closed');
        headerSocial.classList.remove('main-header__tel--active');
        document.body.style.overflow = '';
      }

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
'use strict';

(function () {

  var serviceSlider = document.querySelector('.service-slider__wrapper')
  var feedbackSlider = document.querySelector('.feedback__swiper-container');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      effect: 'fade',
      slidesPerView: 1,
      allowTouchMove: false,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  };

  if (serviceSlider) {
    servicesSliderDesk(serviceSlider);
  }

  var feedbackSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      slidesPerView: 2,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  };

  if (feedbackSlider) {
    feedbackSliderDesk(feedbackSlider);
  }

})();
"use strict";

(function () {

  var formOrder = document.querySelector('.form-order__box');

  if (formOrder) {

    var btnRevers = formOrder.querySelector('.button-revers');
    var number = 0;

    var formReverse = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';
    };

    btnRevers.addEventListener('click', formReverse);

    $("#point-1").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#point-2").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#point-3").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#weight").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#volume").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    var inputmask_options;

    inputmask_options = {
      mask: "99/99/9999",
      alias: "date",
      showMaskOnHover: false,
      showMaskOnFocus: true,
    };

    $("#point-3").inputmask("99/99/9999", inputmask_options);
    $("#point-3").datepicker();

  }

})();
'use strict';

(function () {

  var questions = document.querySelector('.questions');

  if (questions) {

    var questionsText = questions.querySelectorAll('.questions__box-left li');
    var questionsBox = document.querySelectorAll('.questions__box-right article');

    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };

    if (questionsText) {
      questionsText.forEach(function (item, i) {
        item.addEventListener('click', function (evt) {
          evt.preventDefault();

          removeActive(questionsText, 'questions__item-active');
          removeActive(questionsBox, 'questions__text-active');
          questionsText[i].classList.add('questions__item-active');
          questionsBox[i].classList.add('questions__text-active');
        });
      });
    }
  }

})();
"use strict";

(function () {

})();