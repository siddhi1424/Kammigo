const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    //agar sab sahi hai toh user ka new object banana
    const newUSer = new User({
      name,
      email,
      password,
      role,
    });
    //user ka data database mai save karo
    await newUSer.save();
    console.log("Saved user:", newUser);
    //response bhejdena
    res.status(201).json({
      message: "User registered Successfully",
      user: newUSer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed",
      error: error.message,
    });
  }
};

module.exports = { registerUser };
