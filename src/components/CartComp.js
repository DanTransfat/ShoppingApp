import React from 'react';
import CartItemComp from './CartItemComp';
import '../styles/HomeStyle';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ user }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts/person/' + user.id);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [user.id]);

  const RemoveFromCart = async (productId) => {
    try {
      const response = await fetch(`https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts/person/${user.id}/product/${productId}`);
      const data = await response.json();
      await fetch(`https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts/${data.cartId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProducts(prevItems => prevItems.filter(item => item.product.productId !== productId));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {products.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div className="cart-items-container">
          {products.map((product) => (
            <CartItemComp key={product.id} product={product} RemoveFromCart={RemoveFromCart} />
          ))}
        </div>
      )}
      {products.length > 0 && (
        <button onClick={() => navigate('/checkout' , { state: { user, products }})}>Checkout</button>
      )}
    </div>
  );
};

export default Cart;