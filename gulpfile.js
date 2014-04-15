var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    paths = {
       scripts:   ['ui/**/*.js'],
       templates: ['ui/**/*.coffee'],
       styles:    ['ui/**/main.styl', '!ui/**/_*.styl']
    },
    dist = 'public'

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
        .pipe(traceur())
        .pipe(gulp.dest(dist))
})

gulp.task('templates', function () {
    gulp.src(paths.templates)
        .pipe(coffee())
        .pipe(gulp.dest(dist))
})

gulp.task('styles', function () {
    gulp.src(paths.styles)
        .pipe(stylus({use: [nib()], import: ['nib']}))
        .pipe(gulp.dest(dist))
})

gulp.task('watch', function() {
  gulp.watch(paths.scripts,   ['scripts'])
  gulp.watch(paths.templates, ['templates'])
  gulp.watch(paths.styles,    ['styles'])
});

gulp.task('default', ['scripts', 'templates', 'styles', 'watch'])