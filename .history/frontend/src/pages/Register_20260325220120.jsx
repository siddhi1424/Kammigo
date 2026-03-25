import React, { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import PageWrapperAni from "../components/PageWrapperAni";
import AnimatedButton from "../components/AnimatedButton";

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
    <PageWrapperAni>
      <div className="min-h-screen flex ">
        {/**left side  */}
        <div className=" hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-600 to-indigo-900 items-center justify-center text-white">
          <div className="p-10">
            <h1 className="text-3xl font-semibold mb-6">Kammigo</h1>
            <p className="leading-relaxed">
              " Connecting skilled workers with real household opportunities.
              Find trusted help or discover nearby jobs easily "
            </p>
          </div>
        </div>

        {/**right side */}
        <div className="flex w-full items-center justify-center px-10 bg-gray-50 ">
          <form
            className="bg-white rounded-xl shadow-xl flex flex-col w-full  max-w-md p-10"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center mb-5 font-bold  text-xl text-cyan-700">
              Create your account for kammigo
            </h2>
            <input
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              name="name"
              value={formData.name}
              placeholder="Full name"
              onChange={handleChange}
            />
            <input
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="password"
              name="password"
              value={formData.password}
              placeholder="create password"
              onChange={handleChange}
            />
            <input
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="phone"
              name="phone"
              value={formData.phone}
              placeholder="contact number"
              onChange={handleChange}
            />
            <input
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              name="location"
              value={formData.location}
              placeholder="location"
              onChange={handleChange}
            />
            <h1 className="text-lg text-cyan-700 font-semibold mb-2">
              Select Your role
            </h1>
            <select
              className="mb-4 border border-gray-500 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-500"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="customer">Looking for worker</option>
              <option value="worker">Looking for a job</option>
            </select>

            <AnimatedButton
              className="bg-cyan-600  text-center hover:bg-cyan-700 transition duration-300 p-2 rounded-lg text-white font-semibold"
              type="submit"
            >
              Register
            </AnimatedButton>
            <p className="text-gray-500 font-semibold text-center mt-2">
              Already have an account ?{" "}
              <Link to="/login" className="text-cyan-700">
                Login
              </Link>
            </p>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>
        </div>
      </div>
    </PageWrapperAni>
  );
};

export default Register;
