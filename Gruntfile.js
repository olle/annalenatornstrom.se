module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      simple: {
        options: {
          port: 8088,
          open: 'http://localhost:8088',
          keepalive: true,
        }
      },
      web: {
        options: {
          port: 8088,
          open: 'http://localhost:8088/',
          livereload: true,
        },
      },
    },

    watch: {
      web: {
        files: ['*.html'],
        options: {
          livereload: true,
        },
      },
    },

  });

  grunt.registerTask('default', ['connect:web', 'watch:web']);

  grunt.registerTask('web', ['connect:simple']);

};
