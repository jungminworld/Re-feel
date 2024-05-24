$(function () {
    $(".like").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "images/btn_like_fill.png");
        } else {
            $(this).attr("src", "images/btn_like.png");
        }
    });

    $(".like").mouseenter(function () {

        $(this).attr("src", "images/btn_like_fill.png");
    });
    $(".like").mouseout(function () {

        if ($(this).hasClass("on")) {
            $(this).attr("src", "images/btn_like_fill.png");
        } else {
            $(this).attr("src", "images/btn_like.png");
        }
    });
});