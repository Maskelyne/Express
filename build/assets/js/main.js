/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';

(function () {

  let btn = document.querySelectorAll('a[href^="tel:"]');

  let resizeWindow = function (evt) {
    if (window.innerWidth <= 1023) {
      evt.stopPropagation();
    } else {
      evt.preventDefault();
    }
  };

  btn.forEach(function (item) {
    item.addEventListener('click', resizeWindow);
  });

  btn.forEach(function (item) {
    item.addEventListener('resize', resizeWindow);
  });

})();
'use strict';

(function () {

  var headerMenu = document.querySelector('.main-header__nav');

  if (headerMenu && window.innerWidth <= 1023) {

    var burgerBtn = document.querySelector('.main-header__burger');
    var burgerSocial = document.querySelector('.main-header__link');
    var headerSocial = document.querySelector('.main-header__tel');
    var headerWrapMenu = document.querySelector('.main-header__wrap-menu');
    var headerWrapActive = document.querySelector('.main-header__wrap')

    var activeMenu = function () {

      if (burgerBtn.classList.contains('main-header__burger--closed')) {
        burgerBtn.classList.remove('main-header__burger--closed');
        burgerBtn.classList.add('main-header__burger--active');
        headerMenu.classList.add('main-header__nav--active');
        headerSocial.classList.remove('main-header__tel--active');
        headerSocial.classList.add('main-header__tel--closed');
        document.body.style.overflow = 'hidden';
      } else {
        burgerBtn.classList.add('main-header__burger--closed');
        burgerBtn.classList.remove('main-header__burger--active');
        headerMenu.classList.remove('main-header__nav--active');
        document.body.style.overflow = '';
      }

    };

    var activeSocial = function (evt) {
      evt.preventDefault();

      if (headerSocial.classList.contains('main-header__tel--closed')) {
        headerSocial.classList.remove('main-header__tel--closed');
        headerSocial.classList.add('main-header__tel--active');
        burgerBtn.classList.remove('main-header__burger--active');
        burgerBtn.classList.add('main-header__burger--closed');
        headerMenu.classList.remove('main-header__nav--active');
        document.body.style.overflow = 'hidden';
      } else {
        headerSocial.classList.add('main-header__tel--closed');
        headerSocial.classList.remove('main-header__tel--active');
        document.body.style.overflow = '';
      }

    };

    var activeWrapMenu = function (evt) {
      evt.preventDefault();

      headerWrapMenu.classList.toggle('main-header__wrap-menu--active');
      headerWrapActive.classList.toggle('main-header__wrap--active');
    };

    burgerBtn.addEventListener('click', activeMenu);
    burgerSocial.addEventListener('click', activeSocial);
    headerWrapMenu.addEventListener('click', activeWrapMenu);

  }

})();
'use strict';

(function () {

  var serviceSlider = document.querySelector('.service-slider__wrapper')
  var feedbackSlider = document.querySelector('.feedback__swiper-container');
  var aboutSlider = document.querySelector('.about__banners');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      effect: 'fade',
      slidesPerView: 1,
      allowTouchMove: false,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  };

  if (serviceSlider) {
    servicesSliderDesk(serviceSlider);
  }

  var feedbackSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (feedbackSlider) {
    feedbackSliderDesk(feedbackSlider);
  }

  var aboutSliderDesk = function (el) {
    return new Swiper(el, {
      slidesPerView: 5,
      spaceBetween: 40,
      slidesPerGroup:1,
      loop:true,
      loopFillGroupWithBlank:true,
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      breakpoints: {
        320:{
          slidesPerView: 2,
        },
        480:{
          slidesPerView: 3,
          spaceBetween:30
        },
        767:{
          slidesPerView:4,
          spaceBetween:30
        },
        1200:{
          slidesPerView:5,
          spaceBetween: 40,
        },
      }
    });
  };

  if (aboutSlider) {
    aboutSliderDesk(aboutSlider);
  }


})();
"use strict";

