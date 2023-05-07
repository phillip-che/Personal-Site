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
                <p>you're average boba enjoyer trying to navigate through the struggles of being an aspiring software engineer.</p>
                <p>other interests include real estate, personal finance, and reselling</p>
                {/* display spotify statistics: 5 most recently played tracks, top 5 tracks */}
                {/* perhaps a photo gallery with carousel or deck of cards animation */}
            </Fade>
            </div>
    )
}

export default Home;