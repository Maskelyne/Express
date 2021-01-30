"use strict";

(function () {

  var formDelivery = document.querySelector('#form-order__delivery');
  var error = document.querySelectorAll('.error-text');

  if (formDelivery) {

    var weightInput = formDelivery.querySelector('#weight');
    var volumeInput = formDelivery.querySelector('#volume');
    var city1 = formDelivery.querySelector('#point-1');
    var city2 = formDelivery.querySelector('#point-2');
    var btnDel = formDelivery.querySelector('.button--calc-js');
    var regex = /[0-9]/g;
    var weightRegex = /[A-Za-zА-Яа-яЁё]/g;

    city1.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[0].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[0].innerHTML = '';
      }
    };

    city2.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[1].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[1].innerHTML = '';
      }
    };

    weightInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[2].innerHTML = 'Символы запрещены для ввода';
      } else if (weightInput.value <= 0 || weightInput.value > 4000) {
        error[2].innerHTML = 'Мин 1 Макс 4000';
      } else {
        error[2].innerHTML = '';
      }
    };

    volumeInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[3].innerHTML = 'Символы запрещены для ввода';
      } else if (volumeInput.value <= 0 || volumeInput.value > 10 ) {
        error[3].innerHTML = 'Мин 1 Макс 10';
      } else {
        error[3].innerHTML = '';
      }
    };

    var calcDel = function () {

      switch (true) {
        case weightInput.value === '':
          error[2].innerHTML = '';
          break;
        case volumeInput.value === '':
          error[3].innerHTML = '';
          break;
        case weightInput.value < 1 || weightInput.value > 4000:
          error[2].innerHTML = 'Мин 1 Макс 4000';
          break;
        case volumeInput.value < 1 || volumeInput.value > 10:
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        default:
          error[0].innerHTML = '';
          error[1].innerHTML = '';
          error[2].innerHTML = '';
          error[3].innerHTML = '';
      }
    };

    btnDel.addEventListener('click', calcDel);
  }

  $('form').validate({
    ignore: ".ignore",
    messages: {
      name: 'Обязательное поле',
      phone: 'Введите номер телефона',
      tel: 'Введите номер телефона',
      user_contacts: 'Введите номер телефона',
      user_name: 'Обязательное поле',
      user_email: 'Неверный email',
      email: 'Неверный email',
    },
    errorElement: 'span',
  });

})();
