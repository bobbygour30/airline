import React, { useState } from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";

const HotelForm = ({ goBack }) => {
  const [hotels, setHotels] = useState([{ city: "", checkIn: "", checkOut: "", guests: 1 }]);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isINR, setIsINR] = useState(true);

  const roomRate = 500;
  const gstRate = 0.18;
  const totalRooms = hotels.length;
  const subtotal = roomRate * totalRooms;
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  const conversionRate = 0.012;
  const convertedAmount = isINR ? total : total * conversionRate;
  const currencySymbol = isINR ? "₹" : "$";

  const handleAddHotel = () => {
    setHotels([...hotels, { city: "", checkIn: "", checkOut: "", guests: 1 }]);
  };

  const handleHotelChange = (index, field, value) => {
    const updatedHotels = hotels.map((hotel, i) =>
      i === index ? { ...hotel, [field]: value } : hotel
    );
    setHotels(updatedHotels);
  };

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill in all payment fields.");
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const resetPaymentForm = () => {
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setProcessing(false);
    setPaymentSuccess(false);
    setShowPayment(false);
  };

  if (showPayment) {
    return (
      <div className="bg-cyan-100 p-4 md:p-8 flex justify-center items-center">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Payment</h2>
          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-2">Card Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19}
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-blue-900 font-semibold mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-blue-900 font-semibold mb-2">CVV</label>
              <input
                type="password"
                maxLength={3}
                placeholder="123"
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-blue-900">Total:</span>
            <span className="text-xl font-bold text-green-600">
              {currencySymbol} {convertedAmount.toFixed(2)}
            </span>
          </div>

          {paymentSuccess ? (
            <div className="text-green-700 text-center font-bold">✅ Payment Successful!</div>
          ) : (
            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              {processing ? "Processing..." : "Make Payment"}
            </button>
          )}

          <button
            onClick={resetPaymentForm}
            className="mt-4 text-blue-900 border border-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cyan-100 p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">HOTEL RESERVATION</h2>

          {hotels.map((hotel, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-900">Hotel {index + 1}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  value={hotel.city}
                  onChange={(e) => handleHotelChange(index, "city", e.target.value)}
                />
                <input
                  type="number"
                  min={1}
                  placeholder="Guests"
                  className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  value={hotel.guests}
                  onChange={(e) => handleHotelChange(index, "guests", Number(e.target.value))}
                />
                <input
                  type="date"
                  className="p-3 border border-blue-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  value={hotel.checkIn}
                  onChange={(e) => handleHotelChange(index, "checkIn", e.target.value)}
                />
                <input
                  type="date"
                  className="p-3 border border-blue-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  value={hotel.checkOut}
                  onChange={(e) => handleHotelChange(index, "checkOut", e.target.value)}
                />
              </div>
            </div>
          ))}

          <button
            onClick={handleAddHotel}
            className="w-full bg-yellow-200 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
          >
            Add More Hotel
          </button>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              onClick={() => setIsINR(!isINR)}
              className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition"
            >
              {isINR ? "₹ ⇄ $" : "$ ⇄ ₹"}
            </button>
          </div>

          <div className="mt-10 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>HOTELS: {totalRooms}</span>
              <span>
                {currencySymbol} {isINR ? subtotal.toFixed(2) : (subtotal * conversionRate).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center">
                GST:
                <span className="ml-1 text-xs bg-white text-blue-900 rounded-full px-2 py-0.5">18%</span>
              </span>
              <span>
                {currencySymbol} {isINR ? gst.toFixed(2) : (gst * conversionRate).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-white pt-2">
              <span>TOTAL:</span>
              <span>{currencySymbol} {convertedAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
            <button
              onClick={goBack}
              className="w-full sm:w-auto text-white border border-white rounded px-3 py-2 hover:bg-white hover:text-blue-900 transition"
            >
              Back
            </button>
            <button
              onClick={() => setShowPayment(true)}
              className="w-full sm:w-auto text-white border border-white rounded px-3 py-2 hover:bg-white hover:text-blue-900 transition flex items-center justify-center"
            >
              Proceed to Payment <ArrowRight className="ml-1 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelForm;
