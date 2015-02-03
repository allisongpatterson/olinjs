var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
  name: String,
  price: Number
});

var Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient