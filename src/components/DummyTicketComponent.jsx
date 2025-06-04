import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assests'; // make sure this path is correct

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderAnswer = () => {
    if (answer.includes('\n•')) {
      const [intro, ...items] = answer.split('\n•');
      return (
        <>
          <p>{intro.trim()}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm sm:text-base">
            {items.map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </>
      );
    }
    return <p>{answer}</p>;
  };

  return (
    <div className="border rounded-xl mb-4 shadow-sm">
      <button
        className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-blue-900 hover:bg-gray-300/50 transition-colors duration-200 text-sm sm:text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{question}</span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4 sm:px-6 pt-0 pb-4 text-blue-900 text-sm sm:text-base font-medium"
          >
            {renderAnswer()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DummyTicketComponent = () => {
  const faqData = [
    {
      question: "What Exactly Is A Dummy Flight Ticket?",
      answer:
        "A dummy flight ticket, also known as a flight reservation or itinerary, is a hold ticket that has not yet been issued. It includes all relevant flight details such as the traveler's full name, origin, destination, and travel time. Unlike a confirmed ticket, payment for a dummy ticket is still pending, but it comes with a valid PNR (booking reference number) verifiable on the airline's website. A ticket with an invalid PNR is considered a fake dummy ticket."
    },
    {
      question: "Dummy Ticket Booking For Visa Purpose...",
      answer:
        "Dummy tickets are primarily used for visa applications. Most embassies and high commissions, including those for Schengen Visa, UAE (Dubai) Visa, Canada Visa, Japan Visa, UK Visa, US Visa, and others, require a flight reservation as part of the visa process. They are typically needed for visit visas and can also serve as proof of return or onward travel at immigration."
    },
    {
      question: "How Can I Make A Dummy Flight Ticket Online?",
      answer:
        "Purchasing a dummy flight ticket online is simple: 1. Click the 'Buy Ticket' button. 2. Fill out the form completely. 3. Click 'Proceed' and pay via UPI, PayPal, or bank transfer. 4. Receive a genuine dummy ticket within 30 to 60 minutes."
    },
    {
      question: "What Is A Dummy Ticket Used For?",
      answer:
        "The main use of a dummy ticket is to apply for visas. Most embassies ask for a flight reservation during the visa application process. Dummy tickets are also used as proof of return to show at immigration while traveling. Other uses of a dummy ticket include: \n• Visa applications\n• Proof of return or onward travel\n• Expedite US and other countries passport renewal\n• Show company HR/Manager for leave and other purposes\n• Exit visa procedures in many GCC countries\n• Rent a car"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center px-2">
          CHECK DUMMY TICKET SAMPLES HERE
        </h1>
        <div className="flex justify-center">
          <button className="bg-yellow-200 text-blue-900 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl mb-8 hover:bg-yellow-300 transition-colors duration-200 text-sm sm:text-base">
            Check
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              className="w-44 sm:w-60 rounded-lg shadow-md"
              src={assets.sample}
              alt="Dummy Ticket Sample"
            />
          </div>
        </div>
        <div className="text-center px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            Dummy Ticket ?
          </h2>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DummyTicketComponent;
