import React from 'react'
import {Link} from "react-router-dom"

function Favourtie(props) {



  const removeFav=(key)=>{
    props.removeFromFav(key)
    alert("Removed from favourites")
  }
  return (
    <div>
      {props.fav.map((recipe, key)=>{
    
        return(
          <div key={key}>
          <Link to={"/recipe/" + recipe.id}  >
          <p>{recipe.title}</p>
          <img src={recipe.image} alt = ""/>
          </Link>
          <button onClick={()=> removeFav(key)}>Remove from fav</button>
          </div>
        )
      })}
    </div>
  )
}

export default Favourtie

