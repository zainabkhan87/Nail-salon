import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Reviews = () => {
  // Sample data for testimonials
  const reviews = [
    {
      name: "Sophie Moinet",
      date: "2023-09-23",
      review: "A wonderful, helpful, clean experience! She impressed me with her professionalism, her passion, her expertise...",
      image: <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 text-3xl" />
    },
    {
      name: "Roselyn T. Boykins",
      date: "10/07/23",
      review: "I especially loved [mention a specific dish or feature]. The attention to detail was nice!",
      image: <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 text-3xl" />,
    },
    {
      name: "Eric J. Miller",
      date: "11/08/23",
      review: "My recent experience at [flower shop] was nothing short of exceptional from moments...",
      image: <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 text-3xl" />,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 italic">
        What is <span className="text-black font-bold">People Say</span>
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                {review.image} {/* Render icon correctly */}
              </div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>

              {/* Google Review Icon */}
              <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-2xl hover:text-red-700 ml-auto" />
            </div>

            {/* Star Ratings */}
            <div className="flex text-yellow-500 mt-2">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-3">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
