import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqcrZpk3aep4GW9UfYI0oFSnxGCnZrNxD7Q&usqp=CAU"
          alt=""
        />
        <h1>Home</h1>
      </Link>

    
    </nav>
  );
};

export default NavBar;
