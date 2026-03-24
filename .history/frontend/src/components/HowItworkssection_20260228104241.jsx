import React from "react";

const HowItworkssection = () => {
  return (
    <div className=" mt-32 bg-gray-50 py-20">
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
        <div>
          {/**step 1 */}
          <div>
            <div>1</div>
            <h3>Create your account</h3>
            <p>Sign up as a customer or worker in jusr a few simple steps</p>
          </div>

          {/**step 2 */}
          <div>
            <div>2</div>
            <h3>Create your account</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItworkssection;
