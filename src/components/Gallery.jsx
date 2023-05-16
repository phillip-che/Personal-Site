import "../styles/Gallery.css";
import GalleryCards from "./GalleryCards";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div id="gallery">
        <Fade triggerOnce duration={2000}>
            <div className="section-header">
                <h1>/gallery</h1>
            </div>
        </Fade>
        <Fade direction="right">
            <p>here are some random moments captured along my journey . . .</p>
            <GalleryCards />
        </Fade>
    </div>
  )
}

export default Gallery