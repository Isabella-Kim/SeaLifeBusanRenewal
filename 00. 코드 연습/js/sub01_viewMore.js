/* To Do List
1. 상세보기(viewMore) 클릭하면
2. 아래쪽 숨겨진 내용 보이도록 active클래스 추가
3. 다시한번 누르면 active클래스 제거
*/
$(document).ready(function () {
  $(".ticket_text > a").click(function () {
    // 상세보기를 클릭했을 때
    if ($("+div", this).css("display") == "none") {
      // 상세보기(.viewMore)의 display가 none이라면
      $(">img", this).addClass("active");
      // 화살표 방향 바꾸기
      $("+div", this).addClass("active");
      // .viewMore에 active클래스 추가
    } else {
      $(">img", this).removeClass("active"); // 화살표 방향 바꾸기
      $("+div", this).removeClass("active"); // 다시 클릭된 상세보기의 인접 div의 active 클래스를 제거하여 들어가서 안 보이게 만든다.
    }
  });
});
