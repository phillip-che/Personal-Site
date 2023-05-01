import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" class="effect-underline">/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" class="effect-underline">/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" class="effect-underline">/projects</a>
                </li>
                <li className="navbar-item">
                    <a href="#" class="effect-underline">/contact</a>
                </li>
            </ul>
        </ div>
    )
}

export default NavBar;