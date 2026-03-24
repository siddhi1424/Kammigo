import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const ServicePage = () => {
  const { serviceType } = useParams();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);

  //to fetch workers
  const [workers, setWorker] = useState([]);

  //handleBook service button

  const handleBookservice = async (worker) => {
    console.log("TOKEN:", localStorage.getItem("token"));

    if (loading) return;

    if (!worker.userId) {
      toast.error("worker information missing");
      return;
    }
    if (!selectedDate || !selectedSlot) {
      toast.error("Please select date and time");
      return;
    }
    try {
      setLoading(true);

      await api.post("/jobs/create", {
        workerId: worker.userId?._id,
        serviceType: serviceType,
        price: worker.pricePerHour,
        date: selectedDate,
        time: selectedSlot,
      });
      console.log(worker);
      toast.success("Service booked successfully");
    } catch (error) {
      toast.error("You have already book this slot");
      console.log("Booking failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await api.get(
          `/worker-profile/service/${serviceType}`,
        );

        console.log(response.data);
        console.log("Service type:", serviceType);
        console.log("Workers:", workers);
        setWorker(response.data.workers);
      } catch (error) {
        console.log("Error fetching in workers");
      }
    };
    fetchWorkers();
  }, [serviceType]);

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
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl mb-10 text-cyan-700 font-bold capitalize">
        {serviceType} Services Near You
      </h1>

      {/**select date */}

      <div className="mb-8">
        <h2 className="mb-2 text-xl text-cyan-800 font-bold">Select date</h2>

        <input
          type="date"
          min={today}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded-lg"
        ></input>
      </div>

      <div className="mb-10">
        {/*timeslots */}
        <h1 className="mb-4 text-xl text-cyan-800 font-bold">
          Select Time slot
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {timeSlot.map((slot, index) => {
            const isPast = today && slot.hour < currentHour;

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

        {/* <p>Workers will appear here after selecting date and time</p> */}
      </div>

      {/**fetch workers */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {workers.map((worker) => (
          <div
            key={worker._id}
            className="border rounded-xl p-4 shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{worker.userId?.name}</h3>

            <p className="text-gray-500">{worker.location}</p>

            <p className="text-cyan-700 font-semibold">
              ₹{worker.pricePerHour}/hr
            </p>

            <button
              disabled={loading}
              onClick={() => handleBookservice(worker)}
              className="mt-3 bg-cyan-600 text-white px-4 py-2 rounded"
            >
              {loading ? "Booking..." : "Book Service"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
