const updateProfile = async (req, res) => {
  console.log("BODY", req.body);
  console.log("FILE", req.file);

  res.send("Controller working");
  res.send(req.body, req.file);
};
module.exports = { updateProfile };
