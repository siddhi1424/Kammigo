const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    serviceType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: string,
    },
    time: {
      type: string,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Job", jobSchema);
