var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var hobbySchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  description: {
     type: String,
  }
});
module.exports = mongoose.model("Hobby", hobbySchema);

