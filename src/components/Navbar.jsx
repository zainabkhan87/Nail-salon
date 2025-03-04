import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-2 px-6 flex justify-between items-center text-black text-sm">
        <div className="flex items-center space-x-4">
          <span>⚫ NUMBER (IDE REGISTER) CHE-250.076.012</span>
          <span>📱 +41789494039</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">MY APPOINTMENT</a>
          <a href="#" className="hover:underline">TRAININGS</a>
          <a href="#" className="hover:underline">SHOP</a>
          <a href="#" className="hover:underline">ONLINE GIFT VOUCHER</a>
          <div className="flex space-x-2">
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl hover:text-pink-700" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl hover:text-blue-800" /></a>
            <a href="#"><FontAwesomeIcon icon={faGoogle} className="text-red-500 text-2xl hover:text-red-700" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-pink-500 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Beauty Salon" className="h-10" />
        </div>
        <ul className="flex space-x-8 text-white font-semibold">
          <li><a href="#" className="hover:underline">HOME</a></li>
          <li><a href="#" className="hover:underline">SERVICE</a></li>
          <li><a href="#" className="hover:underline">ABOUT</a></li>
          <li><a href="#" className="hover:underline">GALLERY</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-pink-500 px-4 py-2 rounded-full font-semibold">
            ONLINE BOOKING
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
