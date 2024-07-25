import React from 'react';
import CartItemComp from './CartItemComp';
import '../styles/HomeStyle'

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div className="cart-items-container">
          {items.map((item, index) => (
            <CartItemComp key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;