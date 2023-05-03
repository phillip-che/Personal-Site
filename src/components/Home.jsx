import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
const Home = () => {
    return (
        <Fade duration={2000} cascade>
            <div>
                <h1>/home</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </Fade>
    )
}

export default Home;