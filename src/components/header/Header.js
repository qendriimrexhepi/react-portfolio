import "../../style/style.css"
import Me from "../../img/aboutme-removebg.png"

const Intro = () => {
    return (
        <div className="s1">
            <div className="main-container">
                <div className="greeting-wrapper">
                    <h1>Welcome to my Portfolio</h1>
                </div>

                <div className="intro-wrapper">
                    <div className="nav-wrapper">

                        <a href="/">
                            <div className="dots-wrapper">
                                <div id="dot-1" className="browser-dot"></div>
                                <div id="dot-2" className="browser-dot"></div>
                                <div id="dot-3" className="browser-dot"></div>
                            </div>
                        </a>

                        <ul className="navigation">
                            <li><a href="#c">Contact</a></li>

                        </ul>
                    </div>

                    <div className="left-column">
                        <img className="profile_pic" src={Me} alt="" />
                        <h4 style={{ textAlign: 'center', lineHeight: 2 }}>Hi, I'm Qëndrim Rexhepi</h4>

                        <p className="settings-note">I'm a software engineer and a problem solver</p>
                    </div>

                    <div className="right-column">
                        <div className="preview-shadow">
                            <div className="preview">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <h3>What I Do</h3>
                                <p>Im a final year student at University for bussines and technology-UBT ,
                                freelancing programer with knowledge on front and backend technology
			                        </p>
                                <div id="corner-br" className="corner"></div>
                                <div id="corner-bl" className="corner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Intro
