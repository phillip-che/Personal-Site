import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <Fade duration={2000} cascade>
            <div>
            <div className="section-header">
                <h1>/projects</h1>
            </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Fade>
    )
}

export default Projects;