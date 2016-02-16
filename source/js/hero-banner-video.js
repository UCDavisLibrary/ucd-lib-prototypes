(function ($, Modernizr) {
  "use strict";

  // Check that this is above the small breakpoint or not a legacy browser
  if (Modernizr.mq('(min-width: 480px)') || !Modernizr.svg) {

    $(document).ready(function () {
      var $placeholder = $('.hero-banner__video-placeholder');

      var url = $placeholder.data('hero-banner-video');

      var heroVideo =
        '<video class="hero-banner__video" width="1872" height="720" autoplay="true" loop="true" muted="true">' +
        '<source src="' + url + '" type="video/mp4">' +
        '</video>';

      // Attach the video
      $placeholder.append(heroVideo)
        .removeClass('hero-banner__video-placeholder');

    });

  }

})(jQuery, Modernizr); // end jquery enclosure
