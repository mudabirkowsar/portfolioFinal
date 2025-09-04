import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='contactMainDiv'>
            <div className="contactDiv">
                <div className="inputDiv">
                    <p><span>Send</span> Message</p>
                    <input type="text" name="" id="" placeholder='Your Name' />
                    <br />
                    <input type="text" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="text" name="" id="" placeholder='Your Subject' />
                    <br />
                    <textarea name="" id="" placeholder='Your Message'></textarea>
                    <br />
                    <button>Send</button></div>
                <div className="contactDivText">
                    <p className='Contact'><span>Contact</span> Me</p>
                    <p className='contactDics'>Feel free to reach out to me for any collaboration, project inquiries, or just a tech chat! I'm always open to discussing new ideas and opportunities.  <br /><br /> You can contact me via email or connect with me on social media.<br /><br /> Let’s create something amazing together!❤️</p>
                    <div className="locationDiv">
                        <a href="https://www.google.com/maps/place/Paniwah+192231/@33.6874497,75.0244508,15.62z/data=!4m6!3m5!1s0x38e203dad859277f:0x5cdab1809184a25b!8m2!3d33.6875413!4d75.0275272!16s%2Fg%2F12hl353jn?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"><i class="fa-solid fa-location-pin"></i></a>
                        <br />
                        <a href="https://www.instagram.com/xain_khanday?igsh=bXQxaW9ocmF6aDRu"><i class="fa-brands fa-instagram"></i></a>
                        <br />
                        <a href="https://www.linkedin.com/in/mudabir-kowsar-34783a256/"><i class="fa-brands fa-linkedin"></i></a>
                        <br />
                        <a href="https://github.com/mudabirkowsar"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact