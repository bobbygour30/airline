import React, { useState } from "react";
import { ArrowRight, ChevronLeft, Trash2 } from "lucide-react";

const HotelForm = ({ goBack }) => {
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestDetails, setGuestDetails] = useState([
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

  const roomPrice = 1200;
  const gstRate = 0.12;
  const total = roomPrice * guestDetails.length;
  const gstAmount = total * gstRate;
  const finalAmount = total + gstAmount;
  const conversionRate = 0.012;
  const convertedAmount = isINR ? finalAmount : finalAmount * conversionRate;
  const currencySymbol = isINR ? "₹" : "$";

  const handleAddGuest = () => {
    setGuestDetails([
      ...guestDetails,
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
  };

  const handleRemoveGuest = (index) => {
    const updated = [...guestDetails];
    updated.splice(index, 1);
    setGuestDetails(updated);
  };

  const handleGuestChange = (index, field, value) => {
    const updated = [...guestDetails];
    updated[index][field] = value;
    setGuestDetails(updated);
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
      <div className="p-8 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Hotel Payment</h2>
          <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-2">Card Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19}
              className="w-full p-3 border border-blue-300 rounded-md"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-blue-900 font-semibold mb-2">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                className="w-full p-3 border border-blue-300 rounded-md"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-blue-900 font-semibold mb-2">CVV</label>
              <input
                type="password"
                placeholder="123"
                maxLength={3}
                className="w-full p-3 border border-blue-300 rounded-md"
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
            <div className="text-green-700 text-center font-bold">✅ Payment Successful!( You will receive a confirmation email )</div>
          ) : (
            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
            >
              {processing ? "Processing..." : "Make Payment"}
            </button>
          )}
          <button
            onClick={resetPaymentForm}
            className="mt-4 text-blue-900 border border-blue-900 px-4 py-2 rounded hover:bg-blue-100 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-10 justify-center items-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Hotel Reservation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Hotel Name"
            className="p-3 border border-blue-300 rounded-md"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="p-3 border border-blue-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="date"
            className="p-3 border border-blue-300 rounded-md"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <input
            type="date"
            className="p-3 border border-blue-300 rounded-md"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {guestDetails.map((guest, index) => (
          <div key={index} className="mt-6 p-4 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-900">Guest {index + 1}</h3>
              {guestDetails.length > 1 && (
                <button
                  onClick={() => handleRemoveGuest(index)}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                className="p-2 border border-blue-300 rounded-md"
                value={guest.title}
                onChange={(e) => handleGuestChange(index, "title", e.target.value)}
              >
                {["Mr", "Ms", "Mrs"].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.firstName}
                onChange={(e) => handleGuestChange(index, "firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.lastName}
                onChange={(e) => handleGuestChange(index, "lastName", e.target.value)}
              />
              <input
                type="date"
                placeholder="DOB"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.dob}
                onChange={(e) => handleGuestChange(index, "dob", e.target.value)}
              />
              <input
                type="text"
                placeholder="Nationality"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.nationality}
                onChange={(e) => handleGuestChange(index, "nationality", e.target.value)}
              />
              <input
                type="text"
                placeholder="Country Code"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.countryCode}
                onChange={(e) => handleGuestChange(index, "countryCode", e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.mobile}
                onChange={(e) => handleGuestChange(index, "mobile", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-blue-300 rounded-md"
                value={guest.email}
                onChange={(e) => handleGuestChange(index, "email", e.target.value)}
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddGuest}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
        >
          + Add More Guest
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

export default HotelForm;
