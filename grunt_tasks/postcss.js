module.exports = function (grunt, config) {
  return {

    options: {
      map: {
        prev: false,
        inline: true
      },
      processors: [
        require('autoprefixer-core')()
      ]
    },

    styles: {
      src: config.sassDest + 'style.css'
    },

    doppelganger: {
      options: {
        map: false
      },
      src: config.doppelgangerTemp + 'css/style.css'
    }

  }
};
