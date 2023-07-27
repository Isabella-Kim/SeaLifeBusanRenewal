$(document).ready(function () {
  $(".autoplay").slick({
    // slick에서 가져온 코드
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // 좌우버튼 사용할 것인지 여부
    prevArrow: $("#exhib_prev"), // id값으로 prev버튼 지정
    nextArrow: $("#exhib_next"), // id값으로 next버튼 지정
    responsive: [
      {
        breakpoint: 414, // 화면의 넓이가 414px 이상일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  });
  var letmesee = $(".autoplay").slick("slickCurrentSlide");

  console.log(letmesee);
});
