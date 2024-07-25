import React from 'react';
import '../styles/HomeStyle'

const ItemComp = ({ product, onAddToCart }) => {
  return (
    <div className="item-box">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ItemComp;