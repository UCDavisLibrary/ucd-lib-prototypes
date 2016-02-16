(function ($) {
  "use strict";

  $(document).ready(function () {
    var $menu_toggle = $('.js-nav-toggle');
    var $menu_navbar = $('.l-navbar');
    var bp_medium_up = '(min-width: 992px)';
    var prev_menu_focus = false;

    // Toggle open and close the off-canvas menu
    $menu_toggle.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $menu_toggle.toggleClass('nav-toggle--active');
      $menu_navbar.toggleClass('menu--closed menu--open');
    });

    // Hide the off-canvas menu when leaving focus
    $('body').on('focus', 'a', function (e) {
      // Check that this is mobile so that it uses the off-canvas menu
      if (!Modernizr.mq(bp_medium_up)) {
        // Check that the focus is off the menu
        if ($(e.target).closest('.l-navbar').length) {
          prev_menu_focus = true;
          $menu_toggle.addClass('nav-toggle--active');
          $menu_navbar.addClass('menu--open').removeClass('menu--closed');
        }
        else {
          // Close the off-canvas menu if the previous focus was in the menu and
          // The menu toggle is not being clicked again.
          if (prev_menu_focus && this.className.indexOf('js-nav-toggle') === -1) {
            $menu_navbar.removeClass('menu--open').addClass('menu--closed');
            $menu_toggle.removeClass('nav-toggle--active');
          }
          prev_menu_focus = false;
        }
      }
    });

  });

})(jQuery); // end jquery enclosure
