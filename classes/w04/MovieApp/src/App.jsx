import { useState } from 'react'
import './App.css'
import MovieApp from "./components/MovieApp"
import MovieApp2 from "./components/MovieApp2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          {/* <MovieApp /> */}
    <MovieApp2 />
    </div>
  )
}

export default App
