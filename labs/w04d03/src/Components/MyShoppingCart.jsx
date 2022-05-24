import React from 'react';
import {useState} from "react"

function MyShoppingCart(props) {
    const[cart,SetCart] = useState([])
    
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>

    </div>
  );
}

export default MyShoppingCart;
