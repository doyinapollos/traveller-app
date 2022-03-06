
import { ActionTypes } from "../constants/actionTypes";


const initState = {
    checkWeather: []
}

export const weatherReducer = (state = initState, {type, payload}) => {
     switch (type) {
         
        case ActionTypes.WEATHER:
             return {...state, checkWeather: payload};
     
         default:
             return state;
     }
}