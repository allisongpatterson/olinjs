var path = require("path");

// var $thing = $(this);

var Cat = require(path.join(__dirname,"../models/catModel"));

var cats = {};

cats.new = function(req, res) {
  var name = "Felix";
  var age = 7;
  var colors = "black";
  var newCat = new Cat({name: name, age: age, colors:colors});
  newCat.save(function (err) {
    if (err) {
      console.log("Problem saving " + name + "!", err);
    } else {
      res.render("home", {cats: [newCat]}); 
    }
  });
};

cats.delete = function (req, res) {
  var cat = Cat.find().sort({age: -1}).limit(1);
  cat.exec(function (err, data) {
      if (err) {
        console.log('Something broke!');
      } else { 
        res.render("home", {cats: data});
      }
    }
  );
};

cats.list = function (req, res) {
  Cat.find().sort({age: -1})
  .exec(function (err, data) {
      if (err) {
        console.log('Something broke!');
      } else { 
        res.render("home", {cats: data});
      }
    }
  );
};

module.exports = cats;
