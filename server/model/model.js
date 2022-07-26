const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  age: Number,
  phone: String,
});

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fname: Joi.string().required().label("First Name"),
    lname: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    age: Joi.number().min(18).max(65).required().label("Age"),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label("phone"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
