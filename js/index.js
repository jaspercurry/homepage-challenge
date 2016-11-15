$(document).ready(function() {
  console.log("Hey there ;)");
});

$(window).scroll(function() {
    if($(this).scrollTop() < 100) {
        $('.navbar-fixed-top').removeClass('opaque');
    } else {
      $('.navbar-fixed-top').addClass('opaque')
    }
});
