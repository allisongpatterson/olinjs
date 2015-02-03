var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
  name: String,
  price: Number
});

var burgerSchema = new Schema({
  ingredients: [String],
  price: Number // total cost of all ingredients (abstracting burger = $0 for now)
});

var Ingredient = mongoose.model("Ingredient", ingredientSchema);
var Burger = mongoose.model("Burger", burgerSchema);
module.exports = Ingredient
module.exports = Burger