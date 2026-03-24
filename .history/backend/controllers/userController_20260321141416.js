const updateProfile = async (req, res) => {
  console.log("BODY", req.body);
  console.log("FILE", req.file);

  res.send("Controller working");
};
module.exports = { updateProfile };
