/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
const API = 'https://api.spacexdata.com/v3/launches'
const initialState = []
const GET_LAUNCHES = 'GET_LAUNCHES'
const SHOW_DETAILS ='SHOW_DETAILS'
const header = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',}

export const showDetails = (id) => ({
  type: SHOW_DETAILS,
  payload: id,
});

const getLaunches = createAsyncThunk(GET_LAUNCHES, async () => {
    const data = await fetch(API, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json());
    let item;
    try {
      const api = await data;
      item = api.map((launch) => ({
        key: launch.launch_date_unix,
        id: launch.launch_date_unix,
        name: launch.mission_name,
        year: launch.launch_year,
        launch_date: launch.launch_date_utc,
        rocket_name: launch.rocket.rocket_name,
        rocket_type: launch.rocket.rocket_type,
        payloads: launch.rocket,
        launch_site: launch.launch_site.site_name_long,
        launch_success: launch.launch_success,
        details: launch.details,
        image: launch.links.mission_patch_small,
        upcoming: false,
      }));
    } catch (error) {
      console.error('ERR', error);
    }
    return item;
  });

  export default (state = initialState, action) => {
    switch (action.type) {
      case `${GET_LAUNCHES}/fulfilled`:
        if(state == 0 )
        console.log(action.payload.slice(0,30))
        return action.payload.slice(0,30)
        case SHOW_DETAILS:
      return state.map((launch) => {
        if (launch.id !== action.payload) {
          return launch;
        }
        console.log(state.filter(x => !!x))
        return  {...launch, toggle: !launch.toggle}
      }); 
      default:
        return state;
    }
  };
  export { getLaunches };
