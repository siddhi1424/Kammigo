const express = require("express");
const cors = require("cors");
require("dotenv").config();

//1.mongodb connnection config
const connectDB = require("./config/db");

//2.authentication routes
const authRoutes = require("./routes/authRoutes");

//authmiddleware ko bulaya ider token verify karne
const { protect } = require("./middleware/authMiddleware");

//jobroutes ko call kiya
const jobRoutes = require("./routes/jobRoutes");

//workerprofile ka route
const workerprofileRoutes = require("./routes/workerRoutes");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/worker-profile", workerprofileRoutes);

//authmiddleware protected test route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

//test route route
app.get("/", (req, res) => {
  res.send("Kammigo backend is running");
});

connectDB();

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
