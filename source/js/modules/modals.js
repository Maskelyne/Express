'use strict';

(function () {
  const KEY_CODE = 27;

  var modalClose = document.querySelectorAll('.modal__btn-closed');
  var modal = document.querySelector('.modal');
  var modalFeedback = document.querySelector('.modal--feedback');
  var modalThanks = document.querySelector('.modal--thanks');

  if (modalFeedback) {

    const KEY_CODE = 27;
    var modalClose = document.querySelectorAll('.modal__btn-closed');

    var closeModal = function (evt) {
      evt.preventDefault();

      modalFeedback.classList.remove('modal--active');
      document.body.style.overflow = '';
    };

    var overlayModal = function (evt) {

      if (evt.target === modal) {
        evt.preventDefault();

        modalFeedback.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    var keydownModal = function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalFeedback.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('keydown', keydownModal);
    modal.addEventListener('click', overlayModal);

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', closeModal);
    }
  }

  if (modalThanks) {

    var closeModal = function (evt) {
      evt.preventDefault();

      modalThanks.classList.remove('modal--active');
      document.body.style.overflow = '';
    };

    var overlayModal = function (evt) {

      if (evt.target === modal) {
        evt.preventDefault();

        modalThanks.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    var keydownModal = function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalThanks.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    modal.addEventListener('click', overlayModal);
    window.addEventListener('keydown', keydownModal);

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', closeModal);
    }
  }

})();
