$(window).scroll(function () {
  //두가지 경우 스크롤양이 0일때
  //스크롤 양이 0이 아닐때
  let scrollAmount = $(window).scrollTop();
  if (scrollAmount == 0) {
    $("header").removeClass("backcol");
  } else {
    $("header").addClass("backcol");
  }
});
