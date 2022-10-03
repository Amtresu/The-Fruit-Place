import React from "react";
import { useDispatch } from 'react-redux';
import { showDetails } from "../redux/Fruits/Fruit";
import { Link } from "react-router-dom";

const Fruit = (props) => {
    const dispatch = useDispatch();
    const { id, name, calories, } = props

    const showDetails1 = () => {
        dispatch(showDetails(id));
    };
    return (
        <div key={id}>
            <p>{name}</p>
            <p>{calories}</p>
            <Link
                id={id}
                type="button"
                onClick={showDetails1}
                to="./Details"
            >Details </Link>
        </div>
    )
}

export default Fruit