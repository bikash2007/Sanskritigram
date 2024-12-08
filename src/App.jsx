import React from 'react'
import Home from './Components/Homepage/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    
      
    <>
      <Navbar/>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Home/>
    </>
  )
}

export default App
