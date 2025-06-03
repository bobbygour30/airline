import React, { useState } from 'react';
import { assets } from '../assets/assests';

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 bg-gray-100">
      <button
        className="w-full text-left px-4 py-3 flex justify-between items-center text-blue-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-gray-700">
          <p>Placeholder content for {question}</p>
        </div>
      )}
    </div>
  );
};

const DummyTicketComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          CHECK DUMMY TICKET SAMPLES HERE
        </h1>
        <button className="bg-yellow-200 text-blue-900 font-semibold px-6 py-2 rounded-lg mb-8">
          Check
        </button>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img className='w-60' src={assets.sample} alt="" />
            
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Dummy Ticket ?</h2>
          <FAQItem question="What Exactly Is A Dummy Flight Ticket?" />
          <FAQItem question="Dummy Ticket Booking For Visa Purpose..." />
          <FAQItem question="How Can I Make A Dummy Flight Ticket Online?" />
          <FAQItem question="What Is A Dummy Ticket Used For?" />
        </div>
      </div>
    </div>
  );
};

export default DummyTicketComponent;