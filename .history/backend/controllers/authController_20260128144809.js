const User = require("../models/User");
const bcrypt = require("bcryptjs");

//register code
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, location } = req.body;

    if (!name || !email || !password || !role || !phone || !location) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //hash password ke lie
    const hashPassword = await bcrypt.hash(password, 10);

    //agar sab sahi hai toh user ka new object banana
    const newUser = new User({
      name,
      email,
      password: hashPassword,
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

//login user code

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password is required",
      });
    }

    //find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    //compare password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    //success
    res.status(200).json({
      message: "Login succesfull",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };
