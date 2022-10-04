import {
    combineReducers,
    configureStore,
    applyMiddleware,
  } from '@reduxjs/toolkit';
  import thunk from 'redux-thunk';
import launchReducer from './Launches/Launch'


  const rootReducer = combineReducers({
    launch: launchReducer,
  });
  
  const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
  
  export default store;
