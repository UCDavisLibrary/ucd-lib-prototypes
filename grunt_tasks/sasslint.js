module.exports = function (grunt, config) {
  return {

    options: {
      configFile: '.sass-lint.yml'
    },
    target: [
      config.sassDir + '{,**/}*.scss'
    ]

  }
};