let  {User,validate} = require("../model/model");

exports.findUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users.length) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

exports.findUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json({ user });
};

exports.addUser = async (req, res) => {
  try {
    const { fname, lname, email, age, phone } = req.body;
   
    const { error } = validate(req.body);

    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user;

    try {
      user = new User({
        fname,
        lname,
        email,
        age,
        phone
      });
      await user.save();
    } catch (error) {
      console.log(error);
    }
    if (!user) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { fname, lname, email, age, phone } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
      age,
      phone
    });
    // user = await user.save();
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
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "User Successfully Deleted" });
};
