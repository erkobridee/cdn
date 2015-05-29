module.exports = function(grunt) {

grunt.config('copy', {

  gitignore: {
    files: [
      {
        cwd: './',
        src: ['.gitignore'],
        dest: '<%= project.gitclone.directory %>/'
      }
    ]
  },

  projectProd: {
    files: [
      {
        cwd: '<%= project.paths.project.prod %>/',
        src: ['**'],
        dest: '<%= project.gitclone.directory %>/',
        expand: true
      }
    ]
  }

});

};
