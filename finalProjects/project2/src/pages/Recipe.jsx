import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe(props) {
  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const onSubmit = ()=>{
    props.settingFav(details)
    
  }
  return (
    <>
      <div>
        <button onClick={onSubmit}>Add to Favourtie</button>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div >
        <h4>Instructions</h4>
        <p >{details?.summary}</p>
        <p>{details?.instructions} </p>
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
