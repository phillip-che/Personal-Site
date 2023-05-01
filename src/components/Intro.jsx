import "../styles/Intro.css";
import Typewriter from "typewriter-effect";

const Intro = () => {
    return (
        <div id="intro">
            <Typewriter 
            onInit={(typewriter) => {
                typewriter
                .changeDelay(75)
                .typeString("hi, <strong><span style='color: #E94560;'> phillip <span></strong> here.")
                .start();
            }}
            />
            <div className="description">
                <span> I code occasionally. </span>
                {/* <span> I'm a full time </span>
                <div className="roles">          
                    <Typewriter
                    options={{
                        strings: ['student', 'developer', 'reseller'],
                        autoStart: true,
                        loop: true
                    }}
                    />
                </div> */}
            </div>
            
        </div>
    )
}

export default Intro;