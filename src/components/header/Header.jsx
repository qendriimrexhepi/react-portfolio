import "./header.css"
import Me from "../../img/aboutme-removebg.png"
import Resume from "../../img/Resume.pdf"

const Intro = () => {
    return (
        <div className="h">
            <div className="h-left">
                <div className="h-left-wrapper">
                    <h2 className="h-intro">Hello, My name is</h2>
                    <h1 className="h-name">Qëndrim Rexhepi</h1>
                    <div className="h-title">
                        <div className="h-title-wrapper">
                            <div className="h-title-item">Frontend Developer</div>
                            <div className="h-title-item">UI/UX Designer</div>
                            <div className="h-title-item">Content Creator</div>
                        </div>
                    </div>
                    <div className="h-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eius, distinctio reprehenderit commodi possimus tempora nesciunt voluptatibus mollitia!
                        Doloribus, provident! Iusto tempora laboriosam pariatur reprehenderit aut soluta esse eius tempore repudiandae.
                    </div>
                    <div className="h-resume">
                        <a href={Resume} download className="btn">Download CV</a>
                        <a href="#c" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </div>
            <div className="h-right">
                <div className="h-bg"></div>
                <img src={Me} alt="" className="h-img"/>
            </div>
        </div>
    )
}

export default Intro
