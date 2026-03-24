const express = require("express");
const router = express.Router();

const { protect, checkRole } = require("../middleware/authMiddleware");
const { createJob, pendingJobs } = require("../controllers/jobController");

//cutomer creates jobs
router.post(
  "/create",
  protect,
  checkRole("customer"),
  createJob,
  (req, res) => {
    res.json({
      message: "Job created successfully",
      createdBy: req.user.id,
    });
  },
);

//worker pending request
router.post("/pending", protect, checkRole("worker"), pendingJobs);

module.exports = router;
