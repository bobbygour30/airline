import React, { useState } from "react";
import { ArrowRight, ChevronLeft, Trash2 } from "lucide-react";

const FlightForm = ({ goBack }) => {
  const [selectedRouteType, setSelectedRouteType] = useState("oneway");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengerDetails, setPassengerDetails] = useState([
    {
      title: "Mr",
      firstName: "",
      lastName: "",
      dob: "",
      nationality: "",
      countryCode: "+91",
      mobile: "",
      email: ""
    }
  ]);
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
  const total = routePrice + pricePerPassenger * passengerDetails.length;
  const gstAmount = total * gstRate;
  const finalAmount = total + gstAmount;
  const conversionRate = 0.012;
  const convertedAmount = isINR ? finalAmount : finalAmount * conversionRate;
  const currencySymbol = isINR ? "₹" : "$";

  const handleAddPassenger = () => {
    setPassengerDetails([
      ...passengerDetails,
      {
        title: "Mr",
        firstName: "",
        lastName: "",
        dob: "",
        nationality: "",
        countryCode: "",
        mobile: "",
        email: ""
      }
    ]);
  };

  const handleRemovePassenger = (index) => {
    const updated = [...passengerDetails];
    updated.splice(index, 1);
    setPassengerDetails(updated);
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengerDetails];
    updated[index][field] = value;
    setPassengerDetails(updated);
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
      <div className=" p-8 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-6">
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

          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
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
    <div className="p-6 sm:p-8 flex flex-col gap-10 justify-center items-center  ">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Flight Reservation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="From City"
            className="p-3 border border-blue-300 rounded-md"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="To City"
            className="p-3 border border-blue-300 rounded-md"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
          <input
            type="date"
            className="p-3 border border-blue-300 rounded-md"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {passengerDetails.map((p, i) => (
          <div key={i} className="mt-6  p-4 rounded-md  shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-900">Passenger {i + 1}</h3>
              {passengerDetails.length > 1 && (
                <button
                  onClick={() => handleRemovePassenger(i)}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                className="p-2 border border-blue-300 rounded-md"
                value={p.title}
                onChange={(e) => handlePassengerChange(i, "title", e.target.value)}
              >
                {["Mr", "Ms", "Mrs"].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border border-blue-300 rounded-md"
                value={p.firstName}
                onChange={(e) => handlePassengerChange(i, "firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 border border-blue-300 rounded-md"
                value={p.lastName}
                onChange={(e) => handlePassengerChange(i, "lastName", e.target.value)}
              />
               <input
                type="date"
                placeholder="Date of birth"
                className="p-2 border border-blue-300 rounded-md"
                value={p.dob}
                onChange={(e) => handlePassengerChange(i, "dob", e.target.value)}
              />
              <input
                type="text"
                placeholder="Nationality"
                className="p-2 border border-blue-300 rounded-md"
                value={p.nationality}
                onChange={(e) => handlePassengerChange(i, "nationality", e.target.value)}
              />
              <input
                type="text"
                placeholder="Country Code"
                className="p-2 border border-blue-300 rounded-md"
                value={p.countryCode}
                onChange={(e) => handlePassengerChange(i, "countryCode", e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="p-2 border border-blue-300 rounded-md"
                value={p.mobile}
                onChange={(e) => handlePassengerChange(i, "mobile", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-blue-300 rounded-md"
                value={p.email}
                onChange={(e) => handlePassengerChange(i, "email", e.target.value)}
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddPassenger}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
        >
          + Add More Passenger
        </button>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowPayment(true)}
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-500"
          >
            Proceed to Payment <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightForm;