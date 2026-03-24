import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Landingpage = () => {
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
      <div className="flex flex-col items-center gap-4">
        <img
          src={img1}
          alt="plumber"
          className="w-40 opacity-0 animate-fadeIn1"
        />
        <img
          src={img2}
          alt="electrician"
          className="w-40 opacity-0 animate-fadeIn2"
        />
        <img src={img3} alt="cook" className="w-40 opacity-0 animate-fadeIn3" />
      </div>
    </div>
  );
};

export default Landingpage;
