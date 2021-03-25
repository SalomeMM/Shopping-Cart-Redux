import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // see all actions in the browser
import thunk from "redux-thunk"; // click on actions and be performed asynchronously
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk]; // help with asynchronous actions
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // pass middleware with thunk
);

export default store;