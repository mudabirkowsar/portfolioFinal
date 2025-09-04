import React, { useState } from 'react';
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    img: "../../img/work-1.jpg",
    title: "Coffee Shop Website",
    desc: "A seamless coffee shop website with online booking and cart functionality.",
    tech: "HTML, CSS, JS, React, Node js, Express, MongoDb",
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
    tech: "HTML, CSS, Node.js, EJS, ",
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
    tech: "React, Node js, mognoose, express",
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
    tech: "HTML, CSS, JS, Node.js",
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
    tech: "React Native, Css, Tailwind, Firebase, Api ",
    features: ["Find Recipe", "Favorite It ", "Authentication"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/cake-zone",
  },
  {
    id: 6,
    img: "../../img/work-4.jpg",
    title: "Wordsy",
    desc: "A mobile application combination of note app and todo app .",
    tech: "React Native, Css, Tailwind, AsyncStorage ",
    features: ["Add Note ", "Add Todo ", "Hide Note", "Favourite Note", "CRUD Ops with both Note and Todo"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/Wordsy--React-Native--",
  },
  {
    id: 7,
    img: "../../img/work-1.jpg",
    title: "Todo",
    desc: "A Todo Mobile Application .",
    tech: "React Native, Css, Tailwind, Firebase ",
    features: ["Add Todo ", "Remove Todo", "Edit Todo", "Delete Todo",],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/TodoApp--React-Native-",
  },
  {
    id: 8,
    img: "../../img/work-4.jpg",
    title: "Zest",
    desc: "E commerce mobile application with react native  .",
    tech: "React Native, Css, Tailwind, Firebase, Redux  ",
    features: ["Add To Cart", "Description Product", "Edit Address", "Add Address", "Eveything"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/Zest-E-Commerce--React-Native-",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className='projectsMainDiv'>
      <p className='projectsText'><span className='spannn'>PROJECTS</span></p>
      <p className='projectsTextpara'>Explore my diverse projects showcasing expertise in full-stack development</p>

      <div className="projectsMainListDiv">
        {projectsData.map(project => (
          <div
            key={project.id}
            className="projectInnerMainDiv"
            onClick={() => openModal(project)}
          >
            <div className="projectImageDiv">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="projectNameDiv">
              <div className="nameAndDescDiv">
                <p className='pName'>{project.title}</p>
                <p className='pDic'>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={e => e.stopPropagation()}>
            <span className="closeModal" onClick={closeModal}>&#10005;</span>
            <img src={selectedProject.img} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p className="modalDesc">{selectedProject.desc}</p>
            <p><strong>Tech Used:</strong> {selectedProject.tech}</p>
            <p><strong>Role:</strong> {selectedProject.role}</p>
            <p><strong>Duration:</strong> {selectedProject.duration}</p>
            <p><strong>Features:</strong></p>
            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="modalLinks">
              {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modalLink">GitHub</a>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
