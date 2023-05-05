import "../styles/NavBar.css";
import { Fade } from "react-awesome-reveal";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = ({setOnHomeClick, setOnAboutClick, setOnProjectsClick, setSection}) => {
    return (
        <Fade direction="left">
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" class="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(true)
                        // setOnAboutClick(false)
                        // setOnProjectsClick(false)
                        setSection(0);
                    }}
                    >/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" class="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(false)
                        // setOnAboutClick(true)
                        // setOnProjectsClick(false)
                        setSection(1);
                    }}
                    >/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" class="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(false)
                        // setOnAboutClick(false)
                        // setOnProjectsClick(true)
                        setSection(2);
                    }}
                    >/projects</a>
                </li>
                <li>
                    <div className="socials">
                        <a href="mailto:phillipche1@gmail.com" target="_blank">
                            <MailOutlineRoundedIcon style={{ fontSize: 25 }}></MailOutlineRoundedIcon>
                        </a>
                        <a href="https://github.com/phillip-che" target="_blank">
                            <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/phillipche" target="_blank">
                            <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
                        </a>
                    </div>
                </li>
            </ul>
        </ div>
        </Fade>
    )
}

export default NavBar;