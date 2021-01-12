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
      slidesPerView: 3,
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
