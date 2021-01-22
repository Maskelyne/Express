"use strict";

(function () {

  var weightInput = document.querySelector('#weight');
  var volumeInput = document.querySelector('#volume');
  var btnCalc = document.querySelector('.btn-calc');
  var priceText = document.querySelector('.form-order__price');
  var priceLabel = document.querySelector('.form-order__price-2');
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
      var input = priceText;

      switch (true) {
        case x >= 1 && x <= obj.weight[0]:

          switch (true) {
            case y > 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume[0];
              priceLabel.innerHTML = obj.price.volume[0];
              break;
            case y > obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume[1];
              priceLabel.innerHTML = obj.price.volume[1];
              break;
            case y > obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume[2];
              priceLabel.innerHTML = obj.price.volume[2];
              break;
            case y > obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume[3];
              priceLabel.innerHTML = obj.price.volume[3];
              break;
            case y > obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume[4];
              priceLabel.innerHTML = obj.price.volume[4];
              break;
            case y > obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume[5];
              priceLabel.innerHTML = obj.price.volume[5];
              break;
            case y > obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume[6];
              priceLabel.innerHTML = obj.price.volume[6];
              break;
            case y > obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume[7];
              priceLabel.innerHTML = obj.price.volume[7];
              break;
            case y > obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume[8];
              priceLabel.innerHTML = obj.price.volume[8];
              break;
            case y > obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume[9];
              priceLabel.innerHTML = obj.price.volume[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[0] && x <= obj.weight[1]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume2[0];
              priceLabel.innerHTML = obj.price.volume2[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume2[1];
              priceLabel.innerHTML = obj.price.volume2[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume2[2];
              priceLabel.innerHTML = obj.price.volume2[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume2[3];
              priceLabel.innerHTML = obj.price.volume2[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume2[4];
              priceLabel.innerHTML = obj.price.volume2[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume2[5];
              priceLabel.innerHTML = obj.price.volume2[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume2[6];
              priceLabel.innerHTML = obj.price.volume2[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume2[7];
              priceLabel.innerHTML = obj.price.volume2[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume2[8];
              priceLabel.innerHTML = obj.price.volume2[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume2[9];
              priceLabel.innerHTML = obj.price.volume2[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[1] && x <= obj.weight[2]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume3[0];
              priceLabel.innerHTML = obj.price.volume3[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume3[1];
              priceLabel.innerHTML = obj.price.volume3[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume3[2];
              priceLabel.innerHTML = obj.price.volume3[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume3[3];
              priceLabel.innerHTML = obj.price.volume3[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume3[4];
              priceLabel.innerHTML = obj.price.volume3[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume3[5];
              priceLabel.innerHTML = obj.price.volume3[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume3[6];
              priceLabel.innerHTML = obj.price.volume3[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume3[7];
              priceLabel.innerHTML = obj.price.volume3[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume3[8];
              priceLabel.innerHTML = obj.price.volume3[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume3[9];
              priceLabel.innerHTML = obj.price.volume3[9];
              break;
            default:
              input.value = ' 0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[2] && x <= obj.weight[3]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume4[0];
              priceLabel.innerHTML = obj.price.volume4[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume4[1];
              priceLabel.innerHTML = obj.price.volume4[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume4[2];
              priceLabel.innerHTML = obj.price.volume4[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume4[3];
              priceLabel.innerHTML = obj.price.volume4[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume4[4];
              priceLabel.innerHTML = obj.price.volume4[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume4[5];
              priceLabel.innerHTML = obj.price.volume4[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume4[6];
              priceLabel.innerHTML = obj.price.volume4[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume4[7];
              priceLabel.innerHTML = obj.price.volume4[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume4[8];
              priceLabel.innerHTML = obj.price.volume4[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume4[9];
              priceLabel.innerHTML = obj.price.volume4[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[3] && x <= obj.weight[4]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume5[0];
              priceLabel.innerHTML = obj.price.volume5[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume5[1];
              priceLabel.innerHTML = obj.price.volume5[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume5[2];
              priceLabel.innerHTML = obj.price.volume5[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume5[3];
              priceLabel.innerHTML = obj.price.volume5[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume5[4];
              priceLabel.innerHTML = obj.price.volume5[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume5[5];
              priceLabel.innerHTML = obj.price.volume5[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume5[6];
              priceLabel.innerHTML = obj.price.volume6[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume5[7];
              priceLabel.innerHTML = obj.price.volume5[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume5[8];
              priceLabel.innerHTML = obj.price.volume5[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume5[9];
              priceLabel.innerHTML = obj.price.volume5[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[4] && x <= obj.weight[5]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume6[0];
              priceLabel.innerHTML = obj.price.volume6[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume6[1];
              priceLabel.innerHTML = obj.price.volume6[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume6[2];
              priceLabel.innerHTML = obj.price.volume6[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume6[3];
              priceLabel.innerHTML = obj.price.volume6[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume6[4];
              priceLabel.innerHTML = obj.price.volume6[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume6[5];
              priceLabel.innerHTML = obj.price.volume6[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume6[6];
              priceLabel.innerHTML = obj.price.volume6[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume6[7];
              priceLabel.innerHTML = obj.price.volume6[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume6[8];
              priceLabel.innerHTML = obj.price.volume6[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume6[9];
              priceLabel.innerHTML = obj.price.volume6[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[5] && x <= obj.weight[6]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume7[0];
              priceLabel.innerHTML = obj.price.volume7[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume7[1];
              priceLabel.innerHTML = obj.price.volume7[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume7[2];
              priceLabel.innerHTML = obj.price.volume7[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume7[3];
              priceLabel.innerHTML = obj.price.volume7[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume7[4];
              priceLabel.innerHTML = obj.price.volume7[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume7[5];
              priceLabel.innerHTML = obj.price.volume7[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume7[6];
              priceLabel.innerHTML = obj.price.volume7[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume7[7];
              priceLabel.innerHTML = obj.price.volume7[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume7[8];
              priceLabel.innerHTML = obj.price.volume7[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume7[9];
              priceLabel.innerHTML = obj.price.volume7[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[6] && x <= obj.weight[7]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume8[0];
              priceLabel.innerHTML = obj.price.volume8[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume8[1];
              priceLabel.innerHTML = obj.price.volume8[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume8[2];
              priceLabel.innerHTML = obj.price.volume8[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume8[3];
              priceLabel.innerHTML = obj.price.volume8[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume8[4];
              priceLabel.innerHTML = obj.price.volume8[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume8[5];
              priceLabel.innerHTML = obj.price.volume8[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume8[6];
              priceLabel.innerHTML = obj.price.volume8[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume8[7];
              priceLabel.innerHTML = obj.price.volume8[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume8[8];
              priceLabel.innerHTML = obj.price.volume8[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume8[9];
              priceLabel.innerHTML = obj.price.volume8[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[7] && x <= obj.weight[8]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume9[0];
              priceLabel.innerHTML = obj.price.volume9[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume9[1];
              priceLabel.innerHTML = obj.price.volume9[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume9[2];
              priceLabel.innerHTML = obj.price.volume9[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume9[3];
              priceLabel.innerHTML = obj.price.volume9[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume9[4];
              priceLabel.innerHTML = obj.price.volume9[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume9[5];
              priceLabel.innerHTML = obj.price.volume9[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume9[6];
              priceLabel.innerHTML = obj.price.volume9[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume9[7];
              priceLabel.innerHTML = obj.price.volume9[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume9[8];
              priceLabel.innerHTML = obj.price.volume9[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume9[9];
              priceLabel.innerHTML = obj.price.volume9[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        case x > obj.weight[8] && x <= obj.weight[9]:

          switch (true) {
            case y >= 0 && y <= obj.cubs[0]:
              input.value = obj.price.volume10[0];
              priceLabel.innerHTML = obj.price.volume10[0];
              break;
            case y >= obj.cubs[0] && y <= obj.cubs[1]:
              input.value = obj.price.volume10[1];
              priceLabel.innerHTML = obj.price.volume10[1];
              break;
            case y >= obj.cubs[1] && y <= obj.cubs[2]:
              input.value = obj.price.volume10[2];
              priceLabel.innerHTML = obj.price.volume10[2];
              break;
            case y >= obj.cubs[2] && y <= obj.cubs[3]:
              input.value = obj.price.volume10[3];
              priceLabel.innerHTML = obj.price.volume10[3];
              break;
            case y >= obj.cubs[3] && y <= obj.cubs[4]:
              input.value = obj.price.volume10[4];
              priceLabel.innerHTML = obj.price.volume10[4];
              break;
            case y >= obj.cubs[4] && y <= obj.cubs[5]:
              input.value = obj.price.volume10[5];
              priceLabel.innerHTML = obj.price.volume10[5];
              break;
            case y >= obj.cubs[5] && y <= obj.cubs[6]:
              input.value = obj.price.volume10[6];
              priceLabel.innerHTML = obj.price.volume10[6];
              break;
            case y >= obj.cubs[6] && y <= obj.cubs[7]:
              input.value = obj.price.volume10[7];
              priceLabel.innerHTML = obj.price.volume10[7];
              break;
            case y >= obj.cubs[7] && y <= obj.cubs[8]:
              input.value = obj.price.volume10[8];
              priceLabel.innerHTML = obj.price.volume10[8];
              break;
            case y >= obj.cubs[8] && y <= obj.cubs[9]:
              input.value = obj.price.volume10[9];
              priceLabel.innerHTML = obj.price.volume10[9];
              break;
            default:
              input.value = '0';
              priceLabel.innerHTML = '0';
          }
          break;

        default:
          input.value = '0';
          priceLabel.innerHTML = '0';
      }

      if (formOrderBox1.classList.contains('form-order__active')) {
        formOrderBox1.classList.remove('form-order__active');
        formOrderBox2.classList.add('form-order__active');
      }
    };

    btnCalc.addEventListener('click', calc);
  }


})();
