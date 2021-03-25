import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

export default combineReducers({
    cartState: cartReducer // create state and its value is what comes from the reducer
});