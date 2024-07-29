import React, { useState, useEffect } from 'react';
import ItemComp from './ItemComp';
import '../styles/HomeStyle';

const HomeComp = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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