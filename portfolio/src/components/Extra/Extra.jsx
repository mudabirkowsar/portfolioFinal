import React from 'react'
import "./Extra.css"

function Extra() {
  return (
    <div className='extraMainDiv'>
        <div className="extraUpperDiv"></div>
        <div className="extraContentDiv">
            <div className="extraImageDiv">
                <img src="../../img/testimonial-2.jpg" alt="" />
            </div>
            <div className="extraHeadingdiv">
                <p>Extra Activities </p>
            </div>
            <div className="extraDicDiv">
                <p>Passionate about continuous learning, I actively participate in hackathons, coding challenges, and tech workshops to enhance my skills and stay updated with the latest industry trends.</p>
                <i class="fa-solid fa-quote-left"></i>
            </div>
        </div>
        <div className="extraLowerDiv"></div>
    </div>
  )
}

export default Extra