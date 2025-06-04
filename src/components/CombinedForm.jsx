import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CombinedForm = ({
  selectedRouteType,
  setSelectedRouteType,
  fromCity,
  setFromCity,
  toCity,
  setToCity,
  departureDate,
  setDepartureDate,
  passengerCount,
  setPassengerCount,
  hotels,
  setHotels,
  finalAmount,
  gstAmount,
  onBack,
  onNextStep,
}) => {
  const routePrice = 350;
  const hotelPrice = hotels.length * 250;
  const passengerPrice = 600;

  const handleAddHotel = () => {
    setHotels([...hotels, { checkIn: "", checkOut: "", city: "" }]);
  };

  const handleHotelChange = (index, field, value) => {
    const updatedHotels = hotels.map((hotel, i) =>
      i === index ? { ...hotel, [field]: value } : hotel
    );
    setHotels(updatedHotels);
  };

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 md:p-8 flex justify-center items-start min-h-screen">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="text-blue-900 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 text-center flex-1">
              ROUTE AND HOTEL
            </h2>
            <button
              onClick={onNextStep}
              className="text-blue-900 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Route Options */}
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              {["oneway", "roundtrip", "multicity"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRouteType(type)}
                  className={`px-4 py-2 rounded-full border font-medium ${
                    selectedRouteType === type
                      ? "bg-blue-900 text-white border-blue-900"
                      : "text-blue-900 border-gray-300 bg-white"
                  }`}
                >
                  {type === "oneway" && "One Way"}
                  {type === "roundtrip" && "Round Trip"}
                  {type === "multicity" && "Multi City"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="From City / Origin"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="To City / Destination"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              />
              <input
                type="date"
                className="p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-900 md:col-span-2"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>

          {/* Hotels Section */}
          {hotels.map((hotel, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Hotel {index + 1}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Check In"
                  className="p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-900"
                  value={hotel.checkIn}
                  onChange={(e) => handleHotelChange(index, "checkIn", e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Check Out"
                  className="p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-900"
                  value={hotel.checkOut}
                  onChange={(e) => handleHotelChange(index, "checkOut", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-lg md:col-span-2 focus:ring-2 focus:ring-blue-900"
                  value={hotel.city}
                  onChange={(e) => handleHotelChange(index, "city", e.target.value)}
                />
              </div>
            </div>
          ))}

          <button
            onClick={handleAddHotel}
            className="w-full bg-yellow-200 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Add More Hotel
          </button>
        </div>

        {/* Right Section: Pricing */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between h-fit">
          <div className="flex justify-end">
            <button className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-blue-900 transition">
              ₹ ⇄ $
            </button>
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between">
              <span>HOTELS: {hotels.length}</span>
              <span>₹ {hotelPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>ROUTES: 1</span>
              <span>₹ {routePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>PASSENGERS: {passengerCount}</span>
              <span>₹ {(passengerCount * passengerPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center">
                GST:
                <span className="ml-1 text-xs bg-white text-blue-900 rounded-full px-2 py-0.5">
                  18%
                </span>
              </span>
              <span>₹ {gstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-white pt-2">
              <span>TOTAL:</span>
              <span>₹ {finalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
