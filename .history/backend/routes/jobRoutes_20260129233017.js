const express = require("express");
const router = express.Router();

const { protect, checkRole } = require("../middleware/authMiddleware");

router.post("/create", protect, checkRole("customer"), (req, res) => {
  res.json({
    message: "Job created successfully",
    createdBy: req.user.id,
  });
});

module.exports = router;
