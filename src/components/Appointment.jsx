import React from "react";

const Appointment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Main Card */}
      <div className="bg-pink-500 shadow-lg shadow-pink-600 border-3 text-white text-center p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold italic">Appointment Online</h2>
        <p className="mt-4 text-sm">
          Here you can book an appointment online and check our availability for all our services. 
          Please feel free to contact me if you encounter any difficulties or issues scheduling online. 
          Nail salon in Lausanne and Beauty.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-white text-pink-500 px-6 py-2 rounded-md font-semibold shadow">
            Make an Appointment
          </button>
          <button className="bg-white text-pink-500 px-6 py-2 rounded-md font-semibold shadow">
            Call to Action
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center items-center space-x-6 mt-10">
        {[
          "Peggy Sage",
          "Perfect Nails",
          "Akyado",
          "Brand X",
          "SumUp",
          "Nail Care",
        ].map((brand, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200"
          >
            <span className="text-xs text-gray-600">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
