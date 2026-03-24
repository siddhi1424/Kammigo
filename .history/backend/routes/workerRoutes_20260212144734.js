const express = require("express");
const router = express.Router();
const { protect, checkRole } = require("../middleware/authMiddleware");
const { createWorkerProfile } = require("../controllers/workerController");

router.post("/create", protect, checkRole("worker"), createWorkerProfile);

module.exports = router;
