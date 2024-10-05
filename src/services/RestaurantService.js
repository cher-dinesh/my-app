import axios from 'axios';

const API_URL = 'http://localhost:8080/api/restaurants';

class RestaurantService {
  getAllRestaurants() {
    return axios.get(API_URL);
  }

  getRestaurantById(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

export default new RestaurantService();
