import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
const Home = () => {
    return (
        <Fade duration={2000}>
            <div>
            <div className="section-header">
                <h1>/home</h1>
            </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </Fade>
    )
}

export default Home;