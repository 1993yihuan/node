var gulp = require('gulp');
var gulpPrefixer = require('./gulp-plugin/first/first.js');



/*sass转换Css*/
gulp.task('gulpfirst', function () {
    gulp.src('./gulp-plugin/file/*.js', { buffer: false })
        .pipe(gulpPrefixer('向头部增加内容'))
        .pipe(gulp.dest('./output'));
});
