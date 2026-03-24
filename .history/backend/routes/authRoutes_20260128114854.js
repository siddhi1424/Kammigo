const express = require("express");
const router = express.Router();

//here we import contoller
const { registerUser } = require("../controllers/authController");

//route
router.post("/register", registerUser);

module.exports = router;
