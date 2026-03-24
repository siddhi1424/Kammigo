import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceType } = useParams();

  const [selectedDate, setDelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlot = [
    { label: "8:00 AM", hour: 8 },
    { label: "10:00 AM", hour: 10 },
    { label: "12:00 PM", hour: 12 },
    { label: "2:00 PM", hour: 14 },
    { label: "4:00 PM", hour: 16 },
    { label: "6:00 PM", hour: 18 },
    { label: "8:00 PM", hour: 20 },
    { label: "10:00 PM", hour: 22 },
    { label: "12:00 PM", hour: 24 },
  ];

  const currentHour = new Date().getHours();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl mb-10 text-cyan-700 font-bold">
        {serviceType} Services Near You
      </h1>
      <h2>Select date</h2>

      <div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setDelectedDate(e.target.value)}
        ></input>
      </div>

      <div>
        {/*timeslots */}
        <h1>Select Time slot</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {timeSlot.map((slot, index) => {
            const isPast = slot.hour < currentHour;

            return (
              <div
                key={index}
                onClick={() => !isPast && setSelectedSlot(slot.label)}
                className={`p-3 text-center border rounded-lg cursor-pointer ${
                  isPast
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : selectedSlot == slot.label
                      ? "bg-cyan-600 text-white"
                      : "bg-white hover:bg-gray-100"
                }`}
              >
                {slot.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* worker section placeholder */}

      <div>
        <h2>Available {serviceType}</h2>

        <p>Workers will appear here after selecting date and time</p>
      </div>
    </div>
  );
};

export default ServicePage;
