const express = require("express");
const router = express.Router();
const { protect, checkRole } = require("../middleware/authMiddleware");

const { updateProfile } = require("../controllers/userController");
const upload = require("../middleware/upload");

router.put("/update", protect, upload.single("profilepic"), updateProfile);

module.exports = router;
