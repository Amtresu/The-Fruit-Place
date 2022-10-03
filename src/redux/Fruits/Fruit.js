/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
const API = 'https://www.fruityvice.com/api/fruit/all'
const initialState = []
const GET_FRUITS = 'GET_FRUITS'
const SHOW_DETAILS ='SHOW_DETAILS'

export const showDetails = (id) => ({
  type: SHOW_DETAILS,
  payload: id,
});

const getFruits = createAsyncThunk(GET_FRUITS, async () => {
    const data = await fetch(API, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
    let item;
    try {
      const api = await data;
      item = api.map((fruit) => ({
        key: fruit.id,
        id: fruit.id,
        name: fruit.name,
        nutritions: fruit.nutritions,
        calories: fruit.nutritions.calories,
        carbohydrates: fruit.nutritions.carbohydrates,
        fat: fruit.nutritions.fat,
        protein: fruit.nutritions.protein,
        sugar: fruit.nutritions.sugar,
        genus: fruit.genus,
        family: fruit.family,
        order: fruit.order,
        toggle: false,
      }));
    } catch (error) {
      console.error('ERR', error);
    }
    return item;
  });

  export default (state = initialState, action) => {
    switch (action.type) {
      case `${GET_FRUITS}/fulfilled`:
        return action.payload;
        case SHOW_DETAILS:
      return state.map((fruit) => {
        if (fruit.id !== action.payload) {
          return fruit;
        }
        console.log(state.filter(x => !!x))
        return  {...fruit, toggle: !fruit.toggle}
      }); 
      default:
        return state;
    }
  };
  export { getFruits };
