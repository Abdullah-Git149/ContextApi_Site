import React, { useContext } from 'react';
import { CartContext } from "../Global/CartContext"
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa"
import StripeCheckOut from "react-stripe-checkout"
const Cart = () => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(CartContext)

  return (
    <div className="cart__container">
      <div className="cart__detail">
        {shoppingCart.map((cartData) => (
          <div className="cart" key={cartData.id}>
            <span className="cart__img">
              <img src={cartData.image} alt="" />
            </span>
            <span className="cart__product__name"> {cartData.name}</span>
            <span className="cart__price">$ {cartData.price}.00</span>
            <span className="inc" onClick={() => dispatch({ type: 'INC', id: cartData.id, cartData })}><FaPlus /></span>
            <span className="cart__qty">{cartData.qty}</span>
            <span className="dec" onClick={() => dispatch({ type: 'DEC', id: cartData.id, cartData })}><FaMinus /></span>
            <span className="total__price">${cartData.price * cartData.qty}</span>
            <span className="trash" onClick={() => dispatch({ type: 'DELETE', id: cartData.id, cartData })}><FaTrashAlt /></span>


          </div>
        ))}
      </div>

      <div className="cart__summary">
        {
          <div className="summary">
            <h2>Cart Summary</h2>
            <div className="total__items">
              <div className="items">Total Items</div>
              <div className="item__count">{qty}</div>
            </div>

            <div className="total__prices">
              <div className="total__price__title">Total Price</div>
              <div className="toal__price__rs">$ {totalPrice}.00</div>
            </div>
            <div className="stripe__section">
              <StripeCheckOut>
                
              </StripeCheckOut>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;