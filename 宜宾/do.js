document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        // 获取滚动条的当前位置
        var scrollPosition = window.scrollTop;

        // 获取文档的高度
        var documentHeight = document.documentElement.scrollHeight;

        // 获取视口的高度
        var viewportHeight = window.innerHeight;

        // 如果滚动到距离顶部 50% 的位置，则应用 fadeOut 动画
        if (scrollPosition >= documentHeight / 2 - viewportHeight / 2) {
            document.querySelector('#boxm').classList.add('slide-bck-right');
        } else {
            document.querySelector('#boxm').classList.remove('slide-bck-right');
        }
    });
});