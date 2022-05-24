import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import Currencies from "./components/Currencies"
import Price from "./components/Price"
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/currencies" element={<Currencies />} />
      <Route path="/price/:currency" element={<Price />} />
      // :currency will be called with useParams

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
