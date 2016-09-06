var gulp        =   require('gulp'), 
    nodemon     =   require('gulp-nodemon'),
    livereload      =   require('gulp-livereload');

gulp.task('serve', function(){
  nodemon({'script': './bin/www'});
});

gulp.task('css', function(){
	gulp.src('./public/stylesheets/**/*.css')
	.pipe(livereload());
});

gulp.task('js', function(){
    gulp.src('./public/javascripts/**/*.js')
    .pipe(livereload());
});

gulp.task('ejs', function(){
    gulp.src('./views/**/*.ejs')
    .pipe(livereload());
});

gulp.task('routes', function(){
    gulp.src('./routes/**/*.js')
    .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./public/stylesheets/**/*.css',['css']);
    gulp.watch('./public/javascripts/**/*.js',['js']);
    gulp.watch('./views/**/*.ejs',['ejs']);
  	gulp.watch('./routes/**/*.js',['routes']);
});

gulp.task('default', ['serve', 'watch']);