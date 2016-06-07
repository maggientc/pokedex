var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

// Styles Task
// 
gulp.task('styles', function() {
    gulp.src('public/assets/scss/**/*.scss') //find all scss file in scss directory
        .pipe(sass({
            outputStyle: 'compact' //[compressed, expanded, compact]
        }))
        .pipe(gulp.dest('public/assets/css/'));
});


gulp.task('lint', function() {
    return gulp.src('public/app/**/*.js')
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('server', function() {
    nodemon({
            script: 'server.js',
            ext: 'html js',
            ignore: [
                'public/',
                'node_modules/'
            ],
        })
        .on('restart', function() {
            console.log('restarted!')
        })
});

// Watch Task - look for changes
// Watches JS
gulp.task('watch', function() {
    gulp.watch('public/assets/scss/**/*.scss', ['styles']);
    gulp.watch('public/app/**/*.js', ['lint']);
});

// can be a callback function when gulp run
// gulp.task('default', function() {}); 

gulp.task('default', ['server', 'lint', 'styles', 'watch']);
