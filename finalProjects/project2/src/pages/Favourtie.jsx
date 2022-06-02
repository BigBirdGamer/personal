import React from 'react'
import {Link} from "react-router-dom"
function Favourtie(props) {
  return (
    <div>
      <Link to={"/recipe/" + props.fav.id}>
        <p>{props.fav.title}</p>
        <img src={props.fav.image} alt = ""/>
        </Link>
    </div>
  )
}

export default Favourtie