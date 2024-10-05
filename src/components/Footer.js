import React from 'react';
import '../styles/home.css';

function Footer() {
  return (
    <footer className="text-white pt-4 pb-4 bg-dark">
      <div className="container1">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We offer a wide range of products and services to meet your needs.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/user" className="text-white">User</a></li>
              <li><a href="/restaurants" className="text-white">Restaurants</a></li>
              <li><a href="/menu" className="text-white">Menu</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:support@example.com" className="text-white">Email Us</a></li>
              <li><a href="tel:+1234567890" className="text-white">Call Us</a></li>
            </ul>
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-white mr-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mr-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
