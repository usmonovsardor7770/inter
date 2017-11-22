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
});
