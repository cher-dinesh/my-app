import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';

function ProfilePage({ loggedInUser, setLoggedInUser }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      setUserData(loggedInUser);
    }
  }, [loggedInUser, navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedInUser(userData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Profile</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="profile-card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td><label htmlFor="username">Username:</label></td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={userData.username}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="email">Email:</label></td>
                      <td>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="phoneNumber">Phone Number:</label></td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={userData.phoneNumber}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="address">Address:</label></td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={userData.address}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="password">Password:</label></td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={userData.password}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        <input type="submit" value="Save Changes" className="btn btn-primary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
