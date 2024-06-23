import "../styles/Experience.css";
import JobList from "./JobList";
import { Fade } from "react-awesome-reveal";

const Experience = () => {

    const tech_stack = [
        "Java",
        "JavaScript",
        "Typescript",
        "Python",
        "Kotlin",
        "React.js",
        "Node.js",
        "HTML/CSS",
        "AWS",
        "MongoDB",
        "MySQL",
        "PostgreSQL"
    ];

    return (
            <div className="experience-container">
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/experience</h1>
                    </div>
                </Fade>
                <div className="skills-container">
                    <ul className="tech-stack">
                        {tech_stack.map((item, i) => (
                            <Fade 
                            key={i}
                            triggerOnce
                            direction='up' 
                            delay={`${i*5}`} 
                            >
                                <li key={item}>{item}</li>
                            </Fade>
                        ))}
                    </ul>
                </div>
                <JobList />
            </div>
    )
}

export default Experience;