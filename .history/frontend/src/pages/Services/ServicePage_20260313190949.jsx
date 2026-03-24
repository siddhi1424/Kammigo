import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceType } = useParams();

  const [selectedDate, setDelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlot = [
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "24:00",
  ];

  const currentHour = new Date().getHours();

  return (
    <div>
      <h1>{serviceType} Services Near You</h1>
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
        <div>
          {timeSlot.map((slot, index) => {
            const sloHour = parseInt(slot.split(":")[0]);
            const isPast = sloHour < currentHour;

            return (
              <div
                key={index}
                onClick={() => !isPast && setSelectedSlot(slot)}
                className={`p-3 text-center border rounded-lg cursor-pointer ${
                  isPast
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : selectedSlot == slot
                      ? "bg-cyan-600 text-white"
                      : "bg-white hover:bg-gray-100"
                }`}
              >
                {slot}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
