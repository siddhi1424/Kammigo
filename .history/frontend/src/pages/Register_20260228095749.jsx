import React, { useState } from "react";
import api from "../api/axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    role: "customer",
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      setSuccess("Registration Successful,please login");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registartion failed");
      setSuccess("");
    }
  };
  return (
    <div className="min-h-screen flex ">
      {/**left side  */}
      <div className=" hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-600 to-indigo-900 items-center justify-center text-white">
        <div className="p-10">
          <h1 className="text-3xl font-semibold mb-6">Kammigo</h1>
          <p className="leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nemo consectetur magni vel facere modi optio maiores magnam
            excepturi illo?
          </p>
        </div>
      </div>

      {/**right side */}
      <div className="flex w-full items-center justify-center px-10 bg-gray-50 ">
        <form className="bg-white rounded-xl shadow-xl" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            placeholder="Full name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="create password"
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            placeholder="contact number"
            onChange={handleChange}
          />
          <input
            name="location"
            value={formData.location}
            placeholder="location"
            onChange={handleChange}
          />
          <h1>Select role</h1>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="worker">Worker</option>
          </select>

          <button type="submit">Register</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
