import { combineReducers, createStore } from "redux";
import CountReducer from "./reducers/countReducer";
import authReducer from "./reducers/authReducer";


const allReducers = combineReducers({
    CountReducer, authReducer
})
export const store = createStore(allReducers)