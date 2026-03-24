import React, { useEffect, useState } from "react";
import api from "../api/axios";

const WorkerDashboard = () => {
  const [pendingJob, setpendingJob] = useState([]);
  const [acceptedJob, setacceptedJob] = useState([]);
  const [message, setMessage] = useState("");

  const fetchPendingJobs = async () => {
    try {
      const response = await api.get("/jobs/pending");
      setpendingJob(response.data.jobs || []);
    } catch (error) {
      console.error("failed to fetch pending jobs");
    }
  };

  const fetchAcceptedJob = async () => {
    try {
      const response = await api.get("/jobs/worker");
      setacceptedJob(response.data.jobs || []);
    } catch (error) {
      console.log("Failed to fetch accepted job");
    }
  };

  useEffect(() => {
    fetchPendingJobs();
    fetchAcceptedJob();
  }, []);

  const handleAcceptJob = async (id) => {
    try {
      await api.put(`/jobs/accept/${id}`);
      setMessage("Job accepted successfully");

      //refresh both lists
      fetchPendingJobs();
      fetchAcceptedJob();
    } catch (error) {
      setMessage("Failed to fetch accept job");
    }
  };

  const isExpired = (job) => {
    const jobDateTime = new Date(`${job.date} ${job.time}`);
    const now = new Date();
    return jobDateTime < now;
  };

  return (
    <div className="text-3xl font-bold text-cyan-700 mb-6">>
      <h1 className="text-3xl font-bold text-cyan-700 mb-6">WorkerDashboard</h1>
      {message && <p>{message}</p>}

      <h3>Available Jobs</h3>
      {Array.isArray(pendingJob) && pendingJob.length === 0 && (
        <p> No pending Jobs</p>
      )}

      {pendingJob.map((job) => (
        <div
          key={job._id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <p>
            <strong>Service:</strong>
            {job.serviceType}
          </p>
          <p>
            <strong>Price</strong>
            {job.price}
          </p>
          <p>
            <strong>Phone:</strong> {job.customerId.phone}
          </p>
          <p>
            <strong>Customer:</strong>
            {job.customerId.name}
          </p>
          <p>
            <strong>Location:</strong>
            {job.customerId.location}
          </p>
          <p>
            <strong>Date:</strong> {job.date}
          </p>

          <p>
            <strong>Time:</strong>
            {job.time}
          </p>
          <button
            className={`bg-cyan-700 text-white p-2 rounded-xl mt-2 mb-2 ${isExpired(job) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"}`}
            onClick={() => handleAcceptJob(job._id)}
            disabled={isExpired(job)}
          >
            Accept Job
          </button>
        </div>
      ))}

      <h3>Your aceepted jobs</h3>
      {Array.isArray(acceptedJob) && acceptedJob.length === 0 && (
        <p>No accepted jobs yet</p>
      )}

      {acceptedJob.map((job) => (
        <div
          key={job._id}
          style={{
            border: "1px solid green",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <p>
            <strong>Service</strong>
            {job.serviceType}
          </p>
          <p>
            <strong>Price:</strong> ₹{job.price}
          </p>
          <p>
            <strong>Status:</strong> {job.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkerDashboard;
