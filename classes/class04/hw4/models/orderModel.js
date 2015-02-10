var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  name: String,
  ingredientNames: [String],
  totalPrice: Number
});

module.exports = mongoose.model("Order", orderSchema);