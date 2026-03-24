const cloudinary = require("../config/cloudinary");

const updateProfile = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log("CLOUDINARY RESULT:", result);

      imageUrl = result.secure_url;
    }
    res.json({
      message: "Image uploaded successfully",
      imageUrl: imageUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "upload failed" });
  }
};
module.exports = { updateProfile };
