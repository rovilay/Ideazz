import axios from 'axios';

// require('dotenv').config();

const baseUrl = process.env.REACT_APP_API_URL;

class UserAPI {
    static signUpUser(userData) {
        return axios.post(`${baseUrl}/users/signup`, userData);
    }

    static logInUser(userData) {
        return axios.post(`${baseUrl}/users/signin`, userData);
    }
}

export default UserAPI;
