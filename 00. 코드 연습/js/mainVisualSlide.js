/* To Do List
1. 슬라이드 버튼 누르면
1-2. main_inner의 .text_area 영역이 바뀌고
1-3. 동시에 .mv_bg의 background: url();의 경로가(이미지가) 바뀐다.
2. 자동슬라이드도 되도록
*/

////**** .text_area 영역 슬라이드 ****////
//**** 변수지정 ****//
let slideContainer = document.querySelector(".slider_wrap"), //.slider_wrap (ul)
  slides = slideContainer.querySelectorAll(".slide"), //.slide (li)
  slideCount = slides.length, //slides개수
  btnPrev = document.getElementById("prev"), //이전
  btnNext = document.getElementById("next"); //다음

let currentIndex = 0;
//console.log(slides);

// 슬라이드 가로배열
if (slideCount > 0) {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = 100 * i + "%";
  }
}

// 슬라이드 넘어가게 하는 함수
function goToSlide(index) {
  slideContainer.style.left = -100 * index + "%";
  currentIndex = index;
  updateSlide();
}

function updateSlide() {
  currentIndex = currentIndex % slideCount;
  slideContainer.style.left = -100 * currentIndex + "%";
}

// 자동슬라이드
function startAutoSlide() {
  intervalId = setInterval(function () {
    goToSlide(currentIndex + 1);
  }, 5000); // 5초마다 다음 슬라이드로 전환
}

// 자동슬라이드 멈춤 - 활용x
function stopAutoSlide() {
  clearInterval(intervalId);
}

// 버튼 클릭시 슬라이드 넘어가도록
btnPrev.addEventListener("click", function (event) {
  event.preventDefault();
  if (currentIndex === 0) {
    goToSlide(slideCount - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
});

btnNext.addEventListener("click", function (event) {
  event.preventDefault();
  goToSlide(currentIndex + 1);
});

//페이지 로드되면 자동으로 슬라이드 넘어가도록
startAutoSlide();

////**** 배경이미지 슬라이드 ****////
// 문제 : 이미지들이 슬라이드 될 때 두번째, 세번째 이미지의 왼쪽으로 이전 이미지의 끝부분이 보임
// width 를 100vh로 주어서 생긴 문제였음. 100%로 수정하니 해결
//**** 변수지정 ****//
let mainBg = document.querySelector(".mv_bg"),
  bgWrap = document.querySelector(".mv_bg_wrap"), // ul
  bgImg = document.querySelectorAll(".mv_bg_wrap > li"),
  imgNum = bgImg.length; // li
//console.log(bgImg);
let currentBg = 0;

// 배경이미지 가로배열
if (imgNum > 0) {
  for (let x = 0; x < imgNum; x++) {
    bgImg[x].style.left = 100 * x + "%";
  }
}

// 배경화면의 left값 조절하여 넘어가도록
function goBg(idx) {
  bgWrap.style.left = -100 * idx + "%";
  currentBg = idx;
  updateBg();
}

function updateBg() {
  currentBg = currentBg % bgImg.length;
  bgWrap.style.left = -100 * currentBg + "%";
}

// 배경화면 자동슬라이드
function startAutoBg() {
  intervalId = setInterval(function () {
    goBg(currentBg + 1);
  }, 5000); // 5초마다 다음 슬라이드로 전환
}

// 자동슬라이드 멈추기 - 활용x
function stopAutoBg() {
  clearInterval(intervalId);
}

// 버튼 클릭시 슬라이드 넘어가기
btnPrev.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentBg === 0) {
    goBg(bgImg.length - 1);
  } else {
    goBg(currentBg - 1);
  }
});

btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  goBg(currentBg + 1);
});

// 페이지 로드되면 자동으로 배경화면 넘어가도록
startAutoBg();

// 모바일 자동슬라이드
let mainMbBg = document.querySelector(".mv_bg"),
  MbbgWrap = document.querySelector(".m_mv_bg_wrap"), // ul
  MbbgImg = document.querySelectorAll(".m_mv_bg_wrap > li"),
  MbimgNum = MbbgImg.length; // li
console.log(MbbgImg);
let currentMbBg = 0;

// 배경이미지 가로배열
if (MbimgNum > 0) {
  for (let k = 0; k < MbimgNum; k++) {
    MbbgImg[k].style.left = 100 * k + "%";
  }
}

// 배경화면의 left값 조절하여 넘어가도록
function goMbBg(q) {
  MbbgWrap.style.left = -100 * q + "%";
  currentMbBg = q;
  updateMbBg();
}

function updateMbBg() {
  currentMbBg = currentMbBg % MbbgImg.length;
  MbbgWrap.style.left = -100 * currentMbBg + "%";
}

// 배경화면 자동슬라이드
function startAutoMbBg() {
  intervalId = setInterval(function () {
    goMbBg(currentMbBg + 1);
  }, 5000); // 5초마다 다음 슬라이드로 전환
}
startAutoMbBg();
