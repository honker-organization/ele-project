// (function flexible(window, document) {
//   var docEl = document.documentElement;
//   var dpr = window.devicePixelRatio || 1;

//   // adjust body font size
//   function setBodyFontSize() {
//     if (document.body) {
//       document.body.style.fontSize = "16px";
//     } else {
//       document.addEventListener("DOMContentLoaded", setBodyFontSize);
//     }
//   }
//   setBodyFontSize();

//   // set 1rem = viewWidth / 100
//   function setRemUnit() {
//     var rem = docEl.clientWidth / 10;
//     docEl.style.fontSize = rem + "px";
//   }

//   setRemUnit();

//   // reset rem unit on page resize
//   window.addEventListener("resize", setRemUnit);
//   window.addEventListener("pageshow", function(e) {
//     if (e.persisted) {
//       setRemUnit();
//     }
//   });

//   // detect 0.5px supports
//   if (dpr >= 2) {
//     var fakeBody = document.createElement("body");
//     var testElement = document.createElement("div");
//     testElement.style.border = ".5px solid transparent";
//     fakeBody.appendChild(testElement);
//     docEl.appendChild(fakeBody);
//     if (testElement.offsetHeight === 1) {
//       docEl.classList.add("hairlines");
//     }
//     docEl.removeChild(fakeBody);
//   }
// })(window, document);

(function(document, window) {
    var designWidth = 750; // 设计稿宽度
    var rem2px = 37.5; // 在屏幕宽度375px，的时候，设置根元素字体大小 37.5px
    // 根据屏幕宽度 动态计算根元素的 字体大小
    document.documentElement.style.fontSize =
        (window.innerWidth / designWidth) * rem2px + "px";
})(document, window);