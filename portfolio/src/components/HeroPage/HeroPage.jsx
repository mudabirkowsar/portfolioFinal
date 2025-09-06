import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroPage.css";

function HeroPage() {
    const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Designer", "Mobile App Developer"];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        if (!isDeleting && charIndex < currentRole.length) {
            setTimeout(() => {
                setText((prev) => prev + currentRole[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else if (isDeleting && charIndex > 0) {
            setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, 50);
        } else if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <div className="heroMainContainer">
            {/* 3D Background Elements */}
            <div className="floating-shapes">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="shape"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 120 + 60}px`,
                            height: `${Math.random() * 120 + 60}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            background: `radial-gradient(circle, ${i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#8338ec' : '#3a86ff'}, transparent)`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="heroContent">
                <div className="heroLeft">
                    <div className="heroText">
                        <h1 className="heroGreeting">Hello, I'm</h1>
                        <h1 className="heroName">Mudabir Kowsar Khanday</h1>
                        <div className="role-container">
                            <span className="role-prefix">I'm a</span>
                            <h2 className="typing-text">| {text} |</h2>
                        </div>
                        <p className="heroDescription">
                            Passionate full-stack developer creating innovative web and mobile applications with modern technologies. I transform ideas into digital experiences that inspire and engage.
                        </p>
                        <div className="heroButtons">
                            <Link to="/" className="heroButton primary">
                                <span>View Projects</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/" className="heroButton secondary">
                                <span>Get In Touch</span>
                                <i className="fas fa-envelope"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="heroRight">
                    <div className="heroVisual">
                        <div className="heroCard">
                            <div className="cardIcon">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>Clean Code</h3>
                            <p>Writing maintainable and efficient code</p>
                        </div>
                        <div className="heroCard">
                            <div className="cardIcon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Responsive Design</h3>
                            <p>Creating seamless experiences across all devices</p>
                        </div>
                        <div className="heroCard">
                            <div className="cardIcon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3>Performance</h3>
                            <p>Optimizing for speed and user experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scrollIndicator">
                <div className="scrollText">Scroll Down</div>
                <div className="scrollArrow">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
}

export default HeroPage;