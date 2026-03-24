const express = require("express");
const router = express.Router();

const { protect, checkRole } = require("../middleware/authMiddleware");
const { createJob } = require("../controllers/jobController");

router.post(
  "/create",
  protect,
  checkRole("customer"),
  createJob,
  // (req, res) => {
  //   res.json({
  //     message: "Job created successfully",
  //     createdBy: req.user.id,
  //   });
  // },
);

module.exports = router;
