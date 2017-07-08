$(document).ready(function() {
  
  console.log( "ready!" );
  
  $("#getLocation").click(function() {
    $.get("http://ipinfo.io", function (response) {
      $("#getLocation").html("Location: " + response.city + ", " + response.region);
    }, "jsonp").done(function() {
      $("#getLocation").css("background-color", "#2ecc71");
      $("#getLocation").css("color", "white");
    })
  });
  
  
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
  