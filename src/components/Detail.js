import React from "react";
import { Link } from "react-router-dom";
import arrow from '../images/down-arrow.png'
import mic from '../images/mic.png'
import settings from '../images/settings.png'


const LaunchDetail = (props) => {
    let { id, name, rocket_type, launch_success, rocket_name, launch_site, launch_date, upcoming, image, } = props

    launch_success = launch_success.toString()
    upcoming = upcoming.toString()


    return (
        <div key={id} className='details-div'>
            <div className="details-nav"> <Link
                id={id}
                type="button"
                to="/the-launch-place"
            ><img src={arrow} alt='back-arrow' className="arrow icon" /> </Link>
                <div>
                    <img src={mic} alt="mic" className="mic icon" />
                    <img src={settings} alt="settings icon" className="settings" />
                </div>
            </div>
            <div>
                <div className="details-header-div">
                    <img src={image} alt='missionpatch' className="details-img"></img>
                    <p className="mission-name">Mission Name<br /> {name}</p>
                </div>
            </div>
            <div className="seperator"><span className="seperator-text">Launch Details</span></div>
            <ul className="details-info-list">
                <li ><span className="list-text">Rocket Name : {rocket_name}</span></li>
                <li className="alt"><span className="list-text">Rocket Type : {rocket_type}</span></li>
                <li> <span className="list-text">Upcoming : {upcoming}</span> </li>
                <li className="alt"><span className="list-text">Launch Site : {launch_site}</span></li>
                <li><span className="list-text">Launch Date : {launch_date}</span></li>
                <li className="alt"><span className="list-text">Launch Success : {launch_success}</span></li>
            </ul>

        </div>

    )
}

export default LaunchDetail