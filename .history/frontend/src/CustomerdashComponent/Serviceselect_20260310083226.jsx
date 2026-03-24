import React from "react";

const Serviceselect = ({ serviceType, setserviceType }) => {
  const services = [
    {
      name: "Plumber",
      img: "/Assets/plumber.jpg",
    },
    {
      name: "Electrician",
      img: "/Assets/electrician.jpg",
    },
    {
      name: "Carpenter",
      img: "/Assets/carpenter.jpg",
    },
    {
      name: "Cleaning",
      img: "/Assets/cleaner.jpg",
    },
    {
      name: "Painter",
      img: "/Assets/painter.jpg",
    },
    {
      name: "Driver",
      img: "/Assets/driver.jpg",
    },
    {
      name: "Ac repair",
      img: "/Assets/ac repair.jpg",
    },
  ];

  return (
    <div>
      {services.map((item, index) => {
        return (
          <div
            key={index.name}
            onClick={() => setserviceType(serviceType.name)}
            className={`p-6 border rounded-2xl text-center cursor-pointer shadow-sm transition 
                ${serviceType === serviceType.name ? "bg-cyan-600 text-white" : "bg-white hover:bg-gray-100"}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Serviceselect;
