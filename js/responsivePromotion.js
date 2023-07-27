$(document).ready(function () {
  var ww = $(window).width();
  function initSwiper() {
    mySwiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 0,
    });
  }
  if (ww <= 414) {
    initSwiper();
  } else if (ww > 414) {
    // No running
  }

  $(window).on("resize", function () {
    ww = $(window).width();
    if (ww <= 414) {
      initSwiper();
    }
  });
});

// 문제 : 반응형에서 데스크탑으로 돌아왔을 때 새로고침을 하지 않으면 슬라이드가 적용되다 만 것 마냥 깨짐
//reference: https://lpla.tistory.com/136
