"use strict";

(function () {

  var formDelivery = document.querySelector('#form-order__delivery');
  var formContacts = document.querySelector('#form-order__contacts');
  var formFeedback = document.querySelector('#ec-form-resource-3');
  var error = document.querySelectorAll('.error');

  if (formDelivery) {

    var weightInput = formDelivery.querySelector('#weight');
    var volumeInput = formDelivery.querySelector('#volume');
    var city1 = formDelivery.querySelector('#point-1');
    var city2 = formDelivery.querySelector('#point-2');
    var btnDel = formDelivery.querySelector('.button--calc-js');
    var regex = /[0-9]/g;

    var obj = {
      cubs: [],
      weight: [150, 300, 550, 800, 1100, 1500, 2000, 2600, 3300, 4000],
      price: {
        volume: [60, 70, 90, 120, 150, 180, 210, 240, 270, 300],
        volume2: [80, 85, 90, 140, 170, 200, 230, 260, 290, 320],
        volume3: [100, 100, 130, 160, 190, 220, 250, 280, 310, 340],
        volume4: [120, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        volume5: [150, 150, 170, 200, 230, 260, 290, 320, 350, 380],
        volume6: [200, 200, 210, 220, 250, 280, 310, 340, 370, 400],
        volume7: [220, 220, 230, 240, 270, 300, 330, 360, 390, 420],
        volume8: [280, 280, 290, 300, 330, 360, 390, 420, 450, 480],
        volume9: [350, 350, 360, 390, 420, 450, 480, 510, 540, 570],
        volume10: [420, 420, 430, 470, 500, 530, 560, 590, 620, 650],
      }
    };

    for (var i = 1; i <= 10; i++) {
      obj.cubs.push(i);
    }

    city1.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[0].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[0].innerHTML = '';
      }
    }

    city2.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[1].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[1].innerHTML = '';
      }
    }

    var calcDel = function () {

      switch (true) {
        case !city1.value:
          error[0].innerHTML = 'Заполните поле';
          break;
        case !city2.value:
          error[1].innerHTML = 'Заполните поле';
          break;
        case !weightInput.value || !weightInput.checkValidity():
          error[3].innerHTML = '';
          error[2].innerHTML = 'Мин 1 Макс 4000';
          break;
        case !volumeInput.value || !volumeInput.checkValidity():
          error[2].innerHTML = '';
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        default:
          error[0].innerHTML = '';
          error[1].innerHTML = '';
          error[2].innerHTML = '';
          error[3].innerHTML = '';
      }
    };

    $(formDelivery).validate({
      ignore: ".ignore",
      messages: {
        tel: 'Введите номер телефона',
      },
      errorElement: 'span',
    });

    btnDel.addEventListener('click', calcDel);
  }

  if (formContacts) {
    $(formContacts).validate({
      ignore: ".ignore",
      messages: {
        phone: 'Введите номер телефона',
        text: 'Обязательное поле',
        user_name: 'Обязательное поле',
        user_email: 'Введите email'
      },
      errorElement: 'span',
    });
  }

  if (formFeedback) {
    $(formFeedback).validate({
      ignore: ".ignore",
      messages: {
        user_contacts: 'Введите номер телефона',
        text: 'Введите текст',
        user_name: 'Обязательное поле',
        user_email: 'Введите email'
      },
      errorElement: 'span',
    });
  }

})();
