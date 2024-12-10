$(document).ready(function () {
  $(".link-work").click(function() {
      $('html,body').animate({
          scrollTop: $(".work").offset().top},
          'slow')
  })
  $(".link-education").click(function() {
      $('html,body').animate({
          scrollTop: $(".education").offset().top},
          'slow')
  })
  $(".link-social").click(function() {
      $('html,body').animate({
          scrollTop: $(".social").offset().top},
          'slow')
  })
})