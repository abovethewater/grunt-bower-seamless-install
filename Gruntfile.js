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

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['bower.json', '.bowerrc', 'tmp']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('write', 'Write content to a file.', grunt.file.write);
  grunt.registerTask('mkdir', 'Create directory.', grunt.file.mkdir);

  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'write:bower.json:{"name"\\: "fake", "dependencies"\\: {"underscore"\\:""}}',
    'write:.bowerrc:{"directory"\\: "tmp/bower_components"}',
    'bower-install',
    'bower-install:jquery#1.11.0',
    'bower-install:q',
    'bower-install:lodash:async',
    'nodeunit'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
