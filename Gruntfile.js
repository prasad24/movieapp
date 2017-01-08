module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'app/scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['app/styles/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
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
                        'app/scripts/**/*.js',
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
                    'app/styles/css/style.css': 'app/styles/less/*.less'
                }
            }
        },

        cssmin: {
            options: {
                sourceMap: true,
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles/css/style.min.css': 'app/styles/css/style.css'
                }
            }
        }
    });
};