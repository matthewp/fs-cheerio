var asap = require("util").promisify;
var fs = require("fs");
var cheerio = require("cheerio");
var readFile = asap(fs.readFile);
var writeFile = asap(fs.writeFile);

exports.readFile = function(filePath, options){
  return readFile(filePath, options).then(function(contents){
    return cheerio.load(contents);
  });
};

exports.writeFile = function(filePath, $, options) {
  return Promise.resolve().then(function(){
    var contents = $.html();
    return writeFile(filePath, contents, options);
  });
};
