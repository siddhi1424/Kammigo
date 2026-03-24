import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Serviceselect from "../CustomerdashComponent/Serviceselect";
import BookingList from "../CustomerdashComponent/BookingList";

const CustomerDashboard = () => {
  const [serviceType, setserviceType] = useState("");
  const [price, setPrice] = useState("");
  const [jobs, setjobs] = useState([]);
  const [message, setMessage] = useState("");

  //for fetching job
  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs/customer");
      setjobs(response.data.jobs);
    } catch (error) {
      console.log("Error in  fetching in jobs");
    }
  };

  useEffect(() => {
    fetchJobs(); //initial fetch

    const interval = setInterval(() => {
      fetchJobs();
    }, 5000); //every 5 seconds ayega

    return () => clearInterval(interval); //if user leave thee page -interval loop stops
  }, []);

  //create job
  const handleCreateJobs = async (e) => {
    e.preventDefault();

    // console.log("Sending:", serviceType, price);

    if (!serviceType || !price) {
      setMessage("Please select the service and enter price");
      return;
    }

    try {
      await api.post("/jobs/create", {
        serviceType,
        price: Number(price),
      });

      setMessage("Service booked sucessfully ");
      setserviceType("");
      setPrice("");

      fetchJobs();
    } catch (error) {
      console.log(error.response?.data.message || "Booking failed");
    }
  };

  //delete job option
  const handleDelete = async (id) => {
    try {
      await api.delete(`/jobs/delete/${id}`);
      fetchJobs();
    } catch (error) {
      console.log("Delete failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>

      {/* SERVICE SELECTION */}
      <Serviceselect
        serviceType={serviceType}
        setserviceType={setserviceType}
      />

      {/* PRICE INPUT */}
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded mb-4"
      />

      <button
        onClick={handleCreateJobs}
        className="bg-cyan-600 text-white px-4 py-2 rounded"
      >
        Book Service
      </button>

      {message && <p className="mt-2">{message}</p>}

      {/* BOOKINGS LIST */}
      <BookingList jobs={jobs} handleDelete={handleDelete} />
    </div>
  );
};

export default CustomerDashboard;
