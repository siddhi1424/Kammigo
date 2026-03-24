const mongoose = require("mongoose");

const workerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    serviceType: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    location: { type: String, required: true },
    ratings: { type: Number, default: 0 },
    totalJobs: { type: Number, default: 0 },
    isAvailable: {
      type: Boolean,
      default: true,
    },

    //new thing for worker profile
    experience: { type: String },
    skills: { type: [String] },
    about: { type: String },
    // profilepic: { type: String },
    // workImages: { type: String },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.WorkerProfile ||
  mongoose.model("WorkerProfile", workerProfileSchema);
