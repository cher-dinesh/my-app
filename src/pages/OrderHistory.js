import React, { useEffect, useState,cartQuantity } from 'react';
import Navbar from '../components/Navbar';
import '../styles/history.css';

const OrderHistory = (loggedInUser,handleLogout) => {
  const [failedOrder, setFailedOrder] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('failedOrder');
    if (storedOrder) {
      setFailedOrder(JSON.parse(storedOrder));
    }
  }, []);

  return (
    <div className="history-container">
    <Navbar loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout}/>
      <h2>Order History</h2>
      {failedOrder ? (
        <div>
          <h3>Your last order attempt:</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Menu Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {failedOrder.cartItems.map(item => (
                <tr key={item.menuId}>
                  <td>{item.menuName}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="alert alert-warning">This order could not be processed. Please try again.</p>
          <h4>Total Amount: ${failedOrder.totalAmount.toFixed(2)}</h4>
        </div>
      ) : (
        <p>No failed orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
