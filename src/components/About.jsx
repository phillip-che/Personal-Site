import "../styles/About.css";
import { Fade } from "react-awesome-reveal";
const About = () => {
    return (
        <Fade duration={2000} cascade>
            <div className="about">
                <h1>/about</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Fade>
    )
}

export default About;