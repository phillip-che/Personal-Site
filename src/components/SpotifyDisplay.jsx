import { Spotify } from "react-spotify-embed"

const SpotifyDisplay = ({nowPlaying, recentlyPlayed, topTracks}) => {            
    return (
        <div>
            Currently listening to . . .
            <Spotify 
            className="now-playing-track" 
            // wide 
            link={`https://open.spotify.com/track/${nowPlaying.id}`} />
            <div>
                {recentlyPlayed && recentlyPlayed.map((track) => (
                    <Spotify 
                    // className="now-playing-track" 
                    wide 
                    link={`https://open.spotify.com/track/${track.songID}`} />
                ))}
            </div>
        </div>
    ) 
}

export default SpotifyDisplay