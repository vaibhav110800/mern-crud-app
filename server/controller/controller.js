let userDb = require("../model/model");
// let db=require('../services/dbServices')

exports.findUsers = async (req, res) => {
  let users;
  try {
    users = await userDb.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

exports.findUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await userDb.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json({ user });
};

exports.addUser = async (req, res) => {
  const { fname, lname, email, age, phone } = req.body;
  let user;

  console.log(req.file);
  try {
    user = new userDb({
      fname,
      lname,
      email,
      age,
      phone,
      photo: req.file.buffer,
    });
    await user.save();
    // res.redirect('/');
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ user });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { fname, lname, email, age, phone } = req.body;
  let user;
  try {
    user = await userDb.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
      age,
      phone,
    });
    user = await user.save();
    // res.redirect('/');
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ user });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await userDb.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "User Successfully Deleted" });
};
