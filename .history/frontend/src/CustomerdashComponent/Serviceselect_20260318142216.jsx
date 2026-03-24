import React from "react";
import plumber from "./Assets/plumber.jpg";
import electrician from "./Assets/electrician.jpg";
import carpenter from "./Assets/carpenter.jpg";
import cleaner from "./Assets/cleaner.jpg";
import painter from "./Assets/painter.jpg";
import driver from "./Assets/driver.jpg";
import acrepair from "./Assets/ac repair.jpg";
import cook from "./Assets/cook.jpg";

import { useNavigate } from "react-router-dom";

const Serviceselect = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Plumber", img: plumber },
    { name: "Electrician", img: electrician },
    { name: "Carpenter", img: carpenter },
    { name: "Cleaning", img: cleaner },
    { name: "Painter", img: painter },
    { name: "Driver", img: driver },
    { name: "AC Repair", img: acrepair },
    { name: "cook", img: cook },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      {services.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(`/service/${item.name.toLowerCase()}`);
          }}
          className={`border rounded-2xl cursor-pointer overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-1
          ${
            serviceType === item.name
              ? "bg-cyan-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {/* Image */}
          <div className="h-[160px] w-full overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-4 text-center">
            <p className="font-semibold text-lg">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Serviceselect;
