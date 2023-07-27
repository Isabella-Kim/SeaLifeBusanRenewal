$(document).ready(function () {
  $(".trigger").click(function () {
    if ($(this).hasClass("x") == false) {
      $(this).toggleClass("x");
    } else {
      $(this).removeClass("x");
    }
  });
});
