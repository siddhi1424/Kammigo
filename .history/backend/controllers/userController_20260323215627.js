const cloudinary = require("../config/cloudinary");
const User = require("../models/User");
const WorkerProfile = require("../models/WorkerProfile");

const updateProfile = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, location, experience, skills, about } = req.body;

    let imageUrl = "";

    // 🔹 get user
    const user = await User.findById(req.user.id);

    // 🔹 delete old image
    if (user.profilepic) {
      const publicId = user.profilepic.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // 🔹 upload new image
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log("CLOUDINARY RESULT:", result);

      imageUrl = result.secure_url;
    }

    // 🔹 update user
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        location,
        ...(imageUrl && { profilepic: imageUrl }),
      },
      { new: true },
    );

    // 🔥 IMPORTANT: worker profile update MUST RUN
    const worker = await WorkerProfile.findOneAndUpdate(
      { userId: req.user.id },
      {
        about,
        experience,
        skills: skills?.split(",").map((s) => s.trim()),
      },
      { new: true, upsert: true },
    );

    console.log("WORKER SAVED:", worker);

    // ✅ ONLY ONE RESPONSE
    return res.json({
      message: "Profile updated successfully",
      user: updatedUser,
      workerProfile: worker,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Update failed" });
  }
};

//-----------getmyprofile user ka updated profile dikhe-------------
const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const worker = await WorkerProfile.findOne({ userId: req.user.id });

    return res.json({
      user: updatedUser,
      workerProfile: worker,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching profile" });
  }
};
module.exports = { updateProfile, getMyProfile };
