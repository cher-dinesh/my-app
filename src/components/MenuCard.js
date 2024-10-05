import React from 'react';
import '../styles/menu.css';

function MenuCard({ item, restaurantId, updateCartCount }) {
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const { menuId, menuName, price } = item;

    if (cartItems[menuId]) {
      cartItems[menuId].quantity += 1;
    } else {
      cartItems[menuId] = {
        menuName,
        price,
        quantity: 1,
      };
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  };

  return (
    <div className="menu-item card">
      <img 
        className="card-img-top card-img" 
        src={`images/menu${item.menuId}.jpg`} 
        alt={item.menuName} 
      />
      <div className="card-body">
        <h5 className="card-title">{item.menuName}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text"><span className="label">Price:</span> ${item.price}</p>
        <p className="card-text"><span className="label">Available:</span> {item.available ? 'Yes' : 'No'}</p>
        <div>
          <button onClick={addToCart} className="btn btn-primary order-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
