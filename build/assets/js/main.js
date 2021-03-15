/*

  * подключение js-модулей
  * //= modules/file.js

*/

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
'use strict';

(function () {

  var headerMenu = document.querySelector('.main-header__nav');

  if (headerMenu && window.innerWidth <= 1023) {

    var burgerBtn = document.querySelector('.main-header__burger');
    var burgerSocial = document.querySelector('.main-header__link');
    var headerSocial = document.querySelector('.main-header__tel');
    var headerWrapMenu = document.querySelector('.main-header__link-tablet');
    var headerWrapActive = document.querySelector('.main-header__wrap');

    var activeMenu = function () {

      if (burgerBtn.classList.contains('main-header__burger--closed')) {
        burgerBtn.classList.remove('main-header__burger--closed');
        burgerBtn.classList.add('main-header__burger--active');
        headerMenu.classList.add('main-header__nav--active');
        headerSocial.classList.remove('main-header__tel--active');
        headerSocial.classList.add('main-header__tel--closed');
        document.body.style.overflow = 'hidden';
        headerMenu.style.width = '100%';
        headerMenu.style.height = '100%';
      } else {
        burgerBtn.classList.add('main-header__burger--closed');
        burgerBtn.classList.remove('main-header__burger--active');
        headerMenu.classList.remove('main-header__nav--active');
        document.body.style.overflow = '';

        var layout = function () {
          headerMenu.style.width = '';
          headerMenu.style.height = '';
        };

        setTimeout(layout, 500);
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
        headerSocial.style.width = '100%';
        headerSocial.style.height = '100%';
      } else {
        headerSocial.classList.add('main-header__tel--closed');
        headerSocial.classList.remove('main-header__tel--active');
        document.body.style.overflow = '';

        var layout = function () {
          headerSocial.style.width = '';
          headerSocial.style.height = '';
        };

        setTimeout(layout, 500);
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
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          allowTouchMove: false,
        },
        320: {
          allowTouchMove: true,
        }
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      centeredSlides: true,
      slideToClickedSlide: true,
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

  var btnRevers = document.querySelector('.button-revers');
  var formCalc = document.querySelector('#form-order__calc');
  var formDelivery = document.querySelector('#form-order__delivery');

  if (btnRevers) {

    var number = 0;
    var swapValues = function () {
      number = number + 180;
      btnRevers.style.transform = 'rotate(' + number + 'deg)';

      if (formCalc) {
        var input = document.querySelector("#point-1").value;
        document.querySelector("#point-1").value = document.querySelector("#point-2").value;
        document.querySelector("#point-2").value = input;
      }

      if (formDelivery) {
        var input1 = document.querySelector("#point-1").value;
          document.querySelector("#point-1").value = document.querySelector("#point-2").value;
          document.querySelector("#point-2").value = input1;

        var input2 = document.querySelector('#street-1').value;
          document.querySelector('#street-1').value = document.querySelector('#street-2').value;
          document.querySelector('#street-2').value = input2;

        var input3 = document.querySelector('#house-1').value;
          document.querySelector('#house-1').value = document.querySelector('#house-2').value;
          document.querySelector('#house-2').value = input3;

        var input4 = document.querySelector('#korp-1').value;
          document.querySelector('#korp-1').value = document.querySelector('#korp-2').value;
          document.querySelector('#korp-2').value = input4;

        var input5 = document.querySelector('#room-1').value;
          document.querySelector('#room-1').value = document.querySelector('#room-2').value;
          document.querySelector('#room-2').value = input5;
      }
    }

    btnRevers.addEventListener('click', swapValues);

    var inputmask_options;

    inputmask_options = {
      mask: "99-99-9999",
      alias: "date",
      showMaskOnHover: false,
      showMaskOnFocus: true,
    };

    $("#point-3").inputmask(inputmask_options);
    $("#time-d").inputmask("hh:mm", {showMaskOnHover: false, showMaskOnFocus: true});

    var $input = $('#point-3'),
      dp = $input.datepicker({
        showEvent: 'focus',
      }).data('datepicker');

    $input.on('click', function(){
      dp.show();
      $input.focus();
    });
  }

  $(document).ready(function() {
    $('.image').change(function () {
      var file = this.files;
      console.log(file[0].type);
      if (file[0].type === 'image/jpeg' || file[0].type === 'image/png' || file[0].type === 'image/jpg') {
        var reader = new FileReader();
        reader.readAsDataURL(file[0], 'UTF-8');
        reader.onload = function (event) {
          var result = event.target.result;
          $('.user-img').attr('src', event.target.result);
        };
      } else {
        alert('Выберите подходящий формат изображения: jpeg/jpg/png');
      }
    })
  });

  $('.file').on("change", function () {
    var file = this.files;
    var numFiles = $(this).get(0).files.length;
    if (file[0].type === 'image/png' || file[0].type === 'image/jpeg' || file[0].type === 'image/jpg') {
      $('.file-res').css('display', 'flex');
      $('.file-res span').text('Выбрано файлов:' + ' ' + numFiles);
    } else {
      alert('Выберите подходящий формат изображения: jpeg/jpg/png');
    }

  });


  $('.reset-file').click(function (e) {
    e.preventDefault();
    $('input[type="file"]').val('');
    $('.file-res').css('display', 'none');
  })

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

  $('#point-3').on('keyup change blur', function() {
    if ($(this).val().trim() !== '') {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
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

  $("#user-name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user-contacts").keyup(function () {
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

  $("#ec-user_contacts-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-text-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-user_name-resource-3").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#ec-user_email-resource-3").keyup(function () {
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

  $("#street-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#street-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#house-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#korp-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#room-1").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#house-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#korp-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#room-2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#time-d").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

})();
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
      center: [53.952730, 27.617679], // координаты центра на карте
      zoom: 16, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    myMapTemp.behaviors.disable('scrollZoom');
    var myPlacemarkTemp = new ymaps.Placemark([53.952730, 27.617679], {
      balloonContent: "Логойский тракт, 27",
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

  var formCalc = document.querySelector('#form-order__calc');

  if (formCalc) {

    var weightInput = formCalc.querySelector('#weight');
    var volumeInput = formCalc.querySelector('#volume');
    var city1 = formCalc.querySelector('#point-1');
    var city2 = formCalc.querySelector('#point-2');
    var btnCalc = formCalc.querySelector('.btn-calc');
    var btnPrev = formCalc.querySelector('.button--prev-js');
    var priceText = formCalc.querySelector('.form-order__price');
    var priceLabel = formCalc.querySelector('.form-order__price-2');
    var formOrderBox1 = formCalc.querySelector('.form-order__box-1');
    var formOrderBox2 = formCalc.querySelector('.form-order__box-2');
    var error = formCalc.querySelectorAll('.error-text');
    var regex = /[0-9]/g;
    var weightRegex = /[A-Za-zА-Яа-яЁё]/g;

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

    city1.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[0].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[0].innerHTML = '';
      }
    };

    city2.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[1].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[1].innerHTML = '';
      }
    };

    weightInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[2].innerHTML = 'Символы запрещены для ввода';
      } else if (weightInput.value <= 0 || weightInput.value > 4000) {
        error[2].innerHTML = 'Мин 1 Макс 4000';
      } else {
        error[2].innerHTML = '';
      }
    };

    volumeInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[3].innerHTML = 'Символы запрещены для ввода';
      } else if (volumeInput.value <= 0 || volumeInput.value > 10 ) {
        error[3].innerHTML = 'Мин 1 Макс 10';
      } else {
        error[3].innerHTML = '';
      }
    };

    var calc = function (evt) {
      evt.preventDefault();

      var x = weightInput.value;
      var y = volumeInput.value;
      var input = priceText;

      switch (true) {
        case !city1.value && !city2.value && !weightInput.value && !volumeInput.value:
          error[0].innerHTML = 'Заполните поле';
          error[1].innerHTML = 'Заполните поле';
          error[2].innerHTML = 'Мин 1 Макс 4000';
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        case !city1.value:
          error[0].innerHTML = 'Заполните поле';
          break;
        case city1.value:
          error[0].innerHTML = '';
          break
        case !city2.value:
          error[1].innerHTML = 'Заполните поле';
          break
        case city2.value:
          error[1].innerHTML = '';
          break;
        case !weightInput.value:
          error[2].innerHTML = 'Мин 1 Макс 4000';
          break;
        case weightInput.value:
          error[2].innerHTML = '';
          break;
        case !volumeInput.value:
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        case volumeInput.value:
          error[3].innerHTML = '';
          break;
        case weightInput.value <= 0 || weightInput.value > 4000:
          error[2].innerHTML = 'Мин 1 Макс 4000';
          break;
        case volumeInput.value <= 0 || volumeInput.value > 10:
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        default:
          error[0].innerHTML = '';
          error[1].innerHTML = '';
          error[2].innerHTML = '';
          error[3].innerHTML = '';
          formOrderBox1.classList.remove('form-order__active');
          formOrderBox2.classList.add('form-order__active');
      }

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
    };

    var prevStep = function (evt) {
      evt.preventDefault();

      formOrderBox1.classList.add('form-order__active');
      formOrderBox2.classList.remove('form-order__active');
    };

    btnCalc.addEventListener('click', calc);
    btnPrev.addEventListener('click', prevStep);
  }

})();
"use strict";

