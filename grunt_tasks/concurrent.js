module.exports = {

  dev_pre: [
    'wiredep',
    'concat:js',
    'sass_globbing'
  ],
  dev_post: [
    'postcss:styles',
    'shell:patternlab'
  ]

};
