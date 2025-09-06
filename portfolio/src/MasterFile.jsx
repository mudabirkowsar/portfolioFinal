import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Work from './components/WorkAnalysis/Work'
import Projects from './components/Projects/Projects'
import Extra from './components/Extra/Extra'
import Education from './components/Education/Education'
import HeroPage from './components/HeroPage/HeroPage'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function MasterFile() {
  return (
    <>
      <HeroPage />
      <AboutMe />
      <Services />
      <Education />
      <Work />
      <Projects />
      <Extra />
      <Contact />
      <Footer />
    </>
  )
}

export default MasterFile