
import {combineReducers} from "redux"
import { adviceReducer } from "./adviceReducer"
import { recreationReducer } from "./recreationReducer";
import { currentWeatherReducer, weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({

    adviceReducer: adviceReducer,
    weatherReducer: weatherReducer,
    currentWeatherReducer: currentWeatherReducer,
    recreationReducer: recreationReducer


})

export default rootReducer;