(function ($) {
  "use strict";

  // Exit if the Slick library has not been loaded
  if (!$.isFunction($.fn.slick)) {
    return;
  }

  $(document).ready(function () {
    $('.slideshow').slick({
      lazyLoad: 'progressive',
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      lazyLoad: 'progressive',
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slideshow',
      dots: false,
      centerMode: true,
      centerPadding: '70px',
      focusOnSelect: true
    });
  });

})(jQuery); // end jquery enclosure
