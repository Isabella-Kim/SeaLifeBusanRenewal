/* To Do List
1. 슬라이드 버튼 누르면
2. 앞뒤로 움직이게만 만들기
3. 복제해서 무한루프
*/

//**** 변수지정 ****//
let rvSlideContainer = document.querySelector(".review_slide_container"), // ul
  rvSlides = document.querySelectorAll(".review_slide_container > li"), // li
  slideNum = rvSlides.length,
  rvPrevBtn = document.getElementById("rev_prev"),
  rvNextBtn = document.getElementById("rev_next"),
  slideWidth = 525,
  slideSpeed = 300;

let currentImg = 0;

//**** 클론 생성 ****//
let firstChild = rvSlideContainer.firstElementChild;
let lastChild = rvSlideContainer.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
rvSlideContainer.appendChild(clonedFirst);
rvSlideContainer.insertBefore(clonedLast, rvSlideContainer.firstElementChild);

rvSlideContainer.style.transform =
  "translate3d(-" + slideWidth * (currentImg + 1) + "px, 0px, 0px)";

let curIndex = currentImg; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add("slide_active");

// 가로배치
// if (slideNum > 0) {
//   for (let i = 0; i < slideNum; i++) {
//     rvSlides[i].style.left = 525 * i + "px";
//   }
// }

function goToSlide(index) {
  rvSlideContainer.style.left = -525 * index + "px"; //이동시키는 값
  currentImg = index; //함수의 변수 index를 indexStart에 대입하여 index값이 0이 되고, 슬라이드가 0부터 시작한다는 의미
}
// 버튼을 클릭하면 슬라이드 이동
rvPrevBtn.addEventListener("click", function (event) {
  event.preventDefault(); //a태그의 기본값 속성을 사라지게 함
  goToSlide(currentImg - 1);
  if (currentImg == -1) {
    goToSlide(currentImg + 1);
  }
});
rvNextBtn.addEventListener("click", function (event) {
  event.preventDefault();
  goToSlide(currentImg + 1);
  if (currentImg == slideNum - 1) {
    goToSlide(currentImg - 1);
  }
});
