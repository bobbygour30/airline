import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeadset,
  faCheckCircle,
  faHandHoldingUsd,
  faTruck,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const ReasonsSection = () => {
  const reasons = [
    {
      icon: faStar,
      title: "Trusted Agency",
      frontText:
        "Based on more than 100 Trustpilot reviews, we have a 4.8 rating and Google rating.",
      backText:
        "Our clients trust us for reliable and verified dummy tickets with excellent service.",
    },
    {
      icon: faHeadset,
      title: "At Your Service",
      frontText: "Around-the-clock 24/7, we’re available to help you.",
      backText:
        "Our support team is always ready to assist with your booking needs.",
    },
    {
      icon: faCheckCircle,
      title: "Valid PNR",
      frontText:
        "The airline website allows for the verification of this PNR number.",
      backText:
        "We provide genuine PNR numbers that can be verified directly on airline sites.",
    },
    {
      icon: faHandHoldingUsd,
      title: "Most Affordable",
      frontText: "Cheapest fare starting at just $5 or INR 350.",
      backText:
        "Get your dummy ticket at the best price without compromising on quality.",
    },
    {
      icon: faTruck,
      title: "Quick Delivery",
      frontText: "Deliver dummy tickets in a 30- to 60-minute window.",
      backText: "Fast and efficient delivery ensures you meet your deadlines.",
    },
    {
      icon: faTicketAlt,
      title: "Genuine Ticket",
      frontText: "Dummy ticket format, exactly like a real ticket.",
      backText:
        "Our tickets are designed to look authentic for visa and immigration purposes.",
    },
  ];

  return (
    <section className=" py-12 w-full max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Reasons To Choose Us
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
            {reasons.map((reason, index) => (
              <div key={index} className="group perspective w-48 h-48">
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side */}
                  <div className="flip-card-front bg-[#F5F7FA] border border-gray-200">
                    <div className="bg-blue-900 rounded-md p-2 mb-4">
                      <FontAwesomeIcon
                        icon={reason.icon}
                        className="text-xl text-white"
                      />
                    </div>
                    <h3 className="text-base font-bold text-blue-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-tight">
                      {reason.frontText}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-blue-900 border border-gray-200">
                    <div className="bg-white rounded-md p-2 mb-4">
                      <FontAwesomeIcon
                        icon={reason.icon}
                        className="text-xl text-blue-900"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white text-xs leading-tight">
                      {reason.backText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
