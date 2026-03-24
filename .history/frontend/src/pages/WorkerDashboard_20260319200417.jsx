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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-cyan-700 mb-6">WorkerDashboard</h1>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Pending Requests
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(pendingJob) && pendingJob.length === 0 && (
          <p> No pending Jobs</p>
        )}

        {pendingJob.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-xl shadow-lg p-5 border hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold text-gray-800">
              {job.serviceType}
            </h3>
            <p className="text-gray-600 mt-2">👤 {job.customerId.name}</p>

            <p className="text-gray-600">📞 {job.customerId.phone}</p>

            <p className="text-gray-600">📍 {job.customerId.location}</p>

            <p className="mt-2 text-sm text-gray-500">📅 {job.date}</p>

            <p className="text-sm text-gray-500">⏰ {job.time}</p>

            <p className="mt-2 font-semibold text-cyan-700">₹{job.price}</p>

            {/* STATUS BADGE */}
            <span className="inline-block mt-2 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
              Pending
            </span>

            <button
              className={`bg-cyan-700 text-white p-2 rounded-xl mt-2 mb-2 ${isExpired(job) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"}`}
              onClick={() => handleAcceptJob(job._id)}
              disabled={isExpired(job)}
            >
              Accept Job
            </button>
          </div>
        ))}
      </div>

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
