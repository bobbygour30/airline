import React, { useState } from "react";
import { ArrowRight, Plane, Hotel, PlaneTakeoff } from "lucide-react";
import Navbar from "../components/Navbar";
import FlightForm from "../components/FlightForm";
import HotelForm from "../components/HotelForm";
import CombinedForm from "../components/CombinedForm";
import PaymentSection from "../components/PaymentSection";

const BuyNow = () => {
  const [step, setStep] = useState(0);
  const [reservationType, setReservationType] = useState(null);

  const [selectedRouteType, setSelectedRouteType] = useState("oneway");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  const [hotels, setHotels] = useState([{ checkIn: "", checkOut: "", city: "" }]);

  const routePrice = 350;
  const hotelPrice = hotels.length * 250;
  const passengerPrice = 600;
  const gstRate = 0.18;

  const subtotal =
    (reservationType === "flight" || reservationType === "both"
      ? routePrice
      : 0) +
    (reservationType === "hotel" || reservationType === "both"
      ? hotelPrice
      : 0) +
    passengerCount * passengerPrice;
  const gstAmount = subtotal * gstRate;
  const finalAmount = subtotal + gstAmount;

  const handleSelectType = (type) => {
    setReservationType(type);
    setStep(1);
  };

  const goToPayment = () => {
    setStep(2);
  };

  if (step === 0) {
    return (
      <>
        <Navbar />
        <div className="bg-cyan-100 p-6 sm:p-8 flex justify-center items-center min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-6">
              TYPE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <button
                onClick={() => handleSelectType("flight")}
                className="flex flex-col items-center justify-center border border-blue-900 rounded-lg p-6 hover:bg-blue-100 transition"
              >
                <Plane className="w-10 h-10 text-blue-900 mb-2" />
                <span className="text-blue-900 font-semibold">
                  Flight Reservation
                </span>
              </button>
              <button
                onClick={() => handleSelectType("hotel")}
                className="flex flex-col items-center justify-center border border-blue-900 rounded-lg p-6 hover:bg-blue-100 transition"
              >
                <Hotel className="w-10 h-10 text-blue-900 mb-2" />
                <span className="text-blue-900 font-semibold">
                  Hotel Reservation
                </span>
              </button>
            </div>
            <button
              onClick={() => handleSelectType("both")}
              className="w-full border border-blue-900 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-blue-100 transition"
            >
              <PlaneTakeoff className="w-10 h-10 text-blue-900 mb-2" />
              <span className="text-blue-900 font-semibold">
                Flight & Hotel (Both) Reservation
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Navbar />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PaymentSection totalAmount={finalAmount} onBack={() => setStep(1)} />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {reservationType === "flight" && (
          <FlightForm
            selectedRouteType={selectedRouteType}
            setSelectedRouteType={setSelectedRouteType}
            fromCity={fromCity}
            setFromCity={setFromCity}
            toCity={toCity}
            setToCity={setToCity}
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            passengerCount={passengerCount}
            setPassengerCount={setPassengerCount}
            finalAmount={finalAmount}
            gstAmount={gstAmount}
            onBack={() => setStep(0)}
            onNextStep={goToPayment}
          />
        )}

        {reservationType === "hotel" && (
          <HotelForm
            hotels={hotels}
            setHotels={setHotels}
            finalAmount={finalAmount}
            gstAmount={gstAmount}
            onBack={() => setStep(0)}
            onNextStep={goToPayment}
          />
        )}

        {reservationType === "both" && (
          <CombinedForm
            selectedRouteType={selectedRouteType}
            setSelectedRouteType={setSelectedRouteType}
            fromCity={fromCity}
            setFromCity={setFromCity}
            toCity={toCity}
            setToCity={setToCity}
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            passengerCount={passengerCount}
            setPassengerCount={setPassengerCount}
            hotels={hotels}
            setHotels={setHotels}
            finalAmount={finalAmount}
            gstAmount={gstAmount}
            onBack={() => setStep(0)}
            onNextStep={goToPayment}
          />
        )}
      </div>
    </>
  );
};

export default BuyNow;
