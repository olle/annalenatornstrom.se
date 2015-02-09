module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
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

  grunt.registerTask('default', [
    'connect',
    'watch'
  ]);

};
