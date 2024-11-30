import "../styles/About.css";
import { Fade } from "react-awesome-reveal";
import me from "../assets/joshuatree.jpg"

const About = () => {
    return (
            <div id="about">
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/about</h1>
                    </div>
                    </Fade>
                    <Fade direction="right">
                    <div className="about-container">
                        <div className="about-text">
                            <Fade direction="up" delay={300}>
                                <p>
                                    I recently graduated from <a className="effect-shine" href="https://www.cpp.edu/index.shtml" target="_blank" rel="noreferrer">Cal Poly Pomona</a> with a B.S in <span className="highlight">Computer Science</span> and am now working as a full-time <span className="highlight">Software Development Engineer</span> at <a className="effect-shine" href="https://www.aboutamazon.com" target="_blank" rel="noreferrer">Amazon</a> in Seattle.
                                </p>
                                <p>
                                    Apart from academics, I am actively looking to invest in real estate in Seattle or Southern California region. Drop a message if you are looking to sell your house!
                                </p>
                                <p>
                                    I also ran an online sneaker reselling community and business called <a className="effect-shine" href="https://www.solacenotify.com/" target="_blank" rel="noreferrer">Solace Notify</a>. My other hobbies include making youtube videos, investing in stocks and crypto, as well as building custom mechanical keyboards!
                                </p>
                            </Fade>
                        </div>
                        <img className="about-image" src={me}></img>
                    </div>
                </Fade>
            </div>
    )
}

export default About;