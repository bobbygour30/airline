import React from 'react';
import { assets } from '../assets/assests';

const HeroSection = () => {
  return (
    <section className=" py-12 max-w-6xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text and Button */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Get Your Verified Dummy Ticket At $5 Or INR₹350
          </h1>
          <p className="text-gray-600 mb-6">
            Quickly Book A Dummy Ticket For Your Visa Application, Immigration, Passport Renewal. At A Reasonable Price Within 30 To 60 Minutes.
          </p>
          <a
            href="/buy-now"
            className="bg-yellow-100 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
          >
            Buy Now
          </a>
        </div>

        {/* Right Side: Space for Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          {/* Placeholder for the image - replace with your image */}
          <img src={assets.download} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;