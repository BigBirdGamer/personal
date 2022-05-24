import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


const Procedures = () => {
    return (
      <div>
             <p><Link to="/home">Go to home page</Link></p>
                  <p><Link to="/procedures">See our procedures</Link></p>
                  <p><Link to="/contact">Contact Us!</Link></p>
        <h1>Procedures</h1>
        <p>
          Here at Dentist Office we provide a wide variety of procedures. We
          accept all sorts of insurance and have competitive uninsured payment
          plans. Find the service you need and visit our contact page to find
          out how to reach out to us to make the appointment you need!
        </p>
        <ul className="procedures">
          <li>General Checkups</li>
          <li>Teeth Cleaning</li>
          <li>Cavity Screenings</li>
          <li>Cavity Fillings</li>
          <li>Chipped Tooth Fixings</li>
          <li>Tooth Removal</li>
          <li>Root Canals</li>
        </ul>
      </div>
    );
}

export default Procedures;
