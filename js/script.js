$(document).ready(function(){

//slick slider

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
   dots: true,
});





// counter up

$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// isotope start

var $grid = $('.gallery').isotope({
  // options
});
// filter items on button click
$('.gallery-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  $(this).addClass('active').siblings().removeClass('active');
});






//wowjs
   new WOW().init();




});


