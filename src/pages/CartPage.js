import React, { useEffect, useState } from 'react';
import '../styles/cart.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from '../components/Navbar';

function CartPage({ loggedInUser, cartQuantity, setCartQuantity }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || {};
    console.log('Cart items retrieved from local storage:', items);
    const cartArray = Object.entries(items).map(([id, item]) => ({
      ...item,
      menuId: id,
    }));
    setCartItems(cartArray);

    const total = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);

    setCartQuantity(cartArray.reduce((acc, item) => acc + item.quantity, 0));
  }, [setCartQuantity]);

  const updateQuantity = (menuId, delta) => {
    const updatedItems = cartItems.map(item => {
      if (item.menuId === menuId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) return null;
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item !== null);

    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    calculateTotal(updatedItems);

    setCartQuantity(updatedItems.reduce((acc, item) => acc + item.quantity, 0));
  };

  const updateLocalStorage = (updatedItems) => {
    const updatedCart = {};
    updatedItems.forEach(item => {
      updatedCart[item.menuId] = item;
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const calculateTotal = (updatedItems) => {
    const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleCheckout = async () => {
    const paymentMethod = 'Credit Card';
    const orderData = {
      cartItems: cartItems,
      totalAmount: totalAmount,
      paymentMethod: paymentMethod,
    };
  
    try {
      const response = await fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to process order');
      }
  
      localStorage.removeItem('cartItems'); 
  
      window.location.href = '/order-success';
    } catch (error) {
      console.error('Error during checkout:', error);
  
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      
      const newOrder = {
        cartItems: cartItems,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        orderDate: new Date().toISOString(),
      };
      orderHistory.push(newOrder);
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  
      localStorage.removeItem('cartItems');
  
      window.location.href = '/order-success';
    }
  };
  

  return (
    <section className="nav-section">
      <Navbar loggedInUser={loggedInUser} cartQuantity={cartQuantity} />
      <h1 className="my-4 text-center">Your Cart</h1>
      <div className="cart-container">
        <h3 className="name">Restaurant:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Menu Name</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">Your cart is empty.</td>
              </tr>
            ) : (
              cartItems.map(item => (
                <tr key={item.menuId}>
                  <td>{item.menuName}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => updateQuantity(item.menuId, -1)} 
                      disabled={item.quantity < 1} 
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      className="btn btn-success btn-sm" 
                      onClick={() => updateQuantity(item.menuId, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
        <button 
          className="btn btn-primary" 
          onClick={handleCheckout} 
          disabled={cartItems.length === 0} 
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default CartPage;