(function () {

  var formOrder = document.querySelector('.form-order__box');
  var btnRevers = document.querySelector('.button-revers');

  if (btnRevers) {

    var number = 0;
    var swapValues = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';

      var tmp = document.querySelector("#point-1").value;
      document.querySelector("#point-1").value = document.querySelector("#point-2").value;
      document.querySelector("#point-2").value = tmp;
    }

    btnRevers.addEventListener('click', swapValues);

    $(document).ready(function(){
      $("#user-phone").inputmask("+375 (99) 999-99-99",
        {
          showMaskOnHover: false,
          showMaskOnFocus: true,
        });
    });

    $("#point-1").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#point-2").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#calendar").click(function () {
      if ($('#point-3').hasClass("not-empty")) {
        $('#point-3').removeClass("not-empty");
      } else {
        $('#point-3').addClass("not-empty");
      }
    });

    $("#point-3").click(function () {
      if ($('#point-3').hasClass("not-empty")) {
        $('#point-3').removeClass("not-empty");
      } else {
        $('#point-3').addClass("not-empty");
      }
    });

    $("#weight").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#volume").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-phone").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-email").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-company").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    $("#user-text").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });

    var inputmask_options;

    inputmask_options = {
      mask: "99-99-9999",
      alias: "date",
      showMaskOnHover: false,
      showMaskOnFocus: true,
    };

    $("#point-3").inputmask(inputmask_options);

    var $btn = $('#calendar'),
      $input = $('#point-3'),
      dp = $input.datepicker({
        showEvent: 'button',
      }).data('datepicker');

    $btn.on('click', function(){
      dp.show();
      $input.focus();
    });

  }

  $(document).ready(function() {
    $('input[type="file"]').change(function () {
      var file = this.files; //Files[0] = 1st file
      if (file[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(file[0], 'UTF-8');
        reader.onload = function (event) {
          var result = event.target.result;
          $('.user-img').attr('src', event.target.result);
        };
      }
    })
  });

  $("input[type='file']").on("change", function () {
    var numFiles = $(this).get(0).files.length;
    $('.file-res').css('display', 'flex');
    $('.file-res span').text('Выбрано файлов:' + ' ' + numFiles);
  });


  $('.reset-file').click(function (e) {
    e.preventDefault();
    $('input[type="file"]').val('');
    $('.file-res').css('display', 'none');
  })

  // var btnCalc = document.querySelector('.btn-calc');
  //
  // var validate = function (evt) {
  //   evt.preventDefault();
  //   //Считаем значения из полей name и email в переменные x и y
  //   var x = document.forms[0]['name'].value;
  //   var y = document.forms[0]['email'].value;
  //   //Если поле name пустое выведем сообщение и предотвратим отправку формы
  //   if (x.length == 0) {
  //     document.getElementById('namef').innerHTML = '*данное поле обязательно для заполнения';
  //     return false;
  //   }
  //   //Если поле email пустое выведем сообщение и предотвратим отправку формы
  //   if (y.length == 0) {
  //     document.getElementById('emailf').innerHTML = '*данное поле обязательно для заполнения';
  //     return false;
  //   }
  //   //Проверим содержит ли значение введенное в поле email символы @ и .
  //   var at = y.indexOf("@");
  //   var dot = y.indexOf(".");
  //   //Если поле не содержит эти символы знач email введен не верно
  //   if (at < 1 || dot < 1) {
  //     document.getElementById('emailf').innerHTML = '*email введен не верно';
  //     return false;
  //   }
  // }
  //
  // btnCalc.addEventListener('click', validate);

})();
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


  $(window).on('load resize', function(){
    if ($(window).width() <= 1024) {
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

})();
"use strict";

(function () {

  var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [53.900448, 27.600602], // координаты центра на карте
      zoom: 16, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    myMapTemp.behaviors.disable('scrollZoom');
    var myPlacemarkTemp = new ymaps.Placemark([53.900448, 27.600602], {
      balloonContent: "переулок Козлова, 24А",
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/png/map-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  function loadScript(url, callback) {
    var script = document.createElement("script");
    if (script.readyState) {  // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  var ymap = function () {
    $('.ymap-container').mouseenter(function () {
        if (!check_if_load) {
          check_if_load = true;
          spinner.addClass('is-active');
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
            ymaps.load(init);
          });
        }
      }
    );
  }
  $(function () {
    ymap();
  });

})();
"use strict";

(function () {

  var weightInput = document.querySelector('#weight');
  var volumeInput = document.querySelector('#volume');
  var btnCalc = document.querySelector('.btn-calc');
  var priceText = document.querySelector('.form-order__price');
  var formOrderBox1 = document.querySelector('.form-order__box-1');
  var formOrderBox2 = document.querySelector('.form-order__box-2');

  if (priceText) {

    var obj = {
      cubs: [],
      weight: [150, 300, 550, 800, 1100, 1500, 2000, 2600, 3300, 4000],
      price: {
        volume: [60, 70, 90, 120, 150, 180, 210, 240, 270, 300],
        volume2: [80, 85, 90, 140, 170, 200, 230, 260, 290, 320],
        volume3: [100, 100, 130, 160, 190, 220, 250, 280, 310, 340],
        volume4: [120, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        volume5: [150, 150, 170, 200, 230, 260, 290, 320, 350, 380],
        volume6: [200, 200, 210, 220, 250, 280, 310, 340, 370, 400],
        volume7: [220, 220, 230, 240, 270, 300, 330, 360, 390, 420],
        volume8: [280, 280, 290, 300, 330, 360, 390, 420, 450, 480],
        volume9: [350, 350, 360, 390, 420, 450, 480, 510, 540, 570],
        volume10: [420, 420, 430, 470, 500, 530, 560, 590, 620, 650],
      }
    };

    for (var i = 1; i <= 10; i++) {
      obj.cubs.push(i);
    }

    var calc = function (evt) {
      evt.preventDefault();

      var x = weightInput.value;
      var y = volumeInput.value;

      switch (true) {
        case x >= 1 && x <= obj.weight[0]:

          switch (true) {
            case y > 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume[0];
              break;
            case y > obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume[1];
              break;
            case y > obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume[2];
              break;
            case y > obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume[3];
              break;
            case y > obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume[4];
              break;
            case y > obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume[5];
              break;
            case y > obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume[6];
              break;
            case y > obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume[7];
              break;
            case y > obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume[8];
              break;
            case y > obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[0] && x <= obj.weight[1]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume2[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume2[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume2[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume2[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume2[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume2[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume2[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume2[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume2[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume2[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[1] && x <= obj.weight[2]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume3[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume3[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume3[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume3[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume3[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume3[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume3[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume3[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume3[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume3[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[2] && x <= obj.weight[3]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume4[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume4[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume4[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume4[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume4[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume4[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume4[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume4[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume4[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume4[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[3] && x <= obj.weight[4]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume5[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume5[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume5[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume5[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume5[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume5[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume5[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume5[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume5[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume5[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[4] && x <= obj.weight[5]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume6[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume6[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume6[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume6[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume6[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume6[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume6[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume6[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume6[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume6[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[5] && x <= obj.weight[6]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume7[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume7[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume7[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume7[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume7[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume7[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume7[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume7[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume7[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume7[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[6] && x <= obj.weight[7]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume8[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume8[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume8[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume8[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume8[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume8[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume8[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume8[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume8[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume8[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[7] && x <= obj.weight[8]:
          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume9[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume9[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume9[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume9[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume9[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume9[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume9[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume9[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume9[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume9[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        case x > obj.weight[8] && x <= obj.weight[9]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              priceText.innerHTML = obj.price.volume10[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              priceText.innerHTML = obj.price.volume10[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              priceText.innerHTML = obj.price.volume10[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              priceText.innerHTML = obj.price.volume10[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              priceText.innerHTML = obj.price.volume10[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              priceText.innerHTML = obj.price.volume10[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              priceText.innerHTML = obj.price.volume10[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              priceText.innerHTML = obj.price.volume10[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              priceText.innerHTML = obj.price.volume10[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              priceText.innerHTML = obj.price.volume10[9];
              break;
            default:
              priceText.innerHTML = ' 0';
          }
          break;

        default:
          priceText.innerHTML = ' 0';
      }

      if (formOrderBox1.classList.contains('form-order__active')) {
        formOrderBox1.classList.remove('form-order__active');
        formOrderBox2.classList.add('form-order__active');
      }
    };

    btnCalc.addEventListener('click', calc);
  }

})();