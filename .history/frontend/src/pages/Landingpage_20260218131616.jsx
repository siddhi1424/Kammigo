import React from "react";
import { Link } from "react-router-dom";
import { electricianimg } from "../assets/img1.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Find Trusted Workers
            <span className="text-cyan-600"> Instantly</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Kammigo connects customers with skilled professionals for quick
            services and permanent hiring — fast, reliable, and simple.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition shadow-md"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-cyan-600 hover:text-cyan-600 transition"
            >
              Login
            </Link>
          </div>

          {/* TRUST TEXT */}
          <p className="mt-6 text-sm text-slate-500">
            ✔ Quick services • ✔ Verified workers • ✔ Easy hiring
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Kammigo</span>
            <img src={electricianimg}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
