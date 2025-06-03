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
      "$5 | ₹350"
    ]
  },
  {
    title: "Hotel Reservation",
    price: "$3",
    details: [
      "Verified Hotel reservation.",
      "A maximum of two hotel bookings is permitted.",
      "Valid up to a couple of days before the intended check-in date.",
      "Quick Delivery between 30 to 60 minutes.",
      "$3 | ₹250"
    ]
  },
  {
    title: "Hotel Reservation & Dummy Ticket",
    price: "$8",
    details: [
      "All DUMMY FLIGHT TICKET Advantages.",
      "All HOTEL RESERVATION Advantages.",
      "Discounted Price",
      "$8 | ₹600"
    ]
  }
];

const PricingCard = ({ title, price, details }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
    <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
    <p className="text-3xl font-extrabold text-center text-blue-900">{price}<span className="text-sm font-normal"> /Person</span></p>
    <ul className="mt-4 space-y-2 text-gray-700">
      {details.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-600 mr-2">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full bg-yellow-200 hover:bg-yellow-300 text-gray-900 font-semibold py-2 rounded-xl">
      BUY NOW
    </button>
  </div>
);

export default function PricingCards() {
  return (
    <div className="bg-cyan-100 min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
} 
