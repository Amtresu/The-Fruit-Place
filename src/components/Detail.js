import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Fruit from "../redux/Fruits/Fruit";

const FruitDetail = (props) => {
    const dispatch = useDispatch();
    const {id, name, calories, genus, family, order, carbohydrates, fat, protein, sugar,  } = props
    
    const log = () => {
        console.log(props);}
    return ( 
        <div key={id}>
            <Link
                id={id}
                type="button"
                to="/"
            >Back </Link>
            <p>name : {name}</p>
            <p>genus : {genus}</p>
            <p>family : {family}</p>
            <p>order : {order}</p>
            <p>calories : {calories}</p>
            <p>fat : {fat}</p>
            <p>carbohydrates : {carbohydrates}</p>
            <p>protein : {protein}</p>
            <p>sugar : {sugar}</p>
            <button type="button" onClick={log}> log </button>
        </div>

    )
}

export default FruitDetail