import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceType } = useParams();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlots = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

  const currentHour = new Date().getHours();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {serviceType} Services Near You
      </h1>

      {/* Date Picker */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Select Date</h2>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>

      {/* Time Slots */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Select Time Slot</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {timeSlots.map((slot, index) => {
            const slotHour = parseInt(slot.split(":")[0]);
            const isPast = slotHour < currentHour;

            return (
              <div
                key={index}
                onClick={() => !isPast && setSelectedSlot(slot)}
                className={`p-3 text-center border rounded-lg cursor-pointer
                  
                  ${
                    isPast
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : selectedSlot === slot
                        ? "bg-cyan-600 text-white"
                        : "bg-white hover:bg-gray-100"
                  }
                  
                `}
              >
                {slot}
              </div>
            );
          })}
        </div>
      </div>

      {/* Worker Section Placeholder */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Available {serviceType}s</h2>

        <p className="text-gray-500">
          Workers will appear here after selecting date and time.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
