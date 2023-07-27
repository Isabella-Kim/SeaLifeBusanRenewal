/* To Do List
1. 유의사항, 환불규정을 클릭하면
2. 아래쪽 숨겨진 내용 보이도록 act클래스 추가
3. 다시한번 누르면 act클래스 제거

* 피드백 : 환불규정은 보이도록
*/
$(document).ready(function () {
  $(".caution_box02 > .caution_content").addClass("act"); // 환불규정 보이도록
  $(".caution_heading").click(function () {
    //  .caution_heading을 클릭했을 때
    if ($("+div", this).css("display") == "none") {
      // 인접 div(.caution_content)의 display가 none이라면
      $("a >img", this).addClass("act");
      // 화살표 방향 바꾸기
      $("+div", this).addClass("act");
      // .caution_content에 active클래스 추가
    } else {
      $("a >img", this).removeClass("act"); // 화살표 방향 바꾸기
      $("+div", this).removeClass("act"); // 다시 클릭된 .caution_content에 active클래스 제거
    }
  });
});
