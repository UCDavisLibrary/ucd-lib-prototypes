module.exports = function (grunt, config) {
  return {

    dist: {
      options: {
        mangle: true,
        compress: true
      },
      files: [{
        expand: true,
        cwd: config.jsDir,
        src: ['**/*.js', '!**/*.min.js'],
        dest: config.jsDest
      }]
    },

    doppelganger: {
      options: {
        mangle: true,
        compress: true
      },
      files: [{
        expand: true,
        cwd: config.doppelgangerTemp + 'js/',
        src: ['**/*.js'],
        dest: config.doppelgangerTemp + 'js/'
      }]
    }

  }
};