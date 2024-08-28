const User = require("../models/userModel");

const submitForm = async (req, res) => {
  const { first_name, last_name, password, email } = req.body;
  const user = new User({ first_name, last_name, password, email });
  await user.save();
  res.json({ message: "Form submitted successfully!", user });
};

module.exports = { submitForm };
