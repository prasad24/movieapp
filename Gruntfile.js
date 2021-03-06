/* jshint esversion: 6 */
module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['styles/less/*.less'],
                tasks: ['less', 'cssmin:dev'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['scripts/**/*.js', 'app.js'],
                tasks: ['ngAnnotate', 'uglify:dev'],
                options: {
                    spwan: false
                }
            }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            dev: {
                files: {
                    src: [
                        'Gruntfile.js',
                        'scripts/**/*.js',
                        'tests/scripts/**/*.js'
                    ]
                }
            }
        },

        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'temp/styles/css/style.css': 'styles/less/*.less'
                }
            }
        },

        cssmin: {
            options: {
                sourceMap: true,
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dev: {
                files: {
                    'css/style.min.css': 'temp/styles/css/style.css'
                }
            },
            prod: {
                options: {
                    sourceMap: false
                },
                files: {
                    'dist/css/style.min.css': 'temp/styles/css/style.css'
                }
            }
        },

        ngAnnotate: {
            vendor: {
                files: {
                    'temp/js/vendor.js': [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-route/angular-route.js',
                        'node_modules/angular-cookies/angular-cookies.js'
                    ]
                }
            },
            app: {
                files: {
                    'temp/js/app.js': [
                        'app.js',
                        'scripts/**/*.js',
                        'tests/scripts/**/*.js'
                    ]
                }
            }
        },

        uglify: {
            dev: {
                options: {
                    sourceMap: true,
                },
                files: {
                    ['js/vendor.min.js']: ['temp/js/vendor.js'],
                    ['js/app.min.js']: ['temp/js/app.js']
                }
            },
            prod: {
                options: {
                    sourceMap: false,
                },
                files: {
                    ['dist/js/vendor.min.js']: ['temp/js/vendor.js'],
                    ['dist/js/app.min.js']: ['temp/js/app.js']
                }
            }
        }
    });

    grunt.registerTask('dev', ['jshint', 'less', 'cssmin:dev', 'ngAnnotate', 'uglify:dev']);
    grunt.registerTask('prod', ['jshint', 'less', 'cssmin:prod', 'ngAnnotate', 'uglify:prod']);
};