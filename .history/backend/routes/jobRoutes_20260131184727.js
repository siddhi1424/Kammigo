const express = require("express");
const router = express.Router();

const { protect, checkRole } = require("../middleware/authMiddleware");
const {
  createJob,
  pendingJobs,
  acceptJob,
  customerViewJob,
} = require("../controllers/jobController");

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
router.get("/pending", protect, checkRole("worker"), pendingJobs);

//worker accept job
router.put("/accept/:id", protect, checkRole("worker"), acceptJob);

//let customer view there created job
router.get("/customer", protect, checkRole("customer"), customerViewJob);

module.exports = router;
