import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFruits } from '../redux/Fruits/Fruit';
import Fruit from './Fruit';

function Fruits() {
    const dispatch = useDispatch()
    const fruits = useSelector((state) => state.fruit)

    useEffect(() => {
        dispatch(getFruits())
    }, [])

    return (
        <div>
            {fruits.map((fruit)=> (
                <Fruit 
                    key={fruit.id}
                    name={fruit.name}
                    id={fruit.id}
                    calories={fruit.calories}
                    genus={fruit.genus}
                    family={fruit.family}
                    order={fruit.order}
                    />
            ))}
        </div>
    )
}

export default Fruits