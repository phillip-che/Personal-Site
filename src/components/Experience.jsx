import "../styles/Experience.css";
import JobList from "./JobList";
import { Fade } from "react-awesome-reveal";

const Experience = () => {

    const tech_stack = [
        "Java",
        "JavaScript",
        "Python",
        "React.js",
        "Node.js",
        "HTML/CSS",
        "MySQL",
        "Supabase"
    ];

    return (
            <div className="experience-container">
                <Fade duration={2000}>
                    <div className="section-header">
                        <h1>/experience</h1>
                    </div>
                </Fade>
                <ul className="tech-stack">
                    {tech_stack.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <JobList />
            </div>
    )
}

export default Experience;