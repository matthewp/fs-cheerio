const asap = require("pdenodeify");
const fs = require("fs");
const fsc = require("../fs-cheerio");
const test = require("tape");
const tmp = require("tmp");

test("opens an html file to a cheerio object", async function(t){
  t.plan(1);

  let $ = await fsc.readFile(__dirname + "/example.html");
  t.equal($("#app").text(), "hello world", "jquery object works");
});

test("can write to a file", async function(t){
  t.plan(1);

  let $ = await fsc.readFile(__dirname + "/example.html");
  $("#app").text("hi there");

  let tmpPath = await asap(tmp.file)();


  await fsc.writeFile(tmpPath, $);
  let cont = await asap(fs.readFile)(tmpPath, "utf8");

  t.ok(/hi there/.test(cont), "contains the contents");
});
