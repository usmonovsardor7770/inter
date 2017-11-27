$(document).ready(function() {

  // Nav a Onclick scroll to certain id
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 700);
    }
  });

  // Dynamic Year for footer
  document.getElementById("year").innerHTML = new Date().getFullYear();

  // Nav Onscroll add class
  $(window).scroll(function() {
    // If scrolled more than 10px
    if ($(document).scrollTop() > 1) {
      $("nav").addClass("fixed");
    } else {
      if ($("nav").hasClass("fixed")) {
        $("nav").removeClass("fixed");
      }
    }
  });
  $(window).scroll(function() {
    // If scrolled more than 10px
    if ($(document).scrollTop() > 1) {
      console.log('scrolled');
    }
  });

  var lightbox = $('#gallery a').simpleLightbox();
});
