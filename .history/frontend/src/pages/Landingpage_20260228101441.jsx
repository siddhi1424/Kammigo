import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Landingpage = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* LEFT SIDE (Information First on Mobile) */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-cyan-700 text-5xl md:text-7xl lg:text-8xl font-bold">
              Kammigo
            </h1>

            <h2 className="py-3 font-semibold text-cyan-700 text-lg md:text-2xl">
              Find Trusted Workers. Get Jobs Faster.
            </h2>

            <p className="text-slate-700 leading-relaxed lg:text-xl">
              Kammigo helps households find reliable helpers like plumbers,
              electricians, maids, and cooks — while giving skilled workers a
              platform to discover nearby work opportunities.
            </p>
          </div>

          {/* RIGHT SIDE (Image Below on Mobile) */}
          <div className="flex justify-center w-full lg:w-auto">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={images[currentIndex]}
                alt="worker"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
