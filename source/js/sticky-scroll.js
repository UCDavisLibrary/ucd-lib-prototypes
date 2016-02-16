(function ($) {
  "use strict";

  $(document).ready(function () {
    var $fixed = $('.l-header--fixed');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $fixed.addClass("is-scrolling");
      }
      else {
        $fixed.removeClass("is-scrolling");
      }
    });
  });

})(jQuery); // end jquery enclosure
