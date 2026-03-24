import React from "react";

const WhyChoose = () => {
  return (
    <div>
      {/**heading */}
      <div>
        <h1>Why to choose Kammigo</h1>
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
        {/* */}

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2>Verified profiles</h2>
          <p>
            Workers create detailed profiles to help cistomers make informed
            decisions
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
