module.exports = {

  js: {
    files: [
      '<%= project.paths.src %>/site/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  }

};
