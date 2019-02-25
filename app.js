var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  ejs = require("ejs"),
  express = require("express"),
  app = express();

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.get("/:id", function(req, res) {
  var id = req.params.id;
  res.render(id + ".ejs");
});



app.listen(process.env.PORT || 5001, function(req, res) {
  console.log("SERVER HAS STARTED");
});