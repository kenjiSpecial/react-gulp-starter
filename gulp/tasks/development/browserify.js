var gulp = require('gulp');
var config = require('../../config').browserify;
var browserify = require('browserify');
var browserSync  = require('browser-sync');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var reactify = require('reactify')

gulp.task("browserify", function(){

    var b = browserify("./src/js/main.js",
        {
            cache: {},
            packageCache: {},
            fullPaths: true,
            debug : true
        });

    b.transform(reactify);
    b = watchify(b);

    b.on('update', function(){
        bundleShare(b);
    });

    bundleShare(b);

});

function bundleShare(b){
    b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
};

gulp.task("browserifyForProduct", function(){
    return browserify('./src/js/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.dest))
});
