import { useState } from 'react'
import React from 'react'
import './App.css'
import Routing from './Routing.jsx'
import ClickSpark from './components/Shiny/ClickSpark.jsx'
import SplashCursor from './components/Shiny/SplashCursor.jsx'

function App() {
  return (
    <>
    <Routing/>

    <ClickSpark 
    sparkColor='#00bcd4'
    sparkSize={37}
    sparkRadius={15}
    sparkCount={8}
    duration={1000}
    />

    {/* <SplashCursor/> */}
     
    </>
  )
}

export default App
