var argv        = require('yargs').argv
var gulp        = require('gulp')
var jade        = require('gulp-jade')
var babel       = require('gulp-babel')
var stylus      = require('gulp-stylus')
var browserSync = require('browser-sync')
var reload      = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

//var dest = argv.dir || '../egoscio.github.io'
var dest = argv.dir || './index.html'

gulp.task('default', ['compile'])

gulp.task('compile', ['assets', 'jade', 'babel', 'stylus', 'browser-sync'])


gulp.task('assets', () => {
  return gulp.src('src/assets/*')
    .pipe(gulp.dest(dest))
})

gulp.task('jade', () => {
  return gulp.src('src/jade/*.jade')
    .pipe(jade({ pretty: true, doctype: 'html' }))
    .pipe(gulp.dest(dest))
})

gulp.task('babel', () => {
  return gulp.src('src/babel/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest))
})

gulp.task('stylus', () => {
  return gulp.src('src/stylus/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest))
})

gulp.task('browser-sync', function() {  
  browserSync.init(['./index.html/**.*'], {
    server: {
      baseDir: "./index.html"
    }
  })
})

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('index.html/*.js', reload);
  gulp.watch('src/assets/*', ['assets'])
  gulp.watch('src/jade/*.jade', ['jade'])
  gulp.watch('src/babel/*.js', ['babel'])
  gulp.watch('src/stylus/*.styl', ['stylus'])
  gulp.watch('src/stylus/*.styl', ['stylus'])
})
