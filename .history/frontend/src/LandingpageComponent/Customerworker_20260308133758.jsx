import React from "react";

const Customerworker = () => {
  return (
    <div>
      <div className="mt-20 p-8">
        <h1 className="text-center text-cyan-700 font-bold text-4xl">
          Built for Cutomers & Workers
        </h1>
        <p className="text-center text-gray-500 leading-relaxed">
          Kammigo helps both households and skilled workers easily
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 p-8 ">
        {/**for customer */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-6">For Customers</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Post household jobs easily</li>
            <li>✔ Find trusted local helpers</li>
            <li>✔ Choose workers based on skills</li>
            <li>✔ Direct communication with workers</li>
          </ul>

          <button className="mt-auto bg-gradient-to-tr from-cyan-500 to-cyan-700 hover:shadow-xl mt-6  text-white p-2 rounded-xl">
            Find a Helper
          </button>
        </div>

        {/**for worker */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold mb-6">For Workers</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Discover nearby job opportunities</li>
            <li>✔ Build your professional profile</li>
            <li>✔ Connect with local customers</li>
            <li>✔ Flexible work opportunities</li>
          </ul>

          <button className="mt-auto bg-gradient-to-tr from-cyan-500 to-cyan-700 hover:shadow-xl mt-4 text-white p-2 rounded-xl">
            Find work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customerworker;
