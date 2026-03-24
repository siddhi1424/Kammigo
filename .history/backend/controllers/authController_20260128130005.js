const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, location } = req.body;

    if (!name || !email || !password || !role || !phone || !location) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    //agar sab sahi hai toh user ka new object banana
    const newUser = new User({
      name,
      email,
      password,
      role,
      phone,
      location,
    });
    //user ka data database mai save karo
    await newUser.save();
    console.log("Saved user:", newUser);
    //response bhejdena
    res.status(201).json({
      message: "User registered Successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed",
      error: error.message,
    });
  }
};

module.exports = { registerUser };
