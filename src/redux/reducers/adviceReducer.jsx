import { ActionTypes } from "../constants/actionTypes";


const initialState = {
    travelAdvice: []
}

export const adviceReducer = (state = initialState, {type, payload}) => {
     switch (type) {
         
        case ActionTypes.ADVICE:
             return {...state, travelAdvice: payload};
     
         default:
             return state;
     }
}