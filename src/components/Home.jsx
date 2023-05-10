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

// image imports
import img1 from "../assets/nap.jpg"
import img2 from "../assets/seattleferris.jpg"
import img3 from "../assets/dogcode.jpg"
import img4 from "../assets/leetcode.jpg"
import img5 from "../assets/hawaiihike.jpg"
import img6 from "../assets/hike.jpg"
import img7 from "../assets/bike.jpg"
import img8 from "../assets/snow.jpg"
import img9 from "../assets/sunset.jpg"
import img10 from "../assets/art.jpg"

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
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img2} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img3} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img4} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img5} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img6} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img7} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img8} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img9} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img10} />
                    <div className="card-desc">
                        <h5>Location</h5>
                        <h6>4/4/22</h6>
                        <p>asdfasdf</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            </Fade>
            </div>
    )
}

export default Home;