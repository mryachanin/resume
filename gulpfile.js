var gulp = require('gulp'),
    inlineCSS = require('gulp-inline-css'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
	return gulp.src('assets/resume.html')
        .pipe(inlineCSS())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});
