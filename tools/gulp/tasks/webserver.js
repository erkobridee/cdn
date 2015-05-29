module.exports = function(gulp, $) {

  gulp.task('webserver:dev', function() {
    // https://www.npmjs.com/package/gulp-connect
    $.connect.server({
      port: $.config.webserver.port,
      root: [
        $.config.paths.src
      ]
    });
    $.open('http://' + $.localip + ':' + $.config.webserver.port);
  });


  gulp.task('webserver:preview', function() {

    if( $.is.release ) {
      // https://www.npmjs.com/package/gulp-connect
      $.connect.server({
        port: $.config.webserver.port,
        root: [
          $.config.paths.dist
        ]
      });
      $.open('http://' + $.localip + ':' + $.config.webserver.port);
    } else {
      $.log('Oops release not available...');
    }

  });

};
