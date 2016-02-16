(function ($) {
  "use strict";

  $(document).ready(function () {
    var $menu = $('.primary-nav');
    var $menu_navbar = $('.l-navbar');
    var $menu_sub = $('.primary-nav .menu .menu');
    var $menu_sub_lower = $('.primary-nav .menu .menu .menu');
    var $menu_link = $('.primary-nav a');
    var bp_medium_up = '(min-width: 992px)';
    var hoverTimer = false;
    var legacy = $('html').hasClass('lt-ie9');

    var menuDropDown = function () {
      $menu.hoverIntent(function () {
        clearTimeout(hoverTimer);
        $menu.addClass('is-hover');
      }, function () {
        hoverTimer = setTimeout(function () {
          $menu.removeClass('is-hover');
        }, 300);
      });

      // Add focus events for accessibility
      $menu_link.on('focus', function (e) {
        clearTimeout(hoverTimer);
        $menu.addClass('is-hover');
      });
      $menu_link.on('focusout', function (e) {
        hoverTimer = setTimeout(function () {
          $menu.removeClass('is-hover');
        }, 100);
      });
    };

    var menuSwitch = function () {
      // Desktop
      if (Modernizr.mq(bp_medium_up) || legacy) {
        // If the is-horizontal class is not applied
        if (!$menu_navbar.hasClass('is-horizontal')) {
          $menu_navbar.removeClass('is-vertical').addClass('is-horizontal');
          // Show submenus
          $menu_sub.show();
          // Hide Lower submenus
          $menu_sub_lower.hide();

          // Enable the megamenu dropdown
          menuDropDown();
        }

      // Mobile
      }
      else {
        // If the is-vertical class is not applied
        if (!$menu_navbar.hasClass('is-vertical')) {
          $menu_navbar.removeClass('is-horizontal').addClass('is-vertical');
          // Hide submenus
          $('.primary-nav .menu .menu').hide();
          // Remove hover bind
          $menu.off('mouseenter mouseleave');
          // Remove the mobile submenu toggle class
          $('.primary-nav .submenu-toggle').removeClass('submenu-toggle--open');
        }
      }
    };

    // Toggle submenu when clicked
    $('.primary-nav .submenu-toggle').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('submenu-toggle--open')
        .parent().next('.menu').slideToggle('fast');
    });

    $(window).resize(function () {
      menuSwitch();
    });
    menuSwitch();

  });

})(jQuery); // end jquery enclosure
