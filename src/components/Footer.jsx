import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaYoutube,
  FaPinterest,
  FaFacebookF,
  FaBlog,
  FaInfoCircle,
  FaRegFileAlt,
  FaCheckSquare,
  FaRegAddressCard,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 sm:px-8 md:px-16">
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">Social Channels</h3>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-2xl sm:text-3xl">
        {[FaInstagram, FaTwitter, FaSearch, FaYoutube, FaPinterest, FaFacebookF].map((Icon, i) => (
          <div
            key={i}
            className="border-2 border-white p-2 rounded-md hover:text-yellow-300 transition-colors cursor-pointer"
            aria-label="social icon"
          >
            <Icon />
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">airlinedummyticket.com</p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-12 text-sm sm:text-base text-white mb-10 max-w-4xl mx-auto">
        <div className="space-y-3 min-w-[160px]">
          <p className="flex items-center gap-2">
            <FaBlog /> Blog
          </p>
          <p className="flex items-center gap-2">
            <FaInfoCircle /> FAQs
          </p>
          <p className="flex items-center gap-2">
            <FaRegFileAlt /> Samples
          </p>
          <p className="flex items-center gap-2">
            <FaCheckSquare /> Term & Conditions
          </p>
        </div>
        <div className="space-y-3 min-w-[160px]">
          <p className="flex items-center gap-2">
            <FaRegAddressCard /> Contact
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +919776897761
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp /> +919776897761
          </p>
          <p className="flex items-center gap-2 break-all">
            <FaEnvelope /> info@airlinedummyticket.com
          </p>
        </div>
      </div>

      <p className="text-sm text-center text-gray-300">
        Copyright © 2020 airlinedummyticket.com. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
