const mongoose = require("mongoose");

const workerSchema =
  ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    serviceType: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    location: { type: String },
    rating: { type: Number, default: 0 },
    totalJobs: { type: Number, default: 0 },
    boostCredits: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true });

module.export = mongoose.model("Worker", workerSchema);
