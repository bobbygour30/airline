import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ReasonsSection from "../components/ReasonsSection";
import AirlineSlider from "../components/AirlineSlider";
import DummyTicketComponent from "../components/DummyTicketComponent";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Container with max width and horizontal padding */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-12">
        <HeroSection />
        <ReasonsSection />
        <AirlineSlider />
        <DummyTicketComponent />
        <PricingCards />
      </main>
      <Footer />
    </>
  );
};

export default Home;
