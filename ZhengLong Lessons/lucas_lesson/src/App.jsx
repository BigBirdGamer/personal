import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FavouritePage from "./FavouritePage"
import RecipePage from "./RecipePage"

function App() {
  //Favourites state above both favourites and recipe page
  const [Favourites, setFavourites] = useState({});
  
	return (
    <div className="App">
      
      <BrowserRouter>
        <Link to="/recipe" >Recipe</Link>
        <Link to="/favourites">Favourites</Link>
        <Routes>
          <Route path="/recipe" element={<RecipePage setFav={setFavourites} name="drumstick"/>} />
          <Route path="/favourites" element={<FavouritePage favourite={Favourites} />} />
        </Routes>
      
      </BrowserRouter>
		</div>
	);
}

export default App;
