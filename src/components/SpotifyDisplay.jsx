import { Spotify } from "react-spotify-embed"

const SpotifyDisplay = ({nowPlaying}) => {            
    return (
        <div>
            <Spotify 
            className="now-playing-track" 
            // wide 
            link={`https://open.spotify.com/track/${nowPlaying.id}`} />
        </div>
    ) 
}

export default SpotifyDisplay