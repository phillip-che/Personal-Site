import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
import axios from "axios";
const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';

// import required modules
import { EffectCards, Pagination } from "swiper";

import img1 from "../assets/seattle.jpg"
import img2 from "../assets/jit.jpg"
import img3 from "../assets/spotifydash.png"

const Home = () => {

    // useEffect(() => {
    //     const callAPI = async () => {
    //         // cant use this authorization method to get recently played tracks
    //         await axios("https://accounts.spotify.com/api/token", {
    //             headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    //             },
    //             data: "grant_type=client_credentials",
    //             scope: "user-read-recently-played user-top-read",
    //             method: "POST",
    //         }).then((tokenResponse) => {
    //             axios("https://api.spotify.com/v1/me/player/recently-played", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: "Bearer " + tokenResponse.data.access_token
    //                 }
    //             }).then((response) => {
    //                 console.log(response);
    //             })
    //             axios("https://api.spotify.com/v1/me/top/tracks", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: "Bearer " + tokenResponse.data.access_token
    //                 }
    //             }).then((response) => {
    //                 console.log(response);
    //             })
    //             console.log(tokenResponse);
    //         })
    //     }
    //     callAPI();
    // })

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
            <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            pagination={{ 
                clickable: true,
                type: "fraction",
                
            }}
            className="mySwiper"
            >
                <SwiperSlide>
                    <img className="card-img" src={img1} />
                    <p className="card-desc">img1</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img1} />
                    <p className="card-desc">img2</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img1} />
                    <p className="card-desc">img3</p>
                </SwiperSlide>
            </Swiper>
            
            </Fade>
            </div>
    )
}

export default Home;