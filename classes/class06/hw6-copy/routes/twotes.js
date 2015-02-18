var path = require("path");

var Twote = require(path.join(__dirname,"../models/twoteModel"));
var User = require(path.join(__dirname,"../models/userModel"));

var twotes = {};

twotes.new = function(req, res) {
  var author = req.body.author;
  var text = req.body.text;
  var newTwote = new Twote({author: author, text: text});
  newTwote.save(function (err) {
    if (err) {
      console.log("Problem saving bob", err);
    } else {console.log("howdy there")
      // res.send(newTwote)
    }
  });
};

twotes.edit = function(req, res) {
  var id = req.body.id;
  var author = req.body.author;
  var newText = req.body.newText;
  Twote.update({_id: id}, {author: author, text: newText}, function(err) {
    if (err) {
      res.status(500).send('Something broke!');
    } else {
      res.send("success!");
    }
  });
};

twotes.delete = function(req, res) {
  var id = req.body.id;
  var author = req.body.author;
  Twote.remove({_id: id}, function(err){
    if (err) {
      res.status(500).send('Something broke!');
    } else {
      res.send("success!");
    }
  });
};

twotes.list = function(req, res) {
  Twote.find(function(err,data) {
  if (err) {
      res.status(500).send('Something broke!');
    } else {
      res.render("layouts/twotes",{twotes: data});
    }
  });
};

module.exports = twotes;
