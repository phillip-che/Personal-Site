import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from 'buffer';
import { useMediaQuery } from 'react-responsive'
import SpotifyDisplay from "./SpotifyDisplay";

const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_APP_REFRESH_TOKEN;

const Home = () => {

    const laptopScreen = useMediaQuery({ query: '(max-width: 1400px)' });

    const [nowPlaying, setNowPlaying] = useState(null);
    const [topTracks, setTopTracks] = useState(null);
    const [recentlyPlayed, setRecentlyPlayed] = useState(null);

    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
    const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
    const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    
    const getAccessToken = async () => {

        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        params.append("refresh_token", REFRESH_TOKEN);

        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString()
        })

        // return result;
        return response.json()
    }

    // gets now playing song
    const getNowPlaying = async () => {
        const { access_token } = await getAccessToken()

        await axios(NOW_PLAYING_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        }).then((response) => {
            setNowPlaying(response.data.item)
            console.log(response.data.item)
        })
    }
    
    // gets my top tracks
    const getTopTracks = async () => {
        const { access_token } = await getAccessToken()

        await axios(TOP_TRACKS_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        }).then((response) => {
            let num = 5;
            if(laptopScreen) {
                num = 3;
            }
            const tracks = response.data.items.slice(0, num).map((track) => ({
                songID: track.id,
                artist: track.artists.map((_artist) => _artist.name).join(', '),
                songUrl: track.external_urls.spotify,
                title: track.name,
            }));
            setTopTracks(tracks);
            console.log(tracks);
            console.log(response);
        })
    }

    // get recently played tracks
    const getRecentlyPlayed = async () => {
        const { access_token } = await getAccessToken()

        await axios(RECENTLY_PLAYED_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        }).then((response) => {
            let num = 5;
            if(laptopScreen) {
                num = 3;
            }
            const tracks = response.data.items.slice(0, num).map((track) => ({
                songID: track.track.id,
                playedAt: track.played_at,
                artist: track.track.artists.map((_artist) => _artist.name).join(', '),
                songUrl: track.track.external_urls.spotify,
                title: track.track.name,
            }));
            console.log(tracks);
            console.log(response);
            setRecentlyPlayed(tracks);
        })
    }
      
    useEffect(() => {
        getTopTracks();
        getNowPlaying();
        getRecentlyPlayed();
    }, [])


    return (
            <div>
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/home</h1>
                    </div>
                </Fade>
                <Fade direction="right" triggerOnce>
                    <p>your average boba enjoyer from socal trying to navigate through the struggles of becoming a software engineer.</p>
                    <p>i'm probably playing video games with friends, listening to music, or watching Netflix right now.</p>
                    <p>this is what i'm listening to on Spotify these days. . .</p>
                </Fade>
                    <SpotifyDisplay 
                    nowPlaying={nowPlaying}
                    recentlyPlayed={recentlyPlayed}
                    topTracks={topTracks}
                    />
            </div>
    )
}

export default Home;