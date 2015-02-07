var Ingredient = require(path.join(__dirname,"../models/ingredientModel"));

var ingredients = {};

ingredients.new = function(req, res) {
  var name = $.name;
  var price = $.price;
  var ingrObj = {
    name: name,
    price: price
  };
  var newIngr = new Ingredient(ingrObj);
  newIngr.save(function(err) {
    if (err) {
      res.status(500).send('Something broke!');
    } else {
      res.render("ingredients", {
        message: "New ingredient created:",
        ingredients: [ingrObj] 
      });
    }
  });
};

ingredients.edit = function(req, res) {
  var name = $.name;
  var price = $.price;
  var ingrObj = {
    name: name,
    price: price
  };
  var newIngr = new Ingredient(ingrObj);
  newIngr.save(function(err) {
    if (err) {
      res.status(500).send('Something broke!');
    } else {
      ingredients.delete(req, res);
      res.render("ingredients", {
        message: "Ingredient edited:",
        ingredients: [ingrObj] 
      });
    }
  });
};

ingredients.list = function(req, res) {
  var message;
  Ingredient.find({name: name})
    .sort({price: 1})
    .exec(function(err, ingredients) {
    if (err) {
      res.status(500).send("Something broke!");
    } else {
      res.render("ingredients", {
        message: message,
        ingredients: ingredients
      })
    }
  })
};

ingredients.delete = function(req, res) {
  Ingredient.findOneAndRemove({name: $.name}, {sort: {price: 1}}, function(err, ingredient) {
    if (err) {
      res.status(500).send("Something broke!");
    } else {
      var ingredients = [ingredient];
      var message = "Ingredient has been removed";
      if (!ingredient) {
        cats = null;
        message = "No ingredients left!";
      }
      var ingredients = ingredient ? [ingredient] : null;
      res.render("ingredients", {
        message: message,
        ingredients: ingredients
      })
    }
  })
};

module.exports = ingredients;