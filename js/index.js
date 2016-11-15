$(document).ready(function() {
  console.log("Hey there ;)");

  var mq = window.matchMedia( "(max-width: 768px)" );
  var image = '<div class="col-xs-12 col-sm-7 col-md-5 move-image"><img class="img-responsive" src="./assets/layers.png" alt="" /></div>'

  if (mq.matches) {
    $(".move-image").remove()

    $(".place-image").html(image)
  }
});

$(window).resize(function() {
  var mq = window.matchMedia( "(max-width: 768px)" );
  var image = '<div class="col-xs-12 col-sm-7 col-md-5 move-image"><img class="img-responsive" src="./assets/layers.png" alt="" /></div>'

  if (mq.matches) {
    $(".move-image").remove()
    $(".place-image").html(image)
  } else {
    $(".move-image").remove()
    $(".return-image").prepend(image)
  }

})

$(window).scroll(function() {
    if($(this).scrollTop() < 100) {
        $('.navbar-fixed-top').removeClass('opaque');
    } else {
      $('.navbar-fixed-top').addClass('opaque')
    }
});
