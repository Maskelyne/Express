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
      modalFeedback.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    } else if (form.attr('id') === 'form-order__delivery') {
      modalFeedback.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      response.message = '';

    }

    else {
      console.log(response);
    }

  });

})();
