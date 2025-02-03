import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Work from './components/WorkAnalysis/Work'
import Projects from './components/Projects/Projects'
import Extra from './components/Extra/Extra'

function MasterFile() {
  return (
    <>
        <AboutMe/>
        <Services/>
        <Work/>
        <Projects/>
        <Extra/>
    </>
  )
}

export default MasterFile