import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import SigninImage from '../assets/signin-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';


const Login = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const sampleUser = {
    email: 'cher@gmail.com',
    password: '123',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
  
    if (email === sampleUser.email && password === sampleUser.password) {
      localStorage.setItem('user', JSON.stringify(sampleUser));
      setLoggedInUser(sampleUser);
      navigate('/'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={SigninImage} alt="sign up" />
              </figure>
              <a href="/signup" className="signup-image-link">Create an account</a>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handleSubmit} className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="email"><FontAwesomeIcon icon={faUser} /></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="cher@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"><FontAwesomeIcon icon={faLock} /></label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Sign In" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

