import React from "react";
import nailpolish from "../assets/nailpolish.png";
import laser from "../assets/laser.png"
import eyelash from "../assets/eyelash.png"
import pedicure from "../assets/pedicure.png";


const Main = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen p-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 italic">
          Celine nail salon{" "}
          <span className="text-pink-500 font-bold italic">Aesthetic</span>
        </h1>
        <h2 className="text-xl md:text-4xl text-gray-700 mt-2 font-bold italic">
          Lausanne city center
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          I am at your disposal to offer you manicure and pedicure services and
          aesthetics. My beauty treatments will be individualized and adapted to
          your needs and desires.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-5xl">
        {/* Nails and Pedicure */}
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <img
            src={nailpolish}
            alt="Nails"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h3 className="text-md font-bold">NAILS AND MANICURE</h3>
          <p className="text-gray-600 text-sm mt-2">
            So you bite your nails… tired of having nails that break… or simply
            want to have a nice manicure.
          </p>
        </div>

        {/* Aesthetic */}
        <div className="bg-pink-500 text-white p-6 shadow-md rounded-md text-center">
          <img
            src={laser}
            alt="Aesthetic"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h3 className="text-md font-bold">AESTHETIC</h3>
          <p className="text-sm mt-2">
            We offer a wide range of facial and body treatments for radiant and
            long-lasting results.
          </p>
        </div>

        {/* Eyelash Lift */}
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <img
            src={eyelash}
            alt="Eyelash Lift"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h3 className="text-md font-bold">EYELASH LIFT</h3>
          <p className="text-gray-600 text-sm mt-2">
            Thanks to the eyelash-by-eyelash application technique, your look
            will be intensified and more voluminous.
          </p>
        </div>

        {/* Simple Foot Beauty */}
        <div className="bg-white p-6 shadow-md rounded-md text-center">
          <img
            src={pedicure}
            alt="Foot Beauty"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h3 className="text-md font-bold">SIMPLE FOOT BEAUTY</h3>
          <p className="text-gray-600 text-sm mt-2">
            Foot beauty helps you keep your feet looking their best from your
            toes to your ankles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
