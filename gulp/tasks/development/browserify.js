var gulp = require('gulp');
var config = require('../../config').browserify;
var browserify = require('browserify');
var browserSync  = require('browser-sync');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task("browserify", function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add(config.src);

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));

});
