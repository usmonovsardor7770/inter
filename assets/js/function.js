$(document).ready(function() {
  $("#loader-wrapper").animate({
    opacity: 0
  }, 1000, function() {
    setTimeout(function() {
    $('#loader-wrapper').css('display','none');
  }, 2000);
  });
});

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
