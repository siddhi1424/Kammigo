import React from "react";

const BookingList = ({ jobs, handleDelete }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Your Bookings</h3>

      {jobs.length === 0 && <p>No bookings yet</p>}

      {jobs.map((job) => (
        <div key={job._id} className="border p-4 rounded-lg mb-3">
          <p>
            <strong>Service:</strong> {job.serviceType}
          </p>
          <p>
            <strong>Price:</strong> ₹{job.price}
          </p>
          <p>
            <strong>Status:</strong> {job.status}
          </p>

          {job.workerId && (
            <p>
              <strong>Worker:</strong> {job.workerId.name}
            </p>
          )}

          {job.status === "pending" && (
            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
            >
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingList;
