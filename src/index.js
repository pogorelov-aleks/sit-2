var http = require("http");
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
let arr = [];

app.route("/create").post(bodyParser.text(), function (req, res) {
  arr.push(req.body);
  res.send("Массив изменен");
});

app.route("/list").get(function (req, res) {
  res.send("Массив: [" + arr + "]");
});
app.route("/clear").get(function (req, res) {
  arr = [];
  res.send("Массив удален");
});

http.createServer(app).listen(8080);
