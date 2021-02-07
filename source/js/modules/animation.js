"use strict";

(function () {

  var mainHeader = document.querySelector('.main-header');
  var serviceSlider = document.querySelector('.service-slider');
  var formOrder = document.querySelector('.form-order');
  var services = document.querySelector('.services');
  var activity = document.querySelector('.activity__wrapper');
  var scrollHeader = mainHeader.offsetHeight;
  var scrollService = serviceSlider.offsetHeight;
  var scrollForm = formOrder.offsetHeight;
  var scrollServices = services.offsetHeight;
  var contentHeight = mainHeader.offsetHeight + serviceSlider.offsetHeight + formOrder.offsetHeight + services.offsetHeight;

  window.addEventListener('scroll', function () {
    if (window.scrollY > contentHeight) {
      activity.classList.add('activity__wrapper--image');
    } else if (window.scrollY > contentHeight - 800) {
      activity.classList.remove('activity__wrapper--image');
    }
  });

  console.log(scrollHeader, scrollService, scrollForm, scrollServices, contentHeight);


})();
