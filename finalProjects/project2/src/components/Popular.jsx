import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import {Link} from "react-router-dom"

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    popularRecipe();
  }, []);

  const popularRecipe = async () => {

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=cdb84d8cf8744aff9a1a117ee39f0eeb&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide options={{
          perPage: 4,
          arrows:false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card >
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
export default Popular;
