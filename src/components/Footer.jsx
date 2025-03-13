import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import playstore from '../assets/playstore.png';
import apple from '../assets/apple.png';
import microsoft from '../assets/microsoft.png';
import location from '../assets/location.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                
                {/* Logo & Map */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    
                    {/* Logo & Socials */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-semibold">Celine Onglerie & Esthetique</h2>
                        <p className="text-gray-400 text-sm">BEAUTY SALON & ESTHETICIAN PROFESSIONAL</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-xl"><i className="fab fa-google"></i></a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <iframe
                            title="Salon Location"
                            className="w-full h-40 md:h-48 rounded-lg shadow-lg opacity-35"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.1582062039636!2d6.632273176942868!3d46.52152667109108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2d293dd9d25d%3A0x9e5cb4f9b4f4f4e4!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1619193101519!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <hr className="border-gray-700 my-6" />

                {/* Store Links */}
                <div className="flex justify-center space-x-10 my-6">
                    <img src={apple} alt="App Store" className="w-16 h-16" />
                    <img src={playstore} alt="Google Play" className="w-12 h-12" />
                    <img src={microsoft} alt="Microsoft Store" className="w-12 h-12" />
                </div>

                <hr className="border-gray-700 my-6" />

                {/* Address & Phone Section */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 mt-6">
                    
                    {/* Address Section */}
                    <div className="flex items-center space-x-4 text-center md:text-left">
                        <img src={location} alt="Location Icon" className="w-12 h-12" />
                        <div>
                            <h3 className="font-bold">ADDRESS</h3>
                            <p className="text-gray-400">Cheneau-de-Bourg Street, 1003 Lausanne</p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-4 text-center md:text-left">
                        <i className="fas fa-phone-alt text-3xl text-white"></i>
                        <div>
                            <h3 className="font-bold">PHONE</h3>
                            <p className="text-gray-400">+41 78 949 40 39</p>
                        </div>
                    </div>

                </div>

                <hr className="border-gray-700 my-6" />

                {/* Services List */}
                <div className="text-sm text-gray-400 mt-10 px-10">
                    {[
                        "Complete extension installation  Lorem ipsum dolor sit amet consectetur",
                        "Nail filing 2 weeks",
                        "Babyboomer installation",
                        "Manicure with simple varnish    Lorem ipsum dolor sit amet",
                        "Hair removal and shaping",
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam!",
                        "Babyboomer installation",
                        "Bikini hair removal    Lorem ipsum dolor sit",
                        "Eyebrow waxing",
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam!",
                        "Bikini hair removal  Lorem ipsum dolor sit amet consectetur",
                        "Babyboomer installation",
                        "Scalp moisturizing treatment",
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam!",
                    ].map((service, index) => (
                        <p key={index} className="hover:text-white cursor-pointer">
                            {service} in the center of Lausanne
                        </p>
                    ))}
                </div>

                {/* Bottom Links */}
                <div className="mt-8 flex justify-between text-gray-500 text-xs border-t border-gray-700 pt-4">
                    <p>PRIVACY POLICY</p>
                    <p>COPYRIGHT BY CELINEONGLERIE 2024!</p>
                    <p>FAQ</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
