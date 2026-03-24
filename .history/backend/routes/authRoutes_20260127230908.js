const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Auth route working");
});

router.post("/register", (req, res) => {
  res.send("Register is working");
});

router.post("/login", (req, res) => {
  res.send("Login is working");
});

module.exports = router;
