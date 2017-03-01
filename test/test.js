var fs = require("fs");
var fsc = require("../fs-cheerio");
var test = require("tape");
var tmp = require("tmp");

test("opens an html file to a cheerio object", function(t){
  t.plan(1);

  fsc.readFile(__dirname + "/example.html")
  .then(function($){
    t.equal($("#app").text(), "hello world", "jquery object works");
  })
  .catch(function(err){
    t.ok(!err, "there is not an error");
  });
});

test("can write to a file", function(t){
  t.plan(2);

  fsc.readFile(__dirname + "/example.html")
  .then(function($){
    $("#app").text("hi there");

    var tmpPath = new Promise(function(resolve, reject){
      tmp.file(function(err, filePath){
        if(err) return reject(err);
        resolve(filePath);
      });
    })

    return tmpPath.then(function(filePath){
      return fsc.writeFile(filePath, $).then(function(){
        fs.stat(filePath, function(err, stat){
          t.ok(!err);
          t.ok(stat, "file does exist");
        });
      });
    });
  })
  .catch(function(err){
    t.ok(!err, "there is no error in writing");
  });
});
