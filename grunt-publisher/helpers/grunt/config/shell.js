// https://github.com/sindresorhus/grunt-shell

module.exports = function(grunt) {

grunt.config('shell', {

  projectBuildProd: {
    command: 'grunt build',
    options: {
      stdout: true,
      execOptions: {
        cwd: '<%= project.paths.project.tools %>'
      }
    }
  },

  projectClean: {
    command: 'grunt clean',
    options: {
      stdout: true,
      execOptions: {
        cwd: '<%= project.paths.project.tools %>'
      }
    }
  }

});

};
