module.exports = function (grunt, config) {
  return {

    dev: {
      options: {
        sourceMap: true,
        sourceMapEmbed: true,
        outputStyle: 'expanded'
      },
      files: [
        { src: config.sassDir + 'style.scss', dest: config.sassDest + 'style.css' },
        { src: config.sassDir + 'no-query.scss', dest: config.sassDest + 'no-query.css' }
      ]
    },

    dist: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      files: [
        { src: config.sassDir + 'style.scss', dest: config.sassDest + 'style.css' },
        { src: config.sassDir + 'no-query.scss', dest: config.sassDest + 'no-query.css' }
      ]
    },

    doppelganger: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      files: [
        { src: config.sassDir + 'style.scss', dest: config.doppelgangerTemp + 'css/style.css' },
        { src: config.sassDir + 'no-query.scss', dest: config.doppelgangerTemp + 'css/no-query.css' }
      ]
    }

  }
};
