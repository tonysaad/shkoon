import React, { useEffect, useState } from 'react'
const SPOTIFY_IFRAME = 'https://open.spotify.com/embed/album/3SJvGa6JxFTTHXmG77734G?si=scQhFLNsRwGJ37YpULoB3Q';
export default function Releases({ toggleYoutube, playSpotify, playYoutube }) {
    useEffect(() => {
        window.spotifyMouseOver = false;
        window.addEventListener('blur',function(){
            if(window.spotifyMouseOver){
                toggleYoutube(false);
                window.spotifyMouseOver = false;
            }
        });
    }, [])
    useEffect(() => {
        if(playYoutube) {
            document.querySelector("#spotifyIframe").setAttribute('src', `${SPOTIFY_IFRAME}&volume=0`);
        }
    }, [playYoutube])
    const [cover, toggleCover] = useState(true);
    return (
        <div className="slide">
            <div className="page">
                <div className="grid">
                    <div className="texted-content">
                        <div className="releases">
                            <div
                                id="spotify"
                                onMouseOver={() => window.spotifyMouseOver = true}
                                onMouseOut={() => window.spotifyMouseOver = false}
                            >
                                <div className={cover ? "coverIframe" : "coverIframe is-click"} onClick={() => toggleCover(!cover)}></div>
                                <iframe id="spotifyIframe" src={SPOTIFY_IFRAME} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
