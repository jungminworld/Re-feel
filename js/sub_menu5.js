$(function () {
  //.gnb>li에 마우스를 올리면 .sub전체와 .sub_bg가 슬라이드 다운되며 내려온다.
  //header에서 마우스가 나갈때 sub전체와 .sub_bg가 슬라이 업된다.
  $("#gnb>li").mouseover(function () {
    $(".sub").stop().slideDown();
    $(".sub_bg").stop().slideDown();
  });
  $("#header").mouseleave(function () {
    $(".sub").stop().slideUp();
    $(".sub_bg").stop().slideUp();
  });
});