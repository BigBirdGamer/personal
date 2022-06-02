import "./App.css";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchBar from "./pages/components/SearchBar";
import Home from "./pages/Home";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
