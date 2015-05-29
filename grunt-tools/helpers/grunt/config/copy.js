module.exports = {

  ajaxToDist: {
    files: [
      {
        expand: true,
        cwd: '<%= project.paths.src %>/ajax/',
        src: ['**', '!**/*.md'],
        dest: '<%= project.paths.dist %>/ajax/'
      }
    ]
  },

  siteToDist: {
    files: [
      {
        expand: true,
        cwd: '<%= project.paths.src %>/site/',
        src: ['**'],
        dest: '<%= project.paths.dist %>/'
      }
    ]
  }

};
