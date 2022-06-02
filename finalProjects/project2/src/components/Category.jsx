import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";

function Category() {
  return (
    <List>
       <StyledLink to={"/"}>
     
        <h4>HOME</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/italian"}>
        <h4>Italian</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/american"}>
        <h4>American</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/thai"}>
        <h4>Thai</h4>
      </StyledLink>

      <StyledLink to={"/cuisine/cajun"}>
        <h4>Cajun</h4>
      </StyledLink>

      <StyledLink to={"/favourtie"}>
        <h4>Favourite</h4>
      </StyledLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

export default Category;
