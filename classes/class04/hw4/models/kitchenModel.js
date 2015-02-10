var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kitchenSchema = new Schema({
  name: String,
  price: Number
});

module.exports = mongoose.model("Kitchen", kitchenSchema);