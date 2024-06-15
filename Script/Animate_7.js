$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var programmOffset = $(".container_hand").offset().top;

    // Проверяем, виден ли контейнер на экране
    if (scrollPos + windowHeight > programmOffset) {
      // Если контейнер виден, выполняем анимацию
      $(".container_hand").fadeIn(5000).slideDown(5000);
      $(".container_selection").fadeIn(7000).slideDown(5000);
    }
  });
});
