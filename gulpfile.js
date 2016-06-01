var gulp = require('gulp'),
    sass = require('gulp-sass');

// Styles Task
// 
gulp.task('styles', function() {
    gulp.src('public/assets/scss/**/*.scss') //find all scss file in scss directory
        .pipe(sass({
            outputStyle: 'compact' //[compressed, expanded, compact]
        }))
        .pipe(gulp.dest('public/assets/css/'));
});

// Watch Task - look for changes
// Watches JS
gulp.task('watch', function(){
    gulp.watch('public/assets/scss/**/*.scss', ['styles']);
});

// can be a callback function when gulp run
// gulp.task('default', function() {}); 

gulp.task('default', ['styles', 'watch']);