import React from 'react'
import "./Work.css"

function Work() {
  return (
    <div className='workContainerMain'>
      <div className='udiv'></div>
      <div className='tasksDiv'>
        <div className="serviceIconsDiv">
          <div className="servicesIcon">
            <i class="fa-solid fa-check"></i>
            <br />
            <p>20</p>
            <br />
            <p>PROJECTS</p>
          </div>
          <div className="servicesIcon">
            <i class="fa-solid fa-calendar-days"></i>
            <br />
            <p>3</p>
            <br />
            <p>EXPERIENCE</p>
          </div>
          <div className="servicesIcon">
          <i class="fa-solid fa-person"></i>
            <br />
            <p>40</p>
            <br />
            <p>CLIENTS</p>
          </div>
          <div className="servicesIcon">
          <i class="fa-solid fa-award"></i>
            <br />
            <p>10</p>
            <br />
            <p>AWARDS</p>
          </div>
        </div>
      </div>
      <div className="zyx"></div>
    </div>
  )
}

export default Work