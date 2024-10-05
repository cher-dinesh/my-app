import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SignupImage from '../assets/signup-image.jpg';
import '../styles/login.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        cpassword: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form Data:', formData);
    };

    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signin-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form onSubmit={handleSubmit} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><FontAwesomeIcon icon={faUser} /></label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="name"
                                        placeholder="Your Name"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact"><FontAwesomeIcon icon={faPhone} /></label>
                                    <input
                                        type="text"
                                        name="phonenumber"
                                        id="contact"
                                        placeholder="Contact No"
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><FontAwesomeIcon icon={faLock} /></label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="pass"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re_pass"><FontAwesomeIcon icon={faLock} /></label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="re_pass"
                                        placeholder="Repeat your password"
                                        value={formData.cpassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address"><FontAwesomeIcon icon={faLocationDot} /></label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Your Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={SignupImage} alt="sign up" />
                            </figure>
                            <a href="login" className="signup-image-link">I am already a member</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
