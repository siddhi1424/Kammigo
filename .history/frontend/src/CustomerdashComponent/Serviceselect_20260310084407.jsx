import React from "react";
import plumber from "./plumber.jpg";
import electrician from "./electrician.jpg";
import carpenter from "./carpenter.jpg";
import cleaner from "./cleaner.jpg";
import painter from "./painter.jpg";
import driver from "./driver.jpg";
import acrepair from "./acrepair.jpg";

const Serviceselect = ({ serviceType, setserviceType }) => {
  const services = [
    { name: "Plumber", img: plumber },
    { name: "Electrician", img: electrician },
    { name: "Carpenter", img: carpenter },
    { name: "Cleaning", img: cleaner },
    { name: "Painter", img: painter },
    { name: "Driver", img: driver },
    { name: "AC Repair", img: acrepair },
  ];

  return (
    <div>
      {services.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setserviceType(item.name)}
            className={`p-6 border rounded-2xl text-center cursor-pointer shadow-sm transition 
                ${serviceType === item.name ? "bg-cyan-600 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {/**image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 mx-auto mb-3"
            ></img>

            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Serviceselect;
