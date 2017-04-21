# cdn

Content Delivery Network for Project's Common Resources

> source content in `/src`

<!-- toc -->

* [Prerequisites](#prerequisites)
* [Installation Guide](#installation-guide)
* [Tools](#tools)
  * [Dependencies](#dependencies)
  * [Commands](#commands)
* [License](#license)

<!-- toc stop -->


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `[sudo] npm install -g gulp`


## Installation Guide

Enter the following commands in the terminal

```bash
git https://github.com/erkobridee/cdn.git
cd cdn
npm install
```


## Tools

### Dependencies

```bash
npm install \
  del \
  gulp \
  gulp-bump \
  gulp-cached \
  gulp-connect \
  gulp-jshint \
  gulp-lintspaces \
  gulp-load-plugins \
  gulp-print \
  gulp-shell \
  gulp-task-listing \
  gulp-util \
  jshint-stylish \
  lazypipe \
  open \
  run-sequence \
  yargs \
  --save-dev
```


### Commands

* `gulp` - development mode, start server on port 1337 and look `src` directory files

* `gulp --release --preview` - generate deploy version on `dist` directory and start server on port 1337 looking to this directory

* `gulp --publish` - publish deploy version files on `gh-pages` branch

  * `gulp --init` - create local directory with github repository on gh-pages branch

* `npm outdated` - check outdated dependencies

## License

* MIT : [erkobridee.mit-license.org](http://erkobridee.mit-license.org/)
