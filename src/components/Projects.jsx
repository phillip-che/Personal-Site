import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";
import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/ray.jpg"
import pic2 from "../assets/peterzhou.png"

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
                        src={pic1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Just In Time</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <p>asdasd</p>
                            <p>ioqwu</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Sole Exchange</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Spotify Data Dashboard</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fade>
        </div>
    )
}

export default Projects;