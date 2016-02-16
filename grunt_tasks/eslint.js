module.exports = function (grunt, config) {
  return {

    options: {
      configFile: '.eslintrc'
    },
    target: [
      config.jsDir + '{,**/}*.js',
      '!' + config.jsDir + 'vendor/{,**/}*.js'
    ]

  }
};