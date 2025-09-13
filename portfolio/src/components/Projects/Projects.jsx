import React, { useState } from 'react';
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
    gallery: [
      "../../img/work-1.jpg",
      "../../img/work-2.jpg",
      "../../img/work-3.jpg"
    ]
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
    gallery: [
      "../../img/work-1.jpg",
      "../../img/work-2.jpg",
      "../../img/work-3.jpg"
    ]
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
    gallery: [
      "../../img/work-1.jpg",
      "../../img/work-2.jpg",
      "../../img/work-3.jpg"
    ]
  },
  {
    id: 4,
    img: "../../img/work-3.jpg",
    title: "Cake Zone",
    desc: "A feature-rich Cake Zone website with online ordering and admin control.",
    tech: ["HTML", "CSS", "JS", "Node.js"],
    features: ["Order online", "Admin management"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar",
    gallery: [
      "../../img/work-1.jpg",
      "../../img/work-2.jpg",
      "../../img/work-3.jpg"
    ]
  },

  {
    id: 5,
    img: "../../foodyImgs/img1.jpg",
    title: "Foody",
    desc: "A mobile application for finding recipe online of every meal.",
    tech: ["React Native", "Css", "Tailwind", "Firebase", "Api"],
    features: ["Find Recipe", "Favorite It", "Authentication"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/cake-zone",
    gallery: [
      "../../foodyImgs/img1.jpg",
      "../../foodyImgs/img2.jpg",
      "../../foodyImgs/img3.jpg",
      "../../foodyImgs/img4.jpg",
      "../../foodyImgs/img5.jpg",
      "../../foodyImgs/img6.jpg",
    ]
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
    gallery: [
      "../../wordsyImgs/img1.jpg",
      "../../wordsyImgs/img2.jpg",
      "../../wordsyImgs/img3.jpg",
      "../../wordsyImgs/img4.jpg",
      "../../wordsyImgs/img5.jpg",
      "../../wordsyImgs/img6.jpg",
      "../../wordsyImgs/img7.jpg",
      "../../wordsyImgs/img8.jpg",
    ]
  },
  {
    id: 7,
    img: "../../img/work-1.jpg",
    title: "HandyCrew",
    desc: "A Service providing Application.",
    tech: ["React Native", "Css", "Tailwind", "Firebase"],
    features: ["Add provider", "View Provider", "Hire Provider", "many more"],
    role: "Full Stack Developer",
    duration: "2 months",
    github: "https://github.com/mudabirkowsar/HandyCrew--React-Native-",
    gallery: [
      "../../handyCrewImgs/img1.jpg",
      "../../handyCrewImgs/img2.jpg",
      "../../handyCrewImgs/img3.jpg",
      "../../handyCrewImgs/img4.jpg",
      "../../handyCrewImgs/img5.jpg",
      "../../handyCrewImgs/img6.jpg",
      "../../handyCrewImgs/img7.jpg",
      "../../handyCrewImgs/img8.jpg",
      "../../handyCrewImgs/img9.jpg",
      "../../handyCrewImgs/img10.jpg",
      "../../handyCrewImgs/img11.jpg",
    ]
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
    gallery: [
      "../../zestImgs/img1.jpg",
      "../../zestImgs/img2.jpg",
      "../../zestImgs/img3.jpg",
      "../../zestImgs/img4.jpg",
      "../../zestImgs/img5.jpg",
      "../../zestImgs/img6.jpg",
      "../../zestImgs/img7.jpg",
      "../../zestImgs/img8.jpg",
      "../../zestImgs/img9.jpg",
      "../../zestImgs/img10.jpg",
      "../../zestImgs/img11.jpg",
      "../../zestImgs/img12.jpg",
    ]
  },
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className='projectsMainDiv'>
      {/* Floating Background */}
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

      {/* Header */}
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
                <button
                  className="viewButton"
                  onClick={() => openModal(project)}
                >
                  👁 View
                </button>
              </div>
            </div>

            <div className="projectGlow"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2 className="modalTitle">{selectedProject.title}</h2>
            <div className="modalGallery">
              {selectedProject.gallery.map((img, idx) => (
                <div key={idx} className="modalImageBox">
                  <img src={img} alt={`${selectedProject.title} ${idx + 1}`} />
                </div>
              ))}
            </div>
            <button className="closeModal" onClick={closeModal}>✖ Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
