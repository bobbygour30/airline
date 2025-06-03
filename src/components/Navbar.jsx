import React from 'react';
import { assets } from '../assets/assests';

const Navbar = () => {
  return (
    <nav className="bg-cyan-100 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Text */}
        <div className="flex flex-col items-center space-x-2">
          <img className="w-40 h-20 object-contain" src={assets.Logo} alt="Logo" />
          <div className="text-[#1F368D] font-bold text-lg">
            <a href="/">Airlinedummyticket.com</a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="https://wa.me/919776897761" className="flex items-center text-blue-800 hover:text-blue-600">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.24 1.62 6.09L0 24l6-1.62A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.938 0-3.82-.563-5.438-1.62l-.375-.188-3.563.938.938-3.563-.188-.375A10.5 10.5 0 011.5 12c0-5.79 4.71-10.5 10.5-10.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5zm5.835-6.915c-.315-.158-1.875-.938-2.167-1.042-.292-.104-.5-.158-.708.158-.208.315-.833 1.042-.938 1.25-.104.208-.208.208-.375.104-.167-.104-.708-.313-1.354-.625-.833-.417-1.396-.938-1.563-1.042-.167-.104-.167-.208 0-.313.083-.052.188-.104.292-.167.104-.063.208-.125.25-.208.042-.083.042-.167-.021-.25-.063-.083-.625-.708-.833

-.938-.208-.229-.292-.313-.417-.313-.125 0-.271.042-.417.042-.146.042-.313.104-.479.333-.167.229-.625.625-.625 1.521 0 .896.646 1.771.729 1.896.083.125 1.271 1.938 3.083 2.708.417.188.875.333 1.396.521.521.188 1 .292 1.396.375.417.083.833.063 1.146-.042.313-.104.625-.271.875-.521.25-.25.417-.521.479-.708.063-.188.021-.375-.146-.479z"/>
            </svg>
            +91 9776897761
          </a>
          <a href="/buy-now" className="text-blue-800 hover:text-blue-600">Buy Now</a>
          <a href="/samples" className="text-blue-800 hover:text-blue-600">Samples</a>
          <a href="/faqs" className="text-blue-800 hover:text-blue-600">FAQs</a>
          <a href="/contact" className="text-blue-800 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;