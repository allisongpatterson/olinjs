var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
  name: String,
  price: Number
});

module.exports = mongoose.model("Ingredient", ingredientSchema);