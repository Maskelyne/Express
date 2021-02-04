'use strict';

(function () {

  var questions = document.querySelector('.questions');
  var questionsText = questions.querySelectorAll('.questions__box-left li');
  var questionsBox = document.querySelectorAll('.questions__box-right article');

  if (questionsText) {
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

    var questionsBox2 = document.querySelectorAll('.questions-mobile li');

    if (questionsBox2) {

      questionsBox2.forEach(function (item, i) {
        item.addEventListener('click', function (evt) {
          evt.preventDefault();

          questionsBox2.forEach(function (box, z) {
            if (questionsBox2[z].classList.contains('questions-box-active')) {
              questionsBox2[z].classList.remove('questions-box-active');
              console.log('true');
            } else {
              questionsBox2[z].classList.remove('questions-box-active');
            }
          });

          this.classList.add('questions-box-active');

        });
      });

    }

})();
