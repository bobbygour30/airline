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
      <div className="flex flex-col items-center">
        <HeroSection />
        <ReasonsSection />
        <AirlineSlider />
        <DummyTicketComponent/>
        <PricingCards/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
