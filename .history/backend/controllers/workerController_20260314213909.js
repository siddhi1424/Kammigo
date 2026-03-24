const WorkerProfile = require("../models/workerProfile");

const createWorkerProfile = async (req, res) => {
  try {
    const { serviceType, pricePerHour, location } = req.body;

    if (!serviceType || !pricePerHour || !location) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //check if user already exists

    const workerExist = await WorkerProfile.findOne({
      userId: req.user.id,
    });

    if (workerExist) {
      return res.status(400).json({
        message: "Profile is already exists",
      });
    }

    const profile = new WorkerProfile({
      userId: req.user.id,
      name: user.name,
      serviceType,
      pricePerHour,
      location,
    });

    await profile.save();

    res.status(201).json({
      message: "Worker profile created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create profile",
      error: error.message,
    });
  }
};

//----------------does profile exist----------------------
const getWorkerProfile = async (req, res) => {
  try {
    const profile = await WorkerProfile.findOne({
      userId: req.user.id,
    });

    if (!profile) {
      return res.status(404).json({
        message: "User Profile not found",
      });
    }

    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
};
//---------------------getWorker profile-------------
const getWorkerByService = async (req, res) => {
  try {
    const { serviceType } = req.params;
    const workers = await WorkerProfile.find({
      serviceType: new RegExp(serviceType, "i"),
      userId: { $ne: null },
    }).populate("userId", "name");

    res.status(200).json({
      workers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch workers",
      error: error.message,
    });
  }
};

module.exports = { createWorkerProfile, getWorkerProfile, getWorkerByService };
