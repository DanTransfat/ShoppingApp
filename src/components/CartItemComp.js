import React from 'react';
import '../styles/HomeStyle'

const CartItem = ({ product, RemoveFromCart }) => {

  // const RemoveFromCart = (productId) => {
  //   fetch("https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts/${productId}", {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       console.log('Product removed from cart successfully');
  //     } else {
  //       console.error('Failed to remove product from cart');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // };

  // console.log(product)
  let imageurl = "data:image/jpeg;base64," + product.product.image.image
  return (
    <div className="item-box" style={{ width: '400px', height: '600px' }}>
      <img src={imageurl} style={{ width: 'auto', height: '200px' }} />
      <h3>{product.product.productName}</h3>
      <p>Product Description: {product.product.productDescription}</p>
      <button onClick={() => RemoveFromCart(product.product.productId)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;