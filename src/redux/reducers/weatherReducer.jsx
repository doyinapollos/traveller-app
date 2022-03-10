
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

     
     const firstState = {
        checkCurrentWeather: []
    }


export const currentWeatherReducer = (state = firstState, {type, payload}) => {
    switch (type) {

       case ActionTypes.CURRENT_WEATHER:
           return {...state, checkCurrentWeather: payload};
    
        default:
            return state;
    }
}