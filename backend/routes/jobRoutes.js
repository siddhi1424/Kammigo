const express = require("express");
const router = express.Router();

const { protect, checkRole } = require("../middleware/authMiddleware");
const {
  createJob,
  pendingJobs,
  acceptJob,
  customerViewJob,
  workerViewJob,
  deleteJobs,
} = require("../controllers/jobController");

//cutomer creates jobs
router.post("/create", protect, checkRole("customer"), createJob);

//worker pending request
router.get("/pending", protect, checkRole("worker"), pendingJobs);

//worker accept job
router.put("/accept/:id", protect, checkRole("worker"), acceptJob);

//let customer view there created job
router.get("/customer", protect, checkRole("customer"), customerViewJob);

//let worker view there jobs
router.get("/worker", protect, checkRole("worker"), workerViewJob);

//let customer delete the job
router.delete("/delete/:id", protect, checkRole("customer"), deleteJobs);

module.exports = router;
