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
    <footer className="bg-blue-900 text-white py-10 px-4">
      <h3 className="text-xl font-bold text-center mb-6">Social Channels</h3>

      <div className="flex justify-center space-x-6 mb-6 text-xl">
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaInstagram />
        </div>
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaTwitter />
        </div>
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaSearch />
        </div>
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaYoutube />
        </div>
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaPinterest />
        </div>
        <div className="border-2 border-white p-2 rounded-md hover:text-yellow-300">
          <FaFacebookF />
        </div>
      </div>

      <p className="text-gray-400 text-center mb-6">airlinedummyticket.com</p>

      <div className="flex flex-wrap justify-center gap-20 text-sm text-white mb-10">
        <div className="space-y-2">
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
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <FaRegAddressCard /> Contact
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +919776897761
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp /> +919776897761
          </p>
          <p className="flex items-center gap-2">
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
