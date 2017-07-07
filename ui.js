$(document).ready(function() {
  
  console.log( "ready!" );
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if (scroll >= 30) {
      $("nav").fadeOut();
    }
    else {
      $("nav").fadeIn();
    }
  });
  
});