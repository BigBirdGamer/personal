import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail"
import Favs from "./pages/Favs"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/favs" element={<Favs />}/>
          <Route path="/name" element={<Detail />} />
          
    </Routes>
  </BrowserRouter>
  );
}

export default App;
