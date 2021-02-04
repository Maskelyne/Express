'use strict';

(function () {

  var questions = document.querySelector('.questions');
  var questionsMobile = document.querySelector('.questions-mobile');
  var questionsText = document.querySelectorAll('.questions__box-left li');
  var questionsBox = document.querySelectorAll('.questions__box-right article');

  if (questions) {

    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };

    questionsText.forEach(function (item, i) {
      questionsText[0].classList.add('questions__item-active');
      questionsBox[0].classList.add('questions__text-active');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        removeActive(questionsText, 'questions__item-active');
        removeActive(questionsBox, 'questions__text-active');
        questionsText[i].classList.add('questions__item-active');
        questionsBox[i].classList.add('questions__text-active');
      });
    });
  }

  if (questionsMobile && window.innerWidth < 1023) {
    var questionsBox = document.querySelectorAll('.questions-mobile__box'),
      active = document.getElementsByClassName('questions-box-active');

    Array.from(questionsBox).forEach(function(item, i, panelItem) {
      item.addEventListener('click', function(e) {
        if (active.length > 0 && active[0] !== this) {
          active[0].classList.remove('questions-box-active');
        }
        this.classList.toggle('questions-box-active');
      });
    });
  }

})();
