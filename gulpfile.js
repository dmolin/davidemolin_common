var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('sass/', {style:'expanded'})
            .pipe(gulp.dest('./static/stylesheets'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

