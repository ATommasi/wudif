// Magical Angular2 scss/ts dev compilers

var gulp        = require('gulp');
var changed     = require('gulp-changed');
var sass        = require('gulp-sass');
var ts          = require('gulp-typescript');
var tslint      = require("gulp-tslint");
var browserSync = require('browser-sync').create();
var tsconf      = require('./tsconfig.json');


// Move all the npm-managed libs into dist
// Not needed if your index.html resides at root level
gulp.task('move-libs', function() {
    var npmModules = [
        'node_modules/core-js/**', 
        'node_modules/zone.js/**', 
        'node_modules/reflect-metadata/**', 
        'node_modules/@angular/**',
        'node_modules/rxjs/**',
        'node_modules/angular2-in-memory-web-api/**',
        'node_modules/angular2-social-login/**',
        'node_modules/systemjs/**',
        'node_modules/normalize.css/**'        // out on a limb here, guessing you like css resets
    ]; 
    gulp.src(npmModules, {base: 'node_modules'})
        .pipe(gulp.dest('dist/lib'))
    gulp.src(['src/lib/**'])
        .pipe(gulp.dest('dist/lib'))
});

// Move all static (.html and .js) files, preserve paths
gulp.task('move-static', function() {
    gulp.src(['src/**/**.html', 'systemjs.config.js', 'src/assets/**/*.{png,gif,jpg}'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())

});


// Lint our TypeScript code
gulp.task("lint", function() {
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report())
});

// Compile all *.scss in any folder
// but excludes names starting with underscore:  ./partials/_partialfile.scss etc 
gulp.task('compile-scss', function() {
    gulp.src(['src/**/!(_)*.scss']) 
        .pipe(changed('dist', {extension: '.css'}))
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});

// Compile .ts wherever it is, preserve paths
gulp.task('compile-typescript', function(){
    return gulp.src('src/**/*.ts')
        .pipe(changed('dist', {extension: '.js'}))
        .pipe(ts(tsconf.compilerOptions))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())

});

//
// Todo: Test runners could go here.
//



// starts a browsersync server launches our browser
// any changes to source files will auto update in our browser
gulp.task('start-server', function() {
   
    browserSync.init({
        injectChanges: true,
        server: "./dist/",
        browser: "chrome",
    });



})


// does nothing but calls other tasks to compile/build
gulp.task('build-app',  ['move-libs', 'move-static', 'compile-scss', 'compile-typescript', 'lint'], function() {

}) 


// Default task is watcher
// starts the browsersync server, compiles, then watches for changes
gulp.task('default', ['build-app', 'start-server'], function() {

     
    // Specifically, no need to watch nodemodules
    // But all other dev stuff is watched:
    gulp.watch('src/**/*.html', ['move-static']).on('change', browserSync.reload);;
    gulp.watch('src/**/*.scss', ['compile-scss']).on('change', browserSync.reload);;
    gulp.watch('src/**/*.ts', ['compile-typescript']).on('change', browserSync.reload);;
});
