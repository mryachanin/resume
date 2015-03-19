module.exports = function(grunt) {

    grunt.initConfig({
        markdownpdf: {
            options: {
                cssPath: __dirname + '/css/styles.css'
            },

            pdf: {
                src: 'src/*.md',
                dest: 'pdf/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');

    grunt.registerTask('default', ['markdownpdf:pdf']);
};
