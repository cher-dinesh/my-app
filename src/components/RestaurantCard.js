import React from 'react';
import '../styles/home.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card restaurant-card">
        <a href={`/menu?restaurantId=${restaurant.restaurantId}`} className="card-link">
          <img src="https://wallpaperaccess.com/full/3014596.jpg" alt={restaurant.restaurantName} className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">{restaurant.restaurantName}</h4>
            <div className="card-rating">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
              <span>{restaurant.ratings}</span>
            </div>
            <p className="card-text"><strong>Address:</strong> {restaurant.address}</p>
            <p className="card-text"><strong>Delivery in:</strong> {restaurant.deliveryTime} minutes</p>
            <p className="card-text"><strong>Cuisine Type:</strong> {restaurant.cuisineType}</p>
            <p className="card-text"><strong>Active:</strong> {restaurant.isActive ? 'Yes' : 'No'}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default RestaurantCard;
