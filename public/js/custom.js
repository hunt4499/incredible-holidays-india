$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $("header").addClass("header-fixed");
    $(".logo a img").attr("src", "/images/logo Incredible Holiday.png");
  } else {
    $("header.header-fixed").removeClass("header-fixed");
    $(".logo a img").attr("src", "/images/logoIncredibleHolidaywhite.png");
  }
});

// $("#itinerary-aside").affix({
//   offset: {
//     top: $("header").outerHeight() + 300,
//     bottom: $("footer").outerHeight() + 20
//   }
// });

