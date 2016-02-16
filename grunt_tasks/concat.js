module.exports = function (grunt, config) {
  return {

    js: {
      files: [
        {src: config.jsDir + '**/*.js', dest: config.jsDest + 'scripts.js'}
      ]
    },

    doppelganger: {
      files: [
        {
          src: [
            // Bower Components: Add each non-minified js file that needs to be included
            config.bowerDir + 'modernizr/modernizr.js',
            config.bowerDir + 'jquery/jquery.js',
            config.bowerDir + 'jquery-hoverintent/jquery.hoverIntent.js',
            // Custom JS
            config.jsDir + 'mobile-nav-toggle.js',
            config.jsDir + 'primary-nav.js',
            config.jsDir + 'quick-links.js',
            config.jsDir + 'search-popup.js',
            config.jsDir + 'search-redirect.js',
            config.jsDir + 'sticky-scroll.js'
          ],
          dest: config.doppelgangerTemp + 'js/scripts.js'
        },
        // CSS files
        {
          src: [
            // Bower Components: Add each css file that needs to be included
            config.bowerDir + 'normalize.css/normalize.css',
            // Custom CSS
            config.doppelgangerTemp + 'css/style.css'
          ],
          dest: config.doppelgangerTemp + 'css/style.css'
        }
      ]
    }

  }
};
