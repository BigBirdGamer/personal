import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart"
import Footer from "./Components/Footer"
import FooterBanner from "./Components/FooterBanner"
import HeroBanner from "./Components/HeroBanner"
import Layout from "./Components/Layout"
import Product from "./Components/Product"




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <HeroBanner/>


     <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HeroBanner />}></Route>
        <Route path="/products" element={<Product />}></Route>
      
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}

export default App
