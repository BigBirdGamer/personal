import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


const Home = () => {
    return (
      <div>
                  <p><Link to="/home">Go to home page</Link></p>
                  <p><Link to="/procedures">See our procedures</Link></p>
                  <p><Link to="/contact">Contact Us!</Link></p>


        <h1>Dentist Website</h1>
        <p>Welcome to my dentist website.</p>
      </div>
    );
  
}

export default Home;
