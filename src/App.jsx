import React from 'react'
import Home from './Components/Home/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const App = () => {
  return (
    <div className="app">
      <div className="home-page">
        <Home/>
      </div>
    </div>
  )
}

export default App