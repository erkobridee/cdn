module.exports = function(grunt) {

grunt.config('githubPages', {

  prodCode: {

    options: {
      // The default commit message for the branch
      commitMessage: '<%= project.gitclone.branch %> automated commit <%= project.isoUtcDateTime %> (UTC)'
    },

    // The folder where your repo is
    src: '<%= project.gitclone.directory %>'
  }

});

};
