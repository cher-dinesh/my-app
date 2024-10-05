// Ensure you import useState and useEffect from React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import OrderSuccess from './pages/OrderSuccess';
import OrderHistory from './pages/OrderHistory';
import ProfilePage from './pages/ProfilePage';
import './styles/home.css';
import SignUp from './pages/SignUp';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user);
    }
    const storedQuantity = localStorage.getItem('cartQuantity');
    setCartQuantity(storedQuantity ? parseInt(storedQuantity, 10) : 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartQuantity', cartQuantity);
  }, [cartQuantity]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartQuantity'); 
    setLoggedInUser(null);
    setCartQuantity(0); 
  };

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/" element={<Home loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path='/signup' element={< SignUp/>} />
          <Route path="/menu" element={<MenuPage loggedInUser={loggedInUser} cartQuantity={cartQuantity} />} />
          <Route path="/cart" element={<CartPage loggedInUser={loggedInUser} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
          <Route path="/order-history" element={<OrderHistory loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout} />} />
          <Route path="/profile" element={<ProfilePage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
