import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  productAmount,
  deleteProduct
} from "../actions/productAmount";
import banana from "../images/banana.jpg";
import lemon from "../images/lemon.jpg";
import mandarine from "../images/mandarine.jpg";
import raspberries from "../images/raspberries.jpg";

function Cart({ cartProps, productAmount, deleteProduct }) {
  // deconstruction of props.cartProps
  // console.log(cartProps);

  let productsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {
    // loop through our products and get their key
    // console.log(item);
    // console.log(cartProps.products[item].inCart); // true or false
    if (cartProps.products[item].inCart) {
      // if the product is in the cart
      productsInCart.push(cartProps.products[item]);
      // then push the product into the initially empty array
    }
    // console.log(productsInCart);
  });

  const productImages = (product) => {
    if (product.tagName === "banana") {
      return banana;
    } else if (product.tagName === "lemon") {
      return lemon;
    } else if (product.tagName === "mandarine") {
      return mandarine;
    } else if (product.tagName === "raspberries") {
      return raspberries;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    // console.log("My product is: ");
    // console.log(product);
    return (
      <Fragment key={index}>
        <div className="product">
          <ion-icon
            onClick={() => deleteProduct(product.tagName)}
            name="trash-outline"
          ></ion-icon>
          <img src={productImages(product)} alt={product.name} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">{product.price} €</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productAmount("decrease", product.tagName)}
            className="decrease"
            name="chevron-down-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productAmount("increase", product.tagName)}
            className="increase"
            name="chevron-up-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">{product.numbers * product.price} €</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="cartTotalContainer">
        <h4 className="cartTotalTitle">Cart Total</h4>
        <h4 className="cartTotal">{cartProps.cartCost} €</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { productAmount, deleteProduct })(Cart);
// this connects with our reducer
