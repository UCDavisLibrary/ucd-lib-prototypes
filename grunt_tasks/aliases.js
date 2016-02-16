module.exports = {

  default: [
    'dev',
    'watch'
  ],

  dev: [
    'concurrent:dev_pre',
    'sass:dev',
    'concurrent:dev_post'
  ],

  build: [
    'wiredep',
    'eslint',
    'sass_globbing',
    'sass:dist',
    'postcss:styles',
    'concat:js',
    'uglify:dist',
    'shell:patternlab'
  ],

  lint: [
    'eslint',
    'sasslint'
  ],

  doppelganger: [
    'sass_globbing',
    'sass:doppelganger',
    'postcss:doppelganger',
    'concat:doppelganger',
    'uglify:doppelganger',
    'shell:doppelganger',
    'clean:doppelganger'
  ]

};