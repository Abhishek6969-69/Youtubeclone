import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Body from './components/body'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <div  className=' '>
     
    <Header />
  
    <Body />
    </div>
  )
}

export default App
