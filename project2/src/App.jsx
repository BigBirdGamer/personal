import React, { useState } from 'react'
import Axios from 'axios'

const App = () => {
  const [query, setQuery] = useState()
   
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}%20&app_id=640d2dbb&app_key=1956ec5016ecc438c75a22ba5edb01c4%09
  `
    async function getRecipes(){
      const result = await Axios.get(url)
      console.log(result.data)
      
    }
    const onSubmit = (e) => {
      e.preventDefault();
      getRecipes();
    }
  return (
   <div>
     <h1>Hungry for more</h1>
     <form onSubmit={onSubmit}>
       <input type="text" placeholder='Main Ingredient' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
       <input type="Submit" value="Search"/>
     </form>
   </div> 
  )
}

export default App;