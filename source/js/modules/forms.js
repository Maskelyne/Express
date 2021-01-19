"use strict";

(function () {

  var formOrder = document.querySelector('.form-order__box');
  var btnRevers = formOrder.querySelector('.button-revers');

  if (btnRevers) {

    var number = 0;

    var formReverse = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';
    };

    btnRevers.addEventListener('click', formReverse);

    $(document).ready(function(){
      $("#user-phone").inputmask("+375 (99) 999-99-99",
        {
          showMaskOnHover: false,
          showMaskOnFocus: true,
        });
    });

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

    $("#user-phone").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-email").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-company").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-text").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    var inputmask_options;

    inputmask_options = {
      mask: "99-99-9999",
      alias: "date",
      showMaskOnHover: false,
      showMaskOnFocus: true,
    };

    $("#point-3").inputmask(inputmask_options);

    var $btn = $('#calendar'),
      $input = $('#point-3'),
      dp = $input.datepicker({
        showEvent: 'focus',
      }).data('datepicker');

    $btn.on('click', function(){
      dp.show();
      $input.focus();
    });

  }

  $(document).ready(function() {
    $('input[type="file"]').change(function () {
      var file = this.files; //Files[0] = 1st file
      if (file[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(file[0], 'UTF-8');
        reader.onload = function (event) {
          var result = event.target.result;
          $('.user-img').attr('src', event.target.result);
        };
      }
    })

  });

  var btnCalc = document.querySelector('.btn-calc');

  var validate = function (evt) {
    evt.preventDefault();
    //Считаем значения из полей name и email в переменные x и y
    var x = document.forms[0]['name'].value;
    var y = document.forms[0]['email'].value;
    //Если поле name пустое выведем сообщение и предотвратим отправку формы
    if (x.length == 0) {
      document.getElementById('namef').innerHTML = '*данное поле обязательно для заполнения';
      return false;
    }
    //Если поле email пустое выведем сообщение и предотвратим отправку формы
    if (y.length == 0) {
      document.getElementById('emailf').innerHTML = '*данное поле обязательно для заполнения';
      return false;
    }
    //Проверим содержит ли значение введенное в поле email символы @ и .
    var at = y.indexOf("@");
    var dot = y.indexOf(".");
    //Если поле не содержит эти символы знач email введен не верно
    if (at < 1 || dot < 1) {
      document.getElementById('emailf').innerHTML = '*email введен не верно';
      return false;
    }
  }

    btnCalc.addEventListener('click', validate);

})();
