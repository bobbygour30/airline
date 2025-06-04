import React, { useState } from "react";

const PaymentSection = ({ totalAmount, onBack }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill in all payment fields.");
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 2000); // simulate delay
  };

  return (
    <div className="bg-cyan-100 p-4 sm:p-8 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Payment
        </h2>

        <div className="mb-6">
          <label className="block text-blue-900 font-semibold mb-2">
            Card Number
          </label>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={19}
            className="w-full p-3 border border-blue-300 rounded-md"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Expiry Date
            </label>
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
            <label className="block text-blue-900 font-semibold mb-2">
              CVV
            </label>
            <input
              type="password"
              maxLength={3}
              placeholder="123"
              className="w-full p-3 border border-blue-300 rounded-md"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <span className="text-xl font-bold text-blue-900">Total:</span>
          <span className="text-xl font-bold text-green-600">₹ {totalAmount.toFixed(2)}</span>
        </div>

        {paymentSuccess ? (
          <div className="text-green-700 text-center font-bold mb-4">
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
          onClick={onBack}
          className="mt-4 w-full sm:w-auto text-blue-900 border border-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
