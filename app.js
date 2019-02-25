var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express();

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.get("/", function(req, res) {
  res.render("./views/index.ejs");
});

app.get("/:id", function(req, res) {
  var id = req.params.id;
  res.render(id + ".ejs");
});



app.listen(5001, function(req, res) {
  console.log("SERVER HAS STARTED");
});