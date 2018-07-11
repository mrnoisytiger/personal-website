module.exports = function(grunt) {
    grunt.initConfig({
        // Process SCSS to CSS and put into staging directory
        sass: {
            develop: {
                files: {
                    'css/main.css': 'scss/main.scss',
                }
            },

            production: {
                files: {
                    'css/main.css': 'scss/main.scss',
                }
            }
        },

        // Autoprefix CSS in staging directory and overwrite
        autoprefixer: {
            production: {
                options: {
                    browsers: ['last 5 iOS versions', 'ie 8', 'ie 9', 'last 4 Chrome versions', 'last 4 Safari versions', 'last 4 Firefox versions', 'last 3 Android versions', 'last 3 Samsung versions', 'last 2 Edge versions'],
                },
                files: {
                    'css/main.css': 'css/main.css',
                },
            },
        },

        // Concatenate all JS files into 1 file and put into staging directory
        concat: {
            develop: {
                src: ['js/velocity.min.js','js/*.js','!js/script.js'],
                dest: 'js/script.js',
            },

            production: {
                src: ['js/velocity.min.js','js/*.js','!js/script.js'],
                dest: 'js/script.js',
            }
        },

        // Minify CSS in staging directory and put into public directory
        cssmin: {
            production: {
                files: {
                    'public/min/main.css': 'css/main.css',
                }
            }
        },

        // Minify JS in staging directory and put into public directory
        uglify: {
            production: {
                files: {
                    'public/min/script.js': 'js/script.js',
                }
            }
        },

        // Process HTML to use minified objects and put into public directory
        processhtml: {
            options: {
                process: true,
            },
            production: {
                files: {
                    'public/index.html': 'index.html',
                }
            }
        },

        // Minify HTML in public directory and overwrite
        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: 'public/',      // Src matches are relative to this path.
                    src: ['*.html'], // Actual pattern(s) to match.
                    dest: 'public/',   // Destination path prefix.
                }],
            },
        },

        imagemin: {
            production: {
                options: {
                    optimizationLevel: 4,
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.jpg'],
                    dest: 'public/images/',
                }],
            },
        },
/*
        image: {
            options: {
                mozjpeg: ['--quality', 85],
            },
            production: {
                options: {
                    jpegRecompress: false,
                    mozjpeg: true,
                },
                files: [{
                    expand: true,
                    cwd: 'public/images/',
                    src: ['*.jpg'],
                    dest: 'public/images/',
                }],
            }
        } */
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-image');

    grunt.registerTask('develop', ['sass','concat']);
    grunt.registerTask('production', ['sass','autoprefixer','cssmin','concat','uglify','processhtml','htmlmin','imagemin']);
};