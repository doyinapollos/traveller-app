import { ActionTypes } from "../constants/actionTypes";

export const getWeather = (weatherInfo) => {
    return {
        type: ActionTypes.WEATHER,
        payload: weatherInfo
    }
}

export const getCurrentWeather = (currentInfo) => {
    return {
        type: ActionTypes.CURRENT_WEATHER,
        payload: currentInfo
    }
}

export const getRecreation = (recreationInfo) => {
    return {
        type: ActionTypes.RECREATION,
        payload: recreationInfo
    }
}

export const getAdvice = (adviceInfo) => {
    return {
        type: ActionTypes.ADVICE,
        payload: adviceInfo
    }
}