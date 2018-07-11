module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            develop: {
                files: {
                    'css/main.css': 'scss/main.scss',
                }
            }
        },

        concat: {
            develop: {
                src: ['js/*.js','!js/script.js'],
                dest: 'js/script.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('develop', ['sass','concat']);
};