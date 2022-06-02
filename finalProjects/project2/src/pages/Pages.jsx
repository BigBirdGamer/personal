import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from "./Searched"
import Recipe from './Recipe'
import Favourtie from './Favourtie'
import {Route, Routes} from "react-router-dom"
import {useState} from "react"


function Pages() {
  const [favourite, setFavourtie] = useState({})
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path= '/searched/:search' element = {<Searched/>}/>
      <Route path= "recipe/:name" element = {<Recipe settingFav={setFavourtie}/>}/>
      <Route path= '/favourtie' element = {<Favourtie fav={favourite }/>}/>
    </Routes>
    
  )
}

export default Pages