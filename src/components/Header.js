import React from "react";
import link from 'react-router-dom'
import Fruits from "./Fruits";

const Header = () => {
    return (
        <div>
            <header>
                <p> logo place<br /> Holder</p>
                <h1>The Fruit Place</h1>
                <input type='text' placeholder='Search. . .' />
            </header>
            <div>
                <Fruits />
            </div>
        </div>
    )
}

export default Header

