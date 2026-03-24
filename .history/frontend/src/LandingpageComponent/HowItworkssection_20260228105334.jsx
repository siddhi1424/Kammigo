import React from "react";

const HowItworkssection = () => {
  return (
    <div className=" mt-20 bg-gray-50 py-20 px-10">
      <div className="">
        {/**Heading */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl text-cyan-700 font-bold">
            How kammigo works?
          </h1>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-lg leading-relaxed">
            Kammigo makes it simple for households to find trusted workers and
            for skilled workers to discover nearby opportunities.
          </p>
        </div>

        {/**steps  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {/**step 1 */}
          <div className="bg-white  p-8 rounded-2xl shadow-xl flex flex-col items-center ">
            <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center hover:shadow-xl transition duration-300 text-center font-bold text-xl mb-4">
              1
            </div>
            <h3 className="mb-4 text-xl font-semibold">Create your account</h3>
            <p className="text-gray-600">
              Sign up as a customer or worker in jusr a few simple steps
            </p>
          </div>

          {/**step 2 */}
          <div className="bg-white  p-8 rounded-2xl shadow-xl flex flex-col items-center ">
            <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center hover:shadow-xl transition duration-300 text-center font-bold text-xl mb-4">
              2
            </div>
            <h3 className="mb-4 text-xl font-semibold">Post or find jobs</h3>
            <p className="text-gray-600">
              Customers post their needs, while workers browse available jobs
              nearby.
            </p>
          </div>

          {/**step 3 */}
          <div className="bg-white  p-8 rounded-2xl shadow-xl flex flex-col items-center ">
            <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center hover:shadow-xl transition duration-300 text-center font-bold text-xl mb-4">
              3
            </div>
            <h3 className="mb-4 text-xl font-semibold">
              Connect & Get Work Done
            </h3>
            <p className="text-gray-600">
              Communicate directly and complete the work smoothly and
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItworkssection;
