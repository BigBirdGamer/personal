import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe(props) {
  const [details, setDetails] = useState({});
  const [disable, setDisable] = useState(false)
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
    
  const toggleFavourtie = ()=>{
    props.settingFav(details)
  
    }
  
  return (
    <>
      <div>
        <button onClick={()=> toggleFavourtie(details)} disabled={disable}>Add To Favourite</button>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div >
        <h4>Instructions</h4>
        <p >{details?.summary.replace(/<[^>]+>/gm, '')}</p>
        <p>{details?.instructions.replace(/<[^>]+>/gm, '')} </p>
        <div>
          <h4>Ingredients</h4>
          <ul>
            {details &&
              details.extendedIngredients &&
              details?.extendedIngredients.map((ingredient, index) => {
                return <li key={index}>{ingredient.original}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Recipe;
