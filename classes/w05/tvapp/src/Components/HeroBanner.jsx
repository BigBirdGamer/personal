import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div>
        <p>Small Text</p>
        <h3>Middle Text</h3>
        <img src="" alt="headphones" className="heroBannerImage" />
      </div>
      <div>
        <Link to= "/products"></Link>
        <button type='button'>BUTTON</button>
      

      </div>
    </div>
  );
};

export default HeroBanner;
