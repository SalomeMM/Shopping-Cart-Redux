/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_PRODUCT_TO_CART,
  GET_NUMBERS_IN_BASKET,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: {
    banana: {
      name: "Banana",
      tagName: "banana",
      price: 1,
      numbers: 0,
      inCart: false,
    },
    lemon: {
      name: "Lemon",
      tagName: "lemon",
      price: 3,
      numbers: 0,
      inCart: false,
    },
    mandarine: {
      name: "Mandarine",
      tagName: "mandarine",
      price: 2,
      numbers: 0,
      inCart: false,
    },
    raspberries: {
      name: "Raspberries",
      tagName: "raspberries",
      price: 5,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let selectedProduct = "";
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      selectedProduct = { ...state.products[action.payload] }; // grab state and name (payload) of the item I am clicking
      selectedProduct.numbers += 1; // whatever was there plus 1
      selectedProduct.inCart = true;
      console.log(selectedProduct);
      return {
        ...state, // grab previous state
        cartNumbers: state.cartNumbers + 1, // state that I want to bring whenever we pass an action of add product to cart to this reducer
        cartCost: state.cartCost + state.products[action.payload].price, // update to cart cost + product price
        products: {
          ...state.products, // grab previous products
          [action.payload]: selectedProduct, // update to the updated object
        },
      };
    case GET_NUMBERS_IN_BASKET:
      return {
        ...state, // whatever the state is from before
      };
    case INCREASE_AMOUNT:
      selectedProduct = { ...state.products[action.payload] }; // action.payload = product tagName
      selectedProduct.numbers += 1;
      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price, // cost = initial cost + product price
        products: {
          ...state.products, // initial products list
          [action.payload]: selectedProduct,
        },
      };
    case DECREASE_AMOUNT:
      selectedProduct = { ...state.products[action.payload] }; // action.payload = product tagName
      let newCartCost = 0;
      let newCartNumbers = 0;
      if (selectedProduct.numbers === 0) {
        // avoid showing negative amount of products
        selectedProduct.numbers = 0;
        newCartCost = state.cartCost;
        newCartNumbers = state.cartNumbers;
      } else {
        selectedProduct.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price; // cost = initial cost + product price
        newCartNumbers = state.cartNumbers - 1;
      }

      return {
        ...state,
        cartNumbers: newCartNumbers,
        cartCost: newCartCost,
        products: {
          ...state.products, // initial products list
          [action.payload]: selectedProduct,
        },
      };
    case DELETE_PRODUCT:
      selectedProduct = { ...state.products[action.payload] };
      let productsBefore = selectedProduct.numbers; // how many products were there before clicking "delete"

      selectedProduct.numbers = 0;
      selectedProduct.inCart = false;
      return {
          ...state,
          cartNumbers: state.cartNumbers - productsBefore,
        cartCost: state.cartCost - productsBefore * selectedProduct.price,
        products: {
          ...state.products, // initial products list
          [action.payload]: selectedProduct,
        },
      };
    
    default:
      return state;
  }
};