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
    <div>
      <h1>Complete your profile</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={serviceType}
          onChange={(e) => setserviceType(e.target.value)}
        >
          <option value="">Select Services</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Painter">Painter</option>
          <option value="cook">Cook</option>
        </select>

        <br />
        <br />
        <input
          type="number"
          placeholder="Price per hour"
          value={pricePerHour}
          onChange={(e) => setPricePerHour(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Save Profile</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CompleteWorkerProfile;
