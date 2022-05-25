import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";
import Search from "./Search";

export const RESULT_PAGE = "searchResults"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search" element={<Search />} />
          <Route path="search/:title" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//?http://localhost:4000/search/results 

export default App;
