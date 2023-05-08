import "../styles/Experience.css";
import JobList from "./JobList";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
    return (
            <div>
            <Fade duration={2000}>
                <div className="section-header">
                    <h1>/experience</h1>
                </div>
            </Fade>
            <JobList />
            <div className="experience-container">
                {/* <p>experience list here</p>
                <p>list technical skills here</p> */}
            </div>
            </div>
    )
}

export default Experience;