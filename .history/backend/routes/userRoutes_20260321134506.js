const express = require("express");
const router = express.router();

const { upload } = require("../middleware/upload");

router.put("/update", upload.Single("profilepic"), updateProfile);

module.exports = router;
