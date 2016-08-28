$(document).ready(function(){
    alert("Hello! I am an alert box!");
    
    //Initial text fade-in
    $('.fade-in').each(function() {
    $(this).fadeIn(1000).delay(1000);
    });
});
