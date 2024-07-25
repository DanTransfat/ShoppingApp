import React from 'react';
import '../styles/HomeStyle'

const CartItem = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default CartItem;