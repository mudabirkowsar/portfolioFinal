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

function App() {
  return (
    <>
    <Routing/>
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
