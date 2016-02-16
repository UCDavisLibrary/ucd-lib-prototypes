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
