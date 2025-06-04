import React from 'react';
import { assets } from '../assets/assests';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const airlineLogos = [
  { name: 'Turkish Airlines', src: assets.turkish },
  { name: 'Lufthansa', src: assets.lufthansa },
  { name: 'Air France', src: assets.airfrance },
  { name: 'Emirates', src: assets.emirates },
  { name: 'Virgin', src: assets.virgin },
  { name: 'KLM', src: assets.klm },
  { name: 'Swiss', src: assets.swiss },
  { name: 'Polish', src: assets.polish },
];

export default function AirlineSlider() {
  return (
    <div className="py-10 relative max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1C3D99] mb-10 px-2 sm:px-0">
        We book dummy ticket with trusted airline companies
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={4}
        loop={true}
        loopedSlides={airlineLogos.length}  // Helps with smooth loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        watchOverflow={true}  // Disable swiper if not enough slides
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
        }}
      >
        {airlineLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-32 h-16 flex-shrink-0">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
