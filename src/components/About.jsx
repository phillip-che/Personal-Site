import "../styles/About.css";
import { Fade } from "react-awesome-reveal";
import me from "../assets/seattle.jpg"

const About = () => {
    return (
        <Fade duration={2000}>
            <div id="about">
                <div className="section-header">
                    <h1>/about</h1>
                </div>
                <div className="about-body">
                <div>
                    <p>
                        I am currently a Computer Science major at <a href="https://www.cpp.edu/index.shtml">Cal Poly Pomona </a> and a Software Development Engineer Intern at <a href="https://www.aboutamazon.com">Amazon</a>. In addition, I am actively searching for software engineering internships for the upcoming fall and spring semesters of 2023 and 2024.
                    </p>
                    <p>
                        Apart from academics, I also run an online sneaker reselling community and business called <a href="https://www.solacenotify.com/">Solace Notify</a>. If I'm not coding, I'll probably be playing video games with friends, listening to music, or watching Netflix. 
                    </p>
                </div>
                <img className="about-image" src={me}></img>
                </div>
            </div>
        </Fade>
    )
}

export default About;