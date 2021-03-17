'use strict';

(function () {

  $(document).on('af_complete', function (event, response) {

    var modalFeedback = document.querySelector('.modal--feedback');
    var modalThanks = document.querySelector('.modal--thanks');
    var form = response.form;

    if (form.attr('id') === 'ec-form-resource-3') {
      modalFeedback.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    } else if (form.attr('id') === 'form-order__calc') {
      modalThanks.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    } else if (form.attr('id') === 'form-order__contacts') {
      modalThanks.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    } else if (form.attr('id') === 'form-order__delivery') {
      modalThanks.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    }

    else {
      console.log(response);
    }

  });


  document.ondragstart = test;
  //запрет на перетаскивание
  document.onselectstart = test;
  //запрет на выделение элементов страницы
  document.oncontextmenu = test;
  //запрет на выведение контекстного меню
  function test() {
    return false;
  }

})();


