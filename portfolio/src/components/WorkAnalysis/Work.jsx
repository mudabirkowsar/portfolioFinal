import React from 'react'
import "./Work.css"

function Work() {
  return (
    <div className='workContainerMain'>
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
      
      <div className='udiv'></div>
      <div className='tasksDiv'>
        <div className="serviceIconsDiv">
          <div className="servicesIcon">
            <div className="icon-container">
              <i class="fa-solid fa-check"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="stat-number">20</div>
            <div className="stat-label">PROJECTS</div>
          </div>
          
          <div className="servicesIcon">
            <div className="icon-container">
              <i class="fa-solid fa-calendar-days"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="stat-number">3</div>
            <div className="stat-label">EXPERIENCE</div>
          </div>
          
          <div className="servicesIcon">
            <div className="icon-container">
              <i class="fa-solid fa-person"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="stat-number">40</div>
            <div className="stat-label">CLIENTS</div>
          </div>
          
          <div className="servicesIcon">
            <div className="icon-container">
              <i class="fa-solid fa-award"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="stat-number">10</div>
            <div className="stat-label">AWARDS</div>
          </div>
        </div>
      </div>
      <div className="zyx"></div>
    </div>
  )
}

export default Work