var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var twoteSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model("Twote", twoteSchema);