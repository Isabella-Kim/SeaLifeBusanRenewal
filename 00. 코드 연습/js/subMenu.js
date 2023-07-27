$(document).ready(function () {
  $(".sub_menu_wrapper").hide(); //모든 서브메뉴숨김
  $(".mega_menu > li").hover(function () {
    if ($(".sub_menu_wrapper", this).css("display") == "none") {
      $(".sub_menu_wrapper", this).slideDown(); //hover한 그것의 서브메뉴만 슬라이드다운
      $(this).addClass("active");
    } else {
      $(".sub_menu_wrapper", this).slideUp();
      $(".sub_menu_wrapper").removeClass("active");
    }
    //$("#img").css("transform", "rotate(-90deg)");
  });
});

/*
$(document).ready(function () {
  $(".mega_menu > li").hover(function () {
    // mega_menu의 li에 hover시
    if ($(this).hasClass("active")) {
      // hover된 this가 active 클래스를 가지고있다면
      $(this).children(".sub_menu_wrapper").css("opacity", "0");
      // this의 자식요소중 클래스가 .sub_menu_wrapper인 것의 css visibility를 hidden으로
      $(this).removeClass();
    } else {
      $(this).addClass("active");
      // hover된 this가 active 클래스를 가지고있지 않다면
      $(this).children(".sub_menu_wrapper").css("opacity", "1");
      // this의 자식요소중 클래스가 .sub_menu_wrapper인 것의 css visibility를 visible로

      // opacity가 아니라 visibility를 사용한 이유 : opacity를 사용한 경우에는 li에 hover하지 않아도 서브메뉴가 숨겨진 부분에 마우스가 지나치면 서브메뉴가 보이는 문제가 발생하였음. 따라서 이를 해결하기 위하여 visibility를 사용함.
    }
  });
});
// code reference: https://ieme.tistory.com/21
*/
