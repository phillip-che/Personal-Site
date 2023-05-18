import { Spotify } from "react-spotify-embed"
import { Fade } from "react-awesome-reveal"
const SpotifyDisplay = ({nowPlaying, recentlyPlayed, topTracks}) => {            
    return (
        <div id="spotify">

            <div className="now-playing-container">
                <Fade direction="up">
                    <p>Currently Playing</p>
                    <Spotify 
                    className="now-playing-track"
                    // wide 
                    link={`https://open.spotify.com/track/${nowPlaying.id}`} 
                    />
                </Fade>
            </div>

            {/* <div className="spotify-other-container"> */}

                <div className="recently-played-container">
                    <p>Recently Played</p>
                    {recentlyPlayed && recentlyPlayed.map((track) => (
                        <Fade direction="up" duration={2000} delay={1000}>
                        <Spotify 
                            className="track" 
                            wide 
                            link={`https://open.spotify.com/track/${track.songID}`} 
                            />
                        </Fade>
                    ))}
                </div>

                <div className="top-tracks-container">
                    <p>Top Tracks This Month</p>
                    {topTracks && topTracks.map((track) => (
                        <Fade direction="up" duration={2000} delay={100}>
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