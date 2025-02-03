import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='aboutMeMainDiv'>
      <div className="aboutMeSecondDiv">
        <div className="aboutLeftDiv">
          <div className="aboutMeUpperDiv">
            <div className="profilPhotoDiv">
              <div className="photoDIv">
                <img src="../../img/testimonial-2.jpg" alt="" />
              </div>
            </div>
            <div className="profilTextDiv">
              <span className='boldText'>Name: </span>
              <span className='name'>Mudbair Kowsar Khanday</span>
              <br />
              <br />
              <span className='boldText'>Profile: </span>
              <span className='name'>Full Stack Developer</span>
              <br />
              <br />
              <span className='boldText'>Email: </span>
              {/* <span className='name'>khandaymudabir@gmail.com</span> */}
              <a href="mailto:khandaymudabir@gmail.com" className='name'>khandaymudabir@gmail.com</a>
              <br />
              <br />
              <span className='boldText'>Phone No. :</span>
              {/* <span className='name'>+91 6006287541</span> */}
              <a className='name' href="tel:+916006287541">+91 6006287541</a>
            </div>
          </div>
          <div className="aboutMeLowerDiv">
            <h1>Skill</h1>
            <div className="slideContainer">
              <label htmlFor="">HTML </label>
              <span className='percentage'>(95%)</span>
              <br />
              <input type="range" min="0" max="100" value="95" />
            </div>

            <div className="slideContainer">
              <label htmlFor="">CSS </label>
              <span className='percentage'>(90%)</span>
              <br />
              <input type="range" min="0" max="100" value="90" />
            </div>


            <div className="slideContainer">
              <label htmlFor="">JavaScript </label>
              <span className='percentage'>(80%)</span>
              <br />
              <input type="range" min="0" max="100" value="80" />
            </div>

            <div className="slideContainer">
              <label htmlFor="">React </label>
              <span className='percentage'>(70%)</span>
              <br />
              <input type="range" min="0" max="100" value="70" />
            </div>

            <div className="slideContainer">
              <label htmlFor="">Node Js </label>
              <span className='percentage'>(75%)</span>
              <br />
              <input type="range" min="0" max="100" value="75" />
            </div>



          </div>
        </div>
        <div className="aboutRightDiv">
          <h1 className='aboutMe'>About Me</h1>
          <p className='aboutMepara'>Hello! I’m Mudabir, a passionate full-stack web developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js). I specialize in building dynamic, user-friendly web applications and have experience working with EJS, Mongoose, and session-based authentication.<br /><br /> Currently pursuing my B.Tech in Computer Science at GNA University, I love creating seamless digital experiences, whether it’s an interactive portfolio, an admin dashboard, or a full-fledged e-commerce platform. My projects showcase my ability to merge functionality with aesthetics, and I’m always eager to learn and explore new technologies.<br /> <br />Let’s build something amazing together!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe