$(document).ready(function() {

  // Logo Animate
  $("#loader-wrapper").animate({
    opacity: 0
  }, 1000, function() {
    setTimeout(function() {
      $("#site").fadeIn(500);
      $('#loader-wrapper').css('display', 'none');
    }, 2000);
  });

  // Nav Onscroll add class
  $(window).scroll(function() {
    // If scrolled more than 10px
    if ($(document).scrollTop() > 10) {
      $("nav").addClass("fixed");
    } else {
      if ($("nav").hasClass("fixed")) {
        $("nav").removeClass("fixed");
      }
    }
  });

  // Hamburger toggler
  $(".menu").on("click", function() {
    $(".menu, .overlay").toggleClass("active");
  });
  $(".overlay-content > a").on("click", function() {
    $(".menu, .overlay").removeClass("active");
  });

  // Nav a Onclick scroll to certain id
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  // Dynamic Year for footer
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
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
