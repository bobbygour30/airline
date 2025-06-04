import React from "react";

const pricingData = [
  {
    title: "Dummy Ticket",
    price: "$5",
    details: [
      "Verified flight reservation.",
      "A maximum of two flights is permitted",
      "Validity Depends on Journey route and Journey date. It may be 48 hours to 21 days. Generally, Valid for 1 - 2 weeks.",
      "Quick Delivery between 30 to 60 minutes.",
      "$5 | ₹350",
    ],
  },
  {
    title: "Hotel Reservation",
    price: "$3",
    details: [
      "Verified Hotel reservation.",
      "A maximum of two hotel bookings is permitted.",
      "Valid up to a couple of days before the intended check-in date.",
      "Quick Delivery between 30 to 60 minutes.",
      "$3 | ₹250",
    ],
  },
  {
    title: "Hotel Reservation & Dummy Ticket",
    price: "$8",
    details: [
      "All DUMMY FLIGHT TICKET Advantages.",
      "All HOTEL RESERVATION Advantages.",
      "Discounted Price",
      "$8 | ₹600",
    ],
  },
];

const PricingCard = ({ title, price, details }) => (
  <div className="bg-gradient-to-r from-orange-100 to-sky-100 rounded-2xl w-full max-w-sm mx-auto sm:mx-0">
    <div className="bg-sky-200 rounded-t-2xl p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-red-500 text-center mb-2">{title}</h2>
      <p className="text-3xl sm:text-4xl font-extrabold text-center text-red-500">
        {price}
        <span className="text-sm sm:text-base font-normal"> /Person</span>
      </p>
    </div>
    <ul className="mt-4 space-y-4 sm:space-y-6 text-gray-700 p-4">
      {details.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-black font-bold mr-2">✓</span>
          <span className="text-sm sm:text-base text-black">{item}</span>
        </li>
      ))}
    </ul>
    <div className="flex items-center justify-center pb-6">
      <button className="mt-6 w-2/3 sm:w-1/2 bg-yellow-200 hover:bg-yellow-300 text-gray-900 font-semibold py-2 rounded-xl transition-colors duration-200">
        BUY NOW
      </button>
    </div>
  </div>
);

export default function PricingCards() {
  return (
    <div className=" flex flex-col items-center justify-center p-6 sm:p-12">
      <h1 className="font-bold text-blue-900 text-3xl sm:text-4xl mb-16 sm:mb-20 text-center">
        Pricing
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-6xl px-4 sm:px-0">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
