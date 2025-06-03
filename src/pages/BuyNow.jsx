import React, { useState } from "react";
import { ArrowRight, Plane, Hotel, PlaneTakeoff } from "lucide-react";
import Navbar from "../components/Navbar";

const BuyNow = () => {
  const [step, setStep] = useState(0);
  const [reservationType, setReservationType] = useState(null);

  // Form state
  const [selectedRouteType, setSelectedRouteType] = useState("oneway");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  // Pricing logic
  const routePrice = 350;
  const pricePerPassenger = 0;
  const gstRate = 0.18;

  const total = routePrice + pricePerPassenger * passengerCount;
  const gstAmount = total * gstRate;
  const finalAmount = total + gstAmount;

  const handleSelectType = (type) => {
    setReservationType(type);
    setStep(1);
  };

  if (step === 0) {
    // Step 1: Reservation type selection
    return (<>
    <Navbar />
      <div className="min-h-screen bg-cyan-100 p-8 flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">TYPE</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => handleSelectType("flight")}
              className="flex flex-col items-center justify-center border border-blue-900 rounded-lg p-6 hover:bg-blue-100"
            >
              <Plane className="w-10 h-10 text-blue-900 mb-2" />
              <span className="text-blue-900 font-semibold">Flight Reservation</span>
            </button>
            <button
              onClick={() => handleSelectType("hotel")}
              className="flex flex-col items-center justify-center border border-blue-900 rounded-lg p-6 hover:bg-blue-100"
            >
              <Hotel className="w-10 h-10 text-blue-900 mb-2" />
              <span className="text-blue-900 font-semibold">Hotel Reservation</span>
            </button>
          </div>
          <button
            onClick={() => handleSelectType("both")}
            className="w-full border border-blue-900 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-blue-100"
          >
            <PlaneTakeoff className="w-10 h-10 text-blue-900 mb-2" />
            <span className="text-blue-900 font-semibold">Flight & Hotel (Both) Reservation</span>
          </button>
        </div>
      </div>
      </>
    );
  }

  // Step 2: Reservation form

  return (<><Navbar />
    <div className="min-h-screen bg-cyan-100 p-8 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">ROUTE</h2>

          <div className="flex justify-between items-center mb-6">
            <button
              className="bg-blue-900 text-white p-2 rounded-full"
              onClick={() =>
                setSelectedRouteType((prev) =>
                  prev === "oneway" ? "multicity" : prev === "multicity" ? "roundtrip" : "oneway"
                )
              }
              aria-label="Previous route type"
            >
              &#9664;
            </button>
            <div className="flex space-x-2">
              {["oneway", "roundtrip", "multicity"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRouteType(type)}
                  className={`px-4 py-1 rounded-full border ${
                    selectedRouteType === type
                      ? "bg-blue-900 text-white"
                      : "text-blue-900 border-blue-900"
                  }`}
                >
                  {type === "oneway" && "One Way"}
                  {type === "roundtrip" && "Round Trip"}
                  {type === "multicity" && "Multi City"}
                </button>
              ))}
            </div>
            <button
              className="bg-blue-900 text-white p-2 rounded-full"
              onClick={() =>
                setSelectedRouteType((prev) =>
                  prev === "oneway" ? "roundtrip" : prev === "roundtrip" ? "multicity" : "oneway"
                )
              }
              aria-label="Next route type"
            >
              &#9654;
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="From City / Origin"
              className="p-3 border border-blue-300 rounded-md"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="To City / Destination"
              className="p-3 border border-blue-300 rounded-md"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
            <input
              type="date"
              className="p-3 border border-blue-300 rounded-md col-span-2"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="text-blue-900 font-semibold">Passengers</label>
            <input
              type="number"
              min={1}
              className="p-2 border border-blue-300 rounded-md w-24"
              value={passengerCount}
              onChange={(e) => setPassengerCount(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex justify-end">
            <ArrowRight className="cursor-pointer" />
          </div>

          <div className="mt-10 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>ROUTES:</span>
              <span>₹ {routePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>PASSENGERS:</span>
              <span>₹ {(pricePerPassenger * passengerCount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center">
                GST:
                <span className="ml-1 text-xs bg-white text-blue-900 rounded-full px-2 py-0.5">18%</span>
              </span>
              <span>₹ {gstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-white pt-2">
              <span>TOTAL:</span>
              <span>₹ {finalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setStep(0)}
              className="mr-auto text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition"
            >
              Back
            </button>
            <button className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition">
              ₹ ⇄ $
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BuyNow;
