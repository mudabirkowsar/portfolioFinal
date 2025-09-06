import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <div className='aboutMeMainDiv'>
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
      
      <div className="aboutMeSecondDiv">
        <div className="aboutLeftDiv">
          <div className="aboutMeUpperDiv">
            <div className="profilPhotoDiv">
              <div className="photoDIv">
                <img src="../../img/testimonial-2.jpg" alt="Profile" />
                <div className="photo-glow"></div>
              </div>
            </div>
            <div className="profilTextDiv">
              <div className="info-item">
                <span className='boldText'>Name: </span>
                <span className='name'>Mudbair Kowsar Khanday</span>
              </div>
              <div className="info-item">
                <span className='boldText'>Profile: </span>
                <span className='name'>Full Stack Developer</span>
              </div>
              <div className="info-item">
                <span className='boldText'>Email: </span>
                <a href="mailto:khandaymudabir@gmail.com" className='name'>khandaymudabir@gmail.com</a>
              </div>
              <div className="info-item">
                <span className='boldText'>Phone No. :</span>
                <a className='name' href="tel:+916006287541">+91 6006287541</a>
              </div>
            </div>
          </div>
          <div className="aboutMeLowerDiv">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
              {[
                { name: 'HTML', value: 95 },
                { name: 'CSS', value: 90 },
                { name: 'JavaScript', value: 80 },
                { name: 'React', value: 70 },
                { name: 'Node Js', value: 75 },
                { name: 'React Native', value: 70 }
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <label>{skill.name}</label>
                    <span className='percentage'>({skill.value}%)</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ 
                        width: `${skill.value}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="aboutRightDiv">
          <div className="about-me-header">
            <h1 className='aboutMe'>About Me</h1>
            <div className="header-decoration"></div>
          </div>
          <div className="about-content-card">
            <p className='aboutMepara'>
              Hello! I’m Mudabir, a passionate full-stack and mobile app developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and React Native for cross-platform mobile applications. I specialize in building dynamic, user-friendly web and mobile apps, and have hands-on experience integrating Firebase services such as Firestore, Authentication, Cloud Functions, and Storage.
            </p>
            <p className='aboutMepara'>
              Currently pursuing my B.Tech in Computer Science at GNA University, I enjoy creating seamless digital experiences—whether it’s an interactive portfolio, a mobile e-commerce application, or a full-fledged admin dashboard. My projects showcase my ability to merge functionality with aesthetics, and I’m always eager to explore new technologies to deliver impactful solutions.
            </p>
            <div className="about-cta">
              <span>🚀 Let’s build something amazing together!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe