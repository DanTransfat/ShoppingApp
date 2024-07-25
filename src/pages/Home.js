import React, { useState } from 'react';
import HomeComp from '../components/HomeComp';
import Cart from '../components/CartComp';
import NavBarComp from "../components/NavBarComp"
import '../styles/Home.css'

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [currentView, setCurrentView] = useState('home');
  
    const handleAddToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const handleViewChange = (view) => {
      setCurrentView(view);
    };
  
    return (
      <div>
        <NavBarComp onViewChange={handleViewChange} />
        {currentView === 'home' ? (
          <HomeComp onAddToCart={handleAddToCart} />
        ) : (
          <Cart items={cartItems} />
        )}
      </div>
    );
};

export default Home;