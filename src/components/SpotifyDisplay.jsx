import { Spotify } from "react-spotify-embed"
import { Fade } from "react-awesome-reveal"
const SpotifyDisplay = ({nowPlaying, recentlyPlayed, topTracks}) => {            
    return (
        <div id="spotify">

            <div className="now-playing-container">
                <p>Currently Playing</p>
                <Fade direction="up" duration={1000} delay={1000}>
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
                    {recentlyPlayed && recentlyPlayed.map((track, i) => (
                        <Fade direction="up" duration={1000} delay={1000 + (i*100)}>
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
                    {topTracks && topTracks.map((track, i) => (
                        <Fade direction="up" duration={1000} delay={1000 + (i*100)}>
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