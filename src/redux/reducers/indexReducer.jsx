
import {combineReducers} from "redux"
import { adviceReducer } from "./adviceReducer"
import { recreationReducer } from "./recreationReducer";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({

    adviceReducer: adviceReducer,
    weatherReducer: weatherReducer,
    recreationReducer: recreationReducer


})

export default rootReducer;