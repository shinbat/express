/**
 * middleware: app.param vs app.use
 */

var express = require('../..');
var app = express();

app.use("/:file", function (req, res, next) {
  console.log("@bug route1", req.params.file);
  next();
});

app.use("", function (req, res, next) {
  console.log("@bug route2");
  next();
});

app.param("file", function (req, res, next, val) {
  console.log("@bug param", val);
  next();
});

app.get("/:file", function (req, res) {
  var a = req.param('a');    // localhost:3000/sbt?a=3
  console.log("@bug get1..", req.params.file, a);
  res.send();
});

app.get("", function (req, res) {
  console.log("@bug get2");
  res.send();
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
