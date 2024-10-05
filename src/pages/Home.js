import React from 'react';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import RestaurantCard from '../components/RestaurantCard';
import '../styles/home.css';
import Footer from '../components/Footer';

function Home({ loggedInUser, cartQuantity,handleLogout }) {
  const sampleRestaurants = [
    {
      restaurantId: 1,
      restaurantName: "The Great Indian Diner",
      ratings: 4.5,
      address: "123 Food Street, Spice City",
      deliveryTime: 30,
      cuisineType: "Indian",
      isActive: true,
    },
    {
      restaurantId: 2,
      restaurantName: "Sushi Delight",
      ratings: 4.7,
      address: "456 Sushi Avenue, Ocean Town",
      deliveryTime: 40,
      cuisineType: "Japanese",
      isActive: false,
    },
    {
      restaurantId: 3,
      restaurantName: "Pasta Paradise",
      ratings: 4.3,
      address: "789 Pasta Plaza, Carb City",
      deliveryTime: 25,
      cuisineType: "Italian",
      isActive: true,
    },
    {
      restaurantId: 4,
      restaurantName: "Pizza Hunt",
      ratings: 4.6,
      address: "789 Pizza Hunt, Carb City",
      deliveryTime: 17,
      cuisineType: "Italian",
      isActive: true,
    },
    
  ];

  return (
    <>
      <HeroSection loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout}/>
      <CarouselSection />
      <div className="restuarant-container">
        <h1 className="text-center" style={{ color: "#405D72" }}>Restaurants</h1>
        <div className="row">
          {sampleRestaurants.length > 0 ? (
            sampleRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No restaurants available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
