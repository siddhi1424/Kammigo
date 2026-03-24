import React from "react";
import { useState } from "react";
import api from "../api/axios";

const CompleteWorkerProfile = () => {
  const [serviceType, setserviceType] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [location, setLocation] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/worker-profile/create", {
        serviceType,
        pricePerHour,
        location,
      });

      window.location.href = "/worker";
    } catch (error) {
      setmessage(error.resposnse?.data?.message || "Profile creation failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        {/* ICON / IMAGE */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="worker"
          className="w-20 mx-auto mb-4"
        />

        <h1 className="text-2xl font-bold text-center text-cyan-700 mb-6">
          Complete your profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SERVICE */}
          <select
            value={serviceType}
            onChange={(e) => setserviceType(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select Services</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Painter">Painter</option>
            <option value="cook">Cook</option>
          </select>

          {/* PRICE */}
          <input
            type="number"
            placeholder="Price per hour"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-500"
          />

          {/* LOCATION */}
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Save Profile
          </button>
        </form>

        {/* MESSAGE */}
        {message && <p className="text-red-500 text-center mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default CompleteWorkerProfile;
