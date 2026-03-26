import React, { useState } from "react";
import Logout from "../utils/Logout";
import { Link, useNavigate } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white/90  sticky top-0 z-50 border-b backdrop:blur-md border-gray-300 shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
        <h1
          className="text-2xl font-bold text-cyan-600 cursor-pointer hover:scale-105 transition "
          onClick={() => navigate("/")}
        >
          Kammigo
        </h1>

        <div className="hidden flex gap-4 items-center">
          {/*if not logged in */}
          {!token && (
            <>
              <Link
                to="/login"
                className="font-medium text-slate-700 hover:text-cyan-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition shadow-sm"
              >
                Register{" "}
              </Link>
            </>
          )}

          {/*if logged in as a customer */}
          {token && role === "customer" && (
            <>
              {/* <Link to="/profile" className="text-gray-700">
                Profile
              </Link> */}
              <Link
                to="/customer"
                className="font-medium text-slate-700 hover:text-cyan-600 transition"
              >
                Dashboard
              </Link>

              <AnimatedButton
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition shadow-sm"
              >
                Logout
              </AnimatedButton>
            </>
          )}

          {/*if logged in as worker */}
          {token && role === "worker" && (
            <>
              <Link
                to="/worker"
                className="font-medium text-slate-700 hover:text-cyan-600 transition"
              >
                Dashboard
              </Link>

              <AnimatedButton
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition shadow-sm cursor-pointer"
              >
                Logout
              </AnimatedButton>

              <Link to="/profile" className="text-gray-700">
                Profile
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
