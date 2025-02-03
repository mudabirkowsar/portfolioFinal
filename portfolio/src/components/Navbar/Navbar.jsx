import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import AboutMe from "../AboutMe/AboutMe";
import Work from "../WorkAnalysis/Work";
import Extra from "../Extra/Extra";
import Projects from "../Projects/Projects";

function Navbar() {
  const roles = ["", "Full Stack Developer", "Frontend Developer", "", "Backend Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing effect
      setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);


  // Function to track scroll and change navbar style
  const handleScroll = () => {
    if (window.scrollY > 100) { // Change 100 to the scroll position you want to trigger the change
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);   
    };
  }, []);

  const openNavbar = () => {
    setShowNavbar(!showNavbar); 
  };

  const navbarO = () =>{
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="navbarMainContainer">
      <div className={`navbarContainer ${isScrolled ? "scrolled" : ""}`}>
        <div className="logoDiv">
          {/* <img src="../../img/logo.png" alt="" /> */}
          <h1>MK</h1>
        </div>
        <div className="LinksDiv">
          <ul>
            <li>
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-links">About</Link>
            </li>
            <li>
              <Link to="/services" className="nav-links">Services</Link>
            </li>
            <li>
              <Link to="/projects" className="nav-links">Projects</Link>
            </li>
          </ul>
        </div>
      </div>



      <div className="navbarContainerMobile">
        <div className="logoDiv">
        {/* <img src="../../img/logo.png" alt="" /> */}
        <h1>MK</h1>
        </div>
        <i onClick={openNavbar} class="fa-solid fa-bars"></i>
        {
          showNavbar ?
            <div className="LinksDivMobile">
              <ul className="ulMobile">
                <li>
                  <Link onClick={navbarO} to="/" className="nav-linksMobile">Home</Link>
                </li>
                <li>
                  <Link onClick={navbarO} to="/about" className="nav-linksMobile">About</Link>
                </li>
                <li>
                  <Link onClick={navbarO} to="/services" className="nav-linksMobile">Services</Link>
                </li>
                <li>
                  <Link onClick={navbarO} to="/projects" className="nav-linksMobile">Projects</Link>
                </li>
              </ul>
            </div>
            : null
        }

      </div>
      <div className="faltuDiv"></div>

      <div className="mainContentMainContainer">
        <h1>I am Mudabir Kowsar Khanday</h1>
        <h2 className="typing-text">| {text} |</h2>
      </div>
      <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Navbar;
