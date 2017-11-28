$(document).ready(function() {

  // Logo Animate
  $("#splash-screen").animate({
    opacity: 0
  }, 1000, function() {
    setTimeout(function() {
      $('#splash-screen').css('display', 'none');
    }, 2000);
  });

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
  // document.getElementById("year").innerHTML = new Date().getFullYear();

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

  // Menu Toggler
  $(".menu").on("click", function() {
    $(".menu, .overlay").toggleClass("active");
  });
  $(".overlay-content > a").on("click", function() {
    $(".menu, .overlay").removeClass("active");
  });

  var lightbox = $('#gallery a').simpleLightbox();
});


// Animate LOGO
var logo = anime({
  targets: '#logo',
  rotate: {
    value: '1turn',
    duration: 1800,
    easing: [.91,-0.54,.29,1.56]
  },
  scale: {
    value: 1.25,
    duration: 2000,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250,
  loop: 2,
  direction: 'alternate'
});
