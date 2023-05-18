import { Spotify } from "react-spotify-embed"

const SpotifyDisplay = ({nowPlaying, recentlyPlayed, topTracks}) => {            
    return (
        <div id="spotify">
            Currently listening to . . .
            <Spotify 
            className="now-playing-track"
            // wide 
            link={`https://open.spotify.com/track/${nowPlaying.id}`} />
            
            <div className="recently-played-container">
                {recentlyPlayed && recentlyPlayed.map((track) => (
                    <Spotify 
                    className="track" 
                    wide 
                    link={`https://open.spotify.com/track/${track.songID}`} />
                ))}
            </div>
            <div className="top-tracks-container">
                {topTracks && topTracks.map((track) => (
                    <Spotify 
                    className="track" 
                    wide 
                    link={`https://open.spotify.com/track/${track.songID}`} />
                ))}
            </div>
            
        </div>
    ) 
}

export default SpotifyDisplay