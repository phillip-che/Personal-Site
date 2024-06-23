import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import soleexchange from "../assets/soleexchange1.png"
import jit from "../assets/jit.jpg"
import spotifydash from "../assets/spotifydash.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import cypherchat from "../assets/cypherchat.png";

const Projects = () => {

    const projectList = {
        "Cypher Chat": {
            description: "Secure client-server chat web app enabling real-time and private communication.",
            tech: "TypeScript, React.js, Next.js, Node.js, Express.js, AWS",
            github: "https://github.com/phillip-che/ChatApplication",
            img: cypherchat
        },
        "Sole Exchange": {
            description: "Forum that allows users to post, interact, and search about anything sneaker related.",
            tech: "JavaScript, React.js, Node.js, Supabase",
            github: "https://github.com/phillip-che/Sneaker-Forum",
            img: soleexchange
        },
        "Just In Time": {
            description: "Platform that lets users buy soon-to-expire groceries from participating stores at a discount.",
            tech: "JavaScript, React.js, Node.js, Supabase",
            github: "https://github.com/phillip-che/Just-In-Time",
            img: jit
        },
        "Spotify Data Dashboard": {
            description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
            tech: "JavaScript, React.js, Node.js, Spotify API, Recharts API",
            github: "https://github.com/phillip-che/Data-Dashboard",
            img: spotifydash
        }
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div id="projects">
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>/projects</h1>
                </div>
            </Fade>
            <div className="carousel-container"></div>
            <Fade direction="right">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    {Object.keys(projectList).map((key, i) => (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={projectList[key].img}
                            alt= {i + " slide"}
                            />
                            <Carousel.Caption>
                                <h3 className="project-name">{key}</h3>
                                <div className="project-caption">
                                    <p className="project-desc">{projectList[key].description}</p>
                                    <p className="tech">{projectList[key].tech}</p>
                                    <a className="project-icon effect-shine" href={projectList[key].github} target="_blank">
                                        <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Fade>
        </div>
    )
}

export default Projects;