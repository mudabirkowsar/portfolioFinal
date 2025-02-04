import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ShinyText from "../Shiny/ShinyText";
import BlurText from "../Shiny/BlurText";
import TextPressure from "../Shiny/TextPressure";
import TrueFocus from "../Shiny/TrueFocus";
import SplitText from "../Shiny/SplitText";
import SplashCursor from "../Shiny/SplashCursor";

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



  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

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
        {/* <ShinyText text="I Am Mudabir Kowsar Khanday" disabled={false} speed={3} className='custom-class' /> */}
        {/* <h1>I am Mudabir Kowsar Khanday</h1>  */}

        {/* <BlurText 
        text="I Am Mudabir Kowsar Khanday"
        delay={150}
        animateBy="words"
        direction="top"
        color="white"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"/> */}

{/* 
        <TrueFocus
        sentence="I Am Mudabir Kowsar Khanday"
        manualMode={false}
        blurAmount={5}
        borderColor="#00bcd4"
        animationDuration={4}
        pauseBetweenAnimations={0.1}
        /> */}

        {/* <TextPressure
        text="I Am Mudabir Kowsar!"
        flex={true}
        alpha={false}
        stroke={false}
        // width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={20}
        /> */}

        <SplitText
        text="I Am Mudabir Kowsar Khanday "
        className="text-2xl font-semibold text-center"
        delay={100}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
        />
        <h2 className="typing-text">| {text} |</h2>
        
      </div>
      <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Navbar;
