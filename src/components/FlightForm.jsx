import React, { useState } from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";

const FlightForm = ({ goBack }) => {
  const [selectedRouteType, setSelectedRouteType] = useState("oneway");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isINR, setIsINR] = useState(true);

  const routePrice = 350;
  const pricePerPassenger = 0;
  const gstRate = 0.18;

  const total = routePrice + pricePerPassenger * passengerCount;
  const gstAmount = total * gstRate;
  const finalAmount = total + gstAmount;

  // Mock conversion rate: 1 INR = 0.012 USD
  const conversionRate = 0.012;
  const convertedAmount = isINR ? finalAmount : finalAmount * conversionRate;
  const currencySymbol = isINR ? "₹" : "$";

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill in all payment fields.");
      return;
    }

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 2000); // Simulate payment delay
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
      <div className="bg-cyan-100 p-8 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Payment
          </h2>

          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-2">
              Card Number
            </label>
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
              <label className="block text-blue-900 font-semibold mb-2">
                Expiry Date
              </label>
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
              <label className="block text-blue-900 font-semibold mb-2">
                CVV
              </label>
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

          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <span className="text-xl font-bold text-blue-900">Total:</span>
            <span className="text-xl font-bold text-green-600">
              {currencySymbol} {convertedAmount.toFixed(2)}
            </span>
          </div>

          {paymentSuccess ? (
            <div className="text-green-700 text-center font-bold">
              ✅ Payment Successful!
            </div>
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
    <div className="bg-cyan-100 p-6 sm:p-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 mx-4 sm:mx-6">
        {/* Left */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">ROUTE</h2>

          <div className="flex justify-between items-center mb-6 max-w-md mx-auto">
            <button
              className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition"
              onClick={() =>
                setSelectedRouteType((prev) =>
                  prev === "oneway"
                    ? "multicity"
                    : prev === "multicity"
                    ? "roundtrip"
                    : "oneway"
                )
              }
              aria-label="Previous route type"
            >
              ◀
            </button>
            <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-200">
              {["oneway", "roundtrip", "multicity"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRouteType(type)}
                  className={`px-4 py-1 rounded-full border font-medium whitespace-nowrap ${
                    selectedRouteType === type
                      ? "bg-blue-900 text-white border-blue-900"
                      : "text-blue-900 border-blue-900 bg-white"
                  } hover:bg-blue-100 transition`}
                >
                  {type === "oneway" && "One Way"}
                  {type === "roundtrip" && "Round Trip"}
                  {type === "multicity" && "Multi City"}
                </button>
              ))}
            </div>
            <button
              className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition"
              onClick={() =>
                setSelectedRouteType((prev) =>
                  prev === "oneway"
                    ? "roundtrip"
                    : prev === "roundtrip"
                    ? "multicity"
                    : "oneway"
                )
              }
              aria-label="Next route type"
            >
              ▶
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="From City / Origin"
              className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="To City / Destination"
              className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
            <input
              type="date"
              className="p-3 border border-blue-300 rounded-md col-span-1 sm:col-span-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="mt-4 max-w-md mx-auto">
            <label className="text-blue-900 font-semibold">Passengers</label>
            <input
              type="number"
              min={1}
              className="p-2 border border-blue-300 rounded-md w-24 focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={passengerCount}
              onChange={(e) => setPassengerCount(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Right */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between max-w-md mx-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setIsINR(!isINR)}
              className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition"
              aria-label="Toggle currency"
            >
              {isINR ? "₹ ⇄ $" : "$ ⇄ ₹"}
            </button>
          </div>

          <div className="mt-10 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>ROUTES:</span>
              <span>
                {currencySymbol} {isINR ? routePrice.toFixed(2) : (routePrice * conversionRate).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>PASSENGERS:</span>
              <span>
                {currencySymbol} {isINR ? (pricePerPassenger * passengerCount).toFixed(2) : (pricePerPassenger * passengerCount * conversionRate).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center">
                GST:
                <span className="ml-1 text-xs bg-white text-blue-900 rounded-full px-2 py-0.5">
                  18%
                </span>
              </span>
              <span>
                {currencySymbol} {isINR ? gstAmount.toFixed(2) : (gstAmount * conversionRate).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-white pt-2">
              <span>TOTAL:</span>
              <span>
                {currencySymbol} {convertedAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={goBack}
              className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition w-full sm:w-auto"
            >
              Back
            </button>
            <button
              onClick={() => setShowPayment(true)}
              className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition flex items-center justify-center w-full sm:w-auto"
            >
              Proceed to Payment <ArrowRight className="ml-1 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightForm;
