(function ($) {
  "use strict";

  $(document).ready(function () {

    var $title = $('.collapse__title');

    // Accessibility: First remove any visually hidden classes and hide content
    $('.collapse__content').hide().removeClass('is-hidden--visually');

    $title.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this)
      .toggleClass("collapse__title--open collapse__title--closed")
      .next()
      .slideToggle(300);
    });

    // FAQ List toggle
    var $faqTitle = $('.list--faq > li:even');

    $faqTitle.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).next().slideToggle(300);
    });

  });

})(jQuery); // end jquery enclosure
