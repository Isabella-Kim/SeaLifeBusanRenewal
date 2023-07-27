/* To Do List
1. 스크롤을 내리는데 스크롤 길이가 메인비주얼보다 크면 ( < 600 or 800 )
2. 사이드 퀵메뉴가 등장하고
3. 계속 따라다님
*/
$(document).ready(function () {
  $(window).scroll(function () {
    // 스크롤이벤트가 발생했을 때
    let Top = $(window).scrollTop();
    // top에서부터의 스크롤 길이를 변수에 저장
    if (Top > 800) {
      // 메인비주얼(+배너)의 길이인 800보다 스크롤 길이가 커지면
      $(".quickBtns").addClass("on");
      //on 클래스추가
    } else {
      $(".quickBtns").removeClass("on");
    }
  });
});
