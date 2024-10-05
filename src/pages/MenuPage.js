import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard'; 
import '../styles/menu.css';

function MenuPage({loggedInUser,handleLogout}) {
  const [menuItems, setMenuItems] = useState([]);
  const restaurantId = new URLSearchParams(window.location.search).get('restaurantId');
  const [cartQuantity, setCartQuantity] = useState(0);

  const sampleMenuData = [
    {
      menuId: 1,
      menuName: 'Chicken Biryani',
      description: 'Aromatic and flavorful rice dish with spices and chicken.',
      price: 12.99,
      available: true,
    },
    {
      menuId: 2,
      menuName: 'Sushi Platter',
      description: 'An assortment of fresh sushi rolls.',
      price: 19.99,
      available: true,
    },
    {
      menuId: 3,
      menuName: 'Margherita Pizza',
      description: 'Classic pizza with tomatoes, mozzarella, and basil.',
      price: 10.99,
      available: false,
    },
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`/api/menu?restaurantId=${restaurantId}`);
        if (response.ok) {
          const data = await response.json();
          setMenuItems(data.menuItems);
        } else {
          setMenuItems(sampleMenuData);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuItems(sampleMenuData);
      }
    };

    fetchMenu();
    const storedQuantity = localStorage.getItem('cartQuantity');
    setCartQuantity(storedQuantity ? parseInt(storedQuantity, 10) : 0);
  }, [restaurantId]);

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const totalQuantity = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(totalQuantity);
    localStorage.setItem('cartQuantity', totalQuantity);
  };

  return (
    <section className="nav-section">
        <Navbar loggedInUser={loggedInUser} cartQuantity={cartQuantity} handleLogout={handleLogout}/>
        <h1 className="my-4 text-center">Menu</h1>
        <div className="menu-container">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <MenuCard key={item.menuId} item={item} restaurantId={restaurantId} updateCartCount={updateCartCount} />
            ))
          ) : (
            <p className="text-center">No menu items found for this restaurant.</p>
          )}
        </div>
    </section>
  );
}

export default MenuPage;
