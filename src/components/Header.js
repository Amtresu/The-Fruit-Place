import React from "react";
import Fruits from "./Launches";
import '../stylesheets/style.css'
import mic from '../images/mic.png'
import settings from '../images/settings.png'
import arrow from '../images/down-arrow.png'
import logo from '../images/spacex-logo-png-transparent.png'
import Launches from "./Launches";

const Header = () => {
    return (
        <div className="header-div">
            <header>
                <div className="header-nav">
                    <div>
                        <img src={arrow} alt='back-arrow' className="arrow icon" />
                    </div>
                    <div>
                        <img src={mic} alt="mic" className="mic icon" />
                        <img src={settings} alt="settings icon" className="settings" />
                    </div>
                </div>
                <div className="logo-div">
                    <img src={logo} alt="logo"className="logo"/>
                    <h1>The Launch Place</h1>
                </div>
            </header>
            <div className="">
                <Launches />
            </div>
        </div>
    )
}

export default Header

