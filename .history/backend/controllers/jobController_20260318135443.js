const Job = require("../models/Job");
const WorkerProfile = require("../models/workerProfile");

const createJob = async (req, res) => {
  try {
    const { serviceType, price, workerId } = req.body;

    //validation
    if (!serviceType || !price || !workerId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //create new job
    const newJob = new Job({
      serviceType,
      price,
      workerId, //assign worker immediately
      customerId: req.user.id, //from  jwt
      status: "pending",
    });

    //save to DB
    await newJob.save();

    //success message
    res.status(201).json({
      message: "Job created successfully",
      job: newJob,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Job creation failed",
      error: error.message,
    });
  }
};

//--------------workerjob worker will get to know  of pending jobs------------------------
const pendingJobs = async (req, res) => {
  try {
    const workerProfile = await WorkerProfile.findOne({
      userId: req.user.id,
    });

    if (!workerProfile) {
      return res.status(404).json({
        message: "Worker profile not found",
        jobs,
      });
    }

    //fetch only matching worker profile service jobs

    const jobs = await Job.find({
      status: "pending",
      workerId: req.user.id,
    }).populate("customerId", "name phone location");

    res.status(200).json({
      message: "Filtered pending jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};

//---------------worker will accept the job code-----------------
const acceptJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        messge: "Jon not found",
      });
    }

    //if job already accepted

    if (job.status !== "pending") {
      return res.status(400).json({
        message: "Job is not available,accepted already",
      });
    }

    job.workerId = req.user.id; //worker accept the job assign to him
    job.status = "accepted";

    await job.save();

    res.status(200).json({
      message: "Job aceepted successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to accept the job",
      error: error.message,
    });
  }
};

//------------customer view there own job--------------
const customerViewJob = async (req, res) => {
  try {
    const jobs = await Job.find({ customerId: req.user.id })
      .populate("workerId", "name phone")
      .populate("customerId", "name phone");

    res.status(200).json({
      message: "Customer job fetch successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch customer jobs",
      error: error.message,
    });
  }
};

//----------worker get to see ,view there job--------------
const workerViewJob = async (req, res) => {
  try {
    const jobs = await Job.find({
      workerId: req.user.id,
    }).populate("customerId", "name phone location");

    res.status(200).json({
      message: "Worker job fetch successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch worker  jobs",
      error: error.message,
    });
  }
};
//------------------delete job logic-------------------
const deleteJobs = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    //chekc job belongs to this customer
    if (job.customerId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    //allow delete only when  it is pending
    if (job.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Cannot delete accepted or completed job" });
    }

    await job.deleteOne();
    res.status(200).json({ message: "You have cancel the job" });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
      error: error.message,
    });
  }
};
module.exports = {
  createJob,
  pendingJobs,
  acceptJob,
  customerViewJob,
  workerViewJob,
  deleteJobs,
};
