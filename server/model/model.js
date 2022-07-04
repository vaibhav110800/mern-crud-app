const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  age: String,
  phone: Number,
  photo: Buffer,
});

module.exports = mongoose.model("User", userSchema);
