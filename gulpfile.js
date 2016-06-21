var gulp = require('gulp'),
    inline = require('gulp-inline'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
    return gulp.src('assets/resume.html')
        .pipe(inline({
            base : 'assets/'
        }))
        .pipe(htmlmin({
            collapseWhitespace : true,
            minifyCSS : true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});
