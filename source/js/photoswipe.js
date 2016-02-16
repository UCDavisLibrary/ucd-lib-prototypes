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
