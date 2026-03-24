const express = require("express");
const router = express.Router();
const { protect, checkRole } = require("../middleware/authMiddleware");

const {
  updateProfile,
  getMyProfile,
} = require("../controllers/userController");
const upload = require("../middleware/upload");

router.put("/update", protect, upload.single("profilepic"), updateProfile);
router.get("/me", protect, getMyProfile);

module.exports = router;
