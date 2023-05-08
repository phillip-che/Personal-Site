import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
import axios from "axios";
const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;

const Home = () => {

    useEffect(() => {
        const callAPI = async () => {
            await axios("https://accounts.spotify.com/api/token", {
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
                },
                data: "grant_type=client_credentials",
                method: "POST",
            }).then((token) => {
                console.log(token);
            })
        }
        callAPI();
    })
    
    return (
            <div>
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>/home</h1>
                </div>
            </Fade>
            <Fade direction="right">
                <p>you're average boba enjoyer trying to navigate through the struggles of being an aspiring software engineer.</p>
                <p>other interests include real estate, personal finance, and reselling</p>
                {/* what i'm listening to: display spotify 5 most recently played tracks */}
                {/* perhaps a photo gallery with carousel or deck of cards animation */}
            </Fade>
            </div>
    )
}

export default Home;