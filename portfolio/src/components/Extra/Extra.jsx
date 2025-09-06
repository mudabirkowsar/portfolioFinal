import React from 'react'
import "./Extra.css"

function Extra() {
  return (
    <div className='extraMainDiv'>
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
      
      <div className="extraUpperDiv"></div>
      <div className="extraContentDiv">
        <div className="extraImageDiv">
          <img src="../../img/testimonial-2.jpg" alt="Profile" />
          <div className="image-glow"></div>
        </div>
        <div className="extraHeadingdiv">
          <p>Extra Activities</p>
          <div className="heading-decoration"></div>
        </div>
        <div className="extraDicDiv">
          <p>Passionate about continuous learning, I actively participate in hackathons, coding challenges, and tech workshops to enhance my skills and stay updated with the latest industry trends.</p>
          <div className="quote-container">
            <i className="fa-solid fa-quote-left"></i>
          </div>
        </div>
      </div>
      <div className="extraLowerDiv"></div>
    </div>
  )
}

export default Extra