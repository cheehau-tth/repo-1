var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('sass', function(){
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./assets/scss/'));

  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(concat('styles.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/scss/'));
});


gulp.task('scripts', function(){
  var scr = [
    './assets/js/app.js',
    './assets/js/app-2.js'
  ]
  gulp.src(scr)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./assets/js'));

  gulp.src(scr)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});


gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['scripts']);
});
