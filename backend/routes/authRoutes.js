const express = require("express");
const router = express.Router();

//here we import contoller
const { registerUser, loginUser } = require("../controllers/authController");

//route
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
