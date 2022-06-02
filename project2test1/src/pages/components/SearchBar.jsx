import React from "react";
import { useState } from "react";
import Axios from "axios";
import RecipeCard from "./RecipeCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [health, setHealth] = useState("vegan");

  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=640d2dbb&app_key=1956ec5016ecc438c75a22ba5edb01c4&health=${health}
  `;

  async function getRecipe() {
    await Axios.get(url)
      .then((response) => {
        setRecipes(response.data.hits);
        // console.log(response.data.hits)
      })
      .catch((error) => console.error(`ERROR: ${error}`));
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  return (
    <div>
      <form className="searchForm" onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="search" />
        <select>
          <option onClick={() => setHealth("")}>---</option>
          <option onClick={() => setHealth("vegan")}>Vegan</option>
          <option onClick={() => setHealth("vegetarian")}>Vegetarian</option>
          <option onClick={() => setHealth("wheat-free")}>Wheat Free</option>
          <option onClick={() => setHealth("keto-friendly")}>
            Keto Friendly
          </option>
          <option onClick={() => setHealth("kidney-friendly")}>
            Kidney Friendly
          </option>
        </select>
      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeCard {...recipe} key={recipe} />;
        })}
      </div>
    </div>
  );
};

export default SearchBar;

// useEffect(() => {
//   fetch(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=640d2dbb&app_key=1956ec5016ecc438c75a22ba5edb01c4`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data.hits[0].recipe));
// }, []);
