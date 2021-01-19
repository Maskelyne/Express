'use strict';

(function () {

  var modal = document.querySelector('.modal');
  var modalFeedback = document.querySelector('.modal--feedback');
  var modalThanks = document.querySelector('.modal--thanks');

  if (modalFeedback) {

    const KEY_CODE = 27;

    var btnOpenModal = document.querySelector('.btn-js');
    var modalClose = document.querySelectorAll('.modal__btn-closed');


    var openModal = function (evt) {
      evt.preventDefault();

      modalFeedback.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    };

    var closeModal = function (evt) {
      evt.preventDefault();

      modalFeedback.classList.remove('modal--active');
      document.body.style.overflow = '';
    };

    var overlayModal = function (evt) {
      evt.preventDefault();

      if (evt.target === modal) {

        modalFeedback.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    var keydownModal = function (evt) {
      evt.preventDefault();

      if (evt.keyCode === KEY_CODE) {

        modalFeedback.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    };

    btnOpenModal.addEventListener('click', openModal);
    window.addEventListener('keydown', keydownModal);
    modal.addEventListener('click', overlayModal);

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', closeModal);
    }
  }

  // if (modalThanks) {
  //
  //   const KEY_CODE = 27;
  //
  //   var btnOpenModal = document.querySelector('.btn-js');
  //   var modalClose = document.querySelectorAll('.modal__btn-closed');
  //
  //
  //   var openModal = function (evt) {
  //     evt.preventDefault();
  //
  //     modalThanks.classList.add('modal--active');
  //     document.body.style.overflow = 'hidden';
  //   };
  //
  //   var closeModal = function (evt) {
  //     evt.preventDefault();
  //
  //     modalThanks.classList.remove('modal--active');
  //     document.body.style.overflow = '';
  //   };
  //
  //   var overlayModal = function (evt) {
  //     evt.preventDefault();
  //
  //     if (evt.target === modal) {
  //
  //       modalThanks.classList.remove('modal--active');
  //       document.body.style.overflow = '';
  //     }
  //   };
  //
  //   var keydownModal = function (evt) {
  //     evt.preventDefault();
  //
  //     if (evt.keyCode === KEY_CODE) {
  //
  //       modalThanks.classList.remove('modal--active');
  //       document.body.style.overflow = '';
  //     }
  //   };
  //
  //   btnOpenModal.addEventListener('click', openModal);
  //   window.addEventListener('keydown', keydownModal);
  //   modal.addEventListener('click', overlayModal);
  //
  //   for (var i = 0; i < modalClose.length; i++) {
  //     modalClose[i].addEventListener('click', closeModal);
  //   }
  // }

})();
