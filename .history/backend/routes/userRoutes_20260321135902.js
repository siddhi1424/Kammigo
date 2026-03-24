const express = require("express");
const router = express.Router();

const { updateProfile } = require("../controllers/userController");
const upload = require("../middleware/upload");

router.put("/update", upload.single("profilepic"), updateProfile);

module.exports = router;
