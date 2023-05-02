import "../styles/NavBar.css";
import { Fade } from "react-awesome-reveal";

const NavBar = ({setOnAboutHover, setOnProjectsHove}) => {
    return (
        <Fade>
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" class="effect-underline">/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" class="effect-underline"
                    onMouseEnter={() => setOnAboutHover(true)}
                    onMouseLeave={() => setOnAboutHover(false)}
                    >/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" class="effect-underline"
                    onMouseEnter={() => setOnProjectsHove(true)}
                    onMouseLeave={() => setOnProjectsHove(false)}
                    >/projects</a>
                </li>
                {/* <li className="navbar-item">
                    <a href="#" class="effect-underline">/contact</a>
                </li> */}
            </ul>
        </ div>
        </Fade>
    )
}

export default NavBar;