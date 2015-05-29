module.exports = {

  all: {
    src: [
      '<%= project.paths.src %>/site/**/*.{html,css,js,coffee,less}',
      '/helpers/**/*.js'
    ],
    options: {
      editorconfig: '<%= project.paths.editorconfig %>'
    }
  }

};
