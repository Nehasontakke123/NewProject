import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/jewellery_banner.jpg";
import banner2 from "../assets/images/BANNER.jpg";
import banner3 from "../assets/images/RingBanner.jpg";
import "../assets/css/HomePage.css"; // Import Custom CSS
import DiamondJewellery from "../components/DiamondJewellery";



const banners = [banner1, banner2, banner3];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000); // Auto-slide every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {banners.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === current ? "active" : ""}`}
        >
          <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="banner-button left"
        onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}
      >
        ❮
      </button>
      <button
        className="banner-button right"
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
      
    </div>
    
  );
};

export default HomePage;

