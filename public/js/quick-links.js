(function ($) {
  "use strict";

  $(document).ready(function () {
    var $menu = $('.quick-links');
    var $menu_title = $('.quick-links__title');
    var $menu_toggle = $('.quick-links__title .submenu-toggle');
    var $menu_link = $('.quick-links a');
    var submenu_open_class = 'submenu-toggle--open';
    var bp_medium_up = '(min-width: 992px)';
    var hoverTimer = false;
    var lastClick = null;

    // Hide the submenu when clicking off of it
    $('body').on('touchstart click', function (e) {
      if (!$(e.target).closest('.quick-links').length) {
        if (Modernizr.mq(bp_medium_up)) {
          $menu.hide();
          $menu_toggle.removeClass(submenu_open_class);
        }
      }
    });

    // Toggle the submenu on either focus or click but not both
    $menu_title.on('focus', function (e) {
      lastClick = e.currentTarget;
      $menu.slideDown('fast');
      $menu_toggle.addClass(submenu_open_class);
    }).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget !== lastClick) {
        $menu.slideToggle('fast');
        $menu_toggle.toggleClass(submenu_open_class);
      }
      lastClick = null;
    });

    // Add focus events for accessibility to close the tray when leaving
    $menu_link.on('focus', function () {
      clearTimeout(hoverTimer);
    }).on('focusout', function () {
      hoverTimer = setTimeout(function () {
        $menu.hide();
        $menu_toggle.removeClass(submenu_open_class);
      }, 100);
    });

    $(window).resize(function () {
      $menu.hide();
      $menu_toggle.removeClass(submenu_open_class);
    });
    $menu.hide().removeClass('is-hidden--visually');

  });

})(jQuery); // end jquery enclosure
