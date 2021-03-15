'use strict';

(function () {

  var timeTable = document.querySelector('.timetable');
  var timeTableText = document.querySelectorAll('.timetable__text p');
  var timeTableBox = document.querySelectorAll('.timetable__inner table');
  var timeTableText2 = document.querySelectorAll('.timetable__text-2 p');
  var timeTableBox2 = document.querySelectorAll('.timetable__inner-mobile table');

  if (timeTable) {
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };

    timeTableText.forEach(function (item, i) {
      timeTableText[0].classList.add('active-tabs');
      timeTableBox[0].classList.add('active-table');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        removeActive(timeTableText, 'active-tabs');
        removeActive(timeTableBox, 'active-table');
        timeTableText[i].classList.add('active-tabs');
        timeTableBox[i].classList.add('active-table');
      });
    });
  }

  if (timeTableText2) {
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };

    timeTableText2.forEach(function (item, i) {
      timeTableText2[0].classList.add('active-tabs');
      timeTableBox2[0].classList.add('active-table');
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        removeActive(timeTableText2, 'active-tabs');
        removeActive(timeTableBox2, 'active-table');
        timeTableText2[i].classList.add('active-tabs');
        timeTableBox2[i].classList.add('active-table');
      });
    });
  }

})();
