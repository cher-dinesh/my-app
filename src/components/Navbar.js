import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ loggedInUser, cartQuantity, handleLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand brand" to="/">TastyCibos</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded={!isNavCollapsed ? true : false} 
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {loggedInUser ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <sup>{cartQuantity}</sup>
                </Link>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link" 
                  onClick={toggleDropdown} 
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  Profile
                </button>
                {showDropdown && (
                  <ul className="dropdown-menu show" style={{ display: 'block', position: 'absolute', background: 'white' }} onMouseLeave={handleCloseDropdown}>
                    <li>
                      <Link className="dropdown-item" to="/profile" onClick={handleCloseDropdown}>Settings</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-history" onClick={handleCloseDropdown}>Order History</Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <sup>0</sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
