import React from 'react'
import "./Services.css"

const servicesData = [
  {
    id: 1,
    icon: "fa-solid fa-computer",
    title: "WEB DESIGN",
    desc: "I create visually appealing, user-friendly, and responsive web designs that enhance user experience. With a focus on modern UI/UX principles, I craft designs that are not only aesthetically pleasing but also highly functional across all devices."
  },
  {
    id: 2,
    icon: "fa-solid fa-code",
    title: "WEB DEVELOPMENT",
    desc: "I develop dynamic, scalable, and high-performance web applications using modern technologies. From front-end design to back-end functionality, I ensure seamless, secure, and user-friendly experiences across all devices."
  },
  {
    id: 3,
    icon: "fa-solid fa-camera",
    title: "PHOTOGRAPHY",
    desc: "I capture stunning, high-quality photographs that tell a story and evoke emotions. With a keen eye for detail and composition, I create visually compelling images perfect for personal, commercial, and creative projects."
  },
  {
    id: 4,
    icon: "fa-solid fa-mobile",
    title: "RESPONSIVE DESIGN",
    desc: "I create fully responsive designs that adapt seamlessly to all screen sizes, ensuring a smooth and user-friendly experience on desktops, tablets, and mobile devices. My focus is on performance, accessibility, and modern UI/UX principles."
  },
  {
    id: 5,
    icon: "fa-brands fa-android",
    title: "APP DEVELOPMENT",
    desc: "I develop high-performance, user-friendly mobile applications with seamless functionality and modern UI/UX design. My focus is on creating scalable, responsive, and feature-rich apps for both Android and iOS platforms."
  },
  {
    id: 6,
    icon: "fa-solid fa-signal",
    title: "MARKETING",
    desc: "I create effective marketing strategies that enhance brand visibility and engagement. With a focus on digital marketing, SEO, and social media, I help businesses reach their target audience and achieve measurable growth."
  }
];

function Services() {
  return (
    <div className='servicesMainDiv'>
      <p className='servicesText'><span className='spannn'>SERVICES</span></p>
      <p className='servicesTextpara'>I provide full-stack web development services</p>

      <div className="servicesMainListDiv">
        {servicesData.map(service => (
          <div key={service.id} className="serviceInnerMainDiv">
            <div className="serviceImageDiv">
              <i className={service.icon}></i>
            </div>
            <div className="serviceText">
              <p>{service.title}</p>
            </div>
            <div className="serviceDesc">
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
