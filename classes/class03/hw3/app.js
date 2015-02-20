//References: http://jsbin.com/igoVoTEr/1/edit?html,css,js,output

var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");
var mongoose = require("mongoose");

var kittyRoutes = require("./routes/kitties");
// var index = require("./routes/index");

var app = express();

var PORT = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);

app.get("/", kittyRoutes.list);
app.get("/cats", kittyRoutes.list);
app.get("/cats/new", kittyRoutes.new);
// app.get("/cats/bycolor/:color", kittyRoutes.bycolor);
app.get("/cats/delete/old", kittyRoutes.delete);

app.listen(PORT, function() {
  console.log("App running on port:", PORT);
});
