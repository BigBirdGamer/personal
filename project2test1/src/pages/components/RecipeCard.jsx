import React from "react";

const RecipeCard = ({recipe}) => {
    // console.log(recipe)
  return (
    <div className="recipeCard">
      <img src={recipe.image} alt = "img"/> 
       <p>{recipe.label}</p>
    </div>
    
  );
};

export default RecipeCard;
