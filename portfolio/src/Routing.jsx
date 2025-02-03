import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import MasterFile from './MasterFile'

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />} >
                        <Route path='/' element={<MasterFile />} />
                        <Route path='about' element={<AboutMe />} />
                        <Route path='services' element={<Services />} />
                        <Route path='projects' element={<Projects />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing