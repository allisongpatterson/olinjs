//References: http://jsbin.com/igoVoTEr/1/edit?html,css,js,output

var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

// var getCat = require("./routes/getCat");

var app = express();

var PORT = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res) {
  res.render("home");
});

app.get("/ingredients", function(req,res) {
  res.render("layouts/ingredients");
});

app.get("/form-test", function(req,res) {
  res.render("layouts/add-edit");
});

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
