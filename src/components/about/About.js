import React from 'react'
import "../../style/style.css"
import Resume from "../../img/Resume.pdf"
import Follow from "../../img/qendrimi.jpeg";

const About = () => {
    return (
        <div className="s2">
            <div className="main-container">

                <div className="about-wrapper">
                    <div className="about-me">
                        <h4 className="aboutme">more about me;</h4>
                        <h4 className="about-top">TOP EXPERTISE</h4>
                        <p>Fullstack developer with primary focus on : React JS and PHP <a target="_blank" rel="noreferrer" href={Resume}>Download Resume</a></p>

                        <div className="skills">
                            <ul>
                                <li>HTML/CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Wordpress (Basics)</li>
                            </ul>

                            <ul>
                                <li>NodeJS and ExpressJs</li>
                                <li>SQL/MYSQL</li>
                                <li>PHP (Basics)</li>
                            </ul>

                        </div>

                    </div>


                    <div className="social-links">
                        <img className="social_img" src={Follow} alt="" />
                        <h3 className="social-me">Find me on GitHub and LinkedIn</h3>

                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/qendrimr06/">LinkedIn : Qëndrim Rexhepi</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/qendriimrexhepi">GitHub : Qëndrim Rexhepi</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
