/**
 * 增加头字段
 * @type {[type]}
 */
// var gulp = require('gulp');
// var gulpPrefixer = require('./gulp-plugin/first/first.js');
//
// gulp.task('gulpfirst', function () {
//     gulp.src('./gulp-plugin/file/*.js', { buffer: false })
//         .pipe(gulpPrefixer('/*注释的内容*/'))
//         .pipe(gulp.dest('./output'));
// });


var gulp = require('gulp');
var pfDefault =  require('./gulp-plugin/replace/replace.js');

gulp.task('gulpfirst', function () {
    gulp.src('./gulp-plugin/file/*.js', { buffer: false })
        .pipe(pfDefault('helloword','12345'))
        .pipe(gulp.dest('./output'));
});
