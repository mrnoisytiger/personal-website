module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            develop: {
                files: {
                    'css/main.css': 'scss/main.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('develop', ['sass']);
};