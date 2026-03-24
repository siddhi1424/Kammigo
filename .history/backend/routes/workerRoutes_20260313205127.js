const express = require("express");
const router = express.Router();
const { protect, checkRole } = require("../middleware/authMiddleware");
const {
  createWorkerProfile,
  getWorkerProfile,
  getWorkersByService,
} = require("../controllers/workerController");

router.post("/create", protect, checkRole("worker"), createWorkerProfile);
router.get("/me", protect, checkRole("worker"), getWorkerProfile);
router.get("/service/:serviceType", getWorkersByService);

module.exports = router;