(function () {

  var formDelivery = document.querySelector('#form-order__delivery');
  var error = document.querySelectorAll('.error-text');

  if (formDelivery) {

    var weightInput = formDelivery.querySelector('#weight');
    var volumeInput = formDelivery.querySelector('#volume');
    var city1 = formDelivery.querySelector('#point-1');
    var city2 = formDelivery.querySelector('#point-2');
    var btnDel = formDelivery.querySelector('.button--calc-js');
    var regex = /[0-9]/g;
    var weightRegex = /[A-Za-zА-Яа-яЁё]/g;

    city1.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[0].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[0].innerHTML = '';
      }
    };

    city2.oninput = function () {
      if (this.value.match(regex)) {
        this.value = this.value.replace(regex, '');
        error[1].innerHTML = 'Символы запрещены для ввода';
      } else {
        error[1].innerHTML = '';
      }
    };

    weightInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[2].innerHTML = 'Символы запрещены для ввода';
      } else if (weightInput.value <= 0 || weightInput.value > 4000) {
        error[2].innerHTML = 'Мин 1 Макс 4000';
      } else {
        error[2].innerHTML = '';
      }
    };

    volumeInput.oninput = function () {
      if (this.value.match(weightRegex)) {
        this.value = this.value.replace(weightRegex, '');
        error[3].innerHTML = 'Символы запрещены для ввода';
      } else if (volumeInput.value <= 0 || volumeInput.value > 10 ) {
        error[3].innerHTML = 'Мин 1 Макс 10';
      } else {
        error[3].innerHTML = '';
      }
    };

    var calcDel = function () {

      switch (true) {
        case weightInput.value === '':
          error[2].innerHTML = '';
          break;
        case volumeInput.value === '':
          error[3].innerHTML = '';
          break;
        case weightInput.value < 1 || weightInput.value > 4000:
          error[2].innerHTML = 'Мин 1 Макс 4000';
          break;
        case volumeInput.value < 1 || volumeInput.value > 10:
          error[3].innerHTML = 'Мин 1 Макс 10';
          break;
        default:
          error[0].innerHTML = '';
          error[1].innerHTML = '';
          error[2].innerHTML = '';
          error[3].innerHTML = '';
      }
    };

    btnDel.addEventListener('click', calcDel);
  }

  $('form').validate({
    ignore: ".ignore",
    messages: {
      name: 'Обязательное поле',
      phone: 'Введите номер телефона',
      tel: 'Введите номер телефона',
      user_contacts: 'Введите номер телефона',
      user_name: 'Обязательное поле',
      user_email: 'Неверный E-mail',
      email: 'Неверный E-mail',
    },
    errorElement: 'span',
  });

})();
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


  // document.ondragstart = test;
  // //запрет на перетаскивание
  // document.onselectstart = test;
  // //запрет на выделение элементов страницы
  // document.oncontextmenu = test;
  // //запрет на выведение контекстного меню
  // function test() {
  //   return false;
  // }

})();
"use strict";

