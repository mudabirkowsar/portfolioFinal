import React from 'react';
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    img: "../../img/work-1.jpg",
    title: "Coffee Shop Website",
    desc: "A seamless coffee shop website with online booking and cart functionality.",
    tech: ["HTML", "CSS", "JS", "React", "Node js", "Express", "MongoDb"],
    features: ["Online booking system", "Shopping cart", "Responsive design"],
    role: "Frontend & Backend Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/coffee",
  },
  {
    id: 2,
    img: "../../img/work-6.jpg",
    title: "University Quiz Application",
    desc: "A secure university quiz app with user authentication and admin control.",
    tech: ["HTML", "CSS", "Node.js", "EJS"],
    features: ["User authentication", "Admin control panel", "Real-time quiz scoring"],
    role: "Full Stack Developer",
    duration: "3 months",
    github: "https://github.com/mudabirkowsar/UniversityQuizApplication",
  },
  {
    id: 3,
    img: "../../img/work-2.jpg",
    title: "Expense Tracker",
    desc: "An intuitive expense tracker with user authentication and secure data management.",
    tech: ["React", "Node js", "Mongoose", "Express"],
    features: ["User login", "Track expenses", "Secure data storage"],
    role: "Frontend & Backend Developer",
    duration: "1 month",
    github: "https://github.com/mudabirkowsar/expenseTracker",
  },
  {
    id: 4,
    img: "../../img/work-3.jpg",
    title: "Cake Zone",
    desc: "A feature-rich Cake Zone website with online ordering and admin control.",
    tech: ["HTML", "CSS", "JS", "Node.js"],
    features: ["Order online", "Admin management", "Payment integration"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar",
  },
  {
    id: 5,
    img: "../../img/work-2.jpg",
    title: "Foody",
    desc: "A mobile application for finding recipe online of every meal.",
    tech: ["React Native", "Css", "Tailwind", "Firebase", "Api"],
    features: ["Find Recipe", "Favorite It", "Authentication"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/cake-zone",
  },
  {
    id: 6,
    img: "../../img/work-4.jpg",
    title: "Wordsy",
    desc: "A mobile application combination of note app and todo app.",
    tech: ["React Native", "Css", "Tailwind", "AsyncStorage"],
    features: ["Add Note", "Add Todo", "Hide Note", "Favourite Note", "CRUD Ops with both Note and Todo"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/Wordsy--React-Native--",
  },
  {
    id: 7,
    img: "../../img/work-1.jpg",
    title: "Todo",
    desc: "A Todo Mobile Application.",
    tech: ["React Native", "Css", "Tailwind", "Firebase"],
    features: ["Add Todo", "Remove Todo", "Edit Todo", "Delete Todo"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/TodoApp--React-Native-",
  },
  {
    id: 8,
    img: "../../img/work-4.jpg",
    title: "Zest",
    desc: "E commerce mobile application with react native.",
    tech: ["React Native", "Css", "Tailwind", "Firebase", "Redux"],
    features: ["Add To Cart", "Description Product", "Edit Address", "Add Address", "Eveything"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/Zest-E-Commerce--React-Native-",
  },
];

function Projects() {
  return (
    <div className='projectsMainDiv'>
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
      
      {/* Header Section */}
      <div className="projectsHeader">
        <div className="projectsTitle">
          <span className='spannn'>PROJECTS</span>
        </div>
        <p className='projectsTextpara'>Explore my diverse projects showcasing expertise in full-stack development</p>
      </div>
      
      {/* Projects Grid */}
      <div className="projectsMainListDiv">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="projectInnerMainDiv"
            style={{
              transform: `translateZ(${20 + index * 5}px)`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="projectImageDiv">
              <img src={project.img} alt={project.title} />
              <div className="imageOverlay"></div>
            </div>
            
            <div className="projectContent">
              <div className="projectHeader">
                <h3 className="projectTitle">{project.title}</h3>
                <div className="projectMeta">
                  <span className="projectRole">{project.role}</span>
                  <span className="projectDuration">{project.duration}</span>
                </div>
              </div>
              
              <p className="projectDesc">{project.desc}</p>
              
              <div className="projectFeatures">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="projectTech">
                <h4>Technologies:</h4>
                <div className="techTags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="techTag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="projectFooter">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="githubButton"
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
            
            <div className="projectGlow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;