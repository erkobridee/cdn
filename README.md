# cdn

Content Delivery Network for Project's Common Resources

> source content in `/src`

## Available tools

> Based on Node.js and Grunt.js

```bash
$ [sudo] npm install -g grunt-cli
```

### dev

> `/tools`

* First install dependencies

```bash
$ npm install
```

* Grunt.js : available tasks

  * `grunt dev` - start connect on `/src`

  * `grunt build` - prepare files to publish on `gh-pages` branch

  * `grunt dist` - preview what will publish on `gh-pages` branch

  * `grunt cleanup` -  clean build files


### gh-pages publisher

> `/publisher`

* First install dependencies

```bash
$ npm install
```

* Grunt.js : available tasks

  * `grunt publish` - build gh-pages files on `/dist`, commit new files and finally clean gh-pages files on `/dist`


## License

MIT : [erkobridee.mit-license.org](http://erkobridee.mit-license.org)
