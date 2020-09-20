(function(document, window) {
    var designWidth = 750; // 设计稿宽度
    var rem2px = 37.5; // 在屏幕宽度375px，的时候，设置根元素字体大小 37.5px
    // 根据屏幕宽度 动态计算根元素的 字体大小
    document.documentElement.style.fontSize =
        (window.innerWidth / designWidth) * rem2px + "px";
})(document, window);