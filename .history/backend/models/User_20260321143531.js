const mongoose = require("mongoose");
//it is common user model for both worker and customer
//enum is use for protecting getting wromg data any random data
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, enum: ["customer", "worker"], required: true },
    profilepic: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
