(function ($) {
  'use strict';

  $(document).ready(function () {
    /* ========================================================================
     * Init Select Picker
     * http://silviomoreto.github.io/bootstrap-select/
     * ======================================================================== */

    $('select').addClass('selectpicker');

  });
})(jQuery);

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

(function ($) {
  "use strict";

  $(document).ready(function () {

    $('.profile-highlight__body').on('click', function () {
      $(this).toggleClass("profile-highlight__body--showflip");
    });

  });

})(jQuery); // end jquery enclosure

(function ($) {
  "use strict";

  $(document).ready(function () {
    var $gallery_item = $('.gallery a');
    var $dialog = $('.pswp')[0];
    var items = [];

    // Create an array of all the slides
    $gallery_item.each(function () {
      var $size = $(this).data('size').split('x');

      var item = {
        src: $(this).attr('href'),
        w: $size[0],
        h: $size[1],
        title: $(this).attr('title'),
        msrc: $(this).find('img').attr('src')
      };

      items.push(item);
    });


    // Open Photoswipe when clicking a thumbnail
    $gallery_item.on('click', function (event) {
      event.preventDefault();

      // First unbind the click event that PatternLab adds
      $(this).removeAttr('onclick');

      var index = $gallery_item.index(this);
      var thumbnail = $(this).find('img')[0];
      var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      var rect = thumbnail.getBoundingClientRect();

      var options = {
        index: index,
        bgOpacity: 0.95,
        showHideOpacity: true,
        shareEl: false,
        getThumbBoundsFn: function (index) {
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
        }
      };

      // Initialize PhotoSwipe
      var lightBox = new PhotoSwipe($dialog, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });

  });

})(jQuery);

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

(function ($, window) {
  "use strict";

  $(document).ready(function () {
    var $input = $('.search-popup__input');

    $('.search-popup__submit').on('click', function (e) {
      var type = $(this).val();
      var url = false;
      var query = $input.val();

      // People
      if (type === 'People') {
        url = '//directory.ucdavis.edu/search/directory_results.shtml?filter=';
      }

      // Department
      else if (type === 'Departments') {
        url = '//directory.ucdavis.edu/DeptListingSearchResults.htm?filter=';
      }

      // Pages - redirect to the main site if this is not a Drupal site
      else if (typeof Drupal === 'undefined') {
        url = '//ucdavis.edu/search/site/';
      }

      // Redirect to the new search result page
      if (url && query.length) {
        e.preventDefault();
        e.stopPropagation();

        window.location.href = url + encodeURIComponent(query);
      }

    });

  });

})(jQuery, window); // end jquery enclosure

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

(function($){
  /* ========================================================================
   * Bootstrap: dropdown.js v3.3.5
   * http://getbootstrap.com/javascript/#dropdowns
   * ========================================================================
   * Copyright 2011-2015 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */

  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

})(jQuery);