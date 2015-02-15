var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  curr: Boolean
});

module.exports = mongoose.model("User", userSchema);