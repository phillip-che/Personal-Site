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

const GalleryCards = () => {
    return (
        <div>
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
                    <div className="card-caption">
                        <h5>UCLA</h5>
                        <h6>4/22/23</h6>
                        <p>power nap after coding for 36 hours at LA Hacks</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img2} />
                    <div className="card-caption">
                        <h5>Seattle</h5>
                        <h6>1/4/23</h6>
                        <p>ferris wheel at night in the rain</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img3} />
                    <div className="card-caption">
                        <h5>Sacramento</h5>
                        <h6>11/26/22</h6>
                        <p>dog coding my CS assignment</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img5} />
                    <div className="card-caption">
                        <h5>Kuli’ou’ou</h5>
                        <h6>8/17/22</h6>
                        <p>hiked for 6 hours in crocs</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img4} />
                    <div className="card-caption">
                        <h5>Honolulu</h5>
                        <h6>8/15/22</h6>
                        <p>leetcode grind don't stop</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img6} />
                    <div className="card-caption">
                        <h5>Somewhere in the Wilderness</h5>
                        <h6>6/12/22</h6>
                        <p>waterfall dried up</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img7} />
                    <div className="card-caption">
                        <h5>Santa Monica</h5>
                        <h6>4/29/23</h6>
                        <p>biking on the beach at night</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img8} />
                    <div className="card-caption">
                        <h5>Lake Tahoe</h5>
                        <h6>1/1/22</h6>
                        <p>knee deep in my problems, and snow.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img9} />
                    <div className="card-caption">
                        <h5>Seattle</h5>
                        <h6>1/5/23</h6>
                        <p>sunset hiking</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img10} />
                    <div className="card-caption">
                        <h5>Bainbridge Island</h5>
                        <h6>1/6/23</h6>
                        <p>pretending like i know what im looking at</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GalleryCards