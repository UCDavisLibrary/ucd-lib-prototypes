'use strict';

module.exports = function (grunt) {

  // Load config file
  var _ = require("lodash");
  var config = grunt.file.readYAML("Gruntconfig.yml");
  if (grunt.file.exists("Gruntconfig--custom.yml")) {
    var customConfigOverrides = grunt.file.readYAML("Gruntconfig--custom.yml");
    _.extend(config, customConfigOverrides);
  }

  // Load path
  var path = require('path');

  // http://firstandthird.github.io/load-grunt-config/
  require('load-grunt-config')(grunt, {
    // load grunt config from the /grunt-tasks directory
    configPath: path.join(process.cwd(), 'grunt_tasks'),

    // Our config passed into the data
    data: config
  });

};
