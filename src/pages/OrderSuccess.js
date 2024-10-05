import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/order.css';

const OrderSuccess = () => {
  return (
    <div className="confirm-container m-auto">
      <h1 className="text-center">Order Confirmation</h1>
      <div className="alert alert-success text-center">
        <strong>Thank you for your order!</strong> Your payment has been successfully processed.
      </div>
      <div className="text-center">
        <a href="/" className="btn btn-primary">Continue Shopping</a>
      </div>
    </div>
  );
};

export default OrderSuccess;
