import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Find Trusted Workers
            <span className="text-cyan-600"> Instantly</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Book quick services or hire permanent workers with Kammigo — your
            smart platform for reliable professionals.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-7 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition shadow-lg hover:shadow-cyan-200"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-7 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-cyan-600 hover:text-cyan-600 transition"
            >
              Login
            </Link>
          </div>

          {/* TRUST STATS */}
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-600">500+</h3>
              <p className="text-sm text-slate-500">Workers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-600">1k+</h3>
              <p className="text-sm text-slate-500">Jobs Done</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-600">24/7</h3>
              <p className="text-sm text-slate-500">Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:flex justify-center">
          {/* glow */}
          <div className="absolute w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>

          {/* card */}
          <div className="relative w-80 bg-white rounded-3xl shadow-2xl p-6 border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4">
              Quick Service Booking
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg text-sm">
                🔧 Plumber — ₹299
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-sm">
                ⚡ Electrician — ₹199
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-sm">
                🧹 Cleaning — ₹399
              </div>
            </div>

            <button className="mt-5 w-full bg-cyan-600 text-white py-2 rounded-lg font-medium">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
