var dest = "./dev";
var product = "./product";
var src = './src';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest,
            index  : 'index.html'
        }
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest,
        product : product
    },
    browserify: {
        src: src + "/js/main.js",
        dest: dest + "/js",
        watchSrc: src + "/js/{,*/}*.js"
    },
    libs : {
       dest : dest + "/js"
    },
    scss: {
        src: src + "/scss/**/*.scss",
        dest: dest + "/css",
        product : product,
        settings: {
        },
        deploySettings : {

        }
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images",
        product : product + "/images"
    },
    production : {
        cssSrc  : dest    + '/css/*.css',
        jsSrc   : dest    + '/js/*.js',
        cssDest : product + "/css",
        jsDest  : product + "/js"
    }
};
