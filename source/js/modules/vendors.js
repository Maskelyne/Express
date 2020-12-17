"use strict";

(function () {

  jQuery(function ($) {
    $("#user_phone").mask("+375 (99) 999-99-99",{autoclear: false});
  });

  $("#user_name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $('form').validate({
    messages: {
      name: 'Введите ваше имя',
      phone: 'Введите ваш номер телефона',
      position: 'Введите вашу должность',
      company: 'Введите название компании'
    },
    errorElement: 'span',
  });

})();
