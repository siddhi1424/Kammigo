import React from "react";

const Serviceselect = ({ serviceType, setserviceType }) => {
  const services = [
    {
      name: "Plumber",
      img: "/Assets/plumber.png",
    },
    {
      name: "Electrician",
      img: "/Assets/electrician.png",
    },
    {
      name: "Carpenter",
      img: "/Assets/carpenter.png",
    },
    {
      name: "Cleaning",
      img: "/Assets/cleaning.png",
    },
    {
      name: "Painter",
      img: "/Assets/painter.png",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {services.map((service) => (
        <div
          key={service}
          onClick={() => setserviceType(service.name)}
          className={`p-4 border rounded-xl text-center cursor-pointer
          ${
            serviceType === service
              ? "bg-cyan-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {service}
        </div>
      ))}
    </div>
  );
};

export default Serviceselect;
