var gulp = require('gulp'),
    inlineCSS = require('gulp-inline-css'),
    rename = require('gulp-rename');

gulp.task('default', function () {
	return gulp.src('assets/resume.html')
        .pipe(inlineCSS())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});
