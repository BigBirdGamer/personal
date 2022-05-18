// Importing libaries -> import from node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importing files -> import local due to ./
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
