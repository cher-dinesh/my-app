import React from 'react';
import Navbar from './Navbar';
import Hero from '../assets/hero.png'
import '../styles/home.css';

function HeroSection({ loggedInUser, cartQuantity,handleLogout }) {
  return (
    <section className="hero-section">
      <Navbar loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout}/>
      <div className="hero-container d-flex align-items-center">
        <div className="details-container">
          <h1 className="title">Deliciously Fast, <br /><span style={{ color: '#F05454' }}>Always Fresh</span></h1>
          <p className="description">Satisfy your cravings with a variety of local delights, delivered hot and fresh right to your door.</p>
          <a href="#" className="btn btn-primary order-btn">Order Now</a>
        </div>
        <img className="hero" src={Hero} alt="Fast Food" />
      </div>
    </section>
  );
}

export default HeroSection;
