(function ($) {
  "use strict";

  // Exit if the Masonry library has not been loaded
  if (!$.isFunction($.fn.masonry)) {
    return;
  }

  $(document).ready(function () {

    var $masonry_grid = $('.mason-grid');

    $(window).load(function () {
      $masonry_grid.masonry({
        itemSelector: '.mason-grid__item',
        columnWidth: '.mason-grid__sizer',
        gutter: '.mason-grid__gutter',
        percentPosition: true,
        transitionDuration: 0,
        isResizeBound: false
      });
    });

    $(window).resize(function () {
      $masonry_grid.masonry('layout');
    });

    // Chrome has video loading after dom issues, this is the only fix I could
    // find, and it only fires in the case of the browser being Chrome

    var is_chrome = window.chrome;

    function layout() {
      $masonry_grid.masonry('layout');
    }

    if (is_chrome) {
      setTimeout(layout, 500);
    }
  });

})(jQuery); // end jquery enclosure
