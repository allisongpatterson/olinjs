var path = require("path");

var Cat = require(path.join(__dirname,"../models/catModel"));

var cats = {};

cats.new = function(req, res) {
  var name = "Felix";
  var newCat = new Cat({name: name});
  newTwote.save(function (err) {
    if (err) {
      console.log("Problem saving cat", err);
    } else {console.log("howdy there")}
  });
};

cats.delete = function (req, res) {
  Cat.find().sort({age: -1}).remove();
}

cats.list = function (req, res) {
  Cat.find().sort({age: -1})
  .exec(function (err, data) {
      if (err) {
        console.log('Something broke!');
      }
        else { 
          res.render("home", {cats: data})};
    }
  );
};

module.exports = cats;
