/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    nodemon: {
      prod: {
        options: {
          file: 'app.js',
          nodeArgs: ['--debug'],
          ignoredFiles: ['README.md', 'node_modules/**'],
          watchedExtensions: ['js'],
          delayTime: 1,
          env: {
            PORT: '3000'
          },
          cwd: __dirname
        }
      }
    },
    watch: {
      sass: {
        files: 'public/sass/**/*.scss',
        tasks: ['clean', 'sass:dev']
      },
      cssmin: {
        files: ['public/css/*.css', '!public/css/*.min.css'],
        tasks: ['cssmin']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['public/css/**/*.css']
      }
    },
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch', 'node-inspector'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    'node-inspector': {
      default: {}
    },
    sass: {
      rel: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'public/sass/',
          src: ['**/*.scss'],
          dest: 'public/css/',
          ext: '.css'
        }]
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'public/sass/',
          src: ['**/*.scss'],
          dest: 'public/css/',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      combine:{
        files: {
          'public/css/styles.min.css': ['public/css/*.css', 'public/css/!*.min.css']
        }
      }
    },
    clean: ["public/css/*.min.css", "public/js/*.min.js"]
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-node-inspector');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['cssmin', 'sass:dev', 'concurrent']);

  // Release task.
  grunt.registerTask('release', ['clean', 'sass:rel', 'cssmin']);

};
