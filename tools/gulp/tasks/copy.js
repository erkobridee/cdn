module.exports = function(gulp, $) {

  gulp.task('copy:site2dist', function() {
    return gulp.src( $.config.site.glob )
      .pipe( gulp.dest( $.config.paths.dist ) );
  });

  gulp.task('copy:ajax2dist', function() {
    return gulp.src( $.config.ajax.glob )
      .pipe( gulp.dest( $.config.paths.dist + '/ajax' ) );
  });

  //---

  gulp.task('copy:dist2repo-dir', function() {
    return gulp.src( $.config.paths.dist + '/**/*' )
      .pipe( gulp.dest( $.config.paths.repoDir ) );
  });

};
