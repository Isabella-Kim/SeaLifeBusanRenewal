$(document).ready(function () {
  $(".m_sub_inner").hide(); //모든 서브메뉴들 숨김
  $(".m_menu_list a").click(function () {
    if ($("+div ol div", this).css("display") == "none") {
      $(".m_sub_menu_wrapper ol div").slideUp(); //모든 슬라이드업
      $("+div ol div", this).slideDown(); //클릭한 그것의 인접div만 슬라이드다운
    } else {
      $("+div ol div", this).slideUp();
    }
  });
});
