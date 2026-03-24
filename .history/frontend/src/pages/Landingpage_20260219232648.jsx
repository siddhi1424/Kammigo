import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { useState, useEffect } from "react";

const Landingpage = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-between  min-h-screen px-10 py-28  ">
      {/**left side */}
      <div>
        <h1
          className="text-cyan-700 md:text-7xl text-5xl
             font-bold"
        >
          Kammigo
        </h1>
        <h2 className="py-2 font-semibold text-cyan-700">
          Find Trusted Workers. Get Jobs Faster.
        </h2>
        <p className="text-slate-900">
          Kammigo helps households find reliable helpers like plumbers,
          electricians, maids, and cooks — while giving skilled workers a
          platform to discover nearby work opportunities.
        </p>
      </div>
      {/*right side */}
      <div className="flex items-center justify-center">
        <div className="w-80 h-80 bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="plumber"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
          <img
            src={images[currentIndex]}
            alt="electrician"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
          <img
            src={images[currentIndex]}
            alt="cook"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
