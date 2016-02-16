(function ($) {
  "use strict";

  $(document).ready(function () {

    $('.profile-highlight__body').on('click', function () {
      $(this).toggleClass("profile-highlight__body--showflip");
    });

  });

})(jQuery); // end jquery enclosure
