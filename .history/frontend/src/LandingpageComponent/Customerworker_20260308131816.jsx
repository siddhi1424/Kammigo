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
        <div>
          <div>Logo</div>
          <h1>For Customers</h1>
          <div>
            <h1>Post household jobs easily</h1>
            <h1>Find trusted local helpers</h1>
            <h1>Choose workers based on skills</h1>
            <h1>Direct communication with workers</h1>

            <button className="bg-gradient-to-tr from-cyan-500 to-cyan-700 hover:shadow-xl">
              Find a Helper
            </button>
          </div>
        </div>

        {/**for worker */}
        <div>
          <div>Logo</div>
          <h1>For Cutomers</h1>
          <div>
            <h1>Post household jobs easily</h1>
            <h1>Find trusted local helpers</h1>
            <h1>Choose workers based on skills</h1>
            <h1>Direct communication with workers</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerworker;
