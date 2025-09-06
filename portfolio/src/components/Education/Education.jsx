import React from 'react'
import "./Education.css"

const educationData = [
    {
        id: 1,
        degree: "Bachelor of Technology in Computer Science",
        institution: "GNA University",
        period: "2021 - 2025",
        description: "Specializing in full-stack development and mobile application development with a focus on modern web technologies.",
        icon: "fa-solid fa-graduation-cap"
    },
    {
        id: 2,
        degree: "Higher Secondary Education",
        institution: "Government Higher Secondary School",
        period: "2019 - 2021",
        description: "Completed with distinction in Science stream, focusing on Physics, Chemistry, and Mathematics.",
        icon: "fa-solid fa-school"
    }
];

const certificateData = [
    {
        id: 1,
        name: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2023",
        icon: "fa-solid fa-certificate"
    },
    {
        id: 2,
        name: "React Native Mobile Development",
        issuer: "Coursera",
        date: "2023",
        icon: "fa-solid fa-certificate"
    },
    {
        id: 3,
        name: "MongoDB Database Administration",
        issuer: "MongoDB University",
        date: "2022",
        icon: "fa-solid fa-certificate"
    },
    {
        id: 4,
        name: "Advanced JavaScript Concepts",
        issuer: "freeCodeCamp",
        date: "2022",
        icon: "fa-solid fa-certificate"
    }
];

const experienceData = [
    {
        id: 1,
        name: "React Intern ",
        issuer: "A2IT",
        date: "2024",
        icon: "fa-solid fa-certificate"
    },
    {
        id: 2,
        name: "React Native Mobile Intern",
        issuer: "Lady Bird web solution",
        date: "2025",
        icon: "fa-solid fa-certificate"
    },
    {
        id: 3,
        name: "React Native Mobile Intern",
        issuer: "ClienZon",
        date: "2025",
        icon: "fa-solid fa-certificate"
    },
];

function Education() {
    return (
        <div className='educationMainDiv'>
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
            <div className="educationHeader">
                <div className="sectionTitle">
                    <span className='titleText'>EDUCATION & CERTIFICATES</span>
                </div>
                <p className='sectionSubtitle'>My academic journey and professional certifications</p>
            </div>

            {/* Education Timeline */}
            <div className="timelineContainer">
                <div className="timelineHeader">
                    <h2 className="timelineHeading">Education</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-line"></div>
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                            }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    <i className={edu.icon}></i>
                                </div>
                                <div className="timeline-info">
                                    <h3 className="timeline-title">{edu.degree}</h3>
                                    <div className="timeline-meta">
                                        <span className="timeline-institution">{edu.institution}</span>
                                        <span className="timeline-period">{edu.period}</span>
                                    </div>
                                    <p className="timeline-description">{edu.description}</p>
                                </div>
                            </div>
                            <div className="timeline-branch"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificates Timeline */}
            <div className="timelineContainer">
                <div className="timelineHeader">
                    <h2 className="timelineHeading">Certificates</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-line"></div>
                    {certificateData.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                            }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    <i className={cert.icon}></i>
                                </div>
                                <div className="timeline-info">
                                    <h3 className="timeline-title">{cert.name}</h3>
                                    <div className="timeline-meta">
                                        <span className="timeline-institution">{cert.issuer}</span>
                                        <span className="timeline-period">{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-branch"></div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="timelineContainer">
                <div className="timelineHeader">
                    <h2 className="timelineHeading">Experiences</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-line"></div>
                    {experienceData.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                            }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    <i className={cert.icon}></i>
                                </div>
                                <div className="timeline-info">
                                    <h3 className="timeline-title">{cert.name}</h3>
                                    <div className="timeline-meta">
                                        <span className="timeline-institution">{cert.issuer}</span>
                                        <span className="timeline-period">{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-branch"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education