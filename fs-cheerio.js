var fs = require("fs");
var cheerio = require("cheerio");

exports.readFile = function(filePath, options, callback){
  if(arguments.length === 2) {
    callback = options;
    options = undefined;
  }

  fs.readFile(filePath, options, function(err, contents){
    if(err) return callback(err);

    try {
      callback(null, cheerio.load(contents));
    } catch(err) {
      callback(err);
    }
  });
};

exports.writeFile = function(filePath, $, options, callback) {
  if(arguments.length === 3) {
    callback = options;
    options = undefined;
  }

  try {
    var contents = $.html();
    fs.writeFile(filePath, options, callback);
  } catch(err) {
    callback(err);
  }
}
