import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Ingredients"
        />
        
      </div>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }
`;
export default Search;
