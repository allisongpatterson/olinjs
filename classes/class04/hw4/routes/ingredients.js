var path = require("path");

var Ingredient = require(path.join(__dirname,"../models/ingredientModel"));

var ingredients = {};

ingredients.newIngredient = function(req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var ingrObj = {
    name: name,
    price: price
  };
  var newIngr = new Ingredient(ingrObj);
  newIngr.save(function(err) {
    if (err) {
      res.status(500).send('Something broke!');
    } else {
      console.log("it got to ingredients.new");
      res.render("ingredients", {
        message: "New ingredient created:",
        ingredients: [ingrObj] 
      });
    }
  });
};

ingredients.editIngredient = function(req, res) {
  var id = req.body.id;
  var newName = req.body.newName;
  var newPrice = req.body.newPrice;
  Ingredient.update({_id: id}, {name: newName, price: newPrice}, function(err){
    if (err) {
      console.log(err);
      res.send("success!");
      //die
    } else {
      res.send("success!");
    }
  })
}

ingredients.list = function(req, res) {
  Ingredient.find(function(err,data) {
  if (err) {
      console.log(err);
      // res.send("success!");
      //die
    } else {
      res.render("layouts/ingredients",{ingredients: data});
    }
    
  });
  };

module.exports = ingredients;

// ingredients.edit = function(req, res) {
//   var name = $.name;
//   var price = $.price;
//   var ingrObj = {
//     name: name,
//     price: price
//   };
//   var newIngr = new Ingredient(ingrObj);
//   newIngr.save(function(err) {
//     if (err) {
//       res.status(500).send('Something broke!');
//     } else {
//       ingredients.delete(req, res);
//       res.render("ingredients", {
//         message: "Ingredient edited:",
//         ingredients: [ingrObj] 
//       });
//     }
//   });
// };

// ingredients.list = function(req, res) {
//   var message;
//   Ingredient.find({name: name})
//     .sort({price: 1})
//     .exec(function(err, ingredients) {
//     if (err) {
//       res.status(500).send("Something broke!");
//     } else {
//       res.render("ingredients", {
//         message: message,
//         ingredients: ingredients
//       })
//     }
//   })
// };

// ingredients.delete = function(req, res) {
//   Ingredient.findOneAndRemove({name: $.name}, {sort: {price: 1}}, function(err, ingredient) {
//     if (err) {
//       res.status(500).send("Something broke!");
//     } else {
//       var ingredients = [ingredient];
//       var message = "Ingredient has been removed";
//       if (!ingredient) {
//         cats = null;
//         message = "No ingredients left!";
//       }
//       var ingredients = ingredient ? [ingredient] : null;
//       res.render("ingredients", {
//         message: message,
//         ingredients: ingredients
//       })
//     }
//   })
// };

// module.exports.newIngredient = newIngredient;