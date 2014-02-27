'use strict';

var grunt = require('grunt');
var exists = grunt.file.exists;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bower_install = {
  'bower-install': function (test) {
    test.expect(5);

    test.ok(exists('tmp/bower_components/underscore'), 'Component should have been installed.');

    test.ok(exists('tmp/bower_components/jquery'), 'Versioned component should have been installed.');

    var jqBowerFile = grunt.file.readJSON('./tmp/bower_components/jquery/bower.json');
    test.equal(jqBowerFile.version, '1.11.0');

    test.ok(exists('tmp/bower_components/q'), 'Single component should have been installed.');
    test.ok(exists('tmp/bower_components/lodash') && exists('tmp/bower_components/async'), 'Multiple components should have been installed.');

    test.done();
  }
};
