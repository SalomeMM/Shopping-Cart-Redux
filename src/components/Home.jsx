/* eslint-disable jsx-a11y/anchor-is-valid */
// jshint esversion:6
// eslint-disable no-unused-vars

import React from "react";
import banana from "../images/banana.jpg";
import lemon from "../images/lemon.jpg";
import mandarine from "../images/mandarine.jpg";
import raspberries from "../images/raspberries.jpg";
import { connect } from "react-redux"; // connect component with the data from the store
import { addToCart } from "../actions/addAction";

function Home(props) {
    console.log("home props: ", props);

    let products = props.cartProps.products;

    return (
            <div className="container">
                <div className="image">
                    <img src={banana} alt={products.banana.name} />
                    <h3>{products.banana.name}</h3>
                    <h3> € {products.banana.price}</h3>
                    <a onClick={() => props.addToCart("banana")} className="addToCart cart1">Add to cart</a>
                </div>
                <div className="image">
                    <img src={lemon} alt={products.lemon.name} />
                    <h3>{products.lemon.name}</h3>
                    <h3> € {products.lemon.price}</h3>
                    <a onClick={() => props.addToCart("lemon")} className="addToCart cart2">Add to cart</a>
                </div>
                <div className="image">
                    <img src={mandarine} alt={products.mandarine.name} />
                    <h3>{products.mandarine.name}</h3>
                    <h3> € {products.mandarine.price}</h3>
                    <a onClick={() => props.addToCart("mandarine")} className="addToCart cart3">Add to cart</a>
                </div>
                <div className="image">
                    <img src={raspberries} alt={products.raspberries.name} />
                    <h3>{products.raspberries.name}</h3>
                    <h3> € {products.raspberries.price}</h3>
                    <a onClick={() => props.addToCart("raspberries")} className="addToCart cart4">Add to cart</a>
                </div>
            </div>
        );
}


// const Home = () => {
//     return (
        
//     );
// }


const mapStateToProps = state => ({
  cartProps: state.cartState // comes from index.js
})

export default connect(mapStateToProps, { addToCart })(Home);
// export default connect(*state*, *function*)(Home);