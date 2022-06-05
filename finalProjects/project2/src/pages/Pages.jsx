import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from "./Searched"
import Recipe from './Recipe'
import Favourtie from './Favourtie'
import {Route, Routes} from "react-router-dom"
import {useState} from "react"


function Pages() {
  const [favourite, setFavourtie] = useState([])
const addToFavourite = (recipe)=>{
  setFavourtie([...favourite, recipe])
  console.log(favourite)
}
const removeFromFav = (para)=>{
  const newFavs = favourite.filter((element, index) => {
    return(
      para!== index
    )
  });
  setFavourtie(newFavs);
}
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path= '/searched/:search' element = {<Searched/>}/>
      <Route path= "recipe/:name" element = {<Recipe settingFav={addToFavourite}/>}/>
      <Route path= '/favourtie' element = {<Favourtie fav={favourite } removeFromFav={removeFromFav}/>}/>
    </Routes>
    
  )
}

export default Pages