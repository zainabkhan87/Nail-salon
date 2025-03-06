import React from "react";
import pic from "../assets/pic.png"

const Slider = () => {
  return (
    <section className="relative bg-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-pink-500 italic">Celine</span> Esthetique
            <br />
            City Centre
            <span className="text-pink-500 italic"> Lausanne</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Celine Esthetique City Centre Lausanne offers premium beauty and skincare treatments tailored to enhance your natural glow. Experience expert care in a luxurious and relaxing environment....
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-pink-600">
              Make an Appointment
            </button>
            <button className="border border-gray-500 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
              View Services
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src={pic}  // Replace with actual image URL
            alt="Beauty Service"
            //className="w-[300px] md:w-[400px] rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
