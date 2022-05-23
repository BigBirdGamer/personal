import { useState } from 'react'
import './App.css'
import products2 from "./products"
import AllTheThings from './Components/AllTheThings'
import MyShoppingCart from './Components/MyShoppingCart'

function App() {
  const [count, setCount] = useState(0)
  
 

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
     
      <AllTheThings products1={products2}/> 

     
      <MyShoppingCart />
    </div>
  )
}

export default App

