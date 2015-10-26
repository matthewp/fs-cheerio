var fs = require("fs");
var fsc = require("../fs-cheerio");
var test = require("tape");
var tmp = require("tmp");

test("opens an html file to a cheerio object", function(t){
  t.plan(2);

  fsc.readFile(__dirname + "/example.html", function(err, $){
    t.ok(!err, "there is not an error");
    t.equal($("#app").text(), "hello world", "jquery object works");
  });
});

test("can write to a file", function(t){
  t.plan(3);

  fsc.readFile(__dirname + "/example.html", function(err, $){
    $("#app").text("hi there");

    tmp.file(function(err, filePath){
      fsc.writeFile(filePath, $, function(err){
        t.ok(!err, "there is no error in writing");

        fs.stat(filePath, function(err, stat){
          t.ok(!err);
          t.ok(stat, "file does exist");
        });
      });
    });
  });
});
