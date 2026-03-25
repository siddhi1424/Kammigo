import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Serviceselect from "../CustomerdashComponent/Serviceselect";
import BookingList from "../CustomerdashComponent/BookingList";
import PageWrapperAni from "../components/PageWrapperAni";

const CustomerDashboard = () => {
  const [jobs, setjobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs/customer");
      setjobs(response.data.jobs || []);
    } catch (error) {
      console.log("Error fetching jobs");
    }
  };

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(fetchJobs, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/jobs/delete/${id}`);
      fetchJobs();
    } catch (error) {
      console.log("Delete failed");
    }
  };

  return (
    <PageWrapperAni>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>

        {/* SELECT SERVICE */}
        <Serviceselect />

        {/* BOOKINGS */}
        <BookingList jobs={jobs} handleDelete={handleDelete} />
      </div>
    </PageWrapperAni>
  );
};

export default CustomerDashboard;
