var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Cat", catSchema);