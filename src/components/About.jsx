import "../styles/About.css";
import { Fade } from "react-awesome-reveal";
import me from "../assets/seattle.jpg"

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
                                    I am currently a <span className="highlight">Computer Science</span> major at <a className="effect-shine" href="https://www.cpp.edu/index.shtml" target="_blank">Cal Poly Pomona </a> and a <span className="highlight">Software Development Engineer Intern</span> at <a className="effect-shine" href="https://www.aboutamazon.com" target="_blank">Amazon</a>. In addition, I am actively searching for software engineering internships for the upcoming fall and spring semesters of 2023 and 2024.
                                </p>
                                <p>
                                    Apart from academics, I also run an online sneaker reselling community and business called <a className="effect-shine" href="https://www.solacenotify.com/" target="_blank">Solace Notify</a>. My other hobbies and interests include real estate, personal finance, and custom mechanical keyboards!
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