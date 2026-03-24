import React from "react";
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
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setDelectedDate(e.target.value)}
      ></input>
    </div>
  );
};

export default ServicePage;
