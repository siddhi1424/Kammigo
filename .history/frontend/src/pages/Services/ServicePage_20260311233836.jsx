import React from "react";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceType } = useParams();

  const [selectedDate, setDelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlot = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

  const currentHour = new Date().getHours();

  return <div></div>;
};

export default ServicePage;
