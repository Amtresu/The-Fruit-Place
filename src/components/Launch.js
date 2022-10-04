import React from "react";
import { useDispatch } from 'react-redux';
import { showDetails } from "../redux/Launches/Launch";
import { Link } from "react-router-dom";
import arrow from '../images/next-icon.svg'

const Launch = (props) => {
    const dispatch = useDispatch();
    const { id, name, year, image } = props

    const showDetails1 = () => {
        dispatch(showDetails(id));
    };
    return (
        <div key={id} className="mission-div">
             <Link
                id={id}
                type="button"
                onClick={showDetails1}
                to="./Details"
            ><img src={arrow} alt='back-arrow' className="home-arrow icon" /> </Link>
            <img src={image} alt='mission patch' className="mission-img"></img>
            <ul className="mission-list">
            <li>{name}</li>
            <li>{year}</li>
            </ul>
        </div>
    )
}

export default Launch