(function () {

  // var maskList = $.masksSort($.masksLoad("assets/json/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
  // var maskOpts = {
  //   inputmask: {
  //     definitions: {
  //       '#': {
  //         validator: "[0-9]",
  //         cardinality: 1
  //       }
  //     },
  //     showMaskOnHover: false,
  //     autoUnmask: true,
  //     clearMaskOnLostFocus: true
  //   },
  //   match: /[0-9]/,
  //   replace: '#',
  //   list: maskList,
  //   listKey: "mask",
  //   onMaskChange: function (maskObj, determined) {
  //   }
  // };

  // $('#user-phone').change(function () {
  //   $('#user-phone').inputmask("remove");
  //   $('#user-phone').inputmasks(maskOpts);
  // });
  //
  // $('#user-phone').change();
  //
  // $('#ec-user_contacts-resource-3').change(function () {
  //   $('#ec-user_contacts-resource-3-phone').inputmask("remove");
  //   $('#ec-user_contacts-resource-3').inputmasks(maskOpts);
  // });
  //
  // $('#ec-user_contacts-resource-3').change();


})();
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

  $(window).on('load', function(){
    if ($(window).width() <= 1023) {
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

  var text = document.getElementById('page-unavailable__text-1');

  if (text && window.innerWidth >= 768) {
    var newDom = '';
    var animationDelay = 6;

    for (var i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char-1">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (var i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    var text = document.getElementById('page-unavailable__text-2');
    var newDom = '';
    var animationDelay = 6;

    for (var i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char-2">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (var i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }


  AOS.init({
    disable: function () {
      var maxWidth = 1024;
      return window.innerWidth < maxWidth;
    }
  });

  var btn = document.querySelectorAll(".btn-show-more");
  var z;
  if (btn) {

    for (z = 0; z < btn.length; z++) {
      btn[z].addEventListener("click", function () {

        this.classList.toggle("active-box");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    $(document).on('pdopage_load', function (e, config, response) {
      var btn = document.querySelectorAll(".btn-show-more");
      var z;

      for (z = 0; z < btn.length; z++) {
        btn[z].addEventListener("click", function () {

          this.classList.toggle("active-box");
          var panel = this.previousElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    });

    pdoPage.callbacks['before'] = function (config) {
      var btn = document.querySelectorAll(".btn-show-more");
      var z;

      for (z = 0; z < btn.length; z++) {
        btn[z].addEventListener("click", function () {

          this.classList.toggle("active-box");
          var panel = this.previousElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    };
  }

})();