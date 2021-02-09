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

  var text = document.getElementById('page-unavailable__text-1');

  if (text && window.innerWidth >= 768) {
    var newDom = '';
    var animationDelay = 6;

    for (var i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char-1">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (var i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    var text = document.getElementById('page-unavailable__text-2');
    var newDom = '';
    var animationDelay = 6;

    for (var i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char-2">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (var i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }


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
