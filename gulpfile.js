var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var runSequence = require('run-sequence');

gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
	.pipe(order([
		'js/ScrollMagic.min.js',
		'js/TweenMax.min.js',
		'js/TimelineMax.min.js',
		'js/jquery.gsap.min.js',
		'js/drawsvgplugin.js',
		'js/plugins/animation.gsap.min.js',
		'js/plugins/jquery.ScrollMagic.min.js',
		'js/plugins/*.js',
		'js/components/*.js',
		'js/main.js'
	], { base: './' }))
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
	return gulp.src('css/**/*.css')
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('build', function() {
	return runSequence('scripts', 'css');
});
