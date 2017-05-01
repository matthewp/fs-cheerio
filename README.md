[![Build Status](https://travis-ci.org/matthewp/fs-cheerio.svg?branch=master)](https://travis-ci.org/matthewp/fs-cheerio)
[![npm version](https://badge.fury.io/js/fs-cheerio.svg)](http://badge.fury.io/js/fs-cheerio)

# fs-cheerio

DOM manipulation file system utilities. Combines Node's [fs](https://nodejs.org/api/fs.html) module with [cheerio](https://github.com/cheeriojs/cheerio).

## Install

```shell
npm install fs-cheerio --save
```

## Usage

**fs-cheerio** allows you to read and write files to/from cheerio objects.

> **Note**: While some of the below examples use async/await syntax, fs-cheerio will work with any Node version that supports Promises (or if you include a Promise polyfill).

### readFile

Read from a file and create a cheerio object that can be manipulated. Returns a Promise that will resolve with the cheerio object.

```js
const fsc = require("fs-cheerio");

fsc.readFile(__dirname + "/example.html").then(function($){
  // $ is a jquery/cheerio object that can be manipulated.
});
```

This works even better with async/await:

```js
const fsc = require("fs-cheerio");

(async function(){
  let $ = await fsc.readFile(__dirname + "/example.html");
})();
```

### writeFile

Write a cheerio object to a file. Returns a Promise that will resolve once the file has been written.

```js
var fsc = require("fs-cheerio");

(async function(){

  let $ = await fsc.readFile(__dirname + "/example.html");
  $("#app").text("i changed this");

  await fsc.writeFile(__dirname + "/example.html", $);

})();
```

## License

BSD 2 Clause
