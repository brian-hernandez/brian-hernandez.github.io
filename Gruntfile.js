module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            dist: {
                src: ['js/mine.js', 'discogs.js', 'discogs2.js'],
                dest: 'build/scripts.js',
            },
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

}
;