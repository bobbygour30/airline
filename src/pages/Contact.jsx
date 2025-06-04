import React from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactSection = () => {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      info: "+91 9776897761",
      href: "tel:+919776897761",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Mail Us",
      info: "info@airlinedummyticket.com",
      href: "mailto:info@airlinedummyticket.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "WhatsApp Us",
      info: "+91 9776897761",
      href: "https://wa.me/919776897761",
    },
  ];

  return (
    <><Navbar/>
    <div className="bg-cyan-100 py-12 flex justify-center items-center">
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-10">
          Get In Touch With Us
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-200/50 p-6 rounded-xl shadow-md hover:bg-gray-300/50 transition-colors duration-200"
            >
              <div className="bg-blue-900 p-3 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-blue-900">{item.info}</p>
            </a>
          ))}
        </div>

        {/* Visit Us Section */}
        <div className="bg-gray-200/50 p-6 rounded-xl shadow-md flex flex-col items-center hover:bg-gray-300/50 transition-colors duration-200">
          <div className="bg-blue-900 p-3 rounded-lg mb-4">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Visit Us</h3>
          <p className="text-blue-900 text-center">
            E-16, K-502, K-Block, New Seelampur, North East Delhi, Delhi - 110053
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactSection;