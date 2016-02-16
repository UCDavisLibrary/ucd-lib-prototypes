module.exports = function (grunt, config) {
  return {

    options: {
      livereload: true,
      spawn: false
    },
    html: {
      files: ['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'],
      tasks: ['shell:patternlab']
    },
    styles: {
      files: [config.sassDir + '*.scss', config.sassDir + '**/*.scss', 'public/styleguide/css/**/*.scss'],
      tasks: [
        'sass_globbing',
        'sass:dev',
        'postcss:styles'
      ]
    },
    js: {
      files: [config.jsDir + '*.js'],
      tasks: ['concat:js']
    }

  }
};
