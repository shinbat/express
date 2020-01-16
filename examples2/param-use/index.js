/**
 * middleware: app.param vs app.use
 */

var express = require('../..');
var app = express();

app.use("/:file", function (req, res, next) {
  console.log("@bug route", req.params.file);
  next();
});

app.use("", function (req, res, next) {
  console.log("@bug route");
  next();
});

app.param("file", function (req, res, next, val) {
  console.log("@bug param", val);
  next();
});

app.get("/:file", function (req, res) {
  console.log("@bug get", req.params.file);
  res.send();
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
