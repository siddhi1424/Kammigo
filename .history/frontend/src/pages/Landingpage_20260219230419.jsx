import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Landingpage = () => {
  return (
    <div className="flex gap-8">
      {/**left side */}
      <div>
        <h1
          className="text-cyan-600 text-5xl
             font-bold"
        >
          Kammigo
        </h1>
        <span> Find Trusted Workers. Get Jobs Faster.</span>
        <p>
          Kammigo helps households find reliable helpers like plumbers,
          electricians, maids, and cooks — while giving skilled workers a
          platform to discover nearby work opportunities.
        </p>
      </div>
      {/*right side */}
      <div>
        <div className="w-[50px]">
          <img src={img1} alt="plumber" />
          <img src={img2} alt="electrician" />
          <img src={img3} alt="cook" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
