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
