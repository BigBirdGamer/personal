import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Favs from "./pages/Favs";
import Home from "./pages/Home/Home";

localStorage.debug = "films:*";

export const FavsContext = createContext();

function App() {
  const [favsData, setFavsData] = useState([42]);
  return (
    <FavsContext.Provider value={{ favsData, setFavsData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </BrowserRouter>
    </FavsContext.Provider>
  );
}

export default App;
