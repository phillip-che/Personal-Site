import "../styles/NavBar.css";
import { Fade } from "react-awesome-reveal";

const NavBar = ({setOnHomeClick, setOnAboutClick, setOnProjectsClick}) => {
    return (
        <Fade direction="left">
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" class="effect-underline"
                    onClick={() => {
                        setOnHomeClick(true)
                        setOnAboutClick(false)
                        setOnProjectsClick(false)
                    }}
                    >/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" class="effect-underline"
                    onClick={() => {
                        setOnHomeClick(false)
                        setOnAboutClick(true)
                        setOnProjectsClick(false)
                    }}
                    >/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" class="effect-underline"
                    onClick={() => {
                        setOnHomeClick(false)
                        setOnAboutClick(false)
                        setOnProjectsClick(true)
                    }}
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