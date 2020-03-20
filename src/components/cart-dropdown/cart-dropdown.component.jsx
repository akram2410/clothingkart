import React from "react";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
    ) : (
      <span className="empty-message"> Cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
