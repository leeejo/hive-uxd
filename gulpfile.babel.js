const gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    child = require('child_process'),
    dest = require('gulp-dest');

/*
*   Hook up browserSync with Jekyll using child process
*/

let messages = {
  jekyllBuild: '<span style="color: blue">Running:</span> jekyll build'
};

gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('jekyll-build', function(done){
  browserSync.notify(messages.jekyllBuild);
  return child.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

/*
*   Task for CSS files
*   Autoprefixer, SASS compilation
*   Piped into browserSync
*/

gulp.task('sass', function() {
  return gulp.src('_sass/*.scss')
    .pipe(sass({
      includePaths: ['_sass'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 version', 'ie 9'], {cascade: true}))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('css'));
});

/*
*   Task for JS files
*   Piped into browserSync
*/

gulp.task('js', function() {
  return gulp.src('_libs/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
  gulp.watch(['_sass/*.scss'], ['sass']);
  gulp.watch(['_libs/*.js'], ['js']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_config.yml', '_case_studies/*.md', '_methods/*/*/*', 'case_studies/*.html', 'process/*.html', 'team/*.html', 'about/*.md'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);