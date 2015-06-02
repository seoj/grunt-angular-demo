module.exports = function(grunt)
{
   require('load-grunt-tasks')(grunt);

   grunt.initConfig({

      clean : {
         main : {
            src : [ 'build' ]
         }
      },

      jshint : {
         main : {
            src : [ 'app/**/*.js' ]
         }
      },

      karma : {
         main : {
            options : {
               browsers : [ 'PhantomJS' ],
               frameworks : [ 'jasmine' ],
               singleRun : true,
               reporters : [ 'mocha', 'junit', 'coverage' ],
               preprocessors : {
                  'app/**/*.js' : 'coverage'
               },
               junitReporter : {
                  outputFile : 'build/test/test-results.xml'
               },
               coverageReporter : {
                  reporters : [ {
                     type : 'html',
                     dir : 'build/test/coverage'
                  }, {
                     type : 'cobertura',
                     dir : 'build/test/coverage'
                  } ]
               },
               files : [
                     'bower_components/angular/angular.js',
                     'bower_components/angular-route/angular-route.js',
                     'app/module.js',
                     'app/**/*.js',
                     'test/**/*.js' ]
            }
         }
      },

      cssmin : {
         main : {
            src : [ 'app/styles/*.css' ],
            dest : 'build/dist/login.min.css'
         }
      },

      ngtemplates : {
         main : {
            options : {
               module : 'login',
               htmlmin : {
                  collapseBooleanAttributes : true,
                  collapseWhitespace : true,
                  removeAttributeQuotes : true,
                  removeComments : true,
                  removeEmptyAttributes : true,
                  removeRedundantAttributes : true,
                  removeScriptTypeAttributes : true,
                  removeStyleLinkTypeAttributes : true
               }
            },
            src : [ 'app/templates/*.html' ],
            dest : 'build/temp/templates.js'
         }
      },

      ngAnnotate : {
         main : {
            src : [
                  'bower_components/angular/angular.js',
                  'bower_components/angular-route/angular-route.js',
                  'app/module.js',
                  'app/**/*.js',
                  'build/temp/templates.js' ],
            dest : 'build/dist/login.js'
         }
      },

      uglify : {
         main : {
            options : {
               sourceMap : true,
               sourceMapName : 'build/dist/login.min.map'
            },
            src : [ 'build/dist/login.js' ],
            dest : 'build/dist/login.min.js'
         }
      }
   });

   grunt.registerTask('test', [ 'jshint', 'karma' ]);
   grunt.registerTask('build', [ 'jshint', 'cssmin', 'ngtemplates', 'ngAnnotate', 'uglify' ]);
};