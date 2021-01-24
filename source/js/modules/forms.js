"use strict";

(function () {

  var btnRevers = document.querySelector('.button-revers');

  if (btnRevers) {

    var number = 0;
    var swapValues = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';

      var tmp = document.querySelector("#point-1").value;
      document.querySelector("#point-1").value = document.querySelector("#point-2").value;
      document.querySelector("#point-2").value = tmp;
    }

    btnRevers.addEventListener('click', swapValues);

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

  $("input[type='file']").on("change", function () {
    var numFiles = $(this).get(0).files.length;
    $('.file-res').css('display', 'flex');
    $('.file-res span').text('Выбрано файлов:' + ' ' + numFiles);
  });


  $('.reset-file').click(function (e) {
    e.preventDefault();
    $('input[type="file"]').val('');
    $('.file-res').css('display', 'none');
  })

  var userPhone = document.querySelector("#user-phone");

  if (userPhone) {

    var maskList = $.masksSort($.masksLoad("assets/json/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    var maskOpts = {
      inputmask: {
        definitions: {
          '#': {
            validator: "[0-9]",
            cardinality: 1
          }
        },
        showMaskOnHover: false,
        autoUnmask: true,
        clearMaskOnLostFocus: true
      },
      match: /[0-9]/,
      replace: '#',
      list: maskList,
      listKey: "mask",
      onMaskChange: function (maskObj, determined) {
      }
    };

    $('#user-phone').change(function () {
      $('#user-phone').inputmask("remove");
      $('#user-phone').inputmasks(maskOpts);
    });

    $('#user-phone').change();
  }

})();
