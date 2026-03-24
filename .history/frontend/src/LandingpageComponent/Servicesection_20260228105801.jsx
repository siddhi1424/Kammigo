import React from "react";

const Servicesection = () => {
  return (
    <div>
      {/* SERVICES SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-700">
              Services Available on Kammigo
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Find skilled professionals for everyday household needs.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-lg">Plumber</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg">Electrician</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="font-semibold text-lg">Maid</h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="font-semibold text-lg">Cook</h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🪚</div>
              <h3 className="font-semibold text-lg">Carpenter</h3>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg">Painter</h3>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="font-semibold text-lg">AC Repair</h3>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-semibold text-lg">Driver</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicesection;
