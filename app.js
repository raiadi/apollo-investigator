var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
app.use(express.static(__dirname + "/public"));
    
    app.get("/", function(req,res){
        res.render("index.ejs");
    });
    
    app.get("/services", function(req,res){
        res.render("services.ejs");
    });
    
    
    
app.listen(5001, function(req,res){
    console.log("SERVER HAS STARTED");
});