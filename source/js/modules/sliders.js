'use strict';

(function () {

  var serviceSlider = document.querySelector('.service-slider__wrapper')
  var feedbackSlider = document.querySelector('.feedback__swiper-container');
  var aboutSlider = document.querySelector('.about__banners');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      effect: 'fade',
      slidesPerView: 1,
      allowTouchMove: false,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          allowTouchMove: true,
        }
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      centeredSlides: true,
      slideToClickedSlide: true,
      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (feedbackSlider) {
    feedbackSliderDesk(feedbackSlider);
  }

  var aboutSliderDesk = function (el) {
    return new Swiper(el, {
      slidesPerView: 5,
      spaceBetween: 40,
      slidesPerGroup:1,
      loop:true,
      loopFillGroupWithBlank:true,
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      breakpoints: {
        320:{
          slidesPerView: 2,
        },
        480:{
          slidesPerView: 3,
          spaceBetween:30
        },
        767:{
          slidesPerView:4,
          spaceBetween:30
        },
        1200:{
          slidesPerView:5,
          spaceBetween: 40,
        },
      }
    });
  };

  if (aboutSlider) {
    aboutSliderDesk(aboutSlider);
  }


})();
