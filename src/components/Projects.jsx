import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
            <div>
            <Fade duration={2000}>
                <div className="section-header">
                    <h1>/projects</h1>
                </div>
            </Fade>
            <Fade direction="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Fade>
            </div>
    )
}

export default Projects;