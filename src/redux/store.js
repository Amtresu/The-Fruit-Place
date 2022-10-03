import {
    combineReducers,
    configureStore,
    applyMiddleware,
  } from '@reduxjs/toolkit';
  import thunk from 'redux-thunk';
import fruitReducer from './Fruits/Fruit'


  const rootReducer = combineReducers({
    fruit: fruitReducer,
  });
  
  const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
  
  export default store;
