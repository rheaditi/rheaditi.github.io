$(document).ready(function() {

  setHeight();  
  $('.scrolly').scrolly();
  $('body').addClass('loaded');
});

$(window).resize(function() {
    setHeight();
  });


function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.winheight').css('height', windowHeight);
  };