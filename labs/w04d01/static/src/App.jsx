import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LivingRoom from './components/LivingRoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       <LivingRoom/>
      </header>
    </div>
  )
}

export default App
