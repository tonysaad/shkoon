import React, { Component } from 'react'
import logo from "../assets/img/logo.jpg";
import videoThumnail from "../assets/img/intro.jpg";
import playerIcon from "../assets/img/play-icon.png";

export default class Home extends Component {
    render() {
        return (
            <div>
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
                        <div className="video">
                            <img src={videoThumnail} alt="" className="bg"/>
                            <button className="player-icon">
                                <img src={playerIcon} alt="" width="50"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
