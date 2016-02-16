(function ($, Modernizr) {
  "use strict";

  $(document).ready(function () {
    var $popup = $('.search-popup');
    var $btn_open = $('.js-search-popup__open');
    var $btn_close = $('.search-popup__close');
    var $input = $('.search-popup__input');

    // Show the label if the browser cannot use a placeholder
    if (!Modernizr.input.placeholder) {
      $popup.addClass('search-popup--show-label');
    }

    // Toggle submenu when clicked
    $btn_open.on('click', function (e) {
      $popup.addClass('is-open');
      $input.focus();
      e.preventDefault();
      e.stopPropagation();
    });

    // Toggle submenu when clicked
    $btn_close.on('click', function (e) {
      $popup.removeClass('is-open');
      e.preventDefault();
      e.stopPropagation();
    });

    // Toggle open the submit buttons in mobile
    $input.on('focus', function () {
      $('.search-popup__buttons').addClass('is-open');
    });


  });

})(jQuery, Modernizr); // end jquery enclosure
