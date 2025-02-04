import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Services from './components/Services/Services.jsx'
import Work from './components/WorkAnalysis/Work.jsx'
import Projects from './components/Projects/Projects.jsx'
import Extra from './components/Extra/Extra.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Routing from './Routing.jsx'
import ClickSpark from './components/Shiny/ClickSpark.jsx'
import SplashCursor from './components/Shiny/SplashCursor.jsx'

function App() {
  return (
    <>
    <Routing/>
    <ClickSpark 
    sparkColor='#00bcd4'
    sparkSize={27}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
    />

    <SplashCursor/>
      {/* <Navbar/> */}
      {/* <AboutMe/>
      <Services/>
      <Work/>
      <Projects/>
      <Extra/>
      <Contact/>
      <Footer/> */}
    </>
  )
}

export default App
