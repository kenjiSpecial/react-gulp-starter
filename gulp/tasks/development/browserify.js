var gulp = require('gulp');
var config = require('../../config').browserify;
var browserify = require('browserify');
var browserSync  = require('browser-sync');
var source = require('vinyl-source-stream');

gulp.task("browserify", function(){

    return browserify('./src/js/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));

});
