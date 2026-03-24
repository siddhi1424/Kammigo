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
  return (
    <div>
      <h1>WorkerDashboard</h1>
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
            <strong>Customer:</strong>
            {job.customerId.name}
          </p>
          <p>
            <strong>Location:</strong>
            {job.customerId.location}
          </p>
          <button
            className="bg-cyan-700 text-white p-8"
            onClick={() => handleAcceptJob(job._id)}
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
