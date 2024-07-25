import React from 'react';
import ItemComp from './ItemComp';
import '../styles/HomeStyle'

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const HomeComp = ({ onAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ItemComp key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomeComp;