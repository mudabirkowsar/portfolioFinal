import React, { useState } from 'react'
import "./Contact.css"

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "074aa678-34dc-4da1-9ffd-e6f79348afe9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Submitted successfully.")
            event.target.reset();
        } else {
            setResult("Try again after some time")
            console.log("Error", data);
        }
    };

    return (
        <div className='contactMainDiv'>
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

            <div className="contactDiv">
                <div className="inputDiv">
                    <div className="form-header">
                        <p><span>Send</span> Message</p>
                        <div className="header-decoration"></div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" required placeholder='Your Name' />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" required placeholder='Your Email' />
                        </div>
                        <div className="form-group">
                            <input type="name" name="subject" placeholder='Your Subject' />
                        </div>
                        <div className="form-group">
                            <textarea name="message" required placeholder='Your Message'></textarea>
                        </div>
                        <button className="send-button">Send</button>
                    </form>
                    <p className='result-para'>{result}</p>
                </div>

                <div className="contactDivText">
                    <div className="contact-header">
                        <p className='Contact'><span>Contact</span> Me</p>
                        <div className="header-decoration"></div>
                    </div>
                    <p className='contactDics'>
                        Feel free to reach out to me for any collaboration, project inquiries, or just a tech chat! I'm always open to discussing new ideas and opportunities.
                    </p>
                    <p className='contactDics'>
                        You can contact me via email or connect with me on social media.
                    </p>
                    <p className='contactDics'>
                        Let's create something amazing together!❤️
                    </p>
                    <div className="locationDiv">
                        <a href="https://www.google.com/maps/place/Paniwah+192231/@33.6874497,75.0244508,15.62z/data=!4m6!3m5!1s0x38e203dad859277f:0x5cdab1809184a25b!8m2!3d33.6875413!4d75.0275272!16s%2Fg%2F12hl353jn?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" className="social-icon location-icon">
                            <i className="fa-solid fa-location-pin"></i>
                        </a>
                        <a href="https://www.instagram.com/xain_khanday?igsh=bXQxaW9ocmF6aDRu" className="social-icon instagram-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mudabir-kowsar-34783a256/" className="social-icon linkedin-icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/mudabirkowsar" className="social-icon github-icon">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact