import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import MasterFile from './MasterFile'
import Contact from './components/Contact/Contact'

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MasterFile />} >
                        <Route path='/' element={<MasterFile />} />
                        <Route path='about' element={<AboutMe />} />
                        <Route path='services' element={<Services />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing