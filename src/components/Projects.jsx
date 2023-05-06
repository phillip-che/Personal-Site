import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";
import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import soleexchange from "../assets/soleexchange1.png"
import jit from "../assets/jit.jpg"
import spotifydash from "../assets/spotifydash.png"

const Projects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div id="projects">
            <Fade duration={2000}>
                <div className="section-header">
                    <h1>/projects</h1>
                </div>
            </Fade>
            <div className="carousel-container"></div>
            <Fade direction="right">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={soleexchange}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Sole Exchange</h3>
                        <div className="project-caption">
                            <p className="project-desc">A forum that allows users to freely express their opinions on anything sneaker related.</p>
                            <p className="tech-stack">JavaScript, React.js, Node.js, Supabase</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={jit}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Just In Time</h3>
                            <div className="project-caption">
                                <p className="project-desc">A platform that enables customers to buy soon-to-expire groceries from participating stores at a discount  .</p>
                                <p className="tech-stack">JavaScript, React.js, Node.js, Supabase</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={spotifydash}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Spotify Data Dashboard</h3>
                        <div className="project-caption">
                            <p className="project-desc">Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.</p>
                            <p className="tech-stack">JavaScript, React.js, Node.js, Spotify API, Recharts API</p>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fade>
        </div>
    )
}

export default Projects;