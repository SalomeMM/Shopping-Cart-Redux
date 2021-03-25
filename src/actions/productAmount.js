import {
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DELETE_PRODUCT,
} from "./types";

export const productAmount = (action, name) => {
  return (dispatch) => {
    console.log("inside product amount");
    console.log("the action is ", action);
    console.log("the product name is ", name);

    dispatch({
      type: action === "increase" ? INCREASE_AMOUNT : DECREASE_AMOUNT,
      payload: name,
    });
  };
};

export const deleteProduct = (name) => {
  return (dispatch) => {
    console.log("inside delete product");
    console.log("product name", name);

    dispatch({
      type: DELETE_PRODUCT,
      payload: name,
    });
  };
};