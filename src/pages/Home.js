import React, { Component, useState, useEffect } from 'react'
import logo from "../assets/img/logo.jpg";
import videoThumnail from "../assets/img/intro.jpg";
import playerIcon from "../assets/img/play-icon.png";

export default function Home({ playYoutube, toggleYoutube, toggleSpotify }) {
    useEffect(() => {
        window.youtubeMouseOver= false;
        window.addEventListener('blur',function(){
            if(window.youtubeMouseOver){
                toggleSpotify(false);
                window.youtubeMouseOver= false;
            }
        });
    }, []);
    return (
        <div class="slide">
            <div className="page-header">
                <div className="grid">
                <a href="/" className="logo">
                    <img src={logo} alt="" width="200"/>
                </a>
                <div className="social-media">
                    <ul>
                        <li><a href="#" className="social-media-icon youtube">youtube</a></li>
                        <li><a href="#" className="social-media-icon facebook">facebook</a></li>
                        <li><a href="#" className="social-media-icon instagram">instagram</a></li>
                        <li><a href="#" className="social-media-icon spotify">spotify</a></li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="page">
                <div className="home">
                    <div
                        className={playYoutube ? 'video is-playing' : 'video is-pausing'}
                        style={{backgroundImage: (!playYoutube) ? `url(${videoThumnail})` : 'none'}}
                        onMouseOver={() => window.youtubeMouseOver = true}
                        onMouseOut={() => window.youtubeMouseOver = false}
                    >
                        {playYoutube ? <div className="coverIframe"></div> : null}
                        {playYoutube ? <iframe
                            id="videoIframe"
                            width="560"
                            height="315"
                            src={"https://www.youtube.com/embed/pxLyqx1Wvqc?controls=0&modestbranding=1&showinfo=0&rel=0&start=941" + ((playYoutube) ? '&autoplay=true' : '')}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        /> : null}
                        <button
                            onClick={() => toggleYoutube(!playYoutube)}
                            className={!playYoutube ? 'player-icon is-visible' : 'player-icon is-hidden'}
                        >
                            <img src={playerIcon} alt="" width="50"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
