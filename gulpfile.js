/**
 * Created by lijiazhen on 2017/9/1.
 */
const gulp = require('gulp');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('connect',function(){
    connect.server({
        root:'./',
        livereload:true,
        port:2002
    });
});

gulp.task('watch',function(){
    watch('./index.html',function(){
        gulp.src('index.html')
            .pipe(connect.reload());
    });
    watch('./src/style.scss',function(){
        gulp.src('./src/style.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest('./src/css'))
            .pipe(connect.reload())
    })
})



gulp.task('default',['connect','watch']);