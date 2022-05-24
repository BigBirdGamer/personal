import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Contact from "./components/Contact"
import Home from "./components/Home"
import Procedures from './components/Procedures'


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/procedures" element={<Procedures />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
