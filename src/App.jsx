import { useState } from 'react'
import './App.css'
import Home from '../src/Components/Home'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRouter/> 
    </>
  )
}

export default App
