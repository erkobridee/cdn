module.exports = function(grunt) {

grunt.config('project', {

  isoUtcDateTime: '<%= grunt.template.today("isoUtcDateTime") %>',

  paths: {
    project: {
      tools: '../tools',
      prod: '../dist'
    }
  },

  gitclone: {
    branch: 'gh-pages',
    directory: '.local/<%= project.gitclone.branch %>',
    repository: '<%= mainPkg.repository.url %>'
  }

});

};
