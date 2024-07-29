import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CheckoutStyle.css'; // Make sure to create and import appropriate styles

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [error, setError] = useState('');
  const location = useLocation();
  const { user, products } = location.state;
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (!shippingAddress.trim()) {
      setError('Shipping address is required');
      return;
    }

    // Clear any previous error
    setError('');

    // Handle the order placement logic here, such as sending order details to the server
    console.log('Order placed successfully');
    await fetch(`https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts/person/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    // Optionally, you can clear the cart or redirect the user
    navigate('/home', { state: { user: user } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address </label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <div className='form-group'>
          {/* Calculate the total price here */}
          Total: $$$
        </div>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {products.map((product) => (
          <div key={product.id} className="order-item">
            <img src={"data:image/jpeg;base64," + product.product.image.image} style={{ width: 'auto', height: '200px' }} />
            <h3>{product.product.productName}</h3>
            <p>Product Description: {product.product.productDescription}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Checkout;