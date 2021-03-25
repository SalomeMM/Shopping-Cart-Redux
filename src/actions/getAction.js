import { GET_NUMBERS_IN_BASKET } from "./types";

export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting all cart numbers");
        dispatch({
            type: GET_NUMBERS_IN_BASKET // will dispatch this to the reducers
        });
    }
}