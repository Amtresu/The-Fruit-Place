import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFruits } from '../redux/Fruits/Fruit';
import FruitDetail from './Detail';

function Details() {
    const dispatch = useDispatch()
    let fruits = useSelector((state) => state.fruit)
    fruits =fruits.filter(fruit => fruit.toggle)
    return (
        <div>
            {fruits.map((fruit)=> (
                <FruitDetail 
                    key={fruit.id}
                    name={fruit.name}
                    id={fruit.id}
                    protein={fruit.protein}
                    fat={fruit.fat}
                    sugar={fruit.sugar}
                    calories={fruit.calories}
                    carbohydrates={fruit.carbohydrates}
                    genus={fruit.genus}
                    family={fruit.family}
                    order={fruit.order}
                    toggle={fruit.toggle}
                    />
            ))}
        </div>
    )
}

export default Details