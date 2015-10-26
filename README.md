# fs-cheerio

DOM manipulation file system utilities. Combines Node's [fs](https://nodejs.org/api/fs.html) module with [cheerio](https://github.com/cheeriojs/cheerio).

## Install

```shell
npm install fs-cheerio --save
```

## Usage

**fs-cheerio** allows you to read and write files to/from cheerio objects.

### readFile

Read from a file and create a cheerio object that can be manipulated.

```js
var fsc = require("fs-cheerio");

fsc.readFile(__dirname + "/example.html", function(err, $){
  // $ is a jquery/cheerio object that can be manipulated.
});
```

### writeFile

Write a cheerio object to a file.

```js
var fsc = require("fs-cheerio");

fsc.readFile(__dirname + "/example.html", function(err, $){

  $("#app").text("i changed this");

  fsc.writeFile(__dirname + "/example.html", $, function(err){
    // All done!
  });
});
```

## License

BSD 2 Clause
