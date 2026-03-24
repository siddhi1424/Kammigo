const cloudinary = require("../config/cloudinary");
const User = require("../models/User");
const WorkerProfile = require("../models/WorkerProfile");

const updateProfile = async (req, res) => {
  try {
    console.log("FILE:", req.file);
    const { name, location, experience, skills, about } = req.body;

    let imageUrl = "";

    //oldimage delete karna

    const user = await User.findById(req.user.id);

    if (user.profilepic) {
      const publicId = user.profilepic.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }
    //upload new image

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log("CLOUDINARY RESULT:", result);

      imageUrl = result.secure_url;
    }

    //db update
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, //auth middleware se atta hai
      { name, location, ...(imageUrl && { profilepic: imageUrl }) },
      { new: true },
    );

    res.json({
      message: "Image uploaded successfully",

      user: updatedUser,
    });

    //update worker profile
    const worker = await WorkerProfile.findOneAndUpdate(
      { userId: req.user.id },
      {
        about,
        experience,
        skills: skills?.split(",").map((s) => s.trim()),
      },
      { new: true, upsert: true }, //create if not exist hai toh
    );

    res.json({
      message: "profile updated",
      user: updatedUser,
      WorkerProfile: worker,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
};

//-----------getmyprofile user ka updated profile dikhe-------------
const getMyProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id);
    const worker = await WorkerProfile.findOne({ userId: req.user.id });

    res.json({
      user,
      WorkerProfile: worker,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};
module.exports = { updateProfile };
