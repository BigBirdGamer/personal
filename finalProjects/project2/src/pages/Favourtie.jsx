import React from 'react'
import {Link} from "react-router-dom"

function Favourtie(props) {



  const removeFav=(key)=>{
    props.removeFromFav(key)

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

// fav state must be a array of objects
// map fav state
//  make component fav
// get set state fucntion from pages and pass it down by props 
// inside remvoeFav function destrucvtuer the current state remove 
// remove the object that has the same title as current item (event.target)
