"use strict";

(function () {

  var btnRevers = document.querySelector('.button-revers');

  var formRevers = function (evt) {
    evt.preventDefault();

    btnRevers.classList.toggle('button-revers--active');
  };

  btnRevers.addEventListener('click', formRevers);

})();
