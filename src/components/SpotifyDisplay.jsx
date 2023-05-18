import { Spotify } from "react-spotify-embed"
import { Fade } from "react-awesome-reveal"
const SpotifyDisplay = ({nowPlaying, recentlyPlayed, topTracks}) => {            
    return (
        <div id="spotify">
            
            <div className="now-playing-container">
                <Fade duration={1000} delay={1000} triggerOnce>
                    <div className="now-playing-header">
                        <p>Currently Playing</p>
                        <div class="center">
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up" duration={1000} delay={1000} triggerOnce>
                    <Spotify 
                    className="now-playing-track"
                    // wide 
                    link={`https://open.spotify.com/track/${nowPlaying.id}`} 
                    />
                </Fade>
            </div>

            {/* <div className="spotify-other-container"> */}

                <div className="recently-played-container">
                    <Fade duration={1000} delay={1000} triggerOnce>
                        <p>Recently Played</p>
                    </Fade>
                    {recentlyPlayed && recentlyPlayed.map((track, i) => (
                        <Fade direction="up" duration={1000} delay={1000 + (i*100)} triggerOnce>
                        <Spotify 
                            className="track" 
                            wide 
                            link={`https://open.spotify.com/track/${track.songID}`} 
                            />
                        </Fade>
                    ))}
                </div>

                <div className="top-tracks-container">
                    <Fade duration={1000} delay={1000} triggerOnce>
                        <p>Top Tracks This Month</p>
                    </Fade>
                    {topTracks && topTracks.map((track, i) => (
                        <Fade direction="up" duration={1000} delay={1000 + (i*100)} triggerOnce>
                            <Spotify 
                            className="track" 
                            wide 
                            link={`https://open.spotify.com/track/${track.songID}`} 
                            />
                        </Fade>
                    ))}
                </div>

            {/* </div> */}
        </div>
    ) 
}

export default SpotifyDisplay