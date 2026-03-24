import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import electricianimg from "../assets/img1.jpg";
import plumber from "../assets/img2.jpg";
import cook from "../assets/img3.jpg";

const LandingPage = () => {
  const images = [electricianimg, plumber, cook];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 2.5 sec

    return () => clearInterval(interval);
  }, []);

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
        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80 overflow-hidden rounded-3xl shadow-2xl bg-white flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt="service"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
