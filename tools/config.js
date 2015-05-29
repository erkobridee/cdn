module.exports = (function() {

  var path = require('path');
  var pkg = require('../package');

  //---

  var config = {};

  //--

  config.root = './';

  //--

  config.packages = [
    './package.json'
  ];

  //---

  var bannerTitle = pkg.title || pkg.name;

  config.banner =
    '/*!\n' +
    ' * ' + bannerTitle + '\n' +
    ' * ' + pkg.description + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' * v' + pkg.version + '\n' +
    ' */\n';

  //---

  config.git = {
    branch: 'gh-pages',
    commitMessage: '<%= branch %> automated commit <%= time %>'
  };

  //---

  config.paths = {
    src       : 'src',
    repoDir   : '.local/' + config.git.branch,
    dist      : 'dist'
  };

  //---

  config.ajax = {
    glob: [
      config.paths.src + '/ajax/**/*'
    ]
  };

  config.site = {
    glob: [
      config.paths.src + '/site/**/*'
    ]
  };

  config.tools = [
    'gulpfile.js',
    'tools/**/*.js'
  ];

  //---

  config.webserver = {
    port: 1337
  };

  //---

  return config;

})();
