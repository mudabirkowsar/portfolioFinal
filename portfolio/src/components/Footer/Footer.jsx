import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footerMainDiv'>
            {/* 3D Background Elements */}
            <div className="floating-shapes">
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i}
                        className="shape"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 80 + 40}px`,
                            height: `${Math.random() * 80 + 40}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            background: `radial-gradient(circle, ${i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#8338ec' : '#3a86ff'}, transparent)`,
                        }}
                    />
                ))}
            </div>
            
            <div className="footerSecondDiv">
                <div className="footer-content">
                    <div className="footer-tech">
                        <p>Made With <span className="tech-badge">REACT</span></p>
                    </div>
                    <div className="footer-credit">
                        <p>Designed And Developed by <span className="designer-name">Mudabir Kowsar Khanday</span></p>
                    </div>
                    <div className="footer-heart">
                        <div className="heart-container">
                            <p>❤️</p>
                        </div>
                    </div>
                </div>
                
                <div className="footer-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-circle"></div>
                    <div className="decoration-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer