let btn = document.querySelectorAll(".tab_menu a"),
  content = document.querySelectorAll(".tab_content > div");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href"),
      tabTarget = orgTarget.replace("#", "");
    for (let j = 0; j < content.length; j++) {
      content[j].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";
    for (let x = 0; x < btn.length; x++) {
      btn[x].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}
document.getElementById("performence_shark").style.display = "block";

// Select로 변경되었을 시
let select = $("#tab_select");
$(document).ready(function () {
  $("select").on("change", function () {
    var target = $(this).val();
    var targetSelectNum = $(this).prop("selectedIndex");
    $("btn").removeClass("active");
    $("btn").eq(targetSelectNum).addClass("active");
    $(content).hide();
    $(target).show();
    $(select).show();
  });
});
// 문제: 첫 콘텐츠 아닌 다른 콘텐츠를 데스크탑에서 선택한 상태에서 반응형으로 변화하면 셀렉트박스가 사라져서 새로고침해야만 보임.
//code ref: http://rwdb.kr/jquery_tab_select/
