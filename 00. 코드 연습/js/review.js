/* To Do List
1. 슬라이드 버튼 누르면
2. 앞뒤로 움직이게만 만들기
3. 복제해서 무한루프 -> 실패..^^
*/

//**** 변수지정 ****//
let rvSlideContainer = document.querySelector(".review_slide_container"), // ul
  rvSlides = document.querySelectorAll(".review_slide_container > li"), // li
  slideNum = rvSlides.length,
  rvPrevBtn = document.getElementById("rev_prev"),
  rvNextBtn = document.getElementById("rev_next");
let currentImg = 0;

if (slideNum > 0) {
  for (let i = 0; i < slideNum; i++) {
    rvSlides[i].style.left = 100 * i + "%";
  }
}

function mvSlide(index) {
  rvSlideContainer.style.left = -100 * index + "%"; //이동시키는 값
  //slideWrap[0].classList.add("animation"); //이동할때마다 애니메이션 작동
  currentImg = index; //함수의 변수 index를 indexStart에 대입하여 index값이 0이 되고, 슬라이드가 0부터 시작한다는 의미
}
// 버튼을 클릭하면 슬라이드 이동
rvPrevBtn.addEventListener("click", function (event) {
  event.preventDefault(event); //a태그의 기본값 속성을 사라지게 함
  mvSlide(currentImg - 1);
  if (currentImg == -1) {
    // -1이라고 준 이유가 슬라이드의 우변이 indexStart 지점에 닿아야 비로소 슬라이드가 더 앞쪽으로 넘어가지 않는데 4장의 슬라이드가 다 담기려면 -1번째 있지도 않은 슬라이드의 우변이 닿았다고 억지를 좀 써야함.... 0으로 주었을 때는 첫 번째 슬라이드의 우변이 indexStart 지점에 닿아 결국 hidden된 영역으로 넘어가서 3장의 슬라이드만 계속 화면에 보이는 문제가 있었다.
    mvSlide(currentImg + 1);
  }
}); //indexStart가 0이었는데 클릴할 때마다 음수값으로 점점 작아지므로 왼쪽으로 이동
rvNextBtn.addEventListener("click", function (event) {
  event.preventDefault(event);
  mvSlide(currentImg + 1);
  if (currentImg == slideNum) {
    // 문제: 슬라이드 개수와 같게 하면 데스크탑에서 슬라이드가 끝나고도 한 번 더 빈 공간으로 넘어감.
    // 그러나 반응형에서 한개씩 보여주되 네 장을 다 보여주려면 slideNum과 같을 때로 조건을 지정할 수밖에 없음.
    mvSlide(currentImg - 1);
  }
}); //+1씩 커질때마다 오른쪽으로 이동
// 좀 어거지이긴 한데, 두 개씩 배치니까 맨 마지막에서 두 번째 슬라이드가 indexStart 지점에 닿으면 걍 안 움직이게 만들어버림.
console.log(currentImg);
