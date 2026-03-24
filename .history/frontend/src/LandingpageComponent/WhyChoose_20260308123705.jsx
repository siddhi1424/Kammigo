import React from "react";

const WhyChoose = () => {
  return (
    <div>
      {/**heading */}
      <div>
        <h1 className="text-center font-bold text-cyan-600 text-2xl">
          Why to choose Kammigo
        </h1>
      </div>
      {/**features grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
          <p className="text-gray-600">
            Workers create detailed profiles to help customers make informed
            decisions.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-semibold mb-3">Local Opportunities</h3>
          <p className="text-gray-600">
            Find jobs or helpers within your local area for faster service.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
          <p className="text-gray-600">
            Customers and workers can communicate directly to discuss job
            details.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-3">Simple & Easy to Use</h3>
          <p className="text-gray-600">
            Designed with simplicity so anyone can use the platform comfortably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
