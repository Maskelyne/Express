"use strict";

(function () {

  var btnRevers = document.querySelector('.button-revers');
  var formCalc = document.querySelector('#form-order__calc');
  var formDelivery = document.querySelector('#form-order__delivery');

  if (btnRevers) {

    var number = 0;
    var swapValues = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';

      if (formCalc) {
        var input = document.querySelector("#point-1").value;
        document.querySelector("#point-1").value = document.querySelector("#point-2").value;
        document.querySelector("#point-2").value = input;
      }

      if (formDelivery) {
        var input1 = document.querySelector("#point-1").value;
          document.querySelector("#point-1").value = document.querySelector("#point-2").value;
          document.querySelector("#point-2").value = input1;

        var input2 = document.querySelector('#street-1').value;
          document.querySelector('#street-1').value = document.querySelector('#street-2').value;
          document.querySelector('#street-2').value = input2;

        var input3 = document.querySelector('#house-1').value;
          document.querySelector('#house-1').value = document.querySelector('#house-2').value;
          document.querySelector('#house-2').value = input3;

        var input4 = document.querySelector('#korp-1').value;
          document.querySelector('#korp-1').value = document.querySelector('#korp-2').value;
          document.querySelector('#korp-2').value = input4;

        var input5 = document.querySelector('#room-1').value;
          document.querySelector('#room-1').value = document.querySelector('#room-2').value;
          document.querySelector('#room-2').value = input5;
      }
    }

    btnRevers.addEventListener('click', swapValues);

    var inputmask_options;

    inputmask_options = {
      mask: "99-99-9999",
      alias: "date",
      showMaskOnHover: false,
      showMaskOnFocus: true,
    };

    $("#point-3").inputmask(inputmask_options);
    $("#time-d").inputmask("hh:mm", {showMaskOnHover: false, showMaskOnFocus: true});

    var $input = $('#point-3'),
      dp = $input.datepicker({
        showEvent: 'focus',
      }).data('datepicker');

    $input.on('click', function(){
      dp.show();
      $input.focus();
    });
  }

  $(document).ready(function() {
    $('.image').change(function () {
      var file = this.files;
      console.log(file[0].type);
      if (file[0].type === 'image/jpeg' || file[0].type === 'image/png' || file[0].type === 'image/jpg') {
        var reader = new FileReader();
        reader.readAsDataURL(file[0], 'UTF-8');
        reader.onload = function (event) {
          var result = event.target.result;
          $('.user-img').attr('src', event.target.result);
        };
      } else {
        alert('Выберите подходящий формат изображения: jpeg/jpg/png');
      }
    })
  });

  $('.file').on("change", function () {
    var file = this.files;
    var numFiles = $(this).get(0).files.length;
    if (file[0].type === 'image/png' || file[0].type === 'image/jpeg' || file[0].type === 'image/jpg') {
      $('.file-res').css('display', 'flex');
      $('.file-res span').text('Выбрано файлов:' + ' ' + numFiles);
    } else {
      alert('Выберите подходящий формат изображения: jpeg/jpg/png');
    }

  });


  $('.reset-file').click(function (e) {
    e.preventDefault();
    $('input[type="file"]').val('');
    $('.file-res').css('display', 'none');
  })

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

  $('#point-3').on('keyup change blur', function() {
    if ($(this).val().trim() !== '') {
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

  $("#user-name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user-contacts").keyup(function () {
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

  $("#ec-user_contacts-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-text-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-user_name-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-user_email-resource-3").keyup(function () {
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

  $("#street-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#street-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#house-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#korp-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#room-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#house-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#korp-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#room-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#time-d").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

})();
