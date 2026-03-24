const cloudinary = require("../config/cloudinary");
const User = require("../models/User");

const updateProfile = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log("CLOUDINARY RESULT:", result);

      imageUrl = result.secure_url;
    }

    //db update
    const updatedUser = await User.findByIdAndUpdate(
      "69bcd1e8a131751b82fd05b9", //auth middleware se atta hai
      { name, location, ...(imageUrl && { profilepic: imageUrl }) },
      { new: true },
    );

    res.json({
      message: "Image uploaded successfully",

      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "upload failed" });
  }
};
module.exports = { updateProfile };
