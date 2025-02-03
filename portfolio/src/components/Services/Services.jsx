import React from 'react'
import "./Services.css"

function Services() {
    return (
        <div className='servicesMainDiv'>
            <p className='servicesText'><span className='spannn'>SERVICES</span></p>
            <p className='servicesTextpara'>I provide full-stack web development services</p>

            <div className="servicesMainListDiv">
                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                        <i class="fa-solid fa-computer"></i>
                    </div>
                    <div className="serviceText">
                        <p>WEB DESIGN</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I create visually appealing, user-friendly, and responsive web designs that enhance user experience. With a focus on modern UI/UX principles, I craft designs that are not only aesthetically pleasing but also highly functional across all devices.</p>
                    </div>
                </div>

                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <div className="serviceText">
                        <p>WEB DEVELOPMENT</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I develop dynamic, scalable, and high-performance web applications using modern technologies. From front-end design to back-end functionality, I ensure seamless, secure, and user-friendly experiences across all devices.</p>
                    </div>
                </div>

                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div className="serviceText">
                        <p>PHOTOGRAPHY</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I capture stunning, high-quality photographs that tell a story and evoke emotions. With a keen eye for detail and composition, I create visually compelling images perfect for personal, commercial, and creative projects.</p>
                    </div>
                </div>

                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                    <i class="fa-solid fa-mobile"></i>
                    </div>
                    <div className="serviceText">
                        <p>RESPONSIVE DESIGN</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I create fully responsive designs that adapt seamlessly to all screen sizes, ensuring a smooth and user-friendly experience on desktops, tablets, and mobile devices. My focus is on performance, accessibility, and modern UI/UX principles.</p>
                    </div>
                </div>

                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                    <i class="fa-brands fa-android"></i>
                    </div>
                    <div className="serviceText">
                        <p>APP DEVELOPMENT</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I develop high-performance, user-friendly mobile applications with seamless functionality and modern UI/UX design. My focus is on creating scalable, responsive, and feature-rich apps for both Android and iOS platforms.</p>
                    </div>
                </div>

                <div className="serviceInnerMainDiv">
                    <div className="serviceImageDiv">
                    <i class="fa-solid fa-signal"></i>
                    </div>
                    <div className="serviceText">
                        <p>MARKETING</p>
                    </div>
                    <div className="serviceDesc">
                        <p>I create effective marketing strategies that enhance brand visibility and engagement. With a focus on digital marketing, SEO, and social media, I help businesses reach their target audience and achieve measurable growth.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services