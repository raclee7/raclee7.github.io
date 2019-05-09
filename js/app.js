$(document).ready(function () {
  $(".active").click(function() {
      $('html,body').animate({
          scrollTop: $(".work").offset().top},
          'slow');
  });
});