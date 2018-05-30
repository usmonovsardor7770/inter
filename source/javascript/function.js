$(document).ready(function() {

  // Preload
  $("#preload").animate({
    opacity: 0
  }, 1000, function() {
    setTimeout(function() {
      $('.preload-logo').addClass('paused');
      $('#preload').addClass('loaded');
    }, 1000);
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

  $('[data-fancybox="gallery"]').fancybox({
    buttons : [
      'zoom',
      'close'
    ]
  });

  var myLazyLoad = new LazyLoad();
});
