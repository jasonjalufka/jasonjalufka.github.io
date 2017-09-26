$(document).ready(function() {
  
  console.log( "ready!" );
  
//  $("#getLocation").click(function() {
//    $.get("https://ipinfo.io", function (response) {
//      $("#getLocation").html("Location: " + response.city + ", " + response.region);
//    }, "jsonp").done(function() {
//      $("#getLocation").css("background-color", "#2ecc71");
//      $("#getLocation").css("color", "white");
//    })
//  });
  
  $(window).onload = function() {
  Particles.init({
    selector: '.particle-background',
      maxParticles: 100,
      sizeVariations: 3,
      speed: 0.5,
      color: "#222222",
      minDistance: 120,
      connectParticles: true
  });
};
  
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if (scroll >= 30) {
      $("nav").fadeOut(200);
    }
    else {
      $("nav").fadeIn();
    }
  });
});
