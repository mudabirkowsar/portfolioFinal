import React from 'react'
import "./Projects.css"

function Projects() {
  return (
    <div className='servicesMainDiv'>
    <p className='servicesText'><span className='spannn'>PROJECTS</span></p>
    <p className='servicesTextpara'>Explore my diverse projects showcasing expertise in full-stack development</p>

    <div className="servicesMainListDiv">

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-1.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>Coffee Shop Website</p>
                    <p className='pDic'>A seamless coffee shop website with online booking and cart functionality.</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-6.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>University Quiz Application</p>
                    <p className='pDic'>A secure university quiz app with user authentication and admin control</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-2.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>Expense Tracker</p>
                    <p className='pDic'>An intuitive expense tracker with user authentication and secure data management.</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-3.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>Cake Zone </p>
                    <p className='pDic'>A feature-rich Cake Zone website with online ordering and admin control.</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-4.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>Meesho Clone </p>
                    <p className='pDic'>A simple Meesho clone built with HTML and CSS for a clean UI.</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>

        <div className="serviceInnerMainDiv"> 
            <div className="projectImageDiv">
                <img src="../../img/work-5.jpg" alt="" />
            </div>
            <div className="projectNameDiv">
                <div className="nameAndDescDiv">
                    <p className='pName'>TODO with React</p>
                    <p className='pDic'>A responsive To-Do app built with React for easy task management.</p>
                </div>
                <div className="btnProjectDiv">
                <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Projects