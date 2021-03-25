import { ADD_PRODUCT_TO_CART } from "./types";

export const addToCart = (productName) => {
    return (dispatch) => {
        console.log("Adding to the cart");
        console.log("Product: " + productName);
        dispatch({
            type: ADD_PRODUCT_TO_CART, // will dispatch this to the reducers
            payload: productName
        });
    }
}