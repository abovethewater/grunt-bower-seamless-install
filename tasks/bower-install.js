/*
 * grunt-bower-seamless-install
 * https://github.com/abovethewater/grunt-bower-seamless-install
 * Copyright (c) 2014 Joe Mathews
 *
 * Licensed under the MIT license.
 *
 * Master http://abovethewater.mit-license.org/
 *
 * Based on grunt-npm-install
 * https://github.com/iclanzan/grunt-npm-install
 * Copyright (c) 2013 Sorin Iclanzan
 *
 * Licensed under the MIT license.
 *
 */

'use strict';

module.exports = function (grunt) {
  var bower = require('bower');

  grunt.registerTask('bower-install', 'Install bower components.', function () {
    var modules = Array.prototype.slice.call(arguments);
    var done = this.async();

    bower.commands.install(modules)
    .on('error', function (err) {
      grunt.log.error(err);
      done(false);
    })
    .on('end', function () {
      done();
    });
  });
};
