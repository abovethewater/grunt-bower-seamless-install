grunt-bower-seamless-install
=================

This task behaves pretty much like the `bower install` command. It can install current project dependencies or specific modules.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bower-seamless-install --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-seamless-install');
```

## The "bower_install" task

### Overview
Unlike with other tasks, you do not need to add a special property to the object passed into `grunt.initConfig()`. Instead you need to pass bower component names as arguments to the task.

### Usage Examples

#### Installing dependencies
```js
grunt.registerTask('default', ['bower-install']);
```

#### Installing specific modules
This is how you would configure the task to install the `lodash` and `async` bower modules.

```js
grunt.registerTask('default', ['bower-install:lodash:async']);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### v0.1.0
Initial version

## References
### grunt-npm-install

Check out [grunt-npm-install](https://www.npmjs.org/package/grunt-npm-install) to complete your seamless build.