import React from 'react'
import Home from './Components/Home/Home'
import TripImage from './Components/TripImage/TripImage'
import Dreaming from './Components/Dreaming/Dreaming'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'  // Add this line



const App = () => {
  return (
    <div className="app">
      <div className="home-page">
        <Home/>
      </div>
      <div className="trip-image-page">
        <TripImage/>
      </div>
      <Dreaming/>
    </div>
  )
}

export default App
