import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const Contact = () => {
    return (
      <div>
             <p><Link to="/home">Go to home page</Link></p>
                  <p><Link to="/procedures">See our procedures</Link></p>
                  <p><Link to="/contact">Contact Us!</Link></p>
        <h1>Contact</h1>
        <p>
          Call, email or drop by any time. We're open Monday through Friday from
          9AM until 5PM. If you call during our off hours and leave a message
          then we'll get back to you.
          <br />
          <br />
          frontdesk@dentistoffice.com
          <br />
          <br />
          1 (800) MY-TEETH
          <br />
          1 (800) 698-3384
          <br />
          <br />
          123 Main Street Dental Town, USA 99555
        </p>
      </div>
    );
}

export default Contact;
