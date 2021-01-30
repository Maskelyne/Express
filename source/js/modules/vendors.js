"use strict";

(function () {

  var acc = document.getElementsByClassName("show-more");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $('.js-btn').click(function (e) {
    e.preventDefault();
    $('.form-order__delivery').removeClass('form-order__delivery--show');
    setTimeout(function () {
      $('.js-btn').css('display', 'none')
    }, 100);
  })

  $(".js-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 1000);
  });


  $(window).on('load', function(){
    if ($(window).width() <= 1023) {
      $('.form-order__delivery').insertAfter('.insert');
      if($('.form-order__delivery').hasClass('form-order__delivery--hide')){
        $('.form-order__delivery').removeClass('form-order__delivery--hide')
      }
      $('.form-order__delivery').addClass('form-order__delivery--show');
      $('.form-order__delivery').attr('id', 'form-delivery');
    }else{
      $('.form-order__delivery').addClass('form-order__delivery--hide');
    }
  });

  var btn = document.querySelectorAll(".btn-show-more");
  var z;
  if (btn) {

    for (z = 0; z < btn.length; z++) {
      btn[z].addEventListener("click", function () {

        this.classList.toggle("active-box");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    $(document).on('pdopage_load', function (e, config, response) {
      var btn = document.querySelectorAll(".btn-show-more");
      var z;

      for (z = 0; z < btn.length; z++) {
        btn[z].addEventListener("click", function () {

          this.classList.toggle("active-box");
          var panel = this.previousElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    });

    pdoPage.callbacks['before'] = function (config) {
      var btn = document.querySelectorAll(".btn-show-more");
      var z;

      for (z = 0; z < btn.length; z++) {
        btn[z].addEventListener("click", function () {

          this.classList.toggle("active-box");
          var panel = this.previousElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    };
  }

})();
