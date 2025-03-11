import React from "react";
import hairspa from "../assets/hairspa.jpg"

const Headspa = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className=" italic text-4xl md:text-5xl font-bold mb-2">
                    New Head <span className=" italic text-pink-500">Spa</span>
                </h2>
                <h3 className="text-2xl md:text-5xl font-bold italic mb-4">
                Treatment in Lausanne</h3>
                <h4 className="text-lg font-bold mb-3">HAIR RELAXATION AND REVITALIZATION</h4>
                <p className="text-gray-600 mb-4">
                    Available now: Make an appointment for our new head spa treatment,
                    inspired by Japanese spa techniques, at Céline Onglerie Esthetique in
                    Lausanne. Enjoy a unique sensory experience that combines deep
                    relaxation and anti-stress hair. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, esse tempore vero aspernatur earum autem cumque quasi ipsam harum exercitationem?
                </p>
                <p className="text-gray-600 mb-6">
                    This exclusive treatment is designed to revitalize your scalp and
                    enhance the health of your hair. Enjoy a scalp massage, moisturizing
                    and conditioning treatments, and a personalized treatment to reduce
                    accumulated stress and reveal the natural beauty of your hair.
                </p>
                <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg shadow-pink-500 hover:bg-pink-600 transition">
                    MAKE A APPOINTMENT
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">

                <img
                    src={hairspa}
                    alt="Head Spa Treatment"
                    className="w-90 h-100 object-cover  "
                />

            </div>


        </div>

    );
};

export default Headspa;
