import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import {Link} from "react-router-dom"

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    veggieRecipe();
  }, []);

  const veggieRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=cdb84d8cf8744aff9a1a117ee39f0eeb&number=9&tags=vegetarian`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe}>
                  <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="Food" />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius 2rem;
overflow: hidden;

img{
  border-radius: 2rem;
}
`;

export default Veggie;
