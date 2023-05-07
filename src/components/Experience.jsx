import "../styles/Experience.css";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
    return (
            <div>
            <Fade duration={2000}>
                <div className="section-header">
                    <h1>/experience</h1>
                </div>
            </Fade>
            <Fade direction="right">
                <div className="experience-container">
                    <p>experience list here</p>
                    <p>list technical skills here</p>
                </div>
            </Fade>
            </div>
    )
}

export default Experience;