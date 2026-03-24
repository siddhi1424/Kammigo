const express = require("express");
const updateProfile = async (res, req) => {
  console.log("BODY", req.body);
  console.log("FILE", req.file);

  res.send("Controller working");
};
module.exports = updateProfile;
