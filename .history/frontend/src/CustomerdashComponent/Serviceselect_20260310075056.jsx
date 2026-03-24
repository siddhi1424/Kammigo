import React from "react";

const Serviceselect = ({ serviceType, setserviceType }) => {
  const services = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Cleaning",
    "Painter",
    "Ac repair",
    "Cook",
    "Driver",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {services.map((service) => (
        <div
          key={service}
          onClick={() => setserviceType(service)}
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
