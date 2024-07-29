import React from 'react';
import { useState } from 'react';
import '../styles/HomeStyle'

const ItemComp = ({ product, onAddToCart }) => {
  let imageurl = "data:image/jpeg;base64," + product.image.image
  return (
    <div className="item-box" style={{ width: '400px', height: '600px' }}>
      <img src={imageurl} style={{ width: 'auto', height: '200px' }} />
      <h3>{product.productName}</h3>
      <p>Product Description: {product.productDescription}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ItemComp;