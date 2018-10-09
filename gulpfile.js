const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const path = require('path');

gulp.task('less', () => {
    gulp.src(['less/**/*.less', '!less/**/_*.less'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('build', ['less']);

gulp.task('default', ['less']);
