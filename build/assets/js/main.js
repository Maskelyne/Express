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