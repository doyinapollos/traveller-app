
import { ActionTypes } from "../constants/actionTypes";


const inState = {
    attraction: []
}

export const recreationReducer = (state = inState, {type, payload}) => {
     switch (type) {
         
        case ActionTypes.RECREATION:
             return {...state, attraction: payload};
     
         default:
             return state;
     }
}