const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register is working");
});

router.post("/login", (req, res) => {
  res.send("Login is working");
});

module.export = router;
