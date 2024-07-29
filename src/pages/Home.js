import React, { useState } from 'react';
import HomeComp from '../components/HomeComp';
import Cart from '../components/CartComp';
import NavBarComp from "../components/NavBarComp"
import { useLocation } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [currentView, setCurrentView] = useState('home');
    const location = useLocation();
    const { user } = location.state
  
    const handleAddToCart = (product) => {

      const requestData = {
        person: {
          id: user.id,
        },
        product: {
          productId: product.productId,
        },
      };

      console.log(JSON.stringify(requestData))

      fetch('https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
    };
  
    const handleViewChange = (view) => {
      setCurrentView(view);
    };

    // console.log(user)
  
    return (
      <div>
        <NavBarComp onViewChange={handleViewChange} />
        {currentView === 'home' ? (
          <HomeComp onAddToCart={handleAddToCart} />
        ) : (
          <Cart user={user} />
        )}
      </div>
    );
};

export default Home;