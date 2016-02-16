module.exports = {

  options: {
    useSingleQuotes: false,
    signature: '// Generated with grunt-sass-globbing. Do not edit.'
  },
  partials: {
    src: ['source/sass/**/_*.scss', '!source/sass/0_utility/**/_*.scss'],
    dest: 'source/sass/_all-partials.scss'
  }

};
