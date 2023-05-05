import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
const Home = () => {
    return (
            <div>
            <Fade duration={2000}>
                <div className="section-header">
                    <h1>/home</h1>
                </div>
            </Fade>
            <Fade direction="right">
                <p>Lorem ipsum dolor sit amet.</p>
            </Fade>
            </div>
    )
}

export default Home;