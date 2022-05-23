import { useState } from 'react'
import './App.css'
import RandomImage from "./components/RandomImages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     < RandomImage/>
    </div>
  )
}

export default App
