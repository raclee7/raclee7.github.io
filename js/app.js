$(document).ready(function () {
  $(".link-work").click(function() {
      $('html,body').animate({
          scrollTop: $(".divider").offset().top},
          'slow')
  })
  $(".link-education").click(function() {
      $('html,body').animate({
          scrollTop: $(".divider2").offset().top},
          'slow')
  })
  $(".link-social").click(function() {
      $('html,body').animate({
          scrollTop: $(".divider3").offset().top},
          'slow')
  })
})