const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
