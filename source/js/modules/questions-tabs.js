'use strict';

(function () {

  var questions = document.querySelector('.questions');

  if (questions) {

    var questionsText = questions.querySelectorAll('.questions__box-left li');
    var questionsBox = document.querySelectorAll('.questions__box-right article');

    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };

    if (questionsText) {
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
  }

})();
