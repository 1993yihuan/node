var gulp = require('gulp');
var gulpPrefixer = require('./gulp-plugin/first/first.js');



/*sass转换Css*/
gulp.task('gulpfirst', function () {
    gulp.src('./gulp-plugin/file/*.js', { buffer: false })
        .pipe(gulpPrefixer('/*注释的内容*/'))
        .pipe(gulp.dest('./output'));
});
