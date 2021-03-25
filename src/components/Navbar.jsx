import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <header>
      <div className="overlay">
        <nav>
          <h2 className="shop-name">The Fruits Shop</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="cart">
              <Link to="/cart">
                <ion-icon name="cart-outline"></ion-icon>Cart <span>({ props.cartProps.cartNumbers })</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  cartProps: state.cartState // comes from index.js
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
// export default connect(*state*, *function*)(Home);